// Desafio 1
//Questão 1
class Usuario{
    constructor(email,senha){
        this.email=email;
        this.senha=senha;
        this.userAdmin = false;
    }
    isAdmin(){
        return this.userAdmin; 
    }
}
class Admin extends Usuario {
    constructor(email,senha){
        super(email,senha);
        this.userAdmin=true;
    }
}
const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

//Questão 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
const idadesUsuarios = usuarios.map(function({idade}){
    return idade;
});
console.log(idadesUsuarios);

const rocketseatTrabs = usuarios.filter(function(usuario){
    if (usuario.idade >= 18)
        if(usuario.empresa ==='Rocketseat') 
            return usuario;
});
console.log(rocketseatTrabs);

const googleEmpregado = usuarios.find(usuario => usuario.empresa === 'Google');
console.log(googleEmpregado);

const userMultipli = usuarios.map(function(usuario){
    usuario.idade=usuario.idade*2;
    return usuario; 
});
const users = userMultipli.filter(function(usuario){
    if (usuario.idade < 50) 
        return usuario;
});
console.log(users);



//Questão 3
// 3.1
const arr = [1, 2, 3, 4, 5];
const aumento = arr.map(item => item+10);
console.log(aumento);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const idadedera = ({idade}) => (idade);
console.log(idadedera(usuario));

// // 3.3
// // Dica: Utilize uma constante pra function
// const nome = "Diego";
// var idade = 23;

// const mostraUsuario = (nome,idade) =>({nome:nome,idade:idade});
// console.log(mostraUsuario(nome,idade=18));

// 3.4

//Questão 4
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};
const {nome,endereco:{cidade,estado}}=empresa;
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

function mostraInfo({nome,idade}) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

//Questão 5
const arrs = [1, 2, 3, 4, 5, 6];
const [x,...y] = arrs;
console.log(x);
console.log(y);

function soma(...params){
    return params.reduce((total,next) => total+next);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

const user = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    },
};

const usuario2 = {...user,nome:'Gabriel'};
const usuario3 = {...user,endereco:{cidade:'Lontras',uf:user.endereco.uf,pais:user.endereco.pais}};
console.log(usuario2);
console.log(usuario3);

//Questão 6
const usuariori = 'Diego';
const idadede = 23;
console.log(`O usuário ${usuariori} possui ${idadede} anos`);

//Questão 7
const nome7 = 'Diego';
const idade7 = 23;
const usuario7 = {
 nome7,
 idade7,
 cidade: 'Rio do Sul',
};
console.log(usuario7);