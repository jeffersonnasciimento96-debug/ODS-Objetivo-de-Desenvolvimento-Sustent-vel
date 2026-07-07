README — Back-end

Tecnologias


Node.js
Express
MySQL2
Bcryptjs
CORS



Endpoints


POST /cadastro

Cadastra um novo usuário no sistema.

Body (JSON):

json{
  "nome": "Jefferson Nascimento",
  "email": "jefferson@email.com",
  "senha": "123456789"
}

Resposta de sucesso (200):

json{
  "mensagem": "Usuário cadastrado!"
}

Resposta de erro (400):

json{
  "mensagem": "Erro ao cadastrar"
}


POST /login

Autentica um usuário existente.

Body (JSON):

json{
  "email": "jefferson@email.com",
  "senha": "123456789"
}

Resposta de sucesso (200):

json{
  "mensagem": "Login realizado",
  "usuario": {
    "id": 1,
    "nome": "Jefferson Nascimento",
    "email": "jefferson@email.com",
    "cpf": null,
    "telefone": null,
    "foto": null,
    "criado_em": "2026-01-01T00:00:00.000Z"
  }
}

Resposta de erro — usuário não encontrado (401):

json{
  "mensagem": "Usuário não encontrado"
}

Resposta de erro — senha incorreta (401):

json{
  "mensagem": "Senha incorreta"
}