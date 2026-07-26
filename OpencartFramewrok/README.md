# OpenCart Playwright Automation Framework

[![Playwright](https://img.shields.io/badge/Playwright-1.40+-green.svg)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-brightgreen.svg)](https://nodejs.org/)
[![Allure Report](https://img.shields.io/badge/Report-Allure-ff69b4.svg)](https://allurereport.org/)
[![GitHub Actions](https://img.shields.io/badge/CI-GitHub%20Actions-blue.svg)](https://github.com/features/actions)

A scalable, robust End-to-End (E2E) Test Automation Framework for the **OpenCart** application built using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern. The framework supports local execution, GitHub Actions CI, and rich reporting with **Allure**.

---

## 📌 Features

- **Page Object Model (POM):** Clean separation of UI elements, actions, and test assertions.
- **Cross-Browser Testing:** Supports Chromium, Firefox, and WebKit.
- **Parallel Test Execution:** High-speed execution with Playwright's built-in test runner.
- **Data-Driven Testing:** Test data managed using external JSON files.
- **Rich Test Reporting:** Integrated with Allure Reports and Playwright HTML Reports.
- **GitHub Actions Ready:** Supports automated test execution through GitHub Actions.

---

## 📂 Framework Directory Structure

```text
OpencartFramewrok/
├── pages/                   # Page Object Classes
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── AccountPage.ts
│   ├── RegistrationPage.ts
│   └── ProductPage.ts
├── tests/                   # Test Specifications
│   ├── Login.spec.ts
│   ├── Registration.spec.ts
│   └── AddToCart.spec.ts
├── testData/                # JSON Test Data
│   └── loginData.json
├── utils/                   # Utility Classes
├── allure-results/          # Allure Results
├── playwright.config.ts     # Playwright Configuration
├── package.json             # Project Dependencies
├── tsconfig.json            # TypeScript Configuration
└── README.md
```

---

# Prerequisites

Before running the project, make sure the following tools are installed:

- Node.js (v18 or higher)
- npm (comes with Node.js)
- Java Development Kit (JDK 17 or 21) *(Required for Allure Reports)*
- Git

---

# Setup & Installation

## 1. Clone the Repository

```bash
git clone https://github.com/Kunaljoshi12/OpencartFramewrok.git
cd OpencartFramewrok
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Install Playwright Browsers

```bash
npx playwright install
```

---

# Test Execution

## Run All Tests (Headless)

```bash
npx playwright test
```

## Run Tests in Headed Mode

```bash
npx playwright test --headed
```

## Run Tests on Chromium

```bash
npx playwright test --project=chromium
```

## Run Tests on Firefox

```bash
npx playwright test --project=firefox
```

## Run Tests on WebKit

```bash
npx playwright test --project=webkit
```

## Run a Specific Test File

```bash
npx playwright test tests/Login.spec.ts
```

## Run Tests in UI Mode

```bash
npx playwright test --ui
```

---

# Reports

## Playwright HTML Report

```bash
npx playwright show-report
```

## Allure Report

```bash
npx allure serve allure-results
```
