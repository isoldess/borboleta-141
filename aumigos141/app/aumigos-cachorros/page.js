import Link from "next/link";
import MapaBusca from "../MapaBusca";
export const metadata = {
  title: "Cachorros - Busca por Aumigos",
};

export const viewport = "width=device-width, initial-scale=1.0";

export default function Cachorros() {
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
            src="https://www.portaldodog.com.br/wp-content/uploads/2022/11/cute-spitz-scaled.jpg"
            alt="Cachorro Felix"
          />
          <div className="descricao">
            <h2>Felix, desaparecido em 20/07/20XX</h2>
            <p>
              Cachorro da cor caramelo/dourado
              <br />
              5 anos
              <br />
              7 kg
              <br />
              Foi visto por último no KM 18, Osasco-SP
              <br />
              Número para contato: (11) 656-312
            </p>
          </div>
        </article>
        <article className="procurados">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznkfqfOBoDTuq85zgEnInxKmcb8qdXhW8Pw&s"
            alt="Pinscher nada hostil"
          />
          <div className="descricao">
            <h2>Francisco, desaparecido em 12/06/20XX</h2>
            <p>
              Cachorro preto e marrom
              <br />
              10 anos
              <br />
              4 kg
              <br />
              Foi visto por último no Jardim Adalgisa, Osasco-SP
              <br />
              Número para contato: (11) 599-266
            </p>
          </div>
        </article>
        <article className="procurados">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxW1VYceivVW3OkJ5bCDpmIXcPdN7kpnQYoQ&s"
            alt="Cachorro branco"
          />
          <div className="descricao">
            <h2>Dante, desaparecido em 30/11/20XX</h2>
            <p>
              Cachorro branco e marrom
              <br />
              1 ano
              <br />
              2 kg
              <br />
              Foi visto por último na Vila Campesina, Osasco-SP
              <br />
              Número para contato: (11) 551-902
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
