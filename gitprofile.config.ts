// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ariyaan-0', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'ariyaan-0/Pensieve',
          'ariyaan-0/blogPost_with_appwirte',
          'ariyaan-0/N8Ventory',
          'ariyaan-0/ChessEngine-withAI',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Products',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: { title: 'Rezaul Hossain', description: '', imageURL: '' },
  social: {
    linkedin: 'rezaul-hossain-ariyaan',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'rezaulhossainaryan@gmail.com',
  },
  resume: {
    fileUrl:
      'https://viewscreen.githubusercontent.com/view/pdf?browser=chrome&bypass_fastly=true&color_mode=dark&commit=2b91557526629b3f4b7b41a847e728417f63bd19&device=unknown_device&docs_host=https%3A%2F%2Fdocs.github.com&enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f6172697961616e2d302f6172697961616e2d302e6769746875622e696f2f326239313535373532363632396233663462376234316138343765373238343137663633626431392f7075626c69632f726573756d652d72657a61756c486f737361696e2e706466&link_underline_enabled=true&logged_in=true&nwo=ariyaan-0%2Fariyaan-0.github.io&path=public%2Fresume-rezaulHossain.pdf&platform=mac&repository_id=1056438869&repository_type=Repository&version=142#c5d17e21-232c-4746-89b1-b30795d09ab8', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: {
    languages: ['Python', 'TypeScript/JavaScript', 'C++'],
    frameworks: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'FastAPI',
      'Docker',
    ],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Mongoose'],
    // ml: ['Tensorflow', 'Keras', 'PyTorch'],
    security: ['JWT', 'OAuth2'],
  },
  experiences: [
    {
      company: 'Integratr.ai',
      position: 'Software Engineer, Intern',
      from: 'October 2025',
      to: 'Present',
      companyLink: 'https://www.integratr.ai/',
      description: [
        'Working on the Education CRM module of Integratr.ai — a multi-tenant AI automation platform. Responsible for developing the frontend in Next.js and integrating it with a FastAPI backend, developing a scalable, tenant-aware architecture that powers education-focused automation, and analytics.',
      ],
    },
    {
      company: 'East West University',
      position: 'Graduate Teaching Assistant',
      from: 'October 2024',
      to: 'June 2025',
      companyLink: 'https://www.ewubd.edu/',
      description: [
        'Worked as a Graduate Teaching Assistant for the Algorithms and Big Data Analytics course, conducting lab sessions, assisting with coursework, and providing academic support. This role strengthened my leadership, communication, and classroom management skills.',
      ],
    },
    {
      company: 'East West University',
      position: 'Undergraduate Teaching Assistant',
      from: 'October 2023',
      to: 'October 2024',
      companyLink: 'https://www.ewubd.edu/',
      description: [
        'Served as an Undergraduate Teaching Assistant for the Machine Learning course, assisting with lab sessions, helping students understand core ML concepts, and supporting them with assignments and project work. This experience enhanced my technical knowledge, communication skills, and ability to explain complex ideas in a clear and accessible manner.',
      ],
    },
    {
      company: 'Designers Do Futuro',
      position: 'Intern (Data Science Engineer) ',
      from: 'February 2024',
      to: 'April 2024',
      companyLink: 'https://www.thediscoveryai.com/',
      description: [
        'Worked on analyzing business data and creating visualizations to uncover insights that supported smarter decision-making. Built predictive models to forecast sales trends, helping improve business strategies. Leveraged tools like Python, NumPy, Pandas, Matplotlib, Seaborn, and TensorFlow to turn data into practical, actionable outcomes.',
      ],
    },
    // {
    //   company: 'Assignoholic Research and Consultancy',
    //   position: 'Academic Content Researcher',
    //   from: 'June 2021',
    //   to: 'October 2022',
    //   companyLink: 'https://assignoholic.com/',
    //   description: [
    //     'Worked as an Academic Content Researcher, producing technical reports, research articles, business presentations, and posters across fields like technology, business, and economics. Conducted independent research, created well-structured, referenced materials, and ensured high-quality, deadline-driven deliverables. This role strengthened my research skills, adaptability, and ability to communicate complex ideas clearly.',
    //   ],
    // },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'East West University',
      degree: 'B.Sc in Computer Science and Engineering',
      from: '2020',
      to: '2024',
      logoUrl:
        'https://raw.githubusercontent.com/ariyaan-0/ariyaan-0.github.io/refs/heads/main/public/uni.png',
    },
    {
      institution: 'Brahmanbaria Government College',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2016',
      to: '2018',
      logoUrl:
        'https://raw.githubusercontent.com/ariyaan-0/ariyaan-0.github.io/refs/heads/main/public/bbaria.png',
    },
    {
      institution: 'Annada Government High School',
      degree: 'Secondary School Certificate (SSC)',
      from: '2014',
      to: '2016',
      logoUrl:
        'https://raw.githubusercontent.com/ariyaan-0/ariyaan-0.github.io/refs/heads/main/public/annada.png',
    },
  ],
  publications: [
    {
      title:
        'Leveraging MFCC Features for Bangla Audio Emotion Classification Using a ResNet-Transformer Encoder Fusion',
      conferenceName:
        "Artificial Intelligence & Knowledge Processing (AIKP'25)",
      //   journalName: 'Journal Name',
      authors:
        'Md Rezaul Hossain, Fakiha Rahman Soha, Tajkiratul Abida Ananna, Ruba Sazeda, Dr. Anisur Rahman',
      //   link: 'https://example.com',
      description:
        'The usage of speech data with the emerging advancement of Artificial Intelligence has significantly increased in diverse sectors, placing speech sentiment analysis as a prominent research focus within the realm of Natural Language Processing (NLP). Though Bangla is spoken by approximately 210 million people worldwide, Bangla speech sentiment analysis is still limited in research. This paper addresses the research gap by leveraging the strengths of Convolutional Neural Networks (CNN) and Transformer architectures, applied to the largest publicly available corpora in this language: SUBESO and BanglaSER. Relying on Mel-Frequency Cepstral Coefficients (MFCC), our model is trained on both datasets. This model has been evaluated on 7 distinct emotions: Surprise, Neutral, Sad, Happy, Angry, Disgust, and Fear. Our model has achieved 92% accuracy on the SUBESCO dataset. In addition, this is the first model to achieve 91% accuracy with the combined dataset (SUBESCO+BanglaSER) on 7-class Bangla speech emotion recognition using a hybrid CNN-Transformer architecture.',
    },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],

  awards: [
    {
      title: 'Merit Scholarship',
      year: 2024,
      description:
        'Awarded a full tuition-free Merit Scholarship by East West University for outstanding academic performance in the B.Sc. in Computer Science and Engineering program. This recognition is given to students in the top 10% who have completed at least 35 credits over three consecutive semesters with a minimum CGPA of 3.90. I achieved a CGPA of 3.91 out of 4.00, qualifying for this prestigious honor in the Summer 2023 semester.',
      logoUrl:
        'https://raw.githubusercontent.com/ariyaan-0/ariyaan-0.github.io/refs/heads/main/public/uni.png',
    },
    {
      title: 'Medha Lalon Scholarship',
      year: 2021,
      description:
        'Received the Medha Lalon Fund Scholarship from East West University for academic excellence in the CSE program. This merit-based scholarship recognizes students (CGPA 3.50+) from diverse and underrepresented backgrounds.',
      logoUrl:
        'https://raw.githubusercontent.com/ariyaan-0/ariyaan-0.github.io/refs/heads/main/public/uni.png',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'ariyaan', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: ['lofi', 'black', 'dim', 'sunset'],
  },

  enablePWA: true,
};

export default CONFIG;
