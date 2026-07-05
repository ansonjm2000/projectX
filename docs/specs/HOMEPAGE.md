# Homepage Specification

Version: 1.0

Status: Approved

Owner: Founder

---

# 1. Objective

The homepage is the first impression of the product.

Its purpose is to:

- Build trust immediately.
- Explain what the website does.
- Show available referral offers.
- Encourage visitors to visit a company page or immediately claim an offer.

A first-time visitor should understand the website within 5 seconds.

---

# 2. Target Audience

Primary Audience

- Users in India
- Looking for working referral codes
- Searching from Google
- Mobile-first users
- Interested in signup rewards

Typical search terms

- Rentomojo referral code
- Urban Company referral code
- Working referral code
- Referral bonus

---

# 3. User Goals

Visitors want answers to these questions:

- Is this referral code genuine?
- Does it still work?
- How much benefit do I get?
- How do I use it?
- Can I trust this website?

The homepage should answer these questions visually before requiring users to scroll.

---

# 4. Design Philosophy

The homepage should feel:

- Premium
- Minimal
- Professional
- Trustworthy
- Fast

It should not resemble a coupon website.

Avoid:

- Flashy colors
- Popups
- Auto-playing animations
- Large advertisements
- Countdown timers
- Fake urgency

The overall feel should be closer to:

- Stripe
- Notion
- Vercel
- Linear

---

# 5. Homepage Structure

The homepage should contain the following sections in this exact order.

1. Navigation
2. Hero
3. Trust Indicators
4. Featured Referral Offers
5. How It Works
6. FAQ
7. Footer

---

# 6. Navigation

Contents:

- Logo
- Home
- About
- Contact

Requirements

- Sticky navigation
- Clean background
- Responsive
- Mobile hamburger menu

No search bar.

No login.

No account menu.

---

# 7. Hero Section

Headline

Verified Referral Codes for India's Most Popular Apps

Subheading

Find genuine referral codes, easy redemption steps, and signup benefits in one place.

Primary CTA

Browse Offers

Secondary CTA

Learn More

The hero should occupy approximately one screen height on desktop.

---

# 8. Trust Indicators

Display four trust cards.

Card 1

Verified Information

Card 2

Updated Regularly

Card 3

No Spam

Card 4

Simple Redemption

Each card should contain:

- Icon
- Title
- One-line description

---

# 9. Featured Referral Offers

Initially display only two companies.

- Rentomojo
- Urban Company

Each card contains:

- Company logo
- Company name
- Referral benefit
- Referral code
- Last verified date
- Copy Code button
- Claim Bonus button
- View Details button

Button Behaviour

Copy Code

Copies referral code.

Shows success toast.

Claim Bonus

Copies referral code.

Immediately opens referral link.

View Details

Navigates to company page.

---

# 10. How It Works

Display four simple steps.

1. Choose an offer.

2. Copy the referral code.

3. Sign up using the referral.

4. Receive the signup benefit.

Use simple icons.

---

# 11. Frequently Asked Questions

Display common questions.

Examples:

Is this referral code verified?

How often are codes updated?

Does copying the code cost anything?

Can existing users use referral codes?

Link to company pages for company-specific questions.

---

# 12. Footer

Include:

- About
- Contact
- Privacy Policy
- Terms
- Disclaimer

Display copyright.

---

# 13. Mobile Experience

The homepage must be designed mobile-first.

Requirements:

- Large buttons
- Easy scrolling
- Comfortable spacing
- Readable typography
- No horizontal scrolling

---

# 14. Accessibility

Requirements

- Keyboard accessible
- Proper heading hierarchy
- Alt text for images
- Visible focus states
- Sufficient color contrast

---

# 15. Performance

Target:

- Lighthouse Performance > 95
- Accessibility > 95
- SEO > 95

Images should be optimized.

Avoid unnecessary JavaScript.

---

# 16. Acceptance Criteria

The homepage is complete when:

✓ Loads quickly.

✓ Looks premium.

✓ Mobile responsive.

✓ Navigation works.

✓ Referral cards work.

✓ Copy Code works.

✓ Claim Bonus works.

✓ Internal navigation works.

✓ No layout shifts.

✓ Meets accessibility requirements.

---

# 17. Notes for Cursor

Do not invent additional sections.

Do not redesign the page.

Implement the sections exactly as described.

Build reusable components wherever possible.

Keep the implementation clean, modular, and production-ready.