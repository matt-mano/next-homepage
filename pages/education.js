import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Matt Manoleras</title>
                <meta name="description" content="Matt Manoleras - Education" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar />
                <h2 className='title is-2'>Education</h2>
                <div className='columns'>
                    <div className='column is-5'>
                        <Image src="/osuphoto.jpg" alt="OSU Graduation" width={1440} height={1561} />
                    </div>
                    <div className='column is-7'>
                        <p className='has-text-weight-bold'>The Ohio State University</p>
                        <p className='is-italic'>B.S. Electrical and Computer Engineering </p>
                        <p className='is-italic'>(Computer Engineering Specialization)</p>
                        <p>August 2014 - May 2018</p>
                        <p>GPA: 3.4</p>
                    </div>
                </div>
            </main>

            <footer>

            </footer>
        </div>
    )
}
