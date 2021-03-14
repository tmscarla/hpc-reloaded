import React, {useState} from "react";
import {FormControl, InputGroup} from "react-bootstrap";
import JobSubmitButton from "./JobSubmitButton";


function JobForm(props) {
    const [jobName, setJobName] = useState("");

    const changeHandler = (event) => {
        setJobName(event.target.value);
    }

    const onSubmitPressedHandler = () => {
        const jobId = Math.floor(Math.random() * 9000) + 1000;  // Random integer between 1000 and 9999
        const jobState = "Pending"
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: jobId, name: jobName, state: jobState})
        };

        fetch('http://localhost:7000/jobs', requestOptions)

        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    return (
        <div id="form">
            <InputGroup className="mb-3">
                <FormControl onChange={changeHandler}
                    placeholder="Job Name"
                    aria-label="Job Name"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <JobSubmitButton jobName={jobName} handler={onSubmitPressedHandler}/>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
}

export default JobForm;