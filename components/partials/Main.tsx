import Home from "../Home"
import Mobile from "../Mobile"
import Code from "../Code"
import Real from "../Real"
import Connect from "../Connect"



import { useEffect } from "react";

const Main = () =>{

    useEffect(()=>{
        require("../../services/scrollreveal.tsx")()
    })

    return(
        <main>
            <Home />
            <Mobile />
            <Code />
            <Real />
            <Connect />
        </main>
    )
}

export default Main;