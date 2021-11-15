const express = require('express');

let app = express();

//Cria o servidor
app.listen(3000,()=>console.log("Servidor rodando na porta 3000"));

app.get('/',(req,res)=>{
    res.send('Servidor Funcionando!');
});

app.get('/contato/:id',(req,res)=>{
    res.send('Servidor Funcionando!');
});

//Cria rota parametrizada/dinâmica
//Os :id representa algo que está na url e pode ter qualquer valor
//Na url é necessário indicar o id que deseja ver, par que se possa obter uma resposta
//Ao inserir ? no id tornamos a informação opcional
app.get('/produto/:id?',(req,res)=>{
    //processo de desestruturação do objeto params -> {id}
    let {id} = req.params;
    res.send('Você escolheu o produto com id: '+id);
});

const series = [{id: 1,nome: 'Irmão do Jorel'},{id: 2,nome: 'Um maluco no pedaço'}]

app.get('/serie/:id',(req,res)=>{
    let idSerie = req.params.id;
    let serie = series.find(serie => serie.id == idSerie);    
    res.send(serie);
});