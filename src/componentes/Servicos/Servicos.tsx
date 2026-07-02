import { useState } from "react";
function Servicos() {
  const items = [
    { icone: "🎓", titulo: "Trilhas de capacitação", descricao: "Cursos modulares com certificado validado, disponíveis também offline." },
    { icone: "🏛️", titulo: "Oportunidades", descricao: "Vagas de emprego, estágio, aprendizagem e projetos freelance." },
    { icone: "👥", titulo: "Mentoria", descricao: "Conexão com mentores por área temática para acelerar sua jornada." },
    { icone: "💳", titulo: "Linhas de crédito", descricao: "Microcrédito e financiamento com condições adequadas ao seu perfil." },
    { icone: "🔧", titulo: "Serviços", descricao: "Encontre, contrate e avalie prestadores da rede com confiança." },
    { icone: "📄", titulo: "Guia MEI", descricao: "Passo a passo para formalizar e gerenciar seu microempreendimento." },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="container my-5">
      <div className="row g-4">
        {items.map((item, i) => (
          <div className="col-md-4" key={i}>
            <div 
              className="p-4 rounded-4 h-100"
              style={{
                border: "1px solid #e5e7eb",
                backgroundColor: "#ffffff",
                color: "inherit",
              }}
            >
              <div
                className="mb-4 d-inline-flex align-items-center justify-content-center rounded-3"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  width: 48, height: 48, fontSize: 22,
                  backgroundColor: hoveredIndex === i ? "#0d4907" : "#e8f0fe",
                  transition: "background-color 0.2s ease",
                  cursor: "pointer",
                
                }}
              >
                {item.icone}
              </div>
              <h5 className="fw-semibold mb-2">{item.titulo}</h5>
              <p className="mb-0" style={{ fontSize: 14, opacity: 0.85 }}>{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicos;