import React, {useEffect, useState} from 'react';
import Job from './Job'
import {ListGroupItem} from "react-bootstrap";


function JobList(props) {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:7000/jobs').then(res => res.json()).then(data => {
                setJobs(data)
            });
        }, 2000);
    });

    return (
        <ListGroupItem style={{border: "white", padding: 0, paddingBottom: 20}}>
            {jobs.map(job => (
                <Job id={job.id} name={job.name} state={job.state}/>
            ))}
        </ListGroupItem>
    );
}

export default JobList;


