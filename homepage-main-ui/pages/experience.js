import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar';

export async function getStaticProps() {
    const res = await fetch(process.env.HOMEPAGE_API_URL + 'experiences')
    const experiences = await res.json()
    return { props: { experiences } }
}

export default function Home({ experiences }) {
    return (
        <div>
            <Head>
                <title>Matt Manoleras</title>
                <meta name="description" content="Matt Manoleras - Experience" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar />
                <h2 className='title is-2'>Work Experience</h2>

                {
                    experiences.map(exp => (
                        <div key={exp.company}>
                            <div className='columns'>
                                <div className='column is-4'>
                                    <h3 className='title is-3'>{exp.company}</h3>
                                    <p className='is-italic'>{exp.location}</p>
                                </div>
                            </div>
                            {
                                exp.roles.map(role => (
                                    <div key={role.title} className='columns'>
                                        <div className='column is-4'>
                                            <h4 className='title is-4'>{role.title}</h4>
                                            <p>{role.dates}</p>
                                        </div>
                                        <div className='column is-8 content'>
                                            <ul>
                                                {
                                                    role.notes.map(note => <li key={note}>{note}</li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                ))
                            }
                            <hr />
                        </div>
                    ))
                }
            </main>

            <footer>

            </footer>
        </div>
    )
}
