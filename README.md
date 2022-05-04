# ServiceNet Front-end

Sistema desenvolvido como desafio do processo seletivo da empresa ServiceNet. Esta aplicação front-end consome os endpoints da 
[ServiceNet-API](https://github.com/dieanderson/servicenet-api) e obedece as regras de negócio solicitadas, foi desenvolvido em 
JavaScript utilizando React.js

[Clique aqui para acessar o projeto em produção](https://level-test.surge.sh/)

### Regras de Negócio:

- Estrutura do usuário: Matrícula(gerada pelo sistema), Nome, Data de Nascimento, E-mail, Senha.
- Realizar o cadastro, atualização, remoção e listagem dos usuários utilizando a API criada.
- Listagem de usuários deve permitir filtrar por nome.
- Listagem deve disponibilizar botões de editar e remover.
- Ao clicar no botão editar deve exibir um modal com informações para edição dos dados.
- Senha deve conter algum tipo de segurança em sua persistência.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e testes.

### 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

[Node.js](https://nodejs.org/). 

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🔧 Instalação

Clonar o repositório utilizando o seguinte código:

```
git clone git@github.com:dieanderson/servicenet-front-end.git
```

Acessar a pasta do projeto:

```
cd servicenet-front-end
```

Instalar as dependências:

```
npm install
```

## Executando a aplicação

Após as dependências instaladas, iniciar o servidor da API de acordo com as instruções do repositório:

[ServiceNet-API](https://github.com/dieanderson/servicenet-api) 

Executar a aplicação:

```
npm start
```

O navegador padrão deve abrir automaticamente, caso não abra acessar o seguinte endereço:

```
http://localhost:3000
```

## 🛠️ Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- [React.js](https://pt-br.reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Material UI](https://mui.com/pt/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Moment](https://momentjs.com/)
- [React-router-dom](https://www.npmjs.com/package/react-router-dom)

## Imagens da Aplicação em funcionamento

<img width="1440" alt="Captura de Tela 2022-05-04 às 10 50 57" src="https://user-images.githubusercontent.com/85021274/166696192-2b8330b3-28e6-4f0b-92a5-4c8843987e46.png">
<img width="1440" alt="Captura de Tela 2022-05-04 às 10 51 13" src="https://user-images.githubusercontent.com/85021274/166696211-9c0bb90d-9b86-4399-b532-03ec1ce25708.png">
<img width="1440" alt="Captura de Tela 2022-05-04 às 10 51 27" src="https://user-images.githubusercontent.com/85021274/166696219-45889cf9-83a3-44d8-823e-d1ce58a7adc4.png">
<img width="1440" alt="Captura de Tela 2022-05-04 às 10 51 36" src="https://user-images.githubusercontent.com/85021274/166696225-f5f9c53e-1664-47bc-b128-7a80a057decc.png">
<img width="1440" alt="Captura de Tela 2022-05-04 às 10 52 01" src="https://user-images.githubusercontent.com/85021274/166696229-9c5fa795-d773-49ef-a0a2-cd2bec4a38a5.png">

