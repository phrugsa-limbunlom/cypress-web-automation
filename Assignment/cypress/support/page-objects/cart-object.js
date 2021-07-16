export class CartPage {
  selectContinueShopping() {
    cy.get("[data-cy='continue-shopping']")
      .contains("Continue Shopping")
      .click();
  }
  checkSubTotalPrice(item1, item2) {
    cy.get("[data-cy='item-detail']")
      .find("[data-cy='item-name']")
      .contains(item1)
      .parents("[data-cy='cart-item']")
      .find("[data-cy='item-total-price']")
      .then(($el) => {
        let price1 = parseInt($el.text());
        cy.wrap(price1).as("price1");
      });

    cy.get("[data-cy='item-detail']")
      .find("[data-cy='item-name']")
      .contains(item2)
      .parents("[data-cy='cart-item']")
      .find("[data-cy='item-total-price']")
      .then(($el) => {
        let price1 = parseInt($el.text());
        cy.wrap(price1).as("price2");
      });

    cy.get("@price1").should("eq", 90);

    cy.get("@price2").should("eq", 90);

    cy.get("[data-cy='tax-total']").should("have.text", "180.00 US$");
  }

  checkTotalTax() {
    cy.get(".css-mzy1hw")
      .find("p")
      .contains("Total Tax")
      .find("[data-cy='tax-total']")
      .should("have.text", "0.00 US$");
  }
  checkShippingPrice() {
    cy.get("[data-cy='shipping-price']").should("have.text", "10.00 US$");
  }

  checkTotalPrice() {
    cy.get("[data-cy='total-price'").should("have.text", "190.00 US$");
  }
  selectCheckout() {
    cy.get("[data-cy='checkout']").contains("Checkout Now").click();
  }
}

export const cart = new CartPage();
