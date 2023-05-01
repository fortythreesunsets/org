import "./MyOrg.css";

const MyOrg = (props) => {
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="Botón agregar colaborador" onClick={props.changeFormVisibility}/> 
    </section>
}

export default MyOrg;