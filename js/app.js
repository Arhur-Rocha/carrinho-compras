function adicionar (){
//recuperar valores, nome do produto, quantidade e valor
let produto = document. getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;

//calcurar o preeço, nosso subtotal.
let preco = quantidade * valorUnitario;

//adicionar no carinhos
let carrinho = document.getElementById('lista-produtos')

carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
  </section>`;
  
let valorTotal = document.getElementById('valor-total');
valorTotal = valorTotal + preco;
valorTotal.innerHMTL = `${valorTotal}`;
//atualizar o valor total 

}

function limpar (){

}