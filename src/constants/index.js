import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    IEDC,
    mec,
    tle,
    document,
    medium,
    excel,
    netflix,
    medical,
    website,
    brain,
    tree,
    headstart,
    fixit

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "Software Engineering Fellow",
        company_name: "HeadstartAI",
        icon: headstart,
        iconBg: "#000000",
        date: "Jul 2024 - Ongoing",
        points: [
            "Create 5 AI Projects using Pytorch and Huggingface models",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }, 
    {
        title: "Generative AI and NLP Intern",
        company_name: "FixitAI",
        icon: fixit,
        iconBg: "#000000",
        date: "Jun 2024 - Present",
        points: [
            "Implemented a dense sparse hybrid retrieval system, increasing data accuracy by 40%",
            "Increased processing speed by 20% by implementing a pipeline for processing audio.",
            "Optimized Azure Open AI ChatGPT for cold call conversion, improving accuracy from 70% to 90%.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }, 
    {
        title: "Web Developer",
        company_name: "IEDC",
        icon: IEDC,
        iconBg: "#a2d2ff",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }, 
    {
        title: "Web Developer",
        company_name: "Excel",
        icon: excel,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Implement the schedules page of the main website for Excel.",
        ],
    },
    
    {
        title: "Inclusivity Manager",
        company_name: "TLE",
        icon: tle,
        iconBg: "#ffffff",
        date: "Jan 2023 - Jan 2024",
        points: [
            "Spearhead ideation process in planning events including various departments.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Ensuring collaboration between teams in the organisation.",
            "Participating in event reviews and providing constructive feedback to other managers.",
        ],
    },
    {
        title: "Chairperson",
        company_name: "Training Cell, Govt. Model Engineering College, Kochi",
        icon: mec,
        iconBg: "#accbe1",
        date: "March 2023 - March 2024",
        points: [
            "Developing extracurricular academic plans for more than 5000 students of the college.",
            "Collaborating with different clubs in events building skills for students.",
            "Create awareness about the different activities that contribute towards positive placement statistics.",
            "Lead a team of more than 30 members to achieve extracurricular brilliance within college.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/STSonyThomas',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/njansony',
    }
];

export const projects = [
    {
        iconUrl: document,
        theme: 'btn-back-red',
        name: 'Resume Analyser',
        description: 'Developed a web application that suggests improvements regarding the deficiencies present in a persons resume with regards to the job being applied for.',
        link: 'https://github.com/annphil/Resume-Analyzer',
    },
    {
        iconUrl: brain,
        theme: 'btn-back-black',
        name: 'Multi-Layer-Perceptron',
        description: 'Developed a simple pytorch module for creating ai models from scratch; Immplemented Backpropagation algorithm.',
        link: 'https://github.com/STSonyThomas/neural_micrograd',
    },
    {
        iconUrl: tree,
        theme: 'btn-back-green',
        name: 'Monte Carlo Tree Self Refine',
        description: 'Based on the Monte Carlo Search Tree used to improve efficieny of Llama 3B models from 60-90 percent in the logic benchmark.',
        link: 'https://github.com/STSonyThomas/MCTSr-Game-Theory',
    },
    {
        iconUrl: netflix,
        theme: 'btn-back-green',
        name: 'Full Stack Netflix Clone',
        description: 'Created a full-stack replica of the popular streaming platform "Netflix," enabling users to view and choose their required shows.',
        link: 'https://github.com/STSonyThomas/netflixClone',
    },
    {
        iconUrl: medical,
        theme: 'btn-back-blue',
        name: 'Disease Finding Assistant',
        description: 'Designed and built a mobile app for finding and comparing diseases against symptoms and test results.',
        link: 'https://github.com/STSonyThomas/disease_prediction',
    },
    {
        iconUrl: website,
        theme: 'btn-back-pink',
        name: 'Thync.io',
        description: 'Built a website for an organisation named Thync.io focussing on social service.',
        link: 'https://github.com/STSonyThomas/thync',
    },
    {
        iconUrl: excel,
        theme: 'btn-back-black',
        name: 'Tech fest Web Application',
        description: 'Developed a web application for college technical fest Excel 2022.',
        link: 'https://github.com/Excel2022Web/excel-2022',
    },
    {
        iconUrl: medium,
        theme: 'btn-back-yellow',
        name: 'Medium Full Stack Clone',
        description: 'A full stack clone of the popular article repository and publishing website Medium.',
        link: 'https://github.com/STSonyThomas/sanitydemoyt',
    }
];