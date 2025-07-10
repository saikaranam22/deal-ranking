# Deal Ranking

A Next.js application for deal ranking and management.

## Local Development

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to Netlify

This project is configured for automatic deployment to Netlify from Git.

### Setup Instructions

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to [Netlify](https://app.netlify.com/)
3. Click "New site from Git"
4. Select your Git provider and authorize Netlify
5. Select your repository
6. Configure build settings:
   - Build command: `npm run build` (should be pre-filled)
   - Publish directory: `.next` (should be pre-filled)
7. Click "Deploy site"

### Continuous Deployment

Once set up, Netlify will automatically deploy your site whenever you push changes to your Git repository. The deployment process includes:

1. Pulling your latest code
2. Installing dependencies
3. Building the application
4. Deploying the built files

### Environment Variables

If your application requires environment variables, you can configure them in the Netlify dashboard:

1. Go to Site settings > Build & deploy > Environment
2. Add the required environment variables

## Project Structure

- `app/`: Next.js app router components and pages
- `components/`: Reusable React components
- `public/`: Static assets
