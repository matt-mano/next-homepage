import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Link from 'next/link';

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
        <div className='columns'>
          <div className='column is-5'>
            <Image src="/me.jpg" alt="OSU Graduation" width={3083} height={2625} />
          </div>
          <div className='column is-7 content'>
            <p>Hi I&apos;m Matt Manoleras!</p>
            <p>
              I am currently a full-stack software engineering supervisor leading a cross-functional team of engineers and analysts for Cardinal Health.
              My experience is primarily centered on building backends using ASP.Net and ASP.Net core with frontend frameworks such as Angular and Vue.
            </p>
            <p>
              I also work closely with stakeholders to design solutions, propose features, and lead epics in our Agile environment.
            </p>
            <p>
              I have experience building DevOps pipelines using Jenkins and GitHub actions and managing deployments both using containers and traditional servers.
            </p>
            <p>
              Outside of work, I enjoy triathalons, taking on new home projects, trying new restaruants with my wife, and hanging out with my dog!
            </p>
            <p>
              Check out the <Link href="/contact"><a href="#">contact</a></Link> page to get in touch!
            </p>
          </div>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  )
}
