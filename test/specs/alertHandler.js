
const assert = require("assert")

describe('Handle alert', ()=>{
    it('capture text and accept alert', async()=>{
        await browser.url('https://mail.rediff.com/cgi-bin/login.cgi');

      await (await $("//input[@name='proceed']")).click()

      const alert_text = await browser.getAlertText()
      await browser.pause(3000);
      await browser.acceptAlert()
      assert.deepEqual(alert_text,"Please enter a valid user name")

    });
});