const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

/* configurando o express para pegar o body*/

app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json())


app.engine('handlebars',exphbs.engine());
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req,res) =>{
    res.render('home')
})

/*comando para isnerir os dados*/
/*extração de dados também*/
/* adicionando no git com chave ssh:  ssh-keygen -t rsa -C "jandsondosanjos@hotmail.com"*/
app.post('/books/insertbook', (req,res) =>{
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `INSERT INTO books (title,pageqty) VALUES ('${title}','${pageqty}')`

    conn.query(sql, function(err){
        if(err){
            console.log();
        }
        res.redirect('/');
    })
})



app.listen(3001);
const conn = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'jandefake3',
    database:'nodemysql2', 
})

conn.connect(function(err){
    if(err){
        console.log(err)
    }
    console.log('Connectou ao Mysql')
    app.listen(3000)
})