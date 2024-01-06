import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'

export async function getServerSideProps() {
    try {
        const res = await fetch(process.env.HOMEPAGE_API_URL + 'skills')
        const skills = await res.json()
        return { props: { skills } }
    } catch {
        return { props: { skills: [] } }
    }

}

export default function Home({ skills }) {
    return (
        <div>
            <Head>
                <title>Matt Manoleras</title>
                <meta name="description" content="Matt Manoleras - Skills" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar />
                <h2 className='title is-2'>Skills</h2>

                {
                    skills.map(s => (
                        <div className='columns' key={s.categoryName}>
                            <div className='column is-4'>
                                <h4 className='title is-4'>{s.categoryName}</h4>
                            </div>
                            <div className='content column is-8'>
                                <ul>
                                    {s.skills.map(skill => <li key={skill}>{skill}</li>)}
                                </ul>
                            </div>
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
