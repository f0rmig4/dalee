import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

import banner from '../../assets/images/cases/associacao/banner.jpeg'
import pic1 from '../../assets/images/cases/associacao/1.png'
import pic2 from '../../assets/images/cases/associacao/2.png'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Associação de Circo - dalee.dev</title>
            <meta name="description" content="Site criado para a Associação de Circo do Rio Grande do Sul, conta com um sistema de gestão de conteúdo personalizado, com o foco no associado, onde cada associado pode gerenciar seu perfil, tendo assim um mini currículo dentro da plataforma." />
        </Helmet>

        <section id="banner" className="style2" style={{ backgroundImage: `url(${banner})` }}>
            <div className="inner">
                <header className="major">
                    <h1>Associação de Circo</h1>
                </header>
                <div className="content">
                    <p>Protótipos / Design  / Engenharia de Software / Desenvolvimento Software</p>
                </div>
            </div>
        </section>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Criação da plataforma de Associados</h2>
                        <small>Fevereiro de 2021</small>
                    </header>
                    <p>Site criado para a Associação de Circo do Rio Grande do Sul, conta com um sistema de gestão de conteúdo personalizado, com o foco no associado, onde cada associado pode gerenciar seu perfil, tendo assim um mini currículo dentro da plataforma.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="#" className="image image-full">
                        <img src={pic1} alt="" />
                    </Link>
                </section>
                <section>
                    <Link to="#" className="image">
                        <img src={pic2} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Que é Associação de Circo do Rio Grande do Sul</h3>
                            </header>
                            <p>É uma entidade sem fins lucrativos que visa estimular, fomentar e manter a produção circense no estado.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing