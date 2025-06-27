# 🧠 AI Proposal Generator

An AI-powered tool to generate clean, customizable business proposals using [OpenAI](https://openai.com/), [Supabase](https://supabase.com/), and [Next.js](https://nextjs.org/).

---

## 🚀 Features

- ✍️ Authenticated users can generate proposal drafts with OpenAI
- 🧾 Supabase backend with RLS-secured data storage
- 🔒 Supabase Auth with email login
- 🪄 Simple UI for customizing generated content
- 🛠️ Fully client-rendered + serverless backend (Edge Functions coming soon)

---

## 📅 Daily Dev Log

> I'm building this in public. Below are daily updates:

### 2025-06-25
- Set up Supabase Auth and protected dashboard routing
- Integrated OpenAI text generation for proposals
- Struggled with Supabase RLS — fixed `insert` permission bug

### 2025-06-26
- Built daily logging system in Notion + GitHub
- Posted first updates to Twitter + LinkedIn
- Created this README!

### 📅 June 27, 2025 – Day 3

### ✅ What I worked on
- Learned how authentication works in Supabase using JWT tokens.
- Explored how devs implement auth manually without Supabase.
- Created a protected page component to restrict access to logged-in users.
- Understood the use of `page.tsx` for SSR and `clientPage.tsx` for interactivity.

### 🐞 What challenged me
- Couldn't find console logs on the SSR page—realized it runs on the server!
- Still wrapping my head around the protected page logic and server-side access.

### 🛠️ What I fixed
- Ensured only authenticated users can access the logged-in routes.

---

## 🔧 Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Supabase (DB, Auth, RLS)
- **AI**: OpenAI API (GPT-4-turbo)
- **Auth**: Supabase email login

---

## ✨ Upcoming

- PDF export for proposals
- Proposal version history
- Collaboration / shareable proposal links

---

## 🧑‍💻 Author

**Aman Pal**  
Building in public: [Twitter](https://x.com/AmanPal33038743) • [LinkedIn](https://www.linkedin.com/in/aman-pal-416359240/)

---

## 📂 Setup Instructions (Optional)

```bash
git clone https://github.com/PalAman-git/ai-proposal-gen.git
cd ai-proposal-gen
npm install
npm run dev
