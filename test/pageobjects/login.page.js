

import Page from './page';
var assert = require ("assert")

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#txtUsername');
    }

    get inputPassword () {
        return $('#txtPassword');
    }

    get btnSubmit () {
        return $('#btnLogin');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    // async checkLinks(){
    //     const links = await $$('//div[@id="social-icons"]//img')
    //     console.log("count of links",links.length);
    //     assert.strictEqual(links.length,4,"count is mismactch");
    //     for(let i=0;i<links.length;i++){
    //         console.log("count of links with title", await links[i].getAttribute("alt"));
    //         if(await links[i].getAttribute("alt")==="OrangeHRM on twitter"){
    //             await links[i].click();
    //             await browser.pause(4000);
    //             break;
    //         }
    //         await browser.closeWindow();
    //          await browser.switchWindow("OrangeHRM")
    //     }
    // }
    async login (username, password) {
        // browser.maximizeWindow();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
      
    }
}

export default new LoginPage();
