import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'

const experiences = [
    {
        company: 'Cardinal Health',
        location: 'Dublin, OH (Remote)',
        roles: [
            {
                title: "Software Engineering Supervisor",
                dates: "September 2022 - Present",
                notes: [
                    'Leading a cross-functional team of direct and indirect reports to support pricing and revenue management capabilities, including full-stack applications, automated reporting processes, and data pipelines.',
                    'Architecting and serving as lead developer for “PRISM” – a solution for dynamic pricing strategy modeling and simulation using .NET 7, Angular, PostgreSQL, SAP HANA, and IIS.',
                    'Serving as a lead developer on additional full-stack applications and REST API based microservices, driving both technical and requirements decision making conversations while working in technologies such as .NET, Angular, SQL Server, PostgreSQL, and IIS running on Google Cloud Platform (GCP).',
                    'Leveraging RxJs features and Angular reactive forms to create complex, highly performant user interfaces while allowing users to edit large input data sets effectively.',
                    'Created and updated team Nuget packages to .NET Standard 2.0, allowing for legacy .NET Framework applications and newly created .NET applications to leverage common libraries and reference shared DTOs.',
                    'Collaborating with business analysts and project managers to migrate multiple projects into Agile workflows such as Scrum and Kanban using JIRA. Introduced estimation and planning sessions to help define velocity and facilitate timeline projections for senior leadership.',
                    'Designing and orchestrating integrations between new and existing systems, transforming standalone systems and workflows into a network of interconnected microservices communicating over RESTful APIs.',
                    'Launching and managing servers and databases using Windows and Linux based GCP Compute Engine instances and GCP Cloud SQL PostgreSQL databases.',
                    'Training and developing new team members on programming languages, design patterns, frameworks, best practices, and DevOps tools through mentorship and quarterly “Our Time to Talk” checkpoints.',
                    'Coordinating and leading interview panels for full-stack developers, data analysts, and contractors.'
                ]
            },
            {
                title: "Software Engineer ",
                dates: "March 2020 - September 2022",
                notes: [
                    'Developed full-stack applications and services using .NET Framework, Angular, IIS and SQL Server to support deal modeling, contract compliance, pricing, and revenue management capabilities.',
                    'Created a multi-level inheritance hierarchy for deal modeling in .NET Framework and C#, leveraging polymorphism to implement business-unit specific requirements while implementing common endpoints and interfaces.',
                    'Built dynamic UI components using Angular to support the creation of complex deal models and pricing instructions in a responsive, data-driven user interface.',
                    'Designed an interactive workflow using Angular reactive forms validations to guide users to incomplete areas of complex, multi-page deal models, reducing support questions and improving user experience.',
                    'Managed Elasticsearch and Kibana instances running in Docker on GCP Compute Engine Linux servers to support event logging and exception tracking.',
                    'Served as project lead on the team’s DevOps transformation effort – overseeing a migration from SVN and manual deployment to GitHub repositories and Continuous Integration using Jenkins pipelines.',
                    'Collaborated with finance and sales stakeholders, translating business requirements into Gherkin style JIRA cards while working in a Scrum framework.',
                ]
            },
        ]
    },
    {
        company: 'Kaiser Aluminum',
        location: 'Heath, OH',
        roles: [
            {
                title: "Software Engineer",
                dates: "May 2018 - March 2020",
                notes: [
                    'Developed applications using .NET Core, Vue, and SQL Server to model aluminum remelt blending, optimizing the use of both scrap and new material while ensuring the resulting mix met chemistry requirements.',
                    'Rebuilt complex JQuery user interfaces using Vue and modern JavaScript, increasing performance and interactivity while reducing complexity.',
                    'Introduced dependency injection using to legacy applications using Unity – allowing for unit testing using NUnit and mocking using NSubstitute while simplifying the overall application structure.',
                    'Created responsive applications using Bootstrap to allow for handheld and tablet devices to be used in the inventory management process as an input to the blending application.',
                    'Coordinated with users and management to integrate new software initiatives into the existing manufacturing process with minimal disruption.',
                ]
            },
            {
                title: "Software Engineering Intern",
                dates: "May 2017 - May 2018",
                notes: [
                    'Created and deployed a system using ASP.Net MVC and SQL Server Integration Services to identify coil defects in real-time, allowing management to identify trends and catch issues earlier in a manufacturing run.',
                    'Developed interactive user interfaces using KendoUI, ChartJS, JQuery, and KnockoutJS.'
                ]
            },
        ]
    }
]

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
