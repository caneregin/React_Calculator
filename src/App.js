import logo from './logo.svg';
import './App.css';
import { Button, Grid, Image } from 'semantic-ui-react'
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
      <h2>Hesap Makinesi{conclusion}</h2>
      <h2>
        {conclusion ? <span>(0)</span> : ""}
        {calcvalue || "0"}
      </h2>
      <Grid columns={4} divided>
        <Grid.Row>
          <Grid.Column onClick={handleclickpi}>
            pi
          </Grid.Column>
          <Grid.Column onClick={handleclicke}>
            e
          </Grid.Column>
          <Grid.Column onClick={handleclickce}>
            CE
          </Grid.Column>
          <Grid.Column className='operators' onClick={del}>
            DEL
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column onClick={handleclicksquare}>
            KARE
          </Grid.Column>
          <Grid.Column onClick={handleclickcube}>
            KÜP
          </Grid.Column>
          <Grid.Column onClick={handleclicksquareroot}>
            KAREKÖK
          </Grid.Column>
          <Grid.Column className='operators' onClick={() => updateCalc("/")}>
            BÖL
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column onClick={() => updateCalc("7".toString())}>
            7
          </Grid.Column>
          <Grid.Column onClick={() => updateCalc("8".toString())}>
            8
          </Grid.Column>
          <Grid.Column onClick={() => updateCalc("9".toString())}>
            9
          </Grid.Column>
          <Grid.Column className='operators' onClick={() => updateCalc("*")}>
            ÇARP
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column onClick={() => updateCalc("4".toString())}>
            4
          </Grid.Column>
          <Grid.Column onClick={() => updateCalc("5".toString())}>
            5
          </Grid.Column>
          <Grid.Column onClick={() => updateCalc("6".toString())}>
            6
          </Grid.Column>
          <Grid.Column className='operators' onClick={() => updateCalc("-")}>
            ÇIKAR
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column onClick={() => updateCalc("1".toString())}>
            1
          </Grid.Column>
          <Grid.Column onClick={() => updateCalc("2".toString())}>
            2
          </Grid.Column>
          <Grid.Column onClick={() => updateCalc("3".toString())}>
            3
          </Grid.Column>
          <Grid.Column className='operators' onClick={() => updateCalc("+")}>
            TOPLA
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column onClick={handleclicklog}>
            LOG
          </Grid.Column>
          <Grid.Column onClick={() => updateCalc("0".toString())}>
            0
          </Grid.Column>
          <Grid.Column onClick={() => updateCalc(".")}>
            ,
          </Grid.Column>
          <Grid.Column className='operators' onClick={handleclickequal}>
            EŞİTTİR
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
