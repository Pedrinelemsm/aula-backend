const produtos = [];

function listarTodos(req, res){
    res.json(produtos);

}

function buscarPeloId(req, res) {
const { produtoId } = req.params;
const produtoEncontrado = produtos.find(item => item.id == produtoId);
    if (produtoEncontrado) {
        req.produtoEncontrado = produtoEncontrado;
        next();
    } else {
    res.status(404).json({msg:'Produto não encontrado'});
    }   

}

function exibir(req, res ) {
    const {produtoEncontrado} = req; 
    res.json(produtoEncontrado);
};

function validarDados(req, res) {
    const { nome, preco} = req.body;
    if (nome && preco ) {
        next(); 
    } else  {
            res.status(422).json({ msg: "Nome e preço são obrigatórios"});
    }
    


}

function criar(req, res){
    const { nome, preco} = req.body;
    if (nome && preco ) {
    const produtoNovo = {
        id:produtos.length + 1, nome, preco         
    }; 
    produtos.push(produtoNovo);
    res.status(201).json(produtoNovo);      

}
}

function atualizar(req, res) {
    const {produtoEncontrado} = req;
    
         
        produtoEncontrado.nome = nome;
        produtoEncontrado.preco= preco;
        res.json(produtoEncontrado);

        
        res.status(422).json({ msg: "Nome e preço são obrigatórios"});
}

function remover(req,res){
    const { produtoId} = req.params;
    const posicao = produtos.findIndxe(item.id == produtoId);
    produtos.splice(posicao, 1);
    res.status(204).end();
}

module.exports = { listarTodos, buscarPeloId, exibir, validarDados, criar, atualizar, remover };