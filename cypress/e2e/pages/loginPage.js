import { ELEMENTS } from "./loginElements";
import { usuarioFake } from '../../support/utils/faker';

class LoginPage {

    acessarBanco() {
        cy.visit("/");
    }

    clicarQueroSerNubank() {
        cy.clicarElemento(ELEMENTS.botaoQueroSerNubank)
    }

    preencherFormulario(usuarioFake) {
        cy.preencherInput(ELEMENTS.inputCpf, usuarioFake.cpf)
        cy.preencherInput(ELEMENTS.inputNome, usuarioFake.nome)
        cy.preencherInput(ELEMENTS.inputCelular, usuarioFake.celular)
        cy.preencherInput(ELEMENTS.inputEmail, usuarioFake.email)
        cy.preencherInput(ELEMENTS.inputConfirmacaoEmail, usuarioFake.confirmacaoemail)
    }

    marcarCheckbox() {
        cy.clicarElemento(ELEMENTS.checkboxTermos)
    }

    clicarBotaoEnviar() {
        cy.clicarElemento(ELEMENTS.botaoEnviar)
    }
}

export default new LoginPage();