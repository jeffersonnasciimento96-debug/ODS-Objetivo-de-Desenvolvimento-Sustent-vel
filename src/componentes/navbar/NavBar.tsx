import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [hoverEntrar, setHoverEntrar] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
      <div className="container">

        {/* Logo com ícone */}
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold text-success" href="#">
          <div
            style={{
              width: 36, height: 36, borderRadius: "50%",
              backgroundColor: "#198754",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}
          >
            <span style={{ color: "white", fontSize: 18 }}>✦</span>
          </div>
          ODS Plataforma
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">

          {/* Links no centro */}
          <ul className="navbar-nav mx-auto gap-3">
            <li className="nav-item">
              <a className="nav-link text-dark" href="/">Início</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/sobre">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="servicos">Serviços</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Contato</a>
            </li>
          </ul>

          {/* Botões à direita */}
          <div className="d-flex gap-2">
            <a
              onClick={() => navigate('/login')}
              className="btn rounded-pill px-4"
              onMouseEnter={() => setHoverEntrar(true)}
              onMouseLeave={() => setHoverEntrar(false)}
              style={{
                border: "1px solid #6b7280",
                backgroundColor: hoverEntrar ? "#0e632d" : "transparent",
                color: hoverEntrar ? "white" : "inherit",
                transition: "all 0.2s ease"
              }}
            >
              Entrar
            
            </a>
            <button
             onClick={() => navigate('/cadastrar')} className="btn btn-primary rounded-pill px-4"
             >
              Cadastrar
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;