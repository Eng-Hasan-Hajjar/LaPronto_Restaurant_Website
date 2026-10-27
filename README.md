# La Pronto Fast Food — Restaurant Website

A responsive **HTML + CSS + vanilla JavaScript** website for La Pronto (Fatih, Istanbul). Includes Turkish, Arabic, and English localization; restaurant menu and item variants; category filters; search; photo gallery; and a **cart that creates a WhatsApp order message**.

## How to use

1. Unzip `La-Pronto-Website.zip`.
2. Open `index.html` in Chrome, Edge, Firefox, or Safari.
3. Select a language (TR/AR/EN). Navigate to **Menu**, and tap **+** next to items you want to order. If a product has both **sandwich and portion** sizes, each has a distinct add button.
4. Tap the **cart icon** at the top (or the floating cart button on mobile). Increase / decrease quantities, remove items, and optionally type a name or special instructions.
5. Tap **Send Order via WhatsApp**. This opens WhatsApp with a pre-filled order addressed to `+90 536 456 13 22`, including products, chosen variants, quantities, line prices, total, and any optional name / notes. **The visitor must tap Send inside WhatsApp.** There is no automatic transmission or restaurant-confirmed order.

The cart and selected language are saved in browser `localStorage` so products remain if the page is reloaded. The site does not submit orders to a backend and does not include a payment system. WhatsApp and Google Maps links require internet access.

## Business information

- **Open:** Tuesday through Sunday.
- **Closed:** Monday.
- **Clock hours:** not provided. The website asks the customer to call for the daily opening times instead of inventing hours.
- **Phone/WhatsApp destination:** `+90 536 456 13 22` (**verify that this phone number actually has a working WhatsApp account before launch**).
- **Location:** Karagümrük Mahallesi, Profesör Naci Şensoy Caddesi No: 79, Fatih / İstanbul, Türkiye (from customer poster). The Google Maps destination is an address search, not a verified business listing.
- **Menu pricing:** entered from the supplied printed menu images. Validate all prices and product availability with the restaurant before going live.

## Edit the website

- **Menu, prices, translations, WhatsApp message text, product variants:** `js/main.js`.
- **WhatsApp number:** `const CONTACT_NUMBER = '+905364561322'` near the start of `js/main.js`. Update the phone `tel:` links in `index.html` if necessary.
- **Opening days, translated:** `hoursPending` for `tr`, `ar`, and `en` in `js/main.js`, and initial text in `index.html`.
- **Site colors and mobile layout:** `css/style.css`.
- **Menu images and food photography:** `assets/` (from images supplied by the user).
- **Default language:** Turkish; toggles to Arabic RTL or English LTR.

## Publishing

Upload the contents of the site folder (`index.html`, `css/`, `js/`, `assets/`) to a static host such as GitHub Pages or Netlify. No backend is required for this WhatsApp cart. The site can be opened locally for preview.

## Launch checklist

- [ ] Confirm the phone number is **reachable on WhatsApp** and the restaurant wants orders via WhatsApp.
- [ ] Confirm all menu items, sizes, and prices; review any changed menu pictures.
- [ ] Obtain daily opening *clock times* if you want to display them alongside the confirmed Monday closure.
- [ ] Confirm the address/Google Maps destination.
- [ ] Confirm the restaurant's permission to use the food images and logo.
- [ ] Test WhatsApp order messages using an actual phone and browser before publishing.

This is an ordering inquiry/WhatsApp flow, not a server-side e-commerce checkout or a payment platform.
