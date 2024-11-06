import "@/Css/Footer.css"

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="para">A Blog Page dedicated for GK GS.</p>

            <a href={'https://www.instagram.com/_him.anshu/'} target="_blank" className="fa-brands fa-instagram icon"></a>
        </footer>
    );
}

export default Footer ;