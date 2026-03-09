# infinity by aviral

A minimal, classy advertisement website for math tutoring services. Designed to feel human, sophisticated, and intentional—not templated or AI-generated.

---

## ✨ Features Completed

### 1. **Sticky Header**
- Elegant serif typography ("infinity" + "by aviral")
- Subtle backdrop blur effect on scroll
- No navigation menu—pure minimalism

### 2. **Hero Section**
- Full-screen landing with bold headline: "math isn't mathing?"
- Dark gradient background (ready for custom image)
- Smooth-scroll CTA button
- Clean, attention-grabbing design

### 3. **About Section**
- Two-column layout (bio left, photo right)
- Sticky profile photo placeholder
- **NEW: Social media icons row** under the photo
  - Instagram, LinkedIn, TikTok, Twitter/X
  - Clean inline SVG icons (22px)
  - Hover effect with gold accent color
  - Placeholder links ready for customization
- Professional, editorial feel

### 4. **Expression of Interest Form**
- Premium form design with required fields:
  - Student name (required)
  - Phone number (required)
  - Email (optional)
  - Board dropdown: IB / IGCSE
  - Year group dropdown: Year 8-13
- Console logging on submit (ready for backend integration)
- Fully responsive

---

## 🎨 Design Philosophy

- **Typography**: Cormorant Garamond (headings) + Inter (body)
- **Colors**: Charcoal (#1a1a1a), Off-white (#f8f8f6), Gold accent (#c9a961)
- **Layout**: Spacious, breathable, editorial
- **Animation**: Subtle fade-in on scroll
- **Mobile**: Fully responsive, mobile-first approach

---

## 📝 Current Functional Paths

- **`index.html`** — Main single-page website
- **`css/style.css`** — All styling and responsive design
- **`js/main.js`** — Scroll animations, form handling, header effects

---

## 🔧 Customization Instructions

### Add Your Hero Background Image
In `css/style.css` (line 123), replace the gradient:
```css
#hero {
    background: url('your-image-url.jpg') center/cover no-repeat;
}
```

### Add Your Profile Photo
Replace the `.image-placeholder` div in `index.html` with:
```html
<img src="your-photo.jpg" alt="Aviral">
```

### Connect Social Media Links
In `index.html`, replace the `href="#"` placeholders:
```html
<!-- Instagram -->
<a href="https://instagram.com/yourusername" class="social-icon">

<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourusername" class="social-icon">

<!-- TikTok -->
<a href="https://tiktok.com/@yourusername" class="social-icon">

<!-- Twitter/X -->
<a href="https://twitter.com/yourusername" class="social-icon">
```

### Connect the Form
Replace the console.log in `js/main.js` with a service like:
- **Formspree**: Simple email forwarding
- **EmailJS**: Direct email from JavaScript
- **Custom Backend**: POST to your own API

---

## 🚀 Features Not Yet Implemented

- Live form submission integration
- Analytics tracking (Google Analytics, Plausible, etc.)
- Additional pages (blog, testimonials, etc.)
- Dark mode toggle (optional)

---

## 💡 Recommended Next Steps

1. **Add your actual images** (hero background + profile photo)
2. **Update the About text** with your real story and location
3. **Connect social media links** to your actual profiles
4. **Set up form backend** (Formspree or EmailJS recommended)
5. **Test on mobile devices** to ensure perfect responsiveness
6. **Add meta tags** for SEO (title, description, Open Graph tags)
7. **Consider adding testimonials** section for social proof

---

## 📱 Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-friendly and responsive
- Smooth scroll and animations supported

---

## 🎯 Design Goals Achieved

✅ Minimal, uncluttered layout  
✅ Classy, editorial feel  
✅ Doesn't look AI-generated  
✅ Professional social media integration  
✅ Easy to customize  
✅ Fully responsive  
✅ Fast loading  

---

**Built with intention. Designed for impact.**
