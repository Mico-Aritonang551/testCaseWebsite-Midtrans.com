import 'cypress-iframe';
const URL = 'https://demo.midtrans.com';
const BUY = '.buy';
const CHECKOUT = '.cart-checkout';
const PAYMENT = 'iframe#snap-midtrans';
const SHOPEEPAY = 'a[href="#/shopeepay-qris"]';
const BUTTON = '.primary';

class paymentShopeepay {
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

  static clickShopeepay() {
    this.getPaymentFrame().find(SHOPEEPAY).click();
  }
  
  static clickPay() {
    this.getPaymentFrame().find(BUTTON).click();
  }
}

export default paymentShopeepay;
