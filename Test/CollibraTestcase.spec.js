const{test,expect} = require('@playwright/test')
const {Login} = require('../PageObjects/Login')
const jsondata = require('../TestData/TestData.json');
const {Asset} = require('../PageObjects/Asset')
const {generateName} = require('../Utils/DataFactory')

//Hooks
test.beforeEach(async({page})=>{
    const LoginPage = new Login(page);
    await LoginPage.goto();
    await LoginPage.enterLoginCred(process.env.EmailId,process.env.Password);

    })

test(`@smoke TC 1 - Verify that all organization are visible on home page`, async({page})  =>  {
    
    // const LoginPage = new Login(page);
    // await LoginPage.goto();
    // await LoginPage.enterLoginCred(process.env.EmailId,process.env.Password);
    console.log("Test before each")
    
})

test.describe(`TC2- Verify Domain inside each community` , ()=>{

    // test.beforeEach(async({page})=>{
    // const LoginPage = new Login(page);
    // await LoginPage.goto();
    // await LoginPage.enterLoginCred(process.env.EmailId,process.env.Password);

    // })

    for(const data of jsondata){
        test(`Check the Domain for each Community ${data.CommunityName}` , async({page})=>{
            //await page.getByText(data.CommunityName).click();
            console.log(data.CommunityName)
            //await expect(page.locator('#body')).toHaveText(data.DomainName);
            console.log(data.DomainName)

        })
    }
})

test('Tc 3 - Create File Type Asset' , async({page})=>{
    const AssetPage = new Asset(page);
    const Name = generateName();
    console.log(Name)
    await AssetPage.AssetCreation(Name)
    

})