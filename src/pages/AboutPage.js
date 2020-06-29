import React from 'react';

function AboutPage(props) {

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
			</div>

        </div>
        </div>
    );

}

export default AboutPage;