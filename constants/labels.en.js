const labels = {
    aboutUs: {
        id: 'about-us',
        navTitle: 'About',
        title: 'About us',
    },
    ourMission: {
        title: 'Our Mission',
        description:
            'Our Mission is to unite and strengthen the Brazilian information technology (IT) community in Ottawa.',
    },
    ourVision: {
        title: 'Our Vision',
        description:
            'Our Vision is to be a reference in supporting the Brazilian professional community in information technology (IT) in Ottawa.',
    },
    joinUs: {
        id: 'joint-us',
        navTitle: 'Join us',
        title: 'Join us',
        description:
            "Join a network that connects you to a IT community expanding your horizons and unlocking new opportunities. Connect with a vibrant community of tech-savvy individuals and be in the know of the latest happenings within Brito. Elevate your skills and join a network that's dedicated to fostering growth, innovation and collaboration!",
    },
    welcomeToBrito: {
        title: 'WELCOME TO BRITO',
        description: `BRAZILIAN IT OTTAWA is non-profit group of IT Brazilians professionals located in Ottawa. Our main objective is empowering the community, assisting with networking, and continuous learning with lectures and workshops.`,
    },
    heroImage: {
        alt: 'parlement',
        src: '/parlement.png',
        width: '900',
        height: '900',
    },

    card_data: [
        {
            title: 'Marcelo - Dev director',
            description:
                'Senior Front-end Engineer with 20 years of experience building websites and applications using tech-edge for big techs, digital agencies, media and educational companies in Canada, the United States and Brazil.',
            email: 'contact@company.com',
            image: {
                alt: 'director',
                src: '/image1.png',
                width: '200',
                height: '200',
            },
        },
        {
            title: 'Diego - President and co-founder',
            description:
                'Senior Project manager with over 20 years experience working for consulting companies, banks and government.',
            email: 'contact@company.com',
            image: {
                alt: 'director',
                src: '/image2.png',
                width: '200',
                height: '200',
            },
        },
        {
            title: 'Roger - Director and co-founder',
            description:
                'Senior CRM specialist with international experience in projects for telecom, consulting and  entertainment companies',
            email: 'contact@company.com',
            image: {
                alt: 'director',
                src: '/image3.png',
                width: '200',
                height: '200',
            },
        },
    ],
    contactUs: {
        id: 'contact-us',
        navTitle: 'Contact',
        title: 'Contact us',
    },
    chat: {
        title: 'Chat with us',
        description: 'Our friendly team is here to help',
    },
    email: 'hi@brito.it',
    location: {
        basedin: 'Based in',
        city: 'Ottawa - Ontario',
    },
    media: {
        visit: 'Visit our social media',
        instagramlink: '#',
        labelinstagram: 'BRITO_Instagram',
        linklinkedin: 'https://www.linkedin.com/groups/12058916/',
        labelinkedin: 'BRITO_Linkedin',
        linkfacebook: 'https://www.facebook.com/groups/566404256865424',
        labelfacebook: 'BRITO_Facebook',
    },
    Maple: {
        labelimgmaple: 'mapleleave',
    },

    formx : {
        fields : [
            {
                label: 'Your full name',
                placeholder: "E.g Amanda Costa",
                type: 'text',
            },
            {
                label: 'Your expertise',
                placeholder: "E.g UX Designer",
                type: 'text',
            },
            {
                label: 'Your company',
                placeholder: "E.g TD Bank",
                type: 'text',
            },
            {
                label: 'Do you currently live in Canada?',
                placeholder: "Eg Amanda",
                type: 'text',
            },
            {
                label: 'Province / Territory',
                placeholder: "",
                type: 'text',
            },
        ]

        
    },

    form: {        
        labels : {
            fullNameLabel: "Your full name",
            expertiseLabel: "Your expertise",
            companyLabel: "Your company",
            resideInCanadaLabel: "Do you currently live in Canada?",  
            provinceLabel: "Province / Territory",
            cityLabel: "City",
            statusLabel: "What's your current status?",
            emailLabel: "E-mail",
            linkedinLabel: "LinkedIn profile",
        },
        placeholders: {
            
        },
        text: {
            title: "Want to join Brito's network?",
            altImageText: "Picture of members of BRITO co-working in their computers in one of the meetings ",
            sendButtonText: "Send",        
            immigrationStatus: {
                select: "Select",
                permanentResident: "Permanent Resident",
                student: "Student",
                temporary: "Temporary"
            },
            subscriptionModal: {
                title: "Thank you for connecting with us!",
                firstLine: "Your informations were submitted for approval.",
                secondLine: "You will receive a notification on your email.",
                continueBrowsingButton: "Continue browsing"
            },
            provinces: [
                { name: "Alberta", code: "AB" },
                { name: "British Columbia", code: "BC" },
                { name: "Manitoba", code: "MB" },
                { name: "New Brunswick", code: "NB" },
                { name: "Newfoundland and Labrador", code: "NL" },
                { name: "Northwest Territories", code: "NT" },
                { name: "Nova Scotia", code: "NS" },
                { name: "Nunavut", code: "NU" },
                { name: "Ontario", code: "ON" },
                { name: "Prince Edward Island", code: "PE" },
                { name: "Quebec", code: "QC" },
                { name: "Saskatchewan", code: "SK" },
                { name: "Yukon", code: "YT" }
            ],
            statusInformationPopover: "This status assists Brito in identifying suitable projects and job opportunities based on his type of visa. Some visas only permit 20 hours of work, and holding citizenship is a requirement for certain government positions, enhancing one's chances of securing a job.",
        },


    }
        
}
export default labels
