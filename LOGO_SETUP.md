# 🎨 Logo Setup Guide for GreenThumb KE

## 📋 Quick Answer: How Many Logo Versions Do You Need?

### **Minimum (3 files) - Get Started Fast**
1. ✅ `logo-full.svg` or `logo-full.png` - Main horizontal logo
2. ✅ `logo-icon.svg` or `logo-icon.png` - Square icon version  
3. ✅ `favicon.ico` - Browser tab icon

### **Recommended (5 files) - Professional Setup**
4. ✅ `logo-full-light.svg` or `logo-full-light.png` - White version for dark backgrounds
5. ✅ `logo-icon-light.svg` or `logo-icon-light.png` - Light icon version

---

## 📁 File Structure

Place all logo files in: `public/logos/`

```
public/
└── logos/
    ├── logo-full.svg          (or .png) ← REQUIRED
    ├── logo-full-light.svg    (or .png) ← Optional but recommended
    ├── logo-icon.svg          (or .png) ← REQUIRED
    ├── logo-icon-light.svg    (or .png) ← Optional
    └── favicon.ico                        ← REQUIRED
```

---

## 🎯 Where Each Logo Is Used

### **1. Full Logo (Horizontal)**
- **File:** `logo-full.svg` or `logo-full.png`
- **Used in:**
  - Desktop navigation (when scrolled, white background)
  - Footer
  - Email signatures
  - Business cards
- **Size:** 200-300px wide × 60-80px tall
- **Colors:** Your brand colors (#80a536 green, black text)

### **2. Full Logo - Light Version**
- **File:** `logo-full-light.svg` or `logo-full-light.png`
- **Used in:**
  - Navigation over hero video (transparent/white background)
  - Dark sections
- **Size:** Same as full logo
- **Colors:** White or light colors (for dark backgrounds)

### **3. Logo Icon (Square)**
- **File:** `logo-icon.svg` or `logo-icon.png`
- **Used in:**
  - Mobile navigation (small screens)
  - Favicon (browser tab)
  - Social media profiles
  - App icons
- **Size:** 512×512px (square)
- **Design:** Icon or simplified logo, must work tiny (16×16px)

### **4. Logo Icon - Light Version**
- **File:** `logo-icon-light.svg` or `logo-icon-light.png`
- **Used in:**
  - Mobile navigation over video
  - Dark theme apps
- **Size:** Same as icon (512×512px)

### **5. Favicon**
- **File:** `favicon.ico`
- **Used in:**
  - Browser tab icon
  - Bookmarks
- **Size:** Multi-size .ico file (16×16, 32×32, 48×48)
- **Tip:** Use an online converter to create from your icon PNG

---

## 🎨 Design Guidelines

### **Full Logo Should Include:**
- "GreenThumb" text in black or dark gray
- "KE" in brand green (#80a536)
- Optional: Icon/symbol on the left
- Horizontal layout (wider than tall)

### **Logo Icon Should:**
- Be recognizable at 16×16px
- Work on both light and dark backgrounds
- Usually just the icon/symbol part
- Or a stacked vertical version of "GT" or your symbol

### **Light Versions:**
- Same design, inverted colors
- White or very light colors
- For use on dark backgrounds (hero video, dark sections)

---

## 📐 Recommended Dimensions

| Logo Type | Width | Height | Format | Priority |
|-----------|-------|--------|--------|----------|
| Full Logo | 200-300px | 60-80px | SVG/PNG | ⭐⭐⭐ Required |
| Full Light | 200-300px | 60-80px | SVG/PNG | ⭐⭐ Recommended |
| Icon | 512px | 512px | SVG/PNG | ⭐⭐⭐ Required |
| Icon Light | 512px | 512px | SVG/PNG | ⭐⭐ Recommended |
| Favicon | 16/32/48px | Same | .ico | ⭐⭐⭐ Required |

---

## 🚀 Quick Start Steps

### **Step 1: Create/Get Your Logos**
- Design your logo (or hire a designer)
- Export in multiple formats and sizes

### **Step 2: Name Files Correctly**
- Follow the naming convention exactly
- Place in `public/logos/` folder

### **Step 3: Test**
- The website will automatically use your logos
- If files are missing, it falls back to text logo

### **Step 4: Create Favicon**
- Use online tool: https://favicon.io/favicon-converter/
- Upload your icon PNG
- Download the .ico file
- Place in `public/logos/favicon.ico`

---

## 💡 Format Recommendations

### **SVG (Best Choice)**
✅ Scalable (looks perfect at any size)  
✅ Small file size  
✅ Can be edited  
✅ Works everywhere  

### **PNG (Good Fallback)**
✅ Works everywhere  
✅ Supports transparency  
❌ Fixed size (need multiple versions)  
❌ Larger file size  

### **Use Both!**
- Provide SVG for best quality
- Provide PNG as fallback
- Code automatically tries SVG first, then PNG

---

## 🎯 What Happens If You Don't Have Logos Yet?

**No problem!** The code has a built-in fallback:

- **Text Logo:** Shows "GreenThumb KE" in styled text
- **Icon Fallback:** Shows "GT" in a green circle

You can add your logo files anytime and they'll automatically appear!

---

## 📝 Checklist

Before deploying, make sure you have:

- [ ] `logo-full.svg` or `logo-full.png` in `public/logos/`
- [ ] `logo-icon.svg` or `logo-icon.png` in `public/logos/`
- [ ] `favicon.ico` in `public/logos/`
- [ ] (Optional) `logo-full-light.svg` or `.png`
- [ ] (Optional) `logo-icon-light.svg` or `.png`

---

## 🛠️ Tools to Create Favicon

1. **Favicon.io** - https://favicon.io/favicon-converter/
   - Upload your icon PNG
   - Download .ico file

2. **RealFaviconGenerator** - https://realfavicongenerator.net/
   - More options and formats

3. **Figma** - Design your logo, export as SVG/PNG

---

## ✅ After Adding Logos

1. **Test locally:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000 and check:
   - Navigation logo (scroll to see light/dark versions)
   - Footer logo
   - Browser tab favicon

2. **Commit and push:**
   ```bash
   git add public/logos/
   git commit -m "Add logo files"
   git push
   ```

3. **Deploy:** Vercel will auto-deploy with your logos!

---

## 🎨 Brand Color Reference

Your brand green: **#80a536**

Use this color in:
- The "KE" part of your logo
- Icon accents
- Any green elements in the logo

---

## 📞 Need Help?

If you need help creating logos:
- **Canva** - Easy logo maker (free/paid)
- **Figma** - Professional design tool (free)
- **Hire a designer** - Upwork, Fiverr, 99designs

---

**Remember:** Start with the minimum 3 files (full, icon, favicon), then add light versions later if needed!

