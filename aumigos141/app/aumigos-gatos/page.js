import Link from "next/link";
import MapaBusca from "../MapaBusca";
export const metadata = {
  title: "Gatos - Busca por Aumigos",
};

export default function Gatos() {
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
        <footer id="paginas">
          <Link href="/">Home</Link>
          <Link href="/aumigos-cachorros">Cachorros</Link>
          <Link href="/aumigos-gatos">Gatos</Link>
          <Link href="/aumigos-variados">Variados</Link>
          <Link href="/aumigos-sobrenos">Sobre Nós</Link>
        </footer>
      </section>
      <section id="animais">
        <article className="procurados">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20221102/pngtree-cat-in-window-profile-looking-cat-photo-image_15163836.jpg"
            alt="Gato Joaquim"
          />
          <div className="descricao">
            <h2>Joaquim, desaparecido em 20/02/20XX</h2>
            <p>
              Gato de pelagem escura
              <br />
              4 Anos
              <br />
              22 kg
              <br />
              Foi visto por último no Jardim das Flores, Osasco-SP
              <br />
              Número para contato: (11) 636-245
            </p>
          </div>
        </article>
        <article className="procurados">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSq8RFPVXwz_Wg_qWxKQM7Oi976smwxKdWw&s"
            alt="Gato tricolor"
          />
          <div className="descricao">
            <h2>Leonard, desaparecido em 05/06/20XX</h2>
            <p>
              Gato tricolor
              <br />
              12 anos
              <br />
              10 kg
              <br />
              Foi visto por último no Jardim Adalgisa, Osasco-SP
              <br />
              Número para contato: (11) 559-401
            </p>
          </div>
        </article>
        <article className="procurados">
          <img
            src="https://i.pinimg.com/474x/e1/69/96/e16996de8f95ffad7527687f1c2b6bfa.jpg"
            alt="Gato cinza"
          />
          <div className="descricao">
            <h2>Jaime, desaparecido em 3/12/20XX</h2>
            <p>
              Gato cinza
              <br />
              7 anos
              <br />
              4kg
              <br />
              Foi visto por último na Estação Osasco, Osasco-SP
              <br />
              Número para contato: (11) 334-687
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
