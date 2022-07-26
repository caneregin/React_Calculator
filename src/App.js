import logo from './logo.svg';
import './App.css';
import { Button, Grid, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { useState } from 'react';

function App() {
  let prevArr = []
  let nextArr = []
  const [calcvalue, setCalcvalue] = useState("")
  const [conclusion, setConclusion] = useState("")
  const [prevvalue, setPrevvalue] = useState(prevArr)
  const handleclick1 = () => {
    setPrevvalue([...prevvalue, 1])
  }
  const handleclick2 = () => {
    setPrevvalue([...prevvalue, 2])
  }
  const handleclick3 = () => {
    setPrevvalue([...prevvalue, 3])
  }
  const handleclick4 = () => {
    setPrevvalue([...prevvalue, 4])
  }
  const handleclick5 = () => {
    setPrevvalue([...prevvalue, 5])
  }
  const handleclick6 = () => {
    setPrevvalue([...prevvalue, 6])
  }
  const handleclick7 = () => {
    setPrevvalue([...prevvalue, 7])
  }
  const handleclick8 = () => {
    setPrevvalue([...prevvalue, 8])
  }
  const handleclick9 = () => {
    setPrevvalue([...prevvalue, 9])
  }
  const handleclick0 = () => {
    setPrevvalue([...prevvalue, 0])
  }
  const handleclickpi = () => {
    setPrevvalue([...prevvalue, 0])
  }
  const handleclicke = () => {
    setCalcvalue("2,7182818284590452353602874713527")
  }
  const handleclicksquare = () => {
    let tempsquare = prevvalue
    let squareequal = tempsquare * tempsquare
    setCalcvalue(squareequal)
  }
  const handleclickce = () => {
    setPrevvalue([...prevvalue, 0])
  }
  const handleclickcube = () => {
    setPrevvalue([...prevvalue, 0])
  }
  const handleclickdel = () => {
    setPrevvalue([...prevvalue, 0])
  }
  const handleclicksquareroot = () => {
    setPrevvalue([...prevvalue, 0])
  }
  const handleclickdivide = () => {
    setPrevvalue([...prevvalue, 0])
  }
  const handleclickmultiplication = () => {
    setPrevvalue([...prevvalue, 0])
  }
  const handleclickminus = () => {
    setPrevvalue([...prevvalue, 0])
  }
  const handleclickplus = () => {
    setPrevvalue([...prevvalue, 0])
  }
  const handleclicklog = () => {
    setPrevvalue([...prevvalue, 0])
  }
  const handleclickcomma = () => {
    setPrevvalue([...prevvalue, 0])
  }
  const handleclickequal = () => {
    setPrevvalue([...prevvalue, 0])
  }
  const updateCalc = value => {
    setCalcvalue(calcvalue + value)
  }
  return (
    <div className="App">
      <h2>Hesap Makinesi</h2>
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
          <Grid.Column onClick={handleclickdel}>
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
          <Grid.Column onClick={() => updateCalc("/")}>
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
          <Grid.Column onClick={() => updateCalc("*")}>
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
          <Grid.Column onClick={() => updateCalc("-")}>
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
          <Grid.Column onClick={() => updateCalc("+")}>
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
          <Grid.Column onClick={handleclickcomma}>
            ,
          </Grid.Column>
          <Grid.Column onClick={handleclickequal}>
            EŞİTTİR
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
