/// <reference types="cypress" />
import { design } from "../../support/page-objects/design-object";
describe("User try out the Studio Demo by changing clothes color", () => {
  before(
    "go to Sweatshirt page and choose Design Now to customize clothes",
    () => {
      cy.visit("/sweatshirtmen");

      cy.url().should("include", "sweatshirtmen");

      cy.contains("Design Now").click();
    }
  );

  describe("choose Semi Custom template 2", () => {
    it("select template fill", () => {
      design.selectMenu("TEMPLATE_SELECTION");
    }),
      it("select template 2", () => {
        design.selectTemplate(2);
      }),
      it("select color fill", () => {
        design.selectMenu("COLOR");
      }),
      it("select Red color for COLORZONE-1 option", () => {
        design.selectColorZone("COLOR", 1);

        cy.get("[data-cy='studio-menu-content-tab-COLOR']")
          .find("[data-cy='color-index-3']")
          .find(".css-pjl684")
          .click();

        cy.wait(6000);
      }),
      it("select Orange color for COLORZONE-2 option", () => {
        design.selectColorZone("COLOR", 2);

        design.selectColor("orange");
      }),
      it("select White color for COLORZONE-3 option", () => {
        design.selectColorZone("COLOR", 3);

        design.selectColor("white");
      }),
      it("click Done to save customized color", () => {
        design.saveDesign("COLOR");
      });
  });
});
