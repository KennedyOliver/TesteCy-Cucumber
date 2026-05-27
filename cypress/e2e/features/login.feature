Feature: Login

@BancoNubank
  Scenario: Validacao de formulario de abertura de conta Nubank

 Given que acesse o banco
 When clicar no botao quero ser nubank
 And preencher os campos do formulario de abertura de conta com
 And marcar o checkbox de termos de aceite
 Then o botao enviar deve estar disponivel para clicar