import { useState } from "react";
function Hero() {
  const [hoverTrilhas, setHoverTrilhas] = useState(false)
return (
    <div className="container my-5">

      {/* Botões */}
      <div className="d-flex gap-3 mb-5">
        <a href="#" className="btn btn-primary rounded-pill px-5 py-2">
          Criar minha conta
        </a>

        <a
          href="#"
          className="btn rounded-pill px-4 py-2"
          onMouseEnter={() => setHoverTrilhas(true)}
          onMouseLeave={() => setHoverTrilhas(false)}
          style={{
            border: "1px solid #6b7280",
            backgroundColor: hoverTrilhas ? "#117536" : "transparent",
            color: hoverTrilhas ? "white" : "inherit",
            transition: "all 0.2s ease",
          }}
        >
          Ver trilhas
        </a>
      </div>

      {/* Estatísticas */}
      <div className="d-flex gap-5 border-top pt-4">
        <div>
          <h3 className="fw-bold mb-0">12k+</h3>
          <p className="text-muted mb-0" style={{ fontSize: 14 }}>Pessoas impactadas</p>
        </div>
        <div>
          <h3 className="fw-bold mb-0 text-primary">320</h3>
          <p className="text-muted mb-0" style={{ fontSize: 14 }}>Trilhas concluídas</p>
        </div>
        <div>
          <h3 className="fw-bold mb-0">85%</h3>
          <p className="text-muted mb-0" style={{ fontSize: 14 }}>Inserção em oportunidades</p>
        </div>
      </div>

    </div>
  );
}

export default Hero;