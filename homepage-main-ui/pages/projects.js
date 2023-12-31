import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Link from 'next/link';

export async function getStaticProps() {
    const res = await fetch('http://localhost:9090/projects')
    const projects = await res.json()
    return { props: { projects } }
}

export default function Home({ projects }) {
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
