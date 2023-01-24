
import CustomInput from "../ui/custom-input"

const CheckOutForm = ()=>{
    return(
        <form className="p-4" id="CheckOutForm">
            <div className="row pb-4">
                <div className="col-6">
                    <CustomInput
                        classes={'checkout-input shadow-none'}
                        type={'text'}
                        label={'First Name'}
                        name='firstName'
                    />
                </div>
                <div className="col-6">
                    <CustomInput
                        classes={'checkout-input shadow-none'}
                        type={'text'}
                        label={'Last Name'}
                        name='lastName'
                    />
                </div>
            </div>
            <div className="row pb-4">
                <div className="col-6">
                    <CustomInput
                        classes={'checkout-input shadow-none'}
                        type={'number'}
                        label={'Phone Number'}
                        name='phoneNumber'
                    />
                </div>
                <div className="col-6">
                    <CustomInput
                        classes={'checkout-input shadow-none'}
                        type={'email'}
                        label={'Email'}
                        name='email'
                    />
                </div>
            </div>
            <div className="pb-4">
                <CustomInput
                    classes={'checkout-input shadow-none'}
                    type={'text'}
                    label={'Street address'}
                    name='StreetAddress'
                />  
            </div>
            <div>
                <CustomInput
                    classes={'checkout-input shadow-none'}
                    type={'text'}
                    label={'Note'}
                    name='note'
                /> 
            </div>
        </form> 
    )
}
export default CheckOutForm    