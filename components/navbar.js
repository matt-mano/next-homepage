import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar({ children }) {
    const router = useRouter();
    const currentRoute = router.pathname;

    return (<div>
        <Link href="/">
            <h1 className='title is-1 has-text-centered' style={{ 'cursor': 'pointer' }}>Matt Manoleras</h1>
        </Link>
        <nav className="navbar" role="navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <Link href="/">
                        <a className={currentRoute === "/"
                            ? "active"
                            : "non-active"}>Home</a>
                    </Link>
                </div>
                <div className="navbar-item">
                    <Link href="/experience">
                        <a className={currentRoute === "/experience"
                            ? "active"
                            : "non-active"}>Experience</a>
                    </Link>
                </div>
                <div className="navbar-item">
                    <Link href="/education">
                        <a className={currentRoute === "/education"
                            ? "active"
                            : "non-active"}>Education</a>
                    </Link>
                </div>
                <div className="navbar-item">
                    <Link href="/skills">
                        <a className={currentRoute === "/skills"
                            ? "active"
                            : "non-active"}>Skills</a>
                    </Link>
                </div>
                <div className="navbar-item">
                    <Link href="/contact">
                        <a className={currentRoute === "/contact"
                            ? "active"
                            : "non-active"}>Contact</a>
                    </Link>
                </div>
            </div>
        </nav>
        <hr />
    </div>
    )
}
