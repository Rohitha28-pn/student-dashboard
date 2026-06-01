# Student Dashboard

A responsive student learning dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js App Router
- TypeScript
- Supabase
- Tailwind CSS
- Framer Motion

## Architecture

### Server Components
- app/page.tsx
- Fetches course data from Supabase on the server

### Client Components
- Sidebar
- BentoGrid
- CourseCard

Used client components for animations and interactions.

## Features

- Responsive dashboard layout
- Animated sidebar navigation
- Dynamic course cards
- Supabase data fetching
- Progress bar animations
- Loading states

## Challenges Faced

- Supabase environment variable configuration
- App Router component structure
- Vercel deployment configuration
- Dynamic icon rendering

## Environment Variables

Create a `.env.local` file:

NEXT_PUBLIC_SUPABASE_URL=https://nzgubzwcahigoebujztq.supabase.co

NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_KNQIkAuCb68-0EyOjszrHA_ESvuEFIz