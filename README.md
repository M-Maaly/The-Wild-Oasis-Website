# The Wild Oasis Website 🏚️

Welcome to **The Wild Oasis Website**, a modern and fast customer-facing web application for a boutique cabin hotel. This project was built as part of Jonas Schmedtmann's "Ultimate React Course" to demonstrate advanced Next.js features, including the App Router, Server Components, and Server Actions.

## 📖 Overview

The Wild Oasis is a small boutique hotel that rents out luxurious wooden cabins nestled in nature. While the internal team uses a separate React Single Page Application (SPA) dashboard to manage operations, this website is meant for the hotel's guests. Users can browse cabins, learn about the hotel, and make and manage their reservations securely.

## ✨ Key Features

- **Cabin Browsing:** Users can view a list of all available cabins, including details such as maximum capacity, price, discount, and high-quality images.
- **Reservation System:** Guests can book cabins by selecting available dates on a calendar and manage their previous and upcoming reservations.
- **User Authentication:** Secure sign-in and session management using Google OAuth (implemented with Auth.js / NextAuth v5).
- **Guest Profiles:** Authenticated guests can update their profile information, including their nationality and national ID.
- **Performance Optimized:** Uses Next.js Server Components, static rendering, dynamic rendering, and data caching strategies to ensure fast page loads and optimal SEO.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Server Components, Server Actions)
- **UI & Styling:** [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Heroicons](https://heroicons.com/)
- **Date Picker:** [React Day Picker](https://react-day-picker.js.org/) and [date-fns](https://date-fns.org/)
- **Backend & Database:** [Supabase](https://supabase.com/) (PostgreSQL)
- **Authentication:** [NextAuth.js (Auth.js v5)](https://authjs.dev/)

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Install dependencies
Run the following command in the project root:
```bash
npm install
```

### 2. Set up Environment Variables
You need to connect to a Supabase project and provide the NextAuth variables. Make sure your `.env.local` file in the root directory has the following variables filled out:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Next Auth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Google OAuth Credentials
AUTH_GOOGLE_ID=your_google_oauth_client_id
AUTH_GOOGLE_SECRET=your_google_oauth_client_secret
```

### 3. Run the Development Server
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🤝 Acknowledgments

This project is a capstone project from [The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/) taught by Jonas Schmedtmann.
