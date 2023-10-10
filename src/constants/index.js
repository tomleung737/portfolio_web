import {
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    python, 
    pytorch,
    plotly,
    nextJS,
    github,
    onedrive,
    tesla,
    HKU_icon,
    optionPricer,
    AITradingAdvisor,
    groupFinder,
    DApp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "projects",
      title: "Projects",
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "NextJS",
      icon: nextJS,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Pytorch",
      icon: pytorch,
    },
    {
      name: "Plotly",
      icon: plotly,
    },
  ];
  
  const experiences = [
    {
      title: "Template",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
 
  const projects = [
    {
      name: "AI Trading Advisor",
      description:
        "A web-based platform that allows users to view the price trend prediction of the stock in the technology sector. The prediction is based on the related news articles.",
      tags: [
        {
          name: "python",
          color: "text-blue-400",
        },
        {
          name: "pytorch",
          color: "orange-text-gradient",
        },
        {
          name: "pandas",
          color: "pink-text-gradient",
        },
      ],
      image: AITradingAdvisor,
      source_code_link: "https://github.com/",
      link_icon: onedrive
    },
    {
      name: "Coin Flip Ethereum DApp",
      description:
        "A web application that enables users to play the coin flip game using ETH in their wallets. The winner can take all ETH. All transaction history can be viewed on the history page.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "text-gray-200",
        },
        {
          name: "ethereum",
          color: "text-gray-400",
        },
      ],
      image: DApp,
      source_code_link: "https://github.com/",
      link_icon: onedrive
    },
    {
      name: "Group Finder",
      description:
        "An Android mobile app that allows users to find group mates, rate and comment on their peers, and review other user evaluations to avoid free-riders.",
      tags: [
        {
          name: "java",
          color: "text-red-600",
        },
        {
          name: "android studio",
          color: "green-text-gradient",
        },
      ],
      image: groupFinder,
      source_code_link: "https://github.com/joec07/mobile_app_project",
      link_icon: github
    },
    {
      name: "Options Pricer",
      description:
        "A Python desktop application that allows users to calculate prices of different options products, such as European options and American options.",
      tags: [
        {
          name: "python",
          color: "text-blue-400",
        },
        {
          name: "pandas",
          color: "pink-text-gradient",
        },
        {
          name: "pySimpleGUI",
          color: "text-blue-700",
        },
      ],
      image: optionPricer,
      source_code_link: "https://github.com/",
      link_icon: onedrive
    },
  ];


  const education = [
    {
      title: "BEng in Mechanical Engineering",
      college_name: "HKU",
      icon: HKU_icon,
      iconBg: "#FFFFFF",
      date: "September 2019 - July 2022",
      points: [
        "Participated in the development team of HKU Unmanned Aerial System Team.",
        "Collaborated with cross-functional teams, including mechanical designers, electrical team, and other software developers, to create unmanned systems of the drone and ground vehicle.",
        "Assisted in the development of the obstacle avoidance script using the A* search algorithm.",
      ],
    },
    {
      title: "MSc in Computer Science",
      college_name: "HKU",
      icon: HKU_icon,
      iconBg: "#FFFFFF",
      date: "September 2022 - August 2023",
      points: [
        "Developed mobile app using Java and Swift.",
        "Learned the latest AI technologies, such as data mining techniques, state-of-the-art LLMs, and model training methods.",
        "Tried to build a decentralized App and write smart contracts using solidity and Ethereum.",
        "Studied financial market knowledge and built a Python application that can calculate the prices of different options.",
      ],
    },
    
  ];
  
  export { technologies, experiences, projects, education };