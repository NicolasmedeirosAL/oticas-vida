import './style.css'

export default function SecaoSobre() {
  return(
    <section id="sobre" className='secao'>
      <div className="caixa-sobre limitar-secao">
      <h2>Quem somos nós</h2>
      <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas Vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo</p>

      <div className="caixa-de-cards-sobre">
        <div className="cartao-de-imagem">
          <img src="./assets/loja.png" alt='Pratelheira de remedios'/>
        </div>
        <div className="cartao-de-texto">
          <h4>Nossas filiais</h4>
          <p>Hoje temos mais de 20 filiais pelo Brasil e na América.</p>
        </div>
        <div className="cartao-de-texto">
          <h4>Atendimento flexivel</h4>
          <p>Nossa equipe possui treinamento adequado para te atender</p>
        </div>
        <div className="cartao-de-imagem">
          <img src='./assets/atendimento.png' alt='atendente recepcionando cliente'/>
        </div>
      </div>
      </div>
    </section>
  )
}