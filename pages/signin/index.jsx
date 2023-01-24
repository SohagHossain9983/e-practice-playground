import Link from "next/link";
import Breadcrumb from "../../components/breadcrumb";
import CustomInput from "../../components/ui/custom-input";
import useAuth from "../../hooks/useAuth";


const SignIn = () => {
    const {changeHandler, state, handleLogin, loading, error } = useAuth()

    return (
        <div id="signin">
            <Breadcrumb />
            <div className="container">
                <div className="signin-box py-4  mx-auto"> <h5 className="text-center">Sign in</h5>
                    <hr />
                    {error && <h3 className="ps-5 text-danger">{error}</h3>}
                    <div className="py-3 from-area">
                        <CustomInput
                            type={'email'}
                            label={'Email'}
                            name='email'
                            changeHandler={changeHandler}
                            value={state.email}
                        />
                        <CustomInput
                            type={'password'}
                            label={'Password'}
                            name='password'
                            changeHandler={changeHandler}
                            value={state.password}
                        />

                        <div className="box pt-3 d-flex justify-content-between text-muted">
                            <div className="d-flex">
                                <input type="checkbox" />
                                <div className="remember">
                                    <h5 className="ms-2">Remember Me</h5>
                                </div>
                            </div>
                            <h5 className="forgotten">Forgotten password?</h5>
                        </div>

                        <div className="pt-5">
                        <button className="last" onClick={!loading && handleLogin}>{loading ? 'Loading...' : 'Sign in'}</button>
                        </div>

                        <div className="account pt-5">
                            <h4>Don't have an account? </h4>
                        </div>
                        <Link className="btn mt-3 w-100 auth-button d-flex align-items-center justify-content-center" href="/signup">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn;