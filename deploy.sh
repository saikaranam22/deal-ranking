#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=== Deal Ranking - Netlify Deployment Script ===${NC}"
echo -e "${YELLOW}This script will help you deploy your Next.js application to Netlify${NC}"
echo ""

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo -e "${YELLOW}Git is not installed. Please install Git and try again.${NC}"
    exit 1
fi

# Check if the current directory is a Git repository
if [ ! -d .git ]; then
    echo -e "${YELLOW}This directory is not a Git repository.${NC}"
    echo -e "${YELLOW}Initializing Git repository...${NC}"
    git init
    echo -e "${GREEN}Git repository initialized.${NC}"
fi

# Check if netlify-cli is installed
if ! command -v netlify &> /dev/null; then
    echo -e "${YELLOW}Netlify CLI is not installed. Installing...${NC}"
    npm install -g netlify-cli
    echo -e "${GREEN}Netlify CLI installed.${NC}"
fi

# Build the application
echo -e "${YELLOW}Building the application...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${YELLOW}Build failed. Please fix the errors and try again.${NC}"
    exit 1
fi
echo -e "${GREEN}Build completed successfully.${NC}"

# Commit changes
echo -e "${YELLOW}Committing changes...${NC}"
git add .
git commit -m "Prepare for Netlify deployment"
if [ $? -ne 0 ]; then
    echo -e "${YELLOW}Commit failed. You may need to configure Git:${NC}"
    echo "git config --global user.email \"you@example.com\""
    echo "git config --global user.name \"Your Name\""
    exit 1
fi
echo -e "${GREEN}Changes committed.${NC}"

# Push changes if remote exists
if git remote -v | grep origin > /dev/null; then
    echo -e "${YELLOW}Pushing changes to remote repository...${NC}"
    git push
    echo -e "${GREEN}Changes pushed to remote repository.${NC}"
else
    echo -e "${YELLOW}No remote repository found.${NC}"
    echo -e "${YELLOW}Please add a remote repository:${NC}"
    echo "git remote add origin <repository-url>"
    echo "git push -u origin main"
fi

# Deploy to Netlify
echo -e "${YELLOW}Would you like to deploy to Netlify now? (y/n)${NC}"
read -r deploy_now

if [[ $deploy_now =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}Deploying to Netlify...${NC}"
    netlify deploy --prod
    echo -e "${GREEN}Deployment completed.${NC}"
else
    echo -e "${YELLOW}To deploy manually, follow these steps:${NC}"
    echo "1. Go to https://app.netlify.com/"
    echo "2. Click 'New site from Git'"
    echo "3. Select your repository and follow the instructions"
fi

echo -e "${GREEN}Deployment setup complete!${NC}"
echo -e "${YELLOW}For more information, see NETLIFY-DEPLOY.md${NC}" 