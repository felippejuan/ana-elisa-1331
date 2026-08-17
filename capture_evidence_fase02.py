import os
import asyncio
from playwright.async_api import async_playwright

async def capture_fase_02():
    evidence_dir = r"C:\Users\felip\.gemini\antigravity\scratch\ana-elisa-site\docs\v3\evidence\fase-02"
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
            
            # Compromissos specific screenshot
            comp_el = await page.query_selector("#compromissos")
            if comp_el:
                comp_path = os.path.join(evidence_dir, f"compromissos_{name}.png")
                await comp_el.screenshot(path=comp_path)
                print(f"Captured: compromissos_{name}.png")
                
            # Mobilizacao specific screenshot for mobile 375px
            if name == "375px":
                mob_el = await page.query_selector("#mobilizacao")
                if mob_el:
                    mob_path = os.path.join(evidence_dir, f"mobilizacao_375px.png")
                    await mob_el.screenshot(path=mob_path)
                    print(f"Captured: mobilizacao_375px.png")
                
            await page.close()
            
        await browser.close()
        print("SUCCESS: All Fase 2 visual screenshots generated successfully.")

if __name__ == "__main__":
    asyncio.run(capture_fase_02())
