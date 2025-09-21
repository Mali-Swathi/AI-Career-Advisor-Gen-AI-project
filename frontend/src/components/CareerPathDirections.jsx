import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CareerPathDirections.css';

// Predefined career directions data with a more consistent structure
const careerRoadmaps = {
    "Software Engineer": `
**Software / IT / AI / Cybersecurity**
Foundations: Learn programming (Python, Java, C++), DSA, OOPs.
Skills & Tools: Databases (SQL), Cloud (AWS, Azure, GCP), AI/ML basics, Cybersecurity tools.
Practice: Hackathons, coding contests, GitHub projects.
Certifications: Google Cloud, AWS, Microsoft AI, CEH (Cybersecurity).
Entry: Intern → Software Engineer / AI Engineer / Cyber Analyst.
Growth: Senior Engineer → Architect → CTO → Start-up Founder.
`,
    "Physician/Doctor": `
**Healthcare / Medicine / Pharmacy**
Foundations: Biology, Chemistry, Anatomy, Biotech.
Skills: Clinical practice, lab work, patient care.
Practice: Hospital rotations, internships, pharma labs.
Certifications: Nursing, Pharmacy, AI in Healthcare.
Entry: Doctor, Nurse, Pharmacist, Biotech Engineer.
Growth: Specialist Doctor, Research Scientist, Hospital Administrator.
`,
    "Government Officer": `
**Government Jobs (Civil Services, PSU, Banking, Defense)**
Preparation: NCERTs, Current Affairs, Aptitude, GK.
Exams: UPSC (IAS/IPS/IFS), SSC, Banking (IBPS/SBI), PSU, RRB.
Extra: Physical training (Defense/Police).
Entry: IAS, IPS, Clerk/PO, PSU Engineer, Defense Officer.
Growth: Senior administrative ranks, PSU executive, Armed Forces leadership.
`,
    "Teacher": `
**Education & Teaching**
Foundations: Master one subject (Math, CS, English, Science).
Skills: Teaching methods, communication, ed-tech.
Practice: Teaching internships, online tutoring, content creation.
Certifications: B.Ed, M.Ed, UGC NET, Digital Teaching (Google Classroom).
Entry: School Teacher → Lecturer → Professor.
Growth: Principal, Dean, Curriculum Designer, EdTech Founder.
`,
    "Entrepreneur": `
**Business / Entrepreneurship / Management**
Foundations: Finance, HR, Marketing, Strategy.
Skills: Leadership, negotiation, decision-making.
Practice: Start small ventures, internships, e-commerce.
Certifications: MBA, PMP, CFA, Lean Six Sigma.
Entry: Analyst, Manager, Entrepreneur.
Growth: CEO, Founder, Angel Investor.
`,
    "Graphic Designer": `
**Arts / Design / Creativity**
Foundations: Drawing, Storytelling, Creativity.
Skills: Photoshop, Illustrator, Figma, Animation, Canva.
Practice: Freelance, build portfolio, social media.
Certifications: UI/UX, Animation, Motion Graphics.
Entry: Designer, Animator, Fashion Designer.
Growth: Creative Director, Studio Founder.
`,
    // Corrected key to match URL format
    "Athlete/Coach": `
**Sports / Fitness / Athletics**
Foundations: Fitness, Discipline, Sports Science.
Skills: Nutrition, Training methods.
Practice: Academies, tournaments, leagues.
Certifications: Sports Management, Fitness Trainer.
Entry: Athlete, Coach, Sports Analyst.
Growth: National/International Athlete → Coach → Sports Director → Sports Entrepreneur.
`,
    "Politician": `
**Politics / Social Leadership**
Foundations: Political Science, Law, Economics.
Skills: Public speaking, debate, leadership.
Practice: Student politics, NGOs, campaigns.
Entry: Politician, Policy Analyst, Social Activist.
Growth: Minister, Party Leader, International Diplomacy.
`,
    "Comedian": `
**Stand-Up Comedy / Entertainment**
Foundations: Comedy writing, storytelling.
Skills: Stage presence, improv.
Practice: Open mics, reels, YouTube.
Entry: Comedian, Scriptwriter, Content Creator.
Growth: Comedy tours, Netflix/Amazon specials, Actor.
`,
    "Financial Analyst": `
**Finance / Banking / Accounting**
Foundations: Economics, Accounting, Taxation.
Skills: Stock market, Excel, Financial analysis.
Certifications: CFA, CPA, FRM.
Practice: Internships in banks, stock trading.
Entry: Accountant, Analyst, Banker.
Growth: CFO, Investment Banker, Hedge Fund Manager.
`,
    "Lawyer": `
**Law / Legal Services**
Foundations: LLB, BA-LLB, Cyber Law.
Skills: Legal drafting, case analysis, negotiation.
Practice: Moot courts, internships with advocates.
Entry: Lawyer, Legal Advisor, Judge (after exams).
Growth: Senior Counsel, High Court Judge, Legal Consultant.
`,
    "Journalist": `
**Media / Journalism / Content Creation**
Foundations: Mass Communication, Journalism.
Skills: Writing, video editing, digital marketing.
Practice: Blogs, podcasts, internships.
Entry: Journalist, Anchor, Content Creator.
Growth: Editor, Media Head, YouTuber.
`,
    "Environmental Scientist": `
**Agriculture / Sustainability**
Foundations: Agri-tech, Food Science, Hydroponics.
Skills: Farming tech, sustainability.
Practice: Rural internships, NGOs.
Certifications: Agri-business, Organic Farming.
Entry: Agri Engineer, NGO Worker.
Growth: Agri Entrepreneur, Sustainability Director.
`,
    "Defense Officer": `
**Defense / Police / Paramilitary**
Preparation: NDA, CDS, CAPF exams.
Skills: Discipline, Endurance.
Entry: Army/Navy/Airforce Officer, Police.
Growth: Senior Army Officer, DGP, Paramilitary Commander.
`,
    "Musician": `
**Music / Performing Arts**
Foundations: Singing, Instruments, Music Production.
Practice: Live shows, competitions, YouTube.
Entry: Singer, Musician, Composer.
Growth: International tours, Music Director.
`,
    "Scientist": `
**Science / Research**
Foundations: Physics, Chemistry, Biology, Space.
Skills: Research methodology, lab experiments.
Practice: Publish papers, research labs.
Entry: Scientist, Analyst.
Growth: Senior Researcher, Lab Head, Nobel Laureate (dream path).
`,
    "Skilled Tradesman": `
**Skilled Trades / Vocational Careers**
Foundations: Mechanical/electrical basics.
Practice: Apprenticeships, ITI/Diploma.
Entry: Technician, Mechanic, Carpenter, Driver.
Growth: Contractor, Business Owner.
`,
    "Hotel Manager": `
**Hotel Manager (Hospitality)**
Learn: Hotel operations, customer service, food & beverage, tourism basics.
Practice: Internships in hotels/restaurants (front desk, F&B, housekeeping).
Certifications: BHM (Hotel Management), HACCP, Food Safety, Revenue Management.
Entry Roles: Front Desk Officer, F&B Supervisor.
Growth: Assistant Manager → Operations Manager → General Manager (GM) → Regional Director.
`,
    "Pilot/Astronaut": `
**Space / Aviation**
Foundations: Aerospace Engineering, Aviation.
Certifications: Pilot License, Drone Ops.
Entry: Pilot, Aerospace Engineer.
Growth: Astronaut, Airline Captain.
`,
    "Motivational Speaker": `
**Motivational Speaker / Corporate Trainer**
Foundations: Public speaking, storytelling.
Practice: Webinars, open events, college talks.
Certifications: Toastmasters, NLP, Dale Carnegie.
Entry: Speaker, Trainer.
Growth: TEDx, International Keynote Speaker, Author.
`,
    "Architect": `
**Architecture**
Learn: Drawing, CAD, AutoCAD, Revit, Design theory.
Practice: Academic design projects, model making, internships in firms.
Certifications: B.Arch / M.Arch, Interior Design courses.
Entry Roles: Junior Architect, Interior Designer, CAD Draftsman.
Growth: Senior Architect → Urban Planner → Own Architecture Firm → Smart City Planner.
`,
    "Event Manager": `
**Event Management**
Learn: Event logistics, budgeting, negotiation, vendor management.
Practice: Volunteer in college fests, weddings, corporate events.
Certifications: Event Management Diploma, CMP (Certified Meeting Professional).
Entry Roles: Event Coordinator, Venue Manager.
Growth: Event Manager → Senior Producer → Festival Director → Own Event Agency.
`,
    "Emerging Tech Engineer": `
**Emerging Tech (2025+)**
Learn: AI/ML, Robotics, Blockchain, Web3, Renewable Energy, Climate Science.
Practice: Research projects, hackathons, internships in startups.
Certifications: AI/ML (Coursera/Google), Blockchain, Renewable Energy courses.
Entry Roles: AI Engineer, Robotics Developer, Blockchain Analyst, Climate Consultant.
Growth: Lead Engineer → Tech Entrepreneur → Global Expert in Emerging Tech.
`,
    "Core/Specialized Engineer": `
**Engineer (Core + Specialized)**
Learn: Physics, Math, Engineering fundamentals (Mechanical, Civil, Electrical, CS).
Practice: Labs, projects, internships, competitions.
Certifications: CAD (for Mechanical/Civil), PLC (Electrical), AWS/DSA (CS).
Entry Roles: Junior Engineer, Software Developer, Site Engineer.
Growth: Senior Engineer → Project Manager → CTO/Chief Engineer → Entrepreneur.
`,
    "Educator": `
**Teacher / Educator**
Learn: Subject specialization (Math, Science, CS, English, Social Studies).
Practice: Teaching practice in schools, online tutoring, EdTech platforms.
Certifications: B.Ed, M.Ed, UGC NET, Online Teaching Tools.
Entry Roles: School Teacher, Lecturer, Tutor.
Growth: Professor → Principal → Education Consultant → Curriculum Designer → EdTech Founder.
`,
    "Social Leader": `
**Politician / Social Leader**
Learn: Political Science, Law, Economics, Public Administration.
Practice: Debate clubs, NGOs, volunteering, student politics.
Skills: Public speaking, networking, negotiation, leadership.
Entry Roles: Party Worker, Campaign Coordinator, Youth Leader.
Growth: Politician → MLA/MP → Minister → National Leader / International Diplomat.
`,
    "Fitness Trainer": `
**Sports / Athlete / Fitness**
Learn: Sport-specific training, discipline, nutrition, sports science.
Practice: Join academies, play in tournaments, leagues.
Certifications: Fitness Trainer, Sports Management, Coaching.
Entry Roles: Athlete, Fitness Trainer, Sports Analyst.
Growth: National/International Athlete → Coach → Sports Director → Sports Entrepreneur.
`,
    "Performing Artist": `
**Actor / Performing Arts**
Learn: Acting basics, theatre, script reading, body language, voice training.
Practice: Drama clubs, theatre groups, short films, social media reels.
Certifications: Drama/Acting courses, Film School, Camera Acting workshops.
Entry Roles: Theatre Actor, TV Actor, Content Creator.
Growth: Film Actor → Lead Roles → Director/Producer → Global Recognition.
`,
};

const CareerPathDirections = () => {
    const { careerTitle } = useParams();
    const navigate = useNavigate();
    const cleanTitle = decodeURIComponent(careerTitle);

    // Look up the career title in the predefined data
    const roadmap = careerRoadmaps[cleanTitle];

    return (
        <div className="career-path-container">
            <h1>Career Roadmap for {cleanTitle}</h1>
            <div className="roadmap-content">
                {roadmap ? (
                    <pre>{roadmap}</pre>
                ) : (
                    <p>Directions for this career are not yet available. Please check back later!</p>
                )}
            </div>
            <button onClick={() => navigate(-1)} className="back-button">
                Back to Results
            </button>
        </div>
    );
};

export default CareerPathDirections;