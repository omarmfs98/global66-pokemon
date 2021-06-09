# global66-pokemon

## Que tecnologias use?
Para este proyecto quize usar Nuxt.js, Vue 3 y Typescript, lo hice porque estuve viendo que la pagina de global66 esta en un SPA, y si llego a tener la oportunidad de entrar, me gustaria proponer una migración a SSR, esto con el fin de evitar el loaders y la posibilidad de tener mejores pautas con respecto al SEO

## Links y Repositorio
Ingrese al siguiente [Link](https://github.com/omarmfs98/global66-pokemon) para acceder al repositorio
En este [Link](https://global66.omarflorez.me/) podrá ver la aplicación desplegada

## Loader veloz
Es posible que no logre ver el loader, y es por que uso SSR, este carga muy rapido y solo se podria apreciar si desde el lado del server se esta ejecutando una request con un tiempo de respuesta algo considerable, por eso agregue en una ruta aparte para que pueda verlo con la animación que hice: [Ver Loading](https://global66.omarflorez.me/loading)

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```