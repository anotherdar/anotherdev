import * as React from 'react';

interface ExperienceCardProperties {
    companyName: string,
    startTime: string,
    endTime: string,
    duration: string,
    description: string,
    url: string,
    shortName: string
}

export const ExperienceCard: React.FC<ExperienceCardProperties> = (props) => {
    return (
        <div key={props.companyName} className="text-left p-4 mb-5 shadow-lg rounded-sm flex flex-col">
            <div>
                <h1 className="text-gray-800 capitalize"><span className="font-bold">Company name: </span> {props.companyName}</h1>
                <h1 className="text-gray-800 capitalize"><span className="font-bold">Time working: {' '}</span>{props.startTime}{" "} | {' '} {props.endTime}</h1>
                <h1 className="text-gray-800 capitalize"><span className="font-bold">Duration: {' '}</span>{props.duration}</h1>
                <h1 className="text-gray-800 capitalize"><span className="font-bold">Description: {' '}</span>{props.description}</h1>
            </div>
            {props.url !== '' && (
                <a  className="text-white bg-gray-800 px-10 py-1 rounded-sm text-center my-4" href={props.url} target="_blanck">{props.shortName}</a>
            )}
        </div>
    )
}