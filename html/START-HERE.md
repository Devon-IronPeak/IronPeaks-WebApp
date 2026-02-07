# Iron Peak - Ready to Run! 🎉

## ✅ Your Supabase is Configured!

Your credentials are already added and ready to go!

## 🚀 How to Run Your App

### Step 1: Extract the Zip File
Extract all files to a folder on your computer.

### Step 2: Open in Browser
**Double-click `index.html`** - that's it!

Or right-click → Open with → Your browser

### Step 3: Test Your Connection (Optional)
Open `test-connection.html` first to verify everything is working.

## 🧪 Testing Your App

1. **Open `index.html`** in your browser
2. Click **"Create Account"**
3. Fill in:
   - Username
   - Email
   - Password (minimum 6 characters)
4. Click **"Create Account"**
5. You should be redirected to the dashboard!

## ⚙️ Important: Email Confirmation Settings

Your Supabase might require email confirmation. You have two options:

### Option A: Disable Email Confirmation (For Testing - Recommended)
1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/yecqupxvbazsgzqgmzmc
2. Click **Authentication** → **Providers** → **Email**
3. Toggle **OFF** "Confirm email"
4. Click **Save**

Now you can sign up and log in immediately without checking email!

### Option B: Use Email Confirmation (Production)
If you keep email confirmation ON:
- After signing up, check your email
- Click the confirmation link
- Then you can log in

## 📁 Files Included

- **index.html** - Landing page (START HERE)
- **test-connection.html** - Test your Supabase connection
- **login-supabase.html** - Login page
- **signup-supabase.html** - Sign up page
- **dashboard-supabase.html** - Your dashboard (protected)
- **peak-stride.html** - Workout tracker
- **supabase-config.js** - Your Supabase credentials (already configured ✅)

## 🔍 File Naming Note

You have two versions of some files:
- `login.html` and `login-supabase.html`
- `signup.html` and `signup-supabase.html`
- `dashboard.html` and `dashboard-supabase.html`

**Use the `-supabase` versions!** They have the working Supabase integration.

## 🎯 Quick Start Checklist

- [x] Supabase credentials configured
- [ ] Disable email confirmation (recommended for testing)
- [ ] Open `test-connection.html` to verify setup
- [ ] Open `index.html` to start using the app
- [ ] Sign up with a test account
- [ ] Log in and see your dashboard

## 🆘 Troubleshooting

### "Loading your dashboard..." forever
**Solution:** Open `test-connection.html` to see what's wrong. Most likely:
- Internet connection issue
- Email confirmation is enabled (disable it)

### "Invalid API key" error
**Solution:** Your key looks correct! But if you see this:
- Make sure you copied the "anon public" key (not service_role)
- Try regenerating the key in Supabase settings

### "User already registered" but can't log in
**Solution:** Email confirmation is enabled. Either:
- Check your email for confirmation link, OR
- Disable email confirmation in Supabase settings

### Console errors (Press F12 to see)
**"supabase is not defined"**
- Check your internet connection
- The CDN might be blocked

**"Failed to fetch"**
- Check your Supabase project is active
- Verify the project URL is correct

## 🎨 Next Steps

Once you've tested signup/login:

1. **Add Database Tables** for workout tracking
2. **Customize the dashboard** with your own content
3. **Add features** to peak-stride.html
4. **Deploy** to Netlify or Vercel

## 📚 Useful Links

- [Your Supabase Dashboard](https://supabase.com/dashboard/project/yecqupxvbazsgzqgmzmc)
- [Supabase Documentation](https://supabase.com/docs)
- [JavaScript Auth Guide](https://supabase.com/docs/guides/auth/auth-helpers/auth-ui)

## 🎓 How to Deploy

When you're ready to put this online:

### Option 1: Netlify (Easiest)
1. Create account at netlify.com
2. Drag and drop your folder
3. Done!

### Option 2: Vercel
1. Create account at vercel.com
2. Upload your folder
3. Done!

### Option 3: GitHub Pages
1. Create a GitHub repository
2. Upload your files
3. Enable GitHub Pages in settings

---

## 🎉 You're All Set!

Your app is ready to run. Just open `index.html` and start testing!

**Remember:** Disable email confirmation in Supabase for easier testing!
