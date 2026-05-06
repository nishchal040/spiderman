import React from "react";

function Nav(){
    return(
        <section>
             <nav>
                <img src="./images/spider-logo.png"></img>
                <div class="nav-items">
                    <ul>
                        <li>Home</li>
                        <a href="#about"><li>About Me</li></a>
                    </ul>
                </div>
            </nav>
        </section>
    )
}

export default Nav;