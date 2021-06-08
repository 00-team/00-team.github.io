import React from 'react'

const Home = () => {
    return (
        <>
            <header className="header-home" style={{ backgroundImage: `url("/static/img/header-bg.png")` }}></header>
            
            <div className="conects">
                <div className="about">
                    <h2>About</h2>
                    <p>A Team of Creators ...</p>
                </div>
                
                <div className="projects">
                    <h2>Projects</h2>
                    <h3 className="no-project">Noting so far</h3>
                </div>
            </div>  
        </>
    )
}

export default Home
