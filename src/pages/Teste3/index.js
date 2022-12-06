import Header from "../../components/Header";

const Teste3 = () => {
    return (
        <div>
            <Header
                title="Teste 3"
            />

            <h4 className="Test-statement">
                Fale resumidamente a sua mais relevante experiência com
                desenvolvimento de software, descrevendo um pouco sobre o
                software desenvolvido e destacando as tecnologias e
                linguagens empregadas.
            </h4>
            <p className="Resume">
                Minha experiência mais relevante foi pelo curso
                <a
                    href="https://www.udemy.com/course/dev-fullstack/"
                    target="_blank"
                    rel="noopener noreferrer">
                    "Projeto Completo NodeJS, React, React Native, TypeScript"</a>
                do Matheus Fraga / Sujeito Programador. Nesse curso é feito vários projetos,
                e um deles, o "Sujeito Pizza" ensina sobre controlar acesso às telas, em que a
                pessoa cadastrada tem acesso a todas, e a visitante não. Era um sistema de pizzaria,
                onde o garçom adicionava os itens pelo aplicativo e o atendente de balcão veria esses
                itens e finalizaria o pedido.
                <br />
                Foi utilizado no Front-end (site): NextJS / ReactJS, TypeScript, SCSS / CSS, HTML.
                <br />
                TypeScript, Axios, Express, Prisma, PostreSQL, Postman no Back-end; React Native / Expo, TypeScript, Axios, Navigation Routes, no Mobile.
                <br />
                <br />
                Outro projeto também desse curso, nomeado "Prime Flix", é um site pra visualizar sinopse de filmes em cartaz ou
                lançados, abrir uma aba do navegador com a lista de trailers no YouTube, e favoritar os filmes que
                gosta.
                <br />
                Utilizado: ReactJS, TMDB API, Axios, React-toastify (lib para personalizar alertas), JavaScript, CSS, HTML.
                <br />
            </p>
        </div>

    )
}

export default Teste3;