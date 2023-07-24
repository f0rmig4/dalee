import React from 'react'

const Timeline = (props) => (

  <div className="timeline">
    <div className="item">
      <span>Protótipo</span>
      - Prova de conceito visual e técnica<br />
      - Útil para testes com usuários para informar decisões<br />
      - Útil para demonstrar o conceito de garantia de financiamento<br />
      - O processo se concentra no desenvolvimento rápido<br />
      - Pouco ou nenhum desenvolvimento de back-end envolvido<br />
      - Não adequado para lançamento no mercado<br />
      - Desenvolvimento rápido e custo mais baixo, normalmente 1-3 sprints
    </div>
    <div className="item">
      <span>Lançamento do produto</span>
      - Adequado para estabelecer um produto no mercado e reunir conhecimentos e análises<br />
      - Os processos se concentram no desenvolvimento de recursos<br />
      - Investimento razoável em testes<br />
      - O resultado é adequado para lançamento no mercado<br />
      - Normalmente 5-8 sprints
    </div>
    <div className="item">
      <span>Produto completo</span>
      - Grande investimento em testes de ponta a ponta e testes de integração para evitar a implantação de funcionalidade interrompida e identificar problemas à medida que surgem<br />
      - A ênfase no teste acomoda grandes volumes de usuários<br />
      - Defende estabilidade, segurança e escalabilidade<br />
      - Maior tempo de desenvolvimento 10 Sprints +
    </div>
  </div>

)

export default Timeline