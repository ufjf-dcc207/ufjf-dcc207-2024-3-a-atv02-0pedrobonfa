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
          <div className='boxText' >Matricula: </div>
          <div className='boxText' >Situação: </div>
          </div>
          <div className='boxText' >Nome:</div>
          <div className='boxText' >Curso:</div>
          <div className='boxText' >Período Letivo:</div>

          <Matricula>
          </Matricula>


        </div>
      </div>
      
    </>
  )
}

export default Caixa
