import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Perfil() {
  const navigate = useNavigate();

  const usuario = JSON.parse(
    localStorage.getItem("usuario") || "{}"
  );

  const [editando, setEditando] = useState(false);
  const [sucesso, setSucesso] = useState("");

const [form, setForm] = useState({
  nome: usuario.nome || "",
  email: usuario.email || "",
  telefone: usuario.telefone || "",
  cpf: usuario.cpf || "",
  nascimento: usuario.nascimento || "",
  cidade: usuario.cidade || "",
  escolaridade: usuario.escolaridade || "",
  curso: usuario.curso || "",
  profissao: usuario.profissao || "",
  empresa: usuario.empresa || "",
  formacao: usuario.formacao || "",
  area: usuario.area || "",
  experiencia: usuario.experiencia || "",
  objetivo: usuario.objetivo || "",
  habilidades: usuario.habilidades || "",
  linkedin: usuario.linkedin || "",
  github: usuario.github || "",
  sobre: usuario.sobre || "",
});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSalvar = () => {
    const atualizado = {
      ...usuario,
      ...form,
    };

    localStorage.setItem(
      "usuario",
      JSON.stringify(atualizado)
    );

    setSucesso("Dados atualizados com sucesso!");
    setEditando(false);

    setTimeout(() => {
      setSucesso("");
    }, 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center py-5"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="p-5 rounded-4 shadow-sm bg-white"
        style={{ width: "550px" }}
      >
        {/* Avatar */}
        <div className="text-center mb-4">
          <div
            className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: 100,
              height: 100,
              backgroundColor: "#dcfce7",
              fontSize: 45,
            }}
          >
            👤
          </div>

          <h3 className="fw-bold">
            {form.nome || "Usuário"}
          </h3>

          <p className="text-muted">
            {form.email}
          </p>
        </div>

        {sucesso && (
          <div className="alert alert-success">
            {sucesso}
          </div>
        )}

        <div className="mb-3">
          <label className="form-label fw-semibold">
            Nome
          </label>

          <input
            type="text"
            name="nome"
            className="form-control"
            value={form.nome}
            onChange={handleChange}
            disabled={!editando}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">
            E-mail
          </label>

          <input
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            disabled={!editando}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">
            Telefone
          </label>

          <input
            type="text"
            name="telefone"
            className="form-control"
            value={form.telefone}
            onChange={handleChange}
            disabled={!editando}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">
            CPF
          </label>

          <input
            type="text"
            name="cpf"
            className="form-control"
            value={form.cpf}
            onChange={handleChange}
            disabled={!editando}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">
            Cidade
          </label>

          <input
            type="text"
            name="cidade"
            className="form-control"
            value={form.cidade}
            onChange={handleChange}
            disabled={!editando}
          />
        </div>

        <div className="mb-3">
  <label className="form-label fw-semibold">
    Profissão
  </label>
  <input
    type="text"
    name="profissao"
    className="form-control"
    value={form.profissao}
    onChange={handleChange}
    disabled={!editando}
  />
</div>

<div className="mb-3">
  <label className="form-label fw-semibold">
    LinkedIn
  </label>
  <input
    type="text"
    name="linkedin"
    className="form-control"
    value={form.linkedin}
    onChange={handleChange}
    disabled={!editando}
  />
</div>

<div className="mb-3">
  <label className="form-label fw-semibold">
    GitHub
  </label>
  <input
    type="text"
    name="github"
    className="form-control"
    value={form.github}
    onChange={handleChange}
    disabled={!editando}
  />
</div>

        <div className="mb-3">
          <label className="form-label fw-semibold">
            Formação
          </label>

          <input
            type="text"
            name="formacao"
            className="form-control"
            value={form.formacao}
            onChange={handleChange}
            disabled={!editando}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">
            Área de Interesse
          </label>

          <input
            type="text"
            name="area"
            className="form-control"
            value={form.area}
            onChange={handleChange}
            disabled={!editando}
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">
            Sobre mim
          </label>

          <textarea
            name="sobre"
            className="form-control"
            rows={3}
            value={form.sobre}
            onChange={handleChange}
            disabled={!editando}
          />
        </div>

        {editando ? (
          <div className="d-flex gap-2 mb-3">
            <button
              className="btn btn-success w-100 rounded-pill"
              onClick={handleSalvar}
            >
              Salvar
            </button>

            <button
              className="btn btn-outline-secondary w-100 rounded-pill"
              onClick={() => setEditando(false)}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <button
            className="btn btn-outline-success w-100 rounded-pill mb-3"
            onClick={() => setEditando(true)}
          >
            ✏️ Editar dados
          </button>
        )}

        <button
          className="btn btn-outline-danger w-100 rounded-pill"
          onClick={handleLogout}
        >
          Sair da conta
        </button>
      </div>
    </div>
  );
}

export default Perfil;