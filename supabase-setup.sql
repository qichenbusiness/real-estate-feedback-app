-- Supabase Database Setup Script
-- Run this in your Supabase SQL Editor to create the responses table

-- Create the responses table
-- Using snake_case for SQL (standard practice)
CREATE TABLE IF NOT EXISTS responses (
  id BIGSERIAL PRIMARY KEY,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  surveyor_name TEXT,
  company TEXT,
  q1_price_bracket TEXT,
  q2_valuable_feature TEXT,
  q3_turn_key_budget NUMERIC,
  q4_value_rating INTEGER,
  q5_preventing_factors TEXT,
  q6_system_budget NUMERIC,
  q7_appraisal_confidence TEXT,
  q8_listing_comparison TEXT,
  q9_offer_trigger_price NUMERIC,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE responses ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to INSERT (for survey submissions)
CREATE POLICY "Allow public insert on responses"
  ON responses
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create a policy that allows anyone to SELECT (for admin report)
-- In production, you might want to restrict this to authenticated users only
CREATE POLICY "Allow public select on responses"
  ON responses
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create an index on timestamp for faster queries
CREATE INDEX IF NOT EXISTS idx_responses_timestamp ON responses(timestamp DESC);
