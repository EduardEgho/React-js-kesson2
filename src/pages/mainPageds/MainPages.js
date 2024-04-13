import React from 'react';
import Title from "../../components/title/Title";
import About from "../../components/about/About";

const  aboutInfo = {
    title:'Some Title',
    body:'Some body'

}

    function MainPages(props) {
    return (
        <>
            <Title title = 'Hello World'/>
            <About info={aboutInfo}/>
            <h1>MainPages</h1>
        </>
    );
}

export default MainPages;