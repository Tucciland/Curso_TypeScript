function uniao(usuario) {
    var x = "Voc\u00EA est\u00E1 logado com Usuario:".concat(usuario.user, ", senha:").concat(usuario.senha);
    console.log(x);
    return x;
}
var u = { user: "Cleiton", senha: 10003 };
uniao(u);
