import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { usuarioFake } from '../../support/utils/faker';
import loginPage from "../../e2e/pages/loginPage";

Given("que acesse o banco", () => {
    loginPage.acessarBanco();
});

When("clicar no botao quero ser nubank", () => {
    loginPage.clicarQueroSerNubank();
});

When('preencher os campos do formulario de abertura de conta com',() => {
    const usuario = usuarioFake();
    loginPage.preencherFormulario(usuario);
});

When("marcar o checkbox de termos de aceite", () => {
    loginPage.marcarCheckbox();
});

Then("o botao enviar deve estar disponivel para clicar", () => {
    loginPage.clicarBotaoEnviar();
});