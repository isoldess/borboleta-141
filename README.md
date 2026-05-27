# Busca por Aumigos

#   Ideação
A proposta inicial é criar um site para anunciar o desaparecimento de animais na região de Osasco,sejam cachorros,gatos ou qualquer tipo de animal, o site inclui todos os animais de estimação.

#   JavaScript

#    Imports e metadados
    Link (next/link) – componente de navegação do Next.js para rotas internas sem recarregamento de página.
    MapaBusca – componente local importado de ./MapaBusca, responsável por renderizar o mapa interativo (Leaflet).
    
    metadata – objeto exportado com o título da aba do navegador: "Busca por Aumigos".
    viewport – string exportada que define a meta viewport para dispositivos móveis.
    styles – módulo CSS importado de ./page.module.css (não utilizado explicitamente nas classes do JSX retornado).

    #contato – formulário HTML com campos Nome, E-mail, Telefone, radio buttons (Cachorro / Gato / Variados) e botão de envio.
    .mapa-wrapper (footer) – renderiza o componente <MapaBusca /> abaixo do formulário.
#    CSS

    .procurados – display flex (horizontal), colocando imagem e descrição lado a lado.
    .procurados img – dimensões fixas de 20×30 vh.
    .descricao – margem negativa de -3vh no topo para alinhar visualmente com a imagem.
    #animais img – margens laterais e inferior para espaçamento entre os cards.
    #cabecalho – fundo bisque, padding-left de 2vh.
    #logo – display flex com align-content: flex-start; largura original de 100vh (corrigida para 100% na versão responsiva).

#  Estrutura HTML

    A <section id="contato-wrapper"> está aninhada dentro de <section id="animais">, o que cria dependência de posicionamento CSS para separar visualmente os dois blocos.
    O componente <MapaBusca /> é importado localmente e espera ser compatível com Leaflet no lado cliente
    <main> – conteúdo principal da página.
    <section> – agrupamentos temáticos (cabeçalho, animais, contato).
    <header> – área de identidade visual com logo e título.
    <nav> – barra de navegação entre páginas.
    <article> – cada animal desaparecido é tratado como conteúdo independente.
    <footer> – rodapé da seção de contato contendo o mapa.
    <form> – formulário de contato com campos semânticos (type="email", type="tel").

#  API

  O Leaflet é a principal biblioteca JavaScript de código aberto para mapas interativos otimizados para dispositivos móveis. Com apenas cerca de 42 KB de código JavaScript , ele possui todos os recursos de mapeamento que a maioria dos desenvolvedores precisa.

  O Leaflet foi projetado com simplicidade , desempenho e usabilidade em mente. Ele funciona de forma eficiente em todas as principais plataformas de desktop e dispositivos móveis, pode ser estendido com diversos plugins , possui uma API bonita, fácil de usar e bem documentada , além de um código-fonte simples e legível,  para o qual é um prazer contribuir .

  A API escolhida foi baseando se na nescessidade de localizar melhor e não ter que utilzar de mais uma aplicação,facilitando o uso do site e maior conforto ao pesquisar os locais de desaparecimento dos animais
  

