export class CartPage {
  selectContinueShopping() {
    cy.get("[data-cy='continue-shopping']", {
      timeout: 20000,
    })
      .contains("Continue Shopping")
      .should("be.visible")
      .click();
  }
  checkAmountPrice(item1, item2) {
    cy.get("[data-cy='item-name']")
      .contains(item1)
      .parents("[data-cy='cart-item']")
      .find("[data-cy='item-total-price']")
      .then(($el) => {
        let price1 = parseInt($el.text());
        cy.wrap(price1).as("price1");
      });

    cy.get("@price1").should("eq", 90);
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
