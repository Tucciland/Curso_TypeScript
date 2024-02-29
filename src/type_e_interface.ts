type UserType = {
    nome: string,
    sobrenome: string,
    idade: number,
    e_feliz: boolean
}

interface UserInterface {
    nome: string,
    sobrenome: string,
    idade: number,
    e_feliz: boolean
}

function exibeInfo(usuario: UserInterface) {
    if (usuario.e_feliz == true) {
        return `Olá ${usuario.nome} ${usuario.sobrenome}, você tem ${usuario.idade} e é feliz.`
    }else{
        return `Olá ${usuario.nome} ${usuario.sobrenome}, você tem ${usuario.idade} e não é feliz.`
    }
}

let usuario1 = {
    nome: 'Arthur',
    sobrenome: 'Duarte',
    idade: 20,
    e_feliz: true
}

exibeInfo(usuario1)