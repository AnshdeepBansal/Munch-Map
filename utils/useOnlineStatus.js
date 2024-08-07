import { useEffect, useState } from "react";

const useOnlineStatus = () =>{
    const[IsOnline,setIsOnline] = useState(true);

    useEffect(()=>{
        console.log("YESSS");
        window.addEventListener("offline",()=>{
            setIsOnline(false);
        });
        window.addEventListener("online",()=>{
            setIsOnline(true);
        });
        
    });
    return IsOnline;
}

export default useOnlineStatus;