// Fictional sample data for the Gridmora prototype. Any resemblance to real records is coincidental.
export const seed = {
  "team": [
    {
      "name": "Engr. Musa Danladi",
      "role": "Network Manager"
    },
    {
      "name": "Chiamaka Obi",
      "role": "Maintenance Engineer"
    },
    {
      "name": "Wale Adebayo",
      "role": "Maintenance Engineer"
    },
    {
      "name": "Esther Bassey",
      "role": "Data Analyst"
    },
    {
      "name": "Gbenga Oni",
      "role": "Commercial Auditor"
    }
  ],
  "items": [
    {
      "id": "GRD-501",
      "title": "Transformer TX-0412 overloading",
      "subtitle": "500kVA · Feeder F-11, Zone B",
      "group": "Feeder F-11",
      "metrics": [
        [
          "Peak load",
          "128%"
        ],
        [
          "Days over 110%",
          "6 of 7"
        ],
        [
          "Oil temp (est.)",
          "High"
        ],
        [
          "Customers",
          "412"
        ]
      ],
      "flags": [
        {
          "label": "Overload risk",
          "severity": "high",
          "confidence": 0.9,
          "explanation": "Evening peak exceeded 110% of rating on six of the last seven days, after 38 new connections in the area. Sustained overloading raises failure risk.",
          "evidence": [
            [
              "Peak loading",
              "128% (Tue 20:00)",
              "DT meter"
            ],
            [
              "New connections",
              "+38 in 60 days",
              "Customer register"
            ],
            [
              "Previous failure",
              "TX-0409 nearby, Jan 2026",
              "Outage log"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "GRD-502",
      "title": "Feeder F-11 energy balance gap",
      "subtitle": "11kV · Zone B",
      "group": "Feeder F-11",
      "metrics": [
        [
          "Energy sent (30d)",
          "1.92 GWh"
        ],
        [
          "Energy billed",
          "1.48 GWh"
        ],
        [
          "Gap",
          "23%"
        ],
        [
          "Expected technical loss",
          "7–9%"
        ]
      ],
      "flags": [
        {
          "label": "Energy gap",
          "severity": "medium",
          "confidence": 0.72,
          "explanation": "The gap is well above expected technical losses, concentrated on two line segments. Causes may include faulty meters, estimated billing, unmetered connections or technical issues.",
          "evidence": [
            [
              "Feeder meter",
              "1.92 GWh",
              "Feeder metering"
            ],
            [
              "Billed downstream",
              "1.48 GWh",
              "Billing export"
            ],
            [
              "Segments with most gap",
              "S-3, S-5",
              "Segment model"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "GRD-503",
      "title": "Repeat outages on line section S-7",
      "subtitle": "Feeder F-04 · 6 trips in 3 weeks",
      "group": "Feeder F-04",
      "metrics": [
        [
          "Trips (21d)",
          "6"
        ],
        [
          "Avg restore time",
          "2h 40m"
        ],
        [
          "Pattern",
          "Afternoons, windy days"
        ],
        [
          "Customers affected",
          "1,120"
        ]
      ],
      "flags": [
        {
          "label": "Repeat fault",
          "severity": "high",
          "confidence": 0.81,
          "explanation": "Six trips on the same section, mostly on windy afternoons, suggest vegetation contact or a loose conductor. A patrol of S-7 is suggested.",
          "evidence": [
            [
              "Trips",
              "6 in 21 days",
              "Outage log"
            ],
            [
              "Wind correlation",
              "5 of 6 on gusty days",
              "Weather feed"
            ],
            [
              "Last vegetation clearing",
              "14 months ago",
              "Maintenance records"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "GRD-504",
      "title": "Customer meter reading zero",
      "subtitle": "Commercial meter M-88213 · 5 weeks",
      "group": "Feeder F-11",
      "metrics": [
        [
          "Last non-zero read",
          "5 weeks ago"
        ],
        [
          "Prior avg",
          "2,300 kWh/mo"
        ],
        [
          "Account status",
          "Active"
        ],
        [
          "Tariff",
          "Band A"
        ]
      ],
      "flags": [
        {
          "label": "Meter fault or change",
          "severity": "medium",
          "confidence": 0.66,
          "explanation": "An active commercial meter has read zero for five weeks after steady use. This may be a meter fault, communication failure, vacancy or bypass; a meter check is suggested.",
          "evidence": [
            [
              "Readings",
              "0 kWh for 5 weeks",
              "Meter data"
            ],
            [
              "Comms status",
              "Intermittent",
              "AMI head-end"
            ],
            [
              "Vacancy notice",
              "None",
              "Customer records"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "GRD-505",
      "title": "Low voltage at end of LV network",
      "subtitle": "TX-0230 · Feeder F-04",
      "group": "Feeder F-04",
      "metrics": [
        [
          "End voltage",
          "196V"
        ],
        [
          "Standard",
          "230V ±6%"
        ],
        [
          "Hours below limit",
          "41 / week"
        ],
        [
          "Customers",
          "96"
        ]
      ],
      "flags": [
        {
          "label": "Voltage problem",
          "severity": "medium",
          "confidence": 0.77,
          "explanation": "Customers at the end of the LV network see voltages below standard during peaks. A long LV run and phase imbalance are likely contributors.",
          "evidence": [
            [
              "Voltage",
              "196V at peak",
              "Smart meters (sample)"
            ],
            [
              "Phase imbalance",
              "31%",
              "DT meter"
            ],
            [
              "LV route length",
              "1.4 km",
              "GIS"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "GRD-506",
      "title": "Mini-grid battery degradation",
      "subtitle": "Site MG-07 · 120kWh storage",
      "group": "Mini-grid MG-07",
      "metrics": [
        [
          "Usable capacity",
          "81% of rated"
        ],
        [
          "Trend",
          "−4% in 3 months"
        ],
        [
          "Night outages",
          "3 this month"
        ],
        [
          "Customers",
          "640"
        ]
      ],
      "flags": [
        {
          "label": "Equipment degradation",
          "severity": "high",
          "confidence": 0.74,
          "explanation": "Storage capacity is falling faster than expected, and night-time outages have started. A battery inspection is suggested before peak season.",
          "evidence": [
            [
              "Capacity trend",
              "85% → 81%",
              "BMS data"
            ],
            [
              "Expected trend",
              "−1% per quarter",
              "Manufacturer spec"
            ],
            [
              "Night outages",
              "3 in March",
              "Site controller log"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "GRD-507",
      "title": "Unusual consumption shift",
      "subtitle": "Cluster of 14 meters · Feeder F-08",
      "group": "Feeder F-08",
      "metrics": [
        [
          "Meters",
          "14"
        ],
        [
          "Change",
          "−52% in 1 month"
        ],
        [
          "Same street",
          "Yes"
        ],
        [
          "Feeder supply",
          "Unchanged"
        ]
      ],
      "flags": [
        {
          "label": "Consumption shift",
          "severity": "low",
          "confidence": 0.57,
          "explanation": "Fourteen nearby meters dropped sharply at the same time. Possible causes include a rationing schedule change, meter batch fault or local supply issue. Confidence is low.",
          "evidence": [
            [
              "Usage drop",
              "−52%",
              "Meter data"
            ],
            [
              "Supply hours",
              "Unchanged",
              "Feeder log"
            ],
            [
              "Meter batch",
              "12 of 14 same batch",
              "Asset register"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "GRD-508",
      "title": "Transformer oil leak reported",
      "subtitle": "TX-0518 · Feeder F-08",
      "group": "Feeder F-08",
      "metrics": [
        [
          "Report",
          "Field note 2 Apr"
        ],
        [
          "Load",
          "74%"
        ],
        [
          "Age",
          "19 years"
        ],
        [
          "Customers",
          "230"
        ]
      ],
      "flags": [
        {
          "label": "Maintenance risk",
          "severity": "medium",
          "confidence": 0.69,
          "explanation": "A field note reports an oil leak on an ageing transformer. Loading is moderate, but the asset age and report raise maintenance priority.",
          "evidence": [
            [
              "Field note",
              "Oil leak at base",
              "Inspection app"
            ],
            [
              "Age",
              "19 years",
              "Asset register"
            ],
            [
              "Previous maintenance",
              "2021",
              "Maintenance records"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "GRD-509",
      "title": "Feeder F-02 within normal range",
      "subtitle": "11kV · Zone A",
      "group": "Feeder F-02",
      "metrics": [
        [
          "Energy gap",
          "8%"
        ],
        [
          "Trips (30d)",
          "1"
        ],
        [
          "Peak load",
          "82%"
        ],
        [
          "Status",
          "Normal"
        ]
      ],
      "flags": [],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    }
  ]
};
