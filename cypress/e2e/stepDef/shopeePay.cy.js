import paymentShopeepay from '../pageObject/shopeePay.page';

const { Given, When, And, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('user sudah berada di halaman pembayaran', function () {
    paymentShopeepay.visit();
    paymentShopeepay.buyProduct();
    paymentShopeepay.checkoutProduct();
})

When('user memilih pembayaran dengan shoopepay', () => {
    paymentShopeepay.getPaymentFrame();    
})

When('user menekan ikon Shopeepay', () => {
    paymentShopeepay.clickShopeepay()
})

Then('user mendapatkan QR code shoopepay', () => {
    paymentShopeepay.clickPay()
})
