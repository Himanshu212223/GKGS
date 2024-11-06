"use client"

import "@/Css/Hamburger.css";
import Link from "next/link";
import { useState } from "react";

const Hamburger = () => {

    const [hamburger, setHamburger] = useState(false);

    const manageHamburger = () => {
        setHamburger(!hamburger);
    }

    return (
        <section className="hamburger">
            <i className="fa-solid fa-bars bar" onClick={manageHamburger}></i>

            {hamburger && <div className="hamburger-list">
                <i className="fa-solid fa-circle-xmark hamburger-close" onClick={manageHamburger}></i>

                <section className="hamburger-content">
                    <Link className="hamburger-content-items" href={"/India"} onClick={manageHamburger} >About India</Link>
                    {/* <Link className="hamburger-content-items" href={"/"}>Page1</Link>
                    <Link className="hamburger-content-items" href={"/"}>Page1</Link> */}
                </section>

            </div>}
        </section>
    );
}

export default Hamburger;