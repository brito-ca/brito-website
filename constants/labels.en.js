const labels = {
    aboutUs: {
        id: 'about-us',
        navTitle: 'About',
        title: 'About us',
        description:
            'Brazilian IT Ottawa (BRITO) is a group of Brazilian professionals with a career focused in Information Technology living in the National Capital Region, from different backgrounds, areas of expertise and willingness to help each other by sharing knowledge and experiences, building a social and professional network.',
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
    vectorCard: [
        {
            image: {
                src: '/verified_user.png',
                alt: 'verified user',
                width: '83',
                height: '83',
            },
            value: '+7',
            description: 'Years in operation',
        },
        {
            image: {
                src: '/work.png',
                alt: 'work',
                width: '83',
                height: '83',
            },
            value: '+72',
            description: 'Network events',
        },
        {
            image: {
                src: '/groups.png',
                alt: 'groups',
                width: '83',
                height: '83',
            },
            value: '+250',
            description: 'Participants',
        },
    ],
    membersImage: {
        src: '/members.png',
        alt: 'members',
        width: '1440',
        height: '530',
    },
    card_data: [
        {
            id: 'brito1001',
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
            id: 'brito1002',
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
            id: 'brito1003',
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
        instagramlink: 'https://www.instagram.com/brito.it/',
        labelinstagram: 'BRITO_Instagram',
        linklinkedin: 'https://www.linkedin.com/groups/12058916/',
        labelinkedin: 'BRITO_Linkedin',
        linkfacebook: 'https://www.facebook.com/groups/566404256865424',
        labelfacebook: 'BRITO_Facebook',
    },
    Maple: {
        labelimgmaple: 'mapleleave',
    },
    footerContent: {
        altFlag: 'brito flag',
        altWordmark: 'brito wordmark',
        description: 'Building the Brazilian IT community in Ottawa',
        copyright: 'Copyright © 2023 Brito',
        rights: 'All Rights Reserved',
        terms: { href: '/', text: 'Terms and Conditions' },
        privacy: { href: '/', text: 'Privacy Policy' },
        header: 'BRITO',
    },
    form: {
        fields: {
            fullName: {
                label: 'Your full name',
                placeholder: 'E.g Amanda Costa',
                type: 'text',
            },
            expertise: {
                label: 'Your expertise',
                placeholder: 'E.g UX Designer',
                type: 'text',
            },
            company: {
                label: 'Your company',
                placeholder: 'E.g TD Bank',
                type: 'text',
            },
            resideInCanada: {
                label: 'Do you currently live in Canada?',
            },
            immigrationStatus: {
                label: "What's your current status?",
                values: [                    
                    "Permanent Resident",
                    "Student",
                    "Temporary"
                ]
            },
            province: {
                label: 'Province / Territory',
                placeholder: 'E.g Ontario',
                type: 'text',
                provinces: [
                    { name: 'Alberta', code: 'AB' },
                    { name: 'British Columbia', code: 'BC' },
                    { name: 'Manitoba', code: 'MB' },
                    { name: 'New Brunswick', code: 'NB' },
                    { name: 'Newfoundland and Labrador', code: 'NL' },
                    { name: 'Northwest Territories', code: 'NT' },
                    { name: 'Nova Scotia', code: 'NS' },
                    { name: 'Nunavut', code: 'NU' },
                    { name: 'Ontario', code: 'ON' },
                    { name: 'Prince Edward Island', code: 'PE' },
                    { name: 'Quebec', code: 'QC' },
                    { name: 'Saskatchewan', code: 'SK' },
                    { name: 'Yukon', code: 'YT' },
                ],
            },
            city: {
                label: 'City',
                placeholder: 'E.g Ottawa',
                type: 'text',
            },
            linkedin: {
                label: 'LinkedIn profile',
                placeholder: 'LinkedIn profile',
                type: 'text',
            },
            email: {
                label: 'E-mail',
                placeholder: 'E-mail',
                type: 'email',
            },
            subscriptionModal: {
                title: 'Thank you for connecting with us!',
                approval: 'Your informations were submitted for approval.',
                notification: 'You will receive a notification on your email.',
                continueBrowsing: 'Continue browsing',
            },
            statusInformationPopover:
                "This status assists Brito in identifying suitable projects and job opportunities based on his type of visa. Some visas only permit 20 hours of work, and holding citizenship is a requirement for certain government positions, enhancing one's chances of securing a job.",
            title: "Want to join Brito's network?",
            sendButton: 'Send',
        },
    },
    termAndconditions: `<h3>Terms and Conditions</h3>

    <p>Welcome to our institutional website. By accessing and using our website, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our website.</p>
    
    <ol>
    
    <li>Use of the Site</li>
    <p>Our website is intended for informational purposes only. You may not use our website for any illegal or unauthorized purpose. You agree to comply with all applicable laws, rules, and regulations in connection with your use of our website.</p>
    
    <li>Intellectual Property</li>
    <p>The content on our website, including but not limited to text, graphics, images, logos, and software, is our property or the property of our licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content on our website without our prior written consent.</p>
    
    <li>Disclaimer of Warranties</li>
    <p>Our website is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted or error-free, or that our website or the servers that make our website available will be free from viruses or other harmful components. We disclaim all warranties, express or implied, including, without limitation, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
    
    <li>Limitation of Liability</li>
    <p>To the fullest extent permitted by applicable law, we will not be liable for any indirect, incidental, consequential, special, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of our website.</p>
    
    <li>Third-Party Sites</li>
    <p>Our website may contain links to third-party sites that are not owned or controlled by us. We do not endorse or assume any responsibility for the content, privacy practices, or terms of use of any third-party sites. Your access and use of third-party sites are solely at your own risk.</p>
    
    <li>Privacy Policy</li>
    <p>By using our website, you also agree to our Privacy Policy, which can be found [insert link to Privacy Policy].</p>
    
    <li>Modifications to Terms and Site</li>
    <p>We reserve the right to modify these Terms at any time and without prior notice. Your continued use of the website after the posting of the modifications means that you accept and agree to be bound by these updated Terms. We also reserve the right to make changes to or discontinue the website at any time, without prior notice.</p>
    
    <li>Applicable Law and Jurisdiction</li>
    <p>These Terms and any dispute arising out of your use of our website will be governed by and construed in accordance with the laws of [insert name of country or state]. Any dispute related to the use of our website will be exclusively resolved by the competent courts in [insert name of city or state].</p>
    
    <li>General Provisions</li>
    <p>These Terms constitute the entire agreement between you and our institution regarding the use of our website and supersede any prior or contemporaneous agreements between you and our institution regarding the use of our website. If any provision of these Terms is found to be invalid or unenforceable, such provision will be eliminated or limited to the minimum extent necessary so that the Terms remain in full force and effect. Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.</p>
    </ol>
    
    <p>If you have any questions or comments about these Terms, please contact us through our website.</p>`,
    privacyPolicy: `<h3>Privacy Policy</h3>

    <p>We respect your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and disclose personal information that we may obtain from you through your use of our website.</p>
    
    <ol>
    <li>Collection of Information</li>
    <p>We may collect personal information that you voluntarily provide to us, such as your name, email address, and other contact information. We may also collect non-personal information about your use of our website, such as your IP address, browser type, and operating system.</p>
    
    <li>Use of Information</li>
    <p>We may use your personal information to respond to your inquiries, process your requests, and provide you with information about our products and services. We may also use your personal information to improve our website and to communicate with you about updates and promotions.</p>
    
    <p>We may use non-personal information to analyze website usage and to improve the design and content of our website.</p>
    
    <li>Disclosure of Information</li>
    <p>We may disclose your personal information to third-party service providers who assist us in operating our website, conducting our business, or servicing you, such as email providers or web hosting companies. We require our service providers to protect your personal information and to use it only for the purposes for which we disclose it to them.</p>
    
    <p>We may also disclose your personal information if required to do so by law or if we believe that such disclosure is necessary to protect our rights, property, or safety, or the rights, property, or safety of others.</p>
    
    <li>Security of Information</li>
    <p>We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. However, we cannot guarantee the security of your personal information transmitted to our website, and you do so at your own risk.</p>
    
    <li>Links to Third-Party Websites</li>
    <p>Our website may contain links to third-party websites that are not owned or controlled by us. We are not responsible for the privacy practices or the content of such websites. We encourage you to review the privacy policies of these websites before disclosing any personal information to them.</p>
    
    <li>Children's Privacy</li>
    <p>Our website is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under the age of 13, and if we learn that we have inadvertently collected such information, we will promptly delete it.</p>
    
    <li>Changes to this Privacy Policy</li>
    <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. If we make material changes to this policy, we will notify you here, by email, or by means of a notice on our homepage.</p>
    
    <li>Contact Us</li>
    <p>If you have any questions or concerns about this privacy policy, please contact us at [insert email address].</p>
    </ol>
    
    <p>By using our website, you consent to the terms of this privacy policy. If you do not agree with the terms of this policy, please do not use our website.</p>`,
}
export default labels
