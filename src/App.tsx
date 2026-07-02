import './App.css'
import Navbar from "./componentes/navbar/NavBar";
import Footer from "./componentes/footer/footer";
import CallToAction from "./componentes/CallToAction/CalltoAction";
import Servicos from "./componentes/Servicos/Servicos";


function App() {
  return (
  <>
      <Navbar />
    

      <main className="container mt-5">
        <div className="row align-items-center g-5">

          {/* Texto à esquerda */}
          <div className="col-md-6">
            <span
              className="badge rounded-pill mb-3 px-3 py-2"
              style={{ backgroundColor: "#f0f0e8", color: "#555", fontSize: 13 }}
            >
              ✦ Inclusão produtiva e cidadã
            </span>

            <h1 className="fw-bold mb-3" style={{ fontSize: "2.4rem", lineHeight: 1.2, color: "#0a0a0a" }}>
              Caminhos reais para <span className="text-success">transformar</span> a sua história.
            </h1>

            <p className="text-muted mb-4" style={{ maxWidth: 460 }}>
              Aprenda, encontre oportunidades, conecte-se com mentores e acesse
              crédito — tudo em uma plataforma pensada para quem quer crescer com autonomia.
            </p>

            <div className="d-flex gap-3 mb-5">
              <a href="#" className="btn btn-primary rounded-pill px-5 py-2">
                Criar minha conta
              </a>
              <a href="#" className="btn btn-outline-secondary rounded-pill px-4 py-2">
                Ver trilhas
              </a>
            </div>

            <div className="d-flex gap-5 border-top pt-4">
              <div>
                <h4 className="fw-bold mb-0">12k+</h4>
                <p className="text-muted mb-0" style={{ fontSize: 13 }}>Pessoas impactadas</p>
              </div>
              <div>
                <h4 className="fw-bold mb-0 text-primary">320</h4>
                <p className="text-muted mb-0" style={{ fontSize: 13 }}>Trilhas concluídas</p>
              </div>
              <div>
                <h4 className="fw-bold mb-0">85%</h4>
                <p className="text-muted mb-0" style={{ fontSize: 13 }}>Inserção em oportunidades</p>
              </div>
            </div>
          </div>

          {/* Imagem à direita com card flutuante */}
          <div className="col-md-6 position-relative">
            <img
              src="/hero.jpg"
              alt="Grupo sorrindo"
              className="rounded-4 w-100"
              style={{ objectFit: "cover", height: 420 }}
            />
          </div>
        </div>
      </main>
      
      <div className="container mt-5">
  <h2 className="fw-bold mb-2" style={{ color: "#0a0a0a" }}>Tudo o que você precisa para avançar</h2>
  <p className="text-muted" style={{ maxWidth: 500 }}>
    Uma rede integrada de aprendizagem, trabalho e empreendedorismo, desenhada
    para gerar impacto real na vida das pessoas.
  </p>
</div>
      
      <Servicos />
      <CallToAction />
      <Footer />

    </>
  );
}

export default App;