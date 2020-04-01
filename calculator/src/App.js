import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import "./app.css"

function App() {

  const [partyNumber, setPartyNumber] = useState(5)
  const [fullCheckAmount, setFullCheckAmount] = useState(0)
  const [tip, setTip] = useState(0)

  const addOnePerson = () => setPartyNumber(partyNumber + 1)
  const removeOnePerson = () => setPartyNumber(partyNumber - 1)

  const handleCheckChange = e => setFullCheckAmount(e.target.value)
  const handleTipChange = e => setTip(e.target.value)

  const perPerson = parseFloat(fullCheckAmount) * ((parseFloat(tip) / 100) + 1) / partyNumber

  return (
    <div>
      <Container>
        <h1>Straight bills, long friendships</h1>
        <Row className="justify-content-md-center">
          <Col>
            <div className="form-wrapper">
              <form className="input-form">
                <label>Input total Check</label>
                <input name="fullCheckAmount" value={fullCheckAmount} onChange={handleCheckChange} type="number" placeholder="input the total check"></input>
                <br />

                <label>Adjust party size</label>
                <p>{partyNumber}</p>
                <button type="button" onClick={addOnePerson} >Add person</button>
                <button type="button" onClick={removeOnePerson} >Remove person</button>
                <br />
                <label>input the tip %</label>
                <input name="tip" value={tip} onChange={handleTipChange} type="number" placeholder="input the tip"></input>
              </form>
            </div>

          </Col>

          <Col>
            <article>
              <h2>No excuses</h2>
              <h2>No wallets at home</h2>
              <h2>No girlfriends dont pay</h2>
              <h2>No I only had a salad</h2>
              <h2>{perPerson} each</h2>
            </article>
          </Col>


        </Row>

      </Container>

    </div >
  );
}

export default App;
