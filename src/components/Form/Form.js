import "./Form.css";
import InputField from "../InputField";
import OptionList from "../OptionList";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {
    // Estado que se encarga de guardar y actualizar los valores del nombre, puesto y url de imagen
    const [name, updateName] = useState("");
    const [position, updatePosition] = useState("");
    const [photo, updatePhoto] = useState("");
    const [team, updateTeam] = useState("");

    const [teamName, updateTeamName] = useState("");
    const [color, updateColor] = useState("");

    const { registerCollaborator, createTeam } = props;

    const manageSubmit = (event) => { 
        event.preventDefault(); // Evitar que haga refresh toda la página
        let dataToSend = {
            name,
            position,
            photo,
            team
        }
        registerCollaborator(dataToSend);
        // console.log(dataToSend);
    }

    const manageNewTeam = (event) => {
        event.preventDefault();
        createTeam({teamName, mainColor: color});
    }

    return <section className="form">
        <form onSubmit={manageSubmit}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <InputField labelTitle="Nombre" placeholder="Ingresar nombre" required inputValue={name} updateInputValue={updateName} />
            <InputField labelTitle="Puesto" placeholder="Ingresar puesto" required inputValue={position} updateInputValue={updatePosition} />
            <InputField labelTitle="Foto" placeholder="Ingresar enlace de foto" required inputValue={photo} updateInputValue={updatePhoto} />
            <OptionList value={team} updateTeam={updateTeam} teams={props.teams}/>
            <Button buttonTitle="Crear colaborador"/>
        </form>

        <form onSubmit={manageNewTeam}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <InputField labelTitle="Título" placeholder="Ingresar título" required inputValue={teamName} updateInputValue={updateTeamName} />
            <InputField labelTitle="Color" placeholder="Ingresar color en hexadecimal" required type="color" inputValue={color} updateInputValue={updateColor} />
            <Button buttonTitle="Crear equipo"/>
        </form>
    </section>
}

export default Form;