# Your portfolio: how to edit and publish it

This is a plain website (no frameworks, nothing to install). It has five parts:

| File or folder | What it is | Do you edit it? |
|---|---|---|
| `content.js` | All the text, projects, articles and links | **Yes, this is the only one** |
| `assets/videos/` | Your demo videos | Yes, drop files in |
| `assets/images/` | Optional cover images | Yes, drop files in |
| `assets/cv/` | Your three CV PDFs | Replace when you update a CV |
| `index.html`, `style.css`, `app.js` | The design and the code | No |

---

## 1. See it on your computer

1. Unzip the folder.
2. Double-click `index.html`. It opens in your browser.
3. After you edit `content.js`, save it and press refresh in the browser.

---

## 2. Add a project (with a video)

**Step A. Make the video small.** GitHub will reject any file over **100 MB**, and big videos load slowly for recruiters. Aim for **10 to 25 MB** per video (a 1 to 3 minute screen recording at 720p is usually enough).

Easiest way: install the free app **HandBrake**, open your video, choose the preset **"Fast 720p30"**, set the format to **MP4**, and click Start.

Or, if you use the command line with ffmpeg:

```
ffmpeg -i my-recording.mov -vf scale=-2:720 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 96k -movflags +faststart my-demo.mp4
```

**Step B. Copy the file** into `assets/videos/`. Use a simple name with no spaces, for example `rag-pdf-chat-demo.mp4`.

**Step C. Open `content.js`**, find your project and fill in the video line:

```js
video: "assets/videos/rag-pdf-chat-demo.mp4",
```

Save and refresh. The video now plays on that project's card.

**Other things you can fill in for a project:**

- `links:` add buttons such as GitHub or Live demo:
  ```js
  links: [
    { label: "GitHub", url: "https://github.com/OnyejiakuTheophilus/rag_pdf_chat" }
  ]
  ```
  (Remove the two `//` at the start of the example line that is already there.)
- `image:` a cover picture, for example `"assets/images/rag-cover.jpg"`. It shows when there is no video, and as the thumbnail before a video plays.
- `metrics:` up to three big numbers, such as `{ value: "95.4%", label: "mAP50" }`.

**Add a whole new project:** copy a full `{ ... },` block inside `projects: [ ... ]`, paste it after another one, and change the text. The first project in the list is shown large, so put your strongest one first.

> **Optional: YouTube instead of a file.** If a video is too big, upload it to YouTube as **Unlisted**, then use `youtube: "VIDEO_ID"` (the letters after `v=` in the link) and leave `video: ""` empty. It plays on your page with no size limit.

---

## 3. Add a new article

In `content.js`, find `articles: [` and paste a new line at the top of the list:

```js
{ title: "Your article title",
  publisher: "Comet", topic: "Computer vision",
  url: "https://the-link-to-your-article" },
```

If you write for a new company, also add it to `publishers:` so it appears in the "Published with" line. The filter buttons update by themselves.

---

## 4. Publish it for free on GitHub Pages

You already have a GitHub account (`OnyejiakuTheophilus`). You only do the first two steps once.

1. On github.com click **New repository**. Name it exactly **`OnyejiakuTheophilus.github.io`** (your username, then `.github.io`). Set it to **Public** and click **Create repository**.
2. Click **uploading an existing file**, then drag in everything from inside the unzipped folder (`index.html`, `style.css`, `app.js`, `content.js`, the `assets` folder and so on). Click **Commit changes**.
3. Go to the repository **Settings**, then **Pages**. Under "Build and deployment", set **Source: Deploy from a branch**, branch **main**, folder **/ (root)**, and click **Save**.
4. After one to two minutes your site is live at **https://onyejiakutheophilus.github.io**. Put this link on your CVs, LinkedIn and job applications.

**To update later:** open your repository, click **Add file, then Upload files**, drop in the changed file (for example `content.js`) or new videos, and click **Commit changes**. The site refreshes in about a minute.

---

## 5. Checklist before you share the link

- [ ] Open the live link on your phone and play each video.
- [ ] Click every link once (GitHub, LinkedIn, articles, demos).
- [ ] Add the RAG PDF chat GitHub link and, if possible, a short demo video. Recruiters check these.
- [ ] Check the Kaggle profile link in `content.js` (`https://www.kaggle.com/theophilusonyejiaku`). I built it from your notebook links, so confirm it opens your profile.
- [ ] Your phone number is deliberately not shown on the public site, to avoid spam and scam calls. Your email is.
- [ ] Only show work you are allowed to show. Morning Star CBT is client work, so the card describes it generally. Do not post screenshots with real student names or scores.

---

## If something looks broken

- **A section is empty or the page is blank:** a comma or quotation mark is missing in `content.js`. Undo your last change and try again. Every line in a block needs a comma at the end, and every piece of text needs quotation marks on both sides.
- **A video does not play:** make sure it is an `.mp4`, the file name in `content.js` matches exactly (capital letters count), and the file is inside `assets/videos/`.
- **Changes do not show after publishing:** wait two minutes, then hold Ctrl and press refresh (Cmd and refresh on Mac).
