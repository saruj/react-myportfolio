const expList = [
    {
      jobid: "1",      
      company : "Brac It Services Ltd.",
      designation: "Software Engineer",
      tenor: "1 April, 2015 - 13 July, 2016",
      jobResponsibility: [
                         "Created a responsive front-end web app. (in Ruby on Rails and AngularJS)"
                         ,"Created a cross-platform mobile app. (in Ionic Framework for Android and iOS)."
                         ,"Developed unit and end-to-end tests for both front-end and back-end."
                         ,"Maintained automatic horizontal scaling of the web servers' infrastracture using Chef."
                         ]
    },
    {
      jobid: "2",      
      company : "Dutch-Bangla Bank Ltd.",
      designation: "Software Engineer(Senior Officer)",
      tenor: "14 July, 2016 - Present!!",
      jobResponsibility: [ " Created a responsive front-end web app. (in Ruby on Rails and AngularJS)"
                          ," Created a cross-platform mobile app. (in Ionic Framework for Android and iOS)."
                          ," Developed unit and end-to-end tests for both front-end and back-end."
                          ," Wrote automatic synchronizations with remote APIs, that e.g. parse user's friendships, favourite music artists and festivals from multiple services. (e.g. Facebook, LastFM, Spotify)"
                          ," Developed a full-text search using Elasticsearch, with various filters and a custom suggestion system based on the user's own personal music taste."
                          ," Maintained automatic horizontal scaling of the web servers' infrastracture using Chef."
                          ]
    }
    ];

export default  Promise.resolve(expList.sort());