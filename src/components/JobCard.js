import React from 'react';

const JobCard = ({ job }) => {
    return (
        <div style={{ border: '1px solid #ddd', padding: '15px', margin: '10px 0' }}>
            <h2>{job.job_title}</h2>
            <p>{job.employer_name}</p>
            <p>{job.job_description}</p>
            <a href={job.job_apply_link} target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>
    );
};

export default JobCard;
