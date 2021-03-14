import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";


function JobSubmitButton(props) {
    const [isSubmitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (isSubmitting) {
            props.handler().then(() => {
                setSubmitting(false);
            });
        }
    }, [isSubmitting]);

    const handleClick = () => setSubmitting(true);

    return (
        <Button
            style={{backgroundColor: "#E47911", border: 0, width: 200, fontWeight: "bold"}}
            disabled={isSubmitting}
            onClick={!isSubmitting ? handleClick : null}
        >
            {isSubmitting ? 'Submitting…' : 'Submit Job'}
        </Button>
    );
}

export default JobSubmitButton;