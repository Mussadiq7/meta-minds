# MetaMinds AI Agent Marketplace

MetaMinds is a modern AI Agent Marketplace where users can discover, deploy, and interact with AI agents, and developers can submit and manage their own agents. The platform features wallet-based authentication, DAO governance, analytics, and a fully interactive dashboard.

## Features
- **AI Agent Marketplace**: Browse, search, and filter a variety of AI agents.
- **Agent Detail Pages**: Each agent has a unique page with stats, reviews, and an AI assistant chat (powered by Groq).
- **Like/Favorite Agents**: Bookmark agents for quick access.
- **DAO Governance**: Vote on proposals, view DAO stats, and track your governance activity.
- **Developer Dashboard**: Submit new agents, track earnings, usage, and manage your submissions.
- **Supabase Integration**: User and agent data is managed via Supabase.
- **Groq AI Assistant**: Each agent page features an AI chat assistant using the Groq API.
- **Wallet Integration**: Connect your wallet to access personalized features.
- **Responsive UI**: Built with React, TypeScript, Tailwind CSS, and Recharts.

## Tech Stack
- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Backend/DB**: Supabase (Postgres)
- **AI Assistant**: Groq API
- **Wallet**: Solana Wallet Adapter
- **Charts**: Recharts

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/metaminds-agent-arcade.git
cd metaminds-agent-arcade
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the project root with the following:
```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_GROQ_API_KEY=your-groq-api-key
```

### 4. Run the Development Server
```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure
- `src/pages/` — Main pages (Marketplace, AgentDetail, Dashboard, DAO, etc.)
- `src/components/` — Reusable UI components
- `src/lib/supabase.ts` — Supabase client and helper functions
- `src/lib/utils.ts` — Shared utilities and agent mock data

## Supabase Integration
- User and agent data is managed via Supabase tables (`users`, `agents`).
- See `src/lib/supabase.ts` for async functions to connect users and submit agents.

## Groq AI Assistant
- Each agent detail page features an AI chat assistant powered by the Groq API.
- The API key is loaded from `.env` (`VITE_GROQ_API_KEY`).

## Contribution Guidelines
1. Fork the repo and create your branch: `git checkout -b feature/your-feature`
2. Commit your changes: `git commit -am 'Add new feature'`
3. Push to the branch: `git push origin feature/your-feature`
4. Open a pull request

## License
MIT

---

**MetaMinds** — The Future of AI Agent Deployment 🚀 