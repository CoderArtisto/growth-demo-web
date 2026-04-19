

# IvoryEdge Dental Studio — Premium Multi-Page Website

## Overview
A luxury dental clinic website with 4+ pages, smooth animations, booking system, click-to-call, and AI chatbot. Light premium palette (white, soft gold, light grey). Conversion-focused with modern micro-interactions.

## Color & Design System
- **Primary**: Soft gold (#C9A96E) for accents and CTAs
- **Background**: White (#FFFFFF) with off-white sections (#FAF9F6)
- **Text**: Deep charcoal (#1A1A1A) with muted grey (#6B6B6B) for secondary
- **Accent**: Light grey (#F0EEEB) for cards, glassmorphism with subtle shadows
- **Typography**: Clean sans-serif (Inter for body, Playfair Display for headings to add elegance)

## Pages & Structure

### 1. Home Page
- **Hero**: Full-width section with headline "Design Your Perfect Smile with Advanced Dental Care", trust-focused subtext, dual CTAs (Book Appointment + Call Now), parallax background effect
- **Services Preview**: 4-6 interactive cards with hover lift animations and gold accent icons
- **Before/After Slider**: Drag-to-compare smile transformation component
- **Testimonials**: 4 realistic reviews in a carousel with soft fade transitions
- **Doctor Highlight**: Dr. Aryan Mehta feature section with credentials and trust badges
- **CTA Banner**: Full-width booking prompt with gold gradient accent
- **Footer**: Contact info, location (Saket, South Delhi), quick links, social icons

### 2. About Us Page
- Clinic story with premium positioning narrative
- Dr. Aryan Mehta profile (12+ years, cosmetic dentistry & smile design, qualifications)
- Clinic philosophy section (comfort, hygiene, advanced tech)
- Image placeholders throughout with elegant spacing

### 3. Services Page
- 8 service cards with icons, benefit-focused descriptions, and expand-on-click interactions:
  - Dental Consultation, Teeth Cleaning, Fillings, Root Canal, Implants, Braces & Aligners, Whitening, Extraction
- Each card: icon, short explanation, benefits, hover animation

### 4. Appointment Booking Page
- Calendar-based date picker
- Time slot selection grid
- Form: name, phone, service dropdown
- Confirmation message/modal after submission

### 5. Contact Page
- Location map placeholder, phone, email, address
- Contact form

## Core Features
- **Sticky Navigation**: Minimal navbar with smooth scroll, active page indicator, mobile hamburger menu
- **Floating Click-to-Call**: Fixed button that opens phone dialer
- **AI Chatbot**: Bottom-right chat widget powered by Lovable AI (answers FAQs about pricing, pain concerns, appointments, treatment duration) with friendly conversational tone
- **Smooth Animations**: Fade-in on scroll, parallax hero, hover micro-interactions on all cards/buttons, page transitions
- **Smile Preview Section**: Conceptual AI feature placeholder on home page
- **Mobile Responsive**: All pages fully responsive with optimized layouts

## Technical Approach
- React Router for multi-page navigation
- Framer Motion for animations and page transitions
- Tailwind CSS for styling with custom gold/premium palette
- Lovable Cloud edge function + Lovable AI for the chatbot
- shadcn/ui components as base (cards, calendar, forms, dialogs)

