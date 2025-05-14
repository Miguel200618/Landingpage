/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `created_at` (timestamp with timezone)
      - `name` (text)
      - `business_name` (text)
      - `email` (text)
      - `message` (text)
      - `status` (text, default: 'new')

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting new submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  business_name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new'
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);