# 🚀 TanStack AI Starter Template

A modern, full-stack starter template built with the latest TanStack ecosystem, featuring authentication, database integration, AI text chat capabilities, and a beautiful UI.

## ✨ Features

- 🔐 **Authentication** - Secure user authentication with [Better Auth](https://www.better-auth.com/) (GitHub OAuth & Magic Link)
- 🧠 **AI Integration** - Built-in AI text chat support using [TanStack AI](https://tanstack.com/) (Gemini & OpenAI adapters)
- 📊 **Database** - PostgreSQL with [Drizzle ORM](https://orm.drizzle.team/) for type-safe database operations
- 🎨 **Modern UI** - Beautiful, responsive interface built with [Radix UI](https://www.radix-ui.com/), [Shadcn/UI](https://ui.shadcn.com/), and [Tailwind CSS 4](https://tailwindcss.com/)
- 🌓 **Dark Mode** - Theme switching with `next-themes`
- 🔄 **State Management** - Powerful data synchronization with [TanStack Query](https://tanstack.com/query)
- 🛣️ **Routing** - Type-safe routing with [TanStack Router](https://tanstack.com/router)
- 📱 **Responsive Design** - Mobile-first design that works on all devices
- 🛠️ **Developer Experience** - Hot reload, TypeScript, Oxlint, Oxfmt, and more
- 🐳 **Docker Support** - Containerized database setup

## 🛠️ Tech Stack

### Frontend

- **[React 19](https://react.dev/)** - UI library
- **[TanStack Router](https://tanstack.com/router)** - Type-safe routing with SSR support
- **[TanStack Query](https://tanstack.com/query)** - Async state management
- **[TanStack Form](https://tanstack.com/form)** - Type-safe form management
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Motion](https://motion.dev/)** - Animation library

### Backend

- **[TanStack Start](https://tanstack.com/start)** - Full-stack React framework
- **[Better Auth](https://www.better-auth.com/)** - Comprehensive auth solution
- **[Drizzle ORM](https://orm.drizzle.team/)** - Modern TypeScript ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database
- **[Nodemailer](https://nodemailer.com/)** - Email sending service

### AI & Tools

- **[TanStack AI](https://tanstack.com/)** - AI SDK integration
- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling
- **[Oxlint](https://oxc-project.github.io/op/oxlint)** & **[Oxfmt](https://oxc-project.github.io/op/oxfmt)** - High-performance linting and formatting

## 📋 Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher)
- **pnpm** (v8 or higher)
- **Docker** and **Docker Compose** (or Podman) for the local database

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ts-bg-remover
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Setup

Copy the example environment file:

```bash
cp .env.example .env
```

Update `.env` with your credentials:

```env
# Base URL
BASE_URL=http://localhost:3000

# Database
DATABASE_URL=postgresql://postgres:db_password@localhost:5432/ts_todos

# Auth (GitHub OAuth & Better Auth)
BETTER_AUTH_SECRET="your-generated-secret"
AUTH_GITHUB_CLIENT_ID="your-github-client-id"
AUTH_GITHUB_CLIENT_SECRET="your-github-client-secret"

# Email (SMTP)
SMTP_HOST="smtp.gmail.com"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
```

### 4. Start the Database

Start the PostgreSQL container:

```bash
pnpm db:up
```

### 5. Management & Migration

Generate and push migrations to the database:

```bash
pnpm db:generate
pnpm db:push
```

### 6. Start Development Server

```bash
pnpm dev
```

Visit **http://localhost:3000** to see your app running.

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm serve` - Preview production build
- `pnpm test` - Run tests
- `pnpm lint` - Lint code
- `pnpm format` - Format code
- `pnpm db:studio` - Open Drizzle Studio to manage database

## 🔐 Authentication

Authentication is handled by **Better Auth**.
- **GitHub OAuth**: Configure your OAuth app in GitHub Developer Settings.
- **Magic Link**: Requires a working SMTP server configuration.

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

Distributed under the MIT License.
