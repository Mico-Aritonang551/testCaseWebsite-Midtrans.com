import paymentBCAVA from '../pageObject/bcaVA.page';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('user berada di halaman pembayaran', function () {
    paymentBCAVA.visit();
    paymentBCAVA.buyProduct();
    paymentBCAVA.checkoutProduct();
})

When('user menekan jenis pembayaran virtual account', () => {
    paymentBCAVA.getPaymentFrame();
    paymentBCAVA.clickBankTransfer();
})

Then('user memilih pembayaran dengan BCA VA', () => {
    paymentBCAVA.clickBCVA()
})

Then('user mendapatkan BCA VA Number', () => {
    paymentBCAVA.clickPay()
})
