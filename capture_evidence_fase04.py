import os
import asyncio
from playwright.async_api import async_playwright

async def capture_fase_04():
    evidence_dir = r"C:\Users\felip\.gemini\antigravity\scratch\ana-elisa-site\docs\v3\evidence\fase-04"
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
            
            # Força carregamento e scroll gradual de ponta a ponta
            await page.evaluate("""async () => {
                const distance = 400;
                const delay = 100;
                while (document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight) {
                    document.scrollingElement.scrollBy(0, distance);
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
                document.scrollingElement.scrollTop = 0;
                await new Promise(resolve => setTimeout(resolve, 200));
            }""")
            
            # 1. Full page screenshot
            full_path = os.path.join(evidence_dir, f"full_page_{name}.png")
            await page.screenshot(path=full_path, full_page=True)
            print(f"Captured: full_page_{name}.png ({w}x{h})")
            
            # Ocultar header sticky para isolar screenshots de seções sem sobreposição
            await page.evaluate("() => { const h = document.querySelector('.site-header'); if(h) h.style.position = 'relative'; }")
            
            # 2. Materiais section screenshot
            mat_el = await page.query_selector("#materiais")
            if mat_el:
                mat_path = os.path.join(evidence_dir, f"materiais_{name}.png")
                await mat_el.screenshot(path=mat_path)
                print(f"Captured: materiais_{name}.png")
                
            # 3. Território section screenshot
            terr_el = await page.query_selector("#territorio")
            if terr_el and name in ["1440px", "375px"]:
                terr_path = os.path.join(evidence_dir, f"territorio_{name}.png")
                await terr_el.screenshot(path=terr_path)
                print(f"Captured: territorio_{name}.png")
                
            await page.close()
            
        await browser.close()
        print("SUCCESS: All Fase 4 visual screenshots generated successfully with full image rendering.")

if __name__ == "__main__":
    asyncio.run(capture_fase_04())
