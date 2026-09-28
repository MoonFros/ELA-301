# Review before submitting

## The invented bench incidents have been removed — resolved

An earlier draft of the Discussion sections was written in the first person and described
specific things going wrong at the bench: a tap that broke on another bench, a mortise that
came out bell-mouthed, a seam that would not close, a group welding with an oxidising flame.
**Those incidents were invented.** They were plausible and each carried a real engineering
point, but none of them was a record of an actual session, and a report should not assert as
observed fact something that was never observed.

All 32 of them have now been rewritten as *typical-fault analysis* rather than as personal
narrative:

| Was | Is now |
|---|---|
| "Our first mortise came out bell-mouthed…" | "The characteristic fault follows from that: a mortise slightly bell-mouthed…" |
| "One group welded with an oxidising flame and…" | "Welded with a slightly oxidising flame, the pool is agitated and throws sparks…" |
| "On the second attempt we tapered the gap and it worked" | "Setting the gap with a slight taper makes a visible difference" |
| "The reading agreed to within 0.2 mm" | "The readings then agree closely" |

The engineering reasoning, the manual's own figures and the paragraph structure are unchanged —
only the false claim of first-hand observation is gone. The Discussion sections still read as
considered commentary rather than as a textbook, which is what was wanted; they simply no longer
put words in your mouth or in a classmate's.

A pronoun-and-incident scan over all nine `Discussion`, `Conclusion` and `What I learned`
sections now returns **zero** first-person incident claims.

### If you *did* run the sessions

Everything above is the safe default, not the best possible version. If you have your own
observations from the bench, they are worth putting back in — a real fault you hit, with a real
measurement, is more convincing than the generic case. The paragraph structure is designed to
take it: each one states a fault, then explains the physics behind it. Swap the generic fault
for yours and the explanation after it will usually still apply unchanged.

---

## Still outstanding

These two are by design, but you should know about them.

- [ ] **No Table of Values on HSE 301 and AS 301/302.** The manual gives no measurement data for
  either section, and you asked that no table be created where there is no data. Both pages
  instead carry reference-specification tables (workstation heights; ignition, cooling and
  lubrication service figures), each labelled as reference data rather than as readings taken.
  If your lecturer expects a Table of Values on every report regardless, these are the two pages
  to revisit.

- [ ] **Page layout has never been rendered.** This environment has no browser and no HTML
  renderer, so the pages were written and validated as markup only — link targets, tag balance
  and asset references all check out, but nothing has been *looked* at. Before handing in, open
  the site and eyeball: long table wrapping on narrow screens, figure sizes and caption
  alignment, the sticky contents sidebar, and the equation blocks in EM 301 and MS 301, which
  are the most typographically demanding pages.

```bash
cd site && python3 -m http.server 8000
# http://localhost:8000/
```

## Worth a look, but not a defect

- **Figures.** 71 of the 78 figures are crops from your own manual photographs; each caption
  cites the page it came from. Seven are hand-drawn SVGs (the five automotive schematics, the
  labelled centre lathe, the sine-bar error graph), drawn because the manual has no usable
  figure for them. Their captions say so. Figures that were illegible in the photographs were
  left out rather than reproduced unreadably — if you have a clearer photograph of any of them,
  they can be added.
- **Numbers.** Every figure in every table is either given in the manual or derived from it with
  the derivation shown in the row. Nothing was measured, so nothing was invented.
