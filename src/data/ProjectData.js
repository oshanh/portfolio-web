import ExploreWild from '../assets/Projects/ExploreWild.png';
import TradeManager from '../assets/Projects/TradeMnager.png';
import YouHeal from '../assets/Projects/YouHeal.png';
import RTC from '../assets/Projects/RTC.png';
import RuhSchedulEase from '../assets/Projects/RuhSchedulEase.png';
import DebitManager from '../assets/Projects/DebitManager.png';
import JobNotifier from '../assets/Projects/job-notifier.png';
import JobNotifier1 from '../assets/Projects/job-notifier-1.png';
import JobNotifier2 from '../assets/Projects/job-notifier-2.png';
import JobNotifier3 from '../assets/Projects/job-notifier-3.png';

const projects = [
    {
        id:'job-notifier',
        title: 'Job Notifier',
        shortDescription: 'Job notifier web application built with React.js and Spring Boot.',
        fullDescription:
            'Job notifier is a comprehensive job notifier system that allows users to find jobs according to their skills and interests. The application features an intuitive dashboard and a responsive React.js interface with modern styling.',
        thumbnail: JobNotifier,
        screenshots: [JobNotifier1,JobNotifier2,JobNotifier3],
        techStack: ['React.js', 'Spring Boot', 'PostgreSQL'],
        category: 'Web',
        githubLink: 'https://github.com/oshanh/job-notifier',
        demoLink: null,
        demoVideo: null,
        featured: true,
    },
    {
        id: 'explorewild',
        title: 'ExploreWild',
        shortDescription: 'Zoo management desktop application built with JavaFX.',
        fullDescription:
            'ExploreWild is a comprehensive zoo management system that allows administrators to manage animal records, enclosures, staff assignments, and visitor ticketing. The application features an intuitive dashboard with real-time statistics, search and filter capabilities, and a responsive JavaFX interface with modern styling.',
        thumbnail: ExploreWild,
        screenshots: [ExploreWild],
        techStack: ['Java', 'JavaFX', 'MySQL', 'Scene Builder'],
        category: 'Desktop',
        githubLink: 'https://github.com/oshanh/explorewild_JavaFX',
        demoLink: null,
        demoVideo: null,
        featured: true,
    },
    {
        id: 'trademanager',
        title: 'TradeManager',
        shortDescription: 'USD buy & sell management platform built with Java.',
        fullDescription:
            'TradeManager is a financial trading tool designed to streamline USD buy and sell operations. It features transaction tracking, profit/loss calculations, historical data analysis, and comprehensive reporting. The application provides real-time exchange rate monitoring and automated record keeping for currency traders.',
        thumbnail: TradeManager,
        screenshots: [TradeManager],
        techStack: ['Java', 'Swing', 'MySQL'],
        category: 'Desktop',
        githubLink: 'https://github.com/oshanh/TradeManager',
        demoLink: null,
        demoVideo: null,
        featured: false,
    },
    {
        id: 'youheal',
        title: 'YouHeal Website',
        shortDescription: 'Hospital website with pure HTML, CSS & JavaScript.',
        fullDescription:
            'YouHeal is a modern, responsive hospital website designed to provide patients with easy access to medical services, doctor profiles, appointment booking, and health resources. Built entirely with vanilla HTML, CSS, and JavaScript, the site features smooth animations, a clean medical-themed design, and full mobile responsiveness.',
        thumbnail: YouHeal,
        screenshots: [YouHeal],
        techStack: ['HTML', 'CSS', 'JavaScript'],
        category: 'Web',
        githubLink: 'https://github.com/oshanh/Hospital-website',
        demoLink: null,
        demoVideo: null,
        featured: true,
    },
    {
        id: 'rtc',
        title: 'Rashmi Tyre Center',
        shortDescription: 'E-Business web application for a tyre center.',
        fullDescription:
            'An end-to-end e-business web application developed for Rashmi Tyre Center. The platform enables customers to browse tyre inventories, compare products, place orders online, and schedule installations. It includes an admin panel for inventory management, order processing, and customer relationship management.',
        thumbnail: RTC,
        screenshots: [RTC],
        techStack: ['React.js', 'Spring Boot', 'MySQL', 'REST API'],
        category: 'Web',
        githubLink: 'https://github.com/SPradeepIndie/MOSAD',
        demoLink: null,
        demoVideo: null,
        featured: true,
    },
    {
        id: 'ruhschedulease',
        title: 'RuhSchedulEase',
        shortDescription: 'Academic timetable management web application.',
        fullDescription:
            'RuhSchedulEase is a collaborative academic management platform that simplifies timetable creation and management for university departments. Features include automated conflict detection, room allocation, lecturer scheduling, and student-facing timetable views. The system supports multiple academic programs and generates exportable schedules.',
        thumbnail: RuhSchedulEase,
        screenshots: [RuhSchedulEase],
        techStack: ['React.js', 'Laravel', 'MySQL', 'REST API'],
        category: 'Web',
        githubLink: 'https://github.com/gimhanadeshan/Group-Project-CSC2233',
        demoLink: null,
        demoVideo: null,
        featured: true,
    },
    {
        id: 'debitmanager',
        title: 'Debit Manager',
        shortDescription: 'Track debtor progress and mark repayments easily.',
        fullDescription:
            'Debit Manager is a personal finance tool that helps users track and manage debts owed to them. Features include debtor profiles, repayment scheduling, progress tracking with visual indicators, notification reminders, and comprehensive financial summaries. The application provides a clear overview of outstanding balances and payment history.',
        thumbnail: DebitManager,
        screenshots: [DebitManager],
        techStack: ['React.js', 'Spring Boot', 'MySQL'],
        category: 'Web',
        githubLink: 'https://github.com/oshanh/DebitManager',
        demoLink: null,
        demoVideo: null,
        featured: false,
    },
    {
        id: 'debitmanager-app',
        title: 'Debit Manager App',
        shortDescription: 'Track debtor progress and mark repayments easily.',
        fullDescription:
            'Debit Manager is a personal finance tool that helps users track and manage debts owed to them. Features include debtor profiles, repayment scheduling, progress tracking with visual indicators, and comprehensive financial summaries. The application provides a clear overview of outstanding balances and payment history.',
        thumbnail: DebitManager,
        screenshots: [DebitManager],
        techStack: ['React Native', 'Expo', 'SQLite'],
        category: 'Mobile',
        githubLink: 'https://github.com/oshanh/debit-manager-app',
        demoLink: null,
        demoVideo: null,
        featured: true,
    },
];

export default projects;
