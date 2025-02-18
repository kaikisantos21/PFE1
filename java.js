    // Criando as variáveis
    let nome = "João";
    let idade = 25;
    let cidade = "São Paulo";

    var 2nome;

    Correção: var nome2;

    var _idade;

    var cidade-natal;
    Correção: var cidadeNatal; 

    var $preco;

    var let;

    Correção: var minhaLet; 

    // Declarando a variável sem atribuir um valor
    let altura;

    // Exibindo o valor da variável no console
    console.log(altura);

    // Declarando a variável sem atribuir um valor
    let altura;

    // Atribuindo um valor à variável altura
    altura = 1.75;

    // Exibindo o novo valor da variável no console
    console.log(altura);

    // Ativando o strict mode
    "use strict";

    // Tentando declarar uma variável sem a palavra-chave
    nome = "João";  // Isso causará um erro

    // Criando a variável contador e atribuindo o valor 0
    let contador = 0;

    // Incrementando o valor da variável três vezes
    contador += 1;
    contador += 1;
    contador += 1;

    // Exibindo o resultado no console
    console.log(contador);

    // Criando a constante PI e atribuindo o valor 3.14
    const PI = 3.14;

    // Tentando reatribuir um novo valor à constante
    PI = 3.14159;  // Isso causará um erro

    var:Tem escopo de função, pode ser acessada fora de blocos e é içada (mas só o nome da variável, o valor é atribuído no local SSde declaração).

    let: Tem escopo de bloco, pode ser reatribuída e é içada, mas não pode ser acessada antes da declaração.

    const: Tem escopo de bloco, não pode ser reatribuída, mas se for um objeto ou array, o conteúdo pode ser modificado.

