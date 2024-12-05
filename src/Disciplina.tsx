import './Disciplina.css'

type DisciplinaProps = {

    code: string;
    name: string;
    turma: string;
    day: string;
    iniTime: string; 
    endTime: string; 

}



function Disciplina({code, name, turma, day, iniTime, endTime}:DisciplinaProps){

    return <div  className="tabela">

        <div>{code}</div>
        <div>{name}</div>
        <div>{turma}</div>
        <div>{day}</div>
        <div>{iniTime}</div>
        <div>{endTime}</div>
    </div >
}

export default Disciplina;