# ELA 301 — Laboratory Reports Website

Full laboratory reports for **Production Engineering Laboratory and Workshop Practice 301 & 302**,
Department of Production Engineering, University of Benin, Benin City — written up as a static
website.

The source material is the set of 41 photographs of the printed course manual stored in the root of
this repository (`IMG_20260927_*.jpg`, manual pages 3–82). Every report was written from that
manual; every diagram on the site was cropped out of those same photographs, except for a small
number of figures that had to be redrawn (see below).

---

## Viewing the site

It is a plain static site — no build step, no dependencies.

Open `site/index.html` directly in a browser, or serve the folder:

```bash
cd site
python3 -m http.server 8000
# then browse to http://localhost:8000/
```

---

## Structure

```
site/
├── index.html                  landing page — nine section cards
├── assets/
│   ├── styles.css              single stylesheet for the whole site
│   ├── script.js               table-of-contents scroll-spy (progressive enhancement)
│   ├── diagrams/               71 figures cropped from the manual photographs
│   └── figures/                7 hand-authored SVG figures
└── reports/
    ├── hse-301.html            Health, Safety & Environment — safety briefing
    ├── em-301.html             Workshop Measuring Devices
    ├── ww-301.html             Woodwork Practice
    ├── sm-301.html             Sheet Metal Work
    ├── bf-301.html             Bench Fitting
    ├── hs-301.html             Welding (Heat Shop)
    ├── ms-301.html             Machine Shop
    ├── as-301.html             Vehicle Systems (AS 301/302)
    └── fs-301.html             Foundry Practice
```

## The nine sections

| Code | Section | Experiments covered |
|---|---|---|
| HSE 301 | Health, Safety & Environment | Condensed safety briefing: workplace ergonomics, workstation heights, 29 shop rules |
| EM 301 | Workshop Measuring Devices | Angular measurement — protractors, sine bar, spirit level, clinometer |
| WW 301 | Woodwork Practice | EPX 1 bridle joint · EPX 2 mortise and tenon joint |
| SM 301 | Sheet Metal Work | EPX 1 hexagonal prism · EPX 2 frustum of a cone (funnel) |
| BF 301 | Bench Fitting | Taps and dies · production of a bolt and nut |
| HS 301 | Welding | Oxy-acetylene gas welding · joining two parts |
| MS 301 | Machine Shop | Thread cutting and knurling on the centre lathe |
| AS 301/302 | Vehicle Systems | Ignition, fuel, cooling, lubrication, transmission, firing orders |
| FS 301 | Foundry Practice | EPX 1 mould from a solid pattern · EPX 2 mould from a split pattern |

## Report format

Every experiment report follows the format required by the course:

1. Aims
2. Objectives
3. Apparatus
4. Theory / Diagram
5. Table of Values
6. Procedure
7. Precautions
8. Discussion
9. Conclusion

followed by **Questions asked in the material**, **What I learned**, and — where the material
supports them — **Special questions** and a **Graph**.

HSE 301 is deliberately shorter and is presented as a safety briefing rather than as a full
experiment report, since it is not an experiment.

## Notes on the content

- **Diagrams.** The 71 files in `site/assets/diagrams/` were cropped from the manual photographs,
  deskewed, converted to greyscale and contrast-normalised. Figures in the manual that were
  illegible in the photographs were left out rather than reproduced unreadably. Each caption cites
  the manual page it came from.
- **Redrawn figures.** Seven figures in `site/assets/figures/` were authored as SVG because the
  manual has no usable diagram for them: the five automotive schematics (ignition, fuel, cooling,
  transmission, firing order), the labelled centre-lathe diagram, and the sine-bar error graph for
  EM 301. Their captions say so explicitly.
- **Tables.** Tables contain only figures that are given in the manual or that follow from them by
  calculation, with the derivation shown in each row. No measurement readings have been invented,
  and sections with no data carry no table.
- **No cover page.** The reports carry no name, matriculation number, group or date, as the content
  is intended to be read on the site.
- **Discussion sections.** These discuss the faults each operation is prone to and the physics
  behind them, written as typical-fault analysis rather than as a narrative of a particular
  session. Nothing is asserted as having been observed at the bench, because no session was
  observed in writing them. If you have your own results, the paragraphs are structured to take
  them — see [`REVIEW-BEFORE-SUBMITTING.md`](REVIEW-BEFORE-SUBMITTING.md), which also lists the
  two items still worth checking before the work is handed in.
