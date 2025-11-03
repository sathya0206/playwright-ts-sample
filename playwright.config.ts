import { defineConfig, devices } from '@playwright/test';
import { ENV } from './config/env.config';

export default defineConfig({
  testDir: './tests',

  // Timeout for each test
  timeout: ENV.UI.TIMEOUT,

  // Run tests in files in parallel
  fullyParallel: false,

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: [
    ['allure-playwright', {
      outputFolder: 'allure-results',
      detail: true,
      suiteTitle: false,
    }]
  ],

  // Shared settings for all the projects below
  use: {
    // Base URL for UI tests
    baseURL: ENV.UI.BASE_URL,

    // Collect trace when retrying the failed test
    trace: ENV.REPORTING.TRACE_ON_FAILURE ? 'retain-on-failure' : 'off',

    // Screenshot on failure
    screenshot: ENV.REPORTING.SCREENSHOT_ON_FAILURE ? 'only-on-failure' : 'off',

    // Video on failure
    video: ENV.REPORTING.VIDEO_ON_FAILURE ? 'retain-on-failure' : 'off',

    // Action timeout
    actionTimeout: 10000,

    // Navigation timeout
    navigationTimeout: ENV.UI.TIMEOUT,

    // Viewport size
    viewport: { width: 1280, height: 720 },

    // Ignore HTTPS errors
    ignoreHTTPSErrors: true,

    // Slow down operations (useful for debugging)
    launchOptions: {
      slowMo: ENV.BROWSER.SLOW_MO,
    },
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: ENV.BROWSER.HEADLESS,
      },
    },

    // {
    //   name: 'firefox',
    //   use: { 
    //     ...devices['Desktop Firefox'],
    //     headless: ENV.BROWSER.HEADLESS,
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: { 
    //     ...devices['Desktop Safari'],
    //     headless: ENV.BROWSER.HEADLESS,
    //   },
    // },

    // // Mobile viewports
    // {
    //   name: 'Mobile Chrome',
    //   use: { 
    //     ...devices['Pixel 5'],
    //     headless: ENV.BROWSER.HEADLESS,
    //   },
    // },

    // {
    //   name: 'Mobile Safari',
    //   use: { 
    //     ...devices['iPhone 12'],
    //     headless: ENV.BROWSER.HEADLESS,
    //   },
    // },
  ],
});