import React from 'react';
import sklhubImg from '../../assets/sklhub.PNG';
import techBlog from '../../assets/tech-blog.PNG';
import jate from '../../assets/jate.PNG';
import travelPlanner from '../../assets/travel-planner.jpg';
import weatherDashboard from '../../assets/weather-dashboard.png';
import javascriptCodeQuiz from '../../assets/javascript-code-quiz.PNG';

export default function Portfolio() {
    return (
        <div>
            <div className='row'>
                <div className='col-12 col-md-3'>
                    <h2 className='heading-style'>
                        Portfolio
                    </h2>
                </div>
            </div>

            <div className='row'>
                <div className='col-12 col-md-4 portfolio-padding'>
                    <img src={sklhubImg} alt="Screenshot of a website login page" className='portfolio-img'></img>
                    <div className='my-work-title'>
                        <a href="https://warm-citadel-17427.herokuapp.com/" target="_blank" rel="noreferrer">
                            <h3>
                                SKLHub
                            </h3>
                        </a>
                        <a href="https://github.com/CharDige/sklhub" target="_blank" rel="noreferrer">
                            GitHub page
                        </a>
                    </div>
                </div>

                <div className='col-12 col-md-4 portfolio-padding'>
                <img src={jate} alt="Screenshot of a online text editor" className='portfolio-img'></img>
                    <div className='my-work-title'>
                        <a href="https://shielded-escarpment-23102.herokuapp.com/" target="_blank" rel="noreferrer">
                            <h3>
                                Just Another Text Editor (JATE)
                            </h3>
                        </a>
                        <a href="https://github.com/CharDige/Text-editor-PWA" target="_blank" rel="noreferrer">
                            GitHub page
                        </a>
                    </div>
                </div>

                <div className='col-12 col-md-4 portfolio-padding'>
                <img src={techBlog} alt="Screenshot of a tech blog" className='portfolio-img'></img>
                    <div className='my-work-title'>
                        <a href="https://pacific-dusk-52662.herokuapp.com/" target="_blank" rel="noreferrer">
                            <h3>
                                Tech blog
                            </h3>
                        </a>
                        <a href="https://github.com/CharDige/Tech-blog" target="_blank" rel="noreferrer">
                            GitHub page
                        </a>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-12 col-md-4 portfolio-padding'>
                    <img src={travelPlanner} alt="Screenshot of a travel website" className='portfolio-img'></img>
                    <div className='my-work-title'>
                        <a href="https://chardige.github.io/Travel-planner/" target="_blank" rel="noreferrer">
                            <h3>
                                Travel planner
                            </h3>
                        </a>
                        <a href="https://github.com/CharDige/Travel-planner" target="_blank" rel="noreferrer">
                            GitHub page
                        </a>
                    </div>
                </div>

                <div className='col-12 col-md-4 portfolio-padding'>
                <img src={weatherDashboard} alt="Screenshot of a weather dashboard" className='portfolio-img'></img>
                    <div className='my-work-title'>
                        <a href="https://chardige.github.io/Weather-dashboard/" target="_blank" rel="noreferrer">
                            <h3>
                                Weather dashboard
                            </h3>
                        </a>
                        <a href="https://github.com/CharDige/Weather-dashboard" target="_blank" rel="noreferrer">
                            GitHub page
                        </a>
                    </div>
                </div>

                <div className='col-12 col-md-4 portfolio-padding'>
                <img src={javascriptCodeQuiz} alt="Screenshot of a JavaScript code quiz" className='portfolio-img'></img>
                    <div className='my-work-title'>
                        <a href="https://chardige.github.io/JavaScript-fundamentals-code-quiz/" target="_blank" rel="noreferrer">
                            <h3>
                                JavaScript code quiz
                            </h3>
                        </a>
                        <a href="https://github.com/CharDige/JavaScript-fundamentals-code-quiz" target="_blank" rel="noreferrer">
                            GitHub page
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}