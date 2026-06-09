/**
 * FONDA'S RESPONSE LIBRARY
 *
 * Each entry has:
 *   - id: unique key
 *   - keywords: words/phrases that trigger this response (lowercase)
 *   - response: what Fonda says — edit these to match your real voice & background
 *   - followUps: suggested next questions to keep the conversation going
 */

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
    ],
    response: `My background looks non-linear on paper, but every chapter was intentional.

I started in consulting to learn structured thinking — how to break down messy problems and communicate clearly to senior stakeholders. From there, I moved into venture capital because I wanted to understand how businesses are built from the ground up, not just how they're fixed.

Entrepreneurship came next. I needed to go beyond advising and actually build something myself — that's where Rena Pastry came from. It taught me things no MBA or consulting project ever could: unit economics, customer psychology, the gap between strategy and execution.

Chime brought everything together. It was my first chance to apply product thinking, growth strategy, and analytics inside a scaled fintech company.

Each chapter added a new lens. Together, they let me see business end-to-end — from the 30,000-foot strategic view down to the messy operational reality.`,
    followUps: ["What did you learn from entrepreneurship?", "Tell me about Chime.", "What's your superpower?"],
  },
  {
    id: "connecting-dots",
    keywords: [
      "connecting", "dots", "thread", "through line", "ties together",
      "common", "pattern", "narrative", "story",
    ],
    response: `The thread running through everything is customer understanding.

Whether I was doing due diligence on a startup in VC, building a pastry brand, or analyzing product funnels at Chime — the question was always the same: what does this person actually need, and is this business meeting that need better than anyone else?

Consulting taught me frameworks. VC taught me pattern recognition across industries. Entrepreneurship taught me that customers behave differently than they tell you they will. Chime taught me how to turn those insights into product decisions at scale.

I think of myself as someone who translates between levels — I can sit in a strategy session and then walk down the hall and talk to an engineer about implementation. That range is the product of having operated in so many different contexts.`,
    followUps: ["What does systems thinking mean to you?", "Tell me about your consulting work.", "What's your approach to strategy?"],
  },
  {
    id: "superpower",
    keywords: [
      "superpower", "best at", "strongest", "top skill", "most valuable",
      "differentiated", "unique", "stand out", "special",
    ],
    response: `Synthesis. I'm unusually good at taking information from different domains — a customer insight, a competitive signal, a financial constraint — and seeing how they connect into one coherent picture.

Most people are strong in one lane: deep operators, sharp strategists, or technical builders. I've been forced by circumstance to operate across all three, and I've developed the ability to move fluidly between them without losing the thread.

In practice, that means I can walk into a business problem I've never seen before and quickly structure what's known, what's unknown, and what actually matters. That's a consulting muscle. But I can also roll my sleeves up and figure out the unit economics, talk to customers, and write the brief — because I've had to do all of it at some point.`,
    followUps: ["Show me an example of that in a project.", "What's your approach to ambiguous problems?", "Tell me about your analytics skills."],
  },

  // ─── SPECIFIC EXPERIENCES ─────────────────────────────────────────────────
  {
    id: "consulting",
    keywords: [
      "consulting", "consultant", "consulting work", "advisory", "why consulting",
      "mckinsey", "bain", "bcg", "deloitte", "strategy consulting",
    ],
    response: `Consulting was my foundation. It trained me to do two things really well: structure ambiguous problems quickly, and communicate findings to people who are skeptical and time-poor.

[Add 2–3 sentences about your specific firm and what type of work you did — industry, project types, client sizes.]

The biggest thing I took away was intellectual honesty. Good consulting isn't about confirming what the client already believes — it's about following the data even when it's uncomfortable, and building a case so airtight that even resistant stakeholders have to engage with it.

That rigour shows up in everything I do now — how I frame a product opportunity, how I structure a growth hypothesis, how I present a recommendation.`,
    followUps: ["What kind of clients did you work with?", "How does consulting experience help in product roles?", "Tell me about a specific consulting project."],
  },
  {
    id: "venture-capital",
    keywords: [
      "venture", "vc", "venture capital", "investing", "startups", "investment",
      "portfolio", "fund", "investor",
    ],
    response: `VC gave me pattern recognition that I can't get anywhere else. When you're evaluating 10–15 companies a week across different sectors, you develop an instinct for what makes a business fundamentally defensible versus what's just noise.

[Add details about the fund — stage, sector focus, your role in sourcing vs. diligence vs. portfolio support.]

The most valuable skill I developed was learning to ask the right questions fast. In a 30-minute founder meeting, you need to quickly probe market size, competitive moat, team capability, and unit economics — and synthesize it into a clear view. That's a muscle that directly transfers to product and strategy work.

I also got deeply fluent in business models — SaaS, marketplace, DTC, fintech — which helps me think about growth and monetization in a more nuanced way than someone who's only seen one type.`,
    followUps: ["What sectors did you focus on?", "How has VC shaped how you think about product?", "Tell me about Chime."],
  },
  {
    id: "chime",
    keywords: [
      "chime", "fintech", "neobank", "banking", "financial", "product manager",
      "pm", "chime work", "at chime",
    ],
    response: `Chime was where everything came together.

[Add your specific role title and team here.]

[Add 2–3 sentences about what you actually worked on — specific product areas, initiatives, or problems you owned.]

The thing that challenged me most at Chime was the scale. When a decision affects millions of customers, the stakes of getting it wrong are real — and you can't rely on intuition. I learned to be much more rigorous about research, much more careful about how I designed experiments, and much more precise in how I translated insights into requirements.

[Add a specific metric or outcome here — e.g. "The project I'm most proud of improved X by Y%".]`,
    followUps: ["What did you work on specifically at Chime?", "How did you approach product research?", "Tell me about your analytics skills."],
  },
  {
    id: "entrepreneurship",
    keywords: [
      "entrepreneur", "entrepreneurship", "founder", "rena", "pastry", "rena pastry",
      "started", "own business", "built", "brand", "consumer brand",
    ],
    response: `Starting Rena Pastry was the hardest and most clarifying thing I've done professionally.

[Add a couple of sentences about what Rena Pastry is/was — what you sold, who you sold to, how you built it.]

The humbling part was realizing how different execution is from strategy. In consulting, I could recommend a pricing strategy in a deck. As a founder, I had to set the prices, test them with real customers, watch them not work, and figure out why. The feedback loop is immediate and personal in a way that consulting never is.

I learned unit economics the hard way — every batch of product had a real cost, every customer acquisition had a price. That ground-level fluency with business fundamentals is something I carry into every role now.

[Add any metrics — revenue, customers, channels, growth — if you have them.]`,
    followUps: ["What's the biggest lesson from Rena Pastry?", "How does entrepreneurship inform how you think about growth?", "Tell me about your consumer brand experience."],
  },
  {
    id: "mba",
    keywords: [
      "mba", "carnegie mellon", "tepper", "business school", "grad school",
      "masters", "degree", "school", "education",
    ],
    response: `Carnegie Mellon's Tepper School gave me the strategic frameworks to contextualize everything I'd done operationally.

[Add 2–3 sentences about what you focused on — concentrations, key courses, standout projects or case competitions.]

The most useful thing wasn't any single framework — it was learning how to learn a new industry quickly. Case-based learning forces you to absorb a new context and make defensible decisions in 48 hours. That's a skill that's directly relevant to consulting and product work.

I was also exposed to a strong analytical culture at Tepper, which reinforced my instinct to reach for data before reaching for intuition.`,
    followUps: ["What did you study at CMU?", "Tell me about your analytics background.", "How did the MBA shape your thinking?"],
  },

  // ─── SKILLS & CAPABILITIES ────────────────────────────────────────────────
  {
    id: "strategy",
    keywords: [
      "strategy", "strategic", "market sizing", "competitive", "framework",
      "analysis", "market", "competitive analysis", "strategic thinking",
    ],
    response: `Strategy to me is the discipline of making clear choices about where to compete and how to win — and being honest about what you're giving up.

My strategic toolkit comes from three places: consulting (structured frameworks for market sizing, competitive positioning, and prioritization), VC (pattern recognition across business models), and Chime (translating strategy into roadmap decisions with real trade-offs).

[Add a specific example — a market sizing project, a competitive analysis, an opportunity assessment you've done.]

I'm a big believer that strategy without execution is just storytelling. The best strategic work I've done has always been tightly linked to the operational realities of what a team can actually build.`,
    followUps: ["Show me an example of strategic work.", "Tell me about your VC experience.", "What's your approach to market sizing?"],
  },
  {
    id: "growth",
    keywords: [
      "growth", "gtm", "go to market", "acquisition", "retention", "pricing",
      "customer", "segmentation", "marketing", "growth strategy", "scale",
    ],
    response: `I think about growth in three layers: who you're targeting, how you reach them, and why they stay.

Most growth problems I've seen aren't acquisition problems — they're retention or activation problems wearing an acquisition costume. Before investing in top-of-funnel, I always ask whether the product is actually delivering value to the customers you already have.

[Add a specific growth example — a GTM strategy, a pricing test, a segmentation exercise you've done at one of your companies.]

My consumer brand experience at Rena Pastry gave me an especially practical lens. When your CAC comes out of your own pocket, you get very focused very fast on which channels actually convert and which customers actually stick.`,
    followUps: ["Tell me about Rena Pastry.", "How do you approach customer segmentation?", "Tell me about your product experience."],
  },
  {
    id: "product",
    keywords: [
      "product", "product manager", "pm", "product thinking", "roadmap",
      "jtbd", "jobs to be done", "user research", "product sense",
      "product development", "lifecycle",
    ],
    response: `My product philosophy starts with jobs-to-be-done: what is the person actually trying to accomplish, and what's getting in their way?

At Chime, I got to apply this in a high-stakes environment where product decisions affected millions of people's financial lives. [Add what you specifically owned — a feature, a surface, a lifecycle stage.]

My process usually looks like: talk to customers first (not surveys — real conversations), look at the data second, form a hypothesis, build the smallest thing that tests it, and iterate. I'm skeptical of big-bang launches and much more interested in learning cycles.

[Add any specific product outcomes or metrics you're proud of.]`,
    followUps: ["How do you approach user research?", "Tell me about your analytics skills.", "What's your best project?"],
  },
  {
    id: "analytics",
    keywords: [
      "analytics", "data", "sql", "python", "tableau", "looker", "analysis",
      "quantitative", "metrics", "data analysis", "technical", "numbers",
    ],
    response: `I'm comfortable getting into the data myself — I don't need a data team to run every query for me.

My toolkit: SQL for most ad hoc analysis, Python (pandas, matplotlib) for anything that needs more manipulation or visualization, and Tableau / Looker for dashboards and sharing findings with stakeholders.

[Add a specific example — a Python analysis you did, a dashboard you built, a data-driven insight that changed a decision.]

I've also written about data and analytics on Medium. [Add link or mention specific articles if relevant.]

What I care about beyond the technical side is making sure the analysis actually changes a decision. A beautiful chart that nobody acts on isn't worth building.`,
    followUps: ["Tell me about your Medium articles.", "Show me a project that used data.", "What's your approach to presenting data?"],
  },
  {
    id: "operations",
    keywords: [
      "operations", "ops", "operational", "supply chain", "vendor", "unit economics",
      "process", "execution", "logistics",
    ],
    response: `My operations chops come primarily from building Rena Pastry from scratch — managing suppliers, negotiating unit costs, running production, and figuring out how to do more with less.

[Add any operations experience from consulting or other roles.]

What I learned is that operations is where strategy either survives or dies. The best-laid plan hits a wall when the supplier raises prices or a process takes three times longer than estimated. Building operational resilience — knowing where your margins are, which vendors are risks, what can be simplified — is as strategic a job as any market-sizing exercise.`,
    followUps: ["Tell me about Rena Pastry.", "How do you think about unit economics?", "Tell me about your finance background."],
  },
  {
    id: "finance",
    keywords: [
      "finance", "financial", "modeling", "excel", "accounting", "p&l",
      "revenue", "cost", "budget", "unit economics", "financial modeling",
    ],
    response: `Finance is the language of business, and I made sure to become fluent in it.

In consulting, I built financial models for clients across industries — revenue projections, cost optimization analyses, business case modeling. [Add a specific type of model or analysis if relevant.]

In VC, I got comfortable reading cap tables, evaluating burn rates, and stress-testing business model assumptions.

Running Rena Pastry gave me the most honest financial education — when it's your own money, you understand contribution margin and payback periods in a way no course can teach.

[Add any specific finance skills — three-statement modeling, valuation, DCF, etc.]`,
    followUps: ["Tell me about your VC experience.", "How do you think about unit economics?", "Show me your best analytical project."],
  },

  // ─── PROJECTS ─────────────────────────────────────────────────────────────
  {
    id: "best-projects",
    keywords: [
      "best project", "projects", "case study", "work examples", "portfolio",
      "show me", "examples", "what have you built", "proud of",
    ],
    response: `Here are the projects I'm most proud of:

**[Project 1 — Add name]**
[2–3 sentences: context, what you did, the outcome or impact.]

**[Project 2 — Add name]**
[2–3 sentences: context, what you did, the outcome or impact.]

**[Project 3 — Add name]**
[2–3 sentences: context, what you did, the outcome or impact.]

Each one is documented in the Case Study Library with the full context → problem → approach → insight → impact breakdown. Want me to walk you through any of these in more detail?`,
    followUps: ["Tell me about your Chime work.", "Show me an analytics project.", "Tell me about Rena Pastry."],
  },

  // ─── MOTIVATION & PERSONALITY ─────────────────────────────────────────────
  {
    id: "motivation",
    keywords: [
      "motivate", "motivation", "why", "passion", "drive", "what gets you",
      "excited", "care about", "love about", "enjoy",
    ],
    response: `Honestly? I'm most energized when I'm working on something where the answer isn't obvious yet.

I love the early stage of a problem — when there's real ambiguity and the team is still figuring out what question to even ask. That's where structured thinking, customer empathy, and comfort with uncertainty matter most, and it's where I tend to do my best work.

I also care a lot about the human side of business — understanding why people make the decisions they do, what jobs they're trying to get done, and what actually changes behavior. That thread runs through everything from VC diligence to product research to building a consumer brand.

[Add anything personal here — a specific mission, an industry you care about, a problem you want to work on.]`,
    followUps: ["What kind of role are you looking for?", "What's your ideal work environment?", "Tell me something people don't know about you."],
  },
  {
    id: "fun-personal",
    keywords: [
      "personal", "outside work", "hobbies", "fun", "interesting",
      "people don't know", "surprising", "dessert", "food", "favorite",
    ],
    response: `People are sometimes surprised to learn I started a pastry business — it's not the most obvious move for someone with a consulting and VC background. But I think that's kind of the point. I learn by doing, and I wanted to understand consumer behavior and brand-building from the inside out.

[Add something genuinely personal here — a hobby, an interest, something unexpected about you that creates a human connection.]

I also write occasionally on Medium when I have something worth saying — usually about data, business models, or things I've learned the hard way. [Add Medium link if relevant.]`,
    followUps: ["Tell me about Rena Pastry.", "What motivates you?", "Tell me about your articles."],
  },

  // ─── LOGISTICS ────────────────────────────────────────────────────────────
  {
    id: "resume",
    keywords: ["resume", "cv", "download", "pdf", "full history", "timeline"],
    response: `You can download my full resume from the Resume page — it has the complete timeline with all roles and key achievements.

Head to **Resume** in the sidebar, or I can answer any specific questions about my background here.`,
    followUps: ["Tell me about your most recent role.", "What are you looking for next?", "Why consulting?"],
  },
  {
    id: "contact",
    keywords: [
      "contact", "reach out", "get in touch", "email", "connect", "linkedin",
      "talk", "meeting", "coffee chat", "hire", "available",
    ],
    response: `I'd love to connect. The best way to reach me is through the Contact page in the sidebar — you'll find my email and LinkedIn there.

[Add any preference for how people should reach you — e.g., "I check LinkedIn most often" or "Email is best for longer conversations."]

If you're evaluating me for a role or project, I'm happy to do a short call to see if there's a fit.`,
    followUps: ["What kind of role are you looking for?", "Download resume.", "Tell me about your availability."],
  },
  {
    id: "looking-for",
    keywords: [
      "looking for", "next role", "job search", "open to", "interested in",
      "what kind of role", "ideal role", "target", "job",
    ],
    response: `I'm most interested in roles at the intersection of strategy, product, and growth — places where I can use the full range of what I've built.

[Be specific here — type of company (startup? growth-stage? enterprise?), stage, industry, role type (product, strategy, chief of staff, growth?), team size, etc.]

I'm particularly drawn to companies that are past the "do we have product-market fit" stage and into the "how do we scale this thoughtfully" stage. That's where my mix of analytical rigour, customer intuition, and operational experience tends to add the most value.

The best opportunities for me are usually ones where I'd be one of the more generalist people on a specialized team — someone who can translate between functions and keep the customer in view at every decision point.`,
    followUps: ["Tell me about your background.", "What's your superpower?", "How can I contact you?"],
  },
  {
    id: "industries",
    keywords: [
      "industries", "sectors", "experience in", "worked in", "which industries",
      "what industries",
    ],
    response: `I've worked across a range of industries, which I think is actually an advantage:

**Fintech** — Chime, where I worked on consumer financial products at scale.

**Venture Capital** — [Add sector focus of the fund(s) you worked at — e.g., "B2B SaaS and marketplace businesses, primarily Series A–B."]

**Consumer / Food & Beverage** — Rena Pastry and [add any other consumer brands].

**Management Consulting** — [Add industries you served — e.g., "Healthcare, retail, and financial services."]

The cross-industry experience means I bring outside analogies into every problem — which is often where the most interesting insights come from.`,
    followUps: ["Tell me about your fintech experience.", "Why consulting?", "What kind of role are you looking for?"],
  },

  // ─── FALLBACK ─────────────────────────────────────────────────────────────
  {
    id: "fallback",
    keywords: [],
    response: `That's a great question — let me point you in the right direction.

If you're asking about a specific experience or project, try the sidebar navigation — each section goes deeper on a particular area. The Case Study Library has the most detailed project writeups.

For anything else, the best way to get a real answer is to reach out directly through the Contact page. I'd love to have an actual conversation.`,
    followUps: ["Tell me about your background.", "Show me your best projects.", "How can I contact you?"],
  },
];
