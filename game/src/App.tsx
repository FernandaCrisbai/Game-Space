import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';



export type User = {
  [key: string]: string;
}
function App() {
  const [banco,setBanco] = React.useState<User>({});


  useEffect(() => {
    axios.get('https://gamealien-4e634-default-rtdb.firebaseio.com//ranking.json')
    .then((response) => {
      setBanco(response.data);
    })

  },[])


  return (
    <div className="Conteiner">
      <h1> GAME SPACE </h1>
      <h2> Ranking </h2>
      {Object.keys(banco).map((key)=>{
        return(
          <div className="formulario"> 
            <table>
              <tr>
               <th> Jogador: {key} </th>
               <th> Pontuação: {banco[key]}</th>
              </tr>
            </table>
          </div>
        )
      })}
        <div className="backgroud">
         
        </div>
    </div>
  );
}

export default App;