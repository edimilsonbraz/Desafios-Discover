import {Card} from '../../components/Card';
import './styles.css';

function Home() {
  
  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>Edimilson</strong>
          <img src="https://github.com/edimilsonbraz.png" alt="foto do perfil" />
        </div>
      </header>
      <input 
        type="text" 
        placeholder="Digite aqui o nome..."
      />
      <button 
        type="button" > 
          Adicionar
      </button>

      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Home
