function uniao(usuario:{user:string, senha?:number}):string {
    if (usuario.senha !== undefined) {
        let str: string = `Você está logado com Usuario:${usuario.user}, senha:${usuario.senha}`
        console.log(str)
        return str
    }else{
        let str: string = `Você está logado com Usuario:${usuario.user}, porem sem senha.`
        console.log(str)
        return str
    }
}

let u = {user: "Cleiton"}

uniao(u)