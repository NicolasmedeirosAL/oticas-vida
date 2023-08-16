import './style.css'

export default function SecaoProdutos() {
  return (
    <section id="produtos" className='secao'>
      <div className="caixa-de-produtos limitar-secao">
        <div className="paragrafos">
          <h2>Nossos Produtos</h2>
          <p>
            Trabalhamos com óculos de grau, óculos de sol, lentes transition nos
            modelos másculinos, femininos e infantíl.
          </p>
          <p>
            Todos os nossos preços são acessíveis e contam com a melhor
            qualidade do mercado.
          </p>
        </div>
        <div className="caixa-de-cards-produtos">
          <div className="cards">
            <h4>Óculos de grau</h4>
            <img src="./assets/oculos01.png" alt="Óculos de grau" />
            <p>R$ 500,00</p>
          </div>
          <div className="cards">
            <h4>Óculos transition</h4>
            <img src="./assets/oculos02.png" alt="Óculos de transition" />
            <p>R$ 750,00</p>
          </div>
          <div className="cards">
            <h4>Óculos de sol</h4>
            <img src="./assets/oculos03.png" alt="Óculos de sol" />
            <p>R$ 700,00</p>
          </div>
          <div className="cards">
            <h4>Óculos infantíl</h4>
            <img src="./assets/oculos04.png" alt="Óculos de infantíl" />
            <p>R$ 500,00</p>
          </div>
        </div>
        <p>Todos os nosso produtos incluem:</p>
        <ul className="lista-da-secao-produto">
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  )
}
