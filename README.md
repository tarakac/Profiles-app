# Profiles App

This is a simple React application built using **Vite** and **React-Bootstrap**.  


## Features implemented so far

1. **Project setup**  
   - Initialized a **Vite + React** project inside a VS Code dev container with Node.js.
   - Dev server configured to run with `--host` for container compatibility.

2. **React-Bootstrap integration**  
   - Installed `react-bootstrap` and `bootstrap`.
   - Imported Bootstrap CSS in `src/main.jsx`.

3. **Hello React page**  
   - Replaced `<App />` content with a React-Bootstrap `Alert` component displaying **"Hello React"**.
   - Wrapped the alert in a Bootstrap `Container` with padding for proper spacing.

# How to run the app
--Install dependencies:
    ```bash
        npm install
--Start Dev Server:
    npm run dev

   # part 1 
   Screenshot  : React_Screenshot.png
   **commit link introduced React-Bootstrap and “Hello React”:** https://github.com/tarakac/Profiles-app/commit/e87982c

   # build
   \ ```bash
    npm run build
    \ ```

# Deploy (GitHub Pages via Actions)
- Ensure `base: '/profiles-app/'` in `vite.config.js`
- Push to `main`; the CI workflow will build and deploy automatically.
- Settings → Pages → Source: **GitHub Actions**

   # part 2:
    **Live URL :** (https://tarakac.github.io/Profiles-app/)

    # Part 3:
    Screenshot : profiles_ss.png
   **commit link to ["Add ProfileCard component and render profiles using map()"] :**https://github.com/tarakac/Profiles-app/commit/4362958