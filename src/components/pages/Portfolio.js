import React from 'react';
import sklhubImg from '../../assets/sklhub.PNG';

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
                    Portfolio 2
                </div>

                <div className='col-12 col-md-4 portfolio-padding'>
                    Portfolio 3
                </div>
            </div>

            <div className='row'>
                <div className='col-12 col-md-4'>
                    Portfolio 4
                </div>

                <div className='col-12 col-md-4'>
                    Portfolio 5
                </div>

                <div className='col-12 col-md-4'>
                    Portfolio 6
                </div>
            </div>
        </div>
    )
}