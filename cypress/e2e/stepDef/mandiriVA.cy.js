import paymentMandiriVA from '../pageObject/mandiriVA.page';

const { Given, When, And, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('User berada di dalam halaman pembayaran', function () {
    paymentMandiriVA.visit();
    paymentMandiriVA.buyProduct();
    paymentMandiriVA.checkoutProduct();
})

When('User memilih jenis pembayaran virtual account', () => {
    paymentMandiriVA.getPaymentFrame();
    paymentMandiriVA.clickBankTransfer();
})

When('User menekan pembayaran dengan Mandiri VA', () => {
    paymentMandiriVA.clickMandiriVA()
})

Then('User mendapatkan Mandiri VA Number', () => {
    paymentMandiriVA.clickPay()
})
