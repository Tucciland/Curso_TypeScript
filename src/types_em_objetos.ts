function uniao(usuario:{user:string, senha:number}):string {
    let x = `Você está logado com Usuario:${usuario.user}, senha:${usuario.senha}`
    console.log(x)
    return x
}

let u = {user: "Cleiton", senha: 10003}

uniao(u)