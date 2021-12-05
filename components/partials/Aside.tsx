const Aside = () =>{
    function moveToSection(id: string) {
        const doc = document.getElementById(id) || document.body;
        doc.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return(
        <aside className="mb-hide"> 
            <menu>
                <ul>
                    <li id="btn_home" onClick={()=>{moveToSection("home")}} >
                        <img className="icons" src="img/icons/icon_home.svg" alt="home"/></li>

                    <li id="btn_mobile" onClick={()=>{moveToSection("mobile")}} >
                        <img className="icons" src="img/icons/icon_mobile.svg" alt="mobile"/></li>

                    <li id="btn_code" onClick={()=>{moveToSection("code")}} >
                        <img className="icons" src="img/icons/icon_code.svg" alt="code"/></li>

                    <li id="btn_real" onClick={()=>{moveToSection("real")}} >
                        <img className="icons ico_real" src="img/icons/icon_real.svg" alt="real"/></li>
                        
                    <li id="btn_connect" onClick={()=>{moveToSection("connect")}} >
                        <img className="icons" src="img/icons/icon_connect.svg" alt="connect"/></li>
                </ul>
            </menu>
        </aside>
    )
}

export default Aside;