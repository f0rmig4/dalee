import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Cases from '../components/Cases'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="dalee.dev | Soluções em Sistemas"
                    meta={[
                        { name: 'description', content: 'Somos uma equipe multidisciplinar, de programadores, engenheiros e designers independentes, que oferece uma força de trabalho qualificada.' },
                        { name: 'keywords', content: 'software house, software, fabrica de software, portal, portais, sites, web, websites, SGC, sistema de gerenciamento de conteudo, CMS, content management system, react, php, outsourcing, plone, joomla, desenvolvimento, criação, hospedagem, ERP, hotsite, gestão de compras, plano de negócios, empreendedorismo, tecnologia' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="services" className="text-center">
                        <div className="inner">
                            <h2 id="content">Serviços</h2>
                            <div className="grid-wrapper">
                                <div className="col-4">
                                    <span class="icon alt fa-adjust"></span>
                                    <h3>Designer</h3>
                                    <p>
                                        Design de experiência do usuário<br />
                                    Wireframes e prototipagem<br />
                                    Design visual<br />
                                    Marca digital<br />
                                    Design de interação<br />
                                    Ilustração
                                    </p>
                                </div>
                                <div className="col-4">
                                    <span class="icon alt fa-code"></span>
                                    <h3>Desenvolvimento</h3>
                                    <p>
                                        Aplicativos web e mobile<br />
                                    Análise e extração de dados<br />
                                    Consultoria técnica<br />
                                    Sistemas CMS<br />
                                    Hospedagem, manutenção e suporte<br />
                                    Prototipagem rápida
                                    </p>
                                </div>
                                <div className="col-4">
                                    <span class="icon alt fa-life-ring"></span>
                                    <h3>Manutenção</h3>
                                    <p>
                                        Manutenção de produto<br />
                                        Suporte contínuo<br />
                                        SLA
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Cases />

                    <section id="about">
                        <div className="inner">
                            <header className="major">
                                <h2>Sobre</h2>
                            </header>
                            <p>Somos uma equipe multidisciplinar, de programadores, engenheiros e designers independentes, que oferece uma força de trabalho qualificada. Valorizamos os novos desafios e entendemos a necessidade de continuar melhorando nossas competências, transformando o cenário tecnológico com simplicidade e agilidade, reduzindo custos sem diminuir a qualidade e entregando software feito sob medida.</p>
                            <ul className="actions">
                                <li><Link to="/about" className="button next">Somos dalee.dev</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex