# Real Estate Feedback App

A mobile-responsive survey application for collecting professional feedback on the property at **3561 W Dublin St, Chandler, AZ 85226**.

## Features

- **Welcome Screen**: Displays property image and address
- **9-Question Survey**: One question at a time with professional input fields
- **Summary Screen**: Review all answers before submission
- **Thank You Screen**: Professional closing message
- **Data Persistence**: Saves responses to Supabase database
- **Mobile-Optimized**: Designed for real estate agents using iPhones/Androids
- **URL Parameters**: Supports personalized tracking via `?name=John_Smith&brokerage=HomeSmart`

## Tech Stack

- **Frontend**: React with Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL database)
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your Supabase credentials:
     ```
     VITE_SUPABASE_URL=your_supabase_project_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```
   - See `DEPLOYMENT.md` for detailed setup instructions

### Running the Application

1. Start the React development server:
```bash
npm run dev
```
This will start the Vite dev server on `http://localhost:3000`

2. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── WelcomeScreen.jsx
│   │   ├── Question1_PriceBracket.jsx
│   │   ├── Question2_Feature.jsx
│   │   ├── Question3_Budget.jsx
│   │   ├── Question4_Rating.jsx
│   │   ├── Question5_Factors.jsx
│   │   ├── Question6_SystemBudget.jsx
│   │   ├── Question7_Appraisal.jsx
│   │   ├── Question8_Comparison.jsx
│   │   ├── Question9_Trigger.jsx
│   │   ├── SummaryScreen.jsx
│   │   └── ThankYouScreen.jsx
│   ├── utils/
│   │   ├── api.js      # API utility functions (Supabase)
│   │   └── supabase.js # Supabase client configuration
│   ├── App.jsx         # Main app component
│   ├── index.jsx       # React entry point
│   └── index.css       # Tailwind CSS imports
├── supabase-setup.sql  # Database setup SQL script
├── DEPLOYMENT.md       # Deployment guide for Vercel
├── vercel.json         # Vercel configuration
└── package.json
```

## Survey Questions

1. **Price Bracket**: Radio buttons ($651k-$700k down to $451k-$500k)
2. **Most Valuable Feature**: Text area
3. **Modern Turn-Key Budget**: Currency input
4. **Value for Dollar Rating**: 1-5 star rating ($680k range)
5. **Factors Preventing Offer**: Text area
6. **System Update Budget**: Currency input (Reference: 2017 AC)
7. **Appraisal Confidence**: Radio buttons (Very, Somewhat, Appraisal Gap)
8. **Comparison to Listings**: Radio buttons ($675k-$690k active listings)
9. **Offer Trigger Price**: Currency input (for multiple offers in 7 days)

## Replacing the Property Photo

To replace the placeholder image:

1. Add your professional property photo to the `public/` folder
2. Update the image source in `src/components/WelcomeScreen.jsx`:
   ```jsx
   <img 
     src="/your-photo-filename.jpg" 
     alt="3561 W Dublin St, Chandler, AZ 85226"
     className="w-full h-full object-cover"
   />
   ```

## Data Storage

Survey responses are saved to Supabase (PostgreSQL database). Each response includes:
- Timestamp
- Surveyor name and company (from URL params or manual entry)
- All 9 question answers
- Unique ID

To view saved responses:
- Access your Supabase dashboard → Table Editor → responses table
- Or use the AdminReport component in your app

## Deployment

This app is configured for deployment on Vercel with Supabase. See `DEPLOYMENT.md` for complete step-by-step instructions.

## Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## Design Features

- Professional realtor-branded color scheme (navy blues and grays)
- Mobile-first responsive design
- Touch-optimized inputs and buttons
- Smooth transitions between screens
- Clean, high-end UI suitable for professional use
