import * as React from 'react';
import { ExperienceCard } from '../ExperienceCard';
import { Title } from '../Title';

export type ExperienceData = {
    companyName: string,
    startTime: string,
    endTime: string,
    duration: string,
    description: string,
    url: string,
    shortName: string
}

const experiences: Array<ExperienceData> = [
    {
        url: '',
        companyName: 'oshinstar',
        shortName: 'oshinstar',
        startTime: 'nov 2019',
        endTime: 'apr 2020',
        duration: '6 months',
        description: 'working as front end dev, build rich ui with react typeScript'
    },
    {
        companyName: 'UNPHU - National University Pedro Henriquez Ureña',
        shortName: 'UNPHU',
        startTime: 'dec 2021',
        endTime: 'present',
        duration: '1 months',
        description: 'working as React typeScript developer, building apps with a modern look',
        url: 'https://www.unphu.edu.do'
    }
]

export const Experience: React.FC = () => {
    return (
        <section
            id="experience"
            className="relative"
        >
            <div className="flex flex-col xl:px-40 px-5 items-center">
                <h1 className="text-2xl main-color-txt font-medium sm:mt-5">Experience</h1>

                <div className="container">
                    {
                        experiences.map(el => {
                            return <ExperienceCard key={el.companyName} {...el} />
                        })
                    }
                </div>
                
            </div>
        </section>
    )
}