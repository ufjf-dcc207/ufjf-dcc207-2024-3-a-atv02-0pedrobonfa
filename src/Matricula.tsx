import Disciplina from "./Disciplina.tsx"
import "./Matricula.css"
import "./Disciplina.tsx"
function Matricula() {

  return (
    <>
        <div className="innerBox">
            <div id="tabela">
            <div className='innerTitle'>Matrículas - 2024/3</div>
            <Disciplina code="PKM 101" name="Treino Pokémon" turma="A" day="Segunda-feira" iniTime="10:00" endTime="20:00"/>
            </div>
        </div>
    </>
  )
}

export default Matricula
