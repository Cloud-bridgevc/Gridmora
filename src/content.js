// Site copy for Gridmora. A proposed startup concept: fictional team, illustrative pricing.
const site = {
  "name": "Gridmora",
  "tagline": "Turn meter data into maintenance priorities.",
  "categories": [
    "AI",
    "Energy",
    "Predictive Maintenance"
  ],
  "about": "Gridmora helps electricity operators interpret operational data across their networks. Its AI prioritises unusual conditions so engineers can direct inspections and maintenance more effectively.",
  "logoSvg": "<rect width=\"32\" height=\"32\" rx=\"9\" fill=\"#0b1426\"/><path d=\"M5 17h5l3-7 4 13 3-9 2 3h5\" fill=\"none\" stroke=\"#ffd23f\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"25.5\" cy=\"17\" r=\"1.6\" fill=\"#6ea8ff\"/>",
  "words": {
    "records": "anomalies",
    "decider": "network engineers",
    "sources": "meter readings, feeder balances, transformer loading and outage records",
    "model": "Time-series models learn normal behaviour per meter, transformer and feeder, then rank abnormal patterns by likely cause, impact and confidence.",
    "store": "Amazon Timestream"
  },
  "hero": {
    "eyebrow": "Predictive maintenance for distribution networks",
    "before": "Find the network problems that deserve ",
    "em": "the next field visit",
    "after": ".",
    "points": [
      "Meter, feeder and transformer data in one view",
      "Unusual conditions ranked for inspection",
      "Anomalies treated as questions, not proof"
    ],
    "floatTitle": "Transformer at 128% load",
    "floatText": "TX-0412 · 6 evenings this week"
  },
  "problem": {
    "title": "Plenty of data, no clear list of where to send the crew.",
    "text": "Meter readings, feeder energy balances, transformer loading and outage logs sit in different systems. Engineers must decide each morning which faults, overloads or unexplained losses to inspect first, usually from incomplete information.",
    "fragments": [
      "A transformer overloading every evening, unnoticed",
      "A feeder whose billed energy never matches the energy sent",
      "Repeat outages on the same line section",
      "Meters reading zero for weeks without a ticket"
    ]
  },
  "solution": {
    "title": "One ranked list of what deserves attention, and why.",
    "text": "Gridmora analyses readings, balances, loading and outages over time, learns what normal looks like for each asset and ranks unusual conditions so field teams go where they are most needed.",
    "capabilities": [
      {
        "title": "Asset health signals",
        "text": "Detects overloading, voltage problems and repeat faults per transformer and feeder.",
        "demoLabel": "TX-0412 loading",
        "demoValue": "128% peak · 6 days"
      },
      {
        "title": "Energy balance analysis",
        "text": "Compares energy sent to a feeder with energy billed downstream, with gaps explained by segment.",
        "demoLabel": "Feeder F-11 gap",
        "demoValue": "23% unaccounted"
      },
      {
        "title": "Inspection priorities",
        "text": "Ranks field visits by likely impact, safety and confidence, without labelling anomalies as theft.",
        "demoLabel": "Today’s priorities",
        "demoValue": "7 visits, 3 high"
      }
    ]
  },
  "stepsTitle": "From raw readings to a field plan.",
  "steps": [
    [
      "Connect",
      "Load AMI and meter-reading exports, feeder metering, transformer data and outage logs."
    ],
    [
      "Learn",
      "Gridmora models normal behaviour for each meter, transformer and feeder over time."
    ],
    [
      "Rank",
      "Abnormal patterns are scored and ranked by likely cause, impact and confidence."
    ],
    [
      "Inspect",
      "Engineers review the evidence, plan visits, record findings, and every decision is logged."
    ]
  ],
  "audiencesTitle": "For the teams keeping power flowing.",
  "audiences": [
    {
      "title": "Electricity distribution companies",
      "text": "Prioritise maintenance and loss investigations across feeders and business units.",
      "outcome": "Crews sent where it matters"
    },
    {
      "title": "Mini-grid operators",
      "text": "Monitor generation, storage and customer metering across remote sites.",
      "outcome": "Faults found earlier"
    },
    {
      "title": "Industrial estate power operators",
      "text": "Keep supply reliable for tenants with tight uptime needs.",
      "outcome": "Fewer unplanned outages"
    },
    {
      "title": "University utility departments",
      "text": "Manage campus networks, hostels and labs with small teams.",
      "outcome": "Smarter maintenance"
    }
  ],
  "publicSector": {
    "title": "Monitor the performance of supported mini-grids.",
    "text": "State electrification agencies can use Gridmora to track the operating performance of mini-grids they support, spotting reliability issues early and focusing technical assistance where it is needed.",
    "points": [
      "Uptime, load and loss indicators across supported sites",
      "Early warning on equipment at risk of failure",
      "Comparable performance reporting across operators",
      "Every finding and follow-up recorded"
    ]
  },
  "ai": {
    "title": "The model finds unusual conditions. Engineers decide what they are.",
    "intro": "An anomaly can be a faulty meter, an overloaded transformer, a data gap or a bypass. Gridmora is designed never to treat a pattern as proof.",
    "does": [
      "Learns normal behaviour for each asset",
      "Detects overloads, voltage issues and repeat faults",
      "Explains energy-balance gaps by network segment",
      "Ranks inspections by impact and confidence"
    ],
    "never": [
      "Labels a customer as stealing electricity",
      "Disconnects supply or issues penalties",
      "Changes billing or meter records",
      "Treats an anomaly as proof of wrongdoing"
    ]
  },
  "pricing": {
    "model": "Annual subscription based on monitored meters and network assets.",
    "tiers": [
      {
        "name": "Mini-grid",
        "summary": "For mini-grid portfolios and estates.",
        "price": "₦6m",
        "unit": "/ year",
        "features": [
          "Up to 10,000 meters",
          "Asset health signals",
          "Outage analytics",
          "10 user seats"
        ],
        "cta": "Request a pilot"
      },
      {
        "name": "Network",
        "summary": "For a business unit or utility region.",
        "price": "₦45m",
        "unit": "/ year",
        "features": [
          "Up to 250,000 meters",
          "Everything in Mini-grid",
          "Feeder energy balance",
          "Inspection planning",
          "Unlimited seats"
        ],
        "cta": "Request a pilot",
        "featured": true
      },
      {
        "name": "Utility",
        "summary": "For distribution companies.",
        "price": "Custom",
        "unit": "",
        "features": [
          "Any number of meters",
          "AMI, SCADA and GIS integration",
          "Custom models",
          "Dedicated hosting options"
        ],
        "cta": "Talk to us"
      }
    ]
  },
  "team": [
    {
      "name": "Ibrahim Kolo",
      "role": "Founder/CEO",
      "initials": "IK",
      "bio": "Electrical engineer with distribution maintenance experience.",
      "focus": [
        "Distribution engineering",
        "Maintenance",
        "Utility partnerships"
      ]
    },
    {
      "name": "Adesuwa Egharevba",
      "role": "Co-founder",
      "initials": "AE",
      "bio": "Energy project specialist focused on commercial operations.",
      "focus": [
        "Commercial operations",
        "Mini-grids",
        "Energy projects"
      ]
    },
    {
      "name": "Obinna Maduakor",
      "role": "CTO",
      "initials": "OM",
      "bio": "ML engineer working on sensor analytics and fault detection.",
      "focus": [
        "Sensor analytics",
        "Fault detection",
        "Platform"
      ]
    }
  ],
  "faq": [
    [
      "Do we need smart meters?",
      "They help, but are not required. Gridmora works with monthly readings, feeder meters and outage logs; smart meter data improves resolution and confidence."
    ],
    [
      "Will it tell us who is stealing power?",
      "No. Energy gaps have many causes, including technical losses, faulty meters and data errors. Gridmora ranks where to inspect; engineers establish the cause."
    ],
    [
      "Can it connect to our GIS and SCADA?",
      "Enterprise deployments can integrate with GIS, SCADA and AMI head-end systems. Pilots usually start with exports."
    ],
    [
      "Is Gridmora a live product?",
      "Not yet. Gridmora is a proposed startup concept. The team is fictional, pricing is illustrative and the prototype runs on fictional data in your browser."
    ],
    [
      "Does the AI make decisions?",
      "No. Gridmora flags, ranks and explains. Network engineers review the evidence and record every decision with a reason."
    ],
    [
      "How would our data be protected?",
      "In production, data would be encrypted, isolated per customer, access-controlled by role and never used to train models for other customers. Data-sharing terms are agreed before any pilot."
    ]
  ],
  "purpose": {
    "eyebrow": "Why Gridmora exists",
    "manifesto": "Every hour without power is a clinic without a fridge, a shop without light and a family running a generator they cannot afford. Distribution networks generate data every day that could prevent some of those hours. We want engineers to see it.",
    "purpose": "Help electricity operators turn network data into clear inspection and maintenance priorities.",
    "why": "Unreliable distribution costs households, businesses and utilities. With limited crews and budgets, deciding where to look first is one of the highest-value decisions an operator makes.",
    "stakesTitle": "What unreliable power costs.",
    "stats": [
      {
        "value": 85,
        "suffix": "m",
        "label": "Nigerians without access to grid electricity (43% of the population, 2021).",
        "source": "World Bank",
        "url": "https://www.worldbank.org/en/news/press-release/2021/02/05/nigeria-to-improve-electricity-access-and-services-to-citizens"
      },
      {
        "value": 26.2,
        "dec": 1,
        "prefix": "$",
        "suffix": "bn",
        "label": "Estimated annual economic losses from unreliable electricity in Nigeria.",
        "source": "World Bank",
        "url": "https://www.worldbank.org/en/news/press-release/2021/02/05/nigeria-to-improve-electricity-access-and-services-to-citizens"
      },
      {
        "value": 39.1,
        "dec": 1,
        "suffix": "%",
        "label": "Aggregate technical, commercial and collection losses across distribution companies in Q3 2024.",
        "source": "NERC, reported by ThisDay",
        "url": "https://www.thisdaylive.com/2024/12/24/discos-reject-10-load-offtake-as-atcc-losses-rise-4-in-q3/"
      }
    ],
    "changeTitle": "From reactive repairs to prioritised inspections.",
    "before": [
      "Faults found when customers complain",
      "Overloads discovered when transformers fail",
      "Energy gaps reported, never explained",
      "Inspection lists built from memory"
    ],
    "after": [
      "Repeat faults spotted from outage patterns",
      "Overloads flagged weeks before failure",
      "Gaps broken down by feeder segment",
      "A ranked, evidenced inspection plan each day"
    ],
    "principlesTitle": "What we believe about grid analytics.",
    "principles": [
      [
        "Anomalies are questions",
        "A pattern is a reason to inspect, never a verdict."
      ],
      [
        "Safety first",
        "Priorities account for public and crew safety, not just revenue."
      ],
      [
        "Engineers decide",
        "Field teams establish causes; the model points the way."
      ],
      [
        "Show the evidence",
        "Every priority links to the readings that raised it."
      ],
      [
        "Work with real data",
        "Start from the meters and logs operators already have."
      ],
      [
        "Customers deserve fairness",
        "No one is labelled on the basis of an algorithm."
      ]
    ],
    "letterTitle": "Why we are building Gridmora.",
    "letter": [
      "Ibrahim spent years on distribution maintenance, deciding each morning which faults to chase with too few crews and too little information. He watched transformers fail that the data had been warning about for weeks.",
      "Adesuwa worked on the commercial side of energy projects, where losses were reported but rarely explained. Obinna had built sensor analytics that could see faults early, and knew how easily anomalies get mistaken for wrongdoing.",
      "Gridmora is built to give engineers a clear, honest list of where to look and why, with the final judgement left to the people who know the network."
    ],
    "visionTitle": "Where Gridmora is going.",
    "visionIntro": "From inspection lists to predictive network planning.",
    "vision": [
      {
        "stage": "Now",
        "title": "Concept and prototype",
        "text": "An interactive prototype on fictional data, and conversations with operators."
      },
      {
        "stage": "Next",
        "title": "Network pilots",
        "text": "Back-testing anomaly rankings on historical data for selected feeders."
      },
      {
        "stage": "Then",
        "title": "Daily priorities",
        "text": "Live inspection lists for maintenance and loss-reduction teams."
      },
      {
        "stage": "Later",
        "title": "Predictive planning",
        "text": "Asset failure forecasts that shape capital and maintenance budgets."
      }
    ],
    "statsNote": "Figures are published estimates from the sources linked; they describe the wider problem, not results from this product."
  },
  "app": {
    "title": "Inspection priorities",
    "subtitle": "Unusual conditions across a fictional distribution network, ranked for engineering review.",
    "itemNoun": "anomaly",
    "itemNounPlural": "anomalies",
    "groupLabel": "feeder",
    "queueTitle": "Anomaly queue",
    "humanNote": "Anomalies are prompts for inspection, not proof. Engineers decide.",
    "decisions": {
      "confirm": "Schedule inspection",
      "dismiss": "Explained — close",
      "escalate": "Escalate to network manager"
    },
    "roles": [
      {
        "id": "lead",
        "label": "Network Manager",
        "can": [
          "view",
          "note",
          "assign",
          "decide",
          "escalate",
          "export"
        ]
      },
      {
        "id": "reviewer",
        "label": "Maintenance Engineer",
        "can": [
          "view",
          "note",
          "assign",
          "decide"
        ]
      },
      {
        "id": "analyst",
        "label": "Data Analyst",
        "can": [
          "view",
          "note",
          "escalate"
        ]
      },
      {
        "id": "auditor",
        "label": "Commercial Auditor",
        "can": [
          "view",
          "export"
        ]
      }
    ],
    "examples": [
      "Which anomalies need review first?",
      "Summarise the review status",
      "Show Feeder F-11",
      "Explain GRD-503"
    ],
    "refuse": "\\b(disconnect|cut (off|their)|thie[fv]|steal|stole|bypass(ing|er)|penal|fine (the|this)|prosecut)",
    "refuseText": "Gridmora can show the readings behind an anomaly, but deciding causes, disconnections or penalties belongs to engineers and due process. An anomaly is not proof of theft.",
    "refuseExamples": [
      "Should we disconnect customer M-88213?",
      "Who is stealing power on Feeder F-11?",
      "Fine the customer behind GRD-504"
    ]
  },
  "slug": "gridmora",
  "url": "https://www.gridmora.com",
  "email": "hello@gridmora.com",
  "stepsNote": "Gridmora recommends and ranks. Every outcome is recorded by a named person, with a reason, in an audit log.",
  "safeguards": [
    [
      "People decide",
      "Every anomaly is confirmed, dismissed or escalated by network engineers, never by the model."
    ],
    [
      "Evidence first",
      "Each flag links to the meter readings, feeder balances, transformer loading and outage records behind it, so a reviewer can check the reasoning before acting."
    ],
    [
      "Confidence shown",
      "Scores come with a confidence level and the data gaps that lower it, so weak signals are not mistaken for facts."
    ],
    [
      "Role-based access",
      "Permissions are set per role: who can view, comment, assign, decide, escalate or export."
    ],
    [
      "Complete audit trail",
      "Assignments, notes and decisions are time-stamped with the person and reason, and can be exported."
    ],
    [
      "Your data stays yours",
      "Customer data is isolated per tenant, encrypted at rest and in transit, and never used to train models for other customers."
    ]
  ],
  "architectureIntro": "How Gridmora would run in production: ingestion of meter readings, feeder balances, transformer loading and outage records, models that score and explain, and a review workspace with a full audit trail.",
  "architecture": [
    [
      "Ingest",
      "Amazon S3 · AWS Transfer Family · API Gateway",
      "Secure upload and API connections for meter readings, feeder balances, transformer loading and outage records."
    ],
    [
      "Prepare",
      "AWS Glue · AWS Step Functions",
      "Validation, cleaning and matching of records, with data-quality checks logged."
    ],
    [
      "Model",
      "Amazon SageMaker",
      "Time-series models learn normal behaviour per meter, transformer and feeder, then rank abnormal patterns by likely cause, impact and confidence."
    ],
    [
      "Store",
      "Amazon Aurora PostgreSQL · Amazon Timestream",
      "Records, scores, evidence links and decisions in a tenant-isolated database."
    ],
    [
      "Review",
      "AWS Amplify · Amazon CloudFront · Amazon Cognito",
      "The web workspace, with single sign-on and role-based permissions."
    ],
    [
      "Govern",
      "AWS CloudTrail · AWS KMS · Amazon CloudWatch",
      "Encryption keys per tenant, access logging and monitoring of model behaviour."
    ]
  ],
  "early": {
    "title": "Pilot Gridmora with your own team.",
    "text": "We are looking for a small number of early partners to shape Gridmora. A pilot starts with a sample of your historical data and a fixed review period, so you can judge the results before committing.",
    "steps": [
      "Tell us about your team and the records you work with.",
      "A founder replies personally to arrange a short call.",
      "We agree a pilot scope, data-sharing terms and how success will be measured."
    ]
  }
};
export default site;
