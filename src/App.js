import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './App.css'
import Cronometro from './Cronometro';
import Descarga from './Descarga'

var contador = 0;
const answerArr = ['🍉', '❣️', '🌟', '💞', '🦩', '🌹', '🎀', '🌸', '🎈','🍉', '❣️', '🌟', '💞', '🦩', '🌹', '🎀', '🌸', '🎈']
  .map((n) => {
    return {
      id: uuidv4(),
      open: false,
      value: n
    };
  })
  .sort(() => Math.random() - 0.5);
export default function App() {
  const [juegoCompleto, setJuegoCompleto] = useState(false);
  const [answer, setAnswer] = useState([...answerArr]);
  const [itemIds, setItemIds] = useState([]);
  const onClick = (id) => {
    if (!itemIds.includes(id)) {
      setItemIds((itemIds) => [...itemIds, id]);
    }
    const index = answer.findIndex((a) => a.id === id);
    setAnswer((answer) => {
      const ans = [...answer];
      ans[index].open = true;
      return ans;
    });
  };
  useEffect(() => {
    if (itemIds.length === 2) {
      const item1Index = answer.findIndex((a) => a.id === itemIds[0]);
      const item2Index = answer.findIndex((a) => a.id === itemIds[1]);
      console.log("test1")
      if (answer[item1Index].value !== answer[item2Index].value) {
        setAnswer((answer) => {
          const ans = [...answer];
          ans[item1Index].open = false;
          ans[item2Index].open = false;
          console.log("test2")
          return ans;
        });
      } else {
        contador += 1
      }
    }
  }, [itemIds, answer]);
  useEffect(() => {
    if (itemIds.length === 2) {
      setItemIds([]);
    }
    console.log(contador)
  }, [itemIds]);
  useEffect(() =>{
    if (contador == 9)
      setJuegoCompleto(true);
  })
  return (
    <div className="App">
      <h1>Que haremos hoy?</h1>
      <p>Resuelva un este pequeño juego para averiguarlo</p>
      <Cronometro duracionDelJuego={600} juegoCompleto={juegoCompleto} />
      {juegoCompleto && <Descarga></Descarga>}
      <div className="tablero">
        {answer.map((a) => {
          return (
            <div key={a.id} className="tarjeta" onClick={() => onClick(a.id)}>
              {a.open ? <div>{a.value}</div> : <div>❔</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
