/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = ['Francisco', 39, true, false, function myFunction(){ return 1+5;} , 'F', [1,2,3,4,5]];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array = [1, 'ola', 5, 4, 9, 'F']){
    return array;
} 
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
Console.log(myFunction()[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction02(vetor, posicao){
    if(posicao === undefined){
        return vetor;
    }
    else return vetor[posicao]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar = ['Francisco', 39, true, false, function myFunction(){ return 1+5;} , 'F', [1,2,3,4,5]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction02(myVar);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(nomelivro){
   var allLivros = { 
    'Javascript guia Definitivo' : {
        quantidadesDePaginas: 1024,
        autor: ' David Flanagan',
        editora: 'Bookman' 
        },
    'Fundamentos de HTML5 e CSS3' : {
        quantidadesDePaginas: 541,
        autor: ' Maurício Samy Silva',
        editora: 'Novatec' 
        },

    'Codigo Limpo' : {
        quantidadesDePaginas: 425,
        autor: 'Robert C. Martin',
        editora: 'Alta Books' 
        }  
   }
   return !nomelivro?  allLivros : allLivros[nomelivro]
      
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Codigo Limpo tem ' + book('Codigo Limpo').quantidadesDePaginas + ' páginas.')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Codigo Limpo é ' + book('Codigo Limpo').autor + '.')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Codigo Limpo foi publicado pela editora ' + book('Codigo Limpo').editora + '.')
