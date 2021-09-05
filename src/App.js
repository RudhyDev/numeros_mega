import './App.css';
import Card from './Components/Layouts/Card.jsx';
import Mega from './Components/Mega.jsx'

export default (props) => (
  <div className='App'>
    <Card titulo="Gerador de números para a Mega-Sena" color='#293E6A'>
      <Mega qtdeNumero={6}></Mega>
    </Card>
  </div>
);