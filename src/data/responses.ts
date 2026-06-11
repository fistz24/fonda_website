export interface FondaResponse {
  id: string;
  keywords: string[];
  response: string;
  followUps?: string[];
}

export const responses: FondaResponse[] = [
  // ─── BACKGROUND & NARRATIVE ───────────────────────────────────────────────
  {
    id: "diverse-background",
    keywords: [
      "diverse", "background", "non-linear", "unusual", "different jobs",
      "so many", "variety", "random", "makes sense", "why so many",
      "why your background", "explain your background",
    ],
    response: `My background looks non-linear on paper, but every chapter was intentional.

I started in consulting at C.H. Johnson in Chicago — that's where I learned how to structure messy problems, manage client expectations, and turn data into clear recommendations. From there, I moved to Ideosource Venture Capital in Jakarta because I wanted to understand how businesses are built from scratch, not just how they're optimized.

Entrepreneurship came next. I've founded three ventures — Ini Teh, Anythins Foods, and now Rena Pastry — each one teaching me something the previous couldn't. Real unit economics, real customers, real constraints. Not a deck. Actual execution.

The MBA at Carnegie Mellon was a deliberate reset — I wanted frameworks to contextualize everything I'd done operationally. And Chime brought it all together: applying product thinking, competitive strategy, and JTBD frameworks inside a leading U.S. fintech company.

Each chapter added a new lens. Together, they let me see business end-to-end — from the 30,000-foot strategic view all the way down to figuring out why a supplier is late.`,
    followUps: ["What did you learn from entrepreneurship?", "Tell me about Chime.", "What's your superpower?"],
  },
  {
    id: "connecting-dots",
    keywords: [
      "connecting", "dots", "thread", "through line", "ties together",
      "common", "pattern", "narrative", "story", "systems thinker",
    ],
    response: `The thread running through everything is customer understanding — and the discipline of testing assumptions before committing to them.

Whether I was doing due diligence on a startup at Ideosource, building Ini Teh from scratch, or analyzing product opportunities at Chime — the core question was always the same: what does this person actually need, and is this business meeting that need better than anyone else?

Consulting gave me structure. VC gave me pattern recognition across business models. Entrepreneurship taught me that customers behave differently than they tell you they will. Chime taught me how to translate those insights into product decisions with real stakeholder buy-in.

I think of myself as someone who moves fluently between strategy and execution — comfortable in an executive presentation room and equally comfortable building a contribution margin model from scratch.`,
    followUps: ["What does systems thinking mean to you?", "Tell me about your consulting work.", "What's your approach to strategy?"],
  },
  {
    id: "superpower",
    keywords: [
      "superpower", "best at", "strongest", "top skill", "most valuable",
      "differentiated", "unique", "stand out", "special",
    ],
    response: `Synthesis — and specifically, moving quickly from ambiguity to a clear point of view.

I've been in enough different contexts (consulting, VC, founding companies, product internship) that I've developed an instinct for what's signal and what's noise in a new situation. I can walk into a business problem I've never seen before, structure what's known and unknown, and identify the one or two questions that actually matter.

In practice that looks like: the competitive and market opportunity analysis I built at Chime that shaped roadmap decisions for 30+ stakeholders. Or repositioning Ini Teh's entire channel strategy during COVID — no playbook, just first principles — and delivering 200% revenue growth in a contracting market.

I'm also unusually comfortable with the full stack of a business problem: I can build the DCF, do the customer interviews, write the exec brief, and manage the vendor. That range comes from having had to do all of it at some point.`,
    followUps: ["Show me an example of that in a project.", "Tell me about Ini Teh.", "Tell me about your analytics skills."],
  },

  // ─── SPECIFIC EXPERIENCES ─────────────────────────────────────────────────
  {
    id: "consulting",
    keywords: [
      "consulting", "consultant", "johnson consulting", "c.h. johnson",
      "advisory", "why consulting", "project analyst",
    ],
    response: `C.H. Johnson Consulting in Chicago was my first job out of Kendall College, and it set the foundation for how I think about problems.

I worked as a Project Analyst managing 3+ concurrent client workstreams — which sounds simple but taught me something invaluable: how to keep multiple threads moving without dropping any, while communicating clearly to stakeholders at different levels. We hit 100% on-time delivery across every engagement I worked on.

One project I'm particularly proud of: I converted quantitative market research into a set of actionable recommendations that drove a 2.5x increase in Civil Buildings program attendance. That experience crystallized something for me — data is only as useful as the decision it changes.

The consulting mindset — hypothesis-driven, structured, comfortable with skeptical audiences — shows up in everything I do now, from how I frame a product brief to how I present a competitive analysis.`,
    followUps: ["Tell me about your VC experience.", "How does consulting experience help in product roles?", "What's your approach to market sizing?"],
  },
  {
    id: "venture-capital",
    keywords: [
      "venture", "vc", "venture capital", "investing", "startups", "investment",
      "ideosource", "portfolio", "fund", "investor", "due diligence",
    ],
    response: `Ideosource Venture Capital in Jakarta was where I developed pattern recognition that I can't get from any other context.

I was an Investment Associate focused on consumer, tech, and digital sectors. The core of the job was evaluation — building DCF models and comparable company analyses, conducting end-to-end due diligence including market sizing and competitive landscape mapping, and developing investment memos for the committee.

The number I'm proudest of: the strategic analyses I contributed to helped achieve a 75% conversion rate among prospective investors. That required not just rigorous analysis but the ability to tell a compelling, credible story with that analysis.

What VC gave me that nothing else could: fluency across business models (SaaS, marketplace, DTC, consumer), and the ability to ask the right questions fast. In a 30-minute founder meeting you need to probe market size, moat, team, and unit economics simultaneously — and synthesize it into a clear view. That muscle transfers directly into product and strategy work.`,
    followUps: ["How has VC shaped how you think about product?", "Tell me about Chime.", "Tell me about your financial modeling skills."],
  },
  {
    id: "chime",
    keywords: [
      "chime", "fintech", "neobank", "banking", "financial", "product lifecycle",
      "marketing intern", "chime work", "at chime", "internship",
    ],
    response: `Chime was my MBA summer internship, and it was where everything came together.

I was a Product Lifecycle Marketing Intern, embedded with the product and marketing teams. My core focus was evaluating growth and revenue opportunities across 3+ fintech products — analyzing customer adoption metrics, competitive pricing dynamics, and unit economics to inform roadmap and GTM prioritization.

The project I'm most proud of: I synthesized customer, competitive, and market insights using Jobs-To-Be-Done frameworks in partnership with Product, Research, and BD teams. The output shaped actual product investment decisions — not a theoretical exercise.

The scale was the biggest adjustment. I was presenting to 30+ stakeholders across Product, Marketing, Research, and Business Development. Feedback from 9+ stakeholder groups specifically called out the clarity and prioritization framework I provided for upcoming business decisions. At that scale, communication is as important as the analysis itself.`,
    followUps: ["What did you work on specifically at Chime?", "How did you approach the JTBD framework?", "Tell me about your analytics skills."],
  },
  {
    id: "rena-pastry",
    keywords: [
      "rena", "pastry", "rena pastry", "current", "now", "founder",
      "latest", "most recent",
    ],
    response: `Rena Pastry is my current venture — I launched it in July 2025, right after finishing my MBA.

It's a consumer pastry brand based in Surabaya, Indonesia. I'm running it as a structured commercial validation exercise: designing experiments to test pricing, demand, customer segments, and channel strategy under real capital constraints.

In 5 months I've scaled the audience roughly 8x while iterating on core assumptions. I track everything — contribution margin models, COGS, pricing ladders, CAC proxies — because when it's your own money, you get very disciplined very fast.

What I'm learning that no classroom taught me: the gap between "this should work strategically" and "this is actually working operationally" is enormous. Rena Pastry is where I close that gap in real time. The 0→1 execution across product development, sourcing, digital marketing, and fulfilment has sharpened my instincts for prioritization under constraints in a way nothing else could.`,
    followUps: ["Tell me about Anythins Foods.", "What's the biggest lesson from founding companies?", "How does entrepreneurship inform your product thinking?"],
  },
  {
    id: "anythins-foods",
    keywords: [
      "anythins", "anythins foods", "cpg", "consumer packaged goods", "food brand",
      "brand marketing",
    ],
    response: `Anythins Foods was a CPG company I founded in Surabaya in 2021, operating across B2C and D2C retail channels.

The headline result: exceeded initial sales forecasts by 200% within the first 3 months. That came from identifying underserved customer segments through proper customer research and market analysis — then refining positioning and messaging to speak directly to those segments, which drove a 25% sales increase.

The operational side was equally demanding. I built and managed relationships with 20+ vendors and partners, improving retention and enabling scalable distribution across online and offline channels.

I ran Anythins Foods until mid-2023, when I transitioned to focus on the MBA. The experience gave me a real-world stress test of every marketing and growth theory I'd ever read.`,
    followUps: ["Tell me about Ini Teh.", "Tell me about Rena Pastry.", "How do you approach customer segmentation?"],
  },
  {
    id: "ini-teh",
    keywords: [
      "ini teh", "tea", "beverage", "omnichannel", "covid", "pandemic",
      "retail", "d2c", "ecommerce",
    ],
    response: `Ini Teh was my first consumer brand — a CPG beverage company I founded in Surabaya in late 2019, leveraging brick-and-mortar, retail partnerships, and D2C e-commerce.

The defining challenge came almost immediately: COVID. Rather than contracting, I used the crisis as a forcing function. I redefined the target segments, completely rebuilt the channel strategy, and redesigned the pricing model. The result was 200% revenue growth in a market that was contracting for most players.

The financial discipline I built during that period is something I carry everywhere. I improved gross margin from 78% to 89% through a combination of pricing optimization, supplier negotiations, and cost structure redesign. I also launched a full omnichannel model — retail plus D2C — which improved customer retention and reduced delivery costs by 15%.

Ini Teh ran until April 2023. It taught me that a downturn is often the best time to make bold strategic moves — if you have the data and the discipline to back them up.`,
    followUps: ["What's the biggest lesson from running consumer brands?", "How do you think about pricing strategy?", "Tell me about Anythins Foods."],
  },
  {
    id: "mba",
    keywords: [
      "mba", "carnegie mellon", "tepper", "business school", "grad school",
      "masters", "degree", "school", "education", "cmu",
    ],
    response: `I did my MBA at Carnegie Mellon's Tepper School of Business — a STEM-designated program, which suited me perfectly given my analytics interests.

My concentrations were Marketing, Business Technologies, and Finance. The combination was intentional: I wanted to be fluent in the language of customers, the language of technology, and the language of money — because the best business decisions sit at the intersection of all three.

Tepper's analytical culture reinforced something I already believed: intuition is a starting point, not a conclusion. The case-based and quantitative rigor pushed me to sharpen every argument with data before I'd present it.

The MBA also gave me the context to understand why my career had moved the way it did — and the frameworks to articulate that story clearly, which is how FondaOS was born.`,
    followUps: ["Tell me about your analytics background.", "How did the MBA shape your thinking?", "What are you looking for next?"],
  },

  // ─── SKILLS & CAPABILITIES ────────────────────────────────────────────────
  {
    id: "strategy",
    keywords: [
      "strategy", "strategic", "market sizing", "competitive", "framework",
      "analysis", "market", "competitive analysis", "strategic thinking",
    ],
    response: `Strategy to me is the discipline of making clear choices about where to compete and how to win — and being rigorous about what you're giving up.

My strategic toolkit was built across three contexts: consulting (structured frameworks, stakeholder communication), VC (business model pattern recognition, investment thesis development), and Chime (translating market analysis into roadmap decisions with real trade-offs).

A concrete example: at Chime, I evaluated growth and revenue opportunities across 3+ fintech products by synthesizing customer adoption metrics, competitive pricing dynamics, and unit economics. That analysis directly shaped product investment decisions — not a theoretical exercise, but something that changed what the team built next.

I'm also a practitioner of Jobs-To-Be-Done as a strategic lens. It's the most reliable way I know to cut through internal debates about features and get back to: what is the customer actually trying to accomplish?`,
    followUps: ["Tell me about your Chime work.", "Tell me about your VC experience.", "What's your approach to market sizing?"],
  },
  {
    id: "growth",
    keywords: [
      "growth", "gtm", "go to market", "acquisition", "retention", "pricing",
      "customer", "segmentation", "marketing", "growth strategy", "scale",
    ],
    response: `I've built GTM strategies from scratch three times across very different contexts — which gives me a practical instinct for what actually drives growth versus what sounds good in a deck.

At Anythins Foods, identifying underserved customer segments through research drove a 25% sales increase. At Ini Teh, a full strategic repositioning during COVID — new segments, new channels, new pricing — produced 200% revenue growth. At Rena Pastry, I'm scaling 8x audience growth in 5 months through structured channel experiments.

The pattern I keep seeing: most growth problems aren't acquisition problems. They're retention or activation problems wearing an acquisition costume. Before investing in top-of-funnel, I always ask whether the product is actually delivering on its promise to the customers you already have.

At Chime I brought this consumer lens to a fintech product context — analyzing competitive pricing dynamics and customer adoption metrics to inform GTM prioritization across multiple products.`,
    followUps: ["Tell me about Ini Teh.", "How do you approach customer segmentation?", "Tell me about your product experience."],
  },
  {
    id: "product",
    keywords: [
      "product", "product manager", "pm", "product thinking", "roadmap",
      "jtbd", "jobs to be done", "user research", "product sense",
      "product development", "lifecycle",
    ],
    response: `My product philosophy starts with Jobs-To-Be-Done: what is the person actually trying to accomplish, and what's getting in their way?

At Chime, I applied this framework in partnership with Product, Research, and Business Development teams to shape actual product investment decisions. The work required synthesizing customer insights, competitive intelligence, and market data into a clear point of view — then presenting it to 30+ stakeholders in a way that drove alignment.

What I bring that's unusual for a product role: I've been the customer, the operator, and the analyst. Building three consumer brands means I've had the experience of designing something, putting it in front of real customers, watching their actual behavior diverge from what they told me, and iterating quickly. That loop is the core of good product work — I've just done it with real financial stakes.

I'm particularly strong at the early phases: framing the opportunity, doing the customer research, building the business case.`,
    followUps: ["How do you approach user research?", "Tell me about your analytics skills.", "Tell me about Chime."],
  },
  {
    id: "analytics",
    keywords: [
      "analytics", "data", "sql", "python", "tableau", "looker", "analysis",
      "quantitative", "metrics", "data analysis", "technical", "numbers",
      "medium", "articles", "codex", "spss",
    ],
    response: `Analytics is something I built deliberately — it's self-taught on top of a business foundation, which I think makes it more practically useful.

My toolkit: SQL and Python for analysis (pandas, matplotlib, data wrangling), Tableau and Looker for visualization and dashboards, SPSS and R for statistical work, Google Ads and Meta Ads for performance marketing analytics.

The Medium writing is probably the best evidence of how I think analytically. I've authored 9 articles on data analytics topics — 5 of them were featured on CodeX, a publication with over 1 million monthly readers. Writing forces a level of clarity that private analysis doesn't — you can't hide behind jargon when a million people might read it.

At Chime, the analytics work was applied directly: customer adoption metrics, unit economics modeling, and competitive pricing analysis that shaped real product and GTM decisions.

I care less about the tools and more about the question: does this analysis actually change a decision?`,
    followUps: ["Tell me about your Medium articles.", "Show me a project that used data.", "Tell me about Chime."],
  },
  {
    id: "operations",
    keywords: [
      "operations", "ops", "operational", "supply chain", "vendor", "unit economics",
      "process", "execution", "logistics", "0 to 1", "zero to one",
    ],
    response: `Operations is where I've spent a surprising amount of my career — mostly because founding three companies forces you to be your own COO.

At Rena Pastry, I've led full 0→1 execution: product development, sourcing, digital marketing, and fulfilment. At Anythins Foods, I built and managed 20+ vendor and partner relationships. At Ini Teh, I reduced delivery costs by 15% through an omnichannel redesign while simultaneously improving customer retention.

The financial discipline that comes with running operations on constrained capital is something I carry into every role. I build contribution margin models as a reflex. I think in terms of CAC payback periods and gross margin before I think in terms of revenue. That ground-level fluency with how businesses actually work — not how they should work in theory — is hard to develop without having done it.

What I've learned: operational rigour is a strategic advantage. Companies that can execute cleanly on a good strategy beat companies with a great strategy and sloppy execution every time.`,
    followUps: ["Tell me about Rena Pastry.", "How do you think about unit economics?", "Tell me about your finance background."],
  },
  {
    id: "finance",
    keywords: [
      "finance", "financial", "modeling", "excel", "accounting", "p&l",
      "revenue", "cost", "budget", "unit economics", "financial modeling",
      "dcf", "valuation", "margin",
    ],
    response: `Finance is the language of business, and I've made sure to become genuinely fluent in it — not just conversationally.

At Ideosource VC, I built DCF and comparable company analyses to evaluate investment targets across consumer, tech, and digital sectors. That's where I developed rigour in financial modeling — understanding not just how to build a model but how to stress-test its assumptions and identify what it's actually telling you.

At Ini Teh, I managed a real P&L — improving gross margin from 78% to 89% through pricing optimization, supplier negotiations, and cost structure redesign. At Rena Pastry, I build and maintain contribution margin models (COGS, pricing ladders, CAC proxies) as a core operating discipline.

My CMU MBA concentrations included Finance, which gave me formal frameworks to complement the operational finance I'd learned the hard way.`,
    followUps: ["Tell me about your VC experience.", "How do you think about unit economics?", "Tell me about Ini Teh."],
  },
  {
    id: "languages",
    keywords: ["language", "languages", "speak", "mandarin", "indonesian", "bahasa", "multilingual"],
    response: `I'm fluent in three languages: English, Bahasa Indonesia, and Mandarin (普通话).

Growing up in Surabaya, Indonesia with a Chinese-Indonesian background meant navigating multiple cultural and linguistic contexts from an early age — which I think contributed to my ability to read a room quickly and adapt my communication style to the audience.

It's also practically useful. My consumer brands operated in the Indonesian market, and being able to negotiate with suppliers, speak to customers, and manage teams in Bahasa Indonesia without translation friction matters more than people realize.`,
    followUps: ["Tell me about your background.", "Tell me about Rena Pastry.", "What are you looking for next?"],
  },

  // ─── PROJECTS ─────────────────────────────────────────────────────────────
  {
    id: "best-projects",
    keywords: [
      "best project", "projects", "case study", "work examples", "portfolio",
      "show me", "examples", "what have you built", "proud of",
    ],
    response: `Here are the projects I'm most proud of:

**Chime — Product Opportunity & GTM Analysis**
Evaluated growth and revenue opportunities across 3+ fintech products using JTBD frameworks, competitive pricing analysis, and customer adoption metrics. Output shaped product investment decisions and was presented to 30+ stakeholders across Product, Marketing, Research, and BD.

**Ini Teh — COVID Repositioning**
Redesigned target segments, channels, and pricing strategy during COVID — delivering 200% revenue growth in a contracting market. Improved gross margin from 78% to 89% simultaneously through supplier negotiations and cost restructuring.

**Anythins Foods — Launch & GTM**
Launched a consumer CPG brand from zero to 200% above initial sales forecasts in 3 months. Built and managed 20+ vendor relationships enabling scalable distribution across online and offline channels.

**Ideosource — Investment Analysis**
Built DCF and comparable company analyses across consumer, tech, and digital sectors. Strategic analyses contributed to a 75% investor conversion rate.

Each one is documented in more detail in the Case Study Library — want me to walk through any of these?`,
    followUps: ["Tell me about the Chime project.", "Tell me about Ini Teh.", "Tell me about Ideosource VC."],
  },

  // ─── MOTIVATION & PERSONALITY ─────────────────────────────────────────────
  {
    id: "motivation",
    keywords: [
      "motivate", "motivation", "why", "passion", "drive", "what gets you",
      "excited", "care about", "love about", "enjoy",
    ],
    response: `I'm most energized when I'm working on something where the answer isn't obvious yet.

The early stage of a problem — when there's real ambiguity and the team is still figuring out what question to even ask — is where I do my best work. That's where structured thinking, customer empathy, and comfort with uncertainty matter most.

I also care deeply about the human side of business. Understanding why people make the decisions they do, what jobs they're trying to get done, what actually changes behavior — that curiosity runs through everything from my VC diligence work to my consumer brand experiments to the JTBD analysis I did at Chime.

There's also something that drives me about doing things that don't have a map. Every company I've founded, every new function I've taken on — there was no playbook. I've had to figure it out. That's uncomfortable, but it's also where the most interesting learning happens.`,
    followUps: ["What kind of role are you looking for?", "Tell me something people don't know about you.", "What's your superpower?"],
  },
  {
    id: "fun-personal",
    keywords: [
      "personal", "outside work", "hobbies", "fun", "interesting",
      "people don't know", "surprising", "dessert", "food", "favorite",
      "outside of work",
    ],
    response: `A few things that might surprise people:

I started a pastry business — Rena Pastry — right after finishing my MBA. Not because I needed something to do, but because I genuinely love baking and I saw it as the most honest way to test a hypothesis about consumer demand in Surabaya. It's both a real business and a living laboratory.

I've written 9 articles on data analytics on Medium, 5 of which were featured in CodeX with 1M+ monthly readers. Writing is how I process what I've learned — it forces me to be precise in a way that private thinking doesn't.

I speak three languages (English, Bahasa Indonesia, Mandarin), which shapes how I think about communication more than I probably realize.

And I moved from Chicago to Surabaya and back again — which means I've built professional networks and operated in very different business cultures, and I'm genuinely comfortable in both.`,
    followUps: ["Tell me about Rena Pastry.", "Tell me about your Medium articles.", "What motivates you?"],
  },

  // ─── LOGISTICS ────────────────────────────────────────────────────────────
  {
    id: "resume",
    keywords: ["resume", "cv", "download", "pdf", "full history", "timeline"],
    response: `You can download my full resume from the Resume page in the sidebar — it has the complete timeline with all roles and key achievements.

Quick summary: C.H. Johnson Consulting → Ideosource VC → Ini Teh (Founder) → Anythins Foods (Founder) → MBA at Carnegie Mellon (Tepper) → Chime (Product Lifecycle Marketing Intern) → Rena Pastry (Founder, current).

Each role is documented in more detail throughout this portfolio.`,
    followUps: ["Tell me about your most recent role.", "What are you looking for next?", "Why is your background so diverse?"],
  },
  {
    id: "contact",
    keywords: [
      "contact", "reach out", "get in touch", "email", "connect", "linkedin",
      "talk", "meeting", "coffee chat", "hire", "available", "phone",
    ],
    response: `I'd love to connect. You can reach me at fondairena@gmail.com or via the Contact page in the sidebar.

I'm also reachable by phone at +62-822-3303-9724 (Indonesia).

If you're evaluating me for a role or project, I'm happy to do a short call to see if there's a fit — I find conversations more efficient than long email threads for figuring that out.`,
    followUps: ["What kind of role are you looking for?", "Download resume.", "Tell me about your background."],
  },
  {
    id: "looking-for",
    keywords: [
      "looking for", "next role", "job search", "open to", "interested in",
      "what kind of role", "ideal role", "target", "job", "hire you",
    ],
    response: `I'm most interested in roles at the intersection of strategy, product, and growth — places where I can use the full range of what I've built.

Specifically: product marketing, growth strategy, product management, or chief of staff roles at companies that are past early product-market fit and into the "how do we scale this thoughtfully" stage. That's where my combination of analytical rigour, customer intuition, and operational experience tends to add the most value.

I'm drawn to fintech, consumer, and tech-enabled businesses — sectors where I have real context — but I'm more interested in the type of problem than the specific industry.

Geographically, I'm open to both the U.S. and Southeast Asia — I have professional roots in both Chicago and Surabaya, and I'm comfortable operating in either context.`,
    followUps: ["Tell me about your background.", "What's your superpower?", "How can I contact you?"],
  },
  {
    id: "industries",
    keywords: [
      "industries", "sectors", "experience in", "worked in", "which industries",
      "what industries",
    ],
    response: `I've worked across a range of industries — which I think is actually an advantage:

**Fintech** — Chime, one of the leading neobanks in the U.S. Product lifecycle marketing and growth strategy.

**Venture Capital** — Ideosource VC in Jakarta. Consumer, tech, and digital sectors. Investment analysis and due diligence.

**Consumer / CPG** — Three founded brands: Ini Teh (beverage), Anythins Foods (food), and Rena Pastry (pastry). Full GTM, operations, and P&L ownership.

**Management Consulting** — C.H. Johnson Consulting in Chicago. Strategic advisory, market research, and client management.

The cross-industry pattern recognition is one of the things I value most about this path. When you've seen how a consumer brand thinks about pricing, how a VC fund thinks about market sizing, and how a fintech company thinks about customer adoption — you bring analogies and frameworks into any new problem that people with single-industry experience simply don't have.`,
    followUps: ["Tell me about your fintech experience.", "Tell me about your VC work.", "What kind of role are you looking for?"],
  },


  // ─── TELL ME ABOUT YOURSELF ───────────────────────────────────────────────
  {
    id: "tell-me-about-yourself",
    keywords: [
      "tell me about yourself", "introduce yourself", "who are you",
      "about you", "walk me through", "your story", "background summary",
    ],
    response: `I'm a strategist and operator who's built things, analyzed things, and advised on things — often all at once.

My career started in management consulting in Chicago, where I learned to structure ambiguous problems and communicate to skeptical audiences. From there I moved into venture capital in Jakarta, evaluating early-stage companies across consumer, tech, and digital sectors — which gave me cross-industry pattern recognition I rely on constantly.

Then I went deep on the founder side. I've built three consumer brands from scratch — Ini Teh, Anythins Foods, and Rena Pastry — each one a real operating business with real P&L accountability. That's where strategy met execution in the most honest possible way.

I did my MBA at Carnegie Mellon's Tepper School — concentrations in Marketing, Business Technologies, and Finance — and spent my summer at Chime, one of the leading U.S. fintechs, doing product lifecycle marketing and competitive strategy.

The short version: I understand business from multiple angles, I'm comfortable with ambiguity, and I get things done.`,
    followUps: ["What's your superpower?", "What kind of role are you looking for?", "Tell me about Chime."],
  },

  // ─── WEAKNESSES & GROWTH ──────────────────────────────────────────────────
  {
    id: "weakness",
    keywords: [
      "weakness", "weaknesses", "improve", "areas for growth", "challenge",
      "struggle", "hard for you", "working on", "not good at", "development area",
    ],
    response: `I'll give you a real answer, not a disguised strength.

I can go deep on a problem very quickly — which is genuinely useful, but early in my career it sometimes meant I'd already formed a strong hypothesis before I'd heard all the input from the room. I've had to actively build the habit of staying in listening mode longer, especially when working with teams who have domain knowledge I don't.

The other honest one: I've spent a lot of my career being the person who builds things independently — as a founder, you wear every hat. Adapting to larger organizational structures and navigating cross-functional dependencies in a matrixed company was a real learning curve. Chime was the first time I operated inside a large company with 30+ stakeholders, and I learned a lot about the patience and communication discipline that requires.

Both of these are things I'm actively working on — not things I've solved.`,
    followUps: ["What are you most proud of professionally?", "Tell me about a failure.", "What kind of team do you work best in?"],
  },

  // ─── FAILURE ──────────────────────────────────────────────────────────────
  {
    id: "failure",
    keywords: [
      "failure", "failed", "mistake", "went wrong", "didn't work",
      "biggest challenge", "hardest", "setback", "what would you do differently",
    ],
    response: `The most instructive failure was early in building Ini Teh.

I launched the product based on what I believed the market wanted — informed by research, but ultimately still an assumption. The initial channel strategy didn't land the way I expected. Sales were slower than projected and I was spending on the wrong distribution approach.

The mistake wasn't the hypothesis — it was that I held onto it too long before testing it properly. I was attached to the original plan and kept looking for evidence it would work, rather than accepting that the signal was telling me to pivot.

When I finally did pivot — redesigned the segments, rebuilt the channel model, renegotiated supplier costs — the business grew 200% in a contracting COVID market. But I would have gotten there faster if I'd treated the first few months as a test rather than an execution.

The lesson I carry: a strategy isn't a commitment. It's a hypothesis. And you have to stay genuinely open to the data disconfirming it.`,
    followUps: ["Tell me about Ini Teh.", "What's your decision-making process?", "What motivates you?"],
  },

  // ─── WORKING STYLE ────────────────────────────────────────────────────────
  {
    id: "working-style",
    keywords: [
      "working style", "work style", "how do you work", "how do you operate",
      "collaborate", "team", "environment", "culture", "prefer to work",
      "management style", "how you work with others",
    ],
    response: `I operate best in environments where there's a real problem to solve and enough autonomy to go figure it out.

My default mode: get close to the customer first, build a clear problem statement, form a hypothesis, and pressure-test it with data and people who know more than I do. I'd rather be wrong quickly than confident slowly.

On collaboration: I genuinely enjoy working across functions. One of my favorite parts of Chime was sitting at the intersection of Product, Research, Marketing, and BD. I'm comfortable being the person who synthesizes input from different teams and turns it into a coherent point of view — that's often where I add the most value.

I'm not someone who needs a fully mapped-out scope to get started. I work better with an outcome and some latitude. But I take communication seriously — I'd rather over-communicate a change in direction than let uncertainty sit.`,
    followUps: ["What kind of role are you looking for?", "Tell me about Chime.", "What's your superpower?"],
  },

  // ─── LEADERSHIP ───────────────────────────────────────────────────────────
  {
    id: "leadership",
    keywords: [
      "leadership", "lead", "leading", "manage", "management", "team lead",
      "led a team", "people management", "influence", "without authority",
    ],
    response: `Most of my leadership experience has been founder-style: building teams and processes from nothing, without a formal hierarchy to fall back on.

At Anythins Foods, I managed 20+ vendor and partner relationships — which required a different kind of leadership than managing direct reports. Getting people who don't work for you to prioritize your business requires clarity, consistency, and mutual value.

At Chime, the challenge was influencing 30+ stakeholders across functions without formal authority. I had to earn credibility fast — through the quality of the analysis, the clarity of communication, and willingness to engage with pushback directly. Getting alignment across 9+ stakeholder groups on a prioritization framework was probably the highest-leverage thing I did there.

My leadership style: I lead through clarity and conviction. I do my best thinking, share it openly, invite real disagreement, and update when the evidence warrants it.`,
    followUps: ["Tell me about a time you influenced without authority.", "Tell me about Chime.", "What kind of role are you looking for?"],
  },

  // ─── DECISION MAKING ──────────────────────────────────────────────────────
  {
    id: "decision-making",
    keywords: [
      "decision", "decision making", "how do you decide", "framework",
      "prioritize", "prioritization", "tradeoff", "trade-off", "choose",
    ],
    response: `My process is pretty consistent regardless of context.

First: what question are we actually trying to answer? Half the time when a decision feels hard, it's because the framing is wrong.

Second: what do we know vs. what are we assuming? I'm rigorous about separating those two. At Chime, using JTBD frameworks helped the team separate customer-validated insights from internal assumptions — that distinction is what made the recommendations defensible to 30+ stakeholders.

Third: what's the cost of being wrong, and how quickly can we find out? If the cost is low and the feedback loop is fast — run the test. If the stakes are high, invest more upfront. At Ini Teh I made high-stakes pivots quickly with limited data. At Ideosource I was building detailed DCF models before recommending an investment. The right depth of analysis depends on the reversibility of the decision.

I'd rather make a well-reasoned call with 70% of the data than a perfect decision that arrives too late.`,
    followUps: ["Tell me about a hard decision you made.", "Tell me about Ini Teh.", "What's your approach to strategy?"],
  },

  // ─── AMBIGUITY ────────────────────────────────────────────────────────────
  {
    id: "ambiguity",
    keywords: [
      "ambiguity", "ambiguous", "unclear", "uncertain", "no playbook",
      "undefined", "figure out", "open ended", "unstructured",
    ],
    response: `Ambiguity is genuinely where I'm most comfortable — most of my career has been in situations without a playbook.

When there's no clear answer, my first move is to figure out what kind of problem it actually is: is it ambiguous because of missing data, conflicting priorities, unclear ownership, or just unexplored territory? The approach depends on which one it is.

Starting three companies means I've done this under real pressure. With Ini Teh during COVID, there was no roadmap for how a small consumer brand should respond to a contracting market. I broke it down: what do we know about our customers, what channels are still accessible, what are our fixed vs. variable costs? Made a call, executed, used the response to calibrate the next move.

The honest truth: I find ambiguity more energizing than paralyzing. The less obvious the answer, the more valuable it is to find it.`,
    followUps: ["Tell me about Ini Teh.", "What's your decision-making process?", "What motivates you?"],
  },

  // ─── DATA VS INTUITION ────────────────────────────────────────────────────
  {
    id: "data-vs-intuition",
    keywords: [
      "data driven", "data vs intuition", "gut feeling", "quantitative",
      "qualitative", "evidence", "hypothesis", "research vs instinct",
    ],
    response: `Both — but in a specific sequence.

Intuition is useful for forming a hypothesis quickly. Data is useful for testing whether that hypothesis holds. I've seen people fail in both directions: analysts who optimize for the wrong metric because they never built customer empathy, and instinct operators who keep doubling down on ideas the evidence has already rejected.

At Chime, I came in with hypotheses formed by the team — then pressure-tested them with customer adoption data, competitive research, and Jobs-To-Be-Done analysis. The output was stronger because it started with informed intuition and ended with evidence.

Running consumer brands built the other muscle: you talk to customers, observe actual behavior (which almost never matches what they say), and form a view grounded in real human patterns — not just spreadsheet patterns. That combination of empathy and analytical rigour is what I try to bring to every problem.`,
    followUps: ["Tell me about your analytics skills.", "How do you approach user research?", "Tell me about Chime."],
  },

  // ─── WHY MBA ──────────────────────────────────────────────────────────────
  {
    id: "why-mba",
    keywords: [
      "why mba", "why did you do an mba", "reason for mba", "mba decision",
      "go back to school", "carnegie mellon why",
    ],
    response: `I did the MBA because I'd accumulated a lot of operational experience — consulting, VC, founding companies — but I wanted rigorous frameworks to contextualize it.

Specifically, I wanted to understand the formal language of strategy, finance, and marketing at a level that would make me more effective in conversations with senior operators and investors. I could build a contribution margin model from running my own businesses, but I wanted to understand it in the context of corporate finance, capital allocation, and business technology.

I chose Carnegie Mellon's Tepper specifically because of the STEM designation and the quantitative culture. I didn't want an MBA light on rigour. Tepper pushes analytical thinking across every discipline — which matched how I already approached problems.

The MBA also gave me Chime — the internship was a direct product of the program, and my first time operating inside a scaled U.S. tech company. That experience was the one I was most deliberately seeking.`,
    followUps: ["Tell me about Chime.", "Tell me about your analytics background.", "What kind of role are you looking for?"],
  },

  // ─── CAREER TRANSITIONS ───────────────────────────────────────────────────
  {
    id: "gap-or-transition",
    keywords: [
      "gap", "transition", "career change", "switch", "pivot", "explain",
      "why did you leave", "why move", "shift",
    ],
    response: `Every transition in my career was a deliberate choice to add a capability I didn't have yet.

Consulting → VC: I'd learned to analyze businesses from the outside. I wanted to understand how they're built from the inside.

VC → Entrepreneurship: I'd evaluated and advised. I needed to build and be accountable for outcomes, not recommendations.

Entrepreneurship → MBA: I had operational depth. I wanted strategic and analytical frameworks to match it.

MBA/Chime → Rena Pastry: After years building skills in the U.S., I wanted to run a live commercial experiment with everything I'd learned — in my home market.

None of these are gaps. They're a structured curriculum I designed for myself. The through line is the same in every case: understand business from one more angle, and build the range to operate across all of them.`,
    followUps: ["Why is your background so diverse?", "Tell me about Rena Pastry.", "What are you looking for next?"],
  },

  // ─── PROUD OF ─────────────────────────────────────────────────────────────
  {
    id: "proud-of",
    keywords: [
      "most proud", "proudest", "achievement", "accomplishment", "proud of",
      "best work", "biggest win", "highlight",
    ],
    response: `Two things come to mind, for different reasons.

**Professionally:** Repositioning Ini Teh during COVID. The market was contracting, there was no playbook, and I had limited capital. I redesigned target segments, channels, and pricing from first principles — and the business grew 200% while most competitors pulled back. That outcome required every skill I'd built to that point.

**In terms of craft:** The Chime work. Taking complex customer, competitive, and market data — synthesizing it through a Jobs-To-Be-Done lens — and producing analysis clear enough that 9+ stakeholder groups said it directly shaped their decision-making. That's the kind of impact I want my work to have.

The common thread: I'm most proud of work where the output actually changed what people did — not just what they thought.`,
    followUps: ["Tell me about Ini Teh.", "Tell me about Chime.", "What's your superpower?"],
  },

  // ─── CULTURE FIT ──────────────────────────────────────────────────────────
  {
    id: "culture-fit",
    keywords: [
      "culture", "fit", "team fit", "work environment", "company culture",
      "type of company", "startup", "big company", "ideal company",
    ],
    response: `I've operated in very different environments — consulting, VC, three startups, a large fintech — so I know concretely what I work best in.

I thrive where clear thinking is valued over hierarchy, and where the question "why are we doing this?" is welcomed rather than dismissed. I work well with high ownership: give me an outcome, some context, and room to figure it out.

On company stage: I'm most effective at growth-stage companies — past early product-market fit chaos, into the challenge of scaling something that works. That's where analytical rigour, customer empathy, and cross-functional range tend to matter most.

I'm also genuinely comfortable in both U.S. and Southeast Asian business cultures — which is a less common combination than it might sound.`,
    followUps: ["What kind of role are you looking for?", "How do you work with others?", "What motivates you?"],
  },

  // ─── COMMUNICATION ────────────────────────────────────────────────────────
  {
    id: "communication",
    keywords: [
      "communication", "communicate", "presentation", "storytelling",
      "executive", "stakeholder", "write", "writing", "explain complex",
    ],
    response: `Communication is something I've had to do at every level — pitching investors at Ideosource, presenting to 30+ stakeholders at Chime, writing for 1M+ readers on Medium.

The skill I'm proudest of is translating complex analysis into a clear, prioritized point of view for people who are busy and skeptical. At Chime, feedback from 9+ stakeholder groups specifically called out the clarity and prioritization framework I provided. That didn't happen by accident — it came from understanding what each audience needed to make a decision, and stripping everything else out.

I've also written 9 articles on data analytics for Medium, 5 featured in CodeX. Writing for a technical-but-general audience forces you to earn every sentence — which is good practice for any high-stakes communication.`,
    followUps: ["Tell me about your Chime experience.", "Tell me about your Medium articles.", "What's your superpower?"],
  },

  // ─── SALARY ───────────────────────────────────────────────────────────────
  {
    id: "salary",
    keywords: [
      "salary", "compensation", "pay", "how much", "expectations",
      "rate", "package", "total comp",
    ],
    response: `I'd rather have that conversation directly — role scope, stage, location, and total comp structure all factor in.

Reach out at fondairena@gmail.com and I'm happy to have a straightforward conversation about it.`,
    followUps: ["How can I contact you?", "What kind of role are you looking for?", "Download resume."],
  },

  // ─── AVAILABILITY & LOCATION ──────────────────────────────────────────────
  {
    id: "availability",
    keywords: [
      "available", "availability", "start", "when can you start",
      "notice period", "timeline", "currently", "right now",
    ],
    response: `I'm currently running Rena Pastry in Surabaya, which gives me some flexibility on timing for the right opportunity.

For the right role I'm open to discussing start dates directly — reach out at fondairena@gmail.com and we can get into specifics.`,
    followUps: ["How can I contact you?", "What kind of role are you looking for?", "Tell me about Rena Pastry."],
  },
  {
    id: "location",
    keywords: [
      "location", "where are you", "based", "relocate", "remote", "in person",
      "hybrid", "indonesia", "chicago", "us", "southeast asia", "willing to move",
    ],
    response: `I'm currently based in Surabaya, Indonesia, running Rena Pastry.

I have real roots in both the U.S. (Chicago, where I worked at C.H. Johnson and interned at Chime, and studied at Carnegie Mellon) and Southeast Asia — so I'm genuinely comfortable operating in both, not just nominally open to it.

For the right role I'm open to relocation, remote, or hybrid. Best to talk through specifics — fondairena@gmail.com.`,
    followUps: ["What kind of role are you looking for?", "How can I contact you?", "Tell me about your background."],
  },

  // ─── CROSS FUNCTIONAL ─────────────────────────────────────────────────────
  {
    id: "cross-functional",
    keywords: [
      "cross functional", "cross-functional", "work with engineers", "work with designers",
      "product team", "marketing team", "multiple teams", "different functions",
    ],
    response: `Cross-functional work is genuinely where I'm most energized.

At Chime I sat at the intersection of Product, Marketing, Research, and Business Development. The value I added wasn't just the analysis — it was translating between functions with different languages and priorities, and synthesizing it into something everyone could align around.

As a founder you're forced to be cross-functional by necessity. I've been my own marketer, operations lead, financial controller, and customer researcher simultaneously. That experience means I speak the language of multiple disciplines without being condescending about any of them.

The key insight: most cross-functional friction isn't disagreement. It's different teams optimizing for metrics that haven't been reconciled at the top. My instinct is always to find the shared north star first.`,
    followUps: ["Tell me about Chime.", "How do you work with others?", "What's your superpower?"],
  },

  // ─── FALLBACK ─────────────────────────────────────────────────────────────
  {
    id: "fallback",
    keywords: [],
    response: `That's a great question. Let me point you in the right direction.

If you're asking about a specific experience, try the sidebar — each section goes deeper on a particular company or capability area. The Case Study Library has the most detailed project writeups.

You can also reach me directly at fondairena@gmail.com — I'm happy to have a real conversation about anything this portfolio doesn't cover.`,
    followUps: ["Tell me about your background.", "Show me your best projects.", "How can I contact you?"],
  },
];
