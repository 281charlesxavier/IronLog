# IronLog — Deployment Guide

## What's in this folder

```
ironlog/
├── index.html          ← The entire app (open this in Brave to test)
├── manifest.json       ← PWA metadata
├── sw.js               ← Service worker (offline + notifications)
├── icons/
│   ├── icon-192.png    ← App icon
│   └── icon-512.png    ← App icon (large)
└── README.md
```

---

## Step 1 — Test the app in Brave

Open `index.html` directly in Brave on your phone or PC. All features work locally — workout logging, calendar, stats, pull-up module, bodyweight tracker, backup/restore.

> **Note:** Service worker and notifications won't activate when opening a local file directly. They work once hosted (Step 2 onward).

---

## Step 2 — Host it (free, 2 minutes)

You need a public URL for PWABuilder to package it. Easiest options:

### Option A — GitHub Pages (recommended, free, permanent)
1. Create a free GitHub account at github.com
2. Create a new repository called `ironlog` (set to Public)
3. Upload all files from this folder (drag & drop in the GitHub web UI)
4. Go to Settings → Pages → Source: `main` branch, `/ (root)` folder → Save
5. Your URL will be: `https://YOUR-USERNAME.github.io/ironlog/`

### Option B — Netlify Drop (fastest, no account needed)
1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `ironlog` folder onto the page
3. Done — you get a URL like `https://random-name-12345.netlify.app`

---

## Step 3 — Generate the APK via PWABuilder

1. Go to **[pwabuilder.com](https://pwabuilder.com)**
2. Paste your hosted URL → click "Start"
3. It will validate your PWA (should score green on all checks)
4. Click **"Package for Stores"** → **Android**
5. Click **"Download Package"** — this gives you a ZIP with a signed `.apk` inside
6. Transfer the APK to your Android phone (via USB, email, Telegram to yourself, etc.)
7. On Android: open the APK → tap Install (you may need to allow "Install from unknown sources" in Settings → Security)

---

## Step 4 — Install on Android

Once installed, IronLog will:
- Appear as a native app with its own icon on your home screen
- Run in fullscreen (no browser chrome/UI)
- Store all data in its own isolated partition — **unaffected by clearing Brave's data**
- Work fully offline after first load

---

## Data Safety Quick Reference

| Action | Your data |
|---|---|
| Clear Brave cache | ✅ Safe |
| Clear Brave cookies & site data | ✅ Safe (APK has separate storage) |
| Clear Brave browsing history | ✅ Safe |
| Android Settings → IronLog → Clear Data | ❌ Data deleted |
| Uninstall the IronLog APK | ❌ Data deleted |
| Transfer phone (backup APK data + export JSON) | ✅ Safe if you exported |

**Best practice:** Export a JSON backup from More → Backup every week or two. Store in Google Drive or your preferred cloud.

---

## Notifications

Bodyweight reminders are scheduled via the service worker. To enable:
1. Open the app → More → Settings
2. Toggle "Daily Notification" on
3. Grant notification permission when prompted
4. Set your preferred reminder time

Notifications fire even when the app is closed (as long as the TWA WebView process is running, which Android keeps alive by default).

---

## Updating the app

If you ever need to update the app (bug fixes, new features):
1. Edit `index.html`
2. Increment the cache version in `sw.js` (change `ironlog-v1` to `ironlog-v2`)
3. Re-upload to your host (GitHub/Netlify auto-deploys on push)
4. The installed APK fetches the new version automatically the next time it's opened with a connection

---

## Custom Icons

The included icons are functional placeholders. To replace with proper icons:
1. Design a 512×512 PNG (dark background, lime accent recommended)
2. Replace `icons/icon-192.png` and `icons/icon-512.png`
3. Re-upload and optionally re-run PWABuilder for a fresh APK

A free tool for icon generation: [realfavicongenerator.net](https://realfavicongenerator.net)
