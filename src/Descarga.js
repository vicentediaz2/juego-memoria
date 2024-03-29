import React from 'react';

const DescargarArchivo = () => {
  const contenidoArchivo = `
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡴⠶⠚⠛⠛⡿⠿⣿⠛⢶⠛⠓⠶⢦⣄⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠶⠛⠉⠀⣀⣀⣴⡶⠾⢤⣚⠉⢣⡈⠳⡀⠀⠀⠹⡆
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⠶⠛⠉⠀⠀⠀⡏⠉⢁⡤⢟⠀⡖⢦⡈⠓⠤⠵⠀⡇⠀⠀⠀⣿
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⡴⠶⠛⠋⠉⠀⠀⣀⠤⠴⡽⠋⠁⠚⣅⠀⠸⡀⢳⠀⠉⠒⠤⠔⡞⠉⠒⠉⢱⣏
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⡴⠶⠚⠋⢉⣀⠀⠀⣀⣠⣎⣁⠚⣁⡤⠖⡁⢸⠉⢦⡈⠳⠤⠃⡸⠀⢀⡴⠒⠴⡥⠒⠒⢦⢀⡿
  ⠀⠀⠀⠀⠀⠀⢀⣠⣤⠶⠛⠋⠉⠀⠀⣀⣀⣰⠋⠀⠉⠉⢠⠏⢁⣀⠙⢧⡀⠀⡇⠈⡇⠀⠙⠒⠤⢲⠗⠒⠚⢀⠖⠋⠀⠀⠀⢸⡟⠀
  ⠀⠀⠀⠀⣴⠞⠋⠁⠀⡰⠓⢦⠤⠒⠚⠀⡸⠋⡉⠓⣖⠉⠹⡀⢸⠀⠱⢄⡈⠉⣡⠜⠓⠤⡤⠒⣒⣋⣀⠞⠁⠀⠀⠀⠀⠀⠀⣾⠃⠀
  ⠀⠀⢀⣼⣧⣀⡞⣉⣉⣡⠞⢉⡉⠳⡊⠉⡇⢸⠉⢦⠈⢦⣀⡇⢸⠄⠀⠀⠉⣹⠃⢀⡠⠤⠤⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠃⠀⠀
  ⠀⢀⣼⠷⢧⡀⠹⡄⠀⢸⠀⡎⠹⡄⠱⡄⡇⢸⣇⡀⠓⢤⣀⣠⣞⠀⡰⢋⣀⣁⡠⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠀⠀⠀⠀
  ⢰⠟⠁⠀⠀⠙⡄⠘⣄⡸⠀⡇⠀⠙⢤⣈⣠⡾⠉⠈⠉⠒⠊⢀⣀⣉⠜⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡶⠋⠁⠀⠀⠀⠀⠀
  ⣿⠀⣆⡀⠀⠀⠘⠦⣀⣀⣴⠥⠤⠄⠠⠔⠚⠁⡰⠚⠒⠤⠜⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠶⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀
  ⢿⡀⡜⠃⠀⢠⠖⠲⠤⠞⡡⠤⣀⣀⡴⠊⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡴⠞⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠈⢳⣌⡀⠀⠈⢆⣠⠒⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡴⠞⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠈⠙⠛⢲⣏⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⠴⠞⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠈⠙⣷⣤⣀⣀⣀⣀⣀⣀⣀⣠⣤⠴⠶⠚⠋⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  
 
  
  ▒█▀▀█ ▒█▀▀▀█ ▒█▀▄▀█ ▒█▀▀█ ▒█░░░ ▒█▀▀▀ ▀▀█▀▀ ▒█▀▀▀█ ▒█▀▀▀█ 
  ▒█░░░ ▒█░░▒█ ▒█▒█▒█ ▒█▄▄█ ▒█░░░ ▒█▀▀▀ ░▒█░░ ▒█░░▒█ ░▀▀▀▄▄ 
  ▒█▄▄█ ▒█▄▄▄█ ▒█░░▒█ ▒█░░░ ▒█▄▄█ ▒█▄▄▄ ░▒█░░ ▒█▄▄▄█ ▒█▄▄▄█

  
  *invitacion valida para una tarde de completos`;

  const descargarArchivo = () => {
    const blob = new Blob([contenidoArchivo], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = url;
    enlaceDescarga.download = 'invitacion.txt';
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
        <p>Completo el juego!</p>
      <button className="boton" onClick={descargarArchivo}>Descargar Invitacion</button>
    </div>
  );
};

export default DescargarArchivo;