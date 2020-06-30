import React from 'react';

function EducationPage(props) {
    const educationList = props.educationList;
    return(
        <div className="homepage">
        <div className="mainContent timeline-centered">
        {educationList && (
                    educationList.map((edu,index) => 
                       
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInRight" key={index}>
                        <div className="timeline-entry-inner">
                        <div className={`timeline-icon color-${index+1}`} >
                            <i className="icon-pen2 fa fa-pencil" aria-hidden="true"></i>
                        </div>
                        <div className="timeline-label">
                            <h2 className="bo1">{edu.degree} - {edu.session}</h2>
                            <h2 className="it1">{edu.major}</h2>
                            <h3 className="it1">{edu.institute}</h3>
                        </div>
                        </div>
                        </article>
                       
                    )
                  
              )} 
         <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
					            <div className="timeline-entry-inner">
					               <div className="timeline-icon color-none">
					               </div>
					            </div>
					         </article>         
        </div>
        </div>
    );

}

export default EducationPage;