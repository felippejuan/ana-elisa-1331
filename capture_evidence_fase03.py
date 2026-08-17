import os
import asyncio
from playwright.async_api import async_playwright

async def capture_fase_03():
    evidence_dir = r"C:\Users\felip\.gemini\antigravity\scratch\ana-elisa-site\docs\v3\evidence\fase-03"
    os.makedirs(evidence_dir, exist_ok=True)
    
    map_test_url = "file:///C:/Users/felip/.gemini/antigravity/scratch/ana-elisa-site/map-test.html"
    
    viewports = [
        ("320px", 320, 800),
        ("375px", 375, 812),
        ("414px", 414, 896),
        ("768px", 768, 1024),
        ("1024px", 1024, 768),
        ("1280px", 1280, 800),
        ("1440px", 1440, 900)
    ]
    
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        
        for name, w, h in viewports:
            page = await browser.new_page(viewport={"width": w, "height": h})
            await page.goto(map_test_url, wait_until="networkidle")
            
            # Full page map-test screenshot
            full_path = os.path.join(evidence_dir, f"map_isolated_{name}.png")
            await page.screenshot(path=full_path, full_page=True)
            print(f"Captured isolated map: map_isolated_{name}.png ({w}x{h})")
            
            await page.close()
            
        await browser.close()
        print("SUCCESS: All Fase 3 isolated map screenshots generated successfully.")

if __name__ == "__main__":
    asyncio.run(capture_fase_03())
