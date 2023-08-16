import './style.css'

export default function SecaoContato() {
  return(
  <section className='secao' id="contato">
    <div className="caixa-de-contatos limitar-secao">
      <h2>Fale Conosco</h2>
      <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
      <div className="contatos">
        <div className="cartao-de-contato">
        <h3>Contatos:</h3>
        <figure>
          <img src='./assets/local.png' alt=" local: "/>
          <figcaption>Nova iguaçu, RJ</figcaption>
        </figure>
        <figure>
          <img src='./assets/telefone.png' alt=" telefone: "/>
          <figcaption>(21)99999-9999</figcaption>
        </figure>
        <figure>
          <img src='./assets/email.png' alt="email: "/>
          <figcaption>contato@oticavida.com</figcaption>
        </figure>
        </div>
        <div className="cartao-de-contato">
        <h3>Nossas Redes Sociais:</h3>
        <figure>
          <img src='./assets/fb.png' alt=" facebook: "/>
          <figcaption>/OticaVida</figcaption>
        </figure>
        <figure>
          <img src='./assets/ig.png' alt=" instagram: "/>
          <figcaption>@oticavidarj</figcaption>
        </figure>
        <figure>
          <img src='./assets/tt.png' alt="twitter: "/>
          <figcaption>@oticavidarj</figcaption>
        </figure>
        </div>

      </div>
    </div>
  </section>
  )
}
