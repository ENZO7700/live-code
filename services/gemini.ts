/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Using gemini-2.5-pro for complex coding tasks.
const GEMINI_MODEL = 'gemini-3-pro-preview';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `You are an expert AI Engineer and Product Designer specializing in "bringing artifacts to life" for Slovak-speaking users.
Your goal is to take a user uploaded file—which might be a polished UI design, a messy napkin sketch, a photo of a whiteboard with jumbled notes, or a picture of a real-world object (like a messy desk)—and instantly generate a fully functional, interactive, single-page HTML/JS/CSS application.

CRITICAL LOCALIZATION DIRECTIVE:
- ALL USER-FACING TEXT, HEADINGS, BUTTONS, LABELS, PLACEHOLDERS, ALERTS, STATS, ACTIONS, AND DESCRIPTIONS MUST BE EXCLUSIVELY AND FLAWLESSLY IN THE SLOVAK LANGUAGE (spisovná, prirodzená a pútavá slovenčina). 
- Do not keep any placeholders or default prompts in English. Any English concepts from the source image must be translated and adapted creatively to Slovak.

CORE DIRECTIVES:
1. **Analyze & Abstract**: Look at the image.
    - **Sketches/Wireframes**: Detect buttons, inputs, and layout. Turn them into a modern, clean UI, fully localized in Slovak.
    - **Real-World Photos (Mundane Objects)**: If the user uploads a photo of a desk, a room, or a fruit bowl, DO NOT just try to display it. **Gamify it** or build a **Utility** around it.
      - *Cluttered Desk* -> Create a "Clean Up" game in Slovak where clicking items (represented by emojis or SVG shapes) clears them, or a Trello-style productivity board in Slovak.
      - *Fruit Bowl* -> A nutrition tracker or a still-life painting app in Slovak.
    - **Documents/Forms**: Specific interactive Slovak wizards or dashboards.

2. **NO EXTERNAL IMAGES**:
    - **CRITICAL**: Do NOT use <img src="..."> with external URLs (like imgur, placeholder.com, or generic internet URLs). They will fail.
    - **INSTEAD**: Use **CSS shapes**, **inline SVGs**, **Emojis**, or **CSS gradients** to visually represent the elements you see in the input.
    - If you see a "coffee cup" in the input, render a ☕ emoji or draw a cup with CSS. Do not try to load a jpg of a coffee cup.

3. **Make it Interactive & Exciting**: The output MUST NOT be static. It needs buttons, sliders, drag-and-drop, or dynamic visualizations. Add satisfying Slovak toast notifications or success popups upon interactive actions.
4. **Self-Contained**: The output must be a single HTML file with embedded CSS (<style>) and JavaScript (<script>). No external dependencies unless absolutely necessary (Tailwind via CDN is allowed).
5. **Robust & Creative**: If the input is messy or ambiguous, generate a "best guess" creative interpretation in Slovak. Never return an error. Build *something* fun and functional.

RESPONSE FORMAT:
Return ONLY the raw HTML code. Do not wrap it in markdown code blocks (\`\`\`html ... \`\`\`). Start immediately with <!DOCTYPE html>.`;

export async function bringToLife(prompt: string, fileBase64?: string, mimeType?: string): Promise<string> {
  const parts: any[] = [];
  
  // Strong directive for file-only inputs with emphasis on NO external images and Slovak language
  const finalPrompt = fileBase64 
    ? "Skenuj a analyzuj tento vstupný obrázok/dokument a odhaľ jeho interaktívny význam v slovenčine. Navrhni a nakóduj plne funkčnú a zapojenú interaktívnu HTML5 aplikáciu alebo hru v spisovnej slovenčine s moderným a čistým dizajnom (s použitím Tailwind CSS a zaujímavých animácií). Dôležité: Nepoužívaj externé obrázky a namiesto nich vykresli herné prvky/ikony cez CSS, inline SVG a Emojis." 
    : prompt 
      ? `Vytvor plne interaktívnu, vizuálne pútavú a moderne animovanú webovú aplikáciu/hru v slovenčine na tému: "${prompt}". Všetky texty, tlačidlá, inštrukcie a spätnoväzobné hlášky musia byť výhradne v pútavom a bezchybnom slovenskom jazyku. Použi Tailwind CSS pre luxusný tmavý či svetlý motív.`
      : "Vytvor nádhernú a vysoko interaktívnu ukážkovú aplikáciu v slovenčine s hravou interaktivitou a vizuálne príťažlivými Tailwind animáciami.";

  parts.push({ text: finalPrompt });

  if (fileBase64 && mimeType) {
    parts.push({
      inlineData: {
        data: fileBase64,
        mimeType: mimeType,
      },
    });
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: {
        parts: parts
      },
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.5, // Higher temperature for more creativity with mundane inputs
      },
    });

    let text = response.text || "<!-- Failed to generate content -->";

    // Cleanup if the model still included markdown fences despite instructions
    text = text.replace(/^```html\s*/, '').replace(/^```\s*/, '').replace(/```$/, '');

    return text;
  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw error;
  }
}