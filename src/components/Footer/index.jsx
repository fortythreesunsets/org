import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className="socials">
            <a href="https://www.facebook.com/aluracursoslatam">
                <img src="/img/facebook.png" alt="Facebook logo" />
            </a>
            <a href="https://twitter.com/AluraOnline">
                <img src="/img/twitter.png" alt="Twitter logo" />
            </a>
            <a href="https://www.instagram.com/aluralatam/?hl=es">
                <img src="/img/instagram.png" alt="Instagram logo" />
            </a>
        </div>
        <img src="/img/org.png" alt="org logo"/>
        <strong>Desarrollado por Silvia Ruvalcaba</strong>
    </footer>
}

export default Footer;