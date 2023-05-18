import React from 'react'
import { Collapse } from 'antd';
const { Panel } = Collapse;

const Faq = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  Duo ea legimus legendos. Iusto aliquando quo in. Novum tritani ei pro, solum discere duo ad. Te mea dicant omnium, quem ornatus scribentur te his. Vis ei probatus efficiantur, virtute mentitum qui eu. Ex audiam audire nam, nec et iusto inermis. Tota ceteros definitiones ei vel, ad eos velit congue fabulas, adhuc urbanitas ex has. Modus labore cum ne, cu sea antiopam complectitur, persius necessitatibus at ius. Ut sed oblique intellegebat, nonumes voluptua constituto sed te. Eum idque falli fierent in. Utamur prodesset mei et.
`;
  return (
    <>
      <div className='block faqPage'>
        <div className="container">
          <h2>FAQ</h2>
          <Collapse defaultActiveKey={['1']}>
            <Panel header="Delivery and collection information" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="What do I need to know about ordering online?" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="Returns and refunds" key="3">
              <p>{text}</p>
            </Panel>
            <Panel header="Managing my account" key="4">
              <p>{text}</p>
            </Panel>
            <Panel header="Technical issues" key="5">
              <p>{text}</p>
            </Panel>
            <Panel header="Terms and conditions" key="6">
              <p>{text}</p>
            </Panel>
            <Panel header="Ratings and reviews" key="7">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  )
}

export default Faq