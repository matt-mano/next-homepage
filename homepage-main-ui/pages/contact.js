import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Matt Manoleras</title>
                <meta name="description" content="Matt Manoleras - Contact" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar />
                <h2 className='title is-2'>Contact</h2>
                <div className='columns'>
                    <div className='column is-4 is-2-desktop is-offset-3-desktop has-text-centered'>
                        <a href="mailto:matt.manoleras@gmail.com">
                            <Image alt="email logo" src="/email.png" width={64} height={64} />
                            <p className='is-3'>Email</p>
                        </a>
                    </div>
                    <div className='column is-4 is-2-desktop has-text-centered'>
                        <a href="https://www.linkedin.com/in/matthew-manoleras/">
                            <Image alt="linkedin logo" src="/linkedin.png" width={64} height={64} />
                            <p className='is-3'>LinkedIn</p>
                        </a>
                    </div>
                    <div className='column is-4 is-2-desktop has-text-centered'>
                        <a href="https://github.com/matt-mano/">
                            <Image alt="github logo" src="/github.png" width={64} height={64} />
                            <p className='is-3'>GitHub</p>
                        </a>
                    </div>
                </div>
            </main>
            <footer>
            </footer>
        </div>
    )
}
