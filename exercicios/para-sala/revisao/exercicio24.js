//Crie uma função que dado o objeto a seguir com o parâmetro nome e sobrenome:


/*Retorne o seguinte conteúdo:*
A {nome} {Sobrenome} mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.
O retorno deverá ser template string*/

function retornarEndereço(nome, sobrenome, cidade, uf, bairro, rua, numero) {
    const endereco = {
        rua: rua,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        uf: uf
    };
    console.log(`A aluna ${nome} ${sobrenome} mora em ${cidade}/${uf}, no bairro ${bairro}, na ${rua} com nº ${numero}.`)
}
retornarEndereço("Grazielle", "Torres", "São Paulo", "SP", "Centro", "Rua dos Pinheiros", "1293")
