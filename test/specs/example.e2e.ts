import HomePage from  '../pageobjects/Home.page';
import SecurePage from '../pageobjects/secure.page';

describe('360 logica application', () => {

var qA= "https://www.360logica.com/quality-assurance/";
var tA="https://www.360logica.com/test-automation/";
var pT="https://www.360logica.com/performance-testing/";
var cS="https://www.360logica.com/cyber-security/";
var dT="https://www.360logica.com/digital-transformation/";

let name="Meemansa";
let email="meemansam@360logica.com";
let phone="9711334697";
let website="www.360logica.com";
let message="Assignment for webdriver";

    before(async () => {
        //open the application
        await HomePage.open();
            
    });
    it("I should be able to click on sub menus.", async function () {

        //Click on sub menus
        await HomePage.clickMenus(qA, tA,pT,cS,dT);
    });
    it('I should be able to send the details', async () => {
       
        //enter the detail and send
        await HomePage.Enteralldetails(name, email, phone, website, message);
        
    });
});


