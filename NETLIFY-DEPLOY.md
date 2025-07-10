# Netlify Deployment Guide

This guide will help you deploy your Next.js application to Netlify from a Git repository.

## Prerequisites

- A Git repository (GitHub, GitLab, or Bitbucket) containing your Next.js project
- A Netlify account (sign up at [netlify.com](https://app.netlify.com/signup))

## Setup Steps

1. **Push your code to Git**

   Make sure all your changes are committed and pushed to your Git repository:

   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push
   ```

2. **Connect to Netlify**

   - Log in to your Netlify account at [app.netlify.com](https://app.netlify.com)
   - Click the "New site from Git" button
   - Select your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize Netlify to access your repositories
   - Select your repository from the list

3. **Configure Build Settings**

   Netlify should automatically detect that this is a Next.js project and pre-fill most settings:

   - **Branch to deploy**: `main` (or your default branch)
   - **Build command**: `npm run build` (pre-filled)
   - **Publish directory**: `.next` (pre-filled)

   Click "Deploy site" to start the deployment process.

4. **Wait for Deployment**

   Netlify will now:
   - Clone your repository
   - Install dependencies
   - Build your Next.js application
   - Deploy the site to their CDN

5. **Access Your Site**

   Once the deployment is complete, Netlify will provide you with a URL where your site is accessible (e.g., `https://your-site-name.netlify.app`).

## Custom Domain Setup (Optional)

To use a custom domain:

1. Go to "Site settings" > "Domain management"
2. Click "Add custom domain"
3. Follow the instructions to configure your domain's DNS settings

## Continuous Deployment

Netlify automatically sets up continuous deployment. Any changes pushed to your main branch will trigger a new build and deployment.

## Environment Variables (If Needed)

If your application requires environment variables:

1. Go to "Site settings" > "Build & deploy" > "Environment"
2. Add your environment variables

## Troubleshooting

If you encounter any issues during deployment:

1. Check the build logs in Netlify for specific errors
2. Ensure your Next.js configuration is compatible with static export
3. Verify that all required dependencies are listed in your package.json

For more detailed information, refer to the [Netlify documentation](https://docs.netlify.com/) and [Next.js deployment documentation](https://nextjs.org/docs/deployment). 