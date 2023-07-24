import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Timeline from '../components/Timeline'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Sobre | dalee.dev</title>
            <meta name="description" content="Somos uma equipe multidisciplinar, de programadores, engenheiros e designers independentes, que oferece uma força de trabalho qualificada" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Sobre</h1>
                    </header>
                    <p>Somos uma equipe multidisciplinar, de programadores, engenheiros e designers independentes, que oferece uma força de trabalho qualificada. Valorizamos os novos desafios e entendemos a necessidade de continuar melhorando nossas competências, transformando o cenário tecnológico com simplicidade e agilidade, reduzindo custos sem diminuir a qualidade e entregando software feito sob medida.</p>
                    <p>Você tem um desafio? Temos a solução!</p>

                </div>
            </section>
            <section id="two">
                <div className="inner">
                    <h1>Processo</h1>
                    <p>Com base em Sprints, escolhemos o melhor em gerenciamento e desenvolvimento de projetos comprovados metodologias; enxuto e ágil, o que permite que nosso processo de desenvolvimento de produto seja flexível e orientada para resultados. Normalmente duas semanas de duração e com os principais resultados definidos no início, você pode pensar em um sprint como uma unidade de trabalho focada. Isso constrói nosso projetos passo a passo, com sprints focados em nossos ssuários, a configuração técnica, wireframes e protótipos, concepção criativa, design e desenvolvimento. Nós construímos produtos em vários níveis de estabilidade, segurança e escalabilidade com base em seus vida útil e uso esperado. Em geral, eles cairão em uma das seguintes categorias.</p>
                    <Timeline />
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic