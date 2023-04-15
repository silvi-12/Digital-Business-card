import React from "react";
import me from "./img/me.jpg"

export default function Header() {
    return (
        <header>
            <img src={me} alt="silvi" />
            <h1>Silvi Gupta</h1>
            <h3>Frontend Developer</h3>
            <div className="header-button">
                <button>
                    <i className="fab fa-envelope" fixedWidth></i>
                    <a href="mailto: guptasilvi123@gmail.com">Email</a>
                </button>
            </div>
        </header>
    )
}