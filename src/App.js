import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import expService from './assets/jobExpList';
//import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import FooterPage from './pages/FooterPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Manabendra Saruj',
      developerName: "Manabendra Saruj",
      email: "msaruj@gmail.com",
      contacts: [{
        "facebook": "https://www.facebook.com/manabendra.saruj"
        , "twiter": "#"
        , "github": "https://github.com/saruj"
        , "insta": "https://www.instagram.com/m_saruj/"
        , "mail": "msaruj@gmail.com"
      }],
      contactNo: "01670-31**31",
      footerTitle: "msaruj@gmail.com",
      expList: [{
        "jobid": "1",
        "company": "Brac It Services Ltd.",
        "designation": "Software Engineer",
        "tenor": "1 April, 2015 - 13 July, 2016",
        "jobResponsibility": [
          "Worked in a procurement module of an ERP(in Groovy On Grails)"
          , "Worked in some other projects where main task is to develop a dashboard for the work flow. "
          , "Development Stack: Java & Groovy On grails, Postgres(RDBMS), Dashboard(Chart.js & Bootstrap),"
        ]
      },
      {
        "jobid": "2",
        "company": "Dutch-Bangla Bank Ltd.",
        "designation": "Software Engineer(Senior Officer)",
        "tenor": "14 July, 2016 - Present!!",
        "jobResponsibility": [" Implement business logic using pl-sql for  Mobile Financial Applications."
          , " System design and implementaion to automate some inhouse projects like (Loan, Card, Centralized trade etc.)"
          , " Design reports for those projects using BI Publisher(Oracle)"
          , " Development Stack: Java(Strut2 Framework), Oracle(RDBMS), Reporting(BI Publisher), "
        ]
      }],
      headerLinks: [
        { title: 'Home', path: '/' },
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
          "degree": "Masters in IT(Evening)"
          , "session": "2020"
          , "institute": "Dhaka University(Institute of Information Technology.)"
          , "major": "Masters in Information & Technology"
        },
        {
          "degree": "B. Sc(Engg.)"
          , "session": "2012"
          , "institute": "University Of Chittagong"
          , "major": "Computer Science & Engineering"
        },
        {
          "degree": "H.S.C."
          , "session": "2007"
          , "institute": "Dulahazara College"
          , "major": "Science"
        },
        {
          "degree": "S.S.C."
          , "session": "2005"
          , "institute": "Memorial Khristian High School"
          , "major": "Science"
        }
      ]
    };
  };


  // getExpList = () => {
  //   expService().then(company => {
  //     this.setState({
  //       expList : company
  //     });
  //   });
  // };

  // componentDidMount(){
  //   this.getExpList();
  // };

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <div className="header">
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand className="home-page-title">Manabendra Saruj</Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">
                    <Button variant="outlined" color="primary">Home</Button></Link>
                  <Link className="nav-link" to="/about">
                    <Button variant="outlined" color="inherit">About</Button></Link>
                  <Link className="nav-link" to="/education">
                    <Button variant="contained" color="primary">Education</Button></Link>
                  <Link className="nav-link" to="/experience">
                    <Button variant="contained" color="secondary">Experience</Button></Link>
                  <Link className="nav-link" to="/blog">
                    <Button variant="outlined" color="secondary">Blog</Button></Link>
                  <Link className="nav-link" to="/contact">
                    <Button variant="outlined" color="primary">Contact</Button></Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            </div>

            <Route path="/" exact render={() => <HomePage title={this.state.home.title}
              subTitle={this.state.home.subTitle} text={this.state.home.text}
              developerName={this.state.developerName} email={this.state.email}
              contactNo={this.state.contactNo}
              contacts={this.state.contacts} />} />
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} devName={this.state.developerName} />} />
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
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          
        </Container>
        <FooterPage title={this.state.footerTitle} />
      </Router>

    )
  }
}

export default App;
