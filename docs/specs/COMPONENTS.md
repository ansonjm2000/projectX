# Component Library Specification

Version: 1.0

Status: Approved

---

# Objective

All pages should be built using reusable components.

Do not duplicate UI.

Every page should reuse the same components wherever possible.

The design should remain consistent across the website.

---

# Component List

The MVP consists of the following reusable components.

1. Navbar
2. Hero
3. Referral Card
4. Trust Card
5. Section Header
6. Primary Button
7. Secondary Button
8. Copy Code Button
9. Claim Bonus Button
10. FAQ Section
11. Footer
12. Badge
13. Toast Notification
14. Container

---

# Navbar

Purpose

Provide simple navigation across the website.

Contents

Logo

Home

About

Contact

Requirements

Sticky

Responsive

Mobile menu

No search

No login

No dropdowns

---

# Hero

Purpose

Immediately explain the website.

Contents

Headline

Subheading

Primary CTA

Secondary CTA

Maximum width centered.

---

# Referral Card

Purpose

Display one referral offer.

Contents

Company Logo

Company Name

Short Description

Current Bonus

Referral Code

Last Verified

Copy Button

Claim Button

View Details

Behaviour

Copy Button

Copies referral code.

Displays success toast.

Claim Button

Copies referral code.

Opens referral link.

View Details

Navigates to company page.

---

# Trust Card

Purpose

Increase confidence.

Contents

Icon

Title

Description

Examples

Verified

Updated

Secure

Simple

---

# Section Header

Purpose

Reusable heading for every section.

Contents

Title

Subtitle (optional)

Centered.

---

# Primary Button

Purpose

Main action.

Style

Filled.

Rounded.

Large touch target.

---

# Secondary Button

Purpose

Supporting action.

Outlined.

---

# Copy Code Button

Purpose

Copy referral code.

Behaviour

Copies immediately.

Shows toast.

Button text changes to:

Copied!

Returns to normal after a few seconds.

---

# Claim Bonus Button

Purpose

Primary conversion button.

Behaviour

Copies referral code.

Immediately opens referral link.

---

# FAQ Section

Purpose

Answer common questions.

Display as accordion.

Reusable on homepage and company pages.

---

# Footer

Contents

About

Contact

Privacy Policy

Terms

Disclaimer

Copyright

---

# Badge

Examples

Verified

Popular

Recommended

New

Simple rounded badge.

---

# Toast Notification

Used for

Referral code copied successfully.

Small notification.

Auto dismiss.

---

# Container

Purpose

Maintain consistent page width.

All sections should use the same container component.

---

# General Rules

Every component should:

Be reusable.

Accept props.

Be responsive.

Be accessible.

Avoid unnecessary complexity.

Do not hardcode repeated values.

Use TypeScript interfaces for props.

Keep components small and maintainable.