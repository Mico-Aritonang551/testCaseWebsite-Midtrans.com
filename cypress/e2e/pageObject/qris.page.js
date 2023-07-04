import 'cypress-iframe';
const URL = 'https://demo.midtrans.com';
const BUY = '.buy';
const CHECKOUT = '.cart-checkout';
const PAYMENT = 'iframe#snap-midtrans';
const QRIS = 'a[href="#/other-qris"]';
const BUTTON = '.primary';

class paymentQRIS {
  static visit() {
    cy.visit(URL);
  }

  static buyProduct() {
    cy.get(BUY).click();
  }

  static checkoutProduct() {
    cy.get(CHECKOUT).click();
  }

  static getPaymentFrame() {
    return cy.get(PAYMENT).iframe();
  }

  static clickQRIS() {
    this.getPaymentFrame().find(QRIS).click();
  }
  
  static clickPay() {
    this.getPaymentFrame().find(BUTTON).click();
  }
}

export default paymentQRIS;
