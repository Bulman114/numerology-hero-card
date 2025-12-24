/**
 * Comprehensive Life Path Profiles
 * Parsed from the exhaustive life-path-nmbrs-guide.md
 * 
 * Each profile contains rich content across 15+ categories
 * for display throughout the application.
 */

export const LIFE_PATH_PROFILES = {
    1: {
        archetype: "The Independent Pioneer",
        coreEssence: "Life Path 1 represents the archetype of the Leader and Innovator. Ones are the first number, symbolizing new beginnings, originality, and the courage to forge ahead alone. They embody raw creative force, independence, and the drive to manifest ideas into reality through sheer willpower.",

        personality: {
            fundamental: [
                "Born leaders who naturally take charge without being asked",
                "Fierce independence—uncomfortable with anyone else controlling their destiny",
                "Original thinkers who resist conformity and groupthink",
                "Action-oriented rather than contemplative; doers not dreamers",
                "Strong sense of self that borders on self-absorption",
                "Natural confidence that can appear as arrogance to others",
                "Pioneering spirit that thrives on being first, best, or unique"
            ],
            cognitive: [
                "Linear, goal-directed thinking",
                "Quick decision-makers who trust their instincts",
                "Impatient with excessive analysis or committee thinking",
                "Focus on outcomes rather than process",
                "Strategic minds that see the big picture",
                "Innovative problem-solvers who create novel solutions",
                "Mental independence—form their own opinions regardless of others"
            ],
            emotional: [
                "Pride is their emotional Achilles heel",
                "Difficulty admitting mistakes or showing vulnerability",
                "Can be emotionally self-sufficient to a fault",
                "Frustration with anything that slows their momentum",
                "Passion and enthusiasm for projects they initiate",
                "Competitive nature that extends to all areas of life",
                "Need for recognition and respect from peers"
            ],
            shadow: [
                "Egotism and self-centeredness",
                "Domineering behavior that steamrolls others",
                "Impatience leading to rash decisions",
                "Inability to collaborate or share credit",
                "Stubbornness—'my way or the highway' mentality",
                "Isolation from refusing to ask for or accept help",
                "Aggression when challenged or thwarted"
            ]
        },

        relationships: {
            romantic: {
                traits: [
                    "Need a partner who respects their independence",
                    "Can be passionate but struggle with emotional intimacy",
                    "Often choose partners who admire their strength",
                    "Loyalty once committed, but on their own terms",
                    "Difficulty compromising or adapting to partner's needs"
                ],
                bestWith: [3, 5, 9],
                warning: "May unconsciously seek subordinates rather than equals"
            },
            asFriend: [
                "Loyal but not particularly nurturing",
                "More comfortable leading group activities than providing emotional support",
                "Generous with advice (whether asked for or not)",
                "Can be inspiring and motivating",
                "Prefer smaller circles where they're respected"
            ],
            asParent: [
                "Encourage independence and self-reliance in children",
                "High expectations that can feel like pressure",
                "Teach by example rather than nurturing guidance",
                "Pride in children's accomplishments",
                "Need to learn patience and emotional availability"
            ],
            asChild: [
                "Natural leaders among peers from early age",
                "May clash with authority figures",
                "Require autonomy and respect from parents",
                "Excel when given responsibility and trust",
                "Need outlets for their drive and ambition"
            ]
        },

        career: {
            environments: [
                "Entrepreneurship (their ultimate calling)",
                "Executive leadership positions",
                "Innovative startups and pioneering ventures",
                "Any field where they can be first or best",
                "Autonomous roles with minimal supervision",
                "Competitive industries",
                "Positions with clear metrics for success"
            ],
            paths: [
                { title: "Entrepreneur", desc: "Starting and scaling businesses" },
                { title: "Executive", desc: "CEO, President, Managing Director" },
                { title: "Sales Leader", desc: "High-stakes, competitive sales" },
                { title: "Innovator", desc: "Product development, R&D leadership" },
                { title: "Politician", desc: "Campaign leadership, elected office" },
                { title: "Athlete", desc: "Individual sports where they can be #1" },
                { title: "Military Officer", desc: "Command authority roles" },
                { title: "Architect", desc: "Designing landmark structures" },
                { title: "Inventor", desc: "Creating new technologies or products" },
                { title: "Consultant", desc: "Strategy, management, leadership development" },
                { title: "Surgeon", desc: "Precision, authority, life-saving decisions" },
                { title: "Trial Attorney", desc: "Partner in firm, litigation" },
                { title: "Media Host", desc: "News anchor, influencer with personal brand" },
                { title: "Real Estate Developer", desc: "Visionary projects" },
                { title: "Tech Founder", desc: "CTO, product visionary" }
            ],
            workStyle: [
                "Prefers autonomy over collaboration",
                "Thrives under pressure and tight deadlines",
                "Impatient with bureaucracy and red tape",
                "Quick to pivot when something isn't working",
                "Motivated by achievement and recognition"
            ],
            money: [
                "Natural wealth-building instincts",
                "Willing to take calculated risks",
                "Prefers full control over investments and assets",
                "Success often comes through entrepreneurial ventures"
            ]
        },

        challenges: {
            primary: [
                "Ego Management: Learning that being right isn't worth being alone",
                "Collaboration: Discovering the power of 'we' instead of just 'I'",
                "Vulnerability: Opening up emotionally and asking for help",
                "Patience: Allowing others to move at their own pace",
                "Empathy: Considering others' feelings and perspectives",
                "Balance: Avoiding workaholism and burnout",
                "Humility: Accepting criticism and learning from failures"
            ],
            growthPath: [
                "Learning to channel drive through collaboration rather than domination",
                "Developing emotional intelligence to complement natural confidence",
                "Recognizing when to lead and when to follow",
                "Balancing ambition with compassion",
                "Finding purpose beyond personal achievement",
                "Mentoring others instead of just outpacing them",
                "Accepting vulnerability as strength, not weakness"
            ],
            spiritualLessons: [
                "True leadership serves rather than dominates",
                "Independence doesn't mean isolation",
                "Strength includes admitting weakness",
                "Success is hollow without connection",
                "The journey matters as much as the destination",
                "Everyone has unique gifts—not just you",
                "Collaboration multiplies rather than divides power"
            ]
        },

        health: {
            physical: [
                "High stress levels from constant drive",
                "Prone to headaches, hypertension",
                "Risk of cardiovascular issues from Type A behavior",
                "May neglect health until crisis forces attention",
                "Strong constitution but vulnerable to burnout"
            ],
            mentalEmotional: [
                "Anxiety from need for control",
                "Depression if goals feel unattainable",
                "Difficulty processing failure or setbacks",
                "May mask emotional pain with more achievement"
            ],
            recommendations: [
                "High-intensity interval training, martial arts, competitive sports",
                "Leadership roles in fitness (leading group runs, coaching)",
                "Mindfulness practices to calm the 'always on' mentality",
                "Creative outlets that allow solo expression",
                "Regular solo time to recharge independence needs",
                "Bodywork that forces surrender (massage, acupuncture)",
                "Nature activities that humble the ego (mountaineering, ocean swimming)"
            ]
        },

        compatibility: {
            mostCompatible: [
                { number: 3, reason: "3's optimism and creativity complement 1's drive; both appreciate freedom" },
                { number: 5, reason: "Mutual love of independence; exciting dynamic but needs grounding" },
                { number: 9, reason: "9's wisdom tempers 1's ambition; complementary leadership styles" }
            ],
            challenging: [
                { number: 2, reason: "2's need for partnership clashes with 1's independence" },
                { number: 4, reason: "Both strong-willed; 4's caution frustrates 1's impulsiveness" },
                { number: 8, reason: "Power struggles inevitable; both want control" }
            ],
            complex: [
                { number: 1, reason: "Exciting but combustible; need separate domains to thrive" },
                { number: 6, reason: "6 can feel controlling; 1 can seem selfish" },
                { number: 7, reason: "7's introspection mystifies 1's action focus" }
            ]
        },

        famousExamples: [
            { name: "Tom Cruise", context: "Drive, independence, pioneering spirit in career" },
            { name: "Martin Luther King Jr.", context: "Leadership, courage to stand alone for beliefs" },
            { name: "Lady Gaga", context: "Original, innovative, self-created brand" },
            { name: "Tiger Woods", context: "Competitive excellence, pioneering achievements" },
            { name: "George Washington", context: "First president, military leadership, independence" }
        ],

        keynote: {
            giftToWorld: "You show others that one person with courage, vision, and determination can change everything. Your willingness to stand alone, to be first, to risk failure for greatness—this inspires others to believe in themselves.",
            lifeLesson: "True power comes not from standing alone but from lifting others up. The greatest leaders serve. Your independence is a gift when it inspires others' independence, not when it isolates you in a kingdom of one.",
            affirmation: "I am a powerful leader who uplifts others. My independence inspires, my confidence empowers, my vision creates new possibilities. I lead with courage and humility."
        }
    },

    2: {
        archetype: "The Diplomatic Peacemaker",
        coreEssence: "Life Path 2 represents the archetype of the Mediator and Partner. Twos embody the principle of duality, balance, and cooperation. Where 1 divides and conquers, 2 unites and harmonizes. They are the bridge-builders, the diplomats, the ones who see all sides and seek win-win solutions.",

        personality: {
            fundamental: [
                "Natural peacemakers who feel physical discomfort in conflict",
                "Deeply empathetic—absorb others' emotions like sponges",
                "Collaborative spirit—genuinely believe 'we're better together'",
                "Intuitive understanding of group dynamics and relationships",
                "Gentle approach that masks surprising inner strength",
                "Detail-oriented perfectionists in their domain",
                "Need for partnership—feel incomplete when alone"
            ],
            cognitive: [
                "Non-linear, relational thinking",
                "Excellent at seeing multiple perspectives simultaneously",
                "Process-oriented—how things are done matters as much as outcomes",
                "Analyze through emotional and relational lenses",
                "Pattern recognition in human behavior",
                "Strategic about harmony—know when to speak and when to stay silent"
            ],
            emotional: [
                "Extraordinarily sensitive to others' emotional states",
                "Hurt easily but hide pain to avoid confrontation",
                "Anxiety from uncertainty or disharmony",
                "Deep capacity for love and devotion",
                "Fear of abandonment or rejection",
                "Emotional wisdom beyond their years",
                "Can lose themselves in others' needs"
            ],
            shadow: [
                "Passive-aggression when needs aren't met",
                "Codependency and loss of self in relationships",
                "Manipulation through guilt or emotional blackmail",
                "Chronic indecision and inability to commit",
                "Oversensitivity leading to victimhood",
                "Enabling others' bad behavior to keep peace",
                "Self-abandonment in service of others"
            ]
        },

        relationships: {
            romantic: {
                traits: [
                    "Partnership is their natural state—thrive when coupled",
                    "Devoted, loyal, attentive partners",
                    "Anticipate partner's needs before they're voiced",
                    "Need reassurance and emotional security",
                    "Avoid conflict at all costs, leading to festering resentment"
                ],
                bestWith: [4, 6, 8],
                warning: "Can lose personal boundaries in merging with partner"
            },
            asFriend: [
                "The friend everyone calls in crisis",
                "Exceptional listeners who remember everything",
                "Natural counselors and emotional support",
                "Prefer one-on-one deep conversations to large groups",
                "Loyal to a fault, even when friendship is one-sided"
            ],
            asParent: [
                "Nurturing, patient, emotionally available",
                "Create peaceful, harmonious home environments",
                "Children feel deeply seen and understood",
                "Teach empathy, cooperation, and emotional intelligence",
                "May struggle with discipline and setting boundaries"
            ],
            asChild: [
                "Sensitive souls who feel everything deeply",
                "Peacemakers in family conflicts",
                "May become caretakers of parents' emotions",
                "Excel in structured, peaceful environments",
                "Need validation and gentle guidance"
            ]
        },

        career: {
            environments: [
                "Collaborative team settings",
                "Roles requiring diplomacy and tact",
                "Environments valuing emotional intelligence",
                "Support positions where they enable others' success",
                "Harmonious workplace cultures",
                "Structured roles with clear expectations",
                "Fields involving caregiving or mediation"
            ],
            paths: [
                { title: "Counselor", desc: "Marriage counseling, family therapy, social work" },
                { title: "Mediator", desc: "Conflict resolution, labor negotiation, divorce mediation" },
                { title: "HR Professional", desc: "Employee relations, talent development, culture building" },
                { title: "Nurse", desc: "Nursing, occupational therapy, patient advocacy" },
                { title: "Teacher", desc: "Elementary education, special education, tutoring" },
                { title: "Diplomat", desc: "International relations, embassy work, peace corps" },
                { title: "Customer Relations", desc: "Client relations, hospitality management" },
                { title: "Executive Assistant", desc: "Office management, coordination" },
                { title: "Art Therapist", desc: "Music therapy, collaborative creative projects" },
                { title: "Librarian", desc: "Research assistance, archives, curation" },
                { title: "Event Planner", desc: "Coordinating details, managing stakeholders" },
                { title: "Nutritionist", desc: "Dietitian, wellness coach, holistic health" },
                { title: "Nonprofit Worker", desc: "Community organizing, volunteer coordination" },
                { title: "Paralegal", desc: "Legal support, court liaison, victim advocacy" }
            ],
            workStyle: [
                "Excel as the 'power behind the throne'",
                "Attention to detail others miss",
                "Build consensus and facilitate group decisions",
                "Loyal employees who stay long-term",
                "Avoid leadership roles but often the glue holding teams together"
            ],
            money: [
                "Conservative, risk-averse financial approach",
                "Save for security and stability",
                "Uncomfortable negotiating for higher pay",
                "Prefer financial partnerships and shared assets"
            ]
        },

        challenges: {
            primary: [
                "Assertiveness: Learning to advocate for own needs and desires",
                "Boundaries: Knowing where they end and others begin",
                "Decision-Making: Trusting themselves to choose without external validation",
                "Conflict Navigation: Seeing conflict as growth opportunity, not threat",
                "Self-Worth: Valuing themselves independent of others' approval",
                "Independence: Developing comfort being alone",
                "Direct Communication: Speaking truth even when uncomfortable"
            ],
            growthPath: [
                "Learning that peace at any cost isn't peace—it's suppression",
                "Discovering their own needs are as valid as others'",
                "Developing healthy assertiveness without aggression",
                "Understanding that 'no' is a complete sentence",
                "Recognizing manipulation (their own and others')",
                "Finding their voice and using it",
                "Balancing service with self-care"
            ],
            spiritualLessons: [
                "You can't pour from an empty cup",
                "True partnership requires two whole people, not two halves",
                "Sensitivity is a superpower when paired with boundaries",
                "Harmony isn't the absence of conflict—it's skillful resolution",
                "Your needs matter as much as anyone else's",
                "Being nice isn't the same as being good",
                "You teach people how to treat you"
            ]
        },

        health: {
            physical: [
                "Stress manifests physically: digestive issues, tension headaches",
                "Prone to autoimmune conditions from suppressed emotions",
                "Sensitive to environments (noise, light, crowds)",
                "Benefits from gentle, restorative practices",
                "Prone to adrenal fatigue from over-giving"
            ],
            mentalEmotional: [
                "Anxiety and depression from unmet needs",
                "Codependency patterns in relationships",
                "Chronic worry and rumination",
                "Difficulty with emotional regulation"
            ],
            recommendations: [
                "Gentle yoga, tai chi, qigong",
                "Restorative practices like yin yoga, meditation",
                "Creative expression (music, art, writing)",
                "Nature therapy, gardening, animal interaction",
                "Energy work: reiki, acupuncture, healing touch",
                "Journaling to process emotions",
                "Boundary work and assertiveness training"
            ]
        },

        compatibility: {
            mostCompatible: [
                { number: 4, reason: "4's stability grounds 2's sensitivity; mutual loyalty" },
                { number: 6, reason: "Both value harmony; deep emotional connection" },
                { number: 8, reason: "8's strength complements 2's support; powerful partnership" }
            ],
            challenging: [
                { number: 1, reason: "1's dominance can overwhelm; 2 must maintain identity" },
                { number: 5, reason: "5's independence triggers 2's abandonment fears" },
                { number: 7, reason: "7's solitude confuses 2's need for togetherness" }
            ],
            complex: [
                { number: 2, reason: "Deep understanding but may enable each other's avoidance" },
                { number: 3, reason: "3's scattered energy can stress detail-oriented 2" },
                { number: 9, reason: "Both sensitive; 9's idealism may frustrate 2's pragmatism" }
            ]
        },

        famousExamples: [
            { name: "Jennifer Aniston", context: "Relationship-focused, peacemaker, sensitive to public opinion" },
            { name: "Mark Zuckerberg", context: "Built platform around connection; detail-oriented" },
            { name: "Bill Clinton", context: "Natural diplomat, consensus-builder, people-pleaser" },
            { name: "Princess Diana", context: "Empathetic, service-oriented, struggled with boundaries" }
        ],

        keynote: {
            giftToWorld: "You remind us that we're all connected, that no one succeeds alone, that harmony is possible. Your ability to see all sides, to bridge divides, to create peace where there was conflict—this heals the world.",
            lifeLesson: "You can't create true harmony by silencing your own voice. The world needs your sensitivity paired with your strength, your empathy balanced with your boundaries. You matter. Your needs matter. Your voice matters.",
            affirmation: "I am a powerful peacemaker with strong boundaries. My sensitivity is my strength. I honor my needs while supporting others. I speak my truth with love and courage."
        }
    },

    3: {
        archetype: "The Creative Communicator",
        coreEssence: "Life Path 3 represents the archetype of the Artist and Entertainer. Threes embody self-expression, creativity, joy, and communication. They are the light of any room, the ones who remind us that life is meant to be enjoyed, not just endured.",
        personality: {
            fundamental: ["Natural performers who light up when witnessed", "Creative energy that must find outlet or implodes", "Infectious optimism and joie de vivre", "Communication is breathing—they think out loud", "Scattered brilliance across multiple domains", "Emotionally expressive and transparent", "Live in the moment rather than plan ahead"],
            cognitive: ["Divergent, creative thinking", "Make connections others miss", "Think in images, metaphors, stories", "Quick wit and verbal intelligence", "Learn through doing and experimenting"],
            emotional: ["Emotional range from ecstatic highs to crushing lows", "Express feelings immediately and intensely", "Optimistic default setting", "Hurt by criticism or rejection", "Joy is their natural state"],
            shadow: ["Scattered energy—start many things, finish few", "Superficiality and avoidance of depth", "Attention-seeking and drama creation", "Self-indulgence and hedonism", "Using humor to deflect real intimacy"]
        },
        relationships: {
            romantic: { traits: ["Romantic, expressive, generous with affection", "Keep relationships fun and exciting", "May struggle with emotional depth", "Charm their way out of accountability"], bestWith: [1, 5, 9], warning: "Flirtatious nature can trigger jealousy" },
            asFriend: ["Life of the party, socially magnetic", "Generous, fun, always up for adventure", "Wonderful storytellers and entertainers", "Can be flaky with commitments"],
            asParent: ["Fun, playful, creative with children", "Encourage artistic expression and joy", "May struggle with discipline and structure", "Wonderful at imaginative play"],
            asChild: ["Bright, charming, entertaining", "Need creative outlets and expression", "Sensitive to criticism", "Excel in arts, drama, music, writing"]
        },
        career: {
            environments: ["Creative freedom and self-expression", "Variety and stimulation", "Social interaction and collaboration", "Flexible schedules and autonomy", "Performance or public-facing roles"],
            paths: [
                { title: "Performer", desc: "Actor, comedian, musician, dancer" },
                { title: "Visual Artist", desc: "Painter, sculptor, photographer, designer" },
                { title: "Writer", desc: "Novelist, poet, copywriter, content creator" },
                { title: "Media Personality", desc: "TV host, podcaster, YouTuber, influencer" },
                { title: "Marketing Creative", desc: "Creative director, brand strategist, social media" },
                { title: "Event Planner", desc: "Party planner, wedding coordinator" },
                { title: "Speaker", desc: "Motivational speaker, trainer, facilitator" },
                { title: "Fashion Professional", desc: "Designer, stylist, model" },
                { title: "Chef", desc: "Restaurant owner, culinary artist" },
                { title: "Art Educator", desc: "Art teacher, drama teacher, creative writing instructor" }
            ],
            workStyle: ["Thrive in brainstorming and ideation", "Struggle with implementation and follow-through", "Work in bursts of inspiration", "Networking comes naturally"],
            money: ["Impulsive spending on experiences and beauty", "'Easy come, easy go' attitude", "Feast or famine income patterns"]
        },
        challenges: {
            primary: ["Focus: Completing projects instead of starting dozens", "Depth: Going beyond surface charm to real substance", "Discipline: Creating structure for their creativity", "Responsibility: Following through on commitments", "Authenticity: Being real instead of performing"],
            growthPath: ["Learning that discipline doesn't kill creativity—it channels it", "Discovering that depth and joy aren't mutually exclusive", "Finding substance beneath the sparkle"],
            spiritualLessons: ["True joy comes from depth, not just brightness", "Being authentic is more powerful than being charming", "Finishing matters as much as starting"]
        },
        health: {
            physical: ["High energy when inspired, crashed when not", "Prone to burnout from scattered energy", "Prone to thyroid issues (communication center)"],
            mentalEmotional: ["Depression when creative expression is blocked", "Anxiety from over-committing", "Mood swings from emotional expressiveness"],
            recommendations: ["Dance, theater sports, expressive movement", "Creative hobbies as therapy", "Vocal work (singing, toning, breathwork)", "Play and humor as medicine"]
        },
        compatibility: {
            mostCompatible: [{ number: 1, reason: "1's drive + 3's creativity = dynamic partnership" }, { number: 5, reason: "Mutual love of adventure and variety" }, { number: 9, reason: "9's depth balances 3's lightness" }],
            challenging: [{ number: 4, reason: "4's structure frustrates 3's spontaneity" }, { number: 7, reason: "7's seriousness dampens 3's playfulness" }],
            complex: [{ number: 3, reason: "Double creativity but double scattered-ness" }, { number: 6, reason: "6's responsibility balances 3's playfulness" }]
        },
        famousExamples: [{ name: "Jamie Foxx", context: "Multi-talented entertainer, creative range" }, { name: "Jodie Foster", context: "Articulate, expressive, creative depth" }, { name: "Snoop Dogg", context: "Creative communicator, playful persona" }],
        keynote: {
            giftToWorld: "You remind us that life is meant to be enjoyed, that beauty and joy matter, that expression heals. Your creativity, optimism, and light help others remember their own magic.",
            lifeLesson: "Your gift isn't just to entertain—it's to express what others can't. True artistry requires discipline. Real joy includes sadness. Depth doesn't diminish your light—it makes it more brilliant.",
            affirmation: "I am a creative force grounded in discipline. My joy is deep, my expression authentic. I complete what I begin and share my gifts fully with the world."
        }
    },

    4: {
        archetype: "The Practical Builder",
        coreEssence: "Life Path 4 represents the archetype of the Foundation Builder and Organizer. Fours embody stability, structure, hard work, and practical wisdom. They are the bedrock upon which everything else is built—the ones who turn dreams into tangible reality through methodical effort.",
        personality: {
            fundamental: ["Builders who think in systems and structures", "Value stability and predictability above all", "Hard workers who believe in earning, not luck", "Conservative approach—'measure twice, cut once'", "Loyal to people, places, and principles", "Strong moral code and sense of right/wrong"],
            cognitive: ["Linear, logical, sequential thinking", "Excellent at planning and organization", "Detail-oriented to the point of perfectionism", "Practical intelligence over abstract theory", "Natural systems thinkers"],
            emotional: ["Stable, even temperament", "Emotions expressed through actions not words", "Anxiety about instability or chaos", "Slow to anger but formidable when pushed"],
            shadow: ["Rigidity and resistance to change", "Workaholism and neglect of relationships", "Controlling behavior masking fear", "Narrow-mindedness and judgmental attitudes", "Harsh self-criticism"]
        },
        relationships: {
            romantic: { traits: ["Loyal, devoted, steadfast partners", "Express love through acts of service", "Need stability and clear expectations", "Dependable but may lack excitement"], bestWith: [2, 6, 8], warning: "Can be emotionally reserved or unavailable" },
            asFriend: ["The friend you call to help you move", "Reliable, practical, always there", "Long-term friendships—slow to trust, slower to leave", "Practical support over emotional validation"],
            asParent: ["Provide structure, stability, security", "High expectations for behavior and achievement", "Consistent with rules and consequences", "Show love through providing and protecting"],
            asChild: ["Responsible, rule-following, organized", "May seem more mature than peers", "Excel in structured environments", "Need clear expectations and routines"]
        },
        career: {
            environments: ["Structured organizations with clear hierarchies", "Roles requiring organization and systems", "Stable industries with predictable growth", "Traditional corporate environments", "Long-term career paths"],
            paths: [
                { title: "Engineer", desc: "Civil, mechanical, structural, electrical" },
                { title: "Architect", desc: "Design, planning, project management" },
                { title: "Construction Manager", desc: "Contractor, site supervision" },
                { title: "Accountant", desc: "CPA, controller, financial analysis" },
                { title: "Project Manager", desc: "Any industry—natural organizers" },
                { title: "Operations Executive", desc: "COO, process improvement" },
                { title: "Real Estate Professional", desc: "Property management, appraisal" },
                { title: "IT Systems Admin", desc: "Database management, network engineering" },
                { title: "Quality Control", desc: "Manufacturing, production management" },
                { title: "Government Worker", desc: "Civil service, regulatory compliance" }
            ],
            workStyle: ["Methodical and thorough", "Create and follow systems and processes", "Work steadily rather than in bursts", "Loyal employees who stay long-term"],
            money: ["Conservative, risk-averse investors", "Savers who plan for long-term security", "Build wealth slowly and steadily", "Financially independent and stable"]
        },
        challenges: {
            primary: ["Flexibility: Learning to adapt when plans change", "Work-Life Balance: Valuing relationships as much as work", "Emotional Expression: Opening up and showing vulnerability", "Spontaneity: Embracing the unplanned", "Self-Compassion: Easing perfectionism"],
            growthPath: ["Learning that not everything can be controlled", "Discovering that emotions are data, not distractions", "Finding the courage to take calculated risks"],
            spiritualLessons: ["The universe doesn't always follow your plan", "Perfection is the enemy of completion", "You are worthy beyond your productivity", "Rest is productive"]
        },
        health: {
            physical: ["Strong constitution but prone to overwork", "Stress manifests physically: back pain, joint issues", "Prone to tension and rigidity in body"],
            mentalEmotional: ["Anxiety from need for control", "Depression when feeling stuck or purposeless", "Difficulty relaxing or 'turning off'"],
            recommendations: ["Structured fitness: weight training, running programs", "Yoga for flexibility (literal and metaphorical)", "Nature activities: hiking, gardening", "Scheduled rest and recovery"]
        },
        compatibility: {
            mostCompatible: [{ number: 2, reason: "2's support + 4's stability = secure foundation" }, { number: 6, reason: "Shared values of responsibility and tradition" }, { number: 8, reason: "Both practical and ambitious; powerful team" }],
            challenging: [{ number: 3, reason: "3's spontaneity frustrates 4's need for structure" }, { number: 5, reason: "5's changeability threatens 4's stability" }],
            complex: [{ number: 4, reason: "Stable but may become too rigid" }, { number: 22, reason: "22's intensity aligns with 4's work ethic" }]
        },
        famousExamples: [{ name: "Oprah Winfrey", context: "Built media empire through systematic effort" }, { name: "Bill Gates", context: "Methodical, systems thinker, builder of foundations" }, { name: "Clint Eastwood", context: "Disciplined artist, traditional values, hard worker" }],
        keynote: {
            giftToWorld: "You build the foundations that allow everyone else to soar. Your discipline, dedication, and reliability create the stability society needs.",
            lifeLesson: "Not everything worth building can be measured or seen. Your relationships need the same attention as your projects. Rest isn't laziness—it's essential.",
            affirmation: "I am a powerful builder with room for flexibility. My work matters and so do I. I balance discipline with joy, structure with spontaneity."
        }
    },

    5: {
        archetype: "The Freedom-Seeking Adventurer",
        coreEssence: "Life Path 5 represents the archetype of the Explorer and Change Agent. Fives embody freedom, adventure, versatility, and progress. They remind us that life is meant to be experienced fully, that stagnation is death, and that change is the only constant.",
        personality: {
            fundamental: ["Restless spirits who need constant stimulation", "Freedom is oxygen—restriction is suffocation", "Curious about everything, expert at nothing (by choice)", "Natural risk-takers who trust themselves to land safely", "Charismatic and adaptable to any situation", "Live fully in the present moment"],
            cognitive: ["Rapid, multi-directional thinking", "Quick learners who grasp concepts fast", "Think in possibilities rather than plans", "Pattern recognition across diverse fields", "Learn by doing and experiencing"],
            emotional: ["Experience emotions intensely then move on quickly", "Crave excitement and novelty", "Freedom feels like love; restriction feels like death", "Optimistic about possibilities"],
            shadow: ["Addiction to stimulation", "Irresponsibility and inability to commit", "Recklessness and poor judgment", "Shallow engagement with people", "Using others for experiences then moving on"]
        },
        relationships: {
            romantic: { traits: ["Exciting, passionate, adventurous partners", "Need space and freedom within relationship", "Keep relationships fresh and stimulating", "May leave when things get too routine"], bestWith: [1, 3, 7], warning: "Can be non-monogamous or struggle with exclusivity" },
            asFriend: ["Fun, spontaneous, always down for adventure", "Wide social network across many contexts", "Introduce friends to new experiences", "Can disappear for periods then resurface"],
            asParent: ["Fun, adventurous, expose children to world", "Teach children to be adaptable and brave", "May struggle with routine child-rearing", "Excel with older children who can join adventures"],
            asChild: ["Curious, energetic, into everything", "May struggle in traditional school settings", "Can be labeled as ADHD or difficult", "Rebellious against restriction"]
        },
        career: {
            environments: ["Variety and change built into role", "Freedom and autonomy in schedule", "Opportunities for travel", "Minimal routine or repetition", "Dynamic, fast-paced industries"],
            paths: [
                { title: "Travel Professional", desc: "Travel writer, tour guide, pilot" },
                { title: "Sales Rep", desc: "Territory sales, field rep, high-variety clients" },
                { title: "Journalist", desc: "Reporter, foreign correspondent" },
                { title: "Entrepreneur", desc: "Serial entrepreneur, startup founder" },
                { title: "Emergency Responder", desc: "Paramedic, firefighter, ER doctor" },
                { title: "Adventure Guide", desc: "Extreme sports professional, coach" },
                { title: "Photographer", desc: "Travel, wildlife, photojournalism" },
                { title: "International Trader", desc: "Import/export, sourcing, negotiations" },
                { title: "Tech Startup", desc: "Product management, UX research" },
                { title: "PR Specialist", desc: "Crisis management, publicity" }
            ],
            workStyle: ["Thrive in dynamic, changing environments", "Excel in crisis or high-pressure situations", "May jump between jobs frequently", "Work in bursts of intense energy"],
            money: ["Impulsive spending on experiences and travel", "'You can't take it with you' mentality", "May live paycheck to paycheck by choice"]
        },
        challenges: {
            primary: ["Commitment: Learning to stay when things get difficult", "Depth: Going beyond surface experiences", "Responsibility: Following through on obligations", "Addiction: Managing tendency toward excess", "Focus: Completing what you start"],
            growthPath: ["Learning that commitment to right things increases freedom", "Understanding that discipline creates space for real freedom", "Finding adventure in ordinary moments"],
            spiritualLessons: ["True freedom is internal, not external", "You can't experience everything—choose wisely", "Commitment is freedom when it's to the right things", "The grass isn't greener—it's greener where you water it"]
        },
        health: {
            physical: ["High energy when stimulated, crashed when not", "Prone to accidents from risk-taking", "May experiment with substances", "Irregular eating and sleeping patterns"],
            mentalEmotional: ["ADHD-like symptoms from need for stimulation", "Anxiety when feeling restricted", "Depression when bored or stuck"],
            recommendations: ["Extreme sports: rock climbing, surfing, martial arts", "Varied fitness routines", "Travel as therapy", "Meditation in motion (running, flow states)"]
        },
        compatibility: {
            mostCompatible: [{ number: 1, reason: "Mutual independence; exciting partnership" }, { number: 3, reason: "Both love variety and adventure" }, { number: 7, reason: "7's depth balances 5's breadth" }],
            challenging: [{ number: 2, reason: "2's need for security clashes with 5's freedom" }, { number: 4, reason: "4's structure feels suffocating to 5" }],
            complex: [{ number: 5, reason: "Exciting but may lack grounding" }, { number: 9, reason: "9's depth can ground 5's restlessness" }]
        },
        famousExamples: [{ name: "Beyoncé", context: "Versatile performer, constantly evolving" }, { name: "Angelina Jolie", context: "Adventurous life, humanitarian travel" }, { name: "Steven Spielberg", context: "Diverse filmography, genre-crossing" }],
        keynote: {
            giftToWorld: "You show us that life is meant to be lived fully, that stagnation is death, that change is necessary for growth. Your adaptability, courage, and zest for life inspire others to step outside their comfort zones.",
            lifeLesson: "True freedom comes from commitment to what matters, not avoidance of everything. The deepest adventures are internal. You don't need to keep running—you're already enough.",
            affirmation: "I am a free spirit with roots. I embrace change and create stability. I experience life fully while honoring my commitments."
        }
    },

    6: {
        archetype: "The Responsible Nurturer",
        coreEssence: "Life Path 6 represents the archetype of the Caretaker and Healer. Sixes embody responsibility, nurturing, service, and domestic harmony. They are the heart of family and community—the ones who create beauty, stability, and love for others.",
        personality: {
            fundamental: ["Natural caregivers who prioritize others' wellbeing", "Responsible and reliable—always follow through", "Strong sense of duty to family and community", "Beauty-lovers who create harmonious environments", "Idealistic about love, relationships, and justice", "Need to be needed—find identity in service"],
            cognitive: ["Think in terms of relationship and responsibility", "Process through emotional and aesthetic lenses", "See how everything connects to family/community", "Natural interior decorators—spatial intelligence"],
            emotional: ["Deep capacity for love and compassion", "Sensitive to criticism, especially about nurturing", "Worry as primary emotional experience", "Guilt from inability to please everyone"],
            shadow: ["Martyrdom and self-sacrifice to point of resentment", "Controlling under guise of caring", "Meddling in others' affairs", "Self-righteousness about 'right' way to live", "Enabling dysfunction to stay needed"]
        },
        relationships: {
            romantic: { traits: ["Devoted, nurturing, attentive partners", "Create beautiful, harmonious homes", "May parent their partners", "Loyal through thick and thin"], bestWith: [2, 3, 9], warning: "Can smother partners or become controlling" },
            asFriend: ["The friend who brings soup when you're sick", "Reliable and always there", "May become 'mother' of friend group", "Remember birthdays and milestones"],
            asParent: ["Natural parents—nurturing, devoted, present", "Create beautiful, structured homes", "May be over-involved or helicopter", "High standards for children's behavior"],
            asChild: ["Responsible, helpful, mature", "May become parentified early", "Need appreciation for their help", "Excel in nurturing environments"]
        },
        career: {
            environments: ["Service and caregiving roles", "Positions involving beauty and harmony", "Family-friendly workplaces", "Roles helping others heal or grow", "Structured environments with clear purpose"],
            paths: [
                { title: "Healthcare Provider", desc: "Nurse, doctor, caregiver, therapist" },
                { title: "Teacher", desc: "Elementary, special education, tutoring" },
                { title: "Counselor", desc: "Marriage counseling, family therapy" },
                { title: "Social Worker", desc: "Child welfare, family services" },
                { title: "Interior Designer", desc: "Creating beautiful living spaces" },
                { title: "Chef", desc: "Restaurant owner, caterer, nutrition" },
                { title: "Hospitality", desc: "Hotel management, event planning" },
                { title: "Nonprofit Leader", desc: "Community organizing, charitable work" },
                { title: "HR Manager", desc: "Employee relations, wellness programs" },
                { title: "Real Estate", desc: "Helping families find homes" }
            ],
            workStyle: ["Team players who support everyone", "Create harmonious work environments", "Take on work others avoid", "Reliable and consistently present"],
            money: ["Spend on home, family, and making others comfortable", "May undervalue professional services", "Generous to a fault"]
        },
        challenges: {
            primary: ["Self-Care: Learning they matter too", "Boundaries: Knowing when to help and when to step back", "Control: Allowing others to make their own choices", "Perfectionism: Accepting good enough", "Identity: Finding self beyond service to others"],
            growthPath: ["Learning that healthy selfishness enables better service", "Discovering they can love without controlling", "Finding identity beyond being needed"],
            spiritualLessons: ["You can't rescue anyone—they must rescue themselves", "Martyrdom isn't love—it's manipulation", "Beautiful homes mean nothing without inner peace", "Your worth isn't measured by others' happiness"]
        },
        health: {
            physical: ["Prone to weight gain from stress and nurturing through food", "Heart and circulatory issues (heart center)", "Prone to thyroid issues"],
            mentalEmotional: ["Anxiety from over-responsibility", "Depression when feeling unappreciated", "Codependency patterns"],
            recommendations: ["Nurturing self-care routines", "Creative expression (decorating, art, music)", "Activities that prioritize personal joy", "Therapy focusing on boundaries"]
        },
        compatibility: {
            mostCompatible: [{ number: 2, reason: "Both value harmony and relationships" }, { number: 3, reason: "3's joy balances 6's responsibility" }, { number: 9, reason: "Shared service orientation" }],
            challenging: [{ number: 1, reason: "1's independence frustrates 6's nurturing" }, { number: 5, reason: "5's freedom threatens 6's need for stability" }],
            complex: [{ number: 6, reason: "Double nurturing can become competitive" }, { number: 8, reason: "8's ambition vs 6's family focus" }]
        },
        famousExamples: [{ name: "John Lennon", context: "Advocacy for love and peace, domestic focus" }, { name: "Eleanor Roosevelt", context: "Service, humanitarian, family-oriented" }, { name: "Michael Jackson", context: "Perfectionism in art, children's causes" }],
        keynote: {
            giftToWorld: "You remind us that love is the most important thing, that home is where healing happens, that beauty and care make life worth living. Your nurturing creates the foundation where others can flourish.",
            lifeLesson: "You can't pour from an empty cup. Your care for others requires care for yourself first. Loving boundaries are more powerful than boundaryless giving. You matter beyond what you do for others.",
            affirmation: "I nurture myself as generously as I nurture others. My boundaries are loving. My worth exists beyond service. I create beauty in my life and others'."
        }
    },

    7: {
        archetype: "The Analytical Seeker",
        coreEssence: "Life Path 7 represents the archetype of the Philosopher and Mystic. Sevens embody the quest for truth, wisdom, analysis, and spiritual understanding. They are the thinkers, the questioners, the ones who seek meaning beneath surface appearances.",
        personality: {
            fundamental: ["Born questioners who need to understand 'why'", "Prefer solitude—recharge in alone time", "Intellectual depth and analytical brilliance", "Skeptical until personally convinced", "Spiritually oriented even if not religious", "Perfectionists about ideas and knowledge"],
            cognitive: ["Analytical, investigative thinking", "Need to understand before accepting", "Pattern recognition across domains", "Deep rather than broad learning", "Intuitive alongside analytical"],
            emotional: ["Emotions experienced privately", "Fear of emotional vulnerability", "Melancholy and existential questioning", "Need for authenticity in all interactions"],
            shadow: ["Isolation and social withdrawal", "Intellectual arrogance", "Cynicism and distrust", "Analysis paralysis—too much thinking, not enough living", "Using intellect to avoid feeling"]
        },
        relationships: {
            romantic: { traits: ["Need deep, meaningful connections", "Take long time to open up", "Value quality over quantity", "Loyal once trust is established"], bestWith: [3, 5, 9], warning: "Can feel emotionally remote or unavailable" },
            asFriend: ["Small circle of trusted friends", "Prefer one-on-one conversations", "Sharing ideas more than activities", "Loyal but may disappear for long periods"],
            asParent: ["Encourage intellectual curiosity", "May struggle with emotional attunement", "Value education and learning", "Need to develop warmth alongside wisdom"],
            asChild: ["Thoughtful, questioning, mature", "May struggle socially", "Need space for reflection", "Benefit from intellectual stimulation"]
        },
        career: {
            environments: ["Autonomous, research-focused roles", "Positions requiring deep expertise", "Quiet environments for concentration", "Roles valuing accuracy and depth", "Minimal office politics"],
            paths: [
                { title: "Researcher", desc: "Academic, scientific, investigative" },
                { title: "Scientist", desc: "Any discipline—physics, biology, chemistry" },
                { title: "Psychologist", desc: "Clinical, research, analytical" },
                { title: "Writer", desc: "Non-fiction, philosophy, spiritual topics" },
                { title: "Professor", desc: "University teaching and research" },
                { title: "Analyst", desc: "Data analyst, business intelligence, forensics" },
                { title: "Philosopher", desc: "Ethics, theology, consciousness studies" },
                { title: "IT Specialist", desc: "Programming, systems architecture" },
                { title: "Investigator", desc: "Detective, forensics, journalism" },
                { title: "Spiritual Teacher", desc: "Meditation guide, contemplative leader" }
            ],
            workStyle: ["Work best alone or in small groups", "Perfectionist about quality", "Need time to think before speaking", "Deep focus capabilities"],
            money: ["Practical but not primary focus", "May live simply by choice", "Value quality over quantity"]
        },
        challenges: {
            primary: ["Connection: Learning to share inner world with others", "Trust: Opening up despite risk of being hurt", "Action: Translating understanding into practice", "Vulnerability: Showing emotions, not just ideas", "Balance: Integrating mind, heart, and body"],
            growthPath: ["Learning that connection enhances rather than diminishes wisdom", "Discovering that emotions are data too", "Finding that vulnerability creates deeper understanding"],
            spiritualLessons: ["The greatest wisdom includes the heart", "You don't have to figure everything out alone", "Mystery is sacred—embrace it", "Connection is as important as understanding"]
        },
        health: {
            physical: ["Neglect of body for mind", "Nervous system sensitivity", "Need for rest and mental breaks"],
            mentalEmotional: ["Depression from isolation", "Anxiety about uncertainty", "Prone to overthinking"],
            recommendations: ["Meditation and contemplative practices", "Swimming and water activities", "Solo travel to sacred places", "Therapy integrating spiritual with psychological"]
        },
        compatibility: {
            mostCompatible: [{ number: 3, reason: "3's lightness balances 7's depth" }, { number: 5, reason: "Mutual need for independence" }, { number: 9, reason: "Both deep thinkers; spiritual connection" }],
            challenging: [{ number: 2, reason: "2's need for togetherness vs 7's need for space" }, { number: 6, reason: "6's emotional warmth can feel smothering" }],
            complex: [{ number: 7, reason: "Deep understanding but risk of isolation together" }, { number: 8, reason: "8's materialism conflicts with 7's spirituality" }]
        },
        famousExamples: [{ name: "Leonardo DiCaprio", context: "Introspective, philosophical, selective" }, { name: "Stephen Hawking", context: "Scientific seeker, profound intelligence" }, { name: "Nikola Tesla", context: "Visionary thinker, solitary, spiritual-scientific" }],
        keynote: {
            giftToWorld: "You help us understand the deeper meaning of existence. Your quest for truth, your analytical brilliance, your spiritual wisdom—these illuminate the mysteries and help us see beneath the surface.",
            lifeLesson: "The greatest wisdom includes the heart, not just the head. Connection is as important as understanding. You don't have to figure everything out alone. Mystery is sacred—embrace it.",
            affirmation: "I trust both my mind and my heart. I balance solitude with connection. I share my wisdom with the world. I embrace mystery alongside understanding."
        }
    },

    8: {
        archetype: "The Material Master",
        coreEssence: "Life Path 8 represents the archetype of the Executive and Manifestor. Eights embody power, achievement, material mastery, and abundance. They are the builders of empires, the ones who understand how to create tangible results in the material world.",
        personality: {
            fundamental: ["Natural authority and executive presence", "Driven by achievement and material success", "Understand power dynamics instinctively", "Ambitious with eyes on top positions", "Confident and commanding", "Efficient and results-oriented"],
            cognitive: ["Strategic, big-picture thinking", "Excel at understanding systems and leverage", "Practical intelligence focused on what works", "Quick assessment of people and situations", "Natural at delegation and organization"],
            emotional: ["Controlled emotions—vulnerability seen as weakness", "Pride in accomplishments and power", "Deep need for respect and recognition", "Fear of powerlessness or failure"],
            shadow: ["Workaholism and neglect of relationships", "Ruthlessness in pursuit of goals", "Materialism and defining worth by possessions", "Controlling and domineering behavior", "Greed and never feeling 'enough'"]
        },
        relationships: {
            romantic: { traits: ["Provider and protector role", "Express love through gifts and providing", "Need respect more than emotional intimacy", "Loyal and committed once trust is earned"], bestWith: [2, 4, 6], warning: "May struggle with emotional availability" },
            asFriend: ["Generous with resources and connections", "Valuable network and problem-solving", "Respect-based friendships", "Small circle of powerful connections"],
            asParent: ["Provide material security and opportunity", "High expectations for achievement", "Teach work ethic and ambition", "Show love through providing and protecting"],
            asChild: ["Ambitious and achievement-oriented early", "Competitive and driven", "Need respect from parents", "Excel when given leadership opportunities"]
        },
        career: {
            environments: ["Leadership and executive positions", "High-stakes, high-reward industries", "Positions with autonomy and authority", "Competitive, meritocratic cultures", "Roles with tangible impact"],
            paths: [
                { title: "CEO/Executive", desc: "President, Managing Director, COO" },
                { title: "Entrepreneur", desc: "Business owner, serial entrepreneur" },
                { title: "Finance Executive", desc: "Investment banking, private equity" },
                { title: "Real Estate Developer", desc: "Commercial real estate, development" },
                { title: "Attorney", desc: "Corporate law, litigation, managing partner" },
                { title: "Sales Director", desc: "Enterprise sales, business development" },
                { title: "Politician", desc: "Elected office, political strategy" },
                { title: "Consultant", desc: "Management consulting, strategy" },
                { title: "Media Executive", desc: "Producer, studio executive" },
                { title: "Healthcare Executive", desc: "Hospital CEO, practice owner" }
            ],
            workStyle: ["Decisive and action-oriented", "Excellent delegator when they trust", "Strategic about time and resources", "Comfortable with high pressure"],
            money: ["Natural wealth-builders", "Understand leverage and investment", "Think long-term with finances", "Multiple income streams"]
        },
        challenges: {
            primary: ["Balance: Learning life isn't just work and achievement", "Vulnerability: Opening emotionally and asking for help", "Relationships: Valuing people beyond their utility", "Enough: Knowing when to stop accumulating", "Integrity: Ensuring means are as ethical as ends"],
            growthPath: ["Learning that true power includes vulnerability", "Discovering that success without connection is empty", "Finding peace with 'enough'"],
            spiritualLessons: ["You can't take it with you", "Power is responsibility, not privilege", "Your worth isn't your net worth", "True abundance includes relationships and meaning"]
        },
        health: {
            physical: ["Stress from constant drive and pressure", "Cardiovascular issues from Type A behavior", "May ignore health until crisis"],
            mentalEmotional: ["Anxiety about control and success", "Depression if experiencing failure", "Difficulty processing vulnerability"],
            recommendations: ["Competitive sports and fitness", "Martial arts for discipline", "Executive wellness programs", "Philanthropy as healing practice"]
        },
        compatibility: {
            mostCompatible: [{ number: 2, reason: "2 supports 8's ambition; powerful team" }, { number: 4, reason: "Shared work ethic and practical focus" }, { number: 6, reason: "6 creates home while 8 provides" }],
            challenging: [{ number: 5, reason: "5's irresponsibility frustrates 8's drive" }, { number: 7, reason: "7's spirituality vs 8's materialism" }],
            complex: [{ number: 1, reason: "Power struggles inevitable; both want control" }, { number: 8, reason: "Powerful but may compete rather than collaborate" }]
        },
        famousExamples: [{ name: "Nelson Mandela", context: "Power used for justice, leadership, legacy" }, { name: "Pablo Picasso", context: "Material success, ambitious, built art empire" }, { name: "Sandra Bullock", context: "Successful career, business acumen" }],
        keynote: {
            giftToWorld: "You show us that vision can become reality, that material success is achievable, that power can be used for good. Your ability to manifest, build, and create abundance inspires others to believe in possibility.",
            lifeLesson: "True power is spiritual as well as material. Success without meaning is empty. Your greatest legacy isn't what you build—it's who you become and how you impact others. You are enough beyond your achievements.",
            affirmation: "I wield power with wisdom and compassion. I balance ambition with presence. I am successful and connected. My worth exists beyond my achievements."
        }
    },

    9: {
        archetype: "The Humanitarian Visionary",
        coreEssence: "Life Path 9 represents the archetype of the Humanitarian and Old Soul. Nines embody compassion, completion, universal love, and service to humanity. They are the most evolved single-digit number, containing all that came before.",
        personality: {
            fundamental: ["Old souls with universal perspective", "Natural humanitarians concerned with collective good", "Compassionate to the point of self-sacrifice", "Idealistic about humanity's potential", "Emotionally and spiritually mature", "Feel called to make the world better"],
            cognitive: ["Global, universal thinking", "See patterns and connections across systems", "Think in terms of collective good", "Abstract and philosophical intelligence", "Synthesize diverse ideas into wisdom"],
            emotional: ["Feel deeply for humanity's suffering", "Compassion that extends to all beings", "Emotional complexity and depth", "Struggle with anger at injustice"],
            shadow: ["Martyrdom and self-neglect for causes", "Emotional volatility and mood swings", "Escapism through substances, fantasy, or causes", "Depression from world's problems", "Inability to let go of past hurts"]
        },
        relationships: {
            romantic: { traits: ["Deeply romantic and idealistic about love", "Need spiritual and emotional connection", "May sacrifice self for partner's growth", "Loyal but can be dramatic"], bestWith: [3, 6, 7], warning: "Attracted to damaged souls they can 'save'" },
            asFriend: ["Compassionate listeners and advisors", "Friends with people from all walks of life", "Give generously of time and resources", "Offer wisdom and perspective"],
            asParent: ["Teach compassion, justice, and universal values", "Create globally-aware, compassionate children", "May be emotionally intense", "Show children the beauty in diversity"],
            asChild: ["Sensitive to injustice and suffering", "May be activists from young age", "Feel different from peers—'old soul'", "Excel in creative and humanitarian pursuits"]
        },
        career: {
            environments: ["Meaningful work serving greater good", "Fields addressing humanitarian causes", "Creative and expressive roles", "International or multicultural settings", "Mission-driven organizations"],
            paths: [
                { title: "Nonprofit Leader", desc: "Program director, founder, development" },
                { title: "Teacher", desc: "Especially disadvantaged communities" },
                { title: "Artist", desc: "Musician, actor, dancer with message" },
                { title: "Healer", desc: "Holistic health, energy healing, counseling" },
                { title: "Social Justice Advocate", desc: "Activist, community organizer" },
                { title: "International Aid", desc: "UN, NGO, Peace Corps" },
                { title: "Environmentalist", desc: "Conservation, sustainability" },
                { title: "Writer", desc: "Poet, journalist covering humanitarian issues" },
                { title: "Therapist", desc: "Social worker, counselor" },
                { title: "Minister", desc: "Spiritual teacher, chaplain" }
            ],
            workStyle: ["Motivated by mission over money", "Work passionately on meaningful projects", "Can burn out from over-giving", "May change careers to follow calling"],
            money: ["Not motivated primarily by money", "Give generously to causes", "May struggle with practical finances", "Live simply by choice"]
        },
        challenges: {
            primary: ["Boundaries: Learning to help without self-destruction", "Practicality: Balancing idealism with real-world needs", "Completion: Finishing what they start", "Letting Go: Releasing past hurts", "Self-Care: Remembering they matter too"],
            growthPath: ["Learning they can't save everyone", "Discovering that self-care enables better service", "Finding peace with human imperfection"],
            spiritualLessons: ["You can't love others if you don't love yourself", "The world's problems aren't yours alone to solve", "Forgiveness frees you, not just others", "Your imperfections make you human"]
        },
        health: {
            physical: ["May neglect physical body", "Prone to autoimmune issues from compassion fatigue", "Benefits from grounding practices"],
            mentalEmotional: ["Depression from world's suffering", "Emotional overwhelm and sensitivity", "May have addictive tendencies"],
            recommendations: ["Creative expression as therapy", "Service activities that include self-care", "Grounding practices (gardening, pottery)", "Limit exposure to traumatic news"]
        },
        compatibility: {
            mostCompatible: [{ number: 3, reason: "Mutual creativity and idealism" }, { number: 6, reason: "Both service-oriented; deep compassion" }, { number: 7, reason: "Both deep; spiritual-philosophical alignment" }],
            challenging: [{ number: 4, reason: "4's pragmatism grounds 9's idealism (growth-inducing)" }, { number: 8, reason: "8's materialism conflicts with 9's spirituality" }],
            complex: [{ number: 1, reason: "1's self-focus vs 9's universal focus" }, { number: 9, reason: "Deep understanding but may enable martyrdom" }]
        },
        famousExamples: [{ name: "Morgan Freeman", context: "Humanitarian, wisdom, universal appeal" }, { name: "Mother Teresa", context: "Ultimate humanitarian, service to suffering" }, { name: "Gandhi", context: "Humanitarian vision, service to collective good" }],
        keynote: {
            giftToWorld: "You remind us of our shared humanity, our interconnectedness, our capacity for compassion. Your vision of what humanity can become inspires us to be better, to care more, to serve the greater good.",
            lifeLesson: "You can't save everyone, and that's not failure—it's wisdom. Your compassion must include yourself. The world needs you whole, not depleted. Personal relationships matter as much as universal causes.",
            affirmation: "I serve the world from wholeness. My compassion includes myself. I balance idealism with practicality. I complete what I begin and release what's done."
        }
    },

    11: {
        archetype: "The Inspirational Illuminator",
        coreEssence: "Life Path 11 is the first Master Number, representing the archetype of the Intuitive and Spiritual Messenger. Elevens are highly sensitive spiritual antennas who channel higher wisdom and inspire others to reach their potential. They operate on a higher frequency, experiencing both the challenges of 2 and the elevated mission of illuminating humanity.",
        isMaster: true,
        reducesTo: 2,
        personality: {
            fundamental: ["Extraordinarily intuitive and psychic", "Natural channels for inspiration and wisdom", "Charismatic presence that draws others", "Feel called to inspire and uplift humanity", "Nervous system wired differently—highly sensitive", "Visionary capacity to see what could be"],
            cognitive: ["Intuitive downloads and sudden knowing", "Receive information through non-linear means", "Visionary thinking—see future possibilities", "Think in symbols, archetypes, metaphors", "Access collective unconscious"],
            emotional: ["Feel everything at amplified intensity", "Absorb others' emotions like psychic sponge", "Emotional highs and lows more extreme", "Deep empathy and profound capacity for spiritual love", "Anxiety from sensitivity and mission pressure"],
            shadow: ["Nervous breakdowns from overwhelm", "Escapism into substances or spiritual bypassing", "Superiority about spiritual development", "Manipulation through charisma and intuition", "Instability and inability to ground"]
        },
        relationships: {
            romantic: { traits: ["Need partners who understand their sensitivity", "Intense, passionate, spiritually-oriented connections", "May idealize partners or relationships", "Psychic connection to partner"], bestWith: [2, 4, 6, 9], warning: "Can be high-maintenance emotionally" },
            asFriend: ["Inspiring and uplifting presence", "Intuitive understanding of friends' needs", "Give profound insights and guidance", "May feel lonely despite many connections"],
            asParent: ["Inspire children's spiritual awareness", "Highly attuned to children's emotional states", "Teach children to trust intuition", "Need to balance spiritual with practical parenting"],
            asChild: ["Psychic, sensitive, see and know things", "May be labeled as 'too sensitive'", "Need spiritual education and validation", "Require gentle, understanding parenting"]
        },
        career: {
            environments: ["Inspirational and spiritual work", "Creative fields allowing expression", "Roles where intuition is valued", "Meaningful, mission-driven work", "Platforms for sharing vision and wisdom"],
            paths: [
                { title: "Spiritual Teacher", desc: "Guru, wisdom keeper, consciousness educator" },
                { title: "Energy Healer", desc: "Intuitive healer, spiritual counselor" },
                { title: "Visionary Artist", desc: "Musician, performer with message" },
                { title: "Inspirational Writer", desc: "Channeled writing, poetry" },
                { title: "Motivational Speaker", desc: "Workshop facilitator, preacher" },
                { title: "Intuitive Therapist", desc: "Transpersonal psychology" },
                { title: "Life Coach", desc: "Spiritual coach, intuitive guide" },
                { title: "Media Creator", desc: "Inspirational content, spiritual influencer" },
                { title: "Metaphysical Practitioner", desc: "Astrology, tarot, mediumship" },
                { title: "Conscious Entrepreneur", desc: "Social enterprise, mission-driven business" }
            ],
            workStyle: ["Inspired bursts of brilliant work", "Struggle with routine and structure", "Excel when channeling inspiration", "Require meaning to stay engaged"],
            money: ["Not motivated by money primarily", "May struggle with practical finances", "Can manifest abundance when aligned", "Attract opportunities synchronistically"]
        },
        challenges: {
            primary: ["Grounding: Staying present in physical reality", "Stability: Creating consistent life structure", "Ego Management: Using gifts for service, not superiority", "Overwhelm: Managing extreme sensitivity", "Trust: Sharing gifts without fear"],
            growthPath: ["Learning to ground spiritual energy in practical action", "Developing systems to manage sensitivity", "Finding sustainable ways to inspire without depletion"],
            spiritualLessons: ["Your sensitivity is a gift, not a curse", "You must ground to channel effectively", "Being a channel requires empty ego", "Ordinary life can be sacred too"]
        },
        health: {
            physical: ["Extremely sensitive nervous system", "Prone to anxiety, panic, nervous disorders", "Sensitive to environments, foods, energies", "Need extra rest and recovery"],
            mentalEmotional: ["Anxiety and overwhelm common", "Risk of nervous breakdown if ungrounded", "May experience spiritual emergency"],
            recommendations: ["Meditation and spiritual practice (essential)", "Gentle movement (yin yoga, tai chi, qigong)", "Nature immersion for grounding", "Strong boundaries around energy and empathy"]
        },
        compatibility: {
            mostCompatible: [{ number: 2, reason: "Understands 11's sensitivity; supportive grounding" }, { number: 6, reason: "6 provides stability while honoring gifts" }, { number: 9, reason: "Shared spiritual vision and humanitarian values" }],
            challenging: [{ number: 4, reason: "4 grounds but may limit spiritual expression" }, { number: 8, reason: "8's pragmatism can frustrate spiritual focus" }],
            complex: [{ number: 7, reason: "Deep spiritual connection, both sensitive" }, { number: 11, reason: "Profound understanding but need external grounding" }]
        },
        famousExamples: [{ name: "Barack Obama", context: "Inspirational leader, visionary, charismatic" }, { name: "Michael Jordan", context: "Channeled excellence, inspired globally" }, { name: "Madonna", context: "Visionary artist, constant reinvention" }],
        keynote: {
            giftToWorld: "You are a spiritual antenna channeling higher wisdom and inspiration. Your sensitivity allows you to perceive what others miss and your vision shows humanity what's possible. You illuminate the path forward.",
            lifeLesson: "Your gifts require grounding to be useful. Sensitivity without boundaries leads to breakdown. You must care for yourself to channel effectively. Your humanity is as important as your divinity.",
            affirmation: "I channel higher wisdom while honoring my human needs. I ground my spiritual gifts in practical action. I serve from wholeness, protect my energy, and trust my intuition."
        }
    },

    22: {
        archetype: "The Master Builder",
        coreEssence: "Life Path 22 is the second Master Number, representing the archetype of the Master Builder and Practical Visionary. Twenty-twos combine the visionary capacity of 11 with the practical building skills of 4. They are here to turn grand visions into tangible reality, to build systems and structures that serve humanity for generations.",
        isMaster: true,
        reducesTo: 4,
        personality: {
            fundamental: ["Visionaries who can actually execute", "Think in terms of systems that serve millions", "Practical idealists—dreams with blueprints", "Commanding presence and natural authority", "Ambitious on scale beyond typical achievement", "Need to build something lasting"],
            cognitive: ["Strategic, systems-level thinking", "See both forest and trees simultaneously", "Understand how to scale and sustain", "Think in generations, not years", "Excel at turning abstract into concrete"],
            emotional: ["Controlled emotions—feel deeply but hide it", "Anxiety about living up to potential", "Pride in accomplishments", "Fear of failure on grand scale"],
            shadow: ["Overwhelm leading to paralysis or shutdown", "Ruthlessness in pursuit of vision", "Workaholism and burnout", "Nervous breakdown from pressure", "All-or-nothing thinking"]
        },
        relationships: {
            romantic: { traits: ["Need partners who share or support vision", "May prioritize mission over relationship", "Express love through building life together", "Need respect more than affection"], bestWith: [2, 6, 8], warning: "Can struggle with emotional intimacy" },
            asFriend: ["Small circle of high-achiever friends", "Valuable connections and resources", "Generous when supporting friends' big goals", "Can be intimidating to some"],
            asParent: ["High expectations for children", "Teach children to dream big and execute", "Provide excellent opportunities and resources", "Need to balance ambition with nurturing"],
            asChild: ["Serious, responsible, ambitious from young age", "May seem like small adults", "Need outlets for big vision", "Benefit from being taught to relax"]
        },
        career: {
            environments: ["Large-scale impact opportunities", "Entrepreneurial or executive leadership", "Fields allowing system-building", "Positions with significant resources", "Missions requiring long-term vision"],
            paths: [
                { title: "Global Entrepreneur", desc: "Building companies that scale globally" },
                { title: "Architect", desc: "Designing landmark buildings, urban planning" },
                { title: "Infrastructure Engineer", desc: "Large projects, systems design" },
                { title: "Tech Visionary", desc: "Building platforms serving millions" },
                { title: "Political Reformer", desc: "Systemic reform, nation-building" },
                { title: "Educational Reformer", desc: "Building universities, reforming systems" },
                { title: "Foundation Builder", desc: "Establishing nonprofits, movements" },
                { title: "Healthcare Administrator", desc: "Reforming systems, building hospitals" },
                { title: "Media Executive", desc: "Building media empires, platforms" },
                { title: "Social Enterprise Founder", desc: "Building businesses solving social problems" }
            ],
            workStyle: ["Strategic and methodical", "Build teams and delegate effectively", "Think multi-generationally", "Can be intimidating to work with"],
            money: ["Natural at building significant wealth", "Understand leverage and systems", "Think in terms of legacy and impact", "Strategic about resources"]
        },
        challenges: {
            primary: ["Overwhelm: Managing pressure of massive potential", "Balance: Honoring personal life alongside mission", "Perfectionism: Accepting good enough vs waiting for perfect", "Vulnerability: Showing weakness and asking for help", "Rest: Giving permission to stop and recover"],
            growthPath: ["Learning that sustainable success requires self-care", "Discovering vulnerability is strength", "Understanding that perfect is enemy of done"],
            spiritualLessons: ["Your worth isn't your achievement", "You don't have to do it alone", "Rest is productive", "People are more important than projects"]
        },
        health: {
            physical: ["Stress-related health issues", "Prone to burnout and exhaustion", "May ignore body's signals", "Nervous system needs support"],
            mentalEmotional: ["Anxiety about living up to potential", "Depression if mission feels impossible", "Pressure can lead to breakdown"],
            recommendations: ["Scheduled, non-negotiable rest", "Strategic fitness (optimize performance)", "Nature retreats (perspective and grounding)", "Spiritual practices that humble and connect"]
        },
        compatibility: {
            mostCompatible: [{ number: 2, reason: "2 provides essential support and grounding" }, { number: 4, reason: "Shared work ethic and practical focus" }, { number: 6, reason: "6 creates stability while 22 builds empire" }],
            challenging: [{ number: 5, reason: "5's changeability frustrates 22's long-term plans" }, { number: 7, reason: "Both deep but different orientations" }],
            complex: [{ number: 8, reason: "Both ambitious; powerful if non-competitive" }, { number: 11, reason: "11 inspires, 22 builds—can be powerful" }]
        },
        famousExamples: [{ name: "Paul McCartney", context: "Built Beatles empire, lasting musical legacy" }, { name: "Richard Branson", context: "Serial empire builder, Virgin Group" }, { name: "The Dalai Lama", context: "Building peace and compassion systems globally" }],
        keynote: {
            giftToWorld: "You turn impossible visions into tangible reality. You build systems, structures, and legacies that serve humanity for generations. Your practical idealism shows what's possible when vision meets execution.",
            lifeLesson: "You don't have to prove your worth through achievement. The greatest buildings include space for rest. Perfection is the enemy of progress. You are enough beyond what you build.",
            affirmation: "I build great things while honoring my humanity. I balance vision with presence, ambition with rest. I am worthy beyond my achievements. My legacy includes who I am, not just what I create."
        }
    },

    33: {
        archetype: "The Master Teacher",
        coreEssence: "Life Path 33 is the rarest Master Number, representing the archetype of the Master Teacher and Compassionate Healer. Thirty-threes embody unconditional love, selfless service, and teaching at the highest level. They combine 11's spiritual vision, 22's building capacity, and 6's nurturing into the ultimate expression of loving service.",
        isMaster: true,
        reducesTo: 6,
        personality: {
            fundamental: ["Embody unconditional love and compassion", "Natural teachers who uplift through presence", "Selfless service to point of self-sacrifice", "Radiate healing energy", "Called to teach and heal on large scale", "Bear others' suffering willingly"],
            cognitive: ["Intuitive wisdom combined with practical teaching", "Understand human psychology deeply", "Think in terms of collective healing", "Synthesize spiritual and practical", "See potential in everyone"],
            emotional: ["Feel humanity's pain as own", "Unconditional love and acceptance", "Emotional depth and complexity", "Guilt when unable to help everyone"],
            shadow: ["Martyrdom and complete self-neglect", "Codependency on massive scale", "Emotional manipulation through guilt", "Superiority about spiritual development", "Burnout from relentless giving"]
        },
        relationships: {
            romantic: { traits: ["Love deeply and unconditionally", "May sacrifice everything for partner", "Need spiritual partnership", "Express love through teaching and healing"], bestWith: [6, 9, 11], warning: "Can be smothering or controlling" },
            asFriend: ["The friend who helps everyone unconditionally", "Create community and bring people together", "Give endlessly, sometimes to depletion", "Friends feel seen and loved completely"],
            asParent: ["Natural parents—nurturing, wise, devoted", "Teach children spiritual and emotional wisdom", "Create loving, consciousness-raising homes", "Children feel unconditionally loved"],
            asChild: ["Old souls with wisdom beyond years", "May become family therapist/healer", "Extremely sensitive to family pain", "Require gentle, conscious parenting"]
        },
        career: {
            environments: ["Teaching and healing roles", "Positions serving collective good", "Creative expression with purpose", "Leadership in conscious organizations", "Global platforms for message"],
            paths: [
                { title: "Master Teacher", desc: "Spiritual teacher, consciousness education" },
                { title: "Holistic Healer", desc: "Energy healer, therapist" },
                { title: "Spiritual Leader", desc: "Interfaith minister, chaplain" },
                { title: "Counselor", desc: "Therapist, trauma specialist" },
                { title: "Teaching Artist", desc: "Teaching through beauty" },
                { title: "Wisdom Author", desc: "Teaching spiritual/emotional wisdom" },
                { title: "Consciousness Speaker", desc: "Workshop leader, transformational teacher" },
                { title: "Nonprofit Founder", desc: "Building healing/teaching organizations" },
                { title: "Hospice Worker", desc: "End-of-life care, death doula" },
                { title: "Peace Builder", desc: "Conflict resolution, restorative justice" }
            ],
            workStyle: ["Give everything to meaningful work", "Excel at creating transformational experiences", "May struggle with boundaries and self-care", "Build communities around teaching"],
            money: ["Often struggle with money", "Give away too much", "May have poverty consciousness", "Can manifest when serving authentically"]
        },
        challenges: {
            primary: ["Martyrdom: Learning service from fullness not depletion", "Boundaries: Protecting energy while remaining open", "Worthiness: Valuing self beyond service to others", "Discernment: Knowing who to help and when", "Activation: Most 33s live as 6 until ready for full mission"],
            growthPath: ["Learning that self-care enables better service", "Discovering that boundaries increase capacity to love", "Understanding that enabling isn't helping"],
            spiritualLessons: ["You must fill your own cup first", "Unconditional love includes yourself", "Boundaries are loving, not selfish", "You can't do others' healing for them"]
        },
        health: {
            physical: ["Extreme sensitivity to everything", "Prone to complete exhaustion and burnout", "May develop serious illness from self-neglect", "Heart issues (giving center)"],
            mentalEmotional: ["Risk of complete breakdown from overwhelm", "Depression from world's suffering", "Codependency patterns"],
            recommendations: ["Non-negotiable self-care practices", "Regular healing work for self", "Strong boundaries and energy protection", "Receive healing from others regularly"]
        },
        compatibility: {
            mostCompatible: [{ number: 6, reason: "Understands service; supports mission" }, { number: 9, reason: "Shared vision and compassion; deep understanding" }, { number: 11, reason: "Spiritual connection and shared sensitivity" }],
            challenging: [{ number: 4, reason: "4 grounds but may limit spiritual expression" }, { number: 8, reason: "Tension between spiritual and material focus" }],
            complex: [{ number: 3, reason: "Creative synergy if 33 allows playfulness" }, { number: 22, reason: "Can build healing systems together" }]
        },
        famousExamples: [{ name: "Meryl Streep", context: "Master of craft, teaches through art" }, { name: "Albert Einstein", context: "Taught humanity new ways of understanding" }, { name: "Francis of Assisi", context: "Ultimate embodiment of 33 consciousness" }],
        keynote: {
            giftToWorld: "You embody unconditional love and teach humanity through your presence. Your selfless service and profound compassion show what's possible when we love without limit. You are a living example of enlightened consciousness.",
            lifeLesson: "Even Christ and Buddha needed rest. You can't heal the world if you're broken. Unconditional love must include you. Your humanity is sacred—honor it. Service from depletion isn't love—it's martyrdom.",
            affirmation: "I embody unconditional love that includes myself. I serve from fullness and wholeness. I honor my limits while expanding my capacity. I am worthy of the love I give others."
        },
        note: "True 33s are extremely rare. Many with 33 in their chart live as 6 until spiritual maturity activates the higher frequency. This is not failure—it's appropriate pacing for such demanding energy."
    },
};

// Helper to get a profile
export function getLifePathProfile(number) {
    return LIFE_PATH_PROFILES[number] || LIFE_PATH_PROFILES[1];
}

// Get all available profile numbers
export function getAvailableProfiles() {
    return Object.keys(LIFE_PATH_PROFILES).map(Number);
}
