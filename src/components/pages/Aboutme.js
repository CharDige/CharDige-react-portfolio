import React from 'react';
import myPhoto from '../../assets/my-photo.jpg';

export default function Aboutme() {
    return (
        <div className='row' id='margin-style'>
            <div className='col-12 col-md-3'>
                <h2>
                    About me
                </h2>
            </div>

            <div className='col-12 col-md-9 left-border'>
                <img className='img-styling' src={myPhoto} alt='Person sitting outside holding a pen and book' />
                <p>
                    Full Stack web developer with extensive experience in communications, user experience, and project and change management.
                    <br></br>
                    <br></br>
                    Initially educated at the University of South Australia, completing a Bachelor of Journalism & Professional Writing and a Bachelor of Arts (English & Creative Writing), I have backed this up by currently studying with the University of Adelaide Full Stack Boot Camp.
                    <br></br>
                    <br></br>
                    Professional experience extends within industries including utilities, insurance, and government—specifically the emergency services—working in areas of communications and digital media for over four years.
                    <br></br>
                    <br></br>
                    Passionate about accessibility and delivering seamless user experiences, I'm excited to bring my two highly-sought for qualified backgrounds, and skills in time-management and collaboration, to provide web applications that are designed to meet user needs while also delivering clean and readable web copy.
                    <br></br>
                    <br></br>
                    Here, you can view my portfolio of web applications, as well as options on how you can contact me.
                </p>
            </div>
        </div>
    )
}