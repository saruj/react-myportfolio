import React from 'react';
import '../assets/css/homePage.css';
import logo from '../assets/images/Saruj.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

function HomePage(props) {
    const styles = {

        largeIcon: {
          width: 20,
          height: 20,
        },
      
      };

    const contactList = props.contacts;
    return(
        <div className="homepage">
        <div className="bg-splash-gray px3 py3 border-bottom border-light-gray">
            <div className="center">
                <img alt={props.developerName}
                        className="border bg-white p1 border-light-gray circle square-100 lazyloaded" 
                        src={logo} />  
                <h1 className="page-title mt0 mb1">{props.developerName}</h1>
                <h2>Software Engineer</h2>  
                <address>
                        <a href={"mailto:" + props.email}>{props.email}</a> 
                        <p><strong>{props.contactNo}</strong></p>
                </address>

            </div>
            
        </div>

        <div className="contacts">
            <h5>Contacts</h5>
            {contactList.map((text, index) => (
                                <ul key={index}>
                                        <a href={text.facebook}><FacebookIcon iconstyle={styles.largeIcon}/></a>
                                        |<a href={text.insta}><InstagramIcon iconstyle={styles.largeIcon}/></a>
                                        |<a href={text.github}><GitHubIcon iconstyle={styles.largeIcon}/></a>
                                        |<a href={text.mail}><EmailIcon iconstyle={styles.largeIcon}/></a>
                                 </ul>
                                    ))}
            
            
        </div>

        </div>
    );

}

export default HomePage;