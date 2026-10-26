# GBL HVAC — fill-in list

Run `npm run placeholders` for the live list with line numbers.

Nothing in `[[brackets]]` shows on the live site any more. What's left are notes in the code for later:

| Placeholder | Where | What's needed |
|---|---|---|
| `[[CONFIRM]]` SMS | `lib/site.ts` `QUOTE_BY_TEXT` | The quote form on /contact opens a pre-filled text to 403-970-6988. If that number can't receive texts, set it to `false`. |
| `[[EMAIL]]` | `app/contact/page.tsx` | Add an email row if Quinn wants one listed. |
| `[[CLIENT PHOTO]]` | `app/page.tsx` "Who you're calling" | Shows the van right now. A photo of Quinn would build more trust. |
| `[[CLIENT LOGO]]` | `components/Logo.tsx`, `app/icon.svg` | Stand-in mark drawn to echo the truck badge. Swap for the real logo file if he has one. |
| Reviews | `lib/reviews.ts` | Empty = section hidden. Paste real Google reviews word for word. No Review schema. |
