import React from 'react';
//import data from "../assets/jobExpListJson.json"; 



function  ExperiencePage(props) {
    const joblist = props.joblist;
    return (
        <div className="homepage">
        <div className="mainContent timeline-centered">
           {joblist && (
                    joblist.map((job,index) => 
                       
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInRight" key={index}>
                        <div className="timeline-entry-inner">
                        <div className={`timeline-icon color-${index+1}`} >
                            <i className="icon-pen2 fa fa-pencil" aria-hidden="true"></i>
                        </div>
                        <div className="timeline-label">
                            <h2>{job.designation}</h2>
                            <h3>{job.company}</h3>
                            <h4>{job.tenor}</h4>
                            
                            {job.jobResponsibility.map((text, index) => (
                                <li key={index}>
                                        {text}
                                 </li>
                                    ))}
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
       

        )    
}

export default ExperiencePage;