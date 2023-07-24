import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Contatos | dalee.dev</title>
            <meta name="description" content="Vamos Conversar? Preencha o formulário abaixo para trocarmos uma ideia." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Vamos Conversar?</h1>
                    </header>
                    <p>Preencha o formulário abaixo para trocarmos uma ideia:</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic