export const projects = [
  {
    title: "KnowKnot (Project Manager)",
    subtitle: "Django and Angular",
    description:
      "Implemented a NLP model with BERT to classify & cluster info, and displaying it on an interactive web interface",
    image: "./Knowknot.gif",
    link: "",
  },
  {
    title: "Dashcam Analyzer",
    subtitle: "YoloV8, OpenCV, and TensorFlow",
    description:
      "Wrote a Python program that provides different analytics from dashcam footage",
    image: "./dashcam.gif", // TODO: Add project gif
    link: "https://github.com/kalvinkhuu/ecse415/blob/main/project/ECSE415_project.ipynb", // TODO: Add link to project
  },
  {
    title: "NF-TEA",
    subtitle: "Vue.js and Spring Boot",
    description:
      "Designed and programmed a NFT marketplace with the user's Instagram pictures",
    image: "./NFTea.gif",
    link: "https://github.com/NFTEA-Winter2022/NF-TEA",
  },
  {
    title: "Ice Cream Game",
    subtitle: "C# and Unity",
    description:
      "Created a 3D video game over 72 hours with a team of 4 people for the Ludum Dare competition",
    image: "./icecream.gif", 
    link: "https://nickw22.itch.io/theicecreamgame",
  },

];

export const skills = [
  "Java",
  "Python",
  "Node.js",
  "React",
  "JavaScript",
  "Angular",
];

// export const skills = {
//   Languages: [
//     { name: 'Java'},
//     { name: 'Python'},
//     { name: 'C'},
//     { name: 'C#'},
//     { name: 'C++'},
//     { name: 'JavaScript'},
//     { name: 'TypeScript'},
//     { name: 'HTML/CSS'},
//     { name: 'Unix Shell'},
//     { name: 'Oracle SQL'}
//   ],
//   Frameworks: [
//     { name: 'AWS'},
//     { name: 'Azure'},
//     { name: 'Node.js'},
//     { name: 'Angular'},
//     { name: 'React'},
//     { name: 'Django'},
//     { name: 'Spring'},
//     { name: 'TensorFlow'},
//     { name: 'PyTorch'},
//     { name: 'Maven'},
//     { name: 'Gradle'},
//     { name: 'JUnit'},
//     { name: 'OpenCV'},
//     { name: 'Vue.js'},
//     { name: 'Cucumber'},

//   ],
//   DeveloperTools: [
//     { name: 'Git'},
//     { name: 'GitHub'},
//     { name: 'Android Studio'},
//     { name: 'Docker'},
//     { name: 'Postman'},
//     { name: 'BitBucket'},
//     { name: 'VS Code'},
//     { name: 'IntelliJ IDEA'},
//     { name: 'Jira'},
//     { name: 'Figma'},
//     { name: 'Confluence'},
//     { name: 'Unity'},
//     { name: 'Eclipse'},
//     { name: 'PyCharm'},
//     { name: 'Visual Studio'}
//   ]
// };

export const experiences = [
  {
    title: "CSUS Tutor",
    company: "McGill University",
    date: "Sep 2023 - Apr 2024",
    desc: "On-the-spot troubleshooting and guidance for software engineering students in extensive range of topics",
    points: ["Assisted students in understanding complex concepts and algorithms", "Provided guidance on assignments and projects", "Helped students debug their code and understand the errors"],
    link: "https://www.mcgill-csus.ca/helpdesk",
    location: "Montreal, QC",
    img: "./csus.png",
  },
  {
    title: "Software Analyst Intern",
    company: "Desjardins Group",
    date: "May 2023 - Aug 2023",
    desc: "Worked with the team of TFE, Electronic Fund Transfers, to modernize the current application of DRD, Direct Deposit-Withdrawal",
    points: ["Successfully solved character encoding discrepancies to achieve 100% precision per 1000 files", "Developed a Python script to reliably reproduce bugs to allow their systematic identification and resolution", "Designed and optimized SQL/Oracle queries to retrieve files exhibiting problematic behavior, allowing for targeted analysis and troubleshooting of identified issues", "Implemented unit and integration tests to validate the effectiveness of the solutions"],
    link: "https://www.desjardins.com/qc/en/business/accounts-treasury/accounts-payable/transferring-funds.html",
    location: "Montreal, QC",
    img: "./desjardins.png",
  },
  {
    title: "Front-End Developer Intern",
    company: "The Quebec Ministry of Public Security",
    date: "May 2022 - Mar 2023",
    desc: "Worked on IGO2, a free open source Web Geospatial solution used by various government departments",
    points: ["Redesigned UI/UX to allow users to customize the application", "Enabled users to engage with geographical data in a dynamic way", "Integrated RESTful APIs to simplify user access to info and tools"],
    link: "https://geoegl.msp.gouv.qc.ca/igo2/apercu-qc/?context=inspq",
    location: "Montreal, QC (Remote)",
    img: "./msp.png",
  },
  
];

export const educations = [
  {
    degree: "DEC in Health Science",
    date: "Aug 2018 - May 2020",
    university: "Ahuntsic College",
    location: "Montreal, QC",
    img: "./ahuntsic.png",
    courses: "Calculus I and II, Linear Algebra, Physics, Chemistry, Biology, Organic Chemistry",
  },
  {
    degree: "B. Eng. in Software Engineering",
    date: "Sep 2020 - Apr 2024",
    university: "McGill University",
    location: "Montreal, QC",
    img: "./mcgill.png",
    courses: "Web Development, Applied Machine Learning, Computer Vision, Object-Oriented Programming, Data Structures & Algorithms",
  },
  {
    degree: "M. Eng. in Computing and Software",
    date: "Sep 2024 - May 2026",
    university: "McMaster University",
    location: "Hamilton, ON",
    img: "./mcmaster.jpg",
    courses: "Microservice Architecture, Cloud Computing & Software Designs",
  }
  
  
];
