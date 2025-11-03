import { Page, Locator, expect } from '@playwright/test';
import { ENV } from '../config';
import { logger } from '../utils'; 

export class BasePage {
    readonly page: Page;
    readonly baseURL: string;

    constructor(page: Page) {
        this.page = page;
        this.baseURL = ENV.UI.BASE_URL;
        logger.info('BasePage initialized');
    }

    // ========== NAVIGATION METHODS ==========

    /**
     * Navigate to a specific path
     * @param path - Relative path (e.g., '/login', '/products')
     */
    async goto(path: string = '/') {
        logger.info(`Navigating to: ${path}`);
        await this.page.goto(path);
        logger.info(`✓ Successfully navigated to: ${path}`);
    }

    /**
     * Go back to previous page
     */
    async goBack() {
        logger.info('Navigating back');
        await this.page.goBack();
        logger.info('✓ Navigated back successfully');
    }

    /**
     * Go forward to next page
     */
    async goForward() {
        logger.info('Navigating forward');
        await this.page.goForward();
        logger.info('✓ Navigated forward successfully');
    }

    /**
     * Reload current page
     */
    async reload() {
        logger.info('Reloading page');
        await this.page.reload();
        logger.info('✓ Page reloaded successfully');
    }

    // ========== WAIT METHODS ==========

    /**
     * Wait for element to be visible
     * @param locator - Element locator
     * @param timeout - Optional timeout in ms
     */
    async waitForElement(locator: Locator, timeout?: number) {
        logger.debug(`Waiting for element to be visible`);
        await locator.waitFor({ state: 'visible', timeout });
        logger.debug('✓ Element is visible');
    }

    /**
     * Wait for element to be hidden
     * @param locator - Element locator
     */
    async waitForElementHidden(locator: Locator) {
        logger.debug('Waiting for element to be hidden');
        await locator.waitFor({ state: 'hidden' });
        logger.debug('✓ Element is hidden');
    }

    /**
     * Wait for page load
     */
    async waitForPageLoad() {
        logger.debug('Waiting for page load');
        await this.page.waitForLoadState('load');
        logger.debug('✓ Page loaded');
    }

    /**
     * Wait for network to be idle
     */
    async waitForNetworkIdle() {
        logger.debug('Waiting for network idle');
        await this.page.waitForLoadState('networkidle');
        logger.debug('✓ Network is idle');
    }

    /**
     * Wait for specific URL
     * @param url - URL pattern to wait for
     */
    async waitForURL(url: string | RegExp) {
        logger.debug(`Waiting for URL: ${url}`);
        await this.page.waitForURL(url);
        logger.debug(`✓ URL matched: ${url}`);
    }

    // ========== ACTION METHODS ==========

    /**
     * Click on element with wait
     * @param locator - Element locator
     */
    async click(locator: Locator) {
        logger.info(`Clicking element`);
        await locator.waitFor({ state: 'visible' });
        await locator.click();
        logger.info('✓ Element clicked successfully');
    }

    /**
     * Double click on element
     * @param locator - Element locator
     */
    async doubleClick(locator: Locator) {
        logger.info('Double clicking element');
        await locator.waitFor({ state: 'visible' });
        await locator.dblclick();
        logger.info('✓ Element double clicked successfully');
    }

    /**
     * Fill input field
     * @param locator - Input locator
     * @param text - Text to fill
     */
    async fill(locator: Locator, text: string) {
        logger.info(`Filling text: "${text}"`);
        await locator.waitFor({ state: 'visible' });
        await locator.fill(text);
        logger.info(`✓ Text filled successfully`);
    }

    /**
     * Type text slowly (character by character)
     * @param locator - Input locator
     * @param text - Text to type
     */
    async type(locator: Locator, text: string) {
        logger.info(`Typing text: "${text}"`);
        await locator.waitFor({ state: 'visible' });
        await locator.pressSequentially(text);
        logger.info('✓ Text typed successfully');
    }

    /**
     * Select option from dropdown
     * @param locator - Select locator
     * @param value - Option value
     */
    async selectOption(locator: Locator, value: string) {
        logger.info(`Selecting option: "${value}"`);
        await locator.waitFor({ state: 'visible' });
        await locator.selectOption(value);
        logger.info(`✓ Option selected successfully`);
    }

    /**
     * Check checkbox or radio button
     * @param locator - Checkbox/radio locator
     */
    async check(locator: Locator) {
        logger.info('Checking checkbox/radio');
        await locator.waitFor({ state: 'visible' });
        await locator.check();
        logger.info('✓ Checkbox/radio checked successfully');
    }

    /**
     * Uncheck checkbox
     * @param locator - Checkbox locator
     */
    async uncheck(locator: Locator) {
        logger.info('Unchecking checkbox');
        await locator.waitFor({ state: 'visible' });
        await locator.uncheck();
        logger.info('✓ Checkbox unchecked successfully');
    }

    /**
     * Hover over element
     * @param locator - Element locator
     */
    async hover(locator: Locator) {
        logger.info('Hovering over element');
        await locator.waitFor({ state: 'visible' });
        await locator.hover();
        logger.info('✓ Hovered successfully');
    }

    /**
     * Scroll element into view
     * @param locator - Element locator
     */
    async scrollIntoView(locator: Locator) {
        logger.debug('Scrolling element into view');
        await locator.scrollIntoViewIfNeeded();
        logger.debug('✓ Element scrolled into view');
    }

    /**
     * Scroll to top of page
     */
    async scrollToTop() {
        logger.debug('Scrolling to top');
        await this.page.evaluate(() => window.scrollTo(0, 0));
        logger.debug('✓ Scrolled to top');
    }

    /**
     * Scroll to bottom of page
     */
    async scrollToBottom() {
        logger.debug('Scrolling to bottom');
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        logger.debug('✓ Scrolled to bottom');
    }

    // ========== GET METHODS ==========

    /**
     * Get page title
     * @returns Page title
     */
    async getTitle(): Promise<string> {
        logger.debug('Getting page title');
        const title = await this.page.title();
        logger.debug(`✓ Page title: ${title}`);
        return title;
    }

    /**
     * Get current URL
     * @returns Current URL
     */
    getCurrentURL(): string {
        const url = this.page.url();
        logger.debug(`Current URL: ${url}`);
        return url;
    }

    /**
     * Get element text
     * @param locator - Element locator
     * @returns Element text content
     */
    async getText(locator: Locator): Promise<string> {
        logger.debug('Getting element text');
        await locator.waitFor({ state: 'visible' });
        const text = await locator.textContent() || '';
        logger.debug(`✓ Element text: ${text}`);
        return text;
    }

    /**
     * Get element attribute
     * @param locator - Element locator
     * @param attribute - Attribute name
     * @returns Attribute value
     */
    async getAttribute(locator: Locator, attribute: string): Promise<string | null> {
        logger.debug(`Getting attribute: ${attribute}`);
        const value = await locator.getAttribute(attribute);
        logger.debug(`✓ Attribute value: ${value}`);
        return value;
    }

    /**
     * Get all elements matching locator
     * @param locator - Element locator
     * @returns Array of locators
     */
    async getAllElements(locator: Locator): Promise<Locator[]> {
        logger.debug('Getting all matching elements');
        const elements = await locator.all();
        logger.debug(`✓ Found ${elements.length} elements`);
        return elements;
    }

    /**
     * Get element count
     * @param locator - Element locator
     * @returns Number of elements
     */
    async getElementCount(locator: Locator): Promise<number> {
        const count = await locator.count();
        logger.debug(`Element count: ${count}`);
        return count;
    }

    // ========== ASSERTION HELPERS ==========

    /**
     * Assert element is visible
     * @param locator - Element locator
     */
    async expectVisible(locator: Locator) {
        logger.info('Asserting element is visible');
        await expect(locator).toBeVisible();
        logger.info('✓ Element is visible');
    }

    /**
     * Assert element is hidden
     * @param locator - Element locator
     */
    async expectHidden(locator: Locator) {
        logger.info('Asserting element is hidden');
        await expect(locator).toBeHidden();
        logger.info('✓ Element is hidden');
    }

    /**
     * Assert element has text
     * @param locator - Element locator
     * @param text - Expected text
     */
    async expectText(locator: Locator, text: string | RegExp) {
        logger.info(`Asserting element has text: ${text}`);
        await expect(locator).toHaveText(text);
        logger.info('✓ Text assertion passed');
    }

    /**
     * Assert element contains text
     * @param locator - Element locator
     * @param text - Expected text
     */
    async expectContainsText(locator: Locator, text: string | RegExp) {
        logger.info(`Asserting element contains text: ${text}`);
        await expect(locator).toContainText(text);
        logger.info('✓ Contains text assertion passed');
    }

    /**
     * Assert page has title
     * @param title - Expected title
     */
    async expectTitle(title: string | RegExp) {
        logger.info(`Asserting page title: ${title}`);
        await expect(this.page).toHaveTitle(title);
        logger.info('✓ Title assertion passed');
    }

    /**
     * Assert page has URL
     * @param url - Expected URL
     */
    async expectURL(url: string | RegExp) {
        logger.info(`Asserting page URL: ${url}`);
        await expect(this.page).toHaveURL(url);
        logger.info('✓ URL assertion passed');
    }

    /**
     * Assert element is enabled
     * @param locator - Element locator
     */
    async expectEnabled(locator: Locator) {
        logger.info('Asserting element is enabled');
        await expect(locator).toBeEnabled();
        logger.info('✓ Element is enabled');
    }

    /**
     * Assert element is disabled
     * @param locator - Element locator
     */
    async expectDisabled(locator: Locator) {
        logger.info('Asserting element is disabled');
        await expect(locator).toBeDisabled();
        logger.info('✓ Element is disabled');
    }

    /**
     * Assert element is checked
     * @param locator - Checkbox/radio locator
     */
    async expectChecked(locator: Locator) {
        logger.info('Asserting element is checked');
        await expect(locator).toBeChecked();
        logger.info('✓ Element is checked');
    }

    // ========== UTILITY METHODS ==========

    /**
     * Take screenshot
     * @param name - Screenshot name
     */
    async takeScreenshot(name: string) {
        logger.info(`Taking screenshot: ${name}`);
        await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
        logger.info(`✓ Screenshot saved: ${name}.png`);
    }

    /**
     * Press keyboard key
     * @param key - Key to press (e.g., 'Enter', 'Escape')
     */
    async pressKey(key: string) {
        logger.info(`Pressing key: ${key}`);
        await this.page.keyboard.press(key);
        logger.info(`✓ Key pressed: ${key}`);
    }

    /**
     * Handle alert dialog (accept)
     */
    async acceptAlert() {
        logger.info('Setting up alert handler (accept)');
        this.page.on('dialog', async dialog => {
            logger.info(`Alert appeared: ${dialog.message()}`);
            await dialog.accept();
            logger.info('✓ Alert accepted');
        });
    }

    /**
     * Handle alert dialog (dismiss)
     */
    async dismissAlert() {
        logger.info('Setting up alert handler (dismiss)');
        this.page.on('dialog', async dialog => {
            logger.info(`Alert appeared: ${dialog.message()}`);
            await dialog.dismiss();
            logger.info('✓ Alert dismissed');
        });
    }

    /**
     * Wait for specific time
     * @param ms - Milliseconds to wait
     */
    async wait(ms: number) {
        logger.debug(`Waiting for ${ms}ms`);
        await this.page.waitForTimeout(ms);
        logger.debug(`✓ Wait completed`);
    }

    /**
     * Check if element exists
     * @param locator - Element locator
     * @returns True if element exists
     */
    async isElementPresent(locator: Locator): Promise<boolean> {
        const exists = await locator.count() > 0;
        logger.debug(`Element present: ${exists}`);
        return exists;
    }

    /**
     * Check if element is visible
     * @param locator - Element locator
     * @returns True if element is visible
     */
    async isVisible(locator: Locator): Promise<boolean> {
        const visible = await locator.isVisible();
        logger.debug(`Element visible: ${visible}`);
        return visible;
    }

    /**
     * Check if element is enabled
     * @param locator - Element locator
     * @returns True if element is enabled
     */
    async isEnabled(locator: Locator): Promise<boolean> {
        const enabled = await locator.isEnabled();
        logger.debug(`Element enabled: ${enabled}`);
        return enabled;
    }
}