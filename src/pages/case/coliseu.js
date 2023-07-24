import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

import banner from '../../assets/images/cases/coliseu/banner.jpeg'
import pic1 from '../../assets/images/cases/coliseu/1.png'
import pic2 from '../../assets/images/cases/coliseu/2.png'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Grupo Coliseu - dalee.dev</title>
            <meta name="description" content="Um software de gestão de cupom de descontos para rede de moteis do grupo Coliseu." />
        </Helmet>

        <section id="banner" className="style2" style={{ backgroundImage: `url(${banner})` }}>
            <div className="inner">
                <header className="major">
                    <h1>Grupo Coliseu</h1>
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
                        <h2>Cupom de Desconto Integrado</h2>
                        <small>Janeiro de 2021</small>
                    </header>
                    <p>Um software de gestão de cupom de descontos para rede de moteis do grupo Coliseu.</p>
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
                            <p>Construímos e mantemos os 3 sites da Rede Coliseu:<br /> Motel Coliseu, Arena e Botafogo. Recentemente criamos a aplicação de cupons de desconto para integrar toda a rede.</p>
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
                                <h3>Sistema de administrador</h3>
                            </header>
                            <p>Construído um sistema administrativo sob medida para poder gerir todos os cupons de descontos da rede, tem a funcionalidade de aprovar cupons e gerar relatórios por período entre outras funcionalidades.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing