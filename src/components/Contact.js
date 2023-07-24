import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post">
                    <div className="field half first">
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Mensagem</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Enviar" className="special" disabled /></li>
                        <li><input type="reset" value="Limpar" disabled /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>contato@dalee.dev</h3>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Telefone</h3>
                        <span>+55 51 999948-9818</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Endereço</h3>
                        <span>Rua Cel. Fernando Machado 613<br />
                        Porto Alegre<br />
                        Rio Grande do Sul - Brasil</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
