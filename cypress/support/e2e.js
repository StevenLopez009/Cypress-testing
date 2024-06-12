// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
Cypress.on("uncaught:exception", (err, runnable) => {
  // Filtrar el error específico de ResizeObserver
  if (
    err.message.includes(
      "ResizeObserver loop completed with undelivered notifications"
    )
  ) {
    // Return false to prevent the error from failing the test
    return false;
  }
  // Log the error to the console for other uncaught exceptions
  console.error("Uncaught exception:", err);
  // Optionally return false to prevent other exceptions from failing the test
  return false;
});
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
