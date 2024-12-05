import './Caixa.css'
import './Matricula.css'
import Matricula from "./Matricula";

function Caixa() {

  return (
    <>
      <div>
        <div className ='box'>

          <p className='title'>Comprovante de matrícula</p>
          <div id='matricula'>
          <div className='boxText' >Matricula: 001</div>
          <div className='boxText' >Situação: Ativa </div>
          </div>
          <div className='boxText' >Nome: Red</div>
          <div className='boxText' >Curso: Mestre Pokémon</div>
          <div className='boxText' >Período Letivo: 2024.3</div>

          <Matricula>
          </Matricula>


        </div>
      </div>
      
    </>
  )
}

export default Caixa
