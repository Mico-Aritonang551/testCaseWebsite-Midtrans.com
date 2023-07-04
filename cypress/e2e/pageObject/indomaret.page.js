import 'cypress-iframe';
const URL = 'https://demo.midtrans.com';
const BUY = '.buy';
const CHECKOUT = '.cart-checkout';
const PAYMENT = 'iframe#snap-midtrans';
const INDOMARET = 'a[href="#/indomaret"]';
const BUTTON = '.primary';

class paymentIndomaret {
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

  static clickIndomaret() {
    this.getPaymentFrame().find(INDOMARET).click();
  }
  
  static clickPay() {
    this.getPaymentFrame().find(BUTTON).click();
  }
}

export default paymentIndomaret;
