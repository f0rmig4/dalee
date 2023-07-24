import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

import banner from '../../assets/images/cases/toptool/banner.jpeg'
import pic1 from '../../assets/images/cases/toptool/1.png'
import pic2 from '../../assets/images/cases/toptool/2.png'

const Central = (props) => (
    <Layout>
        <Helmet>
            <title>Toptool - dalee.dev</title>
            <meta name="description" content="Desenvolvida a arquitetura e interface do software que atende e controla todo o processo produtivo de uma fábrica de matrizes, desde a entrada de pedidos, execução do serviço e entrega." />
        </Helmet>

        <section id="banner" className="style2" style={{ backgroundImage: `url(${banner})` }}>
            <div className="inner">
                <header className="major">
                    <h1>Toptool</h1>
                </header>
                <div className="content">
                    <p>Protótipos  / Designer/ Engenharia de Software / Desenvolvimento Software</p>
                </div>
            </div>
        </section>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Desenvolvimento e Manutenção de Software</h2>
                        <small>Março de 2016</small>
                    </header>
                    <p>Nosso prinicipal cliente, mantemos uma relação de 5 anos.</p>
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
                            <p>Desenvolvida a arquitetura e interface do software que atende e controla todo o processo produtivo de uma fábrica de matrizes, desde a entrada de pedidos, execução do serviço e entrega.</p>
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
                                <h3>Quem é a Toptool</h3>
                            </header>
                            <p>Fundada em 2008 e com sede em Carlos Barbosa, RS, na serra gaúcha, a Top Tool está localizada em um dos maiores pólos metal-mecânicos do Brasil, o que permite uma grande integração com seus principais clientes e fornecedores, garantindo agilidade no fornecimento de seus produtos e serviços.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Central