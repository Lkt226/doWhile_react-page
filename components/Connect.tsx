const Connect = () =>{
    return(
        <section id="connect" className="section_t">
            <div id="img_connect" className="banner"></div>
            <h2 className="mob_hide">Aprenda a profissão que vai abrir suas portas para um novo mundo!</h2>
            <form action="submit" method="post">
                <h2>Cadastre-se</h2>
                <label htmlFor="phone">telefone</label>
                <input type="text" name="phone" placeholder="Nome de usuário"/>
                <label htmlFor="password">senha</label>
                <input type="password" name="password" placeholder="Senha"/>
                <button type="submit">Criar conta</button>
            </form>
        </section>
    )
}

export default Connect;