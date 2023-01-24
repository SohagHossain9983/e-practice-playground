import { Input, Label } from 'reactstrap'

const Checkbox = (props) => {
    return (
        <div className={props.className}>
            <h4>{props.heading}</h4>
            <div>
                <Input
                    className="shadow-none"
                    type={props.type}
                    id={props.CheckId}
                />
                <Label htmlFor={props.CheckId} role="button" className="ms-2 mb-0">{props.name}</Label>
            </div>
        </div>
    )
}
export default Checkbox