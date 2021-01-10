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
        companyName: 'UNPHU - National University Pedro Henriquez Ureña',
        shortName: 'UNPHU',
        startTime: 'dec 2021',
        endTime: 'present',
        duration: '1 months',
        description: 'working as React typeScript developer, building apps with a modern look',
        url: 'https://www.unphu.edu.do'
    },
    {
        url: '',
        companyName: 'oshinstar',
        shortName: 'oshinstar',
        startTime: 'nov 2019',
        endTime: 'apr 2020',
        duration: '6 months',
        description: 'working as front end dev, building rich ui with React TypeScript'
    }
]

export const Experience: React.FC = () => {
    return (
        <section
            id="experience"
            className="relative cover-color"
        >
          
            <div className="flex flex-col xl:px-64 px-5 items-center">
                <h1 className="text-2xl text-white font-medium sm:mt-5 mb-5">Experience</h1>

                <div className="container mt-5">
                    {
                        experiences.map(el => {
                            return <ExperienceCard key={el.companyName} {...el} />
                        })
                    }
                </div>

            </div>
            <div
                className="h-56 xl:h-64 w-full clip-up cover-color p-4 absolute top-0"
                style={{ zIndex: -1 }}
            />
        </section>
    )
}