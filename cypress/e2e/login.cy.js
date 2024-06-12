describe("Login test", () => {
  beforeEach(() => {
    cy.visit("http://45.33.16.36:9051/login");
  });

  it("Test Invalid User", () => {
    const userInvalid = "STEVENLOPEZ";
    const passwordOne = "MkQFXaa0K0em";

    cy.get("#basic_user").type(userInvalid).should("have.value", userInvalid);
    cy.get("#basic_password")
      .type(passwordOne)
      .should("have.value", passwordOne);
    cy.get(
      '.ant-form-item-control-input-content button[type="submit"]'
    ).click();

    cy.get(".swal-modal", { timeout: 10000 }).should("be.visible");
    cy.get(".swal-button").click();
    cy.get(".swal-modal").should("not.be.visible");
    cy.url().should("include", "http://45.33.16.36:9051/login");
  });

  it("Test Valid User", () => {
    const userValid = "STEVENL";
    const passwordTwo = "MkQFXaa0K0em";
    cy.login(userValid, passwordTwo);
  });

  it("Change password", () => {
    const userValid = "STEVENL";
    cy.intercept({
      method: "POST",
      url: "http://45.33.16.36:5001/graphql",
    }).as("restorePassword");
    cy.get(
      '.ant-form-item-control-input-content button[type="button"]:nth-child(2)'
    ).click();
    cy.get(".ant-row-center .ant-col-12").eq(1).click();
    cy.get("#user").type(userValid).should("have.value", userValid);
    cy.get("button.ant-btn.ant-btn-round.ant-btn-primary.ant-btn-sm")
      .contains("Enviar correo")
      .click();
    cy.contains(
      "la recuperacion de su contraseña fue exitosa pronto recibira un correo para terminar el proceso"
    ).should("be.visible");
    cy.wait("@restorePassword").its("response.statusCode").should("eq", 200);
  });
});
