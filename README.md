# ServiceNet Front-end

Sistema desenvolvido como desafio do processo seletivo da empresa ServiceNet. Esta aplicação front-end consome os endpoints da 
[ServiceNet-API](https://github.com/dieanderson/servicenet-api) e obedece as regras de negócio solicitadas, foi desenvolvido em 
JavaScript utilizando React.js

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

[React.js](https://pt-br.reactjs.org/), [Node.js](https://nodejs.org/). 

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

