import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'reactstrap';


const CustomButton = ({ classes, btnText, btnAction, btnIcon, type, variant, size }) => {

    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        dark: 'btn-dark',
        info: 'btn-info',
        danger: 'btn-danger',
        success: 'btn-success',
        warning: 'btn-warning',
    }
    const sizes = {
        small: 'btn-sm',
        medium: 'btn-md',
        large: 'btn-lg',
        full: 'w-100',
    }


    return (
        <Button
            className={`btn ${sizes[size]} ${variants[variant]} ${classes}`}
            onClick={btnAction}
            type={type}
        >
            {btnIcon && <FontAwesomeIcon className="pe-2" icon={btnIcon} />}
            {btnText}
        </Button>
    )
}
export default CustomButton