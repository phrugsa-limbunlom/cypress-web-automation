export class CheckoutPage {
  createNewAddress() {
    cy.get(".chakra-accordion__item")
      .find("button")
      .contains("No address available")
      .click({ force: true });

    cy.get("[data-cy='create-new-address']")
      .contains("Create a new address")
      .click({ force: true });
  }

  inputField(field, data) {
    cy.get("[data-cy='address-field-" + field + "']").type(data);
  }

  inputCountry() {
    cy.get("input[name='Default country']").then(($el) => {
      $el.val("US");
    });
  }

  saveAddress() {
    cy.get("button").contains("Save").click();
  }
}
export const checkout = new CheckoutPage();
