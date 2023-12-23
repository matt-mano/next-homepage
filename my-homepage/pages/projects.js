import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Link from 'next/link';

const projects = [
    {
        title: "This Website",
        link: "https://mattmanoleras.com",
        description: "This website!  Built using NextJs for faster page loads and hosted in a Docker container.",
        github: "https://github.com/matt-mano/next-homepage",
        stack: [
            "NextJs",
            "React",
            "Bulma",
            "Docker",
            "GitHub Actions",
            "Nginx"
        ]
    },
    {
        title: "Workout Tracker",
        link: "https://workouttracker.dev.mattmanoleras.com",
        description: "Built as an excercise in learning Blazor and Authentication and an excercise in getting more exercise.",
        stack: [
            ".NET",
            "Blazor",
            "Bootstrap",
            "JWT Authentication",
            "Docker",
            "GitHub Actions",
            "PostgreSQL",
            "Nginx"
        ]
    },
    {
        title: "Wedding Website",
        description: "In collaboration with my #1 stakeholder!  Our wedding website was built leveraging GitHub actions to allow for easy updates and logged interactions and registry clicks to PostgreSQL using an express backend.",
        link: "https://wedding.korramatt.com",
        stack: [
            "Vue",
            "Express",
            "Bulma",
            "Docker",
            "GitHub Actions",
            "PostgreSQL",
            "Nginx"
        ]
    }
]

export default function Home() {
    return (
        <div>
            <Head>
                <title>Matt Manoleras</title>
                <meta name="description" content="Matt Manoleras" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar />
                <h2 className='title is-2'>Projects</h2>

                {
                    projects.map(p => (
                        <div key={p.title}>
                            <h3 className='title is-3'>{p.title}</h3>
                            <p>{p.description}</p>
                            <a className='link has-text-bold' href={p.link}>{p.link}</a><br />
                            {p.github ? <a href={p.github}>GitHub</a> : ''}
                            <div className='content'>
                                <ul>
                                    {p.stack.map(s => <li key={s}>{s}</li>)}
                                </ul>
                            </div>
                            <hr />
                        </div>
                    ))
                }

                <p>And many more even less finished than these!</p>
            </main>

            <footer>

            </footer>
        </div>
    )
}
