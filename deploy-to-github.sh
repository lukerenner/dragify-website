#!/bin/bash

# Dragify Website - GitHub Deployment Script
# This script will push your site to GitHub after you create the repository

echo "🚀 Dragify Website - GitHub Deployment"
echo "========================================"
echo ""

# Repository URL
REPO_URL="https://github.com/lukerenner/dragify-website.git"

echo "📋 Pre-deployment checklist:"
echo "  ✅ Git repository initialized"
echo "  ✅ All files committed"
echo "  ✅ Build tested successfully"
echo ""

# Check if remote already exists
if git remote get-url origin &> /dev/null; then
    echo "⚠️  Remote 'origin' already exists. Updating URL..."
    git remote set-url origin "$REPO_URL"
else
    echo "🔗 Adding remote repository..."
    git remote add origin "$REPO_URL"
fi

echo ""
echo "🌿 Setting main branch..."
git branch -M main

echo ""
echo "📤 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! Your site has been pushed to GitHub!"
    echo ""
    echo "📍 Next steps:"
    echo "   1. Go to: https://github.com/lukerenner/dragify-website"
    echo "   2. Click Settings → Pages"
    echo "   3. Set Source to: GitHub Actions"
    echo "   4. Wait a few minutes for deployment"
    echo "   5. Your site will be live at: https://lukerenner.github.io/dragify-website/"
    echo ""
    echo "🎉 Done!"
else
    echo ""
    echo "❌ Push failed. Make sure you've created the repository on GitHub first:"
    echo "   https://github.com/new"
    echo ""
    echo "   Repository name: dragify-website"
    echo "   Visibility: Public"
    echo "   Do NOT initialize with README, .gitignore, or license"
fi
