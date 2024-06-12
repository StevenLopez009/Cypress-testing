describe("cargueDeFacturas test", () => {
  
  beforeEach(() => {
    cy.login("MBAUTISTA", "vertebra2024***");
    cy.visit("http://45.33.16.36:9051/home/load");
  });

  const testInput = (input, inputIndex, inputPlaceholder) => {
    const inputMayusculas = input.toUpperCase();
    cy.get(inputPlaceholder).type(input).should("have.value", input);
    cy.get(
      ".ant-btn.ant-btn-primary.ant-btn-sm.ant-input-search-button"
    ).click();
    cy.get("div.ant-typography").should("contain.text", inputMayusculas);
  };

  const testSelect = (input, selectIndex) => {
    const inputMayusculas = input.toUpperCase();
    cy.get("div.ant-select-selection-overflow").eq(selectIndex).type(input);
    cy.get("div.ant-select-item-option-content").eq(0).click();
    cy.get("div.ant-typography").should("contain.text", inputMayusculas);
  };

  it("Test Buscador Punto, Regional, Servicio", () => {
    testInput(
      "regional cali",
      0,
      'input[id="search_bar"][placeholder="Buscar"]'
    );
  });

  it("Test Select Compañia", () => {
    testSelect("bancoomeva", 0);
  });

  it("Test Select Proveedor", () => {
    testSelect("dicel", 2);
  });

  it("Test Select Servicio", () => {
    testSelect("energía", 3);
  });

  it("Test Select Estado", () => {
    cy.get("div.ant-select-selector").eq(5).click();
    cy.get("div.ant-select-item-option-content").eq(0).click();
    cy.get("div.ant-typography").should("not.contain.text", "Cuenta inactiva");

    cy.get("div.ant-select-selector").eq(5).click();
    cy.get("div.ant-select-item-option-content").eq(1).click();
    cy.get("span.ant-badge.ant-badge-not-a-wrapper").should(
      "contain.text",
      "Cuenta inactiva"
    );
  });

  it.only("Test Cargue de Factura", () => {
    cy.get("button.ant-btn.ant-btn-dashed.ant-btn-icon-only")
      .contains("span", "upload_file")
      .first()
      .click();
      cy.get("input#image_bill").attachFile("factura.pdf");
      cy.get("textarea#observation").type("Cargando factura desde Cypress");
      cy.wait(8000)
  
    cy.get("button.ant-btn.ant-btn-round.ant-btn-primary.ant-btn-sm")
      .eq(1)
      .contains('span', 'Cargar factura')
      .should('be.visible')
      .and('not.be.disabled')
      .click();
      
  });
});
