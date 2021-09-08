import React, { useRef } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

function Questao3() {
  const resultadoText = useRef(null);
 
  function apagarTudo() {
    resultadoText.current.value = "";
  }
  function igualOp() {
    if (['x', '/', '+', '-'].some(v => resultadoText.current.value.charAt(resultadoText.current.value.length - 1).includes(v))){
      resultadoText.current.value = resultadoText.current.value.slice(0, -1);
    } else if(resultadoText.current.value.charAt(resultadoText.current.value.length - 1) === '%'){
      resultadoText.current.value = parseInt(resultadoText.current.value) / 100;
    } else{
      console.log(resultadoText.current.value);
      // eslint-disable-next-line no-eval
      resultadoText.current.value = eval(resultadoText.current.value.replace(/[x]/g, "*"));
      console.log(resultadoText.current.value);
    }
  }
  return (
    <>
      <div className="container">
        <h1 className="titulo-questao">Calculadora com layout</h1>
      </div>
      <form onSubmit={
        (e) => {
          e.preventDefault();
        }}>
        <Container style={{
          display: "grid",
          justifyContent: "center"
        }}>
          <Row style={{
            display: "grid",
            boxShadow: "-3px 1px 10px black",
            borderRadius: '15px'
          }}>
            <Col>
              <input ref={resultadoText} style={{ marginTop: '20px' }} className="form-control" disabled type="text" />
            </Col>
            <div className="btnCol">
              <button
                title="Apagar tudo"
                className="btn btn-outline-info btn-op"
                onClick={() => apagarTudo()}
                value="ce"
                type="button">
                CE
              </button>
              <button
                title="Dividir"
                className="btn btn-outline-info btn-op"
                onClick={
                  (e) => {
                    if (['x', '/', '+', '-'].some(v => resultadoText.current.value.charAt(resultadoText.current.value.length - 1).includes(v))) {
                      resultadoText.current.value = resultadoText.current.value.slice(0, -1);
                    }
                    resultadoText.current.value += e.currentTarget.value;
                  }
                }
                value="/"
                type="button">
                /
              </button>
              <button
                title="Multiplicar"
                className="btn btn-outline-info btn-op"
                onClick={
                  (e) => {
                    if (['x', '/', '+', '-'].some(v => resultadoText.current.value.charAt(resultadoText.current.value.length - 1).includes(v))) {
                      resultadoText.current.value = resultadoText.current.value.slice(0, -1);
                    }
                    resultadoText.current.value += e.currentTarget.value;
                  }
                }
                value="x"
                type="button">
                X
              </button>
              <button
                title="Apagar"
                className="btn btn-outline-info btn-op"
                onClick={(e) => resultadoText.current.value = resultadoText.current.value.slice(0, -1)}
                value="<"
                type="button">
                &#8592;
              </button>
              <button
                title="7"
                className="btn btn-outline-info btn-op"
                onClick={(e) => resultadoText.current.value += e.currentTarget.value}
                value="7"
                type="button">
                7
              </button>
              <button
                title="8"
                className="btn btn-outline-info btn-op"
                onClick={(e) => resultadoText.current.value += e.currentTarget.value}
                value="8"
                type="button">
                8
              </button>
              <button
                title="9"
                className="btn btn-outline-info btn-op"
                onClick={(e) => resultadoText.current.value += e.currentTarget.value}
                value="9"
                type="button">
                9
              </button>
              <button
                title="Somar"
                className="btn btn-outline-info btn-op"
                onClick={
                  (e) => {
                    if (['x', '/', '+', '-'].some(v => resultadoText.current.value.charAt(resultadoText.current.value.length - 1).includes(v))) {
                      resultadoText.current.value = resultadoText.current.value.slice(0, -1);
                    }
                    resultadoText.current.value += e.currentTarget.value;
                  }
                }
                value="+"
                type="button">
                +
              </button>
              <button
                title="4"
                className="btn btn-outline-info btn-op"
                onClick={(e) => resultadoText.current.value += e.currentTarget.value}
                value="4"
                type="button">
                4
              </button>
              <button
                title="5"
                className="btn btn-outline-info btn-op"
                onClick={(e) => resultadoText.current.value += e.currentTarget.value}
                value="5"
                type="button">
                5
              </button>
              <button
                title="6"
                className="btn btn-outline-info btn-op"
                onClick={(e) => resultadoText.current.value += e.currentTarget.value}
                value="6"
                type="button">
                6
              </button>
              <button
                title="Subtrair"
                className="btn btn-outline-info btn-op"
                onClick={
                  (e) => {
                    if (['x', '/', '+', '-'].some(v => resultadoText.current.value.charAt(resultadoText.current.value.length - 1).includes(v))) {
                      resultadoText.current.value = resultadoText.current.value.slice(0, -1);
                    }
                    resultadoText.current.value += e.currentTarget.value;
                  }
                }
                value="-"
                type="button">
                -
              </button>
              <button
                title="1"
                className="btn btn-outline-info btn-op"
                onClick={(e) => resultadoText.current.value += e.currentTarget.value}
                value="1"
                type="button">
                1
              </button>
              <button
                title="2"
                className="btn btn-outline-info btn-op"
                onClick={(e) => resultadoText.current.value += e.currentTarget.value}
                value="2"
                type="button">
                2
              </button>
              <button
                title="3"
                className="btn btn-outline-info btn-op"
                onClick={(e) => resultadoText.current.value += e.currentTarget.value}
                value="3"
                type="button">
                3
              </button>
              <button
                title="="
                className="btn btn-outline-info btn-op"
                onClick={() => igualOp()}
                value="="
                type="button">
                =
              </button>
            </div>
          </Row>
        </Container>
      </form>
    </>
  );
}

export default Questao3;
