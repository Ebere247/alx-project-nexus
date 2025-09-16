# alx-project-nexus

# Dynamic E-Commerce Product Catalog

## Project Overview
This prject simulates a real-world e-commerce scenerio, focusing on balacing functional requirements with user experience considerations. It involves building a dynmanic product catalog where users can browse, filter, and sort products seamlessly across Web, Mobile and PWA platforms.

---

## Project Goals
The primary objectives are:

1. **API Integration**: For fetching and displaying product data dynmaically from the APIs.
2. **User Convenience**: Implement filtering and sporting to improve product discovery.
3. **Enhanced Experience**: Create a responsive, user-friendly interface with smooth navigation and optimised performance.

---

## Technologies Used
- **React/React Native**: Component-based UI development.
- **Redux**: Efficient state management.
- **TypeScript**: Type safety and maintainable codebase.
- **Tailwind CSS**: Modern, responsive styling.

---

## Key Features
### 1. API Data Integration
- Fetch and display product data dynamically from a backend API.
- -Handle loading states and error messages gracefully.

### 2. Filtering and Sorting
- View products by categoty filtering.
- Price sorting of each product in ascending and descending order.
- Combined multiple filters through for detailed relts through multi-criteria filtering.

### 3. Pagination & Infinite Scrolling 
- Using pagination to view chunck of products in a numbered navigation.
- Using infinite scrolling to as a user scroll to seamlessly load more products.

### 4. Responsive Design
- Enables the application to work seamlessly across desktops, tablets and mobile devices.
   








## Documentation of ALX ProDev Frontend Engineering program

A documentation showcasing my learnings, projects, and best practices from the **ALX ProDev Frontend Engineering program (Week 1 – 12).**

---

## Overview
The **ProDev Frontend Engineering program** was a 12-week journey covering the foundations and advanced topics of frontend development.  
I explored **Semantic HTML, modern CSS preprocessors (SASS/SCSS), TypeScript, React with Next.js, Redux, GraphQL, PWA, and Mobile Development with React Native**.  
This repository documents my **projects, learnings, challenges, and best practices**.  

---

## Major Learnings — ProDev Frontend Engineering

### Key Technologies
- **Semantic HTML** — Accessibility and structure  
- **SASS / SCSS** — Modular, reusable styling  
- **React + Next.js** — SSR, SSG, API routes, and dynamic routing  
- **TailwindCSS** — Utility-first styling  
- **TypeScript** — Strong typing, generics, interfaces, safer components  
- **State Management** — Redux Toolkit & Context API  
- **Hooks Mastery** — Core React hooks and custom hooks (typed)  
- **GraphQL** — Schema design, resolvers, Apollo Client integration  
- **PWA Fundamentals** — Service workers, manifests, offline-first design  
- **Mobile Development** — React Native & Expo (core components, styling, Expo Router)  
- **API Integration** — REST & GraphQL, error handling, retries, optimistic updates  

---

### Important Frontend Development Concepts
- **Next.js data fetching:** `getServerSideProps`, `getStaticProps`, API routes  
- **System design & analysis:** modular components, UI performance optimization  
- **TypeScript rigor:** shared interfaces, discriminated unions, typed hooks  
- **GraphQL operations:** queries, mutations, and caching strategies  
- **Consistent API integration:** Axios/fetch, retries, error handling middleware  

---

## Challenges Faced & Solutions

### 1. Type errors & `any` usage
- **Problem:** Components and API handlers began with `any`, causing runtime issues.  
- **Solution:** Defined shared interfaces (`interfaces/index.ts`) and used typed hooks & API calls (`axios.get<MyType[]>`).  

### 2. ESLint / Build blockers
- **Problem:** `npm run build` failed due to lint rules (`no-explicit-any`, unused vars).  
- **Solution:** Fixed types, removed unused variables, escaped special characters, followed ESLint rules.  

### 3. Image handling with Next.js
- **Problem:** Broken image paths (`@/assets/...`) not loading in production.  
- **Solution:** Moved images to `/public` and used `next/image` with proper config.  

### 4. API data inconsistency
- **Problem:** Mock API and constants had mismatched data structures.  
- **Solution:** Normalized data server-side before rendering UI.  

### 5. Git/GitHub workflow issues
- **Problem:** Pushing projects with `node_modules` caused repo size issues.  
- **Solution:** Updated `.gitignore`, excluded `node_modules`, and reinstalled dependencies with `npm install`.  

---

## Best Practices

- Use **TypeScript everywhere** for predictable, maintainable code.  
- Maintain a **single source of truth** for data shapes (interfaces + constants).  
- Normalize API data **server-side** to simplify UI logic.  
- Use **Next.js Image** for optimized image rendering.  
- Keep **linting strict** and fix issues early.  
- Document **environment variables** in `.env.local` and ignore them in Git.  
- Break down UI into **small reusable components**.  
- Treat **deployments** as part of the dev cycle (Vercel, CI/CD).  
- Always test edge cases (empty API data, missing images, slow responses).  

---

## Personal Takeaways

- Building real projects week by week gave me **confidence in applying theory** to practical solutions.  
- I learned that **debugging and fixing build errors is part of the learning process**, not just a roadblock.  
- The combination of **TypeScript and Next.js** taught me the value of **type safety and predictable codebases**.  
- I developed a stronger understanding of **system design thinking**, making me consider scalability early on.  
- Collaboration practices (Git/GitHub workflows, clean commits, code reviews) made me a **more disciplined engineer**.  
- The **Frontend + Backend ProDev experience together** shaped me into a **full-stack problem solver**, not just a coder.  
- Above all, I realized that **consistency and curiosity** are more important than speed in this journey.  
