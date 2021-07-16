/// <reference types="cypress" />

import { product } from "../../support/page-objects/product-object";
import { cart } from "../../support/page-objects/cart-object";
import { checkout } from "../../support/page-objects/checkout-object";
import address from "../../fixtures/address.json";

describe("User buy clothes in sample store", () => {
  before("visit sample store", () => {
    cy.visit("/salut-partners");
    cy.url().should("include", "salut-partners");
  });

  describe("buy one Doug Zipper Jacket and one Esme Jacket", () => {
    it("select Doug Zipper Jacket", () => {
      product.selectClothes("Doug Zipper Jacket");
    }),
      it("select one quantity", () => {
        product.selectQuantity();
      }),
      it("select size s", () => {
        product.selectSize("S");
      }),
      it("select regular jacket length", () => {
        product.selectPersonalization("Regular  + 0.00 US$", 10);
      }),
      it("select silver zipper color", () => {
        product.selectPersonalization("Silver + 0.00 US$", 11);
      }),
      it("select Add to cart", () => {
        product.addToCart();
      }),
      it("select Continue Shopping", () => {
        cart.selectContinueShopping();
      }),
      it("Select Esme Jacket", () => {
        product.selectClothes("Esme Jacket");
      }),
      it("select one quantity", () => {
        product.selectQuantity();
      }),
      it("select size m", () => {
        product.selectSize("M");
      }),
      it("select mixed variant buttons", () => {
        product.selectPersonalization("Mixed variant + 0.00 US$", 10);
      }),
      it("select short round collar", () => {
        product.selectPersonalization("Short round + 0.00 US$", 11);
      }),
      it("select Add to cart", () => {
        product.addToCart();
      }),
      it("check amount price", () => {
        cart.checkAmountPrice("Doug Zipper Jacket", "Esme Jacket");
      }),
      it("check shipping price", () => {
        cart.checkShippingPrice();
      }),
      it("check total price", () => {
        cart.checkTotalPrice();
      }),
      it("select Chekout Now", () => {
        cart.selectCheckout();
      }),
      it("select Create a new address", () => {
        checkout.createNewAddress();
      }),
      it("input First Name", () => {
        checkout.inputField("firstName", address.firstname);
      }),
      it("input Last Name", () => {
        checkout.inputField("lastName", address.lastname);
      }),
      it("input Email", () => {
        checkout.inputField("email", address.email);
      }),
      it("input Phone", () => {
        checkout.inputField("phone", address.phone);
      }),
      it("input Street ", () => {
        checkout.inputField("address1", address.street);
      }),
      it("input Zip ", () => {
        checkout.inputField("zip", address.zip);
      }),
      it("input City ", () => {
        checkout.inputField("city", address.city);
      }),
      it("input Country ", () => {
        checkout.inputCountry();
      }),
      it("input State ", () => {
        checkout.inputField("province", address.state);
        cy.wait(3000);
      });
    it("save address", () => {
      checkout.saveAddress();
    });
  });
});
