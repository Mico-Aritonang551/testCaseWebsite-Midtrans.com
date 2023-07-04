import 'cypress-iframe';
const URL = 'https://demo.midtrans.com';
const BUY = '.buy';
const CHECKOUT = '.cart-checkout';
const PAYMENT = 'iframe#snap-midtrans';
const VA = 'a[href="#/bank-transfer"]';
const BANK = 'a[href="#/bank-transfer/bca-va"]';
const BUTTON = '.primary';

class paymentBCAVA {
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

  static clickBankTransfer() {
    this.getPaymentFrame().find(VA).click();
  }

  static clickBCVA() {
    this.getPaymentFrame().find(BANK).click();
  }

  static clickPay() {
    this.getPaymentFrame().find(BUTTON).click();
  }
}

export default paymentBCAVA;
