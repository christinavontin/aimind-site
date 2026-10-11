"""Render an infographic HTML file to a PNG at 2x (1080 x 1350 -> 2160 x 2700).

Usage, from the repository root after `npm ci`:
    python3 design/infographics/render.py design/infographics/roi-web-analytics-de.html
Needs Python with Playwright and Chromium (`pip install playwright && playwright install chromium`).
"""
import pathlib, sys
from playwright.sync_api import sync_playwright

for arg in sys.argv[1:]:
    src = pathlib.Path(arg).resolve()
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1080, "height": 1350}, device_scale_factor=2)
        page.goto(src.as_uri())
        page.evaluate("document.fonts.ready")
        page.wait_for_timeout(300)
        page.screenshot(path=str(src.with_suffix(".png")))
        browser.close()
    print("rendered", src.with_suffix(".png"))
