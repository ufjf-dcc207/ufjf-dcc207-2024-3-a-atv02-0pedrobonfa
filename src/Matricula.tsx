import Disciplina from "./Disciplina.tsx"
import "./Matricula.css"
import "./Disciplina.tsx"
function Matricula() {

  return (
    <>
        <div className="innerBox">
            <div id="tabela">
            <div className='innerTitle'>Matrículas - 2024/3</div>
            
            
            <Disciplina code="Disciplina" name="Nome" turma="Turma" day="Dia" iniTime="Hora Inicial" endTime="Hora Final"/>
            <Disciplina code="PKM 101" name="Treino Pokémon" turma="A" day="Segunda-feira" iniTime="10:00" endTime="20:00"/>
            <Disciplina code="PKM 102" name="Tipos de Pokémon" turma="A" day="Segunda-feira" iniTime="10:00" endTime="20:00"/>
    

        </div>
        </div>
    </>
  )
}

export default Matricula
