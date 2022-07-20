import { Fragment } from "react";
import { Link } from "react-router-dom"

import Logo from "../../assets/MA.png"

const Navigation = () => {

    return (
        <Fragment>
            <nav className="navigation-container">

                {/* Navigation Logo */}
                <div className="navigation-logo">
                    <Link to={"/"} className="navigation-logo-container">
                        <Logo />
                    </Link>
                </div>

                {/* Navigation List */}
                <div className="navigation-links">
                    <Link className="navigation-links">
                        HOME
                    </Link>

                    <Link className="navigation-links">
                        ABOUT ME
                    </Link>

                    <Link className="navigation-links">
                        SKILLS
                    </Link>

                    <Link className="navigation-links">
                        PROJECTS
                    </Link>

                    <Link className="navigation-links">
                        CONTACT
                    </Link>
                </div>
            </nav>
            
        </Fragment>
    );
}

export default Navigation;