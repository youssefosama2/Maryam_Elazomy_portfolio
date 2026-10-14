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
  "portrait": "assets/img/IMG_20261014_112631_375.jpg",
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
      "tools": [
        "Premiere Pro",
        "CapCut",
        "After Effects",
        "AI video creation",
        "Voiceover"
      ],
      "highlights": [
        "Video director at Alex Foods since June 2026",
        "Scripts, filming, directing, editing and voiceover handled end to end",
        "After Effects animated logos for companies",
        "Ready to Roll: The Video Production Process, with Honors, University of Colorado Boulder"
      ],
      "items": [
        {
          "id": "alex-foods",
          "title": "Alex Foods TV Commercials",
          "kind": "Video direction",
          "when": "Jun 2026 – Present",
          "c": 6,
          "overview": "TV commercials for an Egyptian juice and food company, directed from concept and scriptwriting through visual design, animation, production and final execution.",
          "facts": [
            ["Role", "Video director (freelance)"],
            ["Client", "Alex Foods, Alexandria"]
          ],
          "skills": [
            "Directing",
            "Scriptwriting",
            "Animation",
            "Brand storytelling"
          ],
          "media": []
        },
        {
          "id": "restaurants",
          "title": "Restaurant & Café Videos",
          "kind": "Short-form video",
          "when": "2026 – Present",
          "c": 1,
          "overview": "End-to-end video content for restaurants and cafés, including Momo Café, an Italian brand with a branch in Egypt: scriptwriting, filming, directing, editing and voiceover.",
          "facts": [
            ["Role", "Content creator, director, editor"],
            ["Client", "Restaurants and cafés, including Momo Café"]
          ],
          "skills": [
            "Short-form video",
            "Voiceover",
            "Editing"
          ],
          "media": []
        },
        {
          "id": "ugc",
          "title": "UGC Videos",
          "kind": "UGC",
          "when": "2026 – Present",
          "c": 3,
          "overview": "UGC videos with self-recorded voiceover for restaurants and products, shot and directed.",
          "facts": [
            ["Role", "Creator, director, voiceover"]
          ],
          "skills": [
            "UGC",
            "Voiceover",
            "Directing"
          ],
          "media": []
        },
        {
          "id": "saudi-ads",
          "title": "Promo Ads & Animated Logos",
          "kind": "Editing and motion",
          "when": "2026",
          "c": 5,
          "overview": "Promotional video ads edited and filmed for a photography company in Saudi Arabia, plus After Effects motion graphics including animated logos for companies.",
          "facts": [
            ["Role", "Video editor and videographer (freelance)"],
            ["Client", "Photography company, Saudi Arabia"]
          ],
          "skills": [
            "Video editing",
            "Motion graphics",
            "After Effects"
          ],
          "media": []
        },
        {
          "id": "mascot",
          "title": "Mascot Animations",
          "kind": "Animation",
          "when": "",
          "c": 2,
          "overview": "Animated mascot work.",
          "todo": "Add: the project or client, your role, the tools and a clip.",
          "facts": [],
          "skills": [
            "Animation",
            "Character"
          ],
          "media": []
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
          "id": "packaging",
          "title": "Packaging Design",
          "kind": "Packaging",
          "when": "From 2018",
          "c": 0,
          "overview": "Product packaging designed for a well-known potato company.",
          "facts": [
            ["Role", "Packaging designer"]
          ],
          "skills": [
            "Packaging",
            "Illustrator"
          ],
          "media": []
        },
        {
          "id": "brand-design",
          "title": "Brand & Graphic Design",
          "kind": "Graphic design",
          "when": "From 2018",
          "c": 5,
          "overview": "Graphic design for many brands and clients, created at a graphic design company for doctors and as a freelancer.",
          "facts": [
            ["Role", "Graphic designer"],
            ["Setting", "Design company and freelance"]
          ],
          "skills": [
            "Visual branding",
            "Illustrator",
            "Photoshop"
          ],
          "media": []
        },
        {
          "id": "posters",
          "title": "Posters & Social Visuals",
          "kind": "Visual content",
          "when": "From 2018",
          "c": 3,
          "overview": "Posters and visual content for social media, designed with Canva and Adobe Illustrator.",
          "facts": [
            ["Tools", "Canva, Illustrator, Photoshop"]
          ],
          "skills": [
            "Canva",
            "Poster design",
            "Social visuals"
          ],
          "media": []
        },
        {
          "id": "zigo",
          "group": "UX/UI & Web",
          "title": "Zigo",
          "kind": "UX/UI app",
          "when": "",
          "c": 5,
          "overview": "A student behavior and performance analysis app, adopted by the university president and deans for the new university clinic.",
          "facts": [
            ["Role", "UX/UI design"]
          ],
          "skills": [
            "UX/UI",
            "Wireframes",
            "Research"
          ],
          "media": []
        },
        {
          "id": "hera",
          "group": "UX/UI & Web",
          "title": "Hera",
          "kind": "UX/UI app",
          "when": "",
          "c": 0,
          "overview": "A UX/UI concept for a women's ride-hailing app.",
          "facts": [
            ["Role", "UX/UI design"]
          ],
          "skills": [
            "UX/UI",
            "Wireframes",
            "Prototyping"
          ],
          "media": []
        },
        {
          "id": "ur-pets-app",
          "group": "UX/UI & Web",
          "title": "UR Pets App",
          "kind": "UX/UI app",
          "when": "University project",
          "c": 3,
          "overview": "UX/UI design for a pet marketplace and community platform.",
          "facts": [
            ["Role", "UX/UI design"]
          ],
          "skills": [
            "UX/UI",
            "Wireframes"
          ],
          "media": []
        },
        {
          "id": "kids-apps",
          "group": "UX/UI & Web",
          "title": "Kids Learning Apps",
          "kind": "UX/UI apps",
          "when": "",
          "c": 4,
          "overview": "Multiple learning apps for children covering math and skills development.",
          "facts": [
            ["Role", "UX/UI design"]
          ],
          "skills": [
            "UX/UI",
            "Educational design"
          ],
          "media": []
        },
        {
          "id": "dept-site",
          "group": "UX/UI & Web",
          "title": "Game Design Department Website",
          "kind": "Web UI",
          "when": "",
          "c": 1,
          "overview": "The full website UI for the Game Design department.",
          "facts": [
            ["Role", "UI design"]
          ],
          "skills": [
            "Web UI",
            "HTML & CSS"
          ],
          "media": []
        },
        {
          "id": "icpc-photo",
          "title": "AIU ICPC Photography",
          "kind": "Community photography",
          "when": "Aug 2025 – Mar 2026",
          "c": 3,
          "overview": "Photography for the AIU ICPC Community, alongside involvement in its media and marketing activities.",
          "facts": [
            ["Role", "Photographer"],
            ["Where", "Alamein International University"]
          ],
          "skills": [
            "Photography",
            "Community media"
          ],
          "media": []
        },
        {
          "id": "food-photo",
          "title": "Restaurant & Café Photography",
          "kind": "Food photography",
          "when": "2026 – Present",
          "c": 2,
          "overview": "Photography and filming for restaurants and cafés, including Momo Café.",
          "facts": [
            ["Role", "Photographer and videographer"]
          ],
          "skills": [
            "Photography",
            "Filming"
          ],
          "media": []
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
          "id": "leftover",
          "group": "Games",
          "title": "Leftover",
          "kind": "Game, Unity and Blender",
          "when": "In development",
          "c": 6,
          "overview": "Designed and programmed in Unity and Blender. The concept and game design document are complete, and development is in progress.",
          "facts": [
            ["Role", "Designer and programmer"],
            ["Status", "In development"]
          ],
          "skills": [
            "Game design document",
            "Unity",
            "Blender"
          ],
          "media": []
        },
        {
          "id": "lost-memory",
          "group": "Games",
          "title": "The Lost Memory",
          "kind": "Game",
          "when": "",
          "c": 1,
          "overview": "A game project.",
          "todo": "Add: the concept, your role, the tools, the status and screenshots.",
          "facts": [],
          "skills": [
            "Game design"
          ],
          "media": []
        },
        {
          "id": "healthy-runner",
          "group": "Games",
          "title": "Healthy Runner",
          "kind": "Educational mobile game",
          "when": "Jun – Jul 2026",
          "c": 4,
          "overview": "An educational mobile game for children, built in Unity at GMind in Alexandria. The core runner mechanics include lane switching and decision-based gates that reward healthy choices.",
          "facts": [
            ["Role", "Game designer and developer trainee"],
            ["Studio", "GMind, Alexandria"]
          ],
          "skills": [
            "Unity",
            "Game mechanics",
            "Educational design"
          ],
          "media": []
        },
        {
          "id": "prototypes",
          "group": "Games",
          "title": "Unity Prototypes",
          "kind": "Prototypes",
          "when": "",
          "c": 2,
          "overview": "Multiple Unity game prototypes built with object-oriented programming principles.",
          "facts": [
            ["Tools", "Unity"]
          ],
          "skills": [
            "OOP",
            "Prototyping"
          ],
          "media": []
        },
        {
          "id": "unreal-levels",
          "group": "Games",
          "title": "Unreal Engine Levels",
          "kind": "Level design",
          "when": "",
          "c": 5,
          "overview": "Levels designed in Unreal Engine with a focus on gameplay flow.",
          "facts": [
            ["Tools", "Unreal Engine"]
          ],
          "skills": [
            "Level design",
            "Gameplay flow"
          ],
          "media": []
        },
        {
          "id": "rooftop",
          "group": "Games",
          "title": "Rooftop",
          "kind": "Game",
          "when": "",
          "c": 3,
          "overview": "A game with four levels, designed and programmed.",
          "facts": [
            ["Role", "Designer and programmer"]
          ],
          "skills": [
            "Level design",
            "Programming"
          ],
          "media": []
        },
        {
          "id": "blender-assets",
          "title": "Blender Game Assets",
          "kind": "3D modeling",
          "when": "",
          "c": 3,
          "overview": "3D characters, environments and game assets created in Blender.",
          "todo": "Add: which assets, renders and a turntable video.",
          "facts": [
            ["Tools", "Blender"]
          ],
          "skills": [
            "3D modeling",
            "Asset creation",
            "Game-ready assets"
          ],
          "media": []
        },
        {
          "id": "high-poly",
          "title": "High-Poly Character Design",
          "kind": "3D characters",
          "when": "",
          "c": 1,
          "overview": "3D characters created in Blender and ZBrush.",
          "todo": "Add: which characters, the sculpting workflow and renders.",
          "facts": [
            ["Tools", "Blender, ZBrush"]
          ],
          "skills": [
            "High-poly modeling",
            "Character design",
            "Sculpting"
          ],
          "media": []
        },
        {
          "id": "design-2d3d",
          "title": "2D & 3D Design",
          "kind": "Design",
          "when": "University projects",
          "c": 5,
          "overview": "2D and 3D designs created for university projects.",
          "facts": [
            ["Tools", "Blender"]
          ],
          "skills": [
            "2D design",
            "3D design"
          ],
          "media": []
        },
        {
          "id": "env-sketches",
          "title": "Environment Sketches",
          "kind": "Concept work",
          "when": "",
          "c": 4,
          "overview": "Environment sketches for game worlds.",
          "todo": "Add: which worlds, the sketches and how they became 3D.",
          "facts": [],
          "skills": [
            "Environment design",
            "Sketching"
          ],
          "media": []
        },
        {
          "id": "leftover-env",
          "title": "Leftover Environments",
          "kind": "3D environments",
          "when": "In development",
          "c": 6,
          "overview": "3D environments for the game Leftover, built in Blender for Unity.",
          "facts": [
            ["Game", "Leftover"],
            ["Tools", "Blender, Unity"]
          ],
          "skills": [
            "Environment art",
            "Blender",
            "Unity"
          ],
          "media": []
        },
        {
          "id": "camel-world",
          "title": "Camel Robot Mini World",
          "kind": "3D scene",
          "when": "Personal project",
          "c": 2,
          "overview": "A Blender mini world: a planet with a camel-inspired robot, a vehicle and a desert environment.",
          "todo": "Confirm the status and add renders.",
          "facts": [
            ["Tools", "Blender"]
          ],
          "skills": [
            "Modeling",
            "Environment",
            "Props"
          ],
          "media": []
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
          "id": "pages",
          "title": "Page Management",
          "kind": "Social media",
          "when": "Freelance",
          "c": 0,
          "overview": "Pages for doctors, real estate and food brands, built and managed from A to Z: content, scriptwriting, marketing and advertising campaigns.",
          "facts": [
            ["Role", "Page and content management (freelance)"],
            ["Clients", "Doctors, real estate, food brands"]
          ],
          "skills": [
            "Page management",
            "Content planning",
            "Ad campaigns"
          ],
          "media": []
        },
        {
          "id": "paid-ads",
          "title": "Paid Ad Campaigns",
          "kind": "Digital advertising",
          "when": "2026 – Present",
          "c": 6,
          "overview": "Paid campaigns that promoted restaurant and café videos on social media.",
          "facts": [
            ["Role", "Content creator and campaign manager"]
          ],
          "skills": [
            "Paid advertising",
            "Campaigns",
            "Short-form video"
          ],
          "media": []
        },
        {
          "id": "strategy",
          "title": "Marketing & Strategy Plans",
          "kind": "Strategy",
          "when": "Freelance",
          "c": 2,
          "text": "Five markets",
          "overview": "Marketing plans, pitches and strategic plans for clients and companies in Libya, Saudi Arabia, the UAE, Syria and Jordan.",
          "facts": [
            ["Markets", "Libya, Saudi Arabia, UAE, Syria, Jordan"]
          ],
          "skills": [
            "Marketing plans",
            "Pitching",
            "Regional outreach"
          ],
          "media": []
        },
        {
          "id": "creators",
          "title": "Content for Teachers & Creators",
          "kind": "Content creation",
          "when": "Freelance",
          "c": 5,
          "overview": "Content ideas, advertising and marketing for teachers and other content creators.",
          "facts": [
            ["Role", "Content creator (freelance)"]
          ],
          "skills": [
            "Content ideas",
            "Advertising",
            "Marketing"
          ],
          "media": []
        },
        {
          "id": "scripts",
          "title": "Scriptwriting",
          "kind": "Writing",
          "when": "Ongoing",
          "c": 0,
          "overview": "Scripts for TV commercials, restaurant videos and social media pages, written together with the content and marketing plan.",
          "facts": [
            ["Role", "Scriptwriter"]
          ],
          "skills": [
            "Scriptwriting",
            "Storytelling"
          ],
          "media": []
        },
        {
          "id": "creator",
          "title": "Personal Content Creator",
          "kind": "Content creation",
          "when": "From 2017",
          "c": 3,
          "overview": "A personal Facebook account run as a content creator since 2017.",
          "facts": [
            ["Role", "Content creator"],
            ["Platform", "Facebook"]
          ],
          "skills": [
            "Content creation",
            "Audience building"
          ],
          "media": []
        }
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
          "id": "community",
          "title": "UR Pets Bazaar Community",
          "kind": "Community building",
          "when": "Online business",
          "c": 4,
          "text": "270K+ members",
          "overview": "An online business with a community of more than 270K members. Solo founder, and first place at the Innovators Care Competition.",
          "facts": [
            ["Role", "Solo founder"],
            ["Community", "270K+ members"]
          ],
          "skills": [
            "Community building",
            "Entrepreneurship",
            "Content"
          ],
          "media": []
        },
        {
          "id": "icpc-media",
          "title": "AIU ICPC Community",
          "kind": "Head of Media & Marketing",
          "when": "Aug 2025 – Mar 2026",
          "c": 1,
          "text": "Head of Media",
          "overview": "Led the media team and the branding strategy of the community, managed the community page and handled all of its content and publishing.",
          "facts": [
            ["Role", "Head of Media & Marketing"],
            ["Where", "Alamein International University"]
          ],
          "skills": [
            "Team leadership",
            "Branding",
            "Community page"
          ],
          "media": []
        },
        {
          "id": "ieee-content",
          "title": "IEEE AIU Student Branch",
          "kind": "Media & Marketing",
          "when": "Dec 2024 – Present",
          "c": 5,
          "text": "IEEE",
          "overview": "Contributes to content creation and campaigns for the student branch.",
          "facts": [
            ["Role", "Member, Media & Marketing"]
          ],
          "skills": [
            "Content creation",
            "Campaigns"
          ],
          "media": []
        },
        {
          "id": "egypt-forum",
          "title": "Egypt Forum 2026",
          "kind": "Nomination",
          "when": "5 Oct 2026",
          "c": 6,
          "text": "Egypt Forum",
          "overview": "Nominated by Alamein International University as an outstanding student. The only Faculty of Arts and Design student selected.",
          "facts": [
            ["Date", "5 Oct 2026"],
            ["Result", "Nominated"]
          ],
          "skills": [
            "Representation",
            "Public dialogue"
          ],
          "media": []
        },
        {
          "id": "green-loop",
          "title": "Green Loop Hackathon",
          "kind": "ESF Waste Management",
          "when": "Oct 2026",
          "c": 4,
          "text": "Finalist",
          "overview": "Idea owner of an application system for universities. Created the pitch, marketing plan, business plan and prototype. Winner at Alamein International University and finalist in the final stage. Final results on 20 October 2026.",
          "facts": [
            ["Role", "Idea owner"],
            ["Result", "AIU winner, finalist"]
          ],
          "skills": [
            "Pitching",
            "Marketing plan",
            "Business plan",
            "Prototype"
          ],
          "media": []
        },
        {
          "id": "game-jam",
          "title": "Game Jam, Grand Egyptian Museum",
          "kind": "Competition",
          "when": "Oct 2026",
          "c": 2,
          "text": "Game Jam",
          "overview": "Currently participating.",
          "facts": [
            ["Status", "Participating"]
          ],
          "skills": [
            "Game design",
            "Teamwork"
          ],
          "media": []
        },
        {
          "id": "events",
          "title": "Event Communication",
          "kind": "Events",
          "when": "",
          "c": 1,
          "draft": true,
          "overview": "Event coverage and communication.",
          "todo": "Add the events you photographed or communicated for (name, date, your role) with photos. Remove draft:true when ready.",
          "facts": [],
          "skills": [
            "Event photography",
            "Communication"
          ],
          "media": []
        }
      ]
    }
  ],
 
  // "sections": [ 
  //   {
  //     "tools": [
  //       "Canva",
  //       "Adobe Illustrator",
  //       "Adobe Photoshop"
  //     ],
  //     "highlights": [
  //       "Graphic and packaging designer since 2018",
  //       "Packaging for a well-known potato company",
  //       "Design work at a graphic design company for doctors, and as a freelancer"
  //     ],
  //     "id": "visual",
  //     "num": "01",
  //     "title": "TV Commercials, Short Films &",
  //     "tags": "Canva · Illustrator · Photoshop",
  //     "desc": "Visual content, branding and packaging for brands, doctors, restaurants and online communities.",
  //     "tone": 0,
  //     "items": [
  //       {
  //         "id": "packaging",
  //         "title": "Packaging Design",
  //         "kind": "Packaging",
  //         "when": "From 2018",
  //         "c": 0,
  //         "overview": "Product packaging designed for a well-known potato company.",
  //         "facts": [
  //           [
  //             "Role",
  //             "Packaging designer"
  //           ]
  //         ],
  //         "skills": [
  //           "Packaging",
  //           "Illustrator"
  //         ],
  //         "media": []
  //       },
  //       {
  //         "id": "brand-design",
  //         "title": "Brand & Graphic Design",
  //         "kind": "Graphic design",
  //         "when": "From 2018",
  //         "c": 5,
  //         "overview": "Graphic design for many brands and clients, created at a graphic design company for doctors and as a freelancer.",
  //         "facts": [
  //           [
  //             "Role",
  //             "Graphic designer"
  //           ],
  //           [
  //             "Setting",
  //             "Design company and freelance"
  //           ]
  //         ],
  //         "skills": [
  //           "Visual branding",
  //           "Illustrator",
  //           "Photoshop"
  //         ],
  //         "media": []
  //       },
  //       {
  //         "id": "posters",
  //         "title": "Posters & Social Visuals",
  //         "kind": "Visual content",
  //         "when": "From 2018",
  //         "c": 3,
  //         "overview": "Posters and visual content for social media, designed with Canva and Adobe Illustrator.",
  //         "facts": [
  //           [
  //             "Tools",
  //             "Canva, Illustrator, Photoshop"
  //           ]
  //         ],
  //         "skills": [
  //           "Canva",
  //           "Poster design",
  //           "Social visuals"
  //         ],
  //         "media": []
  //       }
  //     ]
  //   },
  //   {
  //     "tools": [
  //       "Premiere Pro",
  //       "CapCut",
  //       "After Effects",
  //       "AI video creation",
  //       "Voiceover"
  //     ],
  //     "highlights": [
  //       "Video director at Alex Foods since June 2026",
  //       "Scripts, filming, directing, editing and voiceover handled end to end",
  //       "After Effects animated logos for companies",
  //       "Ready to Roll: The Video Production Process, with Honors, University of Colorado Boulder"
  //     ],
  //     "id": "video",
  //     "num": "02",
  //     "title": "Visual & UI/UX Design",
  //     "tags": "Editing · Commercials · Motion",
  //     "desc": "Commercials, short-form videos and motion graphics, from the script to the final edit.",
  //     "tone": 6,
  //     "items": [
  //       {
  //         "id": "alex-foods",
  //         "title": "Alex Foods TV Commercials",
  //         "kind": "Video direction",
  //         "when": "Jun 2026 – Present",
  //         "c": 6,
  //         "overview": "TV commercials for an Egyptian juice and food company, directed from concept and scriptwriting through visual design, animation, production and final execution.",
  //         "facts": [
  //           [
  //             "Role",
  //             "Video director (freelance)"
  //           ],
  //           [
  //             "Client",
  //             "Alex Foods, Alexandria"
  //           ]
  //         ],
  //         "skills": [
  //           "Directing",
  //           "Scriptwriting",
  //           "Animation",
  //           "Brand storytelling"
  //         ],
  //         "media": []
  //       },
  //       {
  //         "id": "restaurants",
  //         "title": "Restaurant & Café Videos",
  //         "kind": "Short-form video",
  //         "when": "2026 – Present",
  //         "c": 1,
  //         "overview": "End-to-end video content for restaurants and cafés, including Momo Café, an Italian brand with a branch in Egypt: scriptwriting, filming, directing, editing and voiceover.",
  //         "facts": [
  //           [
  //             "Role",
  //             "Content creator, director, editor"
  //           ],
  //           [
  //             "Client",
  //             "Restaurants and cafés, including Momo Café"
  //           ]
  //         ],
  //         "skills": [
  //           "Short-form video",
  //           "Voiceover",
  //           "Editing"
  //         ],
  //         "media": []
  //       },
  //       {
  //         "id": "ugc",
  //         "title": "UGC Videos",
  //         "kind": "UGC",
  //         "when": "2026 – Present",
  //         "c": 3,
  //         "overview": "UGC videos with self-recorded voiceover for restaurants and products, shot and directed.",
  //         "facts": [
  //           [
  //             "Role",
  //             "Creator, director, voiceover"
  //           ]
  //         ],
  //         "skills": [
  //           "UGC",
  //           "Voiceover",
  //           "Directing"
  //         ],
  //         "media": []
  //       },
  //       {
  //         "id": "saudi-ads",
  //         "title": "Promo Ads & Animated Logos",
  //         "kind": "Editing and motion",
  //         "when": "2026",
  //         "c": 5,
  //         "overview": "Promotional video ads edited and filmed for a photography company in Saudi Arabia, plus After Effects motion graphics including animated logos for companies.",
  //         "facts": [
  //           [
  //             "Role",
  //             "Video editor and videographer (freelance)"
  //           ],
  //           [
  //             "Client",
  //             "Photography company, Saudi Arabia"
  //           ]
  //         ],
  //         "skills": [
  //           "Video editing",
  //           "Motion graphics",
  //           "After Effects"
  //         ],
  //         "media": []
  //       },
  //       {
  //         "id": "mascot",
  //         "title": "Mascot Animations",
  //         "kind": "Animation",
  //         "when": "",
  //         "c": 2,
  //         "overview": "Animated mascot work.",
  //         "todo": "Add: the project or client, your role, the tools and a clip.",
  //         "facts": [],
  //         "skills": [
  //           "Animation",
  //           "Character"
  //         ],
  //         "media": []
  //       }
  //     ]
  //   },
  //   {
  //     "tools": [
  //       "Social media content",
  //       "Paid advertising",
  //       "Content planning",
  //       "Scriptwriting"
  //     ],
  //     "highlights": [
  //       "Founder of an online community with 270K+ members",
  //       "Pages built and managed from A to Z for doctors, real estate and food brands",
  //       "Marketing and strategic plans for clients in Libya, Saudi Arabia, the UAE, Syria and Jordan",
  //       "Consumer Behavior & Neuromarketing"
  //     ],
  //     "id": "social",
  //     "num": "03",
  //     "title": "Game Design & 2D/3D Art",
  //     "tags": "Social media · Paid ads · Community",
  //     "desc": "Strategy, content and paid campaigns that grow pages and communities.",
  //     "tone": 1,
  //     "items": [
  //       {
  //         "id": "community",
  //         "title": "UR Pets Bazaar Community",
  //         "kind": "Community building",
  //         "when": "Online business",
  //         "c": 4,
  //         "text": "270K+ members",
  //         "overview": "An online business with a community of more than 270K members. Solo founder, and first place at the Innovators Care Competition.",
  //         "facts": [
  //           [
  //             "Role",
  //             "Solo founder"
  //           ],
  //           [
  //             "Community",
  //             "270K+ members"
  //           ]
  //         ],
  //         "skills": [
  //           "Community building",
  //           "Entrepreneurship",
  //           "Content"
  //         ],
  //         "media": []
  //       },
  //       {
  //         "id": "pages",
  //         "title": "Page Management",
  //         "kind": "Social media",
  //         "when": "Freelance",
  //         "c": 0,
  //         "overview": "Pages for doctors, real estate and food brands, built and managed from A to Z: content, scriptwriting, marketing and advertising campaigns.",
  //         "facts": [
  //           [
  //             "Role",
  //             "Page and content management (freelance)"
  //           ],
  //           [
  //             "Clients",
  //             "Doctors, real estate, food brands"
  //           ]
  //         ],
  //         "skills": [
  //           "Page management",
  //           "Content planning",
  //           "Ad campaigns"
  //         ],
  //         "media": []
  //       },
  //       {
  //         "id": "paid-ads",
  //         "title": "Paid Ad Campaigns",
  //         "kind": "Digital advertising",
  //         "when": "2026 – Present",
  //         "c": 6,
  //         "overview": "Paid campaigns that promoted restaurant and café videos on social media.",
  //         "facts": [
  //           [
  //             "Role",
  //             "Content creator and campaign manager"
  //           ]
  //         ],
  //         "skills": [
  //           "Paid advertising",
  //           "Campaigns",
  //           "Short-form video"
  //         ],
  //         "media": []
  //       },
  //       {
  //         "id": "strategy",
  //         "title": "Marketing & Strategy Plans",
  //         "kind": "Strategy",
  //         "when": "Freelance",
  //         "c": 2,
  //         "text": "Five markets",
  //         "overview": "Marketing plans, pitches and strategic plans for clients and companies in Libya, Saudi Arabia, the UAE, Syria and Jordan.",
  //         "facts": [
  //           [
  //             "Markets",
  //             "Libya, Saudi Arabia, UAE, Syria, Jordan"
  //           ]
  //         ],
  //         "skills": [
  //           "Marketing plans",
  //           "Pitching",
  //           "Regional outreach"
  //         ],
  //         "media": []
  //       },
  //       {
  //         "id": "creators",
  //         "title": "Content for Teachers & Creators",
  //         "kind": "Content creation",
  //         "when": "Freelance",
  //         "c": 5,
  //         "overview": "Content ideas, advertising and marketing for teachers and other content creators.",
  //         "facts": [
  //           [
  //             "Role",
  //             "Content creator (freelance)"
  //           ]
  //         ],
  //         "skills": [
  //           "Content ideas",
  //           "Advertising",
  //           "Marketing"
  //         ],
  //         "media": []
  //       }
  //     ]
  //   },
  //   {
  //     "tools": [
  //       "Branding strategy",
  //       "Scriptwriting",
  //       "Community pages",
  //       "Content creation"
  //     ],
  //     "highlights": [
  //       "Head of Media & Marketing at AIU ICPC, August 2025 – March 2026",
  //       "Content and campaigns for IEEE AIU since December 2024",
  //       "Content creator since 2017",
  //       "Social Media Storytelling: Videos for Instagram & YouTube, Skillshare"
  //     ],
  //     "id": "pr",
  //     "num": "04",
  //     "title": "Content Strategy & Digital Marketing",
  //     "tags": "Media teams · Branding · Writing",
  //     "desc": "Leading media teams and communicating for communities, from branding to the daily content.",
  //     "tone": 3,
  //     "items": [
  //       {
  //         "id": "icpc-media",
  //         "title": "AIU ICPC Community",
  //         "kind": "Head of Media & Marketing",
  //         "when": "Aug 2025 – Mar 2026",
  //         "c": 1,
  //         "text": "Head of Media",
  //         "overview": "Led the media team and the branding strategy of the community, managed the community page and handled all of its content and publishing.",
  //         "facts": [
  //           [
  //             "Role",
  //             "Head of Media & Marketing"
  //           ],
  //           [
  //             "Where",
  //             "Alamein International University"
  //           ]
  //         ],
  //         "skills": [
  //           "Team leadership",
  //           "Branding",
  //           "Community page"
  //         ],
  //         "media": []
  //       },
  //       {
  //         "id": "ieee-content",
  //         "title": "IEEE AIU Student Branch",
  //         "kind": "Media & Marketing",
  //         "when": "Dec 2024 – Present",
  //         "c": 5,
  //         "text": "IEEE",
  //         "overview": "Contributes to content creation and campaigns for the student branch.",
  //         "facts": [
  //           [
  //             "Role",
  //             "Member, Media & Marketing"
  //           ]
  //         ],
  //         "skills": [
  //           "Content creation",
  //           "Campaigns"
  //         ],
  //         "media": []
  //       },
  //       {
  //         "id": "scripts",
  //         "title": "Scriptwriting",
  //         "kind": "Writing",
  //         "when": "Ongoing",
  //         "c": 0,
  //         "overview": "Scripts for TV commercials, restaurant videos and social media pages, written together with the content and marketing plan.",
  //         "facts": [
  //           [
  //             "Role",
  //             "Scriptwriter"
  //           ]
  //         ],
  //         "skills": [
  //           "Scriptwriting",
  //           "Storytelling"
  //         ],
  //         "media": []
  //       },
  //       {
  //         "id": "creator",
  //         "title": "Personal Content Creator",
  //         "kind": "Content creation",
  //         "when": "From 2017",
  //         "c": 3,
  //         "overview": "A personal Facebook account run as a content creator since 2017.",
  //         "facts": [
  //           [
  //             "Role",
  //             "Content creator"
  //           ],
  //           [
  //             "Platform",
  //             "Facebook"
  //           ]
  //         ],
  //         "skills": [
  //           "Content creation",
  //           "Audience building"
  //         ],
  //         "media": []
  //       }
  //     ]
  //   },
  //   {
  //     "tools": [
  //       "Photography",
  //       "Filming",
  //       "Visual direction"
  //     ],
  //     "highlights": [
  //       "Photographer for the AIU ICPC Community",
  //       "Photography and filming for restaurants and cafés"
  //     ],
  //     "id": "photo",
  //     "num": "05",
  //     "title": "Leadership, Community & CV",
  //     "tags": "Photography · Filming",
  //     "desc": "Photography and filming for communities, restaurants and brands.",
  //     "tone": 2,
  //     "items": [
  //       {
  //         "id": "icpc-photo",
  //         "title": "AIU ICPC Photography",
  //         "kind": "Community photography",
  //         "when": "Aug 2025 – Mar 2026",
  //         "c": 3,
  //         "overview": "Photographer for the AIU ICPC Community, alongside leading its media and marketing.",
  //         "facts": [
  //           [
  //             "Role",
  //             "Photographer"
  //           ],
  //           [
  //             "Where",
  //             "Alamein International University"
  //           ]
  //         ],
  //         "skills": [
  //           "Photography",
  //           "Community media"
  //         ],
  //         "media": []
  //       },
  //       {
  //         "id": "food-photo",
  //         "title": "Restaurant & Café Photography",
  //         "kind": "Food photography",
  //         "when": "2026 – Present",
  //         "c": 2,
  //         "overview": "Photography and filming for restaurants and cafés, including Momo Café.",
  //         "facts": [
  //           [
  //             "Role",
  //             "Photographer and videographer"
  //           ]
  //         ],
  //         "skills": [
  //           "Photography",
  //           "Filming"
  //         ],
  //         "media": []
  //       }
  //     ]
  //   },
    
  //   // {
  //   //   "id": "events",
  //   //   "num": "06",
  //   //   "title": "Event & Communication",
  //   //   "tags": "Forums · Hackathons · Pitching",
  //   //   "desc": "Events, forums and competitions I took part in and communicated for.",
  //   //   "tone": 5,
  //   //   "tools": [
  //   //     "Pitching",
  //   //     "Marketing plan",
  //   //     "Event communication"
  //   //   ],
  //   //   "highlights": [
  //   //     "Nominated by AIU for Egypt Forum 2026 as an outstanding student",
  //   //     "Green Loop: pitch, marketing plan, business plan and prototype",
  //   //     "Game Jam at the Grand Egyptian Museum"
  //   //   ],
  //   //   "items": [
  //   //     {
  //   //       "id": "egypt-forum",
  //   //       "title": "Egypt Forum 2026",
  //   //       "kind": "Nomination",
  //   //       "when": "5 Oct 2026",
  //   //       "c": 6,
  //   //       "text": "Egypt Forum",
  //   //       "overview": "Nominated by Alamein International University as an outstanding student. The only Faculty of Arts and Design student selected.",
  //   //       "facts": [
  //   //         [
  //   //           "Date",
  //   //           "5 Oct 2026"
  //   //         ],
  //   //         [
  //   //           "Result",
  //   //           "Nominated"
  //   //         ]
  //   //       ],
  //   //       "skills": [
  //   //         "Representation",
  //   //         "Public dialogue"
  //   //       ],
  //   //       "media": []
  //   //     },
  //   //     {
  //   //       "id": "green-loop",
  //   //       "title": "Green Loop Hackathon",
  //   //       "kind": "ESF Waste Management",
  //   //       "when": "Oct 2026",
  //   //       "c": 4,
  //   //       "text": "Finalist",
  //   //       "overview": "Idea owner of an application system for universities. Created the pitch, marketing plan, business plan and prototype. Winner at Alamein International University and finalist in the final stage. Final results on 20 October 2026.",
  //   //       "facts": [
  //   //         [
  //   //           "Role",
  //   //           "Idea owner"
  //   //         ],
  //   //         [
  //   //           "Result",
  //   //           "AIU winner, finalist"
  //   //         ]
  //   //       ],
  //   //       "skills": [
  //   //         "Pitching",
  //   //         "Marketing plan",
  //   //         "Business plan",
  //   //         "Prototype"
  //   //       ],
  //   //       "media": []
  //   //     },
  //   //     {
  //   //       "id": "game-jam",
  //   //       "title": "Game Jam, Grand Egyptian Museum",
  //   //       "kind": "Competition",
  //   //       "when": "Oct 2026",
  //   //       "c": 2,
  //   //       "text": "Game Jam",
  //   //       "overview": "Currently participating.",
  //   //       "facts": [
  //   //         [
  //   //           "Status",
  //   //           "Participating"
  //   //         ]
  //   //       ],
  //   //       "skills": [
  //   //         "Game design",
  //   //         "Teamwork"
  //   //       ],
  //   //       "media": []
  //   //     },
  //   //     {
  //   //       "id": "events",
  //   //       "title": "Event Communication",
  //   //       "kind": "Events",
  //   //       "when": "",
  //   //       "c": 1,
  //   //       "draft": true,
  //   //       "overview": "Event coverage and communication.",
  //   //       "todo": "Add the events you photographed or communicated for (name, date, your role) with photos. Remove draft:true when ready.",
  //   //       "facts": [],
  //   //       "skills": [
  //   //         "Event photography",
  //   //         "Communication"
  //   //       ],
  //   //       "media": []
  //   //     }
  //   //   ]
  //   // },
  //   // {
  //   //   "id": "games",
  //   //   "num": "07",
  //   //   "title": "Game Design",
  //   //   "tags": "Unity · GDDs · UX/UI",
  //   //   "desc": "Games designed and programmed in Unity, game design documents, and interface design.",
  //   //   "tone": 4,
  //   //   "tools": [
  //   //     "Unity (C#)",
  //   //     "Unreal Engine",
  //   //     "Game design documents",
  //   //     "Level design",
  //   //     "UX/UI"
  //   //   ],
  //   //   "highlights": [
  //   //     "Leftover: concept and game design document complete, in development in Unity and Blender",
  //   //     "Healthy Runner, an educational mobile game built at GMind, June – July 2026",
  //   //     "Epic Games: Fundamentals of Level Design with Unreal Engine, Introduction to Game Design, Unreal Engine Fundamentals",
  //   //     "Google UX Design Professional Certificate; UX/UI trainee at the Information Technology Institute"
  //   //   ],
  //   //   "items": [
  //   //     {
  //   //       "id": "leftover",
  //   //       "group": "Games",
  //   //       "title": "Leftover",
  //   //       "kind": "Game, Unity and Blender",
  //   //       "when": "In development",
  //   //       "c": 6,
  //   //       "overview": "Designed and programmed in Unity and Blender. The concept and game design document are complete, and development is in progress.",
  //   //       "facts": [
  //   //         [
  //   //           "Role",
  //   //           "Designer and programmer"
  //   //         ],
  //   //         [
  //   //           "Status",
  //   //           "In development"
  //   //         ]
  //   //       ],
  //   //       "skills": [
  //   //         "Game design document",
  //   //         "Unity",
  //   //         "Blender"
  //   //       ],
  //   //       "media": []
  //   //     },
  //   //     {
  //   //       "id": "lost-memory",
  //   //       "group": "Games",
  //   //       "title": "The Lost Memory",
  //   //       "kind": "Game",
  //   //       "when": "",
  //   //       "c": 1,
  //   //       "overview": "A game project.",
  //   //       "todo": "Add: the concept, your role, the tools, the status and screenshots.",
  //   //       "facts": [],
  //   //       "skills": [
  //   //         "Game design"
  //   //       ],
  //   //       "media": []
  //   //     },
  //   //     {
  //   //       "id": "healthy-runner",
  //   //       "group": "Games",
  //   //       "title": "Healthy Runner",
  //   //       "kind": "Educational mobile game",
  //   //       "when": "Jun – Jul 2026",
  //   //       "c": 4,
  //   //       "overview": "An educational mobile game for children, built in Unity at GMind in Alexandria. The core runner mechanics include lane switching and decision-based gates that reward healthy choices.",
  //   //       "facts": [
  //   //         [
  //   //           "Role",
  //   //           "Game designer and developer trainee"
  //   //         ],
  //   //         [
  //   //           "Studio",
  //   //           "GMind, Alexandria"
  //   //         ]
  //   //       ],
  //   //       "skills": [
  //   //         "Unity",
  //   //         "Game mechanics",
  //   //         "Educational design"
  //   //       ],
  //   //       "media": []
  //   //     },
  //   //     {
  //   //       "id": "prototypes",
  //   //       "group": "Games",
  //   //       "title": "Unity Prototypes",
  //   //       "kind": "Prototypes",
  //   //       "when": "",
  //   //       "c": 2,
  //   //       "overview": "Multiple Unity game prototypes built with object-oriented programming principles.",
  //   //       "facts": [
  //   //         [
  //   //           "Tools",
  //   //           "Unity"
  //   //         ]
  //   //       ],
  //   //       "skills": [
  //   //         "OOP",
  //   //         "Prototyping"
  //   //       ],
  //   //       "media": []
  //   //     },
  //   //     {
  //   //       "id": "zigo",
  //   //       "group": "UX/UI & Web",
  //   //       "title": "Zigo",
  //   //       "kind": "UX/UI app",
  //   //       "when": "",
  //   //       "c": 5,
  //   //       "overview": "A student behavior and performance analysis app, adopted by the university president and deans for the new university clinic.",
  //   //       "facts": [
  //   //         [
  //   //           "Role",
  //   //           "UX/UI design"
  //   //         ]
  //   //       ],
  //   //       "skills": [
  //   //         "UX/UI",
  //   //         "Wireframes",
  //   //         "Research"
  //   //       ],
  //   //       "media": []
  //   //     },
  //   //     {
  //   //       "id": "hera",
  //   //       "group": "UX/UI & Web",
  //   //       "title": "Hera",
  //   //       "kind": "UX/UI app",
  //   //       "when": "",
  //   //       "c": 0,
  //   //       "overview": "A UX/UI concept for a women's ride-hailing app.",
  //   //       "facts": [
  //   //         [
  //   //           "Role",
  //   //           "UX/UI design"
  //   //         ]
  //   //       ],
  //   //       "skills": [
  //   //         "UX/UI",
  //   //         "Wireframes",
  //   //         "Prototyping"
  //   //       ],
  //   //       "media": []
  //   //     },
  //   //     {
  //   //       "id": "ur-pets-app",
  //   //       "group": "UX/UI & Web",
  //   //       "title": "UR Pets App",
  //   //       "kind": "UX/UI app",
  //   //       "when": "University project",
  //   //       "c": 3,
  //   //       "overview": "UX/UI design for a pet marketplace and community platform.",
  //   //       "facts": [
  //   //         [
  //   //           "Role",
  //   //           "UX/UI design"
  //   //         ]
  //   //       ],
  //   //       "skills": [
  //   //         "UX/UI",
  //   //         "Wireframes"
  //   //       ],
  //   //       "media": []
  //   //     },
  //   //     {
  //   //       "id": "kids-apps",
  //   //       "group": "UX/UI & Web",
  //   //       "title": "Kids Learning Apps",
  //   //       "kind": "UX/UI apps",
  //   //       "when": "",
  //   //       "c": 4,
  //   //       "overview": "Multiple learning apps for children covering math and skills development.",
  //   //       "facts": [
  //   //         [
  //   //           "Role",
  //   //           "UX/UI design"
  //   //         ]
  //   //       ],
  //   //       "skills": [
  //   //         "UX/UI",
  //   //         "Educational design"
  //   //       ],
  //   //       "media": []
  //   //     },
  //   //     {
  //   //       "id": "dept-site",
  //   //       "group": "UX/UI & Web",
  //   //       "title": "Game Design Department Website",
  //   //       "kind": "Web UI",
  //   //       "when": "",
  //   //       "c": 1,
  //   //       "overview": "The full website UI for the Game Design department.",
  //   //       "facts": [
  //   //         [
  //   //           "Role",
  //   //           "UI design"
  //   //         ]
  //   //       ],
  //   //       "skills": [
  //   //         "Web UI",
  //   //         "HTML & CSS"
  //   //       ],
  //   //       "media": []
  //   //     }
  //   //   ]
  //   // },
  //   // {
  //   //   "id": "level",
  //   //   "num": "08",
  //   //   "title": "Level Design",
  //   //   "tags": "Unreal Engine · Unity",
  //   //   "desc": "Levels built in Unreal Engine and Unity with a focus on gameplay flow.",
  //   //   "tone": 0,
  //   //   "tools": [
  //   //     "Unreal Engine",
  //   //     "Unity",
  //   //     "Level design",
  //   //     "Gameplay flow"
  //   //   ],
  //   //   "highlights": [
  //   //     "Fundamentals of Level Design with Unreal Engine, Epic Games (Jul 2025)",
  //   //     "Rooftop: a game with four levels, designed and programmed",
  //   //     "Levels designed in Unreal Engine"
  //   //   ],
  //   //   "items": [
  //   //     {
  //   //       "id": "unreal-levels",
  //   //       "group": "Games",
  //   //       "title": "Unreal Engine Levels",
  //   //       "kind": "Level design",
  //   //       "when": "",
  //   //       "c": 5,
  //   //       "overview": "Levels designed in Unreal Engine with a focus on gameplay flow.",
  //   //       "facts": [
  //   //         [
  //   //           "Tools",
  //   //           "Unreal Engine"
  //   //         ]
  //   //       ],
  //   //       "skills": [
  //   //         "Level design",
  //   //         "Gameplay flow"
  //   //       ],
  //   //       "media": []
  //   //     },
  //   //     {
  //   //       "id": "rooftop",
  //   //       "group": "Games",
  //   //       "title": "Rooftop",
  //   //       "kind": "Game",
  //   //       "when": "",
  //   //       "c": 3,
  //   //       "overview": "A game with four levels, designed and programmed.",
  //   //       "facts": [
  //   //         [
  //   //           "Role",
  //   //           "Designer and programmer"
  //   //         ]
  //   //       ],
  //   //       "skills": [
  //   //         "Level design",
  //   //         "Programming"
  //   //       ],
  //   //       "media": []
  //   //     }
  //   //   ]
  //   // },
  //   // {
  //   //   "id": "d3",
  //   //   "num": "09",
  //   //   "title": "3D Modeling",
  //   //   "tags": "Blender · ZBrush · High-poly",
  //   //   "desc": "Blender assets and high-poly characters.",
  //   //   "tone": 1,
  //   //   "tools": [
  //   //     "Blender",
  //   //     "ZBrush"
  //   //   ],
  //   //   "highlights": [
  //   //     "High-poly character design in Blender and ZBrush",
  //   //     "3D assets created in Blender for games",
  //   //     "2D and 3D designs created for university projects"
  //   //   ],
  //   //   "items": [
  //   //     {
  //   //       "id": "blender-assets",
  //   //       "title": "Blender Game Assets",
  //   //       "kind": "3D modeling",
  //   //       "when": "",
  //   //       "c": 3,
  //   //       "overview": "3D characters, environments and game assets created in Blender.",
  //   //       "todo": "Add: which assets, renders and a turntable video.",
  //   //       "facts": [
  //   //         [
  //   //           "Tools",
  //   //           "Blender"
  //   //         ]
  //   //       ],
  //   //       "skills": [
  //   //         "3D modeling",
  //   //         "Asset creation",
  //   //         "Game-ready assets"
  //   //       ],
  //   //       "media": []
  //   //     },
  //   //     {
  //   //       "id": "high-poly",
  //   //       "title": "High-Poly Character Design",
  //   //       "kind": "3D characters",
  //   //       "when": "",
  //   //       "c": 1,
  //   //       "overview": "3D characters created in Blender and ZBrush.",
  //   //       "todo": "Add: which characters, the sculpting workflow and renders.",
  //   //       "facts": [
  //   //         [
  //   //           "Tools",
  //   //           "Blender, ZBrush"
  //   //         ]
  //   //       ],
  //   //       "skills": [
  //   //         "High-poly modeling",
  //   //         "Character design",
  //   //         "Sculpting"
  //   //       ],
  //   //       "media": []
  //   //     },
  //   //     {
  //   //       "id": "design-2d3d",
  //   //       "title": "2D & 3D Design",
  //   //       "kind": "Design",
  //   //       "when": "University projects",
  //   //       "c": 5,
  //   //       "overview": "2D and 3D designs created for university projects.",
  //   //       "facts": [
  //   //         [
  //   //           "Tools",
  //   //           "Blender"
  //   //         ]
  //   //       ],
  //   //       "skills": [
  //   //         "2D design",
  //   //         "3D design"
  //   //       ],
  //   //       "media": []
  //   //     }
  //   //   ]
  //   // },
  //   // {
  //   //   "id": "env",
  //   //   "num": "10",
  //   //   "title": "Environment Art",
  //   //   "tags": "Blender · Unity · Sketches",
  //   //   "desc": "Environments for game worlds, from sketches to 3D.",
  //   //   "tone": 3,
  //   //   "tools": [
  //   //     "Blender",
  //   //     "Unity",
  //   //     "Unreal Engine",
  //   //     "Sketching"
  //   //   ],
  //   //   "highlights": [
  //   //     "3D environments for Leftover, built in Blender for Unity",
  //   //     "Environment sketches for game worlds",
  //   //     "A Blender mini world with a planet, a vehicle and a desert environment"
  //   //   ],
  //   //   "items": [
  //   //     {
  //   //       "id": "env-sketches",
  //   //       "title": "Environment Sketches",
  //   //       "kind": "Concept work",
  //   //       "when": "",
  //   //       "c": 4,
  //   //       "overview": "Environment sketches for game worlds.",
  //   //       "todo": "Add: which worlds, the sketches and how they became 3D.",
  //   //       "facts": [],
  //   //       "skills": [
  //   //         "Environment design",
  //   //         "Sketching"
  //   //       ],
  //   //       "media": []
  //   //     },
  //   //     {
  //   //       "id": "leftover-env",
  //   //       "title": "Leftover Environments",
  //   //       "kind": "3D environments",
  //   //       "when": "In development",
  //   //       "c": 6,
  //   //       "overview": "3D environments for the game Leftover, built in Blender for Unity.",
  //   //       "facts": [
  //   //         [
  //   //           "Game",
  //   //           "Leftover"
  //   //         ],
  //   //         [
  //   //           "Tools",
  //   //           "Blender, Unity"
  //   //         ]
  //   //       ],
  //   //       "skills": [
  //   //         "Environment art",
  //   //         "Blender",
  //   //         "Unity"
  //   //       ],
  //   //       "media": []
  //   //     },
  //   //     {
  //   //       "id": "camel-world",
  //   //       "title": "Camel Robot Mini World",
  //   //       "kind": "3D scene",
  //   //       "when": "Personal project",
  //   //       "c": 2,
  //   //       "overview": "A Blender mini world: a planet with a camel-inspired robot, a vehicle and a desert environment.",
  //   //       "todo": "Confirm the status and add renders.",
  //   //       "facts": [
  //   //         [
  //   //           "Tools",
  //   //           "Blender"
  //   //         ]
  //   //       ],
  //   //       "skills": [
  //   //         "Modeling",
  //   //         "Environment",
  //   //         "Props"
  //   //       ],
  //   //       "media": []
  //   //     }
  //   //   ]
  //   // }
  // ],
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
    "portrait": "assets/img/IMG_20261014_112631_375.jpg",
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
