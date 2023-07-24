import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Cases from '../components/Cases'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Cases | dalee.dev</title>
            <meta name="description" content="Os nossos casos de sucesso mostram isso na prática! Mostram como nós ajudamos nossos clientes a alavancarem seus negócios através de soluções em TI inovadoras e eficientes" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Casos de Sucesso</h1>
                    </header>
                    <p>Os nossos casos de sucesso mostram isso na prática! Mostram como nós ajudamos nossos clientes a alavancarem seus negócios através de soluções em TI inovadoras e eficientes.</p>
                </div>
            </section>
            <Cases />
        </div>

    </Layout>
)

export default Generic