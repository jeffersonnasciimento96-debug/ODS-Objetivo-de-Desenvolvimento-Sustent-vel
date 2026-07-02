function Footer() {
  return (
    <footer className="border-top py-3 mt-5" style={{ backgroundColor: "#f8f9fa"}}>
      <div className="container d-flex justify-content-between align-items-center">

        <p className="mb-0 text-muted">
          © 2026 <span className="text-primary">Plataforma ODS</span>. Construído com{" "}
          <span className="text-primary">propósito</span>.
        </p>

        <div className="d-flex gap-3">
          <a href="#" className="text-primary text-decoration-none">Privacidade</a>
          <a href="#" className="text-primary text-decoration-none">Termos</a>
          <a href="#" className="text-primary text-decoration-none">Contato</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;