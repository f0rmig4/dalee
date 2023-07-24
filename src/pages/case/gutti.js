import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

import banner from '../../assets/images/cases/gutti/banner.jpg'
import pic1 from '../../assets/images/cases/gutti/1.png'
import pic2 from '../../assets/images/cases/gutti/2.png'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Gutti do Brasil - dalee.dev</title>
            <meta name="description" content="Uma loja virtual com foco no atendimento ao cliente." />
        </Helmet>

        <section id="banner" className="style2" style={{ backgroundImage: `url(${banner})` }}>
            <div className="inner">
                <header className="major">
                    <h1>Gutti do Brasil</h1>
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
                        <h2>Criação e Manutenção da Loja Virtual</h2>
                        <small>Março de 2021</small>
                    </header>
                    <p>Uma loja virtual com foco no atendimento ao cliente.</p>
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
                                <h3>Que é a Gutti do Brasil</h3>
                            </header>
                            <p>É uma empresa voltada para o mercado de motociclistas, com o desenvolvimento de roupas de proteção e acessórios de alta qualidade, conforto e segurança para o usuário.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing