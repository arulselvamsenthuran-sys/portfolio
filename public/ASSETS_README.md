# Portfolio Assets Status & Manual Steps

## 1. Profile Picture
- **Status:** ✅ **Active & Connected**
- **File location:** `public/images/profile.jpeg` (62.9 KB)
- **Alt text:** "Senthuran Arulselvam – profile photo"
- **Styling:** Circular container, `object-fit: cover`, responsive (240px desktop, 200px mobile).

---

## 2. Resume PDF
- **Status:** ✅ **Active & Connected**
- **File location:** `public/Senthuran_Arulselvam_Resume.pdf` (199 KB)
- Connected to **Download Resume** buttons in both Hero and About sections with `target="_blank"` and `download` attributes.

---

## 3. Project Images

| Project | File Path | Status |
|---|---|---|
| **Neuro Player** | `public/images/neuro-player.png` | ✅ Active (249 KB, PNG) |
| **Autonomous Chair** | `public/images/autonomous-chair.png` | ✅ Active (675 KB, PNG) |
| **Vehicle Data Management System** | `public/images/vehicle-data-management.jpg` | ⏳ Missing on disk — Clean fallback placeholder ("Image coming soon") rendered |
| **Personal Financial Decision Support System** | `public/images/personal-finance.jpg` | ⏳ Missing on disk — Clean fallback placeholder ("Image coming soon") rendered |
| **Color Slicer Game** | `public/images/color-slicer.jpg` | ⏳ Missing on disk — Clean fallback placeholder ("Image coming soon") rendered |

### How to add the 3 missing project images:
Place the screenshot files in `public/images/`:
1. `vehicle-data-management.jpg` (or `.png` / `.webp` — if using a different format, update the extension in `src/data/portfolio.ts`)
2. `personal-finance.jpg`
3. `color-slicer.jpg`
Recommended aspect ratio: **16:9** (e.g. 1280×720 or 1920×1080).
