import Link from "next/link";
import MapaBusca from "../MapaBusca";
export const metadata = {
  title: "Variados - Busca por Aumigos",
  description: "Criado para achar seu bichinho perdido",
};

export default function Variados() {
  return (
    <main>
      <section id="cabecalho">
        <header id="logo">
          <h1>Busca por Aumigos</h1>
          <img
            src="https://png.pngtree.com/png-clipart/20250128/original/pngtree-a-cat-with-hat-on-its-head-and-magnifying-glass-transparent-png-image_19596909.png"
            alt="Cat with magnifying glass"
          />
          <br />
        </header>
        </section>
        <nav id="paginas">
          <Link href="/">Home</Link>
          <Link href="/aumigos-cachorros">Cachorros</Link>
          <Link href="/aumigos-gatos">Gatos</Link>
          <Link href="/aumigos-variados">Variados</Link>
          <Link href="/aumigos-sobrenos">Sobre Nós</Link>
        </nav>
      <section id="animais">
        <article className="procurados">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/2007-10-28_AfricanGrayParrot_Meru.jpg/330px-2007-10-28_AfricanGrayParrot_Meru.jpg"
            alt="Papagaio cinza"
          />
          <div className="descricao">
            <h2>Nigel, Desaparecido em 21/11/20XX</h2>
            <p>
              Papagaio cinza
              <br />
              10 Anos
              <br />
              2 kg
              <br />
              Foi visto por último no Jardim Santo Antônio, Osasco-SP
              <br />
              Número para contato: (11) 526-266
            </p>
          </div>
        </article>
        <article className="procurados">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwwhSLK2N_-X8zHujj12zInQ1rZvPlkbcTg&s"
            alt="Porquinho da india"
          />
          <div className="descricao">
            <h2>Jorge, Desaparecido em 30/08/20XX</h2>
            <p>
              Porquinho da Índia tricolor
              <br />
              1 ano
              <br />
              400 g
              <br />
              Foi visto por último no Parque da Fito, Osasco-SP
              <br />
              Número para contato: (11) 215-266
            </p>
          </div>
        </article>
        <article className="procurados">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3_xkWNNKxvqxOmmZUCk3GibdMOPe6idgqA&s"
            alt="Rato sem pelagem"
          />
          <div className="descricao">
            <h2>Chester, Desaparecido em 15/02/20XX</h2>
            <p>
              Rato sem pelagem
              <br />
              1,5 anos
              <br />
              900 g
              <br />
              Foi visto por último no Shopping Plaza, Osasco-SP
              <br />
              Número para contato: (11) 666-777
            </p>
          </div>
        </article>
      </section>
      <section id="contato-wrapper">
              <section id="contato">
              <form>
                <h2>Entre em contato conosco:</h2>
                Nome: <input type="text" name="Nome:" required />
                <br />
                E-mail: <input type="email" name="email" required />
                Telefone: <input type="tel" name="telephone" required />
                <br />
                Cachorro: <input type="radio" name="tipo" />
                Gato: <input type="radio" name="tipo" />
                Variados: <input type="radio" name="tipo" />
                <br />
                <button type="submit">Enviar</button>
              </form>
            </section>
            <footer className="mapa-wrapper">
              <h2> Veja onde seu animal pode estar:<br></br></h2>
                      <MapaBusca  />
            </footer>
            </section>
    </main>
  );
}
