import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

export type User = {
  [key: string]: string;
}



function App() {
  const [banco, setBanco] = useState<User>({})

  useEffect(()=> {
    axios.get ('https://gamealien-4e634-default-rtdb.firebaseio.com//ranking.json').then((response: { data: React.SetStateAction<User>; }): void => { setBanco(response.data); })
  })
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
              <th>Pontuação: {banco[key]}</th>
              

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
