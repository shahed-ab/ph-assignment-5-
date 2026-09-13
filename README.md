# 🧱 Dev Stack Builder

A modern, responsive web application for discovering, comparing, and building your personalized developer technology stack across frontend, backend, database, language, styling, and DevOps tools.

![Dev Stack Builder Screenshot](/ui/full.png)

---

## 📖 Project Overview

**Dev Stack Builder** is an interactive platform built with **React**, **Vite**, **Tailwind CSS**, and **DaisyUI**. It empowers developers to explore modern industry-standard technologies, review their difficulty levels, ratings, and categories, and curate a custom development stack in real-time.

---

## ⚡ Technologies Used

- **React.js 18**: Component-based user interface architecture with modern Hooks (`useState`, `useEffect`).
- **Vite**: Ultra-fast build tool and development server with hot module replacement (HMR).
- **Tailwind CSS v3**: Utility-first CSS framework for flexible, bespoke styling and responsive layouts.
- **DaisyUI**: Semantic component library plugin extending Tailwind CSS with prebuilt utilities.
- **React-Toastify**: Toast notifications alerting users on stack additions, duplicate prevention, and deletions.
- **Devicon CDN**: Vector SVG tech logos for clean, scalable brand visuals.

---

## ✨ 3 Key Features

1. **Interactive Stack Builder with Conflict & Duplicate Prevention**
   - Seamlessly add technologies from the catalog to your sidebar stack with live counter updates (`X Technology Selected`).
   - Built-in duplicate detection prevents adding the same tool multiple times and triggers a warning alert with `react-toastify`.
   - Technology cards update dynamically to a disabled state reading `✓ Added to Stack`.

2. **Centralized Brand Theme & Responsive Sticky Navigation**
   - A single shared brand gradient (`--brand-gradient: linear-gradient(135deg, #FF6036 0%, #E11D48 50%, #9333EA 100%)`) defined once in `:root` and shared across the brand name, hero headings, and action buttons.
   - Sticky navbar with desktop navigation links and an adaptive mobile drawer toggled via the hamburger menu icon.

3. **Asynchronous JSON Catalog with Loading Feedback**
   - Decoupled technology catalog stored in `public/data/technologies.json` loaded asynchronously using standard `fetch()` inside a `useEffect` hook.
   - Displays an animated loading spinner while dataset resolution occurs, ensuring non-blocking initial rendering.

---

## 🛠️ Getting Started Locally

### 1. Clone the repository
```bash
git clone <repository-url>
cd B14-A05-DevStack-main
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## 🧠 React Core Concepts & Q&A

1. What is JSX, and why is it used in React? JSX lets me write HTML-looking markup right inside my JS files. I used it because it's way easier to visualize my UI structure this way instead of writing plain React.createElement() calls everywhere. Vite compiles it down to regular JS behind the scenes.

2. What is the difference between props and state? Props are data a component gets from its parent — it can't change them, just use them. State is data a component manages on its own and can update, which then re-renders the UI automatically.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows functional components to declare and manage reactive state variables. It returns an array with two elements: the current state value and a function to update that state.

In this project, `useState` is used in:
- `App.jsx`:
  - `technologies`: Stores the array of technologies fetched from `/data/technologies.json`.
  - `myStack`: Tracks the list of selected technologies currently in "Your Stack".
  - `isLoading`: Tracks whether the JSON dataset is currently being fetched.
- `Navbar.jsx`:
  - `mobileMenuOpen`: Controls the toggle state (open/closed) of the mobile navigation drawer.
  - `activeLink`: Tracks the currently highlighted navigation link.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook manages **side effects** in functional components — operations that interact with outside systems, such as network requests, subscriptions, timers, or manual DOM manipulations.

We needed `useEffect` to fetch the external `technologies.json` dataset when the application mounts (with an empty dependency array `[]`). Fetching data inside `useEffect` ensures that the network request happens after the initial render without blocking the UI, and prevents triggering infinite re-render loops that would occur if fetching directly in the component body.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
When rendering lists using `.map()`, React relies on the `key` prop to identify each element in the Virtual DOM during reconciliation. When items are added, removed, or reordered, unique keys enable React to accurately detect which specific DOM nodes need modification instead of tearing down and recreating the entire DOM list. This optimizes rendering performance and preserves component state (such as input focus or CSS transitions).

### 6. What is conditional rendering? Show one place you used it.
**Conditional rendering** is the technique of rendering different UI elements or components based on specified boolean conditions, state, or logic (using ternary operators `? :`, logical AND `&&`, or `if/else` statements).

In this project, conditional rendering is used in `YourStack.jsx` to toggle between the empty state and the populated stack list:
```jsx
{count === 0 ? (
  /* Empty State matching ui/YourStack-without.png */
  <div className="border border-dashed border-sky-200/90 rounded-2xl py-12 px-4 flex items-center justify-center text-center">
    <p className="text-slate-400 text-sm font-normal">
      Your stack is empty.
    </p>
  </div>
) : (
  /* Populated State with items & Remove All button */
  <div>
    <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
      {stack.map((item) => (
        <div key={item.id} className="border border-slate-200/90 rounded-xl p-3 ...">
          {/* Item details & remove button */}
        </div>
      ))}
    </div>
    <button onClick={onRemoveAll} className="...">Remove All</button>
  </div>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to Child (Downward)**: Data is passed through **props**. The parent attaches props to the child's JSX tag, and the child receives them as arguments. For example, `App.jsx` passes each technology object and its status to `TechCard`:
  ```jsx
  <TechCard tech={tech} isAdded={isTechInStack(tech.id)} onAdd={handleAddToStack} />
  ```
- **Child to Parent (Upward)**: A child sends data or user events back up to the parent using **callback functions** passed down as props. For example, when the user clicks the "Add to Stack" button inside `TechCard`, it calls `onAdd(tech)`. This executes `handleAddToStack(tech)` located in the parent (`App.jsx`), allowing the child to trigger a state update in the parent.

---

## 📄 License
MIT License. © 2026 Dev Stack.
