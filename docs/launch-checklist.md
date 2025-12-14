# Launch Checklist - MacroLift Landing Page

## Pre-Launch (Before sharing publicly)

### Technical Setup

- [ ] Domain `macrolift.app` configured and pointing to Vercel
- [ ] HTTPS/SSL certificate active
- [ ] `.env.local` configured with `RESEND_API_KEY`
- [ ] Resend domain verified (macrolift.app)
- [ ] Test email subscription flow end-to-end
- [ ] Verify welcome email sends successfully
- [ ] Check all sections render correctly on mobile
- [ ] Check all sections render correctly on desktop
- [ ] Test dark mode toggle (if implemented)

### Content & Design

- [ ] All copy reviewed for typos/grammar
- [ ] Tone matches brand (direct, gym buddy, no fluff)
- [ ] Green color scheme applied consistently
- [ ] Icons render correctly (HugeIcons)
- [ ] All CTAs clearly visible
- [ ] Success/error messages tested and display correctly

### SEO & Metadata

- [ ] Page title: "MacroLift - La nutrition pour ceux qui soulèvent"
- [ ] Meta description optimized for search
- [ ] OpenGraph tags configured for social sharing
- [ ] Favicon present and renders correctly
- [ ] Robots.txt allows indexing (if created)
- [ ] Sitemap.xml generated (if needed)

### Analytics & Tracking

- [ ] Google Analytics or Plausible installed (optional for MVP)
- [ ] Email signup conversion tracking configured
- [ ] Console errors checked and resolved
- [ ] Performance tested (Lighthouse score > 90)

### Legal & Compliance

- [ ] Privacy policy page (if collecting emails - recommended)
- [ ] Terms of service (optional for waitlist)
- [ ] GDPR compliance if targeting EU (France = yes)
- [ ] Cookie consent banner (if using analytics)

---

## Launch Day

### Deployment

- [ ] Final build successful (`pnpm run build`)
- [ ] Deployed to Vercel production
- [ ] Production environment variables set in Vercel dashboard
- [ ] Production URL tested: https://macrolift.app
- [ ] Mobile responsiveness verified on real devices
- [ ] Email flow tested in production

### Social Proof Setup

- [ ] Screenshot landing page for social sharing
- [ ] Prepare OG image (1200x630px) with headline
- [ ] Save template responses for common questions
- [ ] Set up Resend email tracking/analytics

### Content Distribution

- [ ] Post 1 published on Reddit r/FrenchFitness (or equivalent)
- [ ] Post 2 published as Twitter/X thread
- [ ] Post 3 published in Facebook groups (3-5 groups)
- [ ] Share link on personal social media accounts
- [ ] Share in relevant Discord servers (if applicable)
- [ ] Consider posting on LinkedIn (professional angle)

### Monitoring

- [ ] Set up Vercel deployment notifications
- [ ] Monitor Resend dashboard for email deliverability
- [ ] Check spam folder to ensure emails don't land there
- [ ] Set up alerts for API errors (Vercel dashboard)

---

## First 24 Hours

### Engagement

- [ ] Respond to ALL comments/questions within 2 hours
- [ ] Thank everyone who signs up (manually or automated)
- [ ] Note common questions → add FAQ section if needed
- [ ] Monitor signup rate per channel (Reddit, Twitter, FB)

### Tracking

- [ ] Record # of signups per platform
- [ ] Note top traffic sources
- [ ] Track conversion rate (visitors → signups)
- [ ] Document feedback themes in separate doc

### Optimization

- [ ] Fix any bugs reported by users
- [ ] Adjust copy if confusion detected
- [ ] A/B test CTA if signup rate < 5% (optional)

---

## First Week

### Validation Metrics

- [ ] **Target**: 50+ email signups
- [ ] **Target**: > 70% positive feedback ratio
- [ ] **Target**: 10+ detailed comments with insights
- [ ] Calculate conversion rate (visitors/signups)
- [ ] Identify highest-performing channel

### User Research

- [ ] Reach out to 10-15 signups for interviews
- [ ] Use interview script in `/docs/interview-script.md`
- [ ] Document feature requests
- [ ] Identify pricing willingness patterns
- [ ] Group users into personas (beginner/advanced, bulk/cut)

### Iteration

- [ ] Update landing page copy based on feedback
- [ ] Add FAQ section if needed
- [ ] Highlight most-requested features
- [ ] Consider adding testimonials from early supporters

---

## Decision Point (End of Week 1)

### Go/No-Go Criteria

**✅ GO (Build the product):**

- 50+ signups
- Strong positive feedback (> 70%)
- Clear willingness to pay (€4.99-€9.99/month range)
- No major missing features that would require pivot

**⚠️ ITERATE (Adjust landing page):**

- 20-49 signups
- Mixed feedback (50-70% positive)
- Pricing uncertainty
- Minor adjustments needed

**🛑 PIVOT/STOP:**

- < 20 signups
- Mostly negative feedback
- No willingness to pay
- Major product pivot required

---

## Post-Launch Maintenance

### Weekly

- [ ] Check email deliverability metrics
- [ ] Respond to new signups with update (if relevant)
- [ ] Monitor for spam abuse
- [ ] Update signup count on landing page (social proof)

### Monthly

- [ ] Send update to waitlist (progress, timeline)
- [ ] Share behind-the-scenes content
- [ ] Tease upcoming features
- [ ] Keep audience warm and engaged

---

## Pre-Product Launch

### Prepare for Beta

- [ ] Segment waitlist (active vs inactive)
- [ ] Prepare onboarding email sequence
- [ ] Plan beta testing group (10-20 users)
- [ ] Set up feedback collection system
- [ ] Create beta testing guide

### Communication

- [ ] Email waitlist with beta launch date
- [ ] Highlight early-bird benefits (3 scans/day free)
- [ ] Set expectations for MVP (limited features)
- [ ] Create hype with countdown or sneak peeks
