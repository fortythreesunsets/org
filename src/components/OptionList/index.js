import "./OptionList.css";

const OptionList = (props) => {
    const handleChange = (event) => {
        console.log("Cambio",event.target.value);
        props.updateTeam(event.target.value);
    }

    return <div className="option-list">
        <label>Equipos</label>
            <select value={props.value} onChange={handleChange}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                { props.teams.map( (team, index) => <option key={index} value={team}>{team}</option> ) } 
            </select>
    </div>
}

export default OptionList;