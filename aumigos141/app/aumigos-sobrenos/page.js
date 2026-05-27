import Link from "next/link";

export const metadata = {
  title: "Sobre Nós - Busca por Aumigos",
};

export default function SobreNos() {
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
      <section id="sobre">
        <h2>Sobre Nós</h2>
        <p>
          Busca por Aumigos ajuda a reunir famílias e seus animais perdidos.
          Aqui você encontra informações de bichos desaparecidos e um jeito fácil
          de entrar em contato com quem pode ajudar.
        </p>
        <p>
          Nosso objetivo é conectar pessoas, animais e comunidades para que a
          busca seja rápida e segura.
        </p>
      </section>
    </main>
  );
}
