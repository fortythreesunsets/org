import "./InputField.css"

const InputField = (props) => {
    const placeholderModified = `${props.placeholder}...`;
    // Destructuración
    const { type = "text" } = props;

    const handleChange = (event) => {
        props.updateInputValue(event.target.value);
    }

    return <div className={`field ${type}-field`}>
        <label>{props.labelTitle}</label>
        <input placeholder={placeholderModified} required={props.required} value={props.inputValue} onChange={handleChange} type={type} />
    </div>;
}

export default InputField;