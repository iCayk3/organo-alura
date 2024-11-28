import './Rodape.css'

const Rodape = () => {
    return (<footer style={{backgroundImage:'url(imagens/fundo.png)'}} className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imagens/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="imagens/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Cayke Silva. 
            </p>
            <p>
                Layout desenvolvido pela Alura. 
            </p>
        </section>
    </footer>)
}

export default Rodape