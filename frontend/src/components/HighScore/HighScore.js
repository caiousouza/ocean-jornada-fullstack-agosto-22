import "./HighScore.css";

function HighScore(props) {
  
  fetch("http://localhost:3333/pontuacoes").then(console.log);
  
  return (
    <div className="HighScore">
      <div>
        Você fez <b>{props.pontos}</b> pontos!
      </div>

      <div>
        <h1>HighScore</h1>
        <div>Paulo - 90 pontos</div>
        <div>João - 50 pontos</div>
        <div>Ana - 32 pontos</div>
      </div>
    
      <div>
        <h1>Registre sua pontuação!</h1>
        <form>
          <input type="text" placeholder="Digite o seu nome..." />
          <input type="submit" value="Enviar" />
          </form>
       </div>
     </div>
  );
}

export default HighScore;