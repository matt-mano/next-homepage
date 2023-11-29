import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'

const skills = [
    {
        categoryName: 'Programming Languages',
        skills: [
            `C#`,
            `TypeScript`,
            `JavaScript`,
            `SQL`,
            `Python`,
            `Java`,
            `Kotlin`,
            `HTML/CSS`
        ]
    },
    {
        categoryName: 'Backend Frameworks / Tools',
        skills: [
            `.NET`,
            `.NET Core`,
            `.NET Framework`,
            `NUnit/NSubstitute`,
            `Spring Boot`,
            `Express`,
            `Microservices`,
        ]
    },
    {
        categoryName: 'Frontend Frameworks / Tools',
        skills: [
            `Angular`,
            `Vue`,
            `NodeJs / NPM`,
            `Blazor`,
            `Bootstrap`,
            `Cypress`,
            `Jasmine`,
            `Karma`,
            `JQuery`,
        ]
    },
    {
        categoryName: 'Databases',
        skills: [
            `SQL Server`,
            `PostgreSQL`,
            `GCP Big Query`,
            `Elasticsearch`,
        ]
    },
    {
        categoryName: 'DevOps / Cloud Tools',
        skills: [
            `Jenkins`,
            `GitHub Actions`,
            `Docker`,
            `Git`,
            `SVN`,
            `GCP Cloud SQL`,
            `GCP Compute Engine`,
        ]
    },
    {
        categoryName: 'Project Managment Tools',
        skills: [
            `JIRA`,
            `Confluence`,
            `Agile`,
            `Scrum`,
            `Kanban`,
            `ServiceNow`,
        ]
    },
    {
        categoryName: 'Software',
        skills: [
            `Visual Studio`,
            `VS Code`,
            `SQL Server Management Studio`,
            `PG Admin`,
            `GCP Console`,
            `PowerShell`,
            `Bash`,
        ]
    },
]

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
