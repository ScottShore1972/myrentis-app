# EmailJS Setup Guide

## Overview
Your form is now configured to send submissions directly to your email using EmailJS. Follow these steps to complete the setup.

---

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free - 200 emails/month)
3. Verify your email address

---

## Step 2: Add an Email Service

1. Once logged in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - Or any other provider
4. Follow the prompts to connect your email account
5. **Copy the Service ID** (e.g., `service_abc123`) - you'll need this!

---

## Step 3: Create an Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Replace the default template with this:

```
New Lease App Submission

From: {{from_email}}
Phone: {{from_phone}}

--- RENTAL INFORMATION ---
Living Situation: {{currently_renting}}
Time in Apartment: {{time_in_apartment}}

--- FEEDBACK ---
Biggest Challenge: {{pain_point}}
Would Use App: {{would_use}}

Additional Feedback:
{{additional_feedback}}

--- METADATA ---
Submitted: {{submission_date}}
```

4. Set these fields:
   - **To Email:** Your email address where you want to receive submissions
   - **From Name:** My Rent Is Form
   - **Subject:** New Lease App Submission from {{from_email}}

5. Click **"Save"**
6. **Copy the Template ID** (e.g., `template_xyz789`) - you'll need this!

---

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"** in the EmailJS dashboard
2. Find **"Public Key"** section
3. **Copy your Public Key** (e.g., `Abc123Xyz789`)

---

## Step 5: Update Your Code

Open `/src/app/components/InterestForm.tsx` and find these lines (around line 26-28):

```typescript
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

Replace them with your actual values:

```typescript
const SERVICE_ID = 'service_abc123';  // Your Service ID from Step 2
const TEMPLATE_ID = 'template_xyz789'; // Your Template ID from Step 3
const PUBLIC_KEY = 'Abc123Xyz789';     // Your Public Key from Step 4
```

Also update line 37 with your email address:

```typescript
to_email: 'youremail@example.com', // Replace with your actual email
```

---

## Step 6: Test It!

1. Save your changes
2. Fill out the form on your site
3. Submit it
4. Check your email inbox!

---

## Troubleshooting

### Not receiving emails?

1. **Check your spam folder** - first submissions often go to spam
2. **Verify your email service** is connected in EmailJS dashboard
3. **Check the browser console** (F12) for error messages
4. **Make sure all IDs are correct** - copy/paste to avoid typos

### Getting 403 errors?

- Your Public Key might be wrong - double-check it

### Getting 404 errors?

- Your Service ID or Template ID might be wrong - verify both

### Template variables not showing?

- Make sure the variable names in your template match exactly:
  - `{{from_email}}`
  - `{{from_phone}}`
  - `{{currently_renting}}`
  - `{{time_in_apartment}}`
  - `{{pain_point}}`
  - `{{would_use}}`
  - `{{additional_feedback}}`
  - `{{submission_date}}`

---

## Email Limits

**Free Tier:** 200 emails/month  
**Paid Tier:** Starts at $8/month for 1,000 emails

For a test/feedback collection site, the free tier should be plenty!

---

## What Happens Now

When someone submits the form:
1. ✅ Email is sent to your inbox with all their information
2. ✅ Data is also saved in localStorage as a backup
3. ✅ You can reply directly to their email to follow up
4. ✅ User sees a success message

---

## Security Note

The credentials in your code are **PUBLIC KEYS** designed to be visible in browser code. However, EmailJS protects you from abuse with rate limiting. For production use, consider:

- Setting up reCAPTCHA in EmailJS dashboard
- Monitoring your EmailJS usage dashboard
- Moving to a real backend (Supabase, etc.) when you scale

---

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- Video Tutorial: Search "EmailJS React tutorial" on YouTube
- Support: support@emailjs.com
