import React, {useState, useEffect} from 'react';
import './styles.css';
import {Card, CardProps} from '../../components/Card';

function Home() {
  //estado
  //variavel com conteudo e uma funçao p/ atualizar a variavel
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState<CardProps[]>([]);
  //variaveis dados da api
  const [user, setUser] = useState({name: '', avatar:''})

  //Função de adicionar estudante
  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    };

    setStudents(prevState => [...prevState, newStudent]);
  }
  
  //O useEffect é executado automaticamente sempre que o componente é renderizado.
  useEffect(()=> {
    fetch("https://api.github.com/users/edimilsonbraz")
      .then(response => response.json())
      .then(data => {
        setUser({
          name: data.name,
          avatar: data.avatar_url
        })
      })
    // Os arrays definem quais os estados que o useEffect depende.
  },[])

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="foto do perfil" />
        </div>
      </header>
      <input 
        id="name"
        type="text" 
        placeholder="Digite aqui o nome..."
        onChange={event => setStudentName(event.target.value)}
      />
      <button 
        type="button" onClick={handleAddStudent}> 
          Adicionar
      </button>

      {
        students.map(student => 
          <Card 
            key={student.time}
            name={student.name} 
            time={student.time}
          />
        )
        
      }
    </div>
  )
}

export default Home
