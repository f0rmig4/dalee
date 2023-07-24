import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

import banner from '../../assets/images/cases/central/banner.jpeg'
import pic1 from '../../assets/images/cases/central/1.png'
import pic2 from '../../assets/images/cases/central/2.png'

const Central = (props) => (
    <Layout>
        <Helmet>
            <title>Central do Franqueado - dalee.dev</title>
            <meta name="description" content="Otimização de performance e acessibilidade do blog para melhor indexação nos motores de busca." />
        </Helmet>

        <section id="banner" className="style2" style={{ backgroundImage: `url(${banner})` }}>
            <div className="inner">
                <header className="major">
                    <h1>Central do Franqueado</h1>
                </header>
                <div className="content">
                    <p>Protótipos  / Engenharia de Software / Desenvolvimento Software</p>
                </div>
            </div>
        </section>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Otimização e Performance</h2>
                        <small>Março de 2021</small>
                    </header>
                    <p>Otimização de performance e acessibilidade do blog para melhor indexação nos motores de busca.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="#" className="image">
                        <img src={pic1} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Projeto</h3>
                            </header>
                            <p>Foi criado uma arquitetura utilizando ferramentas tecnológicas atuais para ter um blog extremamente performático, conseguimos aumentar os acessos orgânicos e aumentar a pontuação do Google Pagespeed de 62 para 99 pontos.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="#" className="image">
                        <img src={pic2} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Quem é a Central do Franqueado</h3>
                            </header>
                            <p>Uma moderna plataforma online para Suporte, Gestão e Comunicação de Redes de Franquias.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Central