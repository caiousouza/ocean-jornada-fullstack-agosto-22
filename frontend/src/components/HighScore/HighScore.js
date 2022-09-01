import { useEffect, useState } from "react";
import "./HighScore.css";

function HighScore(props) {

  const [itens, setItens] = useState(undefined);

  useEffect(function () {

    async function carregarPontuacoes() {

      const response = await fetch("http://localhost:3333/pontuacoes");

      const body = await response.json();

      setItens(body);
    }

    carregarPontuacoes();
  }, []);

  console.log(itens);

  const itensEstaoCarregando = itens === undefined;

  async function salvarPontuacao(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;

    const response = await fetch("http://localhost:3333/pontuacoes", {
      method: "POST",
      body: JSON.stringify({ nome: name, pontos: props.pontos }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const body = await response.json();

    console.log("Pontuação salva com sucesso:", body);
  }


  return (
    <div className="HighScore">
      <div>
        Você fez <b>{props.pontos}</b> pontos!
      </div>

      <div>
        <h1>HighScore</h1>
        {itensEstaoCarregando ? (
          <div>Carregando...</div>
        ) : (
          <div>
            {itens.map((item, index) => (
              <div key={`score_${index}`}>
                {item.nome} - {item.pontos}
              </div>
            ))}
          </div>
        )}
      </div>
    
      <div>
        <h1>Registre sua pontuação!</h1>
        <form onSubmit={salvarPontuacao}>
          <input type="text" name="name" placeholder="Digite o seu nome..." />
          <input type="submit" value="Enviar" />
          </form>
       </div>
     </div>
  );
}

export default HighScore;