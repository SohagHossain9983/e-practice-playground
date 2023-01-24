
import Link from "next/link";
// import { useState } from "react";
import Breadcrumb from "../../components/breadcrumb";
import CustomInput from "../../components/ui/custom-input";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {

    const {state, error, changeHandler, hanegirastation } = useAuth()


  // const [state, setState] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // })


  // const changeHandler = (e) => {
  //   setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  return (
    <div id="signup">
      <Breadcrumb />
      <div className="container">
        <form className="signup-box mx-auto">
          <h5 className="">Sign Up</h5>
          <hr/>
          {error && <h4 className="ps-3 text-denger">{error}</h4>}
          <CustomInput
            type={'input'}
            label={'First Name'}
            name='firstName'
            changeHandler={changeHandler}
            value={state.firstName}
          />

          <CustomInput
            type={'input'}
            label={'Last Name'}
            name='lastName'
            changeHandler={changeHandler}
            value={state.lastName}
          />
          <CustomInput
            type={'email'}
            label={'Email'}
            name='email'
            changeHandler={changeHandler}
            value={state.email}
          />
          <CustomInput
            type={'number'}
            label={'Phone Number'}
            name='contact'
            changeHandler={changeHandler}
            value={state.contact}
          />
          <CustomInput
            type={'password'}
            label={'Password'}
            name='password'
            changeHandler={changeHandler}
            value={state.password}
          />
          {/* <CustomInput
            type={'confirmPassword'}
            label={'Confirm Password'}
            name='password'
            changeHandler={changeHandler}
            value={state.confirmPassword}
          /> */}


          <div className="text">
            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described inour privacy policy.</p>
          </div>
          <Link href="#">
            <div className="pt-3">
              <button onClick={hanegirastation} className="sign" >Sign Up</button>
            </div>
          </Link>
          <div className="account pt-5">
            <h4>Don't have an account? </h4>
          </div>
          <Link className="btn mt-3 w-100 auth-button d-flex align-items-center justify-content-center" href="/signin">Sign in</Link>
        </form>
      </div>
    </div>
  )
}
export default SignUp;