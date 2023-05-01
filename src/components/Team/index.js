import "./Team.css"
import Collaborator from "../Collaborator"
import hexToRgba from "hex-to-rgba";

const Team = (props) => {
    // Destructuración
    const { mainColor, secondaryColor, teamName, id } = props.data;
    const { collaborators, deleteCollaborator, updateColor, likeCollaborator } = props;

    // const backgroundStyle = { backgroundColor: secondaryColor };
    const backgroundStyle = { backgroundColor: hexToRgba(mainColor, 0.5) };
    const titleStyle = { borderColor: mainColor };

    return <>
        {
            collaborators.length > 0 &&
            <section className="team" style={backgroundStyle}>
                <input
                    type="color"
                    className="input-color"
                    value={mainColor}
                    onChange={(event) => {
                        updateColor(event.target.value, id)
                    }}
                />

            <h3 style={titleStyle}>{teamName}</h3>
                <div className="collaborators">
                    { 
                        collaborators.map( (collaborator, index) => <Collaborator 
                        data={collaborator} 
                        key={index} 
                        mainColor={mainColor}
                        deleteCollaborator={deleteCollaborator}
                        likeCollaborator={likeCollaborator}
                        /> ) 
                    }
                </div>
            </section>
        }
    </>
}

export default Team;