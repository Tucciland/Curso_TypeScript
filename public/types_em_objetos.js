function uniao(usuario) {
    if (usuario.senha !== undefined) {
        var str = "Voc\u00EA est\u00E1 logado com Usuario:".concat(usuario.user, ", senha:").concat(usuario.senha);
        console.log(str);
        return str;
    }
    else {
        var str = "Voc\u00EA est\u00E1 logado com Usuario:".concat(usuario.user, ", porem sem senha.");
        console.log(str);
        return str;
    }
}
var u = { user: "Cleiton" };
uniao(u);
