# 🛍️ User-Focused E-Commerce Library

This library provides **all the core functionality needed to build a user-centric e-commerce website**, designed so anyone can create a fully functional platform in a day.  
It is **component-based, context-aware, and includes caching** for optimal performance and seamless integration.

---

## ✨ Key Features

- **User Profiles**  
  Store user details including name, email, phone, and avatar. Fully integrated with authentication providers like Supabase or Firebase.

- **Addresses**  
  Manage multiple addresses per user, including shipping and billing, with default selection support.

- **Cart Management**  
  Add, remove, and update items in the cart. Automatically calculate subtotals, discounts, taxes (GST/VAT), and grand totals.  
  Supports **caching and context-based state** for fast, reactive UI updates.

- **Orders**  
  Capture complete order details with snapshots of the cart and selected addresses to ensure consistent order history.

- **Component-Based Architecture**  
  Prebuilt React/Next.js components for cart, checkout, and variation selection.  
  Makes integration into any frontend straightforward and consistent.

- **Extensibility & Compatibility**  
  Works with any authentication system (Supabase, Firebase, JWT, etc.).  
  Can be easily integrated into Node.js or Next.js projects.  
  Fully extendable for features like preferences, wishlists, saved payments, and multilingual support.

- **Caching & Context**  
  Optimized for performance with built-in caching.  
  Context-based state management ensures seamless updates across components.

---

## 📂 Suggested Database Schema

- **users** → Stores user profiles and links to your authentication provider.  
- **user_addresses** → Multiple addresses per user (shipping, billing, other).  
- **orders** → References users and snapshots of addresses/cart items.  
- **order_items** → Contains products associated with a specific order.

---

## 🌍 Why Use This Library?

- Build a **ready-to-go e-commerce website in a single day**.  
- Focus on front-end, branding, and UX while the library handles **user, cart, and order logic**.  
- Component-based design ensures **modular, maintainable, and scalable** architecture.  
- Caching and context make your app **fast, responsive, and reactive**.

---

## 🛠️ Tech Notes

- Designed for **Postgres/Supabase**, but database-agnostic.  
- Component-based with **React/Next.js** integration in mind.  
- Prioritizes **user-centered workflows**: profile → address → cart → order.  
- Extendable with additional features like loyalty programs, saved payments, and more.

---

## 📜 License

MIT © 2025 Your Name
