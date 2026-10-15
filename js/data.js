/* =====================================================================
   MARYAM ELAZOMY PORTFOLIO — ALL CONTENT LIVES IN THIS FILE
   Edit text, add images and videos here. You never need to touch main.js.

   HOW TO ADD MEDIA
   1. Put the file in assets/img/ (images) or assets/video/ (videos).
   2. In the project below, fill the media list, for example:
        media: [
          { src: "assets/img/alex-foods-1.jpg", caption: "Frame from the commercial" },
          { src: "assets/video/alex-foods.mp4", poster: "assets/img/alex-foods-poster.jpg" }
        ]
      Type (image or video) is detected from the file extension.
      The first media file becomes the cover of the project card.
   3. Optional: links: [{ label: "Watch on Behance", href: "https://..." }]

   DEVELOPER MODE
   Open the site with ?dev=1 at the end of the URL to see the "todo" notes
   and the hidden draft items (draft: true).

      TONES: 0 ivory  1 charcoal  2 umber  3 sand  4 deep green  5 slate  6 accent (orange)
   Each section card (tile) uses its "tone" and, if you set cover: "assets/img/x.jpg", an image.
   ===================================================================== */

window.SITE = {
  "name": [
    "Maryam",
    "Elazomy"
  ],
  "eyebrow": "Game designer · Creative lead · Video director",
  "intro": "Game designer and programmer, creative lead, video director and content creator. BA in Game Design and Programming at Alamein International University, graduating in 2027.",
  "portrait": "assets/img/Maryam.jpeg",
  "portraitCaption": "Maryam Elazomy",
  "stats": [
    {
      "value": "270K+",
      "label": "members in the online community I founded"
    },
    {
      "value": "2017",
      "label": "creating content since"
    },
    {
      "value": "2018",
      "label": "graphic and packaging design since"
    },
    {
      "value": "2027",
      "label": "graduating, BA Game Design and Programming"
    }
  ],
  "tools": [
    "Canva",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Premiere Pro",
    "After Effects",
    "CapCut",
    "Blender",
    "ZBrush",
    "Unity",
    "Unreal Engine"
  ],
  "contact": {
    "email": "mariam.awad.2024@aiu.edu.eg",
    "links": [
      {
        "label": "LinkedIn",
        "href": "https://www.linkedin.com/in/maryam-elazomy-a64a6533a"
      },
      {
        "label": "Behance",
        "href": "https://www.behance.net/maryahmad"
      }
    ]
  },
  "cv": [
    {
      "label": "CV: Media & Marketing",
      "href": "assets/cv/Maryam_Elazomy_CV_Media.pdf"
    },
    {
      "label": "CV: Game Design",
      "href": "assets/cv/Maryam_Elazomy_CV_Game_Design.pdf"
    }
  ],
  "sections": [
    // ==========================================
    // 01. VIDEO DIRECTION & COMMERCIALS
    // ==========================================
    {
      "id": "video",
      "num": "01",
      "title": "Video Direction & Commercials",
      "tags": "Direction · Commercials · Motion",
      "desc": "Commercials, short-form videos and motion graphics, from the script to the final edit.",
      "tone": 6,
      "cover": "assets/img/IMG_20261014_112532_867.jpeg",
      "tools": [
        "Videography⁠Premiere Pro",
        "Premiere Pro",
        "After Effects",
        "⁠CapCut Pro⁠",
        "⁠Motion Graphics",
        "⁠AI Video Creation",
        "Voice-Over",
      ],
      "highlights": [
        "Video director at Alex Foods since June 2026",
        "Scripts, filming, directing, editing and voiceover handled end to end",
        "After Effects animated logos for companies",
        "Ready to Roll: The Video Production Process, with Honors, University of Colorado Boulder"
      ],
      "items": [
        {
          "id": "social-campaigns",
          "title": "Pre-Production Storyboard & Scriptwriting",
          "kind": "Pre-Production & Visual Planning",
          "when": "",
          "c": 1,
          "overview": "Detailed pre-production storyboards, scene breakdown, and scriptwriting developed for video direction and AI-assisted scene generation. Showcases the complete planning phase from concept to final visual execution.",
          "todo": "",
          "facts": [
            ["Role", "Scriptwriter & Storyboard Artist"]
          ],
          "skills": [
            "Storyboarding",
            "Scriptwriting",
            "Scene Planning",
            "Pre-Production",
            "Visual Direction"
          ],
          "media": [
            {
              "src": "assets/img/IMG_20261014_112553_016.jpg",
              "caption": "Storyboard & Scriptwriting — Image 1"
            },
            {
              "src": "assets/img/IMG_20261014_112553_044.jpg",
              "caption": "Storyboard & Scriptwriting — Image 2"
            },
            {
              "src": "assets/img/IMG_20261014_112553_389.jpg",
              "caption": "Storyboard & Scriptwriting — Image 3"
            },
            {
              "src": "assets/img/IMG_20261014_112553_553.jpg",
              "caption": "Storyboard & Scriptwriting — Image 4"
            }
          ]
        },     
        {
          "id": "alex-foods",
          "title": "Alex Foods TV Commercials",
          "kind": "Video Direction",
          "when": "Jun 2026 – Present",
          "c": 6,
          "overview": "TV commercials for an Egyptian juice and food company, directed from concept and scriptwriting through visual design, production and final execution.",
          "facts": [
            ["Role", "Video Director (Freelance)"],
            ["Client", "Alex Foods, Alexandria"]
          ],
          "skills": [
            "Directing",
            "Scriptwriting",
            "Animation",
            "Brand Storytelling"
          ],
          "media": [
            {
              "src": "assets/video/alex-foods.MOV",
              "caption": "Alex Foods TV Commercial"
            }
          ]
        },
        {
          "id": "restaurants",
          "title": "Sally Pharmacies App Promotional Video",
          "kind": "Commercial Video",
          "when": "2026 – Present",
          "c": 1,
          "overview": "A promotional animated/explainer video for Sally Pharmacies app, highlighting online prescription ordering, fast delivery, and home healthcare services.",
          "facts": [
            ["Role", "Scriptwriting, & Animation Direction"],
            ["Client", "Sally Pharmacies"]
          ],
          "skills": [
            "Scriptwriting",
            "Animation Direction",
            "Video Production",
            "Explainer Videos"
          ],
          "media": [
            {
              "src": "assets/video/4_5942565747732521436.MP4",
              "caption": "Sally Pharmacies: Healthcare at Your Doorstep"
            }
          ]
        },
        {
          "id": "ugc",
          "title": "AI-Powered Promotional Video for Custom Wedding Invitations",
          "kind": "AI Promotional Video",
          "when": "2026 – Present",
          "c": 3,
          "overview": "An AI-powered promotional video showcasing custom wedding invitation cards, combining AI prompt engineering, creative video direction, and digital marketing content to present personalized invitation designs.",
          "facts": [
            ["Role", "AI Prompt Engineering, Video Direction & Digital Marketing Content"]
          ],
          "skills": [
            "AI Prompt Engineering",
            "Video Direction",
            "Digital Marketing",
            "Creative Storytelling"
          ],
          "media": [
            {
              "src": "assets/video/4_5942565747732521431.MOV",
              "caption": "AI-Powered Promotional Video for Custom Wedding Invitations"
            }
          ]
        },
        {
          "id": "saudi-ads",
          "title": "\"LEFTOVER\" Game Cinematic Trailer",
          "kind": "Game Cinematic Trailer",
          "when": "2026",
          "c": 5,
          "overview": "Cinematic game trailer for 'LEFTOVER', an original indie game project. Developed entirely through custom 3D environment modeling, character creation, scriptwriting, and AI-assisted cinematic generation.",
          "facts": [
            ["Role", "Game Designer, 3D Modeler & Cinematic Director"],
            ["Client", "Personal Game Project (LEFTOVER)"]
          ],
          "skills": [
            "Game Design",
            "3D Modeling",
            "Cinematic Direction",
            "AI Video Generation",
            "Scriptwriting"
          ],
          "media": [
            {
              "src": "assets/video/IMG_7840.MOV",
              "caption": "\"LEFTOVER\" Game Cinematic Trailer"
            }
          ]
        },
        {
          "id": "mascot",
          "title": "\"A Hat in Time\" Neon City Remake - Concept Trailer",
          "kind": "Game Concept Trailer",
          "when": "",
          "c": 2,
          "overview": "A conceptual remake trailer reimagining a classic indie game in a futuristic Neon City aesthetic. Conceived, designed, and directed entirely by me, utilizing custom AI generation and narrative scriptwriting as part of an academic game design project.",
          "todo": "",
          "facts": [
            ["Role", "Game Concept Designer & Trailer Director"],
            ["Client", "University Game Design Project"]
          ],
          "skills": [
            "Game Concept",
            "AI Generation",
            "Trailer Direction",
            "Game Design Project",
            "Visual"
          ],
          "media": [
            {
              "src": "assets/video/4_5890821832881217117.MOV",
              "caption": "\"A Hat in Time\" Neon City Remake - Concept Trailer"
            }
          ]
        },
        {
          "id": "brand-commercials",
          "title": "\"Anti-Bullying\" Narrative Short Story",
          "kind": "Narrative Short Film",
          "when": "",
          "c": 4,
          "overview": "A self-produced narrative short film addressing anti-bullying. Conceived, directed, and executed entirely by me—from initial storyboard sketching and scene design, through AI prompt engineering, to sound system curation and editing.",
          "todo": "",
          "facts": [
            ["Client", "University Academic Project"],
            ["Role", "Director, Concept Artist & Sound Designer"]
          ],
          "skills": [
            "Visual Storytelling",
            "AI Generation",
            "Sound Design",
            "Directing",
            "Storyboarding"
          ],
          "media": [
            {
              "src": "assets/video/4_5942565747732521452.MOV",
              "caption": "\"Anti-Bullying\" Narrative Short Story"
            }
          ]
        },
        {
          "id": "product-videos",
          "title": "Product Promotional Video",
          "kind": "Product Promotional Video",
          "when": "",
          "c": 0,
          "overview": "A promotional product video highlighting event floral arrangements and details through engaging visuals, refined editing, and carefully curated music selection.",
          "todo": "",
          "facts": [
            ["Role", "Video Editor & Music Curator"]
          ],
          "skills": [
            "Product Videography",
            "Editing",
            "Music Curation",
            "Creative Direction"
          ],
          "media": [
            {
              "src": "assets/video/VID_20261014_023031_408.mp4.mov",
              "caption": "Wedding & Event Product Showcase"
            }
          ]
        },
        {
          "id": "social-campaigns",
          "title": "\"Illusion of Control\" Animated Short Film",
          "kind": "Animated Short Film",
          "when": "",
          "c": 1,
          "overview": "An original narrative short film conceived, directed, and executed entirely by me—from the core concept and storyboard sketching to scene design and full video editing.",
          "todo": "",
          "facts": [
            ["Role", "Concept Creator, Director & Editor"]
          ],
          "skills": [
            "Visual Storytelling",
            "Concept Art",
            "Video Editing",
            "Directing",
            "Short Film"
          ],
          "media": [
            {
              "src": "assets/video/4_5942565747732521445.MOV",
              "caption": "\"Illusion of Control\" Animated Short Film"
            }
          ]
        },
        {
          "id": "social-campaigns",
          "title": "\"Momo Italian Cafe\" Grand Opening UGC Campaign",
          "kind": "Influencer Marketing Campaign",
          "when": "",
          "c": 1,
          "overview": "A self-produced influencer marketing and social media coverage campaign for the grand opening of Momo Italian Cafe's new branch in Egypt. Conceived, filmed, directed, and edited entirely by me to drive brand awareness and engagement.",
          "todo": "",
          "facts": [
            ["Client", "Momo Italian Cafe (Egypt Branch)"],
            ["Role", "Content Creator, Videographer & Editor"]
          ],
          "skills": [
            "Influencer Marketing",
            "UGC Campaign",
            "Videography",
            "Social Media Content",
            "Video Editing"
          ],
          "media": [
            {
              "src": "assets/video/4_5942757277504119672.MOV",
              "caption": "\"Momo Italian Cafe\" Grand Opening UGC Campaign"
            }
          ]
        }
      ]
    },

    // ==========================================
    // 02. VISUAL & UI/UX DESIGN
    // ==========================================
    {
      "id": "visual",
      "num": "02",
      "title": "Visual & UI/UX Design",
      "tags": "Branding · Graphic Design · UI/UX",
      "desc": "Visual identities, packaging, graphic design and digital interfaces for brands, products and communities.",
      "tone": 0,
      "cover": "assets/img/IMG_20261014_112532_823.jpeg",
      "tools": [
        "Canva",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Figma",
        "Blender"
      ],
      "highlights": [
        "Graphic and packaging designer since 2018",
        "Packaging for a well-known potato company",
        "UI/UX concepts for apps, educational products and websites",
        "Design work for brands, doctors and freelance clients"
      ],
      "items": [
        {
          "id": "brand-design",
          "title": "\"HERRA\" Ridesharing App - UI/UX Case Study",
          "kind": "Graphic design",
          "when": "From 2018",
          "c": 5,
          "overview": "A comprehensive UI/UX case study and design for 'Herra', a secure ridesharing mobile application dedicated to women. Covers the complete product lifecycle from user research and interface design to user testing and interactive prototyping.",
          "facts": [
            ["Role", "Lead UI/UX Designer & Researcher"],
            ["Client", "University Project (New Media Application Course)"]
          ],
          "skills": [
            "UI/UX Design",
            "Mobile App Design",
            "User Testing",
            "Figma",
            "Product Strategy"
          ],
          "media": [
            {
              "src": "assets/video/4_5942757277504119516.MP4",
              "caption": "\"HERRA\" Ridesharing App - UI/UX Case Study"
            }
          ]
        },
        {
          "id": "posters",
          "title": "\"Wild West\" Game Promotional Website - UI/UX Case Study",
          "kind": "Visual content",
          "when": "From 2018",
          "c": 3,
          "overview": "A comprehensive UI/UX case study and web design project for 'Wild West', an interactive promotional website for a game. Designed entirely on Figma, featuring custom-drawn web elements, icons, responsive desktop/mobile layouts, and animated web banners.",
          "facts": [
            ["Client", "University Project (Web Design Course - AIU)"],
            ["Role", "Lead UI/UX & Web Designer"],
            ["Tools", "Figma, Illustrator, Photoshop"]
          ],
          "skills": [
            "UI/UX Design",
            "Web Design",
            "Custom Icons",
            "Interactive Experience",
            "Figma"
          ],
          "media": [
            {
              "src": "assets/img/IMG_20261014_112627_266.jpg",
              "caption": "\"Wild West\" Game Promotional Website - UI/UX Case Study"
            }
          ]
        },
        {
          "id": "brand-design",
          "title": "\"Photography & Event Brand\" - Animated Logo & Motion Branding",
          "kind": "Graphic design",
          "when": "From 2018",
          "c": 5,
          "overview": "Custom animated logo and motion branding created for a professional photography and wedding invitation company based in Saudi Arabia. Designed vector assets from scratch using Adobe Illustrator and brought to life with dynamic motion graphics in After Effects to match the client's brand identity.",
          "facts": [
            ["Client", "Photography & Wedding Stationery Company, Saudi Arabia"],
            ["Role", "Motion Designer & Brand Identity Creator"],
            ["Tools", "Illustrator, After Effects"]
          ],
          "skills": [
            "Motion Branding",
            "Logo Animation",
            "Vector Design",
            "After Effects",
            "Brand Identity"
          ],
          "media": [
            {
              "src": "assets/video/4_5942565747732521425.MP4",
              "caption": "\"Photography & Event Brand\" - Animated Logo & Motion Branding"
            }
          ]
        },
        {
          "id": "packaging",
          "title": "\"UrPetsBazzar\" - E-Commerce & Pet Care Ecosystem App (UI/UX Case Study)",
          "kind": "Packaging",
          "when": "From 2018",
          "c": 0,
          "overview": "A comprehensive UI/UX case study and product design for 'UrPetsBazzar', an all-in-one e-commerce and pet care platform developed as both an academic project and a real-world business extension of the 'UrPets' community (scaling over 270,000 members). The ecosystem covers online shopping, veterinary guidance, and proprietary pet food products, bridging community leadership with full-scale digital product execution.",
          "facts": [
            ["Client", "Founding & Startup Project (UrPets Brand)"],
            ["Role", "Founder, Product Lead & UI/UX Designer"],
            ["Tools", "Figma, UI/UX Research, Prototyping, Branding"]
          ],
          "skills": [
            "E-Commerce App",
            "UI/UX Case Study",
            "Startup Ecosystem",
            "Product Design",
            "Community Branding"
          ],
          "media": [
            {
              "src": "assets/img/1.png",
              "caption": "Image 1"
            },
            {
              "src": "assets/img/2.png",
              "caption": "Image 2"
            },
            {
              "src": "assets/img/3.png",
              "caption": "Image 3"
            },
            {
              "src": "assets/img/4.png",
              "caption": "Image 4"
            },
            {
              "src": "assets/img/5.png",
              "caption": "Image 5"
            },
            {
              "src": "assets/img/6.png",
              "caption": "Image 6"
            },
            {
              "src": "assets/img/7.png",
              "caption": "Image 7"
            },
            {
              "src": "assets/img/8.png",
              "caption": "Image 8"
            }
          ]
        },
        {
          "id": "zigo",
          "group": "UX/UI & Web",
          "title": "\"Zigo\" - Behavioral Analysis & Academic Guidance App (Official University Adoption)",
          "kind": "UX/UI app",
          "when": "",
          "c": 5,
          "overview": "A gamified UI/UX case study and behavioral analysis application developed as a university project and officially adopted by Alamein International University leadership (University President, Vice Presidents, and Deans) for the new university psychological clinic. 'Zigo' evaluates student behavior and performance metrics, leveraging medical research and interactive questionnaires to intelligently recommend the optimal academic programs within the Faculty of Arts & Design.",
          "facts": [
            ["Client", "Alamein International University (AIU) - New University Clinic"],
            ["Role", "Lead UX/UI & Product Designer"],
            ["Tools", "Figma, Behavioral Research, User Testing, UI/UX Prototyping"]
          ],
          "skills": [
            "UI/UX Case Study",
            "Behavioral Analysis",
            "Academic Integration",
            "Product Design",
            "User Research"
          ],
          "media": [
            {
              "src": "assets/img/Zigo/1.png",
              "caption": "Zigo — Image 1"
            },
            {
              "src": "assets/img/Zigo/2.png",
              "caption": "Zigo — Image 2"
            },
            {
              "src": "assets/img/Zigo/3.png",
              "caption": "Zigo — Image 3"
            },
            {
              "src": "assets/img/Zigo/4.png",
              "caption": "Zigo — Image 4"
            },
            {
              "src": "assets/img/Zigo/5.png",
              "caption": "Zigo — Image 5"
            },
            {
              "src": "assets/img/Zigo/6.png",
              "caption": "Zigo — Image 6"
            }
          ]
        },
        {
          "id": "hera",
          "group": "UX/UI & Web",
          "title": "\"Quest Numbers\" - Educational Math App Rapid Prototype",
          "kind": "UX/UI app",
          "when": "",
          "c": 0,
          "overview": "A rapid UI/UX prototype and interactive design created upon client request for 'Quest Numbers'. Designed to simplify mathematics for children through multiple engaging learning methods, gamified UI elements, and intuitive user flows.",
          "facts": [
            ["Client", "Client-Requested Rapid Prototype"],
            ["Role", "UI/UX & Product Prototyper"],
            ["Tools", "Figma, Rapid Prototyping, Educational UX"]
          ],
          "skills": [
            "UI/UX Design",
            "Rapid Prototyping",
            "Educational App",
            "Kids UX",
            "Client Project"
          ],
          "media": [
            {
              "src": "assets/video/4_5942565747732521441.mp4",
              "caption": "Hera App Design"
            }
          ]
        },
        {
          "id": "ur-pets-app",
          "group": "UX/UI & Web",
          "title": "\"Elkhashab Real Estate\" - Performance Marketing & Ad Campaign",
          "kind": "UX/UI app",
          "when": "University project",
          "c": 3,
          "overview": "A high-performing digital marketing and paid advertising campaign for a real estate client. Managed the complete social media presence, content creation, and targeted ad campaigns from scratch, with this specific poster design driving exceptional engagement and conversion results.",
          "facts": [
            ["Client", "Elkhashab Real Estate Investments"],
            ["Role", "Digital Marketer, Media Buyer & Content Creator"]
          ],
          "skills": [
            "Paid Ads",
            "Media Buying",
            "Real Estate Marketing",
            "Social Media Management",
            "Graphic Design"
          ],
          "media": [
            {
              "src": "assets/img/IMG_20261014_112515_520.jpg",
              "caption": "Elkhashab Real Estate — Performance Marketing & Ad Campaign"
            }
          ]
        },
        {
          "id": "cooking-master-chef",
          "group": "UX/UI & Web",
          "title": "\"Cooking Master Chef\" - Commercial Food Packaging Design",
          "kind": "UX/UI apps",
          "when": "",
          "c": 4,
          "overview": "Commercial packaging and vector design for 'Cooking Master Chef' French Fries. Developed based on precise professional dimensions and product requirements, successfully manufactured, and currently distributed and retailed across major Egyptian hypermarkets and markets (such as Gomla Market).",
          "facts": [
            ["Client", "Cooking Master Chef (FMCG Brand, Egypt)"],
            ["Role", "Packaging & Brand Identity Designer"]
          ],
          "skills": [
            "Packaging Design",
            "FMCG Branding",
            "Vector Design",
            "Product Mockup",
            "Commercial Print"
          ],
          "media": [
            {
              "src": "assets/img/IMG_20261014_112557_775.jpg",
              "caption": "Cooking Master Chef — Commercial Food Packaging Design"
            }
          ]
        },
        {
          "id": "aiu-ieee",
          "group": "UX/UI & Web",
          "title": "\"AIU IEEE\" - Festive Social Media & Event Poster",
          "kind": "Web UI",
          "when": "",
          "c": 1,
          "overview": "A festive social media and event poster created as a media team member for the AIU IEEE Student Branch. Designed to celebrate seasonal events, engage the university community, and maintain brand consistency across official channels, successfully published on the university's official pages.",
          "facts": [
            ["Client", "AIU IEEE Student Branch"],
            ["Role", "Media & Marketing Team Member"]
          ],
          "skills": [
            "Graphic Design",
            "Social Media Poster",
            "Community Branding",
            "Visual Communication",
            "IEEE AIU"
          ],
          "media": [
            {
              "src": "assets/img/IMG_20261014_112619_726.jpg",
              "caption": "AIU IEEE — Festive Social Media & Event Poster"
            }
          ]
        },
        {
          "id": "dept-site",
          "group": "UX/UI & Web",
          "title": "\"Character's Emotional State\" - Interactive 2D/3D Wheel Design",
          "kind": "University Game Design Project (Field of Arts & Design)",
          "when": "",
          "c": 1,
          "overview": "A complete character and interactive design project. Conceived and designed character expressions and a psychological 'Emotional State Wheel' in 2D, translated them into 3D visualizations, and successfully executed a physical, interactive installation displayed on-ground at the university.",
          "facts": [
            ["Role", "Character Designer & 3D Visualizer"]
          ],
          "skills": [
            "Character Design",
            "2D/3D Modeling",
            "Interactive Installation",
            "Concept Art",
            "Visual Storytelling"
          ],
          "media": [
            {
              "src": "assets/img/IMG_20261014_112604_166.jpg",
              "caption": "\"Character's Emotional State\" - Interactive 2D/3D Wheel Design"
            }
          ]
        }
      ]
    },

    // ==========================================
    // 03. GAME DESIGN & 2D/3D ART
    // ==========================================
    {
      "id": "games",
      "num": "03",
      "title": "Game Design & 2D/3D Art",
      "tags": "Unity · Unreal Engine · Blender",
      "desc": "Game concepts, gameplay systems, level design, 3D assets and environments built for interactive experiences.",
      "tone": 4,
      "cover": "assets/img/IMG_20261014_112532_147.jpeg",
      "tools": [
        "Unity (C#)",
        "Unreal Engine",
        "Blender",
        "ZBrush",
        "Game design documents",
        "Level design"
      ],
      "highlights": [
        "Leftover: concept and game design document complete, in development in Unity and Blender",
        "Healthy Runner: educational mobile game built at GMind, June – July 2026",
        "Epic Games courses in level design, game design and Unreal Engine",
        "3D assets, characters and environments created for game projects"
      ],
      "items": [
        {
          "id": "Roof top one",
          "group": "Games",
          "title": "\"Roof top one\" - 3D Action/Parkour Game Project",
          "kind": "Game, Unity and Blender",
          "when": "Completed / Playable Prototype",
          "c": 6,
          "overview": "A 3D gameplay project developed as part of a university prototyping course, featuring 6 unique levels. Conceived, designed, and programmed entirely by me—from C# scripting, Unity development, and 3D environment/character building using Blender, to UI/UX design and custom sound system curation.",
          "facts": [
            ["Client", "University Prototyping Course Project"],
            ["Role", "Solo Game Developer, Programmer & 3D Artist"],
            ["Status", "Completed / Playable Prototype"],
            ["Tools", "Unity, Blender, C#, Figma"]
          ],
          "skills": [
            "Game Development",
            "3D Modeling",
            "Unity Engine",
            "Level Design",
            "Sound Design",
            "UI/UX"
          ],
          "media": [
            {
              "src": "assets/video/4_5942565747732521447.MOV",
              "caption": "LEFTOVER Gameplay"
            },
            {
              "src": "assets/img/WhatsApp Image 2026-10-15 at 2.37.18 AM.jpeg",
              "caption": "LEFTOVER — 3D Action/Parkour Game Project"
            }
          ]
        },
        {
          "id": "leftover-environment",
          "group": "Games",
          "title": "\"LEFTOVER\" - 3D Environment & Trailer Development",
          "kind": "Game",
          "when": "In Progress",
          "c": 1,
          "overview": "A complete 3D environment and character design project modeled from scratch using Blender, serving as the core world-building and promotional trailer for the ongoing game project 'LEFTOVER'. Showcases end-to-end 3D asset creation, scene texturing, and cinematic trailer direction.",
          "facts": [
            ["Client", "Independent 3D Game Project (In Progress)"],
            ["Role", "Lead 3D Environment Artist & Trailer Director"],
            ["Status", "Game In Progress"],
            ["Tools", "Blender, Video Editing, 3D Modeling, Trailer Direction"]
          ],
          "skills": [
            "3D Environment",
            "Character Modeling",
            "Blender",
            "Game Trailer",
            "World Building"
          ],
          "media": [
            {
              "src": "assets/video/VID_20261014_023119_853.mp4",
              "caption": "LEFTOVER — 3D Environment Trailer"
            },
            {
              "src": "assets/img/Image 2026-10-14 at 8.27.51 PM (1).jpeg",
              "caption": "LEFTOVER — 3D Environment 1"
            },
            {
              "src": "assets/video/WhatsApp Video 2026-10-15 at 2.41.32 AM.mp4",
              "caption": "LEFTOVER — 3D Environment Trailer"
            },
            {
              "src": "assets/img/Image 2026-10-14 at 8.27.51 PM.jpeg",
              "caption": "LEFTOVER — 3D Environment 2"
            },
            {
              "src": "assets/img/Image 2026-10-14 at 8.27.53 PM.jpeg",
              "caption": "LEFTOVER — 3D Environment 3"
            }
          ]
        },
        {
          "id": "character-design-visual-development",
          "group": "Games",
          "title": "\"Character Design & Visual Development\" - Concept Art Collection",
          "kind": "Educational mobile game",
          "when": "Jun – Jul 2026",
          "c": 4,
          "overview": "A comprehensive visual development and character design board showcasing the end-to-end creative pipeline. Features initial pencil construction sketches, detailed vector illustrations created in Adobe Illustrator (including 'Sahra Secrets' and 'Track Zone'), character sheets, expressions, and 3D AI-generated collectible figure visualizations.",
          "facts": [
            ["Client", "Academic & Professional Character Design Portfolio"],
            ["Role", "Concept Artist & Character Designer"],
            ["Tools", "Adobe Illustrator, Concept Art, Character Design, Visual Development, 3D Visualization"]
          ],
          "skills": [
            "Adobe Illustrator",
            "Concept Art",
            "Character Design",
            "Visual Development",
            "3D Visualization"
          ],
          "media": [
            {
              "src": "assets/img/Character_Design_Board/1.png",
              "caption": "Character Design Board — Image 1"
            },
            {
              "src": "assets/img/Character_Design_Board/2.png",
              "caption": "Character Design Board — Image 2"
            },
            {
              "src": "assets/img/Character_Design_Board/3.png",
              "caption": "Character Design Board — Image 3"
            },
            {
              "src": "assets/img/Character_Design_Board/4.png",
              "caption": "Character Design Board — Image 4"
            },
            {
              "src": "assets/img/Character_Design_Board/5.png",
              "caption": "Character Design Board — Image 5"
            },
            {
              "src": "assets/img/Character_Design_Board/6.png",
              "caption": "Character Design Board — Image 6"
            },
            {
              "src": "assets/img/Character_Design_Board/7.png",
              "caption": "Character Design Board — Image 7"
            },
            {
              "src": "assets/img/Character_Design_Board/8.png",
              "caption": "Character Design Board — Image 8"
            },
            {
              "src": "assets/img/Character_Design_Board/9.png",
              "caption": "Character Design Board — Image 9"
            },
            {
              "src": "assets/img/Character_Design_Board/10.png",
              "caption": "Character Design Board — Image 10"
            }
          ]
        },
        {
          "id": "3d-character-modeling-animation",
          "group": "Games",
          "title": "\"3D Character Modeling & Animation\" - University Project",
          "kind": "Prototypes",
          "when": "",
          "c": 2,
          "overview": "A 3D character design, modeling, and animation project created for the New Media Application course. Modeled completely from scratch in Blender, featuring custom textures, rigging, and dynamic character animation to bring the concept to life.",
          "facts": [
            ["Client", "University Project (New Media Application Course)"],
            ["Role", "3D Character Artist & Animator"],
            ["Tools", "Blender, 3D Modeling, Character Animation, Texturing, Rigging"]
          ],
          "skills": [
            "Blender",
            "3D Modeling",
            "Character Animation",
            "Texturing",
            "Rigging"
          ],
          "media": [
            {
              "src": "assets/video/WhatsApp Video 2026-10-15 at 3.15.28 PM.mp4",
              "caption": "3D Character Modeling & Animation — University Project"
            },
            {
              "src": "assets/img/WhatsApp Image 2026-10-15 at 3.15.28 PM.jpeg",
              "caption": "3D Character Modeling & Animation — University Project"
            }
          ]
        },
        {
          "id": "3d-custom-goblet",
          "group": "Games",
          "title": "\"3D Custom Goblet\" - Product Modeling & Sculpting",
          "kind": "Level design",
          "when": "",
          "c": 5,
          "overview": "A custom 3D modeling and digital sculpting project created to client specifications. Designed and sculpted with precision using 3ds Max to achieve realistic forms, smooth surfaces, and high-quality asset presentation.",
          "facts": [
            ["Client", "Client Commission Project"],
            ["Role", "3D Modeler & Sculptor"],
            ["Tools", "3ds Max, 3D Modeling, Digital Sculpting, Product Design, Client Commission"]
          ],
          "skills": [
            "3ds Max",
            "3D Modeling",
            "Digital Sculpting",
            "Product Design",
            "Client Commission"
          ],
          "media": [
            {
              "src": "assets/video/4_5942565747732521437.MP4",
              "caption": "3D Custom Goblet — Product Modeling & Sculpting"
            }
          ]
        },
        {
          "id": "rooftop",
          "group": "Client Projects",
          "title": "Interior Design & Architectural 3D Modeling",
          "kind": "Client Commission Project",
          "when": "",
          "c": 3,
          "overview": "A professional interior design and architectural 3D modeling project executed for a client. Modeled, structured, and visualized with precision using 3ds Max, focusing on interior space planning, structural layout, and environmental presentation.",
          "facts": [
            ["Role", "3D Interior Designer & Modeler"]
          ],
          "skills": [
            "3ds Max",
            "Interior Design",
            "Architectural Modeling",
            "Space Planning",
            "Client Project"
          ],
          "media": [
            {
              "src": "assets/img/IMG_20261014_112548_531.jpg",
              "caption": "Interior Design & Architectural 3D Modeling — Screenshot 1"
            },
            {
              "src": "assets/img/IMG_20261014_112548_864.jpg",
              "caption": "Interior Design & Architectural 3D Modeling — Screenshot 2"
            }
          ]
        }
      ]
    },

    // ==========================================
    // 04. CONTENT STRATEGY & DIGITAL MARKETING
    // ==========================================
    {
      "id": "social",
      "num": "04",
      "title": "Content Strategy & Digital Marketing",
      "tags": "Social Media · Marketing · Content",
      "desc": "Content planning, social media management, paid campaigns and marketing strategies for brands and creators.",
      "tone": 1,
      "cover": "assets/img/IMG_20261014_112532_222.jpeg",
      "tools": [
        "Social media content",
        "Paid advertising",
        "Content planning",
        "Scriptwriting",
        "Marketing strategy"
      ],
      "highlights": [
        "Pages built and managed from A to Z for doctors, real estate and food brands",
        "Marketing and strategic plans for clients in Libya, Saudi Arabia, the UAE, Syria and Jordan",
        "Content creation and scriptwriting for commercial and social media projects",
        "Consumer Behavior & Neuromarketing"
      ],
      "items": [
        {
          "id": "momo-italian-cafe",
          "title": "\"Momo Italian Cafe\" - UGC & Creator Marketing Campaign",
          "kind": "Social Media Campaign",
          "when": "",
          "c": 1,
          "overview": "A comprehensive creator and paid media campaign executed for Momo Italian Cafe, introducing their very first branch in Egypt as an extension of the renowned Italian brand. Handled the complete production pipeline independently: conceptualizing the content strategy, on-site filming, video editing, and executing a cross-platform promotional campaign as both a content creator and media partner.",
          "facts": [
            ["Client", "Momo Italian Cafe (First Egyptian Branch / Italian Brand)"],
            ["Role", "Content Creator, Videographer & Media Buyer"]
          ],
          "skills": [
            "UGC Content",
            "Video Direction",
            "Brand Launch",
            "Social Media Campaign",
            "Content Strategy"
          ],
          "media": [
            {
              "src": "assets/video/4_5890821832881217114.MOV",
              "caption": "Momo Italian Cafe — UGC & Creator Marketing Campaign"
            }
          ]
        },
        {
          "id": "creative-video-campaign",
          "title": "\"Creative Video Campaign\" - Scripting, Filming & Voice-Over",
          "kind": "Social Media Campaign",
          "when": "",
          "c": 1,
          "overview": "A complete end-to-end promotional video campaign handled entirely from concept to execution. Developed the full creative concept, written script, on-site filming, and professional voice-over recording, followed by targeted social media promotion and cross-platform publishing.",
          "facts": [
            ["Client", "Brand Promotional & UGC Campaign"],
            ["Role", "Concept Creator, Videographer, Voice-Over Artist & Media Buyer"]
          ],
          "skills": [
            "Video Production",
            "Voice-Over",
            "Scriptwriting",
            "UGC"
          ],
          "media": [
            {
              "src": "assets/video/IMG_4940.MP4",
              "caption": "Creative Video Campaign — Scripting, Filming & Voice-Over"
            }
          ]
        },
        {
          "id": "aiu-game-design-program",
          "title": "\"AIU Game Design Program\" - Strategic Marketing & Development Plan",
          "kind": "Social Media Campaign",
          "when": "",
          "c": 1,
          "overview": "A comprehensive strategic marketing and development plan formulated for the Game Design and Programming program at Alamein International University. Developed under academic supervision (submitted to Prof. Safaa Abdelsalam, Dean of the Faculty of Arts & Design, and supervised by Dr. Mohamed Osama) to increase departmental awareness, establish the 'AIU Game D&P Students Society', structure campus-wide showcases, and build a thriving academic community.",
          "facts": [
            ["Client", "Alamein International University (AIU) - Faculty of Arts & Design"],
            ["Role", "Lead Strategic Planner & Department Developer"]
          ],
          "skills": [
            "Strategic Planning",
            "Marketing Strategy",
            "Academic Leadership",
            "Community Building",
            "University Branding"
          ],
          "media": [
            {
              "src": "assets/img/Game Design/1.png",
              "caption": "AIU Game Design Program — Strategic Marketing & Development Plan — Image 1"
            },
            {
              "src": "assets/img/Game Design/2.png",
              "caption": "AIU Game Design Program — Strategic Marketing & Development Plan — Image 2"
            },
            {
              "src": "assets/img/Game Design/3.png",
              "caption": "AIU Game Design Program — Strategic Marketing & Development Plan — Image 3"
            },
            {
              "src": "assets/img/Game Design/4.png",
              "caption": "AIU Game Design Program — Strategic Marketing & Development Plan — Image 4"
            }
          ]
        },
        {
          "id": "ur-animals",
          "title": "UR ANIMALS — Strategic Marketing Plan & Brand Ecosystem",
          "kind": "Digital marketing · Strategic planning",
          "when": "2026 – Present",
          "c": 6,
          "overview": "A strategic marketing plan, business model, and brand ecosystem for UR ANIMALS. It builds on UR Pets Community, a private Facebook community of 260K+ members, and combines e-commerce, custom pet products, smart pet-tech features, and data-driven growth strategies to address the gap in the regional pet care market.",
          "facts": [
            ["Client", "Own venture"],
            ["Role", "Founder & Strategic Marketing Planner"]
          ],
          "skills": [
            "Strategic Planning",
            "Startup Ecosystem",
            "Brand Identity",
            "E-Commerce Strategy",
            "Community Building"
          ],
          "media": [
            {
              "src": "assets/img/Marketing Plan UR ANIMALS/1.png",
              "caption": "UR ANIMALS — Strategic Marketing Plan & Brand Ecosystem — Image 1"
            },
            {
              "src": "assets/img/Marketing Plan UR ANIMALS/2.png",
              "caption": "UR ANIMALS — Strategic Marketing Plan & Brand Ecosystem — Image 2"
            },
            {
              "src": "assets/img/Marketing Plan UR ANIMALS/3.png",
              "caption": "UR ANIMALS — Strategic Marketing Plan & Brand Ecosystem — Image 3"
            },
            {
              "src": "assets/img/Marketing Plan UR ANIMALS/4.png",
              "caption": "UR ANIMALS — Strategic Marketing Plan & Brand Ecosystem — Image 4"
            },
            {
              "src": "assets/img/Marketing Plan UR ANIMALS/5.png",
              "caption": "UR ANIMALS — Strategic Marketing Plan & Brand Ecosystem — Image 5"
            },
            {
              "src": "assets/img/Marketing Plan UR ANIMALS/6.png",
              "caption": "UR ANIMALS — Strategic Marketing Plan & Brand Ecosystem — Image 6"
            },
            {
              "src": "assets/img/Marketing Plan UR ANIMALS/7.png",
              "caption": "UR ANIMALS — Strategic Marketing Plan & Brand Ecosystem — Image 7"
            },
            {
              "src": "assets/img/Marketing Plan UR ANIMALS/8.png",
              "caption": "UR ANIMALS — Strategic Marketing Plan & Brand Ecosystem — Image 8"
            },
            {
              "src": "assets/img/Marketing Plan UR ANIMALS/9.png",
              "caption": "UR ANIMALS — Strategic Marketing Plan & Brand Ecosystem — Image 9"
            },
            {
              "src": "assets/img/Marketing Plan UR ANIMALS/10.png",
              "caption": "UR ANIMALS — Strategic Marketing Plan & Brand Ecosystem — Image 10"
            },
            {
              "src": "assets/img/Marketing Plan UR ANIMALS/11.jpeg",
              "caption": "UR ANIMALS — Strategic Marketing Plan & Brand Ecosystem — Image 11"
            },
            {
              "src": "assets/img/Marketing Plan UR ANIMALS/12.jpeg",
              "caption": "UR ANIMALS — Strategic Marketing Plan & Brand Ecosystem — Image 12"
            }
          ]
        },
        {
          "id": "reform-circular-design",
          "title": "RE:FORM — Circular-Design Business Model",
          "kind": "Business strategy · Sustainability · Green Loop 2026",
          "when": "2026",
          "c": 1,
          "text": "Solo participant",
          "overview": "A business model I developed for Green Loop 2026, a national competition I entered and qualified for. I am currently a finalist, with results due on 20 October. RE:FORM is a campus circular-design service for Alamein International University: instead of recycling usable surplus such as banners, boards, wood and fabric, it recovers their value first. Materials are captured, inventoried and matched with student design challenges, turning surplus into real products. The deck covers the problem, pilot material streams, the student engine, business model, revenue and cost structure, impact metrics, risks and stakeholders.",
          "facts": [
            ["Client", "Alamein International University"],
            ["Role", "Solo participant"]
          ],
          "skills": [
            "Sustainability",
            "Business Model",
            "Strategy",
            "Competition"
          ],
          "media": [
            { "src": "assets/img/OPPORTUNITIES/1.jpeg", "caption": "Opportunities — Image 1" },
            { "src": "assets/img/OPPORTUNITIES/2.jpeg", "caption": "Opportunities — Image 2" },
            { "src": "assets/img/OPPORTUNITIES/3.jpeg", "caption": "Opportunities — Image 3" },
            { "src": "assets/img/OPPORTUNITIES/4.jpeg", "caption": "Opportunities — Image 4" },
            { "src": "assets/img/OPPORTUNITIES/5.jpeg", "caption": "Opportunities — Image 5" },
            { "src": "assets/img/OPPORTUNITIES/6.jpeg", "caption": "Opportunities — Image 6" },
            { "src": "assets/img/OPPORTUNITIES/7.jpeg", "caption": "Opportunities — Image 7" },
            { "src": "assets/img/OPPORTUNITIES/8.jpeg", "caption": "Opportunities — Image 8" },
            { "src": "assets/img/OPPORTUNITIES/9.jpeg", "caption": "Opportunities — Image 9" },
            { "src": "assets/img/OPPORTUNITIES/10.jpeg", "caption": "Opportunities — Image 10" },
            { "src": "assets/img/OPPORTUNITIES/11.jpeg", "caption": "Opportunities — Image 11" },
            { "src": "assets/img/OPPORTUNITIES/12.jpeg", "caption": "Opportunities — Image 12" },
            { "src": "assets/img/OPPORTUNITIES/13.jpeg", "caption": "Opportunities — Image 13" },
            { "src": "assets/img/OPPORTUNITIES/14.jpeg", "caption": "Opportunities — Image 14" },
            { "src": "assets/img/OPPORTUNITIES/15.jpeg", "caption": "Opportunities — Image 15" },
            { "src": "assets/img/OPPORTUNITIES/16.jpeg", "caption": "Opportunities — Image 16" },
            { "src": "assets/img/OPPORTUNITIES/17.jpeg", "caption": "Opportunities — Image 17" },
            { "src": "assets/img/OPPORTUNITIES/18.jpeg", "caption": "Opportunities — Image 18" },
            { "src": "assets/img/OPPORTUNITIES/19.jpeg", "caption": "Opportunities — Image 19" },
            { "src": "assets/img/OPPORTUNITIES/20.jpeg", "caption": "Opportunities — Image 20" }
          ]
        },
      ]
    },

    // ==========================================
    // 05. LEADERSHIP, COMMUNITY & EVENTS
    // ==========================================
    {
      "id": "community-events",
      "num": "05",
      "title": "Leadership, Community & Events",
      "tags": "Leadership · Communities · Events",
      "desc": "Community building, student leadership, event participation and initiatives that bring people together.",
      "tone": 3,
      "cover": "assets/img/IMG_20261014_112532_898.jpeg",
      "tools": [
        "Team leadership",
        "Branding strategy",
        "Community building",
        "Event communication",
        "Pitching"
      ],
      "highlights": [
        "Founder of an online community with 270K+ members",
        "Head of Media & Marketing at AIU ICPC, August 2025 – March 2026",
        "Content and campaigns for IEEE AIU since December 2024",
        "Nominated by AIU for Egypt Forum 2026 as an outstanding student"
      ],
      "items": [
        {
          "id": "aiu-icpc-community",
          "title": "AIU ICPC Community - Media Leadership & Campaign Case Study",
          "kind": "Graphic design",
          "when": "2025–2026",
          "c": 5,
          "overview": "A comprehensive case study showcasing recruitment, participation, and event communication for the AIU ICPC Community (2025–26). As the Head of Media, I led the entire media strategy, directed and produced the promotional motion graphics video, designed recruitment and contest posters using Canva and Illustrator, managed social media communication, and captured/edited on-ground photography for the Orientation Day.",
          "facts": [
            ["Organization", "AIU ICPC Community, Alamein International University"],
            ["Role", "Head of Media"],
            ["Key Elements", "Motion Graphics & Video Campaign; Recruitment & Contest Posters; Event Communication & Photography"],
            ["Tools", "Canva, Adobe Illustrator, Motion Graphics, Video Direction, Photography & Editing"]
          ],
          "skills": [
            "Media Strategy",
            "Motion Graphics",
            "Graphic Design",
            "Social Media Communication",
            "Photography & Editing"
          ],
          "media": [
            {
              "src": "assets/video/IMG_1147.MP4",
              "caption": "AIU ICPC Community — Media Leadership & Campaign Case Study"
            },
                        {
              "src": "assets/img/ICPC-Case-Study/1.png",
              "caption": "ICPC Case Study — Image 1"
            },
            {
              "src": "assets/img/ICPC-Case-Study/2.png",
              "caption": "ICPC Case Study — Image 2"
            },
            {
              "src": "assets/img/ICPC-Case-Study/3.png",
              "caption": "ICPC Case Study — Image 3"
            },
            {
              "src": "assets/img/ICPC-Case-Study/4.png",
              "caption": "ICPC Case Study — Image 4"
            }
          ]
        },
        {
          "id": "egypt-forum-2026",
          "title": "Egypt Forum 2026 — Student Dialogue Sessions",
          "kind": "Leadership · Events · Media appearance",
          "when": "2026",
          "c": 1,
          "overview": "Nominated as one of about 20 outstanding students representing Alamein International University in the academic and community dialogue sessions held ahead of Egypt Forum 2026, and the only representative from the Faculty of Arts and Design. Worked in an interdisciplinary team of five students from different faculties to discuss and develop ideas, and took part in a television interview covering the sessions.",
          "facts": [
            ["Client", "Alamein International University"],
            ["Role", "Student representative · Team member"]
          ],
          "skills": [
            "Leadership",
            "Teamwork",
            "Public Speaking",
            "Events"
          ],
          "media": [
            {
              "src": "assets/video/WhatsApp Video 2026-10-15 at 2.17.54 PM.mp4",
              "caption": "Egypt Forum 2026 — Student Dialogue Sessions",
              "type": "video"
            },
            {
              "src": "assets/img/WhatsApp Image 2026-10-15 at 2.17.55 PM.jpeg",
              "caption": "Egypt Forum 2026 — Student Representative",
              "type": "image"
            }
          ]
        }
      ]
    }
  ],
  "roles": [
    {
      "when": "Aug 2025 – Mar 2026",
      "title": "Head of Media & Marketing",
      "org": "AIU ICPC Community",
      "note": "Led the media team and branding strategy, and managed the community page."
    },
    {
      "when": "Dec 2024 – Present",
      "title": "Member, Media & Marketing",
      "org": "IEEE AIU Student Branch",
      "note": "Content creation and campaigns."
    },
    {
      "when": "",
      "title": "Founder",
      "org": "GDAP",
      "note": ""
    },
    {
      "when": "Online business",
      "title": "Solo Founder",
      "org": "UR Pets Bazaar",
      "note": "A community of more than 270K members."
    }
  ],
  "recognition": [
    {
      "when": "5 Oct 2026",
      "title": "Egypt Forum 2026",
      "result": "Nominated",
      "note": "Nominated by Alamein International University as an outstanding student. The only Faculty of Arts and Design student selected."
    },
    {
      "when": "Oct 2026",
      "title": "Green Loop Hackathon, ESF Waste Management",
      "result": "AIU winner · Finalist",
      "note": "Idea owner of an application system for universities. Created the pitch, marketing plan, business plan and prototype. Final results on 20 October 2026."
    },
    {
      "when": "Oct 2026",
      "title": "Game Jam, Grand Egyptian Museum",
      "result": "Participating",
      "note": ""
    },
    {
      "when": "",
      "title": "Innovators Care Competition",
      "result": "First place",
      "note": "For UR Pets Bazaar, an online business with a community of 270K+ members."
    },
    {
      "when": "",
      "title": "Zigo",
      "result": "Adopted",
      "note": "Student behavior and performance analysis app, adopted by the university president and deans for the new university clinic."
    }
  ],
  "about": {
    "portrait": "assets/img/Maryam.jpeg",
    "bio": "Content creator since 2017 and graphic and packaging designer since 2018. Founder of an online community of more than 270K members. Video director, social media manager and game designer, studying Game Design and Programming at Alamein International University.",
    "education": [
      {
        "when": "Sep 2023 – Oct 2027 (expected)",
        "title": "BA, Game Design and Programming",
        "org": "Alamein International University"
      }
    ],
    "languages": [
      "Arabic (native)",
      "English (full professional)",
      "French (intermediate)"
    ],
    "toolkit": [
      {
        "group": "Visual and design",
        "list": [
          "Canva",
          "Adobe Illustrator",
          "Adobe Photoshop"
        ]
      },
      {
        "group": "Video and motion",
        "list": [
          "Adobe Premiere Pro",
          "After Effects",
          "CapCut",
          "AI video creation",
          "Voiceover recording"
        ]
      },
      {
        "group": "Marketing and content",
        "list": [
          "Social media content",
          "Paid advertising campaigns",
          "Scriptwriting",
          "UGC",
          "Photography and filming"
        ]
      },
      {
        "group": "3D, games and UX",
        "list": [
          "Blender",
          "ZBrush",
          "Unity (C#)",
          "Unreal Engine",
          "Level design",
          "UX/UI design and research",
          "HTML & CSS"
        ]
      }
    ],
    "experience": [
      {
        "when": "Jun 2026 – Present",
        "title": "Video Director (Freelance)",
        "org": "Alex Foods",
        "note": "Directed TV commercials for an Egyptian juice and food company, from concept to final execution."
      },
      {
        "when": "2026 – Present",
        "title": "Content Creator, Photographer, Director & Video Editor (Freelance)",
        "org": "Restaurants & cafés",
        "note": "End-to-end content, paid ad campaigns and UGC videos, including Momo Café."
      },
      {
        "when": "2026",
        "title": "Video Editor & Videographer (Freelance)",
        "org": "Photography company, Saudi Arabia",
        "note": "Promotional video ads and After Effects animated logos."
      },
      {
        "when": "Jun – Jul 2026",
        "title": "Game Designer & Developer Trainee",
        "org": "GMind, Alexandria",
        "note": "Designed and developed Healthy Runner in Unity."
      },
      {
        "when": "Aug 2025 – Mar 2026",
        "title": "Head of Media & Marketing",
        "org": "AIU ICPC Community",
        "note": "Led the media team and branding strategy, and managed the community page."
      },
      {
        "when": "Jul – Dec 2025",
        "title": "UX/UI Design Trainee",
        "org": "Information Technology Institute (ITI)",
        "note": ""
      },
      {
        "when": "Dec 2024 – Present",
        "title": "Member, Media & Marketing",
        "org": "IEEE AIU Student Branch",
        "note": "Content creation and campaigns."
      },
      {
        "when": "Nov 2024",
        "title": "Gaming Fundamentals Workshop",
        "org": "Lawrence Technological University, USA",
        "note": ""
      },
      {
        "when": "From 2018",
        "title": "Graphic Designer & Packaging Designer",
        "org": "Graphic design company for doctors, and freelance",
        "note": ""
      },
      {
        "when": "From 2017",
        "title": "Content Creator",
        "org": "Facebook",
        "note": "Personal account run as a content creator."
      }
    ],
    "certs": [
      "Google UX Design Professional Certificate, Google (Nov 2024)",
      "Unreal Engine Fundamentals, Epic Games (Jul 2025)",
      "Introduction to Game Design, Epic Games (Jul 2025)",
      "Fundamentals of Level Design with Unreal Engine, Epic Games (Jul 2025)",
      "Game Design and Development 1: 2D Shooter, Michigan State University (Apr 2025)",
      "Ready to Roll: The Video Production Process, with Honors, University of Colorado Boulder (Apr 2025)",
      "Social Media Storytelling: Videos for Instagram & YouTube, Skillshare",
      "Premiere Pro Pt. 1: Getting Started & Editing Basics, Skillshare",
      "Entrepreneurship and Small Business, SkillsDynamix (Sep 2026)",
      "Building Web Pages with HTML & CSS, University of Washington (Apr 2023)",
      "Consumer Behavior & Neuromarketing",
      "Introduction to Psychology, Yale"
    ]
  }
};
