Criei um Projeto NextJS na versão 13 com TypeScript, esse projeto não irá utilizar TailwindCSS, como também não irá utilizar o App Folder (nova estrutura de pastas que trás novas funcionalidades dentro do Next13).

## Executar o projeto

**Passo a passo de como rodar o projeto em ambiente local:**

- Executar o `git clone` passando a `url` do projeto para clonar em sua máquina.
- Após clonar, acessar a pasta do projeto e **instalar as dependências** (rodar `yarn` no terminal).
- Nosso projeto utiliza o JSON Server e para rodar com todas as funcionalidades em tela precisamos executar o JSON Server junto de nosso projeto. Para isso, criei um script que executa tanto o projeto Next, quanto o JSON Server. Para isso, só precisamos rodar `yarn start:dev` . Utilizando o pacote concurrently é permitido que rode 2 ou mais scripts simultâneos com apenas um comando, então o nosso `yarn start:dev` **executa 2 scripts**, o `yarn dev` e o `yarn json:server` ao mesmo tempo.
- Assim, nossa aplicação está rodando, é só acessar http://localhost:3000.

## Estilizações

**Aqui irei descrever as principais decisões que tomei para ter uma boa base de `styles` no projeto:**

Peguei os arquivos de fonts disponibilizado no teste, adicionei na pasta `public` e defini um arquivo `fonts.css`, o qual, utilizando a propriedade font-face do CSS, conseguimos definir fontes customizadas para nossa aplicação.

Defini um arquivo de tema, com as cores que serão utilizadas no projeto, em conjunto desse arquivo também fiz a definição de tipagens para o styled-components, editando a tipagem padrão do `DefaultTheme` adicionando o **typeof** do objeto de tema definido.

Defini também um `Global Style` do Styled Components, o qual reseta propriedades do navegador (**padding, box-sizing, border-focus, margin**) e adiciona **cores** e **fontes** e **tamanhos** padrão para toda a aplicação.

Como estrutura de código para estilos, crio sempre um “Container” que engloba todo o Componente definindo **background, padding, margin.** Dentro do Container, quando necessário, crio um “Wrapper” que define **largura máxima** dos elementos, **display (grid, flex, block),** dentro do Wrapper entra tudo que deve ser renderizado naquele Componente.

## Components

**Vou descrever um pouco das decisões que tomei para criar alguns dos componentes importantes para o projeto:**

### Demo Leads

O componente **DemoLeads** é a seção de venda da nossa plataforma, ela tem um Background específico o qual tem uma **simulação de histograma** com uma `cor sólida` sobre o background do da seção. Para isso criei um elemento Componente de estilo `Mountain` o qual, utilizando propriedades CSS, pseudo-elements, cria um elemento responsivo que simula um histograma utilizando a cor `#E6F3FF`

Fora o Background, não tem muito de específico aqui, um flexbox entre uma imagem e uma Box o qual contém um botão que não executa nada até o momento.

### List Videos

Nesse componente, para ganhar uma melhor performance e rápida renderização, escolhi utilizar o pacote SWR fornecido pela própria Vercel. Aqui definimos um hook que recebe a API que irá buscar e o metódo que fará a requisição http (no caso, a função `fetcher`).

### Pagination

Esse componente é um aprendizado que guardo com muito carinho kkk, poder criar um sistema de controlar paginação recebendo state e setState através de propriedades. 

O Componente fala por si só, recebe **página atual**, **quantidade máxima** de páginas e **função** para o **onClick** (no caso, um estado que representa a próxima página a ser buscada). Ele renderiza: página inicial (0 ou 1), página atual, prevPage, nextPage e página final (qntd máxima). A página atual não é clicável e está sempre ativa, a prevPage é a **página atual - 1** e a nextPage é a **página atual + 1**.
