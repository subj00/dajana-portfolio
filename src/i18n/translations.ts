/**
 * All translatable text of the site, one dictionary per language.
 *
 * Serbian is the source: the `Dictionary` type is derived from it, so the
 * English dictionary must have exactly the same keys. Lists (career groups
 * and entries, languages, skills, intro words) are matched by position and
 * must have the same length in both languages; the build fails if they do
 * not.
 *
 * Not here on purpose: proper names and values that are the same in every
 * language (the name, email, phone, social handles, URLs). Those live in
 * src/config/site.ts and src/data.
 */

const sr = {
  meta: {
    title: "Dajana Subotić — Portfolio",
    description:
      "Portfolio Dajane Subotić — Digital Marketing Manager sa više od 5 godina iskustva: strategija, kreativni sadržaj i analitika.",
  },

  nav: {
    label: "Glavna navigacija",
    home: "Početna",
    work: "Portfolio",
    experience: "Karijera i obrazovanje",
    contact: "Kontakt",
  },

  language: {
    label: "Jezik",
  },

  /** Words of the intro animation, in the order they appear. */
  intro: {
    words: ["Ideja", "Strategija", "Kreativa", "Analitika", "Mreže"],
  },

  hero: {
    description:
      "Više od 5 godina iskustva u digitalnom marketingu. Moj rad spaja strategiju, kreativni sadržaj i analitiku.",
    cta: "Započnimo saradnju",
    portraitAlt: "Portret – Dajana Subotić",
  },

  portfolio: {
    heading: "Portfolio",
    /** Keyed by the project's slug in src/data/projects.ts. */
    projects: {
      "social-stud1o": {
        title: "Social Stud1o",
        description:
          "Lični projekat posvećen digitalnom marketingu, društvenim mrežama i kreativnim kampanjama. Mesto gde kroz sadržaj spajam iskustvo iz prakse, analizu trendova i svoj pogled na marketing.",
        imageAlt: "Dajana Subotić za radnim stolom, sa tabletom u rukama",
      },
      "tv-nova-s": {
        title: "TV Nova S",
        description:
          "Rad na digitalnom nastupu televizije Nova S kroz društvene mreže i različite formate sadržaja. Fokus na kreiranju, prilagođavanju i distribuciji sadržaja koji prati program, aktuelne teme i navike publike.",
        imageAlt: "Dajana Subotić ispred panoa sa logotipom televizije Nova S",
      },
      "kuca-sa-1000-vrata": {
        title: "Kuća sa 1000 vrata",
        description:
          "Rad na razvoju i digitalnom predstavljanju emisije, uz aktivno učešće u kreativnom procesu i samom sadržaju. Pored osmišljavanja i prilagođavanja sadržaja za društvene mreže, učestvujem i u realizaciji pojedinih kreativnih formata pred kamerom.",
        imageAlt: "Plakat emisije „Kuća sa 1000 vrata“ sa likom Zage",
      },
      "survivor-event": {
        title: "Survivor event",
        description:
          "Učešće u organizaciji i digitalnoj promociji Survivor događaja, uključujući saradnju sa influenserima, koordinaciju sadržaja i komunikaciju na društvenim mrežama.",
        imageAlt: "Dajana Subotić tokom igre na Survivor događaju",
      },
    },
  },

  career: {
    heading: "Karijera i obrazovanje",
    /** Groups and their entries are rendered in this order. */
    groups: [
      {
        title: "Radno iskustvo",
        entries: [
          {
            title: "Social Media Manager",
            subtitle: "Televizija Nova S",
            period: "2021–2023",
          },
          {
            title: "Digital Marketing Manager",
            subtitle: "Televizija Nova S",
            period: "2023–danas",
          },
          {
            title: 'Koautor i glumica u dečijoj emisiji "Kuća sa 1000 vrata"',
            subtitle: "Televizija Nova S",
            period: "2025–danas",
          },
        ],
      },
      {
        title: "Obrazovanje",
        entries: [
          {
            title: "Filološki fakultet, osnovne studije",
            subtitle: "Italijanski jezik, književnost i kultura",
            period: "2016–2020",
          },
          {
            title: "Fakultet organizacionih nauka, master studije",
            subtitle: "Marketing menadžment i odnosi sa javnošću",
            period: "2021–2022",
          },
        ],
      },
      {
        title: "Profesionalna priznanja",
        entries: [
          {
            title: "Najkreativnije vođenje društvenih mreža",
            subtitle: "Digital Awards",
            period: "2024",
          },
          {
            title: "Marketing Director Course Certificate",
            subtitle: "Next MBA",
            period: "2021–2022",
          },
        ],
      },
    ],
    /** Shown after the groups above. `subtitle` and `period` are optional. */
    languages: {
      title: "Jezici",
      entries: [
        { title: "Engleski jezik" },
        { title: "Italijanski jezik" },
        {
          title: "Nemački jezik",
          subtitle: "Goethe-Zertifikat B2",
          period: "2022. god.",
        },
      ],
    },
    /** Shown last, as a plain list (two columns where there is room). */
    skills: {
      title: "Veštine",
      items: [
        "Meta Business Suite",
        "Ads Manager",
        "Facebook, Instagram, TikTok, LinkedIn, YouTube",
        "Strategija sadržaja",
        "Kreiranje sadržaja",
        "Pisanje reklamnih i marketinških tekstova",
        "MS Office",
        "Canva",
        "CapCut, Premiere Pro, iMovie",
      ],
    },
  },

  contact: {
    heading: "Kontakt",
    photoAlt: "Dajana Subotić za radnim stolom",
    email: "Email",
    phone: "Telefon",
  },

  footer: {
    statement: "Od strategije do priče koju ljudi pamte.",
    credit: "Design & development by",
  },

  /** Text for screen readers only. */
  a11y: {
    opensInNewTab: "(otvara se u novoj kartici)",
  },
};

export type Dictionary = typeof sr;

const en: Dictionary = {
  meta: {
    title: "Dajana Subotić — Portfolio",
    description:
      "Portfolio of Dajana Subotić — a Digital Marketing Manager with over 5 years of experience across strategy, creative content and analytics.",
  },

  nav: {
    label: "Main navigation",
    home: "Home",
    work: "Portfolio",
    experience: "Career & Education",
    contact: "Contact",
  },

  language: {
    label: "Language",
  },

  intro: {
    words: ["Idea", "Strategy", "Creative", "Analytics", "Social"],
  },

  hero: {
    description:
      "Over 5 years of experience in digital marketing. My work brings together strategy, creative content and analytics.",
    cta: "Let’s work together",
    portraitAlt: "Portrait of Dajana Subotić",
  },

  portfolio: {
    heading: "Portfolio",
    projects: {
      "social-stud1o": {
        title: "Social Stud1o",
        description:
          "A personal project dedicated to digital marketing, social media and creative campaigns. It’s where I bring together hands-on experience, trend analysis and my own take on marketing through content.",
        imageAlt: "Dajana Subotić at her desk, holding a tablet",
      },
      "tv-nova-s": {
        title: "TV Nova S",
        description:
          "Shaping the digital presence of Nova S television across social media and a range of content formats. The focus is on creating, adapting and distributing content that follows the programming, current topics and audience habits.",
        imageAlt: "Dajana Subotić in front of a backdrop with the Nova S logo",
      },
      "kuca-sa-1000-vrata": {
        title: "Kuća sa 1000 vrata",
        description:
          "Developing the show and its digital presence, with an active role in the creative process and the content itself. Alongside creating and adapting content for social media, I also take part in producing selected creative formats in front of the camera.",
        imageAlt:
          "Poster for the show “Kuća sa 1000 vrata” featuring the character Zaga",
      },
      "survivor-event": {
        title: "Survivor event",
        description:
          "Helping organise and digitally promote the Survivor event, including influencer collaborations, content coordination and social media communication.",
        imageAlt: "Dajana Subotić during a game at the Survivor event",
      },
    },
  },

  career: {
    heading: "Career & Education",
    groups: [
      {
        title: "Work experience",
        entries: [
          {
            title: "Social Media Manager",
            subtitle: "Nova S Television",
            period: "2021–2023",
          },
          {
            title: "Digital Marketing Manager",
            subtitle: "Nova S Television",
            period: "2023–present",
          },
          {
            title:
              'Co-creator and actress in the children’s show "Kuća sa 1000 vrata"',
            subtitle: "Nova S Television",
            period: "2025–present",
          },
        ],
      },
      {
        title: "Education",
        entries: [
          {
            title: "Faculty of Philology, undergraduate studies",
            subtitle: "Italian Language, Literature and Culture",
            period: "2016–2020",
          },
          {
            title: "Faculty of Organizational Sciences, master’s studies",
            subtitle: "Marketing Management and Public Relations",
            period: "2021–2022",
          },
        ],
      },
      {
        title: "Professional recognition",
        entries: [
          {
            title: "Most Creative Social Media Management",
            subtitle: "Digital Awards",
            period: "2024",
          },
          {
            title: "Marketing Director Course Certificate",
            subtitle: "Next MBA",
            period: "2021–2022",
          },
        ],
      },
    ],
    languages: {
      title: "Languages",
      entries: [
        { title: "English" },
        { title: "Italian" },
        {
          title: "German",
          subtitle: "Goethe-Zertifikat B2",
          period: "2022",
        },
      ],
    },
    skills: {
      title: "Skills",
      items: [
        "Meta Business Suite",
        "Ads Manager",
        "Facebook, Instagram, TikTok, LinkedIn, YouTube",
        "Content Strategy",
        "Content Production",
        "Copywriting",
        "MS Office",
        "Canva",
        "CapCut, Premiere Pro, iMovie",
      ],
    },
  },

  contact: {
    heading: "Contact",
    photoAlt: "Dajana Subotić at her desk",
    email: "Email",
    phone: "Phone",
  },

  footer: {
    statement: "From strategy to a story people remember.",
    credit: "Design & development by",
  },

  a11y: {
    opensInNewTab: "(opens in a new tab)",
  },
};

export const dictionaries = { sr, en };
