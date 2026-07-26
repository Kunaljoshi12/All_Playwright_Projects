# 🎭 Playwright MCP (Model Context Protocol) Integration

[![Playwright](https://img.shields.io/badge/Playwright-1.40+-green.svg?logo=playwright)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Model Context Protocol](https://img.shields.io/badge/MCP-Enabled-purple.svg)](https://modelcontextprotocol.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

An end-to-end web automation and testing framework integrated with the **Model Context Protocol (MCP)**. This project enables AI agents and automated test runners to interact with browsers, execute UI tests, inspect web pages, and automate browser actions using **Playwright** and **TypeScript**.

---

# 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Running the Project](#-running-the-project)
- [Running Tests](#-running-tests)
- [Test Reports](#-test-reports)
- [Configuration Details](#-configuration-details)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

# 🚀 Overview

This repository integrates **Microsoft Playwright** with the **Model Context Protocol (MCP)**, allowing AI assistants and developers to automate browser interactions, execute end-to-end tests, capture screenshots, inspect page elements, and perform deterministic web automation.

---

# ✨ Features

- 🚀 Model Context Protocol (MCP) Integration
- 🌐 Cross-browser automation (Chromium, Firefox & WebKit)
- 📝 Built with TypeScript
- ⚡ Parallel test execution
- 📊 Interactive HTML reports
- 📷 Automatic screenshots, videos and traces on failures
- 🤖 AI-powered browser automation
- ⏳ Playwright auto-waiting support

---

# 🛠 Tech Stack

| Technology | Description |
|------------|-------------|
| TypeScript | Programming Language |
| Playwright | Browser Automation Framework |
| Node.js | JavaScript Runtime |
| MCP | Model Context Protocol |
| npm | Package Manager |

---

# 📁 Project Structure

```text
Playwright-MCP/
│
├── src/
│   ├── index.ts
│   ├── tools/
│   └── utils/
│
├── tests/
│   ├── example.spec.ts
│   └── setup/
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Folder Breakdown

| Folder/File | Description |
|-------------|-------------|
| `src/` | MCP server source code |
| `tools/` | Browser automation tools |
| `utils/` | Utility functions |
| `tests/` | Playwright test cases |
| `playwright.config.ts` | Playwright configuration |
| `package.json` | Project dependencies |
| `README.md` | Project documentation |

---

# ⚡ Prerequisites

Make sure the following software is installed:

- **Node.js** v18 or above
- **npm** v9 or above
- **Git**

Verify installation:

```bash
node -v
npm -v
git --version
```

---

# 📥 Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Playwright-MCP.git
cd Playwright-MCP
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Install Playwright Browsers

```bash
npx playwright install --with-deps
```

---

# ⚙️ Running the Project

## Build the Project

```bash
npm run build
```

## Start MCP Server

```bash
npm start
```

## Development Mode

```bash
npm run dev
```

---

# 🤖 Configure MCP Client

Example `claude_desktop_config.json`

```json
{
  "mcpServers": {
    "playwright-mcp": {
      "command": "node",
      "args": [
        "/path/to/Playwright-MCP/build/index.js"
      ]
    }
  }
}
```

---

# 🧪 Running Tests

## Run All Tests

```bash
npx playwright test
```

---

## Run Tests in Headed Mode

```bash
npx playwright test --headed
```

---

## Run Tests in UI Mode

```bash
npx playwright test --ui
```

---

## Run on Chromium

```bash
npx playwright test --project=chromium
```

---

## Run on Firefox

```bash
npx playwright test --project=firefox
```

---

## Run on WebKit

```bash
npx playwright test --project=webkit
```

---

## Run a Specific Test File

```bash
npx playwright test tests/example.spec.ts
```

---

# 📊 Test Reports

## Open HTML Report

```bash
npx playwright show-report
```

---

## View Trace File

```bash
npx playwright show-trace test-results/trace.zip
```

---

# 🔧 Configuration Details

Example `playwright.config.ts`

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html', { open: 'never' }]
  ],

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ]
});
```

---

# 🔍 Troubleshooting

## Missing Browser Executables

```bash
npx playwright install --with-deps
```

---

## Reinstall Dependencies

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## Build Before Starting MCP

```bash
npm run build
npm start
```

---

# 🤝 Contributing

1. Fork the repository.

2. Create a new branch.

```bash
git checkout -b feature/your-feature
```

3. Commit changes.

```bash
git commit -m "Add new feature"
```

4. Push to GitHub.

```bash
git push origin feature/your-feature
```

5. Create a Pull Request.

---

# 📜 License

This project is licensed under the **MIT License**.

See the **LICENSE** file for more information.
