import './estilos/tela-login.css';
export default function TelaLogin(){
    return (
       <div>
            <div class="conteudo">
                <div className="caixa-login">
                    <p>exemplo de Login</p>
                
                    <p id="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laborum cum quis neque dignissimos, soluta enim ipsam, assumenda voluptates, totam molestiae illum maiores natus quod nisi sunt recusandae hic rem?</p>
                
                    <div className="form-group">
                        <input type="text" name="nome" id="inome" placeholder="nome" required/>
                    </div>
                
                    <div className="form-group">
                        <input type="email" name="email" id="iemail" placeholder="email" required/>
                    </div>
                
                    <input type="submit" value="Enviar"/>
                </div>
            </div>
        </div>
    )   
}