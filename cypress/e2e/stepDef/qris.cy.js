import paymentQRIS from '../pageObject/qris.page';

const { Given, When, And, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('user berada di halaman pembayaran produk', function () {
    paymentQRIS.visit();
    paymentQRIS.buyProduct();
    paymentQRIS.checkoutProduct();
})

When('user memilih pembayaran dengan QRIS', () => {
    paymentQRIS.getPaymentFrame();    
})

When('user menekan ikon QRIS', () => {
    paymentQRIS.clickQRIS()
})

Then('user mendapatkan QR code QRIS', () => {
    paymentQRIS.clickPay()
})
