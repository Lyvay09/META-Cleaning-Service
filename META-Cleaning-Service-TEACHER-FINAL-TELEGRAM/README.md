# META Cleaning Service Website

Teacher-focused website project for META Cleaning Service.

## Requirements covered
- React.js frontend
- Supabase backend
- Public website:
  - Home
  - About
  - Services
  - Contact
- Admin dashboard
- Authentication:
  - Login
  - Register
  - Forgot / Reset Password
- CRUD operation:
  - Service management
  - Service image upload
- Real company branding, contact details, company profile photos
- No service prices
- No opening / closing hours

## Run
```powershell
npm.cmd install
npm.cmd run dev
```

## Supabase
1. Copy `.env.example` to `.env.local`.
2. Add your Supabase project URL and publishable key.
3. Run `supabase/schema.sql`.
4. Create a public Storage bucket named `service-images` for service photos.
5. Register a user through the website, then sign in to `/admin`.

## Company information used from the supplied profile
- META Cleaning Service
- +855 12 428 926
- 010 364 289 / 012 428 926
- infomcs2023@gmail.com
- Facebook: Cleaning Services-META
- #104, St. Betong, Phum Kbal Damrei 1, Sangkat Kakab, Khan Por Sen Chey, Phnom Penh
- Mission and vision copy is based on the supplied company profile.
- Service categories are based on the supplied company profile.

## Telegram
Customer contact now includes a Telegram button linking to the META contact number: https://t.me/+85512428926.
