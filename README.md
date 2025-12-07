# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 📧 Contact form with email integration (Resend)
- 💭 Anonymous message feature
- 🚀 Optimized for performance
- 📱 Mobile-friendly
- ⚡ Built with Next.js App Router

## Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Email Service**: Resend
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

4. Add your environment variables to `.env.local`:
   - `RESEND_API_KEY`: Your Resend API key
   - `CONTACT_EMAIL`: Email address for receiving contact form submissions

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the production application:

```bash
npm run build
```

### Production

Run the production server:

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── api/              # API routes
│   │   ├── contact/      # Contact form endpoint
│   │   └── anonymous/    # Anonymous message endpoint
│   ├── components/       # React components
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
├── .env.local           # Environment variables (not in git)
├── .env.example         # Environment variables template
└── vercel.json          # Vercel configuration

```

## Environment Variables

Required environment variables:

- `RESEND_API_KEY` - API key from [Resend](https://resend.com)
- `CONTACT_EMAIL` - Email address to receive contact form submissions

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Quick Deploy Steps:

1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in [Vercel Dashboard](https://vercel.com/dashboard)
3. Add environment variables (`RESEND_API_KEY`, `CONTACT_EMAIL`)
4. Deploy!

## License

MIT

## Contact

For any questions or feedback, feel free to reach out through the contact form on the website.
