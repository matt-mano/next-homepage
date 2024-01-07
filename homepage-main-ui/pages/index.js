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
              I am currently a full-stack software engineering supervisor leading a team of engineers and analysts for Cardinal Health.
              I also work closely with our users and stakeholders to understand requirements, propose solutions, and lead projects in our Agile environment.

            </p>
            <p>
              My experience is centered on building backends using .NET with frontend frameworks such as Angular and Vue, but I&apos;m always interested in learning new stacks - this site is built with NextJs, Go, Docker, and MongoDB!
              Check out the source code <a className='inline-link' target='_blank' href="https://github.com/matt-mano/next-homepage">here</a>.
            </p>
            <p>
              I have experience building DevOps pipelines using Jenkins and GitHub actions and managing deployments both using containers and traditional servers.
            </p>
            <p>
              Outside of work, I enjoy taking on home projects, travelling to new places, trying interesting food, and hanging out with my dog!
            </p>
            <p>
              Check out the <Link className='inline-link' href="/contact">contact</Link> page to get in touch!
            </p>
          </div>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  )
}
