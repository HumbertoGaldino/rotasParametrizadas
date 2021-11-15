# rotasParametrizadas
Conteúdo de rotas parametrizadas(dinâmicas) com Express do curso Web Fullstack da Digital House.

>Express nos permite criar rotas dinâmicas, nas quais definimos qual parâmetro será utilizado.

> Pode-se utilizar a mesma estrutura básica de definição de rota e adicionar o parâmetro que queremos no path(caminho). Para adicioná-lo basta inserir doi pontos(:) seguido do nome que representa o dado que será recebido na url. Cada parâmetro deve estar separado do resto da rota por barras(/).

Por padrão os parâmetros são obrigatórios, sendo necessário estar inserido a url para receber resposta.

```
    ...'/produto/:id...
```

Caso queira um parâmetro opcional basta inserir interrogação(?) ao seu final. Nesse caso a rota responderá mesmo que não receba o parâmetro.

```
    ...'/produto/:id/:nome?...
```

Para coletarmos os parâmetros trazidos pela rota, utilizamos a propriedade *params* presente no objeto literal **request**.

**Params** também é um objeto literal que armazena os parâmetros recebidos pela URL e segue a estrutura *propriedade:valor* onde cada propriedade terá o nome do parâmetro definido no *path*.

```
    app.get('/produtos/:id/:nome?', (req,res)=>{
        let idProduto = req.params.id;
        let nomeProduto = req.params.nome || 'Sem nome';
    });
```

Sendo assim se passarmos a seguinte URL *localhost:3000/produtos/6* teremos idProduto = 6 e nomeProduto = Sem nome.
