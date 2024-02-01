import React, { useState, useEffect, useRef } from 'react';

const Cronometro = ({ duracionDelJuego, juegoCompleto }) => {
  const [tiempoRestante, setTiempoRestante] = useState(0);
  const intervaloRef = useRef(null);

  useEffect(() => {
    if (tiempoRestante < duracionDelJuego && !juegoCompleto) {
      intervaloRef.current = setInterval(() => {
        setTiempoRestante(prevTiempo => prevTiempo + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervaloRef.current);
    };
  }, [tiempoRestante, duracionDelJuego, juegoCompleto]);

  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;

  useEffect(() => {
    if (juegoCompleto) {
      clearInterval(intervaloRef.current);
    }
  }, [juegoCompleto]);

  return (
    <div>
      <h1>{`${minutos}:${segundos < 10 ? '0' : ''}${segundos}`}</h1>
    </div>
  );
};

export default Cronometro;