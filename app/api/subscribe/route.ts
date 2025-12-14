import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rate limiting (simple in-memory, consider Redis for production)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3; // 3 requests per minute per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Trop de tentatives. Réessaie dans une minute." },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { email } = body;

    // Validate email presence
    if (!email) {
      return NextResponse.json(
        { error: "L'email est requis" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    // Send welcome email via Resend
    const { data, error } = await resend.emails.send({
      from: "MacroLift <onboarding@macrolift.app>",
      to: email,
      subject: "🎉 T'es sur la liste! - MacroLift",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

                  <!-- Header avec couleur verte -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold;">
                        🎉 Bienvenue sur la liste!
                      </h1>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 24px; font-weight: 600;">
                        Salut champion! 💪
                      </h2>

                      <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                        Content de te voir rejoindre la waiting list de <strong style="color: #10b981;">MacroLift</strong>!
                      </p>

                      <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                        Tu fais maintenant partie des premiers à découvrir l'app de nutrition faite pour la <strong>prise de masse</strong>, pas pour maigrir.
                      </p>

                      <!-- Boîte info verte -->
                      <div style="background-color: #d1fae5; border-left: 4px solid #10b981; padding: 20px; margin: 30px 0; border-radius: 8px;">
                        <p style="margin: 0 0 10px 0; color: #065f46; font-weight: 600; font-size: 16px;">
                          🎁 Ton accès early bird inclut:
                        </p>
                        <ul style="margin: 10px 0 0 0; padding-left: 20px; color: #065f46;">
                          <li style="margin-bottom: 8px;">
                            <strong>3 scans gratuits par jour</strong> au lancement
                          </li>
                          <li style="margin-bottom: 8px;">
                            Accès prioritaire à la beta
                          </li>
                          <li style="margin-bottom: 8px;">
                            Ton avis comptera pour façonner l'app
                          </li>
                        </ul>
                      </div>

                      <h3 style="margin: 30px 0 15px 0; color: #1f2937; font-size: 20px; font-weight: 600;">
                        Et maintenant?
                      </h3>

                      <p style="margin: 0 0 15px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                        On bosse sur l'app et on te tiendra au courant de l'avancement. Dès qu'on sera prêts pour le lancement, tu seras le premier prévenu.
                      </p>

                      <p style="margin: 0 0 30px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                        En attendant, prépare-toi à tracker tes macros <strong>sans te prendre la tête</strong>.
                      </p>

                      <!-- CTA Button -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" style="padding: 20px 0;">
                            <a href="https://macrolift.app" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
                              Voir la landing page
                            </a>
                          </td>
                        </tr>
                      </table>

                      <p style="margin: 30px 0 0 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
                        À très bientôt,<br>
                        <strong style="color: #10b981;">L'équipe MacroLift</strong>
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0; color: #9ca3af; font-size: 14px;">
                        Tu reçois cet email car tu t'es inscrit sur <a href="https://macrolift.app" style="color: #10b981; text-decoration: none;">macrolift.app</a>
                      </p>
                      <p style="margin: 10px 0 0 0; color: #9ca3af; font-size: 12px;">
                        MacroLift - La nutrition pour ceux qui soulèvent
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'inscription. Réessaie." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Inscription réussie!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscribe API error:", error);
    return NextResponse.json(
      { error: "Une erreur s'est produite" },
      { status: 500 }
    );
  }
}
