import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });
  const [erro, setErro] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCadastro = async () => {
    try {
      const res = await fetch("http://localhost:3001/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Cadastro realizado! Faça login.");
        navigate("/login");
      } else {
        setErro(data.mensagem);
      }
    } catch {
      setErro("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="p-5 rounded-4 shadow-sm" style={{ width: 460, border: "1px solid #e5e4e7" }}>
        <h2 className="fw-bold mb-1" style={{ color: "#0a0a0a" }}>Criar conta</h2>
        <p className="text-muted mb-4" style={{ fontSize: 14 }}>Preencha os dados para começar</p>

        {erro && <div className="alert alert-danger">{erro}</div>}

        <div className="mb-3">
          <label className="form-label fw-semibold" style={{ fontSize: 14 }}>Nome completo</label>
          <input type="text" name="nome" className="form-control rounded-3" placeholder="Seu nome completo" value={form.nome} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold" style={{ fontSize: 14 }}>E-mail</label>
          <input type="email" name="email" className="form-control rounded-3" placeholder="seu@email.com" value={form.email} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="form-label fw-semibold" style={{ fontSize: 14 }}>Senha</label>
          <input type="password" name="senha" className="form-control rounded-3" placeholder="Mínimo 8 caracteres" value={form.senha} onChange={handleChange} />
        </div>

        <button onClick={handleCadastro} className="btn btn-success rounded-pill w-100 py-2 fw-semibold">
          Criar minha conta
        </button>

        <p className="text-center text-muted mt-3" style={{ fontSize: 13 }}>
          Já tem conta? <a href="/login" className="text-success text-decoration-none fw-semibold">Entrar</a>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;