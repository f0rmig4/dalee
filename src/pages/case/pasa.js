import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

import banner from '../../assets/images/cases/pasa/banner.jpeg'
import pic1 from '../../assets/images/cases/pasa/1.png'
import pic2 from '../../assets/images/cases/pasa/2.png'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Pasa & Karan - dalee.dev</title>
            <meta name="description" content="Site criado para o escritório de advocacia Pasa & Karan com um sistema de gestão de conteúdo personalizado." />
        </Helmet>

        <section id="banner" className="style2" style={{ backgroundImage: `url(${banner})` }}>
            <div className="inner">
                <header className="major">
                    <h1>Pasa & Karan Advogados</h1>
                </header>
                <div className="content">
                    <p>Protótipos / Design  / Desenvolvimento Software</p>
                </div>
            </div>
        </section>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Criação e Manutenção do Site</h2>
                        <small>Abril de 2017</small>
                    </header>
                    <p>Site criado para o escritório de advocacia Pasa & Karan com um sistema de gestão de conteúdo personalizado.</p>
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
                                <h3>Que é Pasa & Karan Advogados</h3>
                            </header>
                            <p>Um escritório de advocacia reconhecido pela comunidade por sua respeitabilidade, organização e profissionalismo.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing