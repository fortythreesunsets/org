import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './App.css';
import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import MyOrg from './components/MyOrg/index.js';
import Team from './components/Team/index.js';
import Footer from './components/Footer/index.jsx';

function App() {
  const [showForm, updateFormVisibility] = useState(false); // El formulario no se muestra al entrar a la página
  const [collaborators, updateCollaborators] = useState([
    {
      id: uuidv4(),
      team: "Front End",
      photo: "https://github.com/harlandlohora.png",
      name: "Harland Lohora",
      position: "Instructor",
      favorite: true
    },
    {
      id: uuidv4(),
      team: "Programación",
      photo: "https://github.com/genesysaluralatam.png",
      name: "Genesys Rondón",
      position: "Desarrolladora de software e instructora",
      favorite: false
    },
    {
      id: uuidv4(),
      team: "UX y Diseño",
      photo: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jeanmarie Quijada",
      position: "Instructora en Alura Latam",
      favorite: false
    },
    {
      id: uuidv4(),
      team: "Programación",
      photo: "https://github.com/christianpva.png",
      name: "Christian Velasco",
      position: "Head de Alura e Instructor",
      favorite: true
    },
    {
      id: uuidv4(),
      team: "Innovación y Gestión",
      photo: "https://github.com/JoseDarioGonzalezCha.png",
      name: "Jose Gonzalez",
      position: "Dev FullStack",
      favorite: false
  }]);

  const [teams, updateTeams] = useState([
    {
      id: uuidv4(),
      teamName: "Programación",
      mainColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      id: uuidv4(),
      teamName: "Front End",
      mainColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      id: uuidv4(),
      teamName: "Data Science",
      mainColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      id: uuidv4(),
      teamName: "DevOps",
      mainColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      id: uuidv4(),
      teamName: "UX y Diseño",
      mainColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      id: uuidv4(),
      teamName: "Mobile",
      mainColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      id: uuidv4(),
      teamName: "Innovación y Gestión",
      mainColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    }
  ]);

  // Enviar como prop a <MyOrg />
  const changeFormVisibility = () => {
    updateFormVisibility(!showForm);
  }

  // Registrar colaborador
  const registerCollaborator = (collaborator) => {
    console.log("Nuevo colaborador", collaborator);
    // Spread operation, crea una copia de los valores actuales y después agrega el colaborador
    updateCollaborators([...collaborators, collaborator]);
  }

  // Eliminar colaborador
  const deleteCollaborator = (id) => {
    // console.log("Eliminar colaborador", id);
    const modifiedCollaborators = collaborators.filter((collaborator) => collaborator.id !== id);
    updateCollaborators(modifiedCollaborators);
  }

  // Actualizar color de equipo
  const updateColor = (color, id) => {
    console.log("Actualizar: ", color, id);
    const updatedColorTeams = teams.map((team) => {
      if (team.id === id) {
        team.mainColor = color;
      }
      return team;
    });
    updateTeams(updatedColorTeams);
  }

  // Crear equipo
  const createTeam = (newTeam) => {
    // console.log(newTeam);
    updateTeams([...teams, { ...newTeam, id: uuidv4() }]);
  }

  // Colaboradores favoritos
  const likeCollaborator = (id) => {
    // console.log("like", id);
    const updatedCollaborators = collaborators.map((collaborator) => {
      if (collaborator.id === id) {
        collaborator.favorite = !collaborator.favorite;
      }
      return collaborator;
    });
    updateCollaborators(updatedCollaborators);
  }

  return (
    <div>
      <Header /> {/* Header también se puede usar: { Header() } ó <Header></Header> */}
      
      {/* {showForm ? <Form /> : <></> } = Operador ternario: condición ? seCumple: noSeCumple .Puede ser reemplazado por condición && seCumple*/}
      {showForm && <Form teams={teams.map((team) => team.teamName)} registerCollaborator={registerCollaborator} createTeam={createTeam}/>}

      <MyOrg changeFormVisibility={changeFormVisibility} />

      { 
        teams.map( (team) => <Team 
      // nombre de prop(puede ser diferente) = referencia a función
          data={team} 
          key={team.teamName} 
          collaborators={collaborators.filter(collaborator => collaborator.team === team.teamName)}
          deleteCollaborator={deleteCollaborator}
          updateColor={updateColor} 
          likeCollaborator={likeCollaborator}
        /> 
        )
      }

      <Footer />

    </div>
  );
}

export default App;
