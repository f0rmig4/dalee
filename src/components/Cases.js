import React from 'react'
import { Link } from 'gatsby'

import pic01 from '../assets/images/cases/central/banner.jpeg'
import pic02 from '../assets/images/cases/toptool/banner.jpeg'
import pic03 from '../assets/images/cases/coliseu/banner.jpeg'
import pic04 from '../assets/images/cases/pasa/banner.jpeg'
import pic05 from '../assets/images/cases/associacao/banner.jpeg'
import pic06 from '../assets/images/cases/gutti/banner.jpg'

const Cases = (props) => (
    <section id="cases" className="tiles">
        <article style={{ backgroundImage: `url(${pic01})` }}>
            <header className="major">
                <h3>Central do Franqueado</h3>
                <p>Otimização de performance e acessibilidade do blog para melhor indexação nos motores de busca.</p>
            </header>
            <Link to="/case/central" className="link primary"></Link>
        </article>
        <article style={{ backgroundImage: `url(${pic02})` }}>
            <header className="major">
                <h3>Toptool</h3>
                <p>Um software de automatização de processo produtivo de uma fábrica de matrizes</p>
            </header>
            <Link to="/case/toptool" className="link primary"></Link>
        </article>
        <article style={{ backgroundImage: `url(${pic03})` }}>
            <header className="major">
                <h3>Grupo Coliseu</h3>
                <p>Um software de gestão de cupom de descontos para rede de moteis do grupo Coliseu</p>
            </header>
            <Link to="/case/coliseu" className="link primary"></Link>
        </article>
        <article style={{ backgroundImage: `url(${pic04})` }}>
            <header className="major">
                <h3>Pasa & Karan Advogados</h3>
                <p>Site criado para o escritório de advocacia Pasa & Karan com um sistema de gestão de conteúdo personalizado.</p>
            </header>
            <Link to="/case/pasa" className="link primary"></Link>
        </article>
        <article style={{ backgroundImage: `url(${pic05})` }}>
            <header className="major">
                <h3>Associação de Circo</h3>
                <p>Site criado para a Associação de Circo do Rio Grande do Sul, conta com um sistema de gestão de conteúdo personalizado</p>
            </header>
            <Link to="/case/associacao" className="link primary"></Link>
        </article>
        <article style={{ backgroundImage: `url(${pic06})` }}>
            <header className="major">
                <h3>Gutti do Brasil</h3>
                <p>Uma loja virtual com foco no atendimento ao cliente.</p>
            </header>
            <Link to="/case/gutti" className="link primary"></Link>
        </article>
    </section>

)

export default Cases