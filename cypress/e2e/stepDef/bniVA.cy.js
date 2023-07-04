import paymentBNIVA from '../pageObject/bniVA.page';

const { Given, When, And, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('User berada di halaman pembayaran', function () {
    paymentBNIVA.visit();
    paymentBNIVA.buyProduct();
    paymentBNIVA.checkoutProduct();
})

When('User menekan jenis pembayaran virtual account', () => {
    paymentBNIVA.getPaymentFrame();
    paymentBNIVA.clickBankTransfer();
})

When('User memilih pembayaran dengan BNI VA', () => {
    paymentBNIVA.clickBNIVA()
})

Then('User mendapatkan BNI VA Number', () => {
    paymentBNIVA.clickPay()
})
