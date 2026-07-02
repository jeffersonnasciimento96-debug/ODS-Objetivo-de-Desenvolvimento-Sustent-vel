function CalltoAction() {
  return (
    <div className="container my-5">
      <div
        className="d-flex justify-content-between align-items-center p-5 rounded-4"
        style={{ background: "linear-gradient(135deg, #1a7a5e, #2d9e7e)" }}
      >
        <div className="text-white me-4">
          <h2 className="fw-bold mb-2">Pronto para dar o próximo passo?</h2>
          <p className="mb-0" style={{ maxWidth: 500 }}>
            Crie seu perfil gratuitamente e descubra trilhas, oportunidades e mentores feitos para o seu momento.
          </p>
        </div>

        <a
          href="#"
          className="btn bg-white text-primary fw-semibold rounded-pill px-4 py-2 text-nowrap"
        >
          Criar minha conta →
        </a>
      </div>
    </div>
  );
}

export default CalltoAction;