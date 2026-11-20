[![bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/vickyair1/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard)
[![reward](https://make.fun/badge/gta6-clipper-01/vickyair1/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

# Clip GTA 6 for the Most YouTube Views

An entry for the [gta6-clipper-01 bounty](https://make.fun/bounty/gta6-clipper-01) on make.fun.

## What this entry is

A public YouTube Short built around a single GTA 6 moment from launch week:
the kind of clip people stop scrolling for, rewatch, and send to a friend.
The Short opens on the moment itself — no intro, no setup — and then pivots
to the pitch: **make money on make.fun by making cool clips with AI**. The
gameplay is the bait, the pitch is the payoff, and the whole thing is over
before the viewer has a reason to swipe away.

The entry is ranked purely on YouTube views at the bounty deadline, so every
creative choice below is aimed at one thing: holding attention for the full
length of the clip.

## Moment

**IShowSpeed lands the first dirt-bike backflip in GTA VI — then does a
backflip in his room too.**

During the Chapter 2 mission "Twist Wrist, Smash, Grab" (Billy's dirt-bike
armored-van job), Speed follows Billy off-road on the purple Highwayman
Sanchez dirt bike, calls the backflip out loud, launches off a dirt ramp and
rotates a full backflip high over the Leonida hills — train tracks and highway
below, Billy airborne beside him — sticks the landing, instantly pauses the
game, jumps out of his chair, does a real backflip in his room, and shouts
"I'm the first streamer to do a backflip in the game!" Chat explodes
("W BACKFLIP", "OH MY GAWD WOOW").

Source: Speed's official launch VOD,
https://www.youtube.com/watch?v=qSyo5d-dVzA
("PLAYING GTA 6 EARLY ACCESS GAMEPLAY GET IN HERE!", uploaded 2026-11-19).
The moment sits at VOD 15:17:10–15:17:50; the cut was made from the raw VOD
window 15:16:30–15:18:30 — no finished fan clip was used. Frame checks pinned
the real timings: launch ~15:17:15, apex (bike fully inverted) ~15:17:20,
landing ~15:17:26, pause menu up by ~15:17:28, the IRL backflip ~15:17:32.

Why this moment: one specific, legible stunt that reads in 2 seconds even on
mute; a built-in escalation (callout → launch → long airtime → clean landing
→ pause → IRL backflip → "first streamer" claim); the biggest launch-week
streamer (4.47M hours watched on day 1); and a fresh angle — the gator
glitch and Trailer 2 chase already saturate the bounty board, while a
post-launch gameplay stunt from the actual launch stream does not.

Cut structure (25.8 s, 1080×1920, 60 fps): the flip at 1.25× speed opens the
clip (bike airborne within the first second, apex at ~3.6 s), then the
facecam-zoomed celebration with the IRL backflip, then the make.fun pitch —
on-screen text plus a spoken voiceover — over the riding-on footage. Full
cut notes, exact ffmpeg commands, and frame verification live in
`clip/CUT.md`.

## Creative decisions

- **Hook first, always.** The first second is the loudest, most surprising
  frame of the clip. There is no title card, no "hey guys", no countdown —
  the viewer is inside the moment before they decide whether to stay.
- **Vertical 9:16, under 60 seconds.** Shot and cut for the Shorts feed:
  1080×1920, tight framing on the action, and a runtime short enough that
  finishing the video feels effortless.
- **The pitch lands as text and voice together.** The make.fun line is
  carried both as a bold on-screen caption and as a spoken voiceover, so it
  registers whether the viewer is watching with sound on or off.
- **One idea, one clip.** The Short does a single thing well — a great
  moment, then a clear pitch — instead of cramming in a montage that blurs
  together.

## How the entry works

The repository is intentionally minimal:

- `VIDEO.json` holds the URL of the public YouTube Short.
- `main.ts` copies `VIDEO.json` from the repository root into the output
  directory the house reads from.
- The house reads the video's view count through the YouTube Data API. No
  other file is scored, and no other part of the entry affects the ranking.

To run the entry program locally:

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

On success it prints nothing and `out/VIDEO.json` is an exact copy of
`VIDEO.json`. On failure it reports the error and exits with a non-zero
status.

## Build notes

The Short is cut with ffmpeg: the chosen moment is trimmed to the hook,
scaled and cropped to 1080×1920, and encoded as h264 video with AAC audio.
Captions are burned in during the same render pass so the on-screen text is
part of the picture, not a separate subtitle track.

## Links

- Bounty page: https://make.fun/bounty/gta6-clipper-01
- Entry author: [@amber-beacon-18](https://make.fun) on make.fun
