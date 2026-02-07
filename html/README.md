# Iron Peak - Simple Setup

## 🚨 IMPORTANT: Fix Your Supabase Key First!

Your current Supabase anon key is **incorrect**. It needs to be the long JWT token.

### Get the Correct Key:

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Select your project
3. Click **Settings** (⚙️) → **API**
4. Look for "Project API keys"
5. Copy the **anon public** key - it's the LONG one that looks like:
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllY3F1cHh2YmF6c2d6cWdtem1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc4OTMyMDAsImV4cCI6MjAwMzQ2OTIwMH0.xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
   (This is just an example - yours will be different)

6. Open `supabase-config.js` in a text editor
7. Replace `YOUR_CORRECT_ANON_KEY_HERE` with the key you just copied
8. Save the file

## 🏃‍♂️ How to Run

### Method 1: Just Open in Browser (Easiest)
1. Fix the Supabase key (see above)
2. Double-click `index.html`
3. It will open in your browser!

### Method 2: Using a Text Editor
1. Fix the Supabase key
2. Right-click `index.html` → Open with → Your browser

## 📋 Before Testing

### Disable Email Confirmation (For Testing)
1. Go to Supabase Dashboard
2. Click **Authentication** → **Providers** → **Email**
3. Toggle OFF "Confirm email"
4. Click **Save**

This lets you test signup/login immediately without checking email.

## 🧪 Testing Your App

1. Open `index.html` in browser
2. Click "Create Account"
3. Fill in the signup form
4. Submit
5. You should be redirected to the dashboard

If you see "Loading your dashboard..." forever:
- Check browser console (F12) for errors
- Most likely: Your Supabase key is still wrong

## 📁 Files Included

- `index.html` - Landing page
- `login-supabase.html` - Login page
- `signup-supabase.html` - Signup page  
- `dashboard-supabase.html` - Protected dashboard
- `peak-stride.html` - Workout tracker
- `supabase-config.js` - **YOU NEED TO FIX THIS FILE**

## 🆘 Troubleshooting

### "Loading your dashboard..." forever
→ Wrong Supabase key. Get the correct anon/public key.

### "Invalid API key"
→ You copied the wrong key. Make sure it's the **anon public** key, not the service_role key.

### "User not found"
→ You need to sign up first, not log in.

### Console says "supabase is not defined"
→ Your internet connection might be blocking the CDN. Try a different browser or network.

## ✅ Checklist

- [ ] Got the correct anon/public key from Supabase (the LONG one starting with eyJ)
- [ ] Updated `supabase-config.js` with the correct key
- [ ] Disabled email confirmation in Supabase
- [ ] Opened `index.html` in browser
- [ ] Successfully signed up
- [ ] Successfully logged in
- [ ] Saw the dashboard!

---

**Need more help?** Check the browser console (F12) for error messages and let me know what you see!
