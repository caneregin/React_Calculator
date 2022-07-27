import logo from './logo.svg';
import './App.css';
import { Table, Grid, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { useState } from 'react';

function App() {
  const [calcvalue, setCalcvalue] = useState("")
  const [conclusion, setConclusion] = useState("")

  const handleclickpi = () => {
    setConclusion("3,1415926535897932384626433832795")
  }
  const handleclicke = () => {
    setConclusion("2,7182818284590452353602874713527")
  }
  const handleclicksquare = () => {
    let tempsquare = calcvalue
    let squareequal = tempsquare * tempsquare
    setConclusion(squareequal)
  }
  const handleclickce = () => {
    setCalcvalue("")
    setConclusion("")
  }
  const handleclickcube = () => {
    let tempsquare = calcvalue
    let squareequal = tempsquare * tempsquare * tempsquare
    setConclusion(squareequal)
  }
  const handleclicksquareroot = () => {
    let tempsquare = calcvalue
    let sqrt = Math.sqrt(tempsquare);
    setConclusion(sqrt)
  }
  const handleclicklog = () => {
    let templog = calcvalue
    let log = Math.log(templog);
    setConclusion(log)
  }
  const handleclickequal = () => {
    setCalcvalue(conclusion)
  }
  const operators = ["+", "-", ".", "/", "*"]

  const updateCalc = value => {
    if (
      operators.includes(value) && calcvalue === '' ||
      operators.includes(value) && operators.includes(calcvalue.slice(-1)
      )
    ) { return; }
    setCalcvalue(calcvalue + value)
    if (!operators.includes(value)) {
      setConclusion(eval(calcvalue + value).toString())
    }
  }
  const del = () => {
    if (calcvalue === "") {
      return
    }
    const value = calcvalue.slice(0, -1)
    setCalcvalue(value)
  }
  return (
    <div className="App">
      <h2>Hesap Makinesi</h2>
      <h2>
        {conclusion ? <span className='concspan'>({conclusion})</span> : <span className='concspan'>(0)</span>}
        {calcvalue || "0"}
      </h2>
      <Table style={{border:"none",textAlign:"center"}}>
      <Table.Body>
          <Table.Row >
            <Table.Cell className='operators' onClick={handleclickpi}>pi</Table.Cell>
            <Table.Cell className='operators' onClick={handleclicke}>e</Table.Cell>
            <Table.Cell className='operators' onClick={handleclickce}>CE</Table.Cell>
            <Table.Cell className='operators' onClick={del}>DEL</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className='operators' onClick={handleclicksquare}>x²</Table.Cell>
            <Table.Cell className='operators' onClick={handleclickcube}>x³</Table.Cell>
            <Table.Cell className='operators' onClick={handleclicksquareroot}>√</Table.Cell>
            <Table.Cell className='operators' onClick={() => updateCalc("/")}>÷</Table.Cell>
          </Table.Row>
        

        
          <Table.Row>
            <Table.Cell className='operatorsother' onClick={() => updateCalc("7".toString())}>7</Table.Cell>
            <Table.Cell className='operatorsother' onClick={() => updateCalc("8".toString())}>8</Table.Cell>
            <Table.Cell className='operatorsother' onClick={() => updateCalc("9".toString())}>9</Table.Cell>
            <Table.Cell className='operators' onClick={() => updateCalc("*")}>*</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className='operatorsother' onClick={() => updateCalc("4".toString())}>4</Table.Cell>
            <Table.Cell className='operatorsother' onClick={() => updateCalc("5".toString())}>5</Table.Cell>
            <Table.Cell className='operatorsother' onClick={() => updateCalc("6".toString())}>6</Table.Cell>
            <Table.Cell className='operators' onClick={() => updateCalc("-")}>-</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className='operatorsother' onClick={() => updateCalc("1".toString())}>1</Table.Cell>
            <Table.Cell className='operatorsother' onClick={() => updateCalc("2".toString())}>2</Table.Cell>
            <Table.Cell className='operatorsother' onClick={() => updateCalc("3".toString())}>3</Table.Cell>
            <Table.Cell className='operators' onClick={() => updateCalc("+")}>+</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className='operatorsother' onClick={handleclicklog}>LOG</Table.Cell>
            <Table.Cell className='operatorsother' onClick={() => updateCalc("0".toString())}>0</Table.Cell>
            <Table.Cell className='operatorsother' onClick={() => updateCalc(".")}>,</Table.Cell>
            <Table.Cell className='operators' onClick={handleclickequal}>=</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default App;
