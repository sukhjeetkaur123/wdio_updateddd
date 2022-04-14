import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
       await browser.maximizeWindow();
        await expect(browser).toHaveTitle('OrangeHRM');
        // await LoginPage.checkLinks();
        await LoginPage.login('Admin', 'admin123');
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //      'Welcome');
    });
});


