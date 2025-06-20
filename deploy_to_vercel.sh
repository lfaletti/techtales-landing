#!/bin/bash

# Vercel Deployment Script for TechTales Landing Page
# Usage: ./deploy_to_vercel.sh [VERCEL_TOKEN]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== TechTales Landing Page - Vercel Deployment ===${NC}"

# Set PATH to include npm global bin
export PATH=$PATH:/home/ubuntu/.npm-global/bin

# Check if Vercel CLI is available
if ! command -v vercel &> /dev/null; then
    echo -e "${RED}Error: Vercel CLI not found. Please install it first.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Vercel CLI found: $(vercel --version)${NC}"

# Navigate to the app directory
cd /home/ubuntu/techtales-landing/app

echo -e "${YELLOW}📁 Working directory: $(pwd)${NC}"

# Check if VERCEL_TOKEN is provided
if [ -z "$1" ] && [ -z "$VERCEL_TOKEN" ]; then
    echo -e "${YELLOW}⚠️  No Vercel token provided.${NC}"
    echo -e "${YELLOW}Please provide your Vercel token in one of these ways:${NC}"
    echo "1. As an argument: ./deploy_to_vercel.sh YOUR_TOKEN"
    echo "2. As an environment variable: export VERCEL_TOKEN=YOUR_TOKEN"
    echo ""
    echo -e "${YELLOW}To get a token:${NC}"
    echo "1. Go to https://vercel.com/account/tokens"
    echo "2. Create a new token"
    echo "3. Copy the token and use it with this script"
    echo ""
    echo -e "${YELLOW}Attempting deployment without token (will require browser authentication)...${NC}"
    
    # Try deployment without token
    echo -e "${GREEN}🚀 Starting Vercel deployment...${NC}"
    vercel deploy --prod --yes 2>&1 | tee /tmp/vercel_deployment.log
    
else
    # Use provided token
    if [ -n "$1" ]; then
        export VERCEL_TOKEN="$1"
    fi
    
    echo -e "${GREEN}✓ Vercel token provided${NC}"
    
    # Deploy with token
    echo -e "${GREEN}🚀 Starting automated Vercel deployment...${NC}"
    
    # Link the project (creates .vercel directory)
    echo -e "${YELLOW}🔗 Linking project to Vercel...${NC}"
    vercel link --yes --token "$VERCEL_TOKEN" 2>&1 | tee /tmp/vercel_link.log
    
    # Deploy to production
    echo -e "${YELLOW}📦 Deploying to production...${NC}"
    vercel deploy --prod --confirm --token "$VERCEL_TOKEN" 2>&1 | tee /tmp/vercel_deployment.log
fi

# Extract deployment URL from the output
echo -e "${GREEN}📋 Extracting deployment information...${NC}"

# Look for the deployment URL in the output
DEPLOYMENT_URL=$(grep -oE 'https://[a-zA-Z0-9.-]+\.vercel\.app' /tmp/vercel_deployment.log | tail -1)

if [ -n "$DEPLOYMENT_URL" ]; then
    echo -e "${GREEN}🎉 Deployment successful!${NC}"
    echo -e "${GREEN}🌐 Your site is live at: ${DEPLOYMENT_URL}${NC}"
    echo ""
    echo -e "${YELLOW}📊 Deployment Summary:${NC}"
    echo "• Project: TechTales Landing Page"
    echo "• Framework: Next.js"
    echo "• URL: $DEPLOYMENT_URL"
    echo "• Status: Live"
    echo ""
    
    # Save deployment info to file
    cat > /tmp/deployment_info.txt << EOF
TechTales Landing Page - Deployment Information
==============================================
Deployment URL: $DEPLOYMENT_URL
Deployment Time: $(date)
Project Path: /home/ubuntu/techtales-landing/app
Framework: Next.js
Status: Successfully Deployed

Logs:
- Link log: /tmp/vercel_link.log
- Deployment log: /tmp/vercel_deployment.log
EOF
    
    echo -e "${GREEN}💾 Deployment info saved to: /tmp/deployment_info.txt${NC}"
    
else
    echo -e "${RED}❌ Could not extract deployment URL from output${NC}"
    echo -e "${YELLOW}📋 Please check the deployment logs:${NC}"
    echo "• Link log: /tmp/vercel_link.log"
    echo "• Deployment log: /tmp/vercel_deployment.log"
    
    echo -e "${YELLOW}📄 Last 10 lines of deployment log:${NC}"
    tail -10 /tmp/vercel_deployment.log
fi

echo -e "${GREEN}=== Deployment process completed ===${NC}"
