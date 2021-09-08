import api from '../../api';
import React, { useRef, useState } from 'react';
import { Col, Row, Alert, Container } from 'react-bootstrap';

function Questao1() {
  const [resultado, setResultado] = useState('');
  const [erro, setErro] = useState(false);
  const [combobox, setCombobox] = useState(false);
  const num1 = useRef(null);
  const num2 = useRef(null);
  const op = useRef(null);
  const mais = useRef(null);
  const menos = useRef(null);
  const vezes = useRef(null);
  const dividir = useRef(null);
  return (
  <>
    <div className="container">
      <h1 className="titulo-questao">Calculadora</h1>
      <button 
        className="btn btn-outline-info" 
        onClick={()=>{setCombobox(!combobox);}}>
        {!combobox ? "Alterar para combobox" : "Alterar par botões"}
      </button>
    </div>
    <form onSubmit={
      (e) => {
        e.preventDefault();
        if(num1.current.value && num2.current.value){
          api.post('/calcular', {
            num1: num1.current.value ? num1.current.value : 0,
            num2: num2.current.value ? num2.current.value : 0,
            op: op.current.value
          })
            .then((result) => {
              setResultado(result.data);
            });
          setErro(false);
        } else{
          setResultado(null);
          setErro(true);
        }
      }}>
      <Container>
        <Row>
          <Col> 
            <label htmlFor="num1" className="label-num">Número 1</label>
            <input className="form-control" ref={num1} type="number" id="num1" name="num1" />
          </Col>
          <button ref={op} style={{ display: "none" }}>+</button>

            {!combobox &&
            <Col style={{ 
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center'
              }}>
              <button title="Somar" className="btn btn-outline-info btn-op" ref={mais} onClick={() => op.current.value = mais.current.value} value="+" type="submit">+</button>
              <button title="Subtrair" className="btn btn-outline-info btn-op" ref={menos} onClick={() => op.current.value = menos.current.value} value="-" type="submit">-</button>
              <button title="Dividir" className="btn btn-outline-info btn-op" ref={dividir} onClick={() => op.current.value = dividir.current.value} value="/" type="submit">/</button>
              <button title="Multiplicar" className="btn btn-outline-info btn-op" ref={vezes} onClick={() => op.current.value = vezes.current.value} value="*" type="submit">*</button>
            </Col>
            }
            {combobox && 
            <>
            <Col className="col-1" style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}>
              <select className="form-control" onChange={(e)=>{
                op.current.value =  e.currentTarget.value;
              }}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">/</option>
                <option value="*">*</option>
              </select>
            </Col>
            <Col className="col-2" style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'start'
            }}>
              <button title="Calcular" 
                className="btn btn-outline-info btn-op"
                type="submit">
                  Calcular
              </button>
            </Col>
            </>
            }
          <Col> 
            <label htmlFor="num2" className="label-num">Número 2</label>
            <input className="form-control" ref={num2} type="number" id="num2" name="num2" />
          </Col>
        </Row>
        <Container style={{ marginTop: '20px' }}>
          <Row>
            {resultado && 
            <>
              <Alert variant="success">
                <h1 className="resultado">O resultado de {num1.current?.value + op.current?.value + num2.current?.value} é </h1>
                <p className="resultado">{resultado}</p>
              </Alert>
            </>
            }
          </Row>
          <Row>
            {erro && 
            <>
              <Alert variant="danger">
                <h1 className="erro">Preencha os campos</h1>
              </Alert>
            </>
            }
          </Row>
        </Container>
      </Container>
    </form>
  </>
  );
}

export default Questao1;
