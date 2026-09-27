# Media delivery workflow

Source photos and artwork in `src/assets/img` are retained unchanged. Browser
delivery files live in `src/assets/optimized` and are generated with:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/optimize-media.ps1
```

The script uses the locally installed `ffmpeg` encoder, writes WebP at quality
82, preserves alpha for PNG artwork, and creates 640px/960px responsive
renditions for album and hero photography. It is a one-time/build-development
tool only; no image processor is shipped to the browser bundle.

The 960px cap is intentional: content cards render at 300px, story images at
roughly 600px, and the gallery is limited to 80vh. The hero retains a 960px
desktop rendition and a 640px mobile rendition. The MP4 remains source media
and is deferred with `preload="none"`; it is not re-encoded because doing so
would alter the supplied video without an approved quality target.
