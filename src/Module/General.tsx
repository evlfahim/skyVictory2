import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import pass from './Assets/sponsorsLogos/1pass.png';
import ACF from './Assets/sponsorsLogos/ACF.png';
import cfc from './Assets/sponsorsLogos/cfc.png';
import echoAR from './Assets/sponsorsLogos/echoAR.png';
import egg from './Assets/sponsorsLogos/egg.png';
import glimpse from './Assets/sponsorsLogos/glimpse.png';
import interviewC from './Assets/sponsorsLogos/interview-cake.jpg';
import ll from './Assets/sponsorsLogos/ll.png';
import qoom from './Assets/sponsorsLogos/qoom.svg';
import Replit from './Assets/sponsorsLogos/replit.png';
import sublime from './Assets/sponsorsLogos/sublime.png';
import taskade from './Assets/sponsorsLogos/taskade.png';
import lyin from './Assets/teami/lyin.jpg';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import me from './Assets/teami/me.png';
import moon from './Assets/teami/moon.png';
import Ryah from './Assets/teami/Ryah.jpg';
import zoha from './Assets/teami/zoha.png';

const TOP_SECTION = {
  TITLE: 'Join Sky Victory',
  Typed_effect: [
    "Do you think you're investing your money correctly?",
    'Answer  quick questions to find out if investing suits you and meets your needs. Start now.'
  ]
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/skyvictory_uae/',
  discord: 'https://discord.com/invite/tcm-esports-446162081692254208',
  linkedin:
    'https://www.linkedin.com/company/sky-victory-real-estate-management/?originalSubdomain=ae',
  twitter:
    'https://twitter.com/i/flow/login?redirect_after_login=%2Fchidalu___',
  devpost: 'https://skyvictory-12968.devpost.com/',
  email: 'info@skyvictory.com',
  mail: 'info@skyvictory.com'
};

const MIDDLE_SECTION = {
  TITLE: 'Just give me 5 minutes of your time ',
  LONG_DESCRIPTION: '',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u'
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u'
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 12,
  year: 2021
};

const schedule = [
  {
    day: '8-11-2021',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '5-12-2021',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '3-12-2021',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '1-12-2021',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '1-1-2022',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'overall First',
      content:
        'First Overall prize will be given to a project that outstands all other submissions'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'overall Second',
      content:
        'Second Overall prize will be given to the second best project of the hackathon'
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: 'Third Second',
      content:
        'Best third overall project of the hackathon will win some awesome prizes'
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: 'Best Solo',
      content:
        'You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team'
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: ' Best Beginner',
      content: 'Your project will qualify for this category if atleast 50% '
    },
    {
      icon: <i className=" fifth fa-3x fas fa-book-open"></i>,
      type: 'Best UI/UX',
      content: 'Project with most creative designs will be UI/UX track'
    }
  ],
  [
    //Array 3
    {
      icon: <i className="fas fa-4x sixth fa-male"></i>,
      type: 'Best Web App with Qoom',
      content: 'Must use qoom in your project to win this category'
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: 'More prizes',
      content: 'More prizes will be revealed later'
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: 'https://github.com/Limbo-Hacks/Hackathon-website-template',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Erika',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Ryah Garcia',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is Sky Victory?',
        content:
          'Sky Victory is a real estate brokerage firm known for its commitment to providing top-tier realty services. The company specializes in facilitating the buying, selling, and leasing of properties across a diverse range of markets. With a focus on customer satisfaction, Sky Victory prides itself on its expert knowledge, professionalism, and dedication to securing the best outcomes for its clients. Whether you are looking to invest in real estate, find your dream home, or sell a property, Sky Victory offers tailored services to meet your specific needs.'
      },
      {
        label: 'What services does Sky Victory offer?',
        content:
          'Sky Victory provides comprehensive real estate services, including property buying, selling, leasing, and management. We also offer market analysis, property valuation, and investment advisory services to help our clients make informed decisions.'
      },
      {
        label: 'How can Sky Victory help me find a property to buy?',
        content:
          'Our team of experienced agents uses a detailed understanding of the local real estate market to find properties that match your criteria and budget. We provide clients with a curated list of options, accompanied by professional advice and guided property tours.'
      },
      {
        label:
          'What makes Sky Victory different from other real estate brokers?',
        content:
          'What sets us apart is our client-centric approach, deep market knowledge, and our use of cutting-edge technology to enhance your experience and results. We prioritize transparent communication and personalized service, ensuring that every transaction is handled with integrity and attention to detail.'
      }
    ],
    [
      {
        label: 'Does Sky Victory handle property rentals?',
        content:
          'Yes, Sky Victory offers rental services for both residential and commercial properties. We assist landlords in finding suitable tenants and help potential renters find their ideal home or business space, handling all negotiations and paperwork for a smooth transaction.'
      },
      {
        label: 'Can Sky Victory assist with selling my property?',
        content:
          'Absolutely. Our selling services include market analysis, property listing, marketing, staging advice, negotiation handling, and closing assistance. We strive to get the best possible price for your property in the shortest amount of time.'
      },
      {
        label: 'What areas does Sky Victory serve?',
        content:
          'Sky Victory primarily operates in the urban and suburban areas of Abu Dhabi, but we also handle selected properties and developments in broader regions depending on the needs of our clients.'
      },
      {
        label: 'How does Sky Victory support international clients?',
        content:
          'For our international clients, we offer virtual tours, remote transaction facilitation, and multilingual support to ensure a seamless and hassle-free real estate experience, regardless of where you are located.'
      }
    ]
  ]
];

export {
  calenderStartingDate,
  FOOTER,
  frequentlyAskedQuestions,
  JudgesInfo,
  MIDDLE_SECTION,
  Prizeinfo,
  schedule,
  SOCIALS,
  sponsorLogos,
  TeamInfo,
  TOP_SECTION
};
