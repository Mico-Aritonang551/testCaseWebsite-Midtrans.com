import paymentIndomaret from '../pageObject/indomaret.page';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('User sedang berada di halaman pembayaran', function () {
    paymentIndomaret.visit();
    paymentIndomaret.buyProduct();
    paymentIndomaret.checkoutProduct();
})

When('user memilih pembayaran dengan Indomaret', () => {
    paymentIndomaret.getPaymentFrame();    
})

When('user menekan ikon Indomaret', () => {
    paymentIndomaret.clickIndomaret()
})

Then('user mendapatkan payment code Indomaret', () => {
    paymentIndomaret.clickPay()
})
