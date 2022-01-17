/* function sum(a: number , b: number) {
    return a + b;
} */



// ### Interfaces - usadas para definir contratos de estruturas de dados e contratos de classe

/* interface IAnimal {
    nome: string;
    tipo: 'terreste' | 'aquático';
    executarRugido(alturaEmDecibeis: number): void;
} 

type IAnimal = {
    nome: string;
    tipo: 'terreste' | 'aquático';
    executarRugido(alturaEmDecibeis: number): void;
}


interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terreste',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}`)
}
*/

/* interface IAnimal {
    nome: string,
    tipo: 'terreste' | 'aquático',
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terreste',
    visaoNoturna: true
} */


// ### Types - para fazer junções, mergers, pipe, etc.

/* const input = document.getElementById('input') as HTMLInputElement;

input. addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;

    console.log(i.value)
})


// ### Gererics types

function adicionarLista<NaoSei>(array: any[], valor: NaoSei) {
    return array.map(() => valor);
}

adicionarLista([1, 2, 3], 1) */


// ### Condicionais a partir de parâmetros

/* interface IUsuario {
    id: string; 
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario){
        // redirecionar para a área de adminsitração
    }else{
        // redirecionar para a área de usuário
    }
} */   


// ### Utilizando o caracter "?" para variáveis opcionais

/* interface IUsuario {
    id: string; 
    email: string;
    cargo?: 'funcionario' | 'coordenador' | 'supervisor' | 'gerente'; // cargo se torna um dado OPCIONAL
}

function redirecione(usuario: IUsuario) {
    if(usuario.cargo) {
        // redirecionar(usuario.cargo)
    }else{
        // redirecionar para a área de usuário
    }
} 
*/

// ### CRIANDO VARIÁVEIS COM PROPRIEDADE READONLY E PRIVATE

/* interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements Cachorro {
    idade;
    nome;
    parqueFavorito: any;

    constructor(nome: any, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14) */


import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova funcao');        
    }
});

$('body').novaFuncao    ();