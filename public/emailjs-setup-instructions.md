# Setting Up EmailJS for the Contact Form

To make the contact form fully functional with email sending capabilities, you'll need to set up EmailJS. Here's how:

## Step 1: Create an EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for an account
2. Verify your email address

## Step 2: Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps

## Step 3: Create an Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Design your template with the following variables:
   - `{{from_name}}` - The name of the person submitting the form
   - `{{email}}` - The email address provided
   - `{{phone}}` - The phone number provided
   - `{{message}}` - The project details
   - `{{subject}}` - The email subject ("New Lead")

## Step 4: Update the Code
1. Open `src/components/EmailService.tsx`
2. Replace the placeholder values with your actual EmailJS credentials:
   - `YOUR_SERVICE_ID` - Found in the Email Services section
   - `YOUR_TEMPLATE_ID` - Found in the Email Templates section
   - `YOUR_USER_ID` - Found in the Integration section (Public Key)
3. Uncomment the actual emailjs.send line and remove the mock response

## Step 5: Test the Form
After setting up EmailJS, test the form to ensure emails are being sent correctly.

## Note
The free tier of EmailJS allows 200 emails per month, which should be sufficient for most small business websites.