import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import expService from './assets/jobExpList';
//import logo from './logo.svg';
import './App.css';
import { createMuiTheme, withStyles,  ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple, lightBlue } from '@material-ui/core/colors';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
// import ContactPage from './pages/ContactPage';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import FooterPage from './pages/FooterPage';



const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const theme = createMuiTheme({
  palette: {
    btn1 : lightBlue,
    btn2 : green
  },
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Manabendra Saruj',
      developerName: "Manabendra Saruj",
      email: "msaruj@gmail.com",
      skills:["Java","Spring", "Struts2", "Goovy On Grails", "Python","Oracle","Mysql","PostGreSql","Javascript"
              ,"React","HTML","CSS","Bootstrap"],
      toggleClass:"",
      contacts: [{
        "facebook": "https://www.facebook.com/manabendra.saruj"
        , "twiter": "#"
        , "github": "https://github.com/saruj"
        , "insta": "https://www.instagram.com/m_saruj/"
        , "mail": "msaruj@gmail.com"
      }],
      contactNo: "01670-31**31",
      footerTitle: "msaruj@gmail.com",
      expList: [
        {
          "jobid": "1",
          "company": "Dutch-Bangla Bank Ltd.",
          "designation": "Software Engineer(Senior Officer)",
          "tenor": "14 July, 2016 - Present.",
          "jobResponsibility": [" Implement business logic using pl-sql for  Mobile Financial Applications."
            , " System design and implementaion to automate some inhouse projects like (Loan, Card, Centralized trade etc.)"
            , " Design reports for those projects using BI Publisher(Oracle)"
            , " Development Stack: Java(Strut2 Framework), Oracle(RDBMS), Reporting(BI Publisher), "
          ]
        },{
        "jobid": "2",
        "company": "BRAC IT Services Limited(biTS).",
        "designation": "Software Engineer",
        "tenor": "1 April, 2015 - 13 July, 2016",
        "jobResponsibility": [
          "Worked in a procurement module of an ERP(in Groovy On Grails)"
          , "Worked in some other projects where main task is to develop a dashboard for the work flow. "
          , "Development Stack: Java & Groovy On grails, Postgres(RDBMS), Dashboard(Chart.js & Bootstrap),"
        ]
      }
      ],
      headerLinks: [
        { title: 'Home', path: '/react-myportfolio' },
        { title: 'About', path: '/about' },
        { title: 'Education', path: '/education' },
        { title: 'Experience', path: '/experience' },
        { title: 'Blog', path: '/blog' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Homapage',
        subTitle: 'Projects the make a difference',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      education: {
        title: 'Education'
      },
      experience: {
        title: 'Experience'
      },
      blog: {
        title: 'Blog'
      },
      contact: {
        title: 'Let\'s Talk'
      },
      educationList: [
        {
          "degree": "Masters in Information & Technology"
          , "session": "2020"
          , "institute": "Dhaka University"
          , "major": "Institute of Information & Technology"
        },
        {
          "degree": "Bachelor Of Science(Engineering)"
          , "session": "2015"
          , "institute": "University Of Chittagong"
          , "major": "Department of Computer Science & Engineering"
        }
        //,
        // {
        //   "degree": "H.S.C."
        //   , "session": "2007"
        //   , "institute": "Dulahazara College"
        //   , "major": "Science"
        // },
        // {
        //   "degree": "S.S.C."
        //   , "session": "2005"
        //   , "institute": "Memorial Khristian High School"
        //   , "major": "Science"
        // }
      ]
    };
  };


  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <div className="header">
            <Navbar  className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand className="home-page-title">Manabendra Saruj</Navbar.Brand>
              <Navbar.Toggle  className="border-0" aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/react-myportfolio"  >
                      <ThemeProvider theme={theme}> 
                      <Button variant="outlined" color="btn2">Home</Button>
                      </ThemeProvider>
                  </Link>
                  <Link className="nav-link" to="/about"  >
                      <ColorButton variant="outlined" color="btn1">About</ColorButton>
                  </Link>
                  <Link className="nav-link" to="/education">
                    <Button variant="contained" color="primary">Education</Button></Link>
                  <Link className="nav-link" to="/experience">
                    <Button variant="contained" color="secondary">Experience</Button></Link>
                  <Link className="nav-link" to="/blog">
                    <Button variant="outlined" color="secondary">Blog</Button></Link>
                  {/* <Link className="nav-link" to="/contact">
                    <Button variant="outlined" color="primary">Contact</Button></Link> */}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            </div>

            <Route path="/react-myportfolio" exact render={() => <HomePage title={this.state.home.title}
              subTitle={this.state.home.subTitle} text={this.state.home.text}
              developerName={this.state.developerName} email={this.state.email}
              contactNo={this.state.contactNo}
              contacts={this.state.contacts} 
              />} />
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} skills={this.state.skills} devName={this.state.developerName} />} />
            <Route path="/education"
              render={() =>
                <EducationPage
                  title={this.state.education.title}
                  educationList={this.state.educationList} />} />
            <Route path="/experience"
              render={() =>
                <ExperiencePage
                  title={this.state.experience.title}
                  joblist={this.state.expList} />} />
            <Route path="/blog" render={() => <BlogPage title={this.state.blog.title} />} />
            {/* <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} /> */}
          
        </Container>
        <FooterPage title={this.state.footerTitle} />
      </Router>

    )
  }
}

export default App;
