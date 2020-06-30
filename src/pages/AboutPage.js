import React from 'react';
import Button from '@material-ui/core/Button';

function AboutPage(props) {
    const skills =  props.skills;  
    return(
        <div className="homepage">
        <div className="mainContent ">
            <div className="about-desc">
				<span className="heading-meta">About Me</span>
				<h2 className="portfolio-heading">Who Am I?</h2>
				<p><strong>Hi I'm {props.devName}</strong></p>
				<p> I have over 5 years of experiences as a software engineer
                    and have worked at large NGO and financial organizations.
                    While i am proficient as a full-stack developer, my core expertise is about
                    implementing business logics using PL-SQL(Oracle).
                    </p>

                <h4 className="skill">Skils</h4>
                {skills && (
                    skills.map((skill,index) =>  
                    <Button variant="outlined" color="secondary" className="skillButton" key={index}>{skill}</Button>   
                    )
                )}   
			</div>

        </div>
        </div>
    );

}

export default AboutPage;