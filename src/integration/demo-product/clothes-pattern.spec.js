/// <reference types="cypress" />

import { design } from "../../support/page-objects/design-object";

describe("User try out the Studio Demo by changing clothes pattern", () => {
  before(
    "go to Sweatshirt page and choose Design Now to customize clothes",
    () => {
      cy.visit("/sweatshirtmen");

      cy.url().should("include", "sweatshirtmen");

      cy.contains("Design Now").click();
    }
  );
  describe("choose Semi Custom template 1 with provided patterns", () => {
    it("select template fill", () => {
      design.selectMenu("TEMPLATE_SELECTION");
    }),
      it("select template 0", () => {
        design.selectTemplate(0);
      }),
      it("select pattern fill", () => {
        design.selectMenu("AOP");
      });
    it("select pattern for COLORZONE-1 option", () => {
      design.selectColorZone("AOP", 1);

      design.selectPattern(1);
    }),
      it("select pattern for COLORZONE-2 option", () => {
        design.selectColorZone("AOP", 2);

        design.selectPattern(1);
      }),
      it("select pattern for COLORZONE-3 option", () => {
        design.selectColorZone("AOP", 3);

        design.selectPattern(1);
      }),
      it("select pattern for COLORZONE-4 option", () => {
        design.selectColorZone("AOP", 4);

        design.selectPattern(1);
      }),
      it("select pattern for COLORZONE-5 option", () => {
        design.selectColorZone("AOP", 5);

        design.selectPattern(2);
      }),
      it("select pattern for COLORZONE-6 option", () => {
        design.selectColorZone("AOP", 6);

        design.selectPattern(2);
      }),
      it("select pattern for COLORZONE-7 option", () => {
        design.selectColorZone("AOP", 7);

        design.selectPattern(2);
      }),
      it("select pattern for COLORZONE-8 option", () => {
        design.selectColorZone("AOP", 1);

        design.selectPattern(1);
      }),
      it("click Done to save customized pattern", () => {
        design.saveDesign("AOP");
      });
  });
});
