// import { useEffect, useState } from "react";
// import { useStoreActions, useStoreState } from "easy-peasy";
// import api from "../service";

// // "/categories"
// const useData = (baseurl) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   //   Global States
//   const dataState = useStoreState((state) => state.data.data); 
//   // Global Actions
//   const dataActions = useStoreActions((action) => action.data);

//   const fetchData = async (customUrl) => {
//     setLoading(true);
//     try {
//       const response = await api.get(customUrl);
//       dataActions.setData({
//         key: baseurl,
//         value: response.data.data,
//       });
//     } catch (error) {
//       setError(error.response.data.message);
//       console.log("error", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (!dataState[baseurl]) {
//       fetchData(baseurl);
//     }
//   }, []);

//   return {
//     loading,
//     data: dataState[baseurl],
//     error,
//   };
// };
// export default useData;


import { useState, useEffect } from "react";
import { useStoreState, useStoreActions} from "easy-peasy";
import api from "../service";

const useData = (baseurl) =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    
    // global state
    const dataState = useStoreState((stete) =>stete.data.data);
    // global action
    const dataActions = useStoreActions((action)=>action.data);
    
    const fetchData = async(customUrl) =>{
        setLoading(true);
        try{
            const response = await api.get(customUrl);
            dataActions.setData({
                key: baseurl,
                value: response.data.data,
            });
        }catch(error){
            setError(error.response.data.message);
        }finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        if(!dataState[baseurl]){
            fetchData(baseurl)
        }
    },[]);
    return{
        error,
        loading,
        data: dataState[baseurl]
    }
    
}
export default useData