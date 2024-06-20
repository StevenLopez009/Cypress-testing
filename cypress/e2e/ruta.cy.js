import "cypress-file-upload";

describe("ruta test", () => {

  it("Crear regional", () => {
    cy.login("MBAUTISTA", "vertebra2024***");
    cy.visit("http://45.33.16.36:9051/home/clients/groups");
    cy.contains("button", "Crear").click();

    const nombreRegional = "REGIONAL SL";
    const numeroRegional = "1234567";
    const compañia = "BANCOOMEVA";
    const estado = "ACTIVO";

    cy.get(".ant-col-12")
      .eq(0)
      .within(() => {
        cy.get(".ant-form-item").first().click();
      });

    cy.get(".rc-virtual-list-holder-inner")
      .contains(compañia)
      .click({ force: true });
    cy.get(".ant-form-item-row").eq(1).type(nombreRegional);
    cy.get(".ant-form-item-row").eq(2).type(numeroRegional);
    cy.get(".ant-col-12")
      .eq(3)
      .within(() => {
        cy.get(".ant-form-item").first().click();
      });
    cy.get(".rc-virtual-list-holder-inner")
      .contains(estado)
      .click({ force: true });
    cy.get("#create_regional_update_company").check();
    cy.get("button.ant-btn-primary").eq(5).click({ force: true });
    cy.get("button.swal-button--confirm").click();
  });

  it("Crear Punto", () => {
    cy.login("MBAUTISTA", "vertebra2024***");
    cy.visit("http://45.33.16.36:9051/home/clients/places");
    cy.contains("button", "Crear").click();

    const compañia = "BANCOOMEVA";
    const nombrePunto = "EDIFICIO CYPRESS";
    const nombreCompleto = "EDIFICIO CYPRESS";
    const departamento = "CUNDINAMARCA";
    const ciudad = "MADRID";
    const tipoPunto = "OFICINA";
    const estadoPunto = "Activar";
    const grupo = "REGIONAL SL";

    cy.get(".ant-col-8")
      .eq(1)
      .within(() => {
        cy.get(".ant-form-item").first().click();
      });

    cy.get(".rc-virtual-list-holder-inner")
      .find(".ant-select-item-option")
      .contains(compañia)
      .click({ force: true });

    cy.get(".ant-col-8")
      .eq(2)
      .within(() => {
        cy.get(".ant-form-item").first().type(nombrePunto);
      });

    cy.get(".ant-col-8")
      .eq(3)
      .within(() => {
        cy.get(".ant-form-item").first().type(nombreCompleto);
      });

    cy.get(".ant-col-8")
      .eq(5)
      .within(() => {
        cy.get(".ant-form-item").first().click();
      });

    cy.get(".rc-virtual-list-holder-inner")
      .find(".ant-select-item-option")
      .contains(departamento)
      .click({ force: true });

    cy.get(".ant-col-8")
      .eq(6)
      .within(() => {
        cy.get(".ant-form-item").first().type("MADRID");
      });
    cy.get(".rc-virtual-list-holder-inner")
      .find(".ant-select-item-option")
      .contains(ciudad)
      .click({ force: true });

    cy.get(".ant-col-8")
      .eq(7)
      .within(() => {
        cy.get(".ant-form-item").first().click();
      });

    cy.get(".rc-virtual-list-holder-inner")
      .find(".ant-select-item-option")
      .contains(tipoPunto)
      .click({ force: true });

    cy.get(".ant-col-8")
      .eq(11)
      .within(() => {
        cy.get(".ant-form-item").first().click();
      });

    cy.get(".rc-virtual-list-holder-inner")
      .find(".ant-select-item-option")
      .contains(estadoPunto)
      .click({ force: true });

    cy.get(".ant-col-8")
      .eq(12)
      .within(() => {
        cy.get(".ant-form-item").first().type(2229);
      });

    cy.get(".ant-col-8")
      .eq(14)
      .within(() => {
        cy.get(".ant-form-item").first().type(grupo);
      });
    cy.get(".rc-virtual-list-holder-inner")
      .find(".ant-select-item-option")
      .contains(grupo)
      .click({ force: true });

    cy.get(".ant-form-item")
      .eq(18)
      .within(() => {
        cy.get("button.ant-btn.ant-btn-primary").contains("Crear").click();
      });
    cy.get("button.swal-button--confirm").click();
  });

  it("Crear cuenta", () => {
    cy.login("MBAUTISTA", "vertebra2024***");
    cy.visit("http://45.33.16.36:9051/home/clients/accounts");

    const compañia = "BANCOOMEVA";
    const numeroCuenta = "1234567";
    const grupo = "REGIONAL SL";
    const prestador = "EAAB";
    const fecha = "Feb";
    const frecuencia = "MENSUAL";
    const subidaFactura = "EL CLIENTE SUBE LA FACTURA";
    const tipoServicio = "AGUA";
    const numeroMedidor = "122333444";

    cy.get('button[type="button"].ant-btn.ant-btn-primary.ant-btn-sm')
      .contains("Crear")
      .click();

    //select compañia
    cy.get(".ant-col-8")
      .eq(1)
      .within(() => {
        cy.get(".ant-form-item").first().type(compañia);
      });
    cy.get(".rc-virtual-list-holder-inner")
      .find(".ant-select-item-option")
      .contains(compañia)
      .click({ force: true });

    //select numero
    cy.get('input[placeholder="Número"]').type(numeroCuenta);

    //select grupo
    cy.get(".ant-col-8")
      .eq(5)
      .within(() => {
        cy.get(".ant-form-item").first().type(grupo);
      });
    cy.get(".rc-virtual-list-holder-inner")
      .find(".ant-select-item-option")
      .contains(grupo)
      .click({ force: true });

    //select puntos
    cy.get(".ant-col-8")
      .eq(6)
      .within(() => {
        cy.get("#create_account_place").first().click();
      });
    cy.get(".ant-select-dropdown.ant-select-dropdown-placement-bottomLeft")
      .eq(2)
      .click();
    //select prestador
    cy.get(".ant-col-8")
      .eq(7)
      .within(() => {
        cy.get(".ant-form-item").first().type(prestador);
      });
    cy.get(".rc-virtual-list-holder-inner")
      .contains(prestador)
      .should("be.visible")
      .click({ force: true });

    //select fecha facturacion
    cy.get(".ant-col-8")
      .eq(12)
      .within(() => {
        cy.get("#create_account_estimate_payment_config").first().click();
      });
    cy.get(".ant-picker-content").contains(fecha).click();

    //select frecuencia
    cy.get(".ant-col-8")
      .eq(18)
      .within(() => {
        cy.get(".ant-form-item").first().click();
      });

    cy.get(".rc-virtual-list-holder-inner")
      .contains(frecuencia)
      .click({ force: true });

    //pago vertebra
    cy.get(".ant-col-8")
      .eq(21)
      .within(() => {
        cy.get(".ant-form-item").first().click();
      });

    cy.get('.ant-select-item[title="SI"]').eq(0).click();

    // Autorizado pago
    cy.get(".ant-col-8")
      .eq(22)
      .within(() => {
        cy.get(".ant-form-item").first().click();
      });
    cy.get('.ant-select-item-option-active[title="SI"]').eq(1).click();

    //cliente sube factura
    cy.get(".ant-col-8")
      .eq(23)
      .within(() => {
        cy.get(".ant-form-item").first().click();
      });
    cy.get(".rc-virtual-list-holder-inner")
      .contains(subidaFactura)
      .click({ force: true });

    //tipo de servicio
    cy.get(".ant-col-8")
      .eq(27)
      .within(() => {
        cy.get(".ant-form-item").first().click();
      });
    cy.get(".rc-virtual-list-holder-inner")
      .contains(tipoServicio)
      .click({ force: true });

    //numero de medidor
    cy.get(".ant-col-8")
      .eq(34)
      .within(() => {
        cy.get(".ant-form-item").first().type(numeroMedidor);
      });

    cy.get("#create_account").within(() => {
      cy.get(".ant-row .ant-col-12")
        .eq(1)
        .find('button[type="submit"]')
        .click();
    });

    cy.get("button.swal-button--confirm").click();
  });

  it("Cargar factura", () => {
    cy.login("MBAUTISTA", "vertebra2024***");
    cy.visit("http://45.33.16.36:9051/home/load");

    const testInput = (input, inputPlaceholder) => {
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
      cy.get("div.ant-select-item-option-content")
        .contains(inputMayusculas)
        .click();
    };

    testInput(
      "REGIONAL SL",
      'input[id="search_bar"][placeholder="Buscar"]'
    );
    testSelect("BANCOOMEVA", 0);

    // Interceptar la solicitud antes de realizar la acción que la desencadena
    cy.intercept("POST", "http://45.33.16.36:5001/graphql").as(
      "graphqlRequest"
    );

    cy.get("button.ant-btn.ant-btn-dashed.ant-btn-icon-only")
      .contains("span", "upload_file")
      .first()
      .click();
      cy.get("input#image_bill").attachFile("factura.pdf");
      cy.get("textarea#observation").type("Cargando factura desde Cypress");
      cy.wait(8000)
  
    cy.get("button.ant-btn.ant-btn-round.ant-btn-primary.ant-btn-sm")
      .eq(2)
      .contains('span', 'Cargar factura')
      .click();
      cy.wait(4000)

    // Esperar la solicitud y verificar la respuesta
    cy.wait("@graphqlRequest").then((interception) => {
      if (
        interception &&
        interception.response &&
        interception.response.statusCode === 200
      ) {
        cy.get("div.swal2-icon.swal2-error.swal2-icon-show").should(
          "not.exist"
        );
      } else {
        console.error("Error: La solicitud no se completó con éxito.");
      }
    });
    
  });

  it("Borrar todo", () => {
    //eliminar facturas de cuenta
    cy.login("MBAUTISTA", "vertebra2024***");
    cy.visit("http://45.33.16.36:9051/home/load");

    cy.get('input[id="search_bar"][placeholder="Buscar"]').type(
      "REGIONAL SL"
    );
    cy.get(
      ".ant-btn.ant-btn-primary.ant-btn-sm.ant-input-search-button"
    ).click();
    cy.get("div.ant-typography").should("contain.text", "REGIONAL SL");

    cy.get("div.ant-select-selection-overflow").eq(0).type("BANCOOMEVA");
    cy.get("div.ant-select-item-option-content").contains("BANCOOMEVA").click();

    cy.get("button:has(span.material-icons:contains('plagiarism'))").each(
      ($button) => {
        cy.wrap($button).click({ force: true });
      }
    );
    cy.get(".ant-dropdown-trigger").each(($button) => {
      cy.wrap($button).click({ force: true });
    });

    cy.get(".ant-dropdown-menu-title-content").each(($button) => {
      cy.wrap($button).click({ force: true });
    });
    cy.get(".swal2-confirm").click({ multiple: true });
    //eliminar cuenta
    cy.visit("http://45.33.16.36:9051/home/clients/accounts");

    cy.get(".ant-col-8")
      .eq(0)
      .within(() => {
        cy.get(".ant-input-group-wrapper").first().type("REGIONAL SL");
      });

    cy.get(".ant-checkbox-input").check();
    cy.get("button.ant-btn.ant-btn-primary.ant-btn-sm.ant-btn-dangerous")
      .contains("Eliminar")
      .click();

    cy.get("button.swal-button.swal-button--confirm.swal-button--danger")
      .contains("Borrar")
      .click();

    //Eliminar Punto
    cy.visit("http://45.33.16.36:9051/home/clients/places");

    cy.get(".ant-col-8")
      .eq(0)
      .within(() => {
        cy.get(".ant-input-group-wrapper").first().type("REGIONAL SL");
      });
    cy.get(".ant-checkbox-input").check();
    cy.get("button.ant-btn.ant-btn-primary.ant-btn-sm.ant-btn-dangerous")
      .contains("Eliminar")
      .click();
    cy.get("button.swal-button.swal-button--confirm.swal-button--danger")
      .contains("Borrar")
      .click();

    //Eliminar regional
    
    cy.visit("http://45.33.16.36:9051/home/clients/groups");
    cy.get(".ant-col-10")
      .eq(0)
      .within(() => {
        cy.get(".ant-input-group-wrapper").first().type("REGIONAL SL");
      });
    cy.get(".ant-checkbox-input").check();
    cy.get("button.ant-btn.ant-btn-primary.ant-btn-sm.ant-btn-dangerous")
      .contains("Eliminar")
      .click();
    cy.get("button.swal-button.swal-button--confirm.swal-button--danger")
      .contains("Borrar")
      .click();
      
  });
});
