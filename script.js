document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', () => {
        alert("Link copiado!");
    });
});

const express = require('express');
const app = express();
app.use(express.json());

let users = {}; // Exemplo simples sem banco de dados (apenas para teste)

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (users[username]) {
        return res.status(400).send('Usuário já existe');
    }
    users[username] = { password, links: [] };
    res.send('Usuário registrado com sucesso!');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users[username];
    if (!user || user.password !== password) {
        return res.status(400).send('Credenciais inválidas');
    }
    res.send('Login bem-sucedido');
});

app.post('/create-linkpage', (req, res) => {
    const { username, links } = req.body;
    if (!users[username]) {
        return res.status(404).send('Usuário não encontrado');
    }
    users[username].links = links;
    res.send('Página de links criada!');
});

app.get('/:username', (req, res) => {
    const { username } = req.params;
    const user = users[username];
    if (!user) {
        return res.status(404).send('Usuário não encontrado');
    }
    res.json(user.links);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
