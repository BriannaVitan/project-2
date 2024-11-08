import { useState, useEffect } from 'react';
import getJobs from '../api/jobsAPI';
import { Job } from '../interfaces/JobInterfaces';

const Jobs: React.FC = () => {
    const [jobsArray, setJobs] = useState<Job[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchJobs = async () => {
            const data = await getJobs();
            if (data) {
                setJobs(data.jobs);
            } else {
                setError('Failed to load jobs.');
            }
        };
        fetchJobs();
    }, []);

console.log(jobsArray);//this logs the data from API

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Job Listings</h1>
            <p></p>
            {/* <ul>
                {jobs.map((job) => (
                    <li key={job.id}>{job.title}</li>
                ))}
            </ul> */}
        </div>
    );
};

export default Jobs;