# Vercel Deployment Guide

## Prerequisites
- A [Vercel account](https://vercel.com/signup)
- A [Resend account](https://resend.com/signup) for email functionality
- Git repository (GitHub, GitLab, or Bitbucket)

## Step 1: Prepare Environment Variables

You'll need to set up the following environment variables in Vercel:

1. `RESEND_API_KEY` - Your Resend API key
2. `CONTACT_EMAIL` - The email address where contact form submissions will be sent

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your Git repository
5. Configure your project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
6. Add Environment Variables:
   - Click "Environment Variables"
   - Add `RESEND_API_KEY` with your Resend API key
   - Add `CONTACT_EMAIL` with your email address
7. Click "Deploy"

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts and add environment variables when asked
```

## Step 3: Configure Environment Variables

After deployment, you can manage environment variables:

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Environment Variables
3. Add or update:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Redeploy if needed

## Step 4: Verify Deployment

1. Visit your deployed URL
2. Test the contact form
3. Test the anonymous message feature
4. Check that all images and assets load correctly

## Troubleshooting

### Email Not Sending
- Verify `RESEND_API_KEY` is set correctly in Vercel
- Check Resend dashboard for API usage and errors
- Ensure your Resend account is verified

### Build Failures
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Environment Variables Not Working
- Make sure variables are set for the correct environment (Production/Preview/Development)
- Redeploy after adding new environment variables

## Production Checklist

- [ ] Environment variables configured
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active (automatic with Vercel)
- [ ] Contact form tested
- [ ] Anonymous message feature tested
- [ ] All pages load correctly
- [ ] Images and assets load properly

## Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (can take up to 48 hours)

## Continuous Deployment

Vercel automatically deploys:
- **Production**: Commits to your main/master branch
- **Preview**: Pull requests and other branches

Every push triggers a new deployment with a unique URL.
