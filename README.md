# Abdellatif Nagy — Portfolio Website

A dark, data-themed portfolio with an English/Arabic switch. It uses only HTML, CSS and JavaScript, so there is nothing to install or build.

## Folder structure

```
portfolio/
├── index.html          Home
├── about.html          About, experience, education, skills
├── projects.html       All projects (with filters)
├── project.html        Project case study (project.html?id=flight-delays)
├── certificates.html
├── freelancing.html    Services, process, reviews, platforms
├── contact.html        Contact details + form
├── 404.html
├── css/style.css       All styling (colors are at the top in :root)
├── js/data.js          ← YOUR CONTENT: projects, experience, certificates, services, links
├── js/i18n.js          ← Page text in English and Arabic
├── js/main.js          Site behaviour (you rarely need to touch this)
└── assets/
    ├── Abdellatif-Nagy-CV.pdf
    └── img/            profile photo, project screenshots, reviews, favicon
```

---

## 1. Before publishing: personalise it (15 minutes)

### Add your photo
Save a square headshot as **`assets/img/profile.jpg`** (about 600×600 px). Until you do, the site shows an "AN" placeholder.

### Add project screenshots
Save one screenshot per project in `assets/img/projects/` using **exactly** these names:

| Project | File name |
|---|---|
| Flight Delays Analysis | `flight-delays.jpg` |
| Google Ads Dashboard | `google-ads.jpg` |
| Google Merch Shop | `google-merch.jpg` |
| Examination System | `exam-system.jpg` |
| Watch Sales Dashboard | `watch-sales.jpg` |

Use a 16:10 size, e.g. 1280×800 px. Until you add them, the site shows the designed `.svg` placeholders. Tip: compress the images at https://squoosh.app so the site stays fast.

### Add client reviews
1. Save the screenshots as `assets/img/reviews/review-1.jpg`, `review-2.jpg`, and so on.
2. At the bottom of `js/data.js`, list them:
   ```js
   const REVIEWS = [
     { image: "assets/img/reviews/review-1.jpg", source: "Mostaql" },
     { image: "assets/img/reviews/review-2.jpg", source: "Upwork" },
   ];
   ```

### Connect the contact form (Formspree, free)
1. Sign up at https://formspree.io with your Gmail address.
2. Click **+ New Form**, name it "Portfolio" and copy the form ID. It's the part after `/f/`, e.g. `xyzabcd`.
3. In `js/data.js`, replace `YOUR_FORM_ID` with that ID:
   `formspreeId: "xyzabcd",`
4. After publishing, send yourself a test message and confirm it in the email Formspree sends you.

Until the form is connected, pressing **Send** opens the visitor's email app addressed to you, so no messages are lost.

### Fix the Flight Delays dashboard link
The current Power BI link (`reportEmbed…autoAuth=true`) is tied to your organisation, so outside visitors will probably be asked to sign in. To fix it:
1. In Power BI Service, open the report and choose **File → Embed report → Publish to web (public)**.
2. Copy the `https://app.powerbi.com/view?r=…` link.
3. Paste it into the `flight-delays` project in `js/data.js`.

### Editing content later
- **Projects, jobs, certificates, services and links:** edit `js/data.js`. Each text has an `en:` and an `ar:` version.
- **Headings and buttons:** edit `js/i18n.js`.
- **Colours:** change `--accent` and the other colour values at the top of `css/style.css`.
- **Adding a new project:** copy one `{ id: ... }` block in `PROJECTS`, give it a new `id`, and add its image. Its page appears automatically at `project.html?id=your-id`.

---

## 2. Publish free on GitHub Pages

Your GitHub account: **Abdellatif-Nagy**. The final address will be:
**https://abdellatif-nagy.github.io/**

### Option A: in the browser (no coding tools needed)
1. Sign in at https://github.com.
2. Click **+ → New repository**.
3. Set **Repository name** to exactly `Abdellatif-Nagy.github.io` (your username + `.github.io`).
4. Choose **Public**, then click **Create repository**.
5. On the new repository page, click **uploading an existing file**.
6. Open the `portfolio` folder on your computer.
   - Select **everything inside it**: the `.html` files and the `css`, `js` and `assets` folders.
   - Drag them into the browser.
   - Upload the *contents*, not the `portfolio` folder itself. `index.html` must be at the top level.
7. Scroll down and click **Commit changes**.
8. Go to **Settings → Pages**. Under **Build and deployment**:
   - set **Source** to **Deploy from a branch**
   - set **Branch** to **main** and **/(root)**
   - click **Save**.
9. Wait 1–3 minutes, then open https://abdellatif-nagy.github.io/ 🎉

**To update later:** open the repository, click the file, click the ✏️ pencil icon, edit and **Commit changes**. You can also drag in new files with **Add file → Upload files**. The site refreshes within a minute or two.

### Option B: with Git (if you have Git installed)
```bash
cd portfolio
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin https://github.com/Abdellatif-Nagy/Abdellatif-Nagy.github.io.git
git push -u origin main
```
Then do step 8 above.

> Using a different repository name (e.g. `portfolio`) also works, but the address becomes `https://abdellatif-nagy.github.io/portfolio/`.

---

## 3. Optional: your own domain (e.g. abdellatif.pro)
Your CV already mentions **abdelatif.pro**. If you buy a domain (Namecheap, Hostinger, Porkbun, around $5–15 per year):
1. At your domain registrar, open **DNS settings** and add:
   - Four **A** records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`
   - One **CNAME** record for `www` pointing to `abdellatif-nagy.github.io`
2. On GitHub, go to **Settings → Pages → Custom domain**, enter your domain and click **Save**.
3. Once the DNS check passes, tick **Enforce HTTPS**. DNS can take up to 24 hours.
4. Update the link in your CV, LinkedIn "Website" field and freelance profiles.

## 4. Alternative: Hostinger
If you buy a Hostinger web-hosting plan instead:
1. Go to **hPanel → Websites → File Manager**.
2. Open `public_html`.
3. Upload the **contents** of the `portfolio` folder.

The site is live on your Hostinger domain immediately. The contact form works the same way.

---

## 5. After launch checklist
- [ ] Test every page on your phone, in both English and Arabic.
- [ ] Open every "Live dashboard" link in a **private/incognito window**. That's how recruiters see them.
- [ ] Send a test message through the contact form.
- [ ] Add the site URL to LinkedIn (Contact info → Website and the Featured section), your CV, Upwork, Mostaql and Khamsat.
- [ ] Optional: submit the site at https://search.google.com/search-console so Google indexes it.
