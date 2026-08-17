import os
import asyncio
from playwright.async_api import async_playwright

async def capture_all():
    evidence_dir = r"C:\Users\felip\.gemini\antigravity\scratch\ana-elisa-site\docs\v3\evidence\fase-01"
    os.makedirs(evidence_dir, exist_ok=True)
    
    html_path = "file:///C:/Users/felip/.gemini/antigravity/scratch/ana-elisa-site/index.html"
    
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
            await page.goto(html_path, wait_until="networkidle")
            
            # Full page screenshot
            full_path = os.path.join(evidence_dir, f"full_page_{name}.png")
            await page.screenshot(path=full_path, full_page=True)
            print(f"Captured: full_page_{name}.png ({w}x{h})")
            
            # Hero specific screenshot
            hero_el = await page.query_selector("#inicio")
            if hero_el and name in ["320px", "1440px"]:
                hero_path = os.path.join(evidence_dir, f"hero_{name}.png")
                await hero_el.screenshot(path=hero_path)
                print(f"Captured: hero_{name}.png")
                
            await page.close()
            
        # Capture anchor navigation test on desktop
        page = await browser.new_page(viewport={"width": 1440, "height": 900})
        await page.goto(html_path, wait_until="networkidle")
        
        for section_id in ["historia", "compromissos", "mobilizacao"]:
            await page.click(f'a[href="#{section_id}"]')
            await page.wait_for_timeout(600)
            anchor_path = os.path.join(evidence_dir, f"anchor_{section_id}_1440px.png")
            await page.screenshot(path=anchor_path)
            print(f"Captured anchor navigation: anchor_{section_id}_1440px.png")
            
        await browser.close()
        print("SUCCESS: All visual screenshots generated successfully.")

if __name__ == "__main__":
    asyncio.run(capture_all())
