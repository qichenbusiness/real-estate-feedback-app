# Deployment Guide: Real Estate Feedback App

This guide will walk you through deploying your Real Estate Feedback App to Vercel with Supabase as the database.

## Step 1: Set Up Supabase Database

1. **Create a Supabase Account**
   - Go to [supabase.com](https://supabase.com)
   - Sign up for a free account (or sign in if you already have one)
   - Click "New Project"

2. **Create a New Project**
   - Enter a project name (e.g., "real-estate-feedback")
   - Enter a database password (save this securely)
   - Select a region closest to you
   - Click "Create new project"
   - Wait 2-3 minutes for the project to initialize

3. **Create the Database Table**
   - In your Supabase dashboard, click "SQL Editor" in the left sidebar
   - Click "New query"
   - Copy and paste the entire contents of `supabase-setup.sql` from this project
   - Click "Run" (or press Ctrl/Cmd + Enter)
   - You should see "Success. No rows returned"

4. **Get Your Supabase Credentials**
   - In the Supabase dashboard, click "Settings" (gear icon) in the left sidebar
   - Click "API" under Project Settings
   - Copy the following:
     - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
     - **anon public** key (a long string under "Project API keys")

## Step 2: Push Code to GitHub

1. **Initialize Git Repository** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Real Estate Feedback App"
   ```

2. **Create a GitHub Repository**
   - Go to [github.com](https://github.com)
   - Click the "+" icon in the top right → "New repository"
   - Name it (e.g., "real-estate-feedback-app")
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

3. **Push Your Code to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Step 3: Deploy to Vercel

1. **Sign Up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub account

2. **Import Your Project**
   - In the Vercel dashboard, click "Add New..." → "Project"
   - You should see your GitHub repository listed
   - Click "Import" next to your repository

3. **Configure Environment Variables**
   - In the "Configure Project" screen, scroll down to "Environment Variables"
   - Add the following two variables:
   
     **Variable 1:**
     - Name: `VITE_SUPABASE_URL`
     - Value: Your Supabase Project URL (from Step 1.4)
     - Environment: Production, Preview, and Development (check all three)
   
     **Variable 2:**
     - Name: `VITE_SUPABASE_ANON_KEY`
     - Value: Your Supabase anon public key (from Step 1.4)
     - Environment: Production, Preview, and Development (check all three)
   
   - Click "Save" after adding each variable

4. **Deploy**
   - Leave all other settings as default
   - Click "Deploy"
   - Wait 1-2 minutes for the build to complete

5. **Get Your Live URL**
   - Once deployment is complete, Vercel will show you a URL like:
     `https://your-app-name.vercel.app`
   - Click "Visit" to see your live app
   - **This is the URL you can email to John Smith!**

## Step 4: Test Your Deployment

1. **Test the Survey**
   - Open your live URL
   - Complete the survey to verify it saves to Supabase
   - Try with URL parameters: `?name=John_Smith&brokerage=HomeSmart`

2. **Verify Data in Supabase**
   - Go back to your Supabase dashboard
   - Click "Table Editor" in the left sidebar
   - Click on the "responses" table
   - You should see your test submission

3. **Test Admin Report** (if you've set up a route for it)
   - Navigate to your admin report page
   - Verify it displays all responses

## Step 5: Create Personalized Email Links

Now you can create personalized links for your mass emails:

**Template:**
```
https://your-app-name.vercel.app/?name=FIRSTNAME_LASTNAME&brokerage=COMPANY_NAME
```

**Example for John Smith at HomeSmart:**
```
https://your-app-name.vercel.app/?name=John_Smith&brokerage=HomeSmart
```

**Notes:**
- Replace spaces with underscores (`_`) in names and company names
- Special characters will be automatically handled by URL encoding
- If a brokerage name is missing, you can omit it: `?name=John_Smith`

## Troubleshooting

### Build Fails on Vercel
- Check that all environment variables are set correctly
- Verify your Supabase credentials are correct
- Check the build logs in Vercel for specific error messages

### Survey Responses Not Saving
- Verify your Supabase RLS policies are set correctly (run the SQL script again)
- Check browser console for errors
- Verify environment variables are set in Vercel

### Cannot Access Supabase from Vercel
- Make sure you're using the correct Supabase URL (should end in `.supabase.co`)
- Verify the anon key is the public one, not the service_role key
- Check Supabase project is not paused (free tier projects pause after inactivity)

## Next Steps

- Bookmark your Supabase dashboard to view responses
- Set up email notifications (optional) using Supabase webhooks
- Customize the app further as needed

Your app is now live and ready to collect feedback from real estate agents!
