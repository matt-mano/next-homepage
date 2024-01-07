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
                        <h3 className='title is-4' style={{ 'cursor': 'pointer', 'maxWidth': '75%' }}>Matt Manoleras</h3>
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
                        <Link href="/" className={currentRoute === "/"
                            ? "active"
                            : "non-active"}>Home
                        </Link>
                    </div>
                    <div className="navbar-item" onClick={toggleNavbar}>
                        <Link href="/experience" className={currentRoute === "/experience"
                            ? "active"
                            : "non-active"}>Experience
                        </Link>
                    </div>
                    <div className="navbar-item" onClick={toggleNavbar}>
                        <Link href="/education" className={currentRoute === "/education"
                            ? "active"
                            : "non-active"}>Education
                        </Link>
                    </div>
                    <div className="navbar-item" onClick={toggleNavbar}>
                        <Link href="/skills" className={currentRoute === "/skills"
                            ? "active"
                            : "non-active"}>Skills
                        </Link>
                    </div>
                    <div className="navbar-item" onClick={toggleNavbar}>
                        <Link href="/projects" className={currentRoute === "/projects"
                            ? "active"
                            : "non-active"}>Projects
                        </Link>
                    </div>
                    <div className="navbar-item" onClick={toggleNavbar}>
                        <Link href="/contact" className={currentRoute === "/contact" ? "active" : "non-active"}>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
        <hr />
    </div>
    )
}
