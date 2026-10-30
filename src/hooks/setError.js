import { useState } from "react";
function useSetError(){
    const [errorMsg,setErrorMsg] = useState("");
    const  setError = ()=> setErrorMsg("Could not fetch menu. Please try again later.")
    return {
        errorMsg,
        setError
    }
}
export default useSetError