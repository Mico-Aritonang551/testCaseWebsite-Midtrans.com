import paymentGopay from '../pageObject/gopay.page';

const { Given, When, And, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('User berada di halaman pembayaran.', function () {
    paymentGopay.visit();
    paymentGopay.buyProduct();
    paymentGopay.checkoutProduct();
})

When('user memilih pembayaran dengan gopay', () => {
    paymentGopay.getPaymentFrame();    
})

When('user menekan ikon gopay', () => {
    paymentGopay.clickGopay()
})

Then('user mendapatkan QR code', () => {
    paymentGopay.clickPay()
})
