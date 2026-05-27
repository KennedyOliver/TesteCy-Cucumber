import { fakerPT_BR as faker } from '@faker-js/faker';
import { cpf } from 'cpf-cnpj-validator';

export function usuarioFake() {

    const email = faker.internet.email();

    return {
        cpf: cpf.generate(false),
        nome: faker.person.fullName(),
        celular: faker.phone.number(),
        email: email,
        confirmacaoemail: email

    };
}