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
            
            # 1. Full page screenshot (sem header fixo sobreposto)
            # Ocultamos temporariamente o header fixo para a captura do elemento isolado, ou usamos viewport limpo
            full_path = os.path.join(evidence_dir, f"full_page_{name}.png")
            await page.screenshot(path=full_path, full_page=True)
            print(f"Captured: full_page_{name}.png ({w}x{h})")
            
            # 2. Compromissos isolado com scroll natural sem header sobreposto
            comp_el = await page.query_selector("#compromissos")
            if comp_el:
                # Ocultar o header sticky durante o screenshot do elemento isolado para evitar sobreposição nos recortes
                await page.evaluate("() => { const h = document.querySelector('.site-header'); if(h) h.style.position = 'relative'; }")
                comp_path = os.path.join(evidence_dir, f"compromissos_{name}.png")
                await comp_el.screenshot(path=comp_path)
                print(f"Captured: compromissos_{name}.png")
                # Restaurar header
                await page.evaluate("() => { const h = document.querySelector('.site-header'); if(h) h.style.position = 'sticky'; }")
                
            # 3. Mobilizacao specific screenshot for mobile 375px
            if name == "375px":
                mob_el = await page.query_selector("#mobilizacao")
                if mob_el:
                    await page.evaluate("() => { const h = document.querySelector('.site-header'); if(h) h.style.position = 'relative'; }")
                    mob_path = os.path.join(evidence_dir, f"mobilizacao_375px.png")
                    await mob_el.screenshot(path=mob_path)
                    print(f"Captured: mobilizacao_375px.png")
                    await page.evaluate("() => { const h = document.querySelector('.site-header'); if(h) h.style.position = 'sticky'; }")
                
            await page.close()
            
        await browser.close()
        print("SUCCESS: All Fase 2 visual screenshots regenerated cleanly without sticky header overlap.")

if __name__ == "__main__":
    asyncio.run(capture_fase_02())
