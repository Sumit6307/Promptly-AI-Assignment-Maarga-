# MAARGA App - Frontend UI Replication

This project is a pixel-perfect, fully responsive frontend replication of the MAARGA platform landing page. Built using React, Vite, and Tailwind CSS, the focus of this assignment was achieving exact fidelity to the provided Figma designs—replicating layouts, typography alignment, curated color palettes, and complex asset blending techniques across six interconnected sections.

## 🚀 Approach & Implementation

The application is structured sequentially as a single-page scrolling experience, matching the narrative flow of the design:

1. **Component-Based Architecture**: 
   The UI is broken down into distinct React components: `Hero`, `Philosophy`, `Features`, `Paths`, `Upcoming`, and `Footer`. Each component encapsulates its own responsive logic and background styling.
2. **Advanced Asset Blending**:
   Rather than manually removing backgrounds from sketch-style image assets (like the temple backgrounds or the logo), I utilized CSS `mix-blend-mode: multiply`. This allows the intricate sketch textures and anti-aliasing of the provided `.png` assets to blend seamlessly into the warm, culturally tuned background colors (e.g., `#F5F0E9`, `#F4EFF0`) without creating harsh white pixel fringes.
3. **Responsive Design Execution**:
   Mobile-first design principles were enforced through Tailwind CSS. Font scales (`text-sm` vs `md:text-base`), padding, and logo size adjustments (`170px` mobile vs `230px` desktop) were implemented to ensure the elegant, spacious feel is preserved on small devices.
4. **Absolute Positioning for Complex Layers**:
   Sections like the `Footer` and `Philosophy` required precise absolute positioning to achieve "bottom-overflow" imagery and precise logo placement in the top-right margins, independent of the flowing document text.

## 📦 Libraries Used

- **React (v18)**: Core library for UI component creation.
- **Vite**: Build tool chosen for ultra-fast Hot Module Replacement (HMR) and optimized production compilation.
- **Tailwind CSS**: Primary styling engine. Used for rapid layout prototyping, exact hex color injection (e.g., `bg-[#F5F0E9]`), and responsive media queries.
- **Lucide React** (Optional/Standardized): For standardized, scalable SVG icons where necessary (like arrows in the Paths section).

## 🛠️ How to Run Locally

1. Clone the repository and navigate into the `vite-project` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the Vite development server:
   ```bash
   npm run dev
   ```
4. Open the provided `localhost` URL in your browser.
