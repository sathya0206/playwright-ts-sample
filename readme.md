# Playwright API & UI Automation Framework

A comprehensive end-to-end testing framework built with Playwright and TypeScript, featuring both API and UI automation with industry-standard practices.

## 🚀 Features

- ✅ **Page Object Model (POM)** - Maintainable UI test structure
- ✅ **API Client Pattern** - Reusable API testing layer
- ✅ **TypeScript** - Full type safety and IntelliSense
- ✅ **Winston Logger** - Comprehensive logging for debugging
- ✅ **Environment Configuration** - Easy config management via .env
- ✅ **Multiple Reporters** - HTML, Allure, JSON, and more
- ✅ **Cross-Browser Testing** - Chromium, Firefox, WebKit
- ✅ **CI/CD Ready** - GitHub Actions compatible
- ✅ **Modular Architecture** - Clean separation of concerns

## 🎯 Test Applications

| Type | Application | URL |
|------|-------------|-----|
| **UI** | Automation Exercise | https://automationexercise.com |
| **API** | Fake Store API | https://fakestoreapi.com |

---


## 🛠️ Tech Stack

- **Playwright** - Modern end-to-end testing framework
- **TypeScript** - Type-safe JavaScript
- **Winston** - Professional logging library
- **Dotenv** - Environment variable management
- **Allure** - Beautiful test reports
- **Faker.js** - Test data generation

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## 🚀 Quick Start

### 1️⃣ Install

```bash
# Clone the repo
git clone https://github.com/sathya0206/playwright-ts-sample.git
cd playwright-ts-sample

# Install dependencies
npm install

# Install browsers
npx playwright install
```

### 2️⃣ Setup Environment

Create a `.env` file with these values:

```env
# Website to test
UI_BASE_URL=https://automationexercise.com

# API to test
API_BASE_URL=https://fakestoreapi.com

# Your test account (create one on the website)
TEST_USER_EMAIL=your-email@example.com
TEST_USER_PASSWORD=your-password

# Show browser while testing? (true/false)
HEADLESS=false

# Logging level (info, debug, error)
LOG_LEVEL=info
```

### 3️⃣ Run Tests

```bash
# Run all tests
npm test

# Run only UI tests
npm run test:ui

# Run only API tests
npm run test:api

# See browser while testing
npm run test:headed

# Debug tests step-by-step
npm run test:debug
```

### 4️⃣ View Reports

```bash
# HTML report
npm run test:report

# Allure report
npm run test:allure
```

---

## 📚 Key Concepts

### UI Testing
- **BasePage**: Contains reusable methods (click, fill, wait, assertions)
- **Page Objects**: Encapsulate page-specific elements and actions
- **Locators**: Lazy-evaluated, auto-wait, auto-retry

### API Testing
- **BaseAPIClient**: HTTP methods with logging and error handling
- **Endpoint Classes**: Business logic for specific API resources
- **Models**: TypeScript interfaces for type safety
- **Schemas**: JSON schemas for response validation

### Logging
- All actions are automatically logged
- Logs saved to `logs/` directory
- Different log levels: error, warn, info, debug

---

## 📊 Available Commands

| Command | What It Does |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:ui` | Run only UI tests |
| `npm run test:api` | Run only API tests |
| `npm run test:headed` | Show browser while testing |
| `npm run test:debug` | Debug tests step-by-step |
| `npm run test:report` | View HTML report |
| `npm run test:allure` | View Allure report |

---

## 🤝 Contributing

```bash
# Create feature branch
git checkout -b feature/my-new-feature

# Make changes and commit
git add .
git commit -m "feat: add my new feature"

# Push to GitHub
git push origin feature/my-new-feature

# Create Pull Request on GitHub
```

---

## 👤 Author

**Sathya**

GitHub: [@sathya0206](https://github.com/sathya0206)

---

## 📄 License

ISC