import React from 'react';

function About ({info}){
    return(
        <>
            <h1>About</h1>
            <p>{info.title}</p>
            <p>{info.body}</p>
        </>
    )
}


export default About;