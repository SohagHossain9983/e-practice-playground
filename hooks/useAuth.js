
import { action, useStoreActions, useStoreState } from "easy-peasy";
import { useRouter } from "next/router";
import React, {useState} from "react";
import api from "../service";
import jwtDecode from "jwt-decode";

const useAuth = ()=>{

    const [loading, setLoading] = useState(false);
    const [state, setState] =useState ({});
    const [error, setError] =useState(null);

    const router = useRouter();

    const authActions = useStoreActions((action)=> action.auth);
    
    // changeHandler
    const changeHandler = (event)=>{
        setState({
            ...state,
            [event.target.name] : event.target.value
        });
    };
    
    // handleLogin
    const handleLogin = async( ) =>{
        const {email, password} = state;
        try{
            if(!email || !password){
                setError("Email & Password is required field!");
            }
            setLoading(true);
            setError(null);

            const formData = {
                email: email,
                password: password,
            };
            const response = await api.post("/auth/login", formData);
            const token = response.data.data;
            const user = jwtDecode(token);
            authActions.login({
                user,
                token,
            });
            router.push("/");
        }catch(error){
            setError(error.response.data.message);
            console.log('error',error)
        }finally{
            setLoading(false)
        }
    };

    // handleLogout
    const handleLogout = () =>{
        authActions.logout();
        router.push("/");
    };

    // hanegirastation
    // const hanegirastation = async() =>{
    //     const {firstName, lastName, email, password, contact} = state
    //     if(!email || !password){
    //         setError("email and passeord is requred")
    //     }
    //     setError(null)
    //     try{
    //         const registerData = {
    //             firstName,
    //             lastName,
    //             email,
    //             contact,
    //             password
    //         }
    //         const response = await api.post("/auth/register", registerData)
    //         router.push("/signin")
    //     }
    //     catch{
    //         console.log("error",error)
    //     }
    // };
    const hanegirastation = async() =>{
        const {firstName, lastName, email, contact, password} = state

        try{
            if(!email || !password ){
                setError("emainl amd password is requird!")
            }
            setError(null)
            const registerData = {firstName,lastName,email,contact,password}
            const response = await api.post("/auth/registre", registerData)
            router.push('/signin', error)
        }
        catch(error){
            console.log('error', error)
        }
    }

    return{
        state, 
        loading,
        error,
        changeHandler,
        handleLogin,
        handleLogout,
        hanegirastation
    }
}
export default useAuth