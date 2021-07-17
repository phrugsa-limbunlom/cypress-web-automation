export class ProductPage {
  selectClothes(name) {
    cy.get("[data-cy='product-card']")
      .find("p")
      .contains(name)
      .parents("[data-cy='product-card-link']")
      .click();
  }

  selectQuantity() {
    cy.get(".chakra-numberinput.css-ihcgt8").should("have.attr", "value", "1");
  }

  selectSize(size) {
    cy.get("[data-cy='variant']").select(size);
  }

  selectPersonalization(option, index) {
    cy.get("#field-" + index).select(option);
  }
  addToCart() {
    cy.get("[data-cy='add-to-cart']")
      .contains("Add to cart")
      .trigger("mouseover")
      .click();
  }
}
export const product = new ProductPage();
