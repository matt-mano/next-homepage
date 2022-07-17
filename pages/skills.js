import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'

export default function Home() {
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

                <div className='columns'>

                    <div className='column is-4'>
                        <div className='panel'>
                            <p className='title is-3 has-text-centered panel-heading'>Back-End</p>
                            <div className='content panel-block'>
                                <ul>
                                    <li>ASP.Net Core</li>
                                    <li>ASP.Net Framework</li>
                                    <li>C#</li>
                                    <br />
                                    <li>Java</li>
                                    <li>Kotlin</li>
                                    <li>Spring Boot</li>
                                    <br />
                                    <li>Express</li>
                                    <br />
                                    <li>SQL Server</li>
                                    <li>PostgreSQL</li>
                                    <br />

                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className='column is-4'>
                        <div className='panel'>
                            <p className='title is-3 has-text-centered panel-heading'>Front-End</p>
                            <div className='content panel-block'>
                                <ul>
                                    <li>Angular</li>
                                    <li>Typescript</li>
                                    <br />
                                    <li>Vue</li>
                                    <li>Javascript</li>
                                    <br />
                                    <li>Blazor</li>
                                    <br />
                                    <li>Bootstrap</li>
                                    <li>Bulma</li>
                                    <li>HTML / CSS</li>
                                    <li>Responsive Design</li>
                                    <br />
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='column is-4'>
                        <div className='panel'>
                            <p className='title is-3 has-text-centered panel-heading'>DevOps</p>
                            <div className='content panel-block'>
                                <ul>
                                    <li>Jenkins</li>
                                    <li>GitHub Actions</li>
                                    <li>CI / CD</li>
                                    <br />
                                    <li>Docker</li>
                                    <li>IIS</li>
                                    <li>Nginx</li>
                                    <li>Google Cloud Platform (GCP)</li>
                                    <br />
                                    <li>Git</li>
                                    <li>GitHub</li>
                                    <li>SVN</li>
                                    <br />

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer>

            </footer>
        </div>
    )
}
