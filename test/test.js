import {assert} from 'chai';
const except = require('chai').expect;

describe('Test Complex Counter. General', () => {
    it('should have the right title', () => {
        browser.url('https://likejean.github.io/homework-5/');
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Complex Counter App';
        //expect(actualTitle).toEqual(expectedTitle);
        assert.equal(actualTitle,expectedTitle);
    });

    it(' Verify  that the header is present', ()=> {
        const header = $('[class="header"]').isDisplayed()
        expect(header).toEqual(true)
    })

    it('verify that the header says counters', ()=> {
        const headerText = $('.header').getText();
        assert.equal('Counters',headerText);
    });

    it('verify that total result is present', function () {
        const totalRes =  $('h3').isDisplayed();
        expect(totalRes).toEqual(true)
    });

    it('verify total result says Total: ', function () {
        const totalText = $('h3.total-count').getText();
        assert.equal('Total: 0' ,totalText );
    });

    it('verify that Enter Counter Title is present', function () {
        const totalCounterTitle =  $('[name="name"]').isDisplayed()
        expect(totalCounterTitle).toEqual(true)
    });

    it('verify that the Enter Counter Title text is Enter Counter Title:', function () {
        const labelArr = $$('label');
        const labelArr1 = labelArr[1].getText()
        labelArr[1].isDisplayed()
        expect(labelArr1).toEqual('Enter Counter Title:')
    });

    it('verify that the Add Name Field button text is "Counter Name" ', function () {
        const addNameText = $('[name="name"]').getValue();
        $('[name="name"]').isDisplayed();
        assert.equal(addNameText, 'Counter Name')
    });

    it('verify that the New Counter Default Value Field is present ', function () {
        const defaultValue = $('[data-testid="counter-value-input"]').isDisplayed();
        expect(defaultValue).toEqual(true)
    });

    it('verify that Enter Initial Count text = 50 by default', function () {
        const enterInitialCount =  $$('label')[2].isDisplayed();
        expect(enterInitialCount).toEqual(true)
    });

    it('verify that Enter Initial Count text = 50 by default', function () {
        const textField = $('[name="value"]').getValue()
        assert.equal(textField,'50')
    });

    it('should display text Enter Initial Count', function () {
        const labelArr = $$('label');
        const labelArr2 = labelArr[2].getText();
        assert.equal(labelArr2 , 'Enter Initial Count:');
    });

    it('verify that the Add Counter Button is present ', function () {
        const addCounterButton = $(".btn-success.btn").isDisplayed()
        expect(addCounterButton).toEqual(true)
    });

    it('verify that Add Count Button Text ia "Add Counter" ', function () {
        const addCountButton = $(".btn-success.btn").getText()
        expect(addCountButton).toEqual('ADD COUNTER')
    });

});

describe('Test Complex Counter. Default Counter', () => {

    it('Verify that the counter name displayed', function () {
        const defCounetName = $$('h3')[1].isDisplayed();
        except(defCounetName).equal(true);
    });

    it('Verify that the counter name says: " 1. Default Counter ". ', function () {
        const defCounetName = $$('h3')[1].getText();
        except(defCounetName).equal('1. Default Counter');
    });
    it('Verify that the limit field 1(LF1) is present.', function () {
        const lf1 = $('[name="negative"]').isDisplayed();
        except(lf1).equal(true);
    });

    it('Verify that the LF1 text is \'CHANGE STEP OPTIONS? \'.', function () {
        const lf1 = $('[name="negative"]').getText()
        except(lf1).equal('CHANGE STEP OPTIONS?');
    });

    it('Verify that number 1 shows up by clicking on \'CHANGE STEP OPTIONS? \' in LF1.', function () {
        const lf1 = $('[name="negative"]').click();
        const lf1Value = $('[name="lower"]').isDisplayed();
        except(lf1Value).equal(true);
    });

    it('Verify that number 1 shows up  ', function () {
        const lf1Value = $('[name="lower"]').getValue()
        except(lf1Value).equal('1');
    });

    it('Verify that the rounded red circle \'X\' button shows up  by clicking on \'CHANGE STEP OPTIONS? \' in LF1. ', function () {
        const buttonX = $('[name="negative"]').isDisplayed();
        except(buttonX).equal(true);
    });

    it('Verify that the limit field 2 (LF2) is present.', function () {
        const lf2 = $('[name="positive"]').isDisplayed();
        except(lf2).equal(true);
    });

    it('Verify that the LF2 text is \'CHANGE STEP OPTIONS? \'.', function () {
        const lf2 = $('[name="positive"]').getText()
        except(lf2).equal('CHANGE STEP OPTIONS?');
    });

    it('Verify that number 3 shows up  by clicking on\' CHANGE STEP OPTIONS? \' in  LF2.', function () {
        const lf2 = $('[name="positive"]').click();
        const lf2Value = $('[name="upper"]').getValue();
        except(lf2Value).equal('3');
    });

    it('Verify that rounded red circle \'X\' button shows up  by clicking on \'CHANGE STEP OPTIONS? \' in LF2.', function () {
        const buttonX = $('[name="positive"]').isDisplayed();
        except(buttonX).equal(true);
    });
    it('Verify that the 6 Sub solid black square Buttons is present', function () {
        let stepArr = [];
        const arrBut = $$('[class="btn-black btn Ripple-parent"]').length;
        for(let i = 0; i < arrBut; i++)
        {
            stepArr.push($$('[class="btn-black btn Ripple-parent"]')[i].getAttribute('step'));
        }
        const disBut = stepArr.filter(el => el.includes('-')).length;
        const incBut = stepArr.filter(el => !el.includes('-')).length;
        expect(arrBut).toEqual(6);
        expect(disBut).toEqual(incBut);
    });

    it('Verify that if default counter is deleted, the user  will see  Total: 0, Header \'Counters\',' +
        ' \'\'ADD COUNTER button\'\' and two fields : \'\'Add Name Field\'\' and "Default Value Field" ', function () {
        $('.btn-danger.btn.Ripple-parent.delete').click();
        const total = $('[class="total-count"]').getText();
        const counters = $('[class="header"]').getText();
        expect($('[class="btn-success btn Ripple-parent add col-6"]').isDisplayed()).true;
        expect($$('label')[0].isDisplayed()).true;
        expect($$('label')[1].isDisplayed()).true;
        expect(total).toEqual('Total: 0');
        expect(counters).toEqual('Counters');
    });

    it('"Verify that user can ADD second counter by default.\n' +
        'Preconditions:\n' +
        '1. 1. Default Counter -> Count Value 0 TOTAL: 0\n' +
        '2. Enter Counter Title ->  \'Counter Name\', Initial Count -> 50 (by default)\n' +
        '3. Click ADD COUNTER\n' +
        'Expected Result:  2 counters ot the page TOTAL: 50;\n' +
        '                              New counter appears with name \'2. Counter Name\'\n' +
        '                              Count Value 50\n' +
        '                              Other fields on the default state" ', function () {
        browser.url('');
        $('[class="btn-success btn Ripple-parent add col-6"]').click();
        $$('[class="btn-black btn Ripple-parent"]')[2].click();
        const counterFirst = $$('[class="badge primary badge-primary"]')[0].getText();
        const counterSecond = $$('[class="badge primary badge-primary"]')[1].getText();
        const sumOfCounters = +counterFirst + +counterSecond;
        const total = +$('[class="total-count"]').getText().match(/\d+/g)[0];
        expect(total).toEqual(sumOfCounters);
    });

    it('Verify that Total === Count value', function () {
        browser.url('');
        $$('[class="btn-black btn Ripple-parent"]')[1].click();
        browser.pause(1000);
        $$('[class="btn-black btn Ripple-parent"]')[5].click();
        const countValue = $('[class="badge primary badge-primary"]').getText();
        const total = $('[class="total-count"]').getText().match(/\d+/g)[0];
        expect(countValue).toEqual(total);
    });


    it('Verify that Total === Count value', function () {
        browser.url('');
        $$('[class="btn-black btn Ripple-parent"]')[1].click();
        $$('[class="btn-black btn Ripple-parent"]')[5].click();
        const countValue = $('[class="badge primary badge-primary"]').getText();
        const total = $('[class="total-count"]').getText().match(/\d+/g)[0];
        expect(countValue).toEqual(total);

    });
    // Liza
});


///Sveta


// Nataliia
//Maria
///Sveta

