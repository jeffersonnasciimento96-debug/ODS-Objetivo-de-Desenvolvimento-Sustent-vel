import { useState } from "react";

function Sobre() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    { icone: "🎯", titulo: "Missão", descricao: "Democratizar o acesso a oportunidades de aprendizagem, trabalho e crédito para pessoas em situação de vulnerabilidade social." },
    { icone: "🔭", titulo: "Visão", descricao: "Ser a principal plataforma de inclusão produtiva e cidadã do Brasil, gerando impacto real na vida de milhões de pessoas." },
    { icone: "💚", titulo: "Valores", descricao: "Autonomia, inclusão, transparência e colaboração. Acreditamos no poder das comunidades para transformar suas próprias histórias." },
  ];

  return (
    <div className="container my-5">

      {/* Botão voltar */}
      <div className="mb-4">
        <a href="/" className="btn rounded-pill px-4 py-2" style={{ border: "1px solid #000000", color: "#ffffff", textDecoration: "none", backgroundColor: "#0d6efd" }}>
          ← Voltar ao início
        </a>
      </div>

      {/* Hero */}
      <div className="row align-items-center g-5 mb-5">
        <div className="col-md-6">
          <span
            className="badge rounded-pill mb-3 px-3 py-2"
            style={{ backgroundColor: "#f0f0e8", color: "#555", fontSize: 13 }}
          >
            ✦ Quem somos
          </span>
          <h1 className="fw-bold mb-3" style={{ fontSize: "2.2rem", lineHeight: 1.2, color: "#0a0a0a" }}>
            Uma plataforma feita para <span className="text-success">transformar vidas</span>
          </h1>
          <p style={{ color: "#4b5563", lineHeight: 1.8 }}>
            A ODS Plataforma nasceu com o propósito de conectar pessoas a oportunidades reais
            de aprendizagem, trabalho e empreendedorismo. Acreditamos que o acesso à educação
            e ao crédito é um direito de todos.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="/hero.jpg"
            alt="Sobre nós"
            className="rounded-4 w-100"
            style={{ objectFit: "cover", height: 340 }}
          />
        </div>
      </div>

      {/* Missão, Visão, Valores */}
      <div className="row g-4 mb-5">
        {cards.map((card, i) => (
          <div className="col-md-4" key={i}>
            <div className="p-4 rounded-4 h-100" style={{ border: "1px solid #e5e4e7" }}>
              <div
                className="mb-3 d-inline-flex align-items-center justify-content-center rounded-3"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  width: 48, height: 48, fontSize: 22,
                  backgroundColor: hoveredCard === i ? "#22c55e" : "#dcfce7",
                  transition: "background-color 0.2s ease",
                  cursor: "pointer",
                }}
              >
                {card.icone}
              </div>
              <h5 className="fw-bold mb-2" style={{ color: "#0a0a0a" }}>{card.titulo}</h5>
              <p style={{ fontSize: 14, color: "#6b7280" }}>{card.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Números */}
      <div className="rounded-4 p-5 text-center" style={{ backgroundColor: "#f0fdf4" }}>
        <h2 className="fw-bold mb-4" style={{ color: "#0a0a0a" }}>Nosso impacto em números</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <h3 className="fw-bold text-success">12k+</h3>
            <p style={{ fontSize: 14, color: "#6b7280" }}>Pessoas impactadas</p>
          </div>
          <div className="col-md-3">
            <h3 className="fw-bold text-success">320</h3>
            <p style={{ fontSize: 14, color: "#6b7280" }}>Trilhas concluídas</p>
          </div>
          <div className="col-md-3">
            <h3 className="fw-bold text-success">85%</h3>
            <p style={{ fontSize: 14, color: "#6b7280" }}>Inserção em oportunidades</p>
          </div>
          <div className="col-md-3">
            <h3 className="fw-bold text-success">50+</h3>
            <p style={{ fontSize: 14, color: "#6b7280" }}>Parceiros</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Sobre;