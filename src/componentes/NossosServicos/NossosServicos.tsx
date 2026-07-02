import { useState } from "react";

function NossosServicos() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const servicos = [
    {
      icone: "📚",
      titulo: "Capacitação Profissional",
      descricao: "Cursos e treinamentos gratuitos para desenvolver habilidades técnicas e comportamentais, aumentando suas chances no mercado de trabalho.",
      tag: "Educação",
      detalhes: ["Cursos online e presenciais", "Certificado reconhecido", "Disponível offline"],
    },
    {
      icone: "💼",
      titulo: "Vagas de Emprego",
      descricao: "Conectamos candidatos a empresas comprometidas com trabalho digno, inclusivo e com direitos garantidos, alinhado ao ODS 8.",
      tag: "Trabalho Decente",
      detalhes: ["Vagas formais e informais", "Filtro por região e área", "Candidatura simplificada"],
    },
    {
      icone: "🚀",
      titulo: "Empreendedorismo",
      descricao: "Apoio completo para quem quer abrir um negócio: do plano de negócios ao acesso a microcrédito e formalização como MEI.",
      tag: "Crescimento Econômico",
      detalhes: ["Guia MEI passo a passo", "Acesso a microcrédito", "Mentoria para negócios"],
    },
    {
      icone: "🎯",
      titulo: "Orientação Profissional",
      descricao: "Mentorias individuais e em grupo para jovens e profissionais planejarem suas carreiras com foco em crescimento sustentável.",
      tag: "Mentoria",
      detalhes: ["Mentores especializados", "Plano de carreira", "Sessões online e gratuitas"],
    },
    {
      icone: "🤝",
      titulo: "Inclusão Produtiva",
      descricao: "Programas voltados a populações vulneráveis para garantir acesso igualitário ao mercado de trabalho e à renda.",
      tag: "Inclusão",
      detalhes: ["Foco em vulnerabilidade social", "Parceria com ONGs", "Suporte contínuo"],
    },
    {
      icone: "📊",
      titulo: "Crédito e Finanças",
      descricao: "Acesso a linhas de microcrédito, educação financeira e ferramentas para organizar e crescer sua renda com segurança.",
      tag: "Finanças",
      detalhes: ["Microcrédito acessível", "Educação financeira", "Simuladores de crédito"],
    },
  ];

  return (
    <section style={{ backgroundColor: "#f3f4f6" }} className="py-5">
      <div className="container">

         {/* Botão voltar */}
  <div className="mb-4">
    <a href="/" className="btn rounded-pill px-4 py-2" style={{ backgroundColor: "#0d6efd", color: "#ffffff", border: "none", textDecoration: "none" }}>
      ← Voltar ao início
    </a>
  </div>

        {/* Cabeçalho */}
        <div className="text-center mb-5">
          <span
            className="badge rounded-pill px-3 py-2 mb-3"
            style={{ backgroundColor: "#dcfce7", color: "#166534", fontSize: 13 }}
          >
            ✦ ODS — Trabalho Decente e Crescimento Econômico
          </span>
          <h2 className="fw-bold" style={{ color: "#0a0a0a", fontSize: "2rem" }}>
            Nossos Serviços
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: 520, fontSize: 15 }}>
            Uma plataforma completa para conectar pessoas a oportunidades reais de
            trabalho, renda e crescimento econômico sustentável.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {servicos.map((s, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div
                className="p-4 rounded-4 h-100"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  border: hoveredCard === i ? "1.5px solid #22c55e" : "1px solid #e5e7eb",
                  backgroundColor: "#ffffff",
                  transition: "all 0.2s ease",
                  boxShadow: hoveredCard === i ? "0 8px 24px rgba(34,197,94,0.12)" : "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                {/* Ícone */}
                <div
                  className="mb-3 d-inline-flex align-items-center justify-content-center rounded-3"
                  style={{
                    width: 52, height: 52, fontSize: 24,
                    backgroundColor: hoveredCard === i ? "#22c55e" : "#dcfce7",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  {s.icone}
                </div>

                {/* Tag */}
                <div className="mb-2">
                  <span
                    className="badge rounded-pill px-2 py-1"
                    style={{ backgroundColor: "#f0fdf4", color: "#166534", fontSize: 11 }}
                  >
                    {s.tag}
                  </span>
                </div>

                <h5 className="fw-bold mb-2" style={{ color: "#0a0a0a" }}>{s.titulo}</h5>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{s.descricao}</p>

                {/* Detalhes */}
                <ul className="list-unstyled mt-3 mb-0">
                  {s.detalhes.map((d, j) => (
                    <li key={j} style={{ fontSize: 13, color: "#4b5563" }}>
                      <span className="text-success me-2">✓</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default NossosServicos;