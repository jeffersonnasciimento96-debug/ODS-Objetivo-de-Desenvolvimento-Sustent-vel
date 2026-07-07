Banco · SQL
-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS ODS;
USE ODS;
 
-- Tabela de usuários
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  cpf VARCHAR(14),
  telefone VARCHAR(15),
  foto VARCHAR(255),
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
 
-- Tabela de atividades do usuário
CREATE TABLE IF NOT EXISTS atividades (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  descricao VARCHAR(255),
  data DATETIME DEFAULT NOW(),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
 