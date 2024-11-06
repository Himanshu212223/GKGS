import '@/Css/NavBar.css'

import Link from "next/link";
import Hamburger from "./Hamburger";

const NavBar = () => {
    return (
        <nav className="navBar">
            {/* Logo */}
            <Link href={"/"}>Geeky</Link>

            {/* Services */}
            <div className="services">
                <Link className="services-items" href={"/India"}>About India</Link>
                {/* <Link className="services-items" href={"/"}>Page2</Link>
                <Link className="services-items" href={"/"}>Page3</Link>
                <Link className="services-items" href={"/"}>Page4</Link> */}
            </div>

            {/* Hamburger */}
            <Hamburger />
        </nav>
    );
}

export default NavBar;