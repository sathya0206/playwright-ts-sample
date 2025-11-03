import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const ENV = {
    // Environment
    NODE_ENV: process.env.NODE_ENV || 'test',

    // UI Configuration
    UI: {
        BASE_URL: process.env.UI_BASE_URL || 'https://automationexercise.com',
        TIMEOUT: parseInt(process.env.UI_TIMEOUT || '30000'),
    },

    // API Configuration
    API: {
        BASE_URL: process.env.API_BASE_URL || 'https://fakestoreapi.com',
        TIMEOUT: parseInt(process.env.API_TIMEOUT || '10000'),
    },

    // Test User Credentials
    TEST_USER: {
        EMAIL: process.env.TEST_USER_EMAIL || 'testuser@example.com',
        PASSWORD: process.env.TEST_USER_PASSWORD || 'Test@123',
    },

    // Browser Configuration
    BROWSER: {
        HEADLESS: process.env.HEADLESS === 'true',
        SLOW_MO: parseInt(process.env.SLOW_MO || '0'),
    },

    // Reporting
    REPORTING: {
        SCREENSHOT_ON_FAILURE: process.env.SCREENSHOT_ON_FAILURE === 'true',
        VIDEO_ON_FAILURE: process.env.VIDEO_ON_FAILURE === 'true',
        TRACE_ON_FAILURE: process.env.TRACE_ON_FAILURE === 'true',
    },
    // Logger
    LOGGING: {
        LEVEL: process.env.LOG_LEVEL || 'info',
    },
};