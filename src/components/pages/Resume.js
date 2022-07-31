import React from 'react';
import resume from '../../assets/charlotte-d-resume.pdf';

export default function Resume() {
    return (
        <div className='row' id='margin-style'>
            <div className='col-12 col-md-3'>
                <h2 className='heading-style'>
                    Resume
                </h2>
            </div>

            <div className='col-12 col-md-9 left-border'>
                <p>
                    <a href={resume} target='_blank' rel="noreferrer">Download a copy of my resume</a>.
                    <br></br>
                    <br></br>
                    <h3>
                        Coding languages and tools
                    </h3>
                    <ul>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            jQuery
                        </li>
                        <li>
                            Bootstrap
                        </li>
                        <li>
                            Express.js
                        </li>
                        <li>
                            Node.js
                        </li>
                        <li>
                            Handlebars
                        </li>
                        <li>
                            MySQL
                        </li>
                        <li>
                            Heroku
                        </li>
                        <li>
                            GraphQL
                        </li>
                        <li>
                            MongoDB
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    )
}