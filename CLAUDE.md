# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MacroLift is a Next.js 16 application built with React 19, TypeScript, and Tailwind CSS 4. The project uses the App Router architecture and integrates shadcn/ui components with the Radix Nova design system.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

This project uses **pnpm** as the package manager (as evidenced by pnpm-lock.yaml).

## Architecture

### UI Component System

The project uses a hybrid UI approach:

- **shadcn/ui**: Component library configured with `components.json` using the "radix-nova" style
- **@base-ui/react**: Base UI primitives from Base UI
- **Radix UI**: Low-level UI primitives (via radix-ui package)
- **Hugeicons**: Icon system via `@hugeicons/react` and `@hugeicons/core-free-icons`

### Styling Architecture

- **Tailwind CSS 4**: Uses the new `@import` syntax and `@theme inline` configuration
- **CSS Variables**: Extensive use of CSS custom properties for theming (OKLCH color space)
- **Dark Mode**: Implemented via `.dark` class with full theme variable support
- **Animation**: Uses `tw-animate-css` library for animations
- Custom variant: `@custom-variant dark (&:is(.dark *))` for dark mode styling

### Path Aliases

Configured in both `tsconfig.json` and `components.json`:

- `@/*`: Maps to project root
- `@/components`: Components directory
- `@/components/ui`: UI components directory
- `@/lib`: Utility libraries
- `@/lib/utils`: Contains the `cn()` utility for className merging
- `@/hooks`: React hooks directory

### Font System

The app uses three font families loaded via `next/font/google`:

- **Figtree**: Main sans-serif font (`--font-sans`)
- **Geist Sans**: Alternative sans-serif (`--font-geist-sans`)
- **Geist Mono**: Monospace font (`--font-geist-mono`)

Font variables are applied at the HTML and body levels in `app/layout.tsx`.

### Component Patterns

UI components follow these patterns:

- Server Components by default (App Router)
- Client Components marked with `"use client"` directive
- Component composition using compound component pattern (e.g., Card with CardHeader, CardContent, CardFooter)
- Accessibility-first with proper ARIA attributes and semantic HTML
- Class name merging via `cn()` utility (clsx + tailwind-merge)

### Code Style

- **TypeScript**: Strict mode enabled with ES2017 target
- **JSX**: Uses `react-jsx` transform (no React import needed)
- **Module System**: ESNext with bundler resolution
- **ESLint**: Configured with Next.js core-web-vitals and TypeScript presets

## Key Files

- `app/layout.tsx`: Root layout with font configuration and metadata
- `app/page.tsx`: Homepage (currently renders ComponentExample)
- `app/globals.css`: Global styles with Tailwind 4 configuration and theme variables
- `lib/utils.ts`: Utility functions including `cn()` for className merging
- `components/ui/`: shadcn/ui component directory
- `components.json`: shadcn/ui configuration

## Adding New Components

When adding shadcn/ui components, they should be:

- Placed in `components/ui/`
- Use the configured aliases (`@/components/ui`, `@/lib/utils`)
- Follow the Radix Nova design system conventions
- Use Hugeicons for iconography via `HugeiconsIcon` component
- Apply theme variables defined in `globals.css`
