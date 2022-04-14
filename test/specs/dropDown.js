var assert= require("assert")

describe('login test',()=>{
    it('launch the browser', async ()=>{
    await browser.url('https://www.facebook.com/');
    browser.maximizeWindow();
    
    //Get the URL 
    console.log(await browser.getUrl()); 
    
    const createaccountlink = await $("//a[contains(text(),'Create New Account')]");
    await createaccountlink.waitForClickable();
    await createaccountlink.click();

    const day = await $('#day');
    await day.selectByAttribute("value","14");
    const dayText = await day.getValue();
    console.log("Value of Day :- "+dayText);
     assert.strictEqual(dayText,'14');

    const month = await $("#month");
    await month.selectByIndex(2);
    const monthText = await month.getValue();
    console.log("value of month:=>"+monthText);
     assert.equal(monthText,'3');
    

    const year = await $("#year");
    await year.selectByVisibleText("2009");


    })
    
})