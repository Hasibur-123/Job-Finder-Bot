import React, { useState } from 'react';
import { fetchJobs } from '../api';
import JobCard from './JobCard';

const JobList = () => {
    const [query, setQuery] = useState('');
    const [jobs, setJobs] = useState([]);

    const searchJobs = async () => {
        const results = await fetchJobs(query);
        setJobs(results);
    };

    return (
        <div style={{ padding: '20px' }}>
            <input
                type="text"
                placeholder="Search jobs..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ padding: '10px', width: '300px', marginRight: '10px' }}
            />
            <button onClick={searchJobs} style={{ padding: '10px' }}>Search</button>

            {jobs.map((job) => (
                <JobCard key={job.job_id} job={job} />
            ))}
        </div>
    );
};

export default JobList;
