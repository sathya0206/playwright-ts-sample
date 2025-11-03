import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages';
import { ENV } from '../../../config';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  // Runs before each test
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should display login page correctly', async () => {
    // Verify we're on the login page
    await loginPage.expectOnLoginPage();
    
    // Verify login elements are visible
    await loginPage.expectVisible(loginPage.loginEmail);
    await loginPage.expectVisible(loginPage.loginPassword);
    await loginPage.expectVisible(loginPage.loginButton);
  });

  test('should login successfully with valid credentials', async () => {
    // Perform login
    await loginPage.login(ENV.TEST_USER.EMAIL, ENV.TEST_USER.PASSWORD);
    
    // Verify login success
    await loginPage.expectLoginSuccess();
  });

  test('should show error with invalid credentials', async () => {
    // Login with invalid credentials
    await loginPage.login('invalid@test.com', 'wrongpassword');
    
    // Verify error message appears
    await loginPage.expectLoginError();
  });

  test('should show error when password is empty', async () => {
    // Fill only email
    await loginPage.fillLoginEmail('test@test.com');
    
    // Click login without password
    await loginPage.clickLoginButton();
    
    // Verify error (you may need to adjust based on actual error)
    await loginPage.expectVisible(loginPage.errorMessage);
  });

  test('should show error when email is empty', async () => {
    // Fill only password
    await loginPage.fillLoginPassword('password123');
    
    // Click login without email
    await loginPage.clickLoginButton();
    
    // Verify error
    await loginPage.expectVisible(loginPage.errorMessage);
  });

  test('should login step by step with test.step', async () => {
    await test.step('Fill email field', async () => {
      await loginPage.fillLoginEmail(ENV.TEST_USER.EMAIL);
    });

    await test.step('Fill password field', async () => {
      await loginPage.fillLoginPassword(ENV.TEST_USER.PASSWORD);
    });

    await test.step('Click login button', async () => {
      await loginPage.clickLoginButton();
    });

    await test.step('Verify login success', async () => {
      await loginPage.expectLoginSuccess();
    });
  });

  test('should display signup section', async () => {
    // Verify signup elements are visible
    await loginPage.expectVisible(loginPage.signupName);
    await loginPage.expectVisible(loginPage.signupEmail);
    await loginPage.expectVisible(loginPage.signupButton);
  });
});