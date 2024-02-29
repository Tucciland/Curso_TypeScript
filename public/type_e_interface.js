function exibeInfo(usuario) {
    if (usuario.e_feliz == true) {
        return "Ol\u00E1 ".concat(usuario.nome, " ").concat(usuario.sobrenome, ", voc\u00EA tem ").concat(usuario.idade, " e \u00E9 feliz.");
    }
    else {
        return "Ol\u00E1 ".concat(usuario.nome, " ").concat(usuario.sobrenome, ", voc\u00EA tem ").concat(usuario.idade, " e n\u00E3o \u00E9 feliz.");
    }
}
var usuario1 = {
    nome: 'Arthur',
    sobrenome: 'Duarte',
    idade: 20,
    e_feliz: true
};
exibeInfo(usuario1);
