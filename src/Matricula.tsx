import Disciplina from "./Disciplina.tsx"
import "./Matricula.css"
import "./Disciplina.tsx"
function Matricula() {

  return (
    <>
        <div className="innerBox">
            <div id="tabela">
            <div className='innerTitle'>Matrículas - 2024/3</div>
            
            <div id="tblDiscplinasTitulo">

                <div>Disciplina</div>
                <div>Nome</div>
                <div id="turmaCed">Turma</div>
                <div>Dia</div>
                <div id="horainitCed">Hora Inicial</div>
                <div>Hora Final</div>

            </div>
            
            <Disciplina code="PKM 101" name="Treino Pokémon" turma="A" day="Segunda-feira" iniTime="10:00" endTime="20:00"/>
            <Disciplina code="PKM 101" name="Treino Pokémon" turma="A" day="Segunda-feira" iniTime="10:00" endTime="20:00"/>
    

        </div>
        </div>
    </>
  )
}

export default Matricula
