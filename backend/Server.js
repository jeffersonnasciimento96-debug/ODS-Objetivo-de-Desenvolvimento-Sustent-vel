const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jf@266327640123",
  database: "ODS",
});

db.connect(() => {
  console.log("Banco conectado!");
});

app.post("/cadastro", async (req, res) => {
  console.log("Dados recebidos:", req.body);
  const { nome, email, senha } = req.body;

  const senhaHash = await bcrypt.hash(senha, 10);

db.query(
  "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
  [nome, email, senhaHash],
  (erro, resultado) => {
    if (erro) {
      console.log("Erro no banco:", erro.message); // ← troca por isso
      return res.status(400).json({
        mensagem: "Erro ao cadastrar",
      });
    }
    console.log("Inserido com sucesso:", resultado); // ← adiciona
    res.json({
      mensagem: "Usuário cadastrado!",
    });
  }
);
});

app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  db.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email],
    async (erro, resultado) => {
      if (resultado.length === 0) {
        return res.status(401).json({
          mensagem: "Usuário não encontrado",
        });
      }

      const usuario = resultado[0];

      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

      if (!senhaCorreta) {
        return res.status(401).json({
          mensagem: "Senha incorreta",
        });
      }

      res.json({
        mensagem: "Login realizado",
        usuario,
      });
    }
  );
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});