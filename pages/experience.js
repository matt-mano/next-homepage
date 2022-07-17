import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'

export default function Home() {
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

                <div className='columns'>
                    <div className='column is-4'>
                        <h3 className='title is-3'>Cardinal Health</h3>
                        <p className='is-italic'>Software Engineer</p>
                        <p>March 2020 - Current</p>
                        <p>Dublin, OH</p>
                    </div>
                    <div className='column is-8 content'>
                        <ul>
                            <li>Developing applications using .NET Framework and Angular to support deal modeling, customer price setup, and revenue management</li>
                            <li>Coordinating with stakeholders to lead epics, develop processes, and define requirements in an agile environment</li>
                            <li>Implementing improvements to DevOps practices to streamline workflows with continuous integration using GitHub and Jenkins</li>
                        </ul>
                    </div>
                </div>
                <hr />

                <div className='columns'>
                    <div className='column is-4'>
                        <h3 className='title is-3'>Kaiser Aluminum</h3>
                        <p className='is-italic'>Software Engineer</p>
                        <p>May 2018 - March 2020</p>
                        <p>Heath, OH</p>
                    </div>
                    <div className='column is-8 content'>
                        <ul>
                            <li>Developed applications using .NET Core and Vue to manage inventory and optimize scrap yields, track incoming and outgoing traffic, and analyze data</li>
                            <li>Coordinated with users and management to integrate new software into the existing manufacturing process</li>
                        </ul>
                    </div>
                </div>

                <div className='columns'>
                    <div className='column is-4'>
                        <p className='is-italic'>Software Engineering Intern</p>
                        <p>May 2017 - May 2018</p>
                        <p>Heath, OH</p>
                    </div>
                    <div className='column is-8 content'>
                        <ul>
                            <li>Created and deployed a system using ASP.Net MVC to identify coil defects</li>
                            <li>Integrated with legacy sensors to obtain data for defect monitoring</li>
                        </ul>
                    </div>
                </div>
                <hr />

                <div className='columns'>
                    <div className='column is-4'>
                        <h3 className='title is-3'>Public Utilities Commission of Ohio</h3>
                        <p className='is-italic'>Electrical Engineering Intern</p>
                        <p>May 2016 - October 2016</p>
                        <p>Columbus, OH</p>
                    </div>
                    <div className='column is-8 content'>
                        <ul>
                            <li>Assisted with data warehouse design, testing of public-facing applications, and tracking incoming case feedback geographically.</li>
                        </ul>
                    </div>
                </div>
                <hr />


                <div className='columns'>
                    <div className='column is-4'>
                        <h3 className='title is-3'>Rolls Royce Nuclear</h3>
                        <p className='is-italic'>Optimization Engineering Intern</p>
                        <p>May 2014 - August 2014, May 2015 - August 2015</p>
                        <p>Moon, PA</p>
                    </div>
                    <div className='column is-8 content'>
                        <ul>
                            <li>Developed equivalence packages and action plans to address part obsolescence for safety-related systems.</li>
                        </ul>
                    </div>
                </div>
                <hr />
            </main>

            <footer>

            </footer>
        </div>
    )
}
