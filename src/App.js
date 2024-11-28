import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'LOJA PIRABAS',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'LOJA PRIMAVERA',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'LOJA QUATIPURU',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
    {
      nome: 'LOJA BOA VISTA',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'LOJA JAPERICA',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'LOJA SANTAREM',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'LOJA MAGALHÃES BARATA',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time 
                              key={time.nome} 
                              nome={time.nome} 
                              corPrimaria={time.corPrimaria} 
                              corSecundaria={time.corSecundaria}
                              colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                              />)}
      <Rodape />
      
    </div>
    
  );
}

export default App;
