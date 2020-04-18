# Verse of Day (Versículo do Dia)

Esse projeto foi feito para aplicar alguns conhecimentos adquiridos em consumir uma API e utilizar novas funcionalidades do React.

------------

## Funcionalidades
Exibi de forma aleatória um versículo da bíblia.

![Prints](https://i.ibb.co/p4hpc9v/prints.png "Prints")

------------

#### Depedências
- Node.js(^v8.x).
Esse projeto foi criado usando o [Create React App](https://github.com/facebook/create-react-app).

------------

#### Configuração
- Crie um arquivo  *.env* na raiz do projeto. Esse arquivo deve conter as seguites chaves:

> .env

```
REACT_APP_BIBLE_API_URL=
REACT_APP_BIBLE_API_KEY=
```

- A URL base para realizar as requisições é a seguinte: 

```
https://bibleapi.co/api/verses/nvi/random
```

- Também se faz necessário um TOKEN, que pode ser obtido lendo a documentação aqui  [Bible API - Documentation](https://github.com/marciovsena/bibleapi/blob/dev/DOCUMENTATION.md "Bible API").

###### Para maiores informações acesse [BibleAPI](https://bibleapi.co/ "BibleAPI").
------------

#### Instalação
No projeto foi usado o yarn.

##### Instale as depedências
> yarn install

##### Execulte o projeto localmente
> yarn start

------------