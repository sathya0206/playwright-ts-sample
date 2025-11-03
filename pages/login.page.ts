import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { UI_ROUTES, SUCCESS_MESSAGES, ERROR_MESSAGES } from '../config';

export class LoginPage extends BasePage {
  // ========== LOCATORS ==========

  // Login Section
  readonly loginEmail: Locator;
  readonly loginPassword: Locator;
  readonly loginButton: Locator;

  // Signup Section
  readonly signupName: Locator;
  readonly signupEmail: Locator;
  readonly signupButton: Locator;

  // Messages
  readonly errorMessage: Locator;
  readonly loggedInUser: Locator;

  constructor(page: Page) {
    super(page);

    // Initialize Login locators
    // TODO: Replace with actual selectors from the website
    this.loginEmail = page.locator('[data-qa="login-email"]');
    this.loginPassword = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');

    // Initialize Signup locators
    this.signupName = page.locator('[data-qa="signup-name"]');
    this.signupEmail = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');

    // Initialize Message locators
    this.errorMessage = page.locator('.login-form p[style*="color: red"]');
    this.loggedInUser = page.locator(`//*[text() = ' Logged in as ']`);
  }

  // ========== NAVIGATION ==========

  /**
   * Navigate to login page
   */
  async navigate() {
    await this.goto(UI_ROUTES.LOGIN);
  }

  // ========== LOGIN ACTIONS ==========

  /**
   * Login with email and password
   * @param email - User email
   * @param password - User password
   */
  async login(email: string, password: string) {
    await this.fill(this.loginEmail, email);
    await this.fill(this.loginPassword, password);
    await this.click(this.loginButton);
  }

  /**
   * Fill login email
   * @param email - User email
   */
  async fillLoginEmail(email: string) {
    await this.fill(this.loginEmail, email);
  }

  /**
   * Fill login password
   * @param password - User password
   */
  async fillLoginPassword(password: string) {
    await this.fill(this.loginPassword, password);
  }

  /**
   * Click login button
   */
  async clickLoginButton() {
    await this.click(this.loginButton);
  }

  // ========== SIGNUP ACTIONS ==========

  /**
   * Signup with name and email
   * @param name - User name
   * @param email - User email
   */
  async signup(name: string, email: string) {
    await this.fill(this.signupName, name);
    await this.fill(this.signupEmail, email);
    await this.click(this.signupButton);
  }

  /**
   * Fill signup name
   * @param name - User name
   */
  async fillSignupName(name: string) {
    await this.fill(this.signupName, name);
  }

  /**
   * Fill signup email
   * @param email - User email
   */
  async fillSignupEmail(email: string) {
    await this.fill(this.signupEmail, email);
  }

  /**
   * Click signup button
   */
  async clickSignupButton() {
    await this.click(this.signupButton);
  }

  // ========== ASSERTIONS ==========

  /**
   * Verify login was successful
   */
  async expectLoginSuccess() {
    await this.expectVisible(this.loggedInUser);
    await this.expectContainsText(this.loggedInUser, SUCCESS_MESSAGES.LOGIN_SUCCESS);
  }

  /**
   * Verify login failed with error message
   */
  async expectLoginError() {
    await this.expectVisible(this.errorMessage);
    await this.expectContainsText(this.errorMessage, ERROR_MESSAGES.INVALID_CREDENTIALS);
  }

  /**
   * Verify user is on login page
   */
  async expectOnLoginPage() {
    await this.expectURL(/.*login/);
    await this.expectVisible(this.loginButton);
  }

  /**
   * Verify email already exists error
   */
  async expectEmailExistsError() {
    await this.expectVisible(this.errorMessage);
    await this.expectContainsText(this.errorMessage, ERROR_MESSAGES.EMAIL_EXISTS);
  }

  // ========== GETTERS ==========

  /**
   * Get error message text
   * @returns Error message text
   */
  async getErrorMessage(): Promise<string> {
    return await this.getText(this.errorMessage);
  }

  /**
   * Check if user is logged in
   * @returns True if logged in
   */
  async isLoggedIn(): Promise<boolean> {
    return await this.isVisible(this.loggedInUser);
  }

}