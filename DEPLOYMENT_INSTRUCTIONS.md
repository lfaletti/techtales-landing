# TechTales Landing Page - Vercel Deployment Instructions

## Current Status
✅ Repository cloned: `https://github.com/lfaletti/techtales-landing/`
✅ Vercel CLI installed and configured
✅ Next.js project detected in `/app` directory
✅ Deployment script created and ready

## Option 1: Quick Deployment with Token (Recommended)

### Step 1: Get Your Vercel Token
1. Complete the GitHub login in the browser (currently open)
2. Go to: https://vercel.com/account/tokens
3. Click "Create Token"
4. Give it a name (e.g., "TechTales Deployment")
5. Copy the generated token

### Step 2: Deploy with Token
```bash
cd /home/ubuntu/techtales-landing
./deploy_to_vercel.sh YOUR_VERCEL_TOKEN_HERE
```

## Option 2: Browser Authentication

### Step 1: Complete GitHub Login
1. Sign in to GitHub in the browser (currently open)
2. Authorize Vercel to access your GitHub account
3. You'll get a verification code

### Step 2: Complete CLI Authentication
```bash
cd /home/ubuntu/techtales-landing/app
export PATH=$PATH:/home/ubuntu/.npm-global/bin
vercel login
# Enter the verification code when prompted
```

### Step 3: Deploy
```bash
cd /home/ubuntu/techtales-landing
./deploy_to_vercel.sh
```

## What the Deployment Script Does

1. **Verifies Prerequisites**: Checks that Vercel CLI is installed
2. **Links Project**: Connects your local project to Vercel
3. **Builds & Deploys**: Automatically builds and deploys to production
4. **Extracts URL**: Captures the deployment URL from the output
5. **Provides Summary**: Shows deployment information and logs

## Expected Output

After successful deployment, you'll see:
```
🎉 Deployment successful!
🌐 Your site is live at: https://your-project-name.vercel.app
```

## Project Details

- **Framework**: Next.js 14.2.28
- **Source**: `/home/ubuntu/techtales-landing/app`
- **Build Output**: Automatically handled by Vercel
- **Domain**: Will be auto-generated (e.g., `techtales-landing-xyz.vercel.app`)

## Troubleshooting

If deployment fails:
1. Check logs in `/tmp/vercel_deployment.log`
2. Ensure you're authenticated: `vercel whoami`
3. Verify project structure: `ls -la /home/ubuntu/techtales-landing/app`

## Next Steps After Deployment

1. **Custom Domain**: Add your own domain in Vercel dashboard
2. **Environment Variables**: Configure any needed env vars
3. **Analytics**: Enable Vercel Analytics if desired
4. **Monitoring**: Set up deployment notifications

---

**Ready to deploy?** Choose Option 1 for fastest results!
