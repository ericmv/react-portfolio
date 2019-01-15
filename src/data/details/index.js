
export const experienceDetails = [
    {
        companyName: 'Lantronix',
        position: 'Software Engineer Intern, Jan. 2018',
        location: 'Irvine, CA',
        description: "I am working on creating an amazing demo showcase of our newest software, MACH10, using Python and C++. This internship is where I got to really apply everything I learned in school to a real application. It's also one where I've had the chance to work with people who I never thought I'd be working with here. From the CTO, to VP of Engineering to Senior Product Line Managers and Marketing Managers, the demo has come a long way with the collaborative effort of everyone I've worked with.",
        imageUrl: require('../images/lantronix.png')
    },
    {
        companyName: 'University of California, Irvine',
        position: 'B.S. in Computer Science, Earned June 2018',
        location: 'Irvine, CA',
        description: "I'm glad to have had the privilege of studying at UC Irvine. These past 4 years is where I learned more than I ever have, not only about computer science and what I studied, but also about myself and life in general. I've made a great network, joined organizations, took on leadership opportunities and found what I am passionate about. UCI has given me many opportunities and being here taught me to take on every opportunity and really pursue the things I'm passionate about, career-related or not. I'm happy with where I am now, thanks to the support and knowledge I've acquired in college.",
        imageUrl: require('../images/uci.png')
    },
    {
        companyName: 'UCI Applied Innovation',
        position: 'Software Development Intern, Winter 2018',
        location: 'Irvine, CA',
        description: "My co-workers and I were given a lot of creative freedom to develop internal tools for The Cove. We automated content display, created a custom events site for clients to book our event space, and created an internal search database. Arguably the biggest project we worked on was creating the Slackbot for The Cove, which uses Slack API to read message commands and automate tasks such as rebooting computers, creating tickets, and changing content. Working here was one of the first times where I saw my work come to life in a professional setting and help others. These projects encouraged me to develop with a purpose and develop for the greater good of those around me.",
        imageUrl: require('../images/uciai.png')
    },
    {
        companyName: 'UCI Circle K',
        position: 'Secretary, Spring 2017',
        location: 'Irvine, CA',
        description: "One of the best things about UCI is being able to choose from over 500 different organizations to join. UCI Circle K is one of the reasons I am where I am today. It's helped me more than many jobs ever could. It's here where I grew the most in college, gaining confidence, growing a network, taking on leadership roles and working with a team. As Secretary I had the privilege of working with a team of Executive and Appointed board members to create events and projects for over 400 members. Here was also the first time where I applied what I learned in school to develop something for others to use. It pushed me to pursue internship and other career opportunities where I would be able to create something to make people's lives easier.",
        imageUrl: require('../images/cki.png')
    },
    {
        companyName: 'UCI Center for Emeriti and Retirees',
        position: 'Student Assistant, Summer 2017',
        location: 'Irvine, CA',
        description: "UCI CER was my first job as a college student. While non-technical, it taught me a lot about professionalism and the workplace. It gave me an introduction to meetings, working in the office, attention to detail, and collaboration. I'm thankful for my supervisor, Jeri, for guiding me and encouraging me to pursue new opportunities.",
        imageUrl: require('../images/cer.png')
    }
]

// export default experienceDetails;

export const skillsDetails = [
    {
        category: 'Languages',
        skills: ['Python', 'Javascript', 'C/C++', 'Java', 'HTML', 'CSS']
    },
    {
        category: 'Frameworks',
        skills: ['React', 'Node', 'Express', 'React Native', 'AngularJS', 'Bootstrap']
    },
    {
        category: 'Tools',
        skills: ['Git/Github', 'MongoDB', 'MySQL', 'Swagger', 'Postman', 'Raspberry Pi']
    },
    {
        category: 'Environments',
        skills: ['Linux', 'Agile', 'Scrum', 'macOS', 'Windows']
    }
]

export const projectDetails = [
    {
        name: "The Fridge App",
        description: "React Native App that lets users log and keep track of items in a shared fridge. Users can add and remove items, sort through content, request items from other users, and will be notified when their food is expiring. Incorporated authentication, user sessions, and push notifications.",
        tags: ['MongoDB', 'Express', 'React Native', 'Node', 'Expo'],
        link: "https://github.com/ericmv/fridge-app",
        image: require('../images/fridge.jpg')
    },
    {
        name: "Nibble",
        description: "React web app that randomly chooses a location for the user to eat at. Allows users to pick different categories of food they are craving and will randomly decide a place to eat according to those categories. Backend uses Express to make Yelp API calls and return results to the client.",
        tags: ['React', 'Express', 'Yelp API', 'Flexbox'],
        link: "https://github.com/ericmv/nibble",
        image: require('../images/nibble.jpg')
    },
    {
        name: "Catchphrase",
        description: "Mobile version of popular game catchphrase seen at many stores like Target. This was my first Angular project which gave me a good understanding of how Angular works.",
        tags: ['Angular 6', 'HTML', 'CSS'],
        link: "https://github.com/ericmv/catchphrase",
        image: require('../images/catchphrase.png')
    },
    {
        name: "DayQuest",
        description: "Android to-do list application for autistic children that helps them focus and plan ahead. While researching and interviewing behavioral interventionists, we found that autistic children learn best with incentives. DayQuest does just that by adding prizes and points to the to do list, which can be redeemed by taking the device to the caretaker. Created for 2016 Autism App Jam.",
        tags: ['Java', 'Android Studios'],
        link: "https://github.com/ericmv/",
        image: require('../images/dayquest.jpg')
    }
]