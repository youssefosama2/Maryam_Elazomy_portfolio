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
          "title": "Restaurant & Café Videos",
          "kind": "Commercial Video",
          "when": "2026 – Present",
          "c": 1,
          "overview": "Short-form promotional videos for restaurants and cafés, from filming and directing to editing and voiceover.",
          "facts": [
            ["Role", "Content Creator, Director & Editor"],
            ["Client", "Restaurants and Cafés"]
          ],
          "skills": [
            "Filming",
            "Directing",
            "Editing",
            "Voiceover"
          ],
          "media": [
            {
              "src": "assets/video/4_5942565747732521436.mp4",
              "caption": "Restaurant & Café Promotional Video"
            }
          ]
        },
        {
          "id": "ugc",
          "title": "UGC Videos",
          "kind": "User-Generated Content",
          "when": "2026 – Present",
          "c": 3,
          "overview": "UGC-style videos for restaurants and products, featuring original filming, direction and self-recorded voiceovers.",
          "facts": [
            ["Role", "UGC Creator & Director"]
          ],
          "skills": [
            "UGC",
            "Voiceover",
            "Directing",
            "Storytelling"
          ],
          "media": [
            {
              "src": "assets/video/4_5942565747732521431.MOV",
              "caption": "UGC Video"
            }
          ]
        },
        {
          "id": "saudi-ads",
          "title": "Promo Ads & Animated Logos",
          "kind": "Promotional Video",
          "when": "2026",
          "c": 5,
          "overview": "Promotional video ads and motion graphics created for commercial clients, including animated company logos.",
          "facts": [
            ["Role", "Video Editor & Videographer"],
            ["Client", "Photography Company, Saudi Arabia"]
          ],
          "skills": [
            "Video Editing",
            "Motion Graphics",
            "After Effects"
          ],
          "media": [
            {
              "src": "assets/video/IMG_7840.MOV",
              "caption": "Promotional Ads & Motion Graphics"
            }
          ]
        },
        {
          "id": "mascot",
          "title": "Mascot Animations",
          "kind": "Character Animation",
          "when": "",
          "c": 2,
          "overview": "Animated mascot concepts and character-focused video content.",
          "todo": "Replace this sample description with the actual project details.",
          "facts": [],
          "skills": [
            "Animation",
            "Character Design",
            "Motion Graphics"
          ],
          "media": [
            {
              "src": "assets/video/4_5890821832881217117.MOV",
              "caption": "Mascot Animation"
            }
          ]
        },
        {
          "id": "brand-commercials",
          "title": "Brand Commercials",
          "kind": "Commercial Production",
          "when": "",
          "c": 4,
          "overview": "Sample project for brand-focused commercial videos, showcasing product presentation, visual storytelling and editing.",
          "todo": "Temporary project name and description — replace with the actual project details.",
          "facts": [
            ["Role", "Video Director & Editor"]
          ],
          "skills": [
            "Commercial Production",
            "Visual Storytelling",
            "Editing"
          ],
          "media": [
            {
              "src": "assets/video/4_5942565747732521452.MOV",
              "caption": "Brand Commercial"
            }
          ]
        },
        {
          "id": "product-videos",
          "title": "Product Promotional Videos",
          "kind": "Product Video",
          "when": "",
          "c": 0,
          "overview": "Sample project featuring promotional product videos designed to highlight product features through engaging visuals.",
          "todo": "Temporary project name and description — replace with the actual project details.",
          "facts": [
            ["Role", "Videographer & Editor"]
          ],
          "skills": [
            "Product Videography",
            "Editing",
            "Creative Direction"
          ],
          "media": [
            {
              "src": "assets/video/VID_20261014_023031_408.mp4.mov",
              "caption": "Product Promotional Video"
            }
          ]
        },
        {
          "id": "social-campaigns",
          "title": "Social Media Video Campaigns",
          "kind": "Social Media Campaign",
          "when": "",
          "c": 1,
          "overview": "Sample project for short-form video campaigns created to support social media marketing and brand awareness.",
          "todo": "Temporary project name and description — replace with the actual project details.",
          "facts": [
            ["Role", "Video Creator & Editor"]
          ],
          "skills": [
            "Social Media Content",
            "Short-Form Video",
            "Editing"
          ],
          "media": [
            {
              "src": "assets/video/4_5942565747732521445.MOV",
              "caption": "Social Media Video Campaign"
            }
          ]
        },
        {
          "id": "social-campaigns",
          "title": "Social Media Video Campaigns",
          "kind": "Social Media Campaign",
          "when": "",
          "c": 1,
          "overview": "Sample project for short-form video campaigns created to support social media marketing and brand awareness.",
          "todo": "Temporary project name and description — replace with the actual project details.",
          "facts": [
            ["Role", "Video Creator & Editor"]
          ],
          "skills": [
            "Social Media Content",
            "Short-Form Video",
            "Editing"
          ],
          "media": [
            {
              "src": "assets/video/4_5942757277504119672.MOV",
              "caption": "Social Media Video Campaign"
            }
          ]
        },
        {
          "id": "social-campaigns",
          "title": "Social Media Video Campaigns",
          "kind": "Social Media Campaign",
          "when": "",
          "c": 1,
          "overview": "Sample project for short-form video campaigns created to support social media marketing and brand awareness.",
          "todo": "Temporary project name and description — replace with the actual project details.",
          "facts": [
            ["Role", "Video Creator & Editor"]
          ],
          "skills": [
            "Social Media Content",
            "Short-Form Video",
            "Editing"
          ],
          "media": [
            {
              "src": "assets/img/IMG_20261014_112553_016.jpg",
              "caption": "Image 1"
            },
            {
              "src": "assets/img/IMG_20261014_112553_044.jpg",
              "caption": "Image 2"
            },
            {
              "src": "assets/img/IMG_20261014_112553_389.jpg",
              "caption": "Image 3"
            },
            {
              "src": "assets/img/IMG_20261014_112553_553.jpg",
              "caption": "Image 4"
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
          "title": "Brand & Graphic Design",
          "kind": "Graphic design",
          "when": "From 2018",
          "c": 5,
          "overview": "Graphic design for many brands and clients, created at a graphic design company for doctors and as a freelancer.",
          "facts": [
            ["Role", "Graphic designer"],
            ["Setting", "Design company and freelance"]
          ],
          "skills": ["Visual branding", "Illustrator", "Photoshop"],
          "media": [
            {
              "src": "assets/video/4_5942757277504119516.MP4",
              "caption": "Brand & Graphic Design"
            }
          ]
        },
        {
          "id": "posters",
          "title": "Posters & Social Visuals",
          "kind": "Visual content",
          "when": "From 2018",
          "c": 3,
          "overview": "Posters and visual content for social media, designed with Canva and Adobe Illustrator.",
          "facts": [["Tools", "Canva, Illustrator, Photoshop"]],
          "skills": ["Canva", "Poster design", "Social visuals"],
          "media": [
            {
              "src": "assets/img/IMG_20261014_112627_266.jpg",
              "caption": "Posters & Social Visuals"
            }
          ]
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
          "skills": ["Visual branding", "Illustrator", "Photoshop"],
          "media": [
            {
              "src": "assets/video/4_5942565747732521425.MP4",
              "caption": "Brand & Graphic Design"
            }
          ]
        },
        {
          "id": "packaging",
          "title": "Packaging Design",
          "kind": "Packaging",
          "when": "From 2018",
          "c": 0,
          "overview": "Product packaging designed for a well-known potato company.",
          "facts": [["Role", "Packaging designer"]],
          "skills": ["Packaging", "Illustrator"],
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
          "title": "Zigo",
          "kind": "UX/UI app",
          "when": "",
          "c": 5,
          "overview": "A student behavior and performance analysis app, adopted by the university president and deans for the new university clinic.",
          "facts": [["Role", "UX/UI design"]],
          "skills": ["UX/UI", "Wireframes", "Research"],
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
          "title": "Hera",
          "kind": "UX/UI app",
          "when": "",
          "c": 0,
          "overview": "A UX/UI concept for a women's ride-hailing app.",
          "facts": [["Role", "UX/UI design"]],
          "skills": ["UX/UI", "Wireframes", "Prototyping"],
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
          "title": "UR Pets App",
          "kind": "UX/UI app",
          "when": "University project",
          "c": 3,
          "overview": "UX/UI design for a pet marketplace and community platform.",
          "facts": [["Role", "UX/UI design"]],
          "skills": ["UX/UI", "Wireframes"],
          "media": [
            {
              "src": "assets/img/IMG_20261014_112515_520.jpg",
              "caption": "UR Pets App Design"
            }
          ]
        },
        {
          "id": "kids-apps",
          "group": "UX/UI & Web",
          "title": "Kids Learning Apps",
          "kind": "UX/UI apps",
          "when": "",
          "c": 4,
          "overview": "Multiple learning apps for children covering math and skills development.",
          "facts": [["Role", "UX/UI design"]],
          "skills": ["UX/UI", "Educational design"],
          "media": [
            {
              "src": "assets/img/IMG_20261014_112557_775.jpg",
              "caption": "Kids Learning Apps"
            }
          ]
        },
        {
          "id": "dept-site",
          "group": "UX/UI & Web",
          "title": "Game Design Department Website",
          "kind": "Web UI",
          "when": "",
          "c": 1,
          "overview": "The full website UI for the Game Design department.",
          "facts": [["Role", "UI design"]],
          "skills": ["Web UI", "HTML & CSS"],
          "media": [
            {
              "src": "assets/img/IMG_20261014_112619_726.jpg",
              "caption": "Game Design Department Website"
            }
          ]
        },
        {
          "id": "dept-site",
          "group": "UX/UI & Web",
          "title": "Game Design Department Website",
          "kind": "Web UI",
          "when": "",
          "c": 1,
          "overview": "The full website UI for the Game Design department.",
          "facts": [["Role", "UI design"]],
          "skills": ["Web UI", "HTML & CSS"],
          "media": [
            {
              "src": "assets/img/IMG_20261014_112604_166.jpg",
              "caption": "Game Design Department Website"
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
          "media": [
            {
              "src": "assets/video/4_5942565747732521447.MOV",
              "caption": "Leftover Gameplay"
            }
          ]
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
          "media": [
            {
              "src": "assets/video/VID_20261014_023119_853.mp4",
              "caption": "The Lost Memory — Video 1"
            },
            {
              "src": "assets/img/Image 2026-10-14 at 8.27.51 PM (1).jpeg",
              "caption": "The Lost Memory — Video 2"
            },
            {
              "src": "assets/img/Image 2026-10-14 at 8.27.51 PM.jpeg",
              "caption": "The Lost Memory — Video 3"
            },
            {
              "src": "assets/img/Image 2026-10-14 at 8.27.53 PM.jpeg",
              "caption": "The Lost Memory — Video 4"
            }
          ]
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
          "media": [
            {
              "src": "assets/img/IMG_20261014_112543_149.jpg",
              "caption": "Unity Prototypes"
            }
          ]
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
          "media": [
            {
              "src": "assets/video/4_5942565747732521437.MP4",
              "caption": "Unreal Engine Level Showcase"
            }
          ]
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
          "media": [
            {
              "src": "assets/img/IMG_20261014_112548_531.jpg",
              "caption": "Rooftop — Screenshot 1"
            },
            {
              "src": "assets/img/IMG_20261014_112548_864.jpg",
              "caption": "Rooftop — Screenshot 2"
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
          "id": "social-campaigns",
          "title": "Social Media Video Campaigns",
          "kind": "Social Media Campaign",
          "when": "",
          "c": 1,
          "overview": "Sample project for short-form video campaigns created to support social media marketing and brand awareness.",
          "todo": "Temporary project name and description — replace with the actual project details.",
          "facts": [
            ["Role", "Video Creator & Editor"]
          ],
          "skills": [
            "Social Media Content",
            "Short-Form Video",
            "Editing"
          ],
          "media": [
            {
              "src": "assets/video/1791938877063.mp4",
              "caption": "Social Media Video Campaign"
            }
          ]
        },
        {
          "id": "social-campaigns",
          "title": "Social Media Video Campaigns",
          "kind": "Social Media Campaign",
          "when": "",
          "c": 1,
          "overview": "Sample project for short-form video campaigns created to support social media marketing and brand awareness.",
          "todo": "Temporary project name and description — replace with the actual project details.",
          "facts": [
            ["Role", "Video Creator & Editor"]
          ],
          "skills": [
            "Social Media Content",
            "Short-Form Video",
            "Editing"
          ],
          "media": [
            {
              "src": "assets/video/4_5890821832881217114.MOV",
              "caption": "Social Media Video Campaign"
            }
          ]
        },
        {
          "id": "social-campaigns",
          "title": "Social Media Video Campaigns",
          "kind": "Social Media Campaign",
          "when": "",
          "c": 1,
          "overview": "Sample project for short-form video campaigns created to support social media marketing and brand awareness.",
          "todo": "Temporary project name and description — replace with the actual project details.",
          "facts": [
            ["Role", "Video Creator & Editor"]
          ],
          "skills": [
            "Social Media Content",
            "Short-Form Video",
            "Editing"
          ],
          "media": [
            {
              "src": "assets/video/IMG_4940.MP4",
              "caption": "Social Media Video Campaign"
            }
          ]
        },
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
          "media": [
            {
              "src": "assets/img/Game Design/1.png",
              "caption": "Game Design — Image 1"
            },
            {
              "src": "assets/img/Game Design/2.png",
              "caption": "Game Design — Image 2"
            },
            {
              "src": "assets/img/Game Design/3.png",
              "caption": "Game Design — Image 3"
            },
            {
              "src": "assets/img/Game Design/4.png",
              "caption": "Game Design — Image 4"
            }
          ]
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
        "media": [
          {
            "src": "assets/img/Marketing Plan UR ANIMALS/1.png",
            "caption": "Marketing Plan UR ANIMALS — Image 1"
          },
          {
            "src": "assets/img/Marketing Plan UR ANIMALS/2.png",
            "caption": "Marketing Plan UR ANIMALS — Image 2"
          },
          {
            "src": "assets/img/Marketing Plan UR ANIMALS/3.png",
            "caption": "Marketing Plan UR ANIMALS — Image 3"
          },
          {
            "src": "assets/img/Marketing Plan UR ANIMALS/4.png",
            "caption": "Marketing Plan UR ANIMALS — Image 4"
          },
          {
            "src": "assets/img/Marketing Plan UR ANIMALS/5.png",
            "caption": "Marketing Plan UR ANIMALS — Image 5"
          },
          {
            "src": "assets/img/Marketing Plan UR ANIMALS/6.png",
            "caption": "Marketing Plan UR ANIMALS — Image 6"
          },
          {
            "src": "assets/img/Marketing Plan UR ANIMALS/7.png",
            "caption": "Marketing Plan UR ANIMALS — Image 7"
          },
          {
            "src": "assets/img/Marketing Plan UR ANIMALS/8.png",
            "caption": "Marketing Plan UR ANIMALS — Image 8"
          },
          {
            "src": "assets/img/Marketing Plan UR ANIMALS/9.png",
            "caption": "Marketing Plan UR ANIMALS — Image 9"
          },
          {
            "src": "assets/img/Marketing Plan UR ANIMALS/10.png",
            "caption": "Marketing Plan UR ANIMALS — Image 10"
          }
        ]
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
          "skills": ["Visual branding", "Illustrator", "Photoshop"],
          "media": [
            {
              "src": "assets/video/IMG_1147.MP4",
              "caption": "Brand & Graphic Design"
            }
          ]
        },
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
          "media": [
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
