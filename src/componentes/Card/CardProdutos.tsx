interface CardProdutoProps {
  imagem: string;
  titulo: string;
  descricao: string;
}

function CardProduto({
  imagem,
  titulo,
  descricao
}: CardProdutoProps) {

  return (
    <div className="card shadow" style={{ width: "18rem" }}>

      <img
        src={imagem}
        className="card-img-top"
        alt={titulo}
        style={{ height: "200px", objectFit: "cover", objectPosition: "top" }}
      />

      <div className="card-body">

        <h5 className="card-title">
          {titulo}
        </h5>

        <p className="card-text">
          {descricao}
        </p>

        <button className="btn btn-primary">
          Ver mais
        </button>

      </div>

    </div>
  );
}

export default CardProduto;