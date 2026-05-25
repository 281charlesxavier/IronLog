# IronLog — Full Setup & User Guide

---

## PART 1 — GET THE APK ONTO YOUR PHONE

### Step 1 — Extract the zip

Download `ironlog.zip` from the chat and extract it on your PC/laptop.
You'll see this folder:

```
ironlog/
├── index.html       ← the entire app
├── manifest.json    ← PWA metadata
├── sw.js            ← offline/notifications
├── icons/           ← app icons
├── INSTRUCTIONS.md  ← this file
└── README.md
```

---

### Step 2 — Host it online (free, ~2 minutes)

The app needs a public URL for PWABuilder to package it.
**Netlify Drop is the easiest — no account needed.**

1. On your PC, open a browser and go to: **https://app.netlify.com/drop**
2. Open your file manager and find the extracted `ironlog` folder
3. **Drag the entire `ironlog` folder** onto the Netlify Drop page
4. Wait about 30 seconds while it uploads
5. You'll see a green banner with a URL like:
   `https://whimsical-muffin-abc123.netlify.app`
6. **Copy that URL** — you'll need it in the next step

> **Want a permanent URL?** Create a free Netlify account, then you can rename it to something like `ironlog-yourname.netlify.app` and it stays up forever.

---

### Step 3 — Verify it works in Brave first (optional but recommended)

1. Open Brave on your PC
2. Paste the Netlify URL → press Enter
3. The app should load and look identical to this chat
4. If it loads fine, proceed to Step 4

---

### Step 4 — Generate the APK via PWABuilder

1. On your PC, go to: **https://pwabuilder.com**
2. Paste your Netlify URL into the search box → click **"Start"**
3. Wait 10–15 seconds — it analyses your app
4. You should see scores for PWA features (mostly green/blue circles)
5. Click **"Package for Stores"**
6. Under the **Android** section, click **"Generate Package"**
7. A settings screen appears — **leave all defaults**, just click **"Download Package"**
8. A zip file downloads to your PC — open it
9. Inside you'll find a file ending in `.apk` — that's your app

---

### Step 5 — Transfer the APK to your Android phone

**Easiest method — email it to yourself:**
1. Attach the `.apk` file to an email and send to yourself
2. Open the email on your phone → tap the attachment → tap Download

**Alternative — USB cable:**
1. Connect phone to PC via USB
2. On phone: tap the USB notification → select "File Transfer"
3. Copy the `.apk` file to your phone's Downloads folder

---

### Step 6 — Install the APK on your phone

1. On your phone, open your **Downloads** folder (Files app or similar)
2. Tap the `.apk` file
3. If you see **"Install blocked"** or similar:
   - Tap **"Settings"**
   - Enable **"Install unknown apps"** for your Files app
   - Go back and tap the APK again
4. Tap **Install**
5. Tap **Open** (or find IronLog on your home screen/app drawer)

> The icon will be a dark circle — you can long-press it to rename or move it.

---

### Step 7 — First launch

1. Open IronLog
2. You'll see the **Today** screen
3. If prompted about notifications → tap **Allow** (needed for bodyweight reminders)
4. That's it — you're in

---

## PART 2 — USING THE APP

### Bottom Navigation

Five tabs along the bottom:
- **Today** — start workouts, quick bodyweight log, recent sessions
- **Cal** — calendar view of all past sessions
- **History** — chronological list with full details and PR badges
- **Stats** — heatmap, charts, personal records
- **More** — Pull-up module, bodyweight tracker, backup, settings

---

### Logging a Workout

**Starting:**
1. Tap **Today** tab
2. Tap your split — **Push / Pull / Legs / Upper / Lower / Custom**
   - The button highlights in that split's colour
3. Tap the **"Start [Split] Session"** button that appears
4. The workout screen opens with a live timer

**Adding exercises:**
1. Tap **"Add Exercise"** at the bottom
2. The sheet shows exercises grouped by muscle for your split
3. Tap any exercise name to add it to your session
4. **Search** — type in the search bar to find any exercise
5. **Custom exercise** — type a name in the "Custom exercise name" box → tap Add
6. Repeat for as many exercises as you want

**Logging sets:**

Each exercise card shows your sets. For each set:
- Tap the **kg** field → type the weight
- Tap the **reps** field → type the reps
- Values save automatically as you type

**Adding more sets:**
- Tap **"Add Set"** below the exercise — it copies the last set's values as a starting point

**Multi-fill (Fill↓):**
- After entering weight/reps on a set, tap **"Fill↓"** to copy those values to all sets below it
- Example: you want 4 sets of 80kg × 8 reps — enter 80 and 8 on Set 1, tap Fill↓ — done

**Dropsets:**
- Toggle the **"Drop"** switch on any set to mark it as a dropset
- It turns orange to distinguish it visually
- Dropsets still count toward volume in stats

**Collapsing exercises:**
- Tap the ↑ arrow on an exercise card to collapse it and save screen space
- Tap ↓ to expand again

**Deleting sets/exercises:**
- Tap the 🗑 trash icon on a set to delete that set
- Tap the red 🗑 trash icon at the top of an exercise card to remove the whole exercise

**Finishing:**
- Tap **Finish** (top right) when done
- The workout saves automatically
- A rolling snapshot is created (backup of your last 3 workouts)

**Discarding:**
- Tap the **×** (top left) → Confirm Discard
- Nothing is saved

---

### Calendar View

- Swipe month with the ← → arrows
- Each day that has a workout shows a coloured dot (one per split type)
- **Tap a day** to see the full workout details below the calendar
- Today is highlighted in lime
- Colour legend at the bottom

---

### History View

- All workouts, newest first
- Each card shows: date, split, exercises with set/rep/weight summary
- **PR badge** appears on any exercise where you hit a personal record that day
- **Delete a workout**: tap the 🗑 icon → confirm

---

### Stats View

**Overview cards** — total sessions, current streak, total sets, total volume

**Consistency Heatmap** — 52-week grid, one square per day, coloured by split type. Helps you see training frequency and gaps at a glance.

**Weekly Volume** — bar chart of total kg lifted per week (last 8 weeks)

**Exercise Progress** — select any exercise from the dropdown to see your max weight over time. Shows start weight, current weight, and total change.

**Bodyweight Trend** — line chart if you've logged bodyweight entries

**Personal Records** — list of your all-time highest weight for each exercise

---

### Pull-up Module

Access via **More → Pull-up Module**

**Current Level card** — shows your current progression level with the target and a coaching tip

**Level Up / Back buttons** — tap to move your level up or down as you progress

**Log Session form:**
- SETS — how many sets you did
- REPS — reps per set
- +KG — extra weight (0 for bodyweight, positive for weighted, can use negatives for band assistance tracking if you prefer)
- Notes — optional (e.g. "green band", "close grip")
- Tap **Log Session**

**Reps Trend** — line chart of your reps over time (shows after 2+ sessions)

**Progression Ladder** — all 11 levels visualised. Completed levels are greyed. Current level has a lime border.

**Recent Sessions** — last 5 sessions logged

**How to progress:** Hit the target for your current level consistently for 2–3 sessions, then tap "Level Up →"

---

### Bodyweight Tracker

Access via **More → Bodyweight Tracker**

**OR** tap the **KG BODY** card on the Today tab for a quick log

- Log today's weight with the input field → tap Log
- Stats: start weight, current weight, change
- 30-day trend chart
- Full log table with delete option (tap 🗑)

**One entry per day** — if you log twice the same day, it replaces the earlier entry.

---

### Notifications (Bodyweight Reminder)

1. Go to **More → Settings**
2. Toggle **Daily Notification** on
3. Grant permission when Android prompts you
4. Set your preferred **Time** with the time picker
5. You'll get a daily reminder at that time to log your weight

> If you later clear app data, you'll need to re-enable this.

---

### Backup & Restore

**Automatic (rolling snapshots):**
- Every time you finish a workout or log a pull-up session, a snapshot is automatically saved
- The last 3 snapshots are kept — older ones auto-delete
- To restore: **More** → scroll to Rolling Snapshots → tap **Restore** on any snapshot

**Manual export (recommended: monthly):**
1. **More** → tap **Export** button (or the orange banner if it's overdue)
2. A file named `ironlog-YYYY-MM-DD.json` saves to your Downloads folder
3. Keep up to 3 of these files; delete older ones manually
4. Store in Google Drive / cloud storage for extra safety

**Import / restore from file:**
1. **More** → tap **Import Backup**
2. Select your JSON backup file
3. All workouts, bodyweight, and pull-up data is restored

**When to export:**
- After every big milestone (new PR, completing a pull-up level)
- Before uninstalling or factory reset
- Monthly as a habit

---

### Syncing with the Claude Artifact (AI planning)

If you also use the IronLog artifact in Claude:
1. Export JSON from this APK → import it into the artifact
2. Plan your next week with the AI coach
3. Export from the artifact → import back into APK

Both use the same JSON format — fully compatible.

---

## PART 3 — TROUBLESHOOTING

**App not installing:**
Go to Android Settings → Apps → Special App Access → Install Unknown Apps → enable for your Files or Email app

**App installed but blank screen:**
Close and reopen — the service worker is caching assets on first load

**Notifications not showing:**
Go to Android Settings → Apps → IronLog → Notifications → enable them

**Lost data after update:**
Your data lives in the APK's isolated IndexedDB. Updates to the hosted file don't touch your data. Only "Clear Data" in Android settings deletes it.

**PWABuilder shows errors:**
Usually means the Netlify URL is still deploying. Wait 2 minutes, then retry on pwabuilder.com.

**"Install blocked" on phone:**
Settings → Security (or Biometrics & Security) → Install Unknown Apps → enable for whichever app you're opening the APK from (Files, Gmail, etc.)
