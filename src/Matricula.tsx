import "./Matricula.css"
function Matricula() {

  return (
    <>
        <div className="innerBox">
            <table id="tabela">
            <th className='innerTitle'>Mathículas - 2024/3</th>
                <tr id="TabTitulos">
                    <td>Disciplina</td>
                    <td>Nome</td>
                    <td>Turma</td>
                    <td>Dia</td>
                    <td>Hora inicial</td>
                    <td>Hora final</td>
                </tr>
                <tr>
                    <td>PKM101</td>
                    <td>Tipos de Pokémon</td>
                    <td>01A</td>
                    <td>Segunda-Feira</td>
                    <td>13:00</td>
                    <td>16:00</td>
                </tr>
                <tr>
                    <td>PKM102</td>
                    <td>Montando um time</td>
                    <td>01A</td>
                    <td>Terça-Feira</td>
                    <td>14:00</td>
                    <td>20:00</td>
                </tr>
            </table>
        </div>
    </>
  )
}

export default Matricula
