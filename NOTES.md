# Notes

Working notes and preferences for this teaching workspace. Review before designing a lesson.

## Learner preferences

- **Self-directed.** No coach on the snowdome; the lessons *are* the instruction. Don't assume outside coaching.
- **Time-boxed: ~4 hours of lessons total.** Favour tightly-scoped lessons over sprawling ones. Flag if the plan is running over budget.
- Practice surface is an **indoor snowdome** (real snow indoors), not a mountain — drills should work on a short, gentle indoor slope.
- Goal is pragmatic, not academic: **keep up with the group on a trip.** Everything should trace back to linking turns on a green run.

## Course plan (~4 h across ~8 lessons)

Spacing matters (storage strength, not fluency). Recommend spreading these across several dome sessions, not one marathon.

| # | Lesson | Est. | Focus |
|---|--------|------|-------|
| 1 | How a Snowboard Actually Turns | 20 min | The mental model + quiz |
| 2 | Stance & Balance: The Athletic Position | 30 min | Alignment, fore/aft balance |
| 3 | Edging: Sideslip & the Edge-Angle Dial | 35 min | Heel/toe sideslip, edge angle |
| 4 | Pressure: Fore/Aft & Flexion–Extension | 30 min | Down-unweighting, pressure control |
| 5 | Rotation: Knee Steering | 30 min | The movement that actually turns the board |
| 6 | Garlands & the Falling Leaf | 30 min | Turning *without* an edge change |
| 7 | Your First Turns: C-Turns to Linked S-Turns | 40 min | The payoff lesson |
| 8 | On the Mountain: Speed, Terrain, Lifts & the Group | 30 min | Tactics for the trip |

The plan is a compass, not a contract — adjust to evidence in `learning-records/`.

**Status (2026-11-10):** all eight lessons built; course index at `lessons/index.html`. Every lesson carries a diagram, a quiz, a drill, a video block, and (most) a gallery. Lesson 7 flags when to bring a human instructor in.

## Conventions

- **Every lesson carries illustrations.** Use the shared media components rather than ad-hoc markup:
  - **Figures** — embed course-authored SVGs from `assets/img/` with `<figure class="figure">`. Accurate, printable, offline-safe; prefer these.
  - **Watch** — `<div class="watch">` for curated video links (always a named source + one line on what to look for).
  - **Gallery** — `<div class="gallery">` for external image/reference links (credit the host).
- Cite the source inline for any claim, and give each lesson one clearly-marked **primary source**.
- Shared components live in `assets/` (`course.css`, `quiz.js`, `img/`). Every lesson links them; new reusable bits go here too.
- Printable quick-reference lives in `reference/`. The glossary is the canonical vocabulary.
- `GLOSSARY.md` (repo root) is the *mastery* record — terms get added only once genuinely understood. `reference/glossary.html` is the *cheat sheet* and may run ahead of mastery.

## Resume here

The course is built and ready to use. To pick it up again:

1. Open `lessons/index.html` and work through the lessons in order.
2. Do each lesson's drill at the snowdome before moving on, spacing sessions out for retention.
3. Answer the quiz at the end of each lesson; bring anything that doesn't land back to the agent (it is the teacher for this workspace).

Open threads (if the session continues):
- No `learning-records/` entries beyond prior experience yet — add one when there's real evidence (e.g. linking turns unaided), not just coverage.
- `GLOSSARY.md` is deliberately uncreated; promote terms from `reference/glossary.html` once genuinely understood.
- Optional extras if wanted: a printable one-page cheat sheet (`reference/cheatsheet.html`), or richer (photo) illustrations.
- Everything is grounded in the sources listed in `RESOURCES.md`; keep it that way rather than adding unsourced claims.
