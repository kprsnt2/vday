# 🚀 Setup Guide: Monetization & Analytics

This guide will help you set up the "Buy Me a Coffee" button and Analytics for your Valentine's Day site.

## 1. ☕ Buy Me a Coffee Setup

1.  Go to [buymeacoffee.com](https://www.buymeacoffee.com/) and sign up.
2.  Once logged in, go to your **Dashboard**.
3.  Copy your **Page URL** (it looks like `https://www.buymeacoffee.com/yourname`).
4.  Open `index.html` in your code.
5.  Search for `id="bmcButton"`.
6.  Replace `href="#"` with your actual URL.
    ```html
    <!-- Example -->
    <a href="https://www.buymeacoffee.com/yourname" ... >
    ```

## 2. 📊 Google Analytics (GA4) Setup

1.  Go to [analytics.google.com](https://analytics.google.com/).
2.  Click **Admin** (gear icon) -> **Create Account** -> **Create Property**.
3.  Follow the steps to create a "Web" property.
4.  Once created, you will get a **Measurement ID** (starts with `G-XXXXXXXX`).
5.  Open `index.html` and look for the Google Analytics comment in the `<head>` section.
6.  Replace `G-XXXXXXXXXX` with your actual ID in **two places** in the script.

## 3. 📈 Vercel Analytics Setup

1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Select your Valentine's Day project.
3.  Click on the **Analytics** tab.
4.  Click **Enable** (Web Analytics).
5.  That's it! The script I added to `index.html` will automatically start sending data.

## 4. 🔎 SEO Optimization

I have added special "Meta Tags" to help your site rank higher.
To customize them further:
1.  Open `index.html`.
2.  Edit the `<meta name="description">` content to match your exact offering.
3.  Update the `og:image` content if you have a specific social media preview image you want to use.
