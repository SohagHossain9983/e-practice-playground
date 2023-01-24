const CustomInput = ({ label, name, value, changeHandler, type, placeholder, classes, labelClasses }) => {
    return (
        <div className="input-group">
            {label && <label htmlFor={name} className={`form-label ${labelClasses}`}>{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={changeHandler}
                placeholder={placeholder}
                className={`form-control ${classes}`}
            />
        </div>
    )
}
export default CustomInput;