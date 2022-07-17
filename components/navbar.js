import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Navbar({ children }) {
    const router = useRouter();
    const currentRoute = router.pathname;

    const [navbarActive, setNavbarActive] = React.useState(false);

    const toggleNavbar = () => setNavbarActive(!navbarActive);

    return (<div>

        <nav className="navbar" role="navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <Link href="/">
                        <p className='title is-5' style={{ 'cursor': 'pointer', 'maxWidth': '75%' }}>Matt Manoleras</p>
                    </Link>
                </div>
                <a role="button" onClick={toggleNavbar} className={`navbar-burger ${navbarActive ? 'is-active' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
            <div className={`navbar-menu ${navbarActive ? 'is-active' : ''}`}>
                <div className='navbar-end'>
                    <div className="navbar-item" onClick={toggleNavbar}>
                        <Link href="/">
                            <a className={currentRoute === "/"
                                ? "active"
                                : "non-active"}>Home</a>
                        </Link>
                    </div>
                    <div className="navbar-item" onClick={toggleNavbar}>
                        <Link href="/experience">
                            <a className={currentRoute === "/experience"
                                ? "active"
                                : "non-active"}>Experience</a>
                        </Link>
                    </div>
                    <div className="navbar-item" onClick={toggleNavbar}>
                        <Link href="/education">
                            <a className={currentRoute === "/education"
                                ? "active"
                                : "non-active"}>Education</a>
                        </Link>
                    </div>
                    <div className="navbar-item" onClick={toggleNavbar}>
                        <Link href="/skills">
                            <a className={currentRoute === "/skills"
                                ? "active"
                                : "non-active"}>Skills</a>
                        </Link>
                    </div>
                    <div className="navbar-item" onClick={toggleNavbar}>
                        <Link href="/contact">
                            <a className={currentRoute === "/contact"
                                ? "active"
                                : "non-active"}>Contact</a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        <hr />
    </div>
    )
}
