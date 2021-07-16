export class DesignPage {
  selectMenu(option) {
    cy.get("[data-cy='studio-menu-step-" + option + "']", {
      timeout: 20000,
    })
      .should("be.visible")
      .find("button")
      .click();
  }
  selectTemplate(number) {
    cy.get("[data-cy='studio-menu-content-tab-TEMPLATE_SELECTION']")
      .find("[data-cy='studio-design-template-" + number + "']")
      .should("be.visible")
      .click({ force: true });
  }
  selectColorZone(zone, number) {
    cy.get("[data-cy='studio-menu-content-tab-" + zone + "']")
      .find("select")
      .select("COLORZONE-" + number);
  }

  selectPattern(number) {
    var pattern = number === 1 ? ".css-11xakzn" : ".css-1fli986";

    cy.get("[data-cy='studio-menu-content-tab-AOP']")
      .find("button")
      .contains("Select a print")
      .click();

    cy.get("[data-cy='studio-menu-content-tab-AOP']")
      .find("[data-cy='studio-aop-pattern-library']")
      .find(pattern)
      .click({ force: true });

    cy.wait(3000);
  }

  selectColor(color) {
    var colorElement = "";
    var index = 0;

    if (color === "red") {
      index = 3;
      colorElement = ".css-pjl684";
    } else if (color === "white") {
      colorElement = ".css-jc03ms";
    } else {
      index = 17;
      colorElement = ".css-oxl3nv";
    }

    cy.get("[data-cy='studio-menu-content-tab-COLOR']")
      .find("[data-cy='color-index-" + index + "']")
      .find(colorElement)
      .click({ force: true });

    cy.wait(6000);
  }

  saveDesign(zone) {
    cy.get("[data-cy='studio-menu-content-tab-" + zone + "']")
      .find("button")
      .contains("Done")
      .click();
  }
}
export const design = new DesignPage();
