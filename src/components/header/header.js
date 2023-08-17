import React from 'react'
import './style.css'



export default function Header() {
  return (
    <header id="topo">
      <div className="barra-de-navegacao limitar-secao">
        <img src='/assets/logo.png' alt="imagem" />

        <nav className="opcoes-do-menu">
          <a href="#produtos">Produtos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contatos</a>
        </nav>
      </div>
    </header>
  )
}
