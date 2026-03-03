Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br')
    I.click('Login')
    I.fillField('#user', 'ruthdasp@gmail.com')
    I.fillField('#password', secret('12345678'))
    I.click('#btnLogin')
    I.waitForText('Login Realizado', 3)

}).tag('@sucesso')

Scenario(' Tentando logar informando apenas o e-mail',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'ruthdasp@gmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida', 3)

}).tag('@apenasemail')

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br')
    I.click('Login')
    I.waitForText('Login', 10)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido', 3)

}).tag('camposvazios')

Scenario('Tentando logar digitando apenas a senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br')
    I.click('Login')
    I.fillField('#password', secret('12345678'))
    I.click('#btnLogin')
    I.waitForText('E-mail inválido', 3)

}).tag('@apenasenha')