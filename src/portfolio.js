
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mentorle",
  title: "Hi, MENTORLE Here",
  subTitle: emoji(
    "Unlock Your IT Potential with Asia's Largest Mentor Network. Find Your Perfect IT Mentor or Mentee Today. Boost Your IT Career with Proven Mentorship."
  ),
  
  // resumeLink:
  //   "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What We do",
  subTitle: "We Guide Stakeholders about new Technology and many other tech Information",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "THE PROBLEM",
      logo: require("./assets/images/R.jpeg"),
      subHeader: "",
      duration: "",
      desc: "",
      descBullets: [
        "Finding Mentors In The IT Industry is Difiicult",
        "Many People expressed regret for not taking advantages of opportunities and not having guidance in life.",
        "All of the workshops and other events provided during the events are not helpful for everyone. The students are unable to connect with the mentors, they gradually lose track of them."
        
      ]
    },
    {
      schoolName: "SOLUTION",
      logo: require("./assets/images/p.jpeg"),
      subHeader: "",
      duration: "",
      desc: "",
      descBullets: ["We serve as virtual educators, providing tailored guidance and mentorship for students growing in IT field.",
      "We provide graduates and students with the opportunity to network with recruiters and entrepreneurs.",
      "The Biggest Mentors Panel, which will have a number of experts from faang & other firms on it."
      ]
    },
    {
      schoolName: "GOAL",
      logo: require("./assets/images/images.png"),
      subHeader: "",
      duration: "",
      desc: "",
      descBullets: ["Guidance on career roadmap",
    "Serving undergraduates a platform at a cost-effective manner.",
    "Building a platform that will provide students with all the resources they require, such as assistance with coding problems, connections to IT professionals, and much more."
    ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Professional In Worksapce", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Tier 2 or Tier 3 Colleges",
      progressPercentage: "80%"
    },
    {
      Stack: "Freshers, Students and Job Seekers",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "THE PROBLEM",
  subtitle: "The Biggest Mentors Panel, which will have a number of experts from faang & other firms on it.",
  projects: [
    {
      image: require("./assets/images/R.jpeg"),
      projectName: "Problem",
      projectDesc: [" Many People expressed regret for not taking advantages of opportunities and not having guidance in life."],

      footerLink: [
        {
         
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/p.jpeg"),
      projectName: "Solution",
      projectDesc: "We provide graduates and students with the opportunity to network with recruiters and entrepreneurs.",
      footerLink: [
        {
          
        }
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("OUR TEAM  "),
  subtitle:
    "We can, we will, we are one team. !",

  achievementsCards: [
    {
      title: "RACHIT JAIN ",
      subtitle:
        "Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/Screenshot 2024-02-15 023923.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Founder",
          url: ""
        },
        {
          name: "CEO",
          url: ""
        },
      ]
    },
    {
      title: "Alekh Johari",
      subtitle:
        "uruG that is available on 2 Billion devices world wide.",
      image: require("./assets/images/Screenshot 2024-02-15 023936.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Advisor",
          url: ""
        }
      ]
    },

    {
      title: "Sougat chaterjee",
      subtitle: "uruG that is available on 2 Billion devices world wide.",
      image: require("./assets/images/Screenshot 2024-02-15 023946.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Advisor",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "FAQs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Win a Google Assistant Tshirt and $200 in Google",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google ?"
    },
    {
      url: "",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is community of individual developers and companies."
    },
    {
      url: "",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is community of individual developers and companies."
    },
    {
      url: "",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is community of individual developers and companies."
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false// Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "rachitjain@mentorle.in"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
