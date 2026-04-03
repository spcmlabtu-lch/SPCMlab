/* ═══════════════════════════════════════════════════════════════════════════
   DATA.JS — SPCM Lab Website Content
   ═══════════════════════════════════════════════════════════════════════════
   
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE THE WEBSITE.
   
   Instructions:
   1. Find the section you want to update (NEWS, RESEARCH, LEADER, etc.)
   2. Edit the text between the quotes " "
   3. To ADD a new item, copy an existing item and paste below it
   4. To REMOVE an item, delete the entire { ... }, block
   5. Save this file and re-upload to the server
   
   IMPORTANT: 
   - Don't remove the commas between items
   - Don't remove the square brackets [ ]
   - Keep quotes around text values
   - Lines starting with // are comments (ignored by the browser)
   
   ═══════════════════════════════════════════════════════════════════════════ */


// ╔═══════════════════════════════════════════════════════════════════════╗
// ║  SECTION 1: NEWS TICKER (scrolling bar at top)                      ║
// ║  Just add or remove lines. They auto-scroll across the page.        ║
// ╚═══════════════════════════════════════════════════════════════════════╝

const NEWS = [
    "New paper accepted in Physical Review B — Congratulations to the team!",
    "PhD Scholar awarded prestigious fellowship — 2026",
    "Group presented at International Conference on Statistical Physics",
    "New M.Sc. students joined the lab — Welcome!",
    "Collaborative project launched with IIT Guwahati",
];


// ╔═══════════════════════════════════════════════════════════════════════╗
// ║  SECTION 2: HERO STATS (the 3 numbers on the home page)            ║
// ║  Update the count values when team size changes.                    ║
// ╚═══════════════════════════════════════════════════════════════════════╝

const HERO_STATS = [
    { count: 3, label: "Research Areas" },
    { count: 2, label: "PhD Scholars" },
    { count: 3, label: "M.Sc. Students" },
];


// ╔═══════════════════════════════════════════════════════════════════════╗
// ║  SECTION 3: RESEARCH AREAS                                          ║
// ║                                                                      ║
// ║  icon: FontAwesome icon name (e.g., "fa-magnet", "fa-wave-square")  ║
// ║  color: "blue" or "teal"                                            ║
// ║  keywords: list of tags shown below the description                 ║
// ╚═══════════════════════════════════════════════════════════════════════╝

const RESEARCH = [
    {
        title: "Hysteresis: Random-Field Ising Model",
        icon: "fa-magnet",
        color: "blue",
        text: "The critical response of complex systems to a smoothly varying force applies to a broad category of interesting nonequilibrium effects in disordered physical systems — earthquakes, avalanche, Barkhausen noise in magnetic materials. We study hysteresis as a paradigm of nonequilibrium phenomena and the zero-temperature random-field Ising model (RFIM) to understand critical behaviour in systems with quenched disorder.",
        keywords: ["RFIM", "Barkhausen Noise", "Avalanche", "Nonequilibrium"],
    },
    {
        title: "Disordered Quantum System: Two Interacting Particles",
        icon: "fa-wave-square",
        color: "teal",
        text: "The manifestation of disorder and interaction in quantum systems has been a hot topic in recent years. We study the well known single particle Anderson localization problem extended to two interacting particles (TIP) in the presence of quasiperiodic and box-width disorder distribution, in spatial dimensions 1 and 2. Experimental advances in photonics and ultra-cold atoms make it feasible to probe such phenomena.",
        keywords: ["Anderson Localization", "TIP", "Quasiperiodic", "Ultra-cold Atoms"],
    },
    {
        title: "Random Bond Ising Model",
        icon: "fa-magnet",
        color: "blue",
        text: "We are studying the hysterisis and avalanche behaviour in the random bond Ising model (RBIM) in Random Graphs. The RBIM is a close cousin of the RFIM, where the disorder is in the coupling strength between spins rather than in the local fields. We are interested in understanding how the nature of disorder affects critical behaviour and universality in disordered systems.",
        keywords: ["RBIM", "Random Graph", "Avalanche", "Nonequilibrium"],
    },
    // To add a new research area, copy the block below and fill in:
    // {
    //     title: "Your New Research Title",
    //     icon: "fa-atom",
    //     color: "teal",
    //     text: "Description of the research area...",
    //     keywords: ["Keyword1", "Keyword2", "Keyword3"],
    // },
];


// ╔═══════════════════════════════════════════════════════════════════════╗
// ║  SECTION 4: GROUP LEADER                                            ║
// ║                                                                      ║
// ║  photo: path to photo image (e.g., "images/leader.jpg")             ║
// ║         Leave as "" to show the default placeholder icon             ║
// ║  links: set url to "#" if not yet available                         ║
// ╚═══════════════════════════════════════════════════════════════════════╝

const LEADER = {
    name: "Dr. Diana Thongjaomayum",
    title: "Assistant Professor / Group Leader",
    affiliation: "Department of Physics, Tezpur University, Assam, India",
    photo: "",  // <-- Put image path here, e.g., "images/diana.jpg"
    bio: [
        "Dr. Diana Thongjaomayum leads the Statistical Physics and Condensed Matter Laboratory at Tezpur University. Her research explores the effect of quenched disorder in condensed matter physics, working on problems spanning hysteresis in strongly disordered ferromagnets and electron localization in disordered quantum systems.",
        // Add more paragraphs here if needed:
        // "Another paragraph of biography text...",
    ],
    extraInfo: "Detailed biography, educational background, research experience, awards and recognitions, teaching interests — to be added here.",
    links: {
        scholar:    "#",  // Google Scholar URL
        orcid:      "#",  // ORCID URL
        researchgate: "#",  // ResearchGate URL
        email:      "#",  // mailto:email@tezu.ernet.in
        university: "#",  // University profile URL
    },
};


// ╔═══════════════════════════════════════════════════════════════════════╗
// ║  SECTION 5: TEAM MEMBERS                                            ║
// ║                                                                      ║
// ║  category: Groups members under headings                            ║
// ║  photo: path to photo (e.g., "images/student1.jpg")                 ║
// ║         Leave as "" to show the default user icon                   ║
// ╚═══════════════════════════════════════════════════════════════════════╝

const TEAM = [
    {
        category: "PhD Scholars",
        members: [
            { name: "[PhD Scholar 1]", role: "PhD Student", email: "email@tezu.ac.in", photo: "" },
            { name: "[PhD Scholar 2]", role: "PhD Student", email: "email@tezu.ac.in", photo: "" },
            // Add more PhD scholars:
            // { name: "New Student Name", role: "PhD Student", email: "their@tezu.ac.in", photo: "" },
        ],
    },
    {
        category: "M.Sc. Project Students",
        members: [
            { name: "[Lohit Ch Hazarika]", role: "M.Sc. Project Student", email: "phi21018@tezu.ac.in", photo: "lohit.jpg" },
            { name: "[M.Sc. Student 2]", role: "M.Sc. Project Student", email: "email@tezu.ac.in", photo: "" },
            { name: "[M.Sc. Student 3]", role: "M.Sc. Project Student", email: "email@tezu.ac.in", photo: "" },
        ],
    },
    {
        category: "Alumni",
        members: [
            // Add alumni when ready:
            // { name: "Former Student", role: "PhD (2020-2024)", email: "email@gmail.com", photo: "" },
        ],
    },
];


// ╔═══════════════════════════════════════════════════════════════════════╗
// ║  SECTION 6: PUBLICATIONS                                            ║
// ║                                                                      ║
// ║  Numbering is automatic — just add items in the order you want.     ║
// ║  link: URL to the paper (optional, set to "" if not available)      ║
// ╚═══════════════════════════════════════════════════════════════════════╝

const PUBLICATIONS = [
    {
        title: "[Publication title placeholder]",
        authors: "[Authors]",
        journal: "[Journal Name]",
        year: "[Year]",
        link: "",  // e.g., "https://doi.org/10.1103/..."
    },
    {
        title: "[Publication title placeholder]",
        authors: "[Authors]",
        journal: "[Journal Name]",
        year: "[Year]",
        link: "",
    },
    {
        title: "[Publication title placeholder]",
        authors: "[Authors]",
        journal: "[Journal Name]",
        year: "[Year]",
        link: "",
    },
    {
        title: "[Publication title placeholder]",
        authors: "[Authors]",
        journal: "[Journal Name]",
        year: "[Year]",
        link: "",
    },
    {
        title: "[Publication title placeholder]",
        authors: "[Authors]",
        journal: "[Journal Name]",
        year: "[Year]",
        link: "",
    },
    // To add a new publication, copy this block and fill in:
    // {
    //     title: "Your Paper Title Here",
    //     authors: "A. Author, B. Author, C. Author",
    //     journal: "Physical Review B",
    //     year: "2026",
    //     link: "https://doi.org/10.xxxx/xxxxx",
    // },
];


// ╔═══════════════════════════════════════════════════════════════════════╗
// ║  SECTION 7: CONTACT INFORMATION                                     ║
// ╚═══════════════════════════════════════════════════════════════════════╝

const CONTACT = {
    address: [
        "Statistical Physics & Condensed Matter Laboratory",
        "Department of Physics, Tezpur University",
        "Napaam, Sonitpur, Assam — 784028, India",
    ],
    email: "[email]@tezu.ernet.in",
    phone: "[Phone number placeholder]",
    website: "https://www.tezu.ernet.in",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.4278916820012!2d92.82996671120434!3d26.698773976678513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744ebb8b23fffff%3A0x245e8f9dd26023af!2sDepartment%20of%20Physics!5e0!3m2!1sen!2sin!4v1775183037220!5m2!1sen!2sin",
};
