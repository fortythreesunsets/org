import "./Collaborator.css";
import { AiFillCloseCircle, AiFillStar, AiOutlineStar } from "react-icons/ai";


const Collaborator = (props) => {
    const { name, position, photo, id, favorite } = props.data;
    const { mainColor, deleteCollaborator, likeCollaborator } = props;
    
    return <div className="collaborator">
        <AiFillCloseCircle className="delete" onClick={() => deleteCollaborator(id)}/>
        <div className="header" style={{ backgroundColor: mainColor }}>
            <img src={photo} alt={name} />
        </div>
        <div className="info">
            <h4>{name}</h4>
            <h5>{position}</h5>
            {favorite ? <AiFillStar color="#ffae30" onClick={() => likeCollaborator(id)} /> : <AiOutlineStar onClick={() => likeCollaborator(id)} />}
        </div>
    </div>
}

export default Collaborator;