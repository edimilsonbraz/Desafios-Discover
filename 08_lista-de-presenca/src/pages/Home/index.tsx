import React, {useState} from 'react';
import './styles.css';
import {Card} from '../../components/Card';

function Home() {
  const [studentName, setStudentName] = useState();
  
  return (
    <div className="container">
      <header>
        <h1>Nome: {studentName}</h1>
        <div>
          <strong>Edimilson</strong>
          <img src="https://github.com/edimilsonbraz.png" alt="foto do perfil" />
        </div>
      </header>
      <input 
        id="name"
        type="text" 
        placeholder="Digite aqui o nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button 
        type="button" > 
          Adicionar
      </button>

      <Card name="Elivelton" time="09:30:10"/>
      <Card name="Aline Barros" time="09:35:05"/>
    </div>
  )
}

export default Home
