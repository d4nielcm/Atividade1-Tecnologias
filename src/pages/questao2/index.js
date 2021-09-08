import api from '../../api';
import React, { useRef, useState } from 'react';
import { Col, Row, Alert, Container } from 'react-bootstrap';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Popup from 'reactjs-popup';

function Questao2() {
  const [resultado, setResultado] = useState('');
  const [erro, setErro] = useState(false);
  const [quantidadeCaracteres, setQuantidadeCaracteres] = useState(0);
  const [quantidadePalavras, setQuantidadePalavras] = useState(0);
  const num1 = useRef(null);
  const num2 = useRef(null);
  const op = useRef(null);
  const conhecimento = useRef(null);
  const [especialidade, setEspecialidade] = useState('');
  const [adicionais] = useState([]);
  const [parseAd, setParseAd] = useState([]);
  const [conhecimentoTabela, setConhecimento] = useState([]);

  let ad = [];
  const dataConhecimento = [
    { key: 'js', label: "Javacript" }, 
    { key: 'html', label: "HTML" }, 
    { key: 'css', label: "CSS" },
    { key: 'sql', label: "SQL" }
  ]
  function contarCaracteres(e) {
    setQuantidadeCaracteres(e.currentTarget.value.length);
  }
  function contarPalavras(e) {
    setQuantidadePalavras(e.currentTarget.value.split(' ').length);
  }
  const dataTabela = [];

  function dadosNaTabela() {
    ad = [...new Set(adicionais)];
    ad = ad.map((e, i) => {
      if (e.checked) return e.id;
      return null;
    });
    ad = ad.filter(n => n);
    setParseAd(ad);
    setConhecimento(conhecimento.current.state.selected);
  }
  return (
    <>
      <div>
        <h1 className="titulo-questao">Fomulário</h1>
      </div>
      <form onSubmit={
        (e) => {
          e.preventDefault();
          if (num1.current.value && num2.current.value) {
            api.post('/calcular', {
              num1: num1.current.value ? num1.current.value : 0,
              num2: num2.current.value ? num2.current.value : 0,
              op: op.current.value
            })
              .then((result) => {
                setResultado(result.data);
              });
            setErro(false);
          } else {
            setResultado(null);
            setErro(true);
          }
        }}>
        <Container>
          <Row style={{
              justifyContent: "space-around"
            }}>
            <Col className="col-md-6">
              <label htmlFor="nome" className="label-num">Nome ({quantidadeCaracteres} caracteres)</label>
              <input className="form-control" ref={num1} type="text" id="nome" onKeyUp={(e)=>contarCaracteres(e)} name="nome" />
              <label htmlFor="email" className="label-num">Email</label>
              <input className="form-control" ref={num1} type="email" id="email" name="email" />
            </Col>
            <Col className="col-md-6">
              <label htmlFor="telefone" className="label-num">Telefone</label>
              <input className="form-control" ref={num2} id="telefone" name="telefone" />
              <label htmlFor="sexo" className="label-num">Sexo</label>
              <select name="sexo" className="form-control">
                <option value="m">Masculino</option>
                <option value="f">Feminino</option>
              </select>
            </Col>
            <Col className="col-md-12">
              <label htmlFor="experiencia" className="label-num">Experiência profissional ({quantidadePalavras} palavras)</label>
              <textarea className="form-control" maxLength="144" onBlur={(e) => contarPalavras(e)} ref={num2} id="experiencia" name="experiencia" />
            </Col>
            <Col className="col-md-5" style={{
                boxShadow: '#000 1px 8px 10px',
                marginTop: "20px",
                borderRadius: "15px",
                marginRight: '20px',
                height: '250px'
              }}>
              <label htmlFor="conhecimento" className="label-num">Conhecimento em</label>
              <DropdownMultiselect 
                placeholder="Nenhum selecionado" 
                selectDeselectLabel="Todos/nenhum" 
                ref={conhecimento}
                options={dataConhecimento} 
                name="conhecimento">
              </DropdownMultiselect>
            </Col>
            <Col className="col-md-5" style={{
              boxShadow: '#000 1px 8px 10px',
              marginTop: "20px",
              borderRadius: "15px",
              marginRight: '20px'
            }}>
              <label htmlFor="adicionais[]" className="label-num">Conhecimentos adicionais</label>
              <div className="divAdicionais" onChange={(e) => {
                  adicionais.push(e.target);
              }}>
                <Row style={{
                  flexDirection: "column"
                }}>
                  <input id="materialize"
                    className="checkbox-btn"
                    type="checkbox"
                    name="adicionais[]" />
                  <label htmlFor="materialize" className="checkbox-label">Materialize CSS</label>
                  <input id="bootstrap"
                    className="checkbox-btn"
                    type="checkbox"
                    name="adicionais[]" />
                  <label htmlFor="bootstrap" className="checkbox-label">Bootstrap</label>
                  <input id="foundationc"
                    className="checkbox-btn"
                    type="checkbox"
                    name="adicionais[]" />
                  <label htmlFor="foundationc" className="checkbox-label">Foundation CSS</label>
                  <input id="semanticui"
                    className="checkbox-btn"
                    type="checkbox"
                    name="adicionais[]" />
                  <label htmlFor="semanticui" className="checkbox-label">Semantic UI</label>
                </Row>
              </div>
            </Col>
            <Col className="col-md-5" style={{
                boxShadow: '#000 1px 8px 10px',
                marginTop: "20px",
                borderRadius: "15px",
              }}>
              <label htmlFor="especialidade[]" className="label-num">Especialidade em </label>
              <div className="divEspecialidade" onChange={(e) => {
                setEspecialidade(e.target.id);
              }}>
                <Row style={{
                  flexDirection: "column"
                }}>
                  <input id="reactjs"
                    type="radio"
                    name="especialidade" />
                  <label htmlFor="reactjs">ReactJS</label>
                  <input id="angularjs"
                    type="radio"
                    name="especialidade" />
                  <label htmlFor="angularjs">AngularJS</label>
                  <input id="vuejs"
                    type="radio"
                    name="especialidade" />
                  <label htmlFor="vuejs">Vue.JS</label>
                </Row>
              </div>
            </Col>
          </Row>
          
          <Popup
            trigger={<button className="btn btn-outline-success" style={{marginTop: '30px'}}> Visualizar opções selecionadas </button>}
            modal
            nested
            className="meu-popup"
            onOpen={() => dadosNaTabela()}
            onClose={() => dataTabela.pop()}
          >
            <Row>
              <Col>
                <h3 style={{ textAlign: 'center' }}>
                  Conhecimentos
                </h3>
                {conhecimentoTabela.map((i) => {
                  return (<p key={Math.random()} style={{ textAlign: 'center' }}>{i}</p>);
                })}
              </Col>
              <Col>
                <h3 style={{ textAlign: 'center' }}>
                  Especialidade
                </h3>
                <p style={{ textAlign: 'center' }}>{especialidade}</p>
              </Col>
              <Col>
                <h3 style={{ textAlign: 'center' }}>
                  Adicionais
                </h3>
                {parseAd.map((i) => {
                  return (<p key={Math.random()} style={{ textAlign: 'center' }}>{i}</p>);
                })}
              </Col>
            </Row>
          </Popup>
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

export default Questao2;
