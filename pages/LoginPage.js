import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page, context) {
    this.page = page;
    this.context = context;
    this.menu_customer_login = "//a[@href='elogin.php']";
    this.text_user_id = "//input[@name='mailuid']";
    this.text_password = "//input[@name='pwd']";
    this.button_login = "//input[@name='login-submit']";
    this.error = page.locator(".errors");
  }

  async visit() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.page.locator(this.menu_customer_login).click();
    await this.page.locator(this.text_user_id).fill(username);
    await this.page.locator(this.text_password).fill(password);
    await this.page.locator(this.button_login).click();
    await this.page.waitForLoadState("networkidle");
  }

  async getEmployeeId() {
    // Add a method to retrieve the employee ID from the page, adjust locator as necessary
    const employeeIdLocator = "//span[@id='employee-id']"; // Modify as per actual locator
    return await this.innerText(employeeIdLocator);
  }
}
