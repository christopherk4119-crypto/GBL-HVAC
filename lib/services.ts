import type { IconName } from "@/components/Icons";

export type Service = {
  slug: string;
  short: string; // nav / breadcrumb label
  title: string; // <title>
  h1: string;
  description: string; // meta description, < 155 chars
  promise: string; // one line under the H1
  card: { title: string; blurb: string };
  icon: IconName;
  tone: "warm" | "cool";
  serviceType: string; // schema.org Service.serviceType
  intro: string[];
  signs: { id?: string; title: string; body: string }[];
  steps: { title: string; body: string }[];
  extra: { heading: string; paras: string[]; list?: string[] }[];
  cost: string[];
  related: string[];
};

// Used on every service page's cost section until the client supplies numbers.
const QUOTE_FIRST =
  "We quote before we start. You get the price for the job before any work is done, and you decide whether to go ahead.";

export const SERVICES: Service[] = [
  // ───────────────────────────────── FURNACE REPAIR (money page) ─────────────────────────────────
  {
    slug: "furnace-repair-calgary",
    short: "Furnace Repair",
    title: "Furnace Repair Calgary — 24/7 | GBL HVAC",
    h1: "Furnace Repair in Calgary",
    description:
      "Furnace not working? GBL HVAC repairs gas and electric furnaces across Calgary, 24/7. We answer at 2am. Call 403-970-6988.",
    promise: "No heat? Call now. We answer 24 hours a day — nights, weekends, the coldest night of the year.",
    card: { title: "Heat back on tonight", blurb: "Gas and electric furnace repair, any hour, any day." },
    icon: "flame",
    tone: "warm",
    serviceType: "Furnace repair",
    intro: [
      "A furnace that quits in Calgary isn't an inconvenience. At -25°C a house loses heat fast, and pipes on outside walls are next. We repair gas and electric furnaces across Calgary and the surrounding area, and we pick up the phone at any hour.",
      "Call 403-970-6988 and tell us what the furnace is doing — or not doing. If there's something worth checking while you wait, we'll walk you through it on the phone.",
    ],
    signs: [
      {
        id: "no-heat",
        title: "No heat at all",
        body: "The thermostat is calling for heat and nothing happens. Could be ignition, a tripped safety switch, a failed control board, or the furnace has locked itself out after too many failed starts.",
      },
      {
        id: "cold-air",
        title: "Furnace blowing cold air",
        body: "The fan runs but the air out of the vents is cold or barely warm. Usually the burners aren't lighting or aren't staying lit — a flame sensor, igniter or gas supply problem.",
      },
      {
        id: "short-cycling",
        title: "Furnace keeps shutting off",
        body: "It starts, runs a few minutes, shuts off, and does it again. Common causes are a plugged filter overheating the furnace, a dirty flame sensor, a blocked vent, or a furnace that's too big for the house.",
      },
      {
        id: "banging",
        title: "Banging or booming on startup",
        body: "A bang when the burners light usually means delayed ignition — gas building up for a second before it catches. Don't live with that one. Rattling or scraping points to the blower or a loose panel.",
      },
      {
        title: "Clicking, but it won't light",
        body: "You hear the igniter try and nothing catches. Igniters wear out, and they like to fail on the first hard cold snap when the furnace runs nonstop.",
      },
      {
        title: "Some rooms cold, others fine",
        body: "Could be ductwork, closed or broken dampers, or a blower that isn't moving enough air for the size of the house.",
      },
      {
        title: "Gas bill up, same thermostat setting",
        body: "A furnace working harder for the same heat is telling you something is wearing out.",
      },
    ],
    steps: [
      {
        title: "You call, we answer",
        body: "Tell us what's happening, roughly how old the furnace is, and whether you have any heat at all. That tells us what parts to bring.",
      },
      {
        title: "Find the actual problem",
        body: "We check the thermostat call, power, gas supply, the ignition sequence, flame sensor, pressure switch, limit switches, blower, venting and filter. Most furnace control boards store fault codes — we read them instead of guessing.",
      },
      {
        title: "Tell you what's wrong and what it costs",
        body: "A plain explanation and a price for the fix before any work starts. If the repair isn't worth putting into an old furnace, we'll tell you that too.",
      },
      {
        title: "Fix it and run it",
        body: "After the repair we run the furnace through full heating cycles — lights, holds flame, heats, shuts off — before we call it done.",
      },
    ],
    extra: [
      {
        heading: "Why furnaces fail on the first cold snap",
        paras: [
          "Most of the year a furnace runs in short bursts. The first week it drops to -20°C, it runs almost nonstop. Every weak part gets tested at once: an igniter that was already cracked, a flame sensor coated in residue, blower bearings that have been whining since spring, a filter nobody changed.",
          "That's why the phones ring hardest on the first cold night of the year. If your furnace has started making a new noise or taking longer to light, get it looked at before that night, not during.",
        ],
      },
      {
        heading: "Repair or replace?",
        paras: [
          "Most furnaces are good for somewhere around 15 to 20 years. A cheap part on a 10-year-old furnace is an easy call — fix it. On an older furnace, these are the things that tip it toward replacing:",
        ],
        list: [
          "Age — 15 to 20 years or more, and parts are getting hard to find.",
          "A cracked heat exchanger. That's a safety problem, not a repair.",
          "This is the second or third repair in a couple of winters.",
          "The repair is a big share of what a new furnace costs.",
          "Rooms that have never heated evenly, or gas bills that keep climbing.",
        ],
      },
      {
        heading: "Gas or electric, we fix both",
        paras: [
          "Most Calgary homes heat with a gas furnace. Some condos, suites and older houses run electric furnaces or electric heaters. We work on both, plus the thermostat and ductwork attached to them.",
        ],
      },
    ],
    cost: ["[[PRICING: furnace diagnostic / service call fee]]", QUOTE_FIRST],
    related: ["emergency-hvac-calgary", "furnace-installation-calgary", "hvac-maintenance-calgary"],
  },

  // ───────────────────────────────── FURNACE INSTALLATION ─────────────────────────────────
  {
    slug: "furnace-installation-calgary",
    short: "Furnace Installation",
    title: "Furnace Installation & Replacement Calgary | GBL HVAC",
    h1: "Furnace Installation and Replacement in Calgary",
    description:
      "New gas or electric furnace in Calgary, sized to your house — not the last guy's guess. Straight quote before we start. Call GBL HVAC: 403-970-6988.",
    promise: "A new furnace sized for your house, not the biggest one on the truck.",
    card: { title: "New furnace, installed in a day", blurb: "Gas and electric furnace replacement, sized right." },
    icon: "house",
    tone: "warm",
    serviceType: "Furnace installation",
    intro: [
      "If your furnace is 15 to 20 years old and the repairs keep coming, it's probably time. We install and replace gas and electric furnaces in houses, townhomes and suites across Calgary and the surrounding area.",
      "The brand on the box matters less than you'd think. What matters is that the furnace is the right size for your house and installed properly — venting, gas line, drain, ductwork connections and settings. Get those right and almost any decent furnace will do its job for a long time.",
    ],
    signs: [
      { title: "The furnace is 15–20+ years old", body: "Past that age, every repair is money put into a machine near the end of its life." },
      { title: "A cracked heat exchanger", body: "This is a safety issue. A cracked heat exchanger can let combustion gases into your air. It's a replacement, not a patch." },
      { title: "Repairs every winter", body: "If you've paid for two or three repairs in the last couple of years, the next one is coming." },
      { title: "Rooms that never heat evenly", body: "An undersized or worn-out furnace, or one paired with poor ductwork, leaves cold rooms no matter where the thermostat sits." },
      { title: "Gas bills creeping up", body: "Older mid-efficiency furnaces burn more gas for the same heat than a modern high-efficiency unit." },
      { title: "You're finishing the basement or adding space", body: "More square footage can mean the old furnace isn't enough anymore." },
    ],
    steps: [
      {
        title: "Look at the house, not just the furnace",
        body: "We look at the size of the house, windows, insulation, the existing ductwork and how the rooms heat now. That's how you size a furnace. Matching the old one's rating just repeats the last installer's guess.",
      },
      {
        title: "Quote with options",
        body: "You get a written price for the furnace and the install before anything is booked. If there are a couple of sensible choices, we'll lay them out and tell you which one we'd pick for your house.",
      },
      {
        title: "Changeout day",
        body: "The old furnace comes out, the new one goes in. That means connecting gas, venting, the condensate drain on a high-efficiency unit, ductwork, power and the thermostat. A straight swap is usually a one-day job. [[CONFIRM: typical changeout time]]",
      },
      {
        title: "Start-up and check",
        body: "We fire it up, set it up for your house, and check that it heats, vents and drains the way it should. Then we show you how to change the filter and what to keep clear around the furnace.",
      },
    ],
    extra: [
      {
        heading: "Sizing matters more than brand",
        paras: [
          "A furnace that's too big heats the house in short blasts, shuts off, and starts again. That short cycling wears it out faster, leaves hot and cold spots, and wastes gas. A furnace that's too small runs flat out on the coldest nights and still can't keep up.",
          "Plenty of Calgary houses have a furnace bigger than they need, because the last one was replaced like-for-like without anyone checking. Getting the size right is the single biggest thing you can do for comfort and for how long the new furnace lasts.",
        ],
      },
      {
        heading: "When a 15–20 year old furnace isn't worth repairing",
        paras: [
          "If the furnace is old and the repair is small — an igniter, a flame sensor — fixing it often makes sense. If it's old and the repair is big — a control board, an inducer motor, a blower motor — that money is usually better spent toward a new furnace. If the heat exchanger is cracked, it's done. We'll give you both numbers and you make the call.",
        ],
      },
      {
        heading: "Gas or electric",
        paras: [
          "Most Calgary homes heat with gas. Some suites, condos and smaller spaces use electric furnaces or electric heaters. We install both, and we can talk through a heat pump paired with a gas furnace if you want cooling at the same time.",
        ],
      },
    ],
    cost: ["[[PRICING: furnace replacement price range, if the client wants to publish one]]", QUOTE_FIRST],
    related: ["furnace-repair-calgary", "heat-pump-installation-calgary", "air-conditioning-installation-calgary"],
  },

  // ───────────────────────────────── EMERGENCY (money page) ─────────────────────────────────
  {
    slug: "emergency-hvac-calgary",
    short: "24/7 Emergency",
    title: "24 Hour Emergency HVAC Calgary | GBL HVAC",
    h1: "24 Hour Emergency HVAC Service in Calgary",
    description:
      "No heat in the middle of the night? GBL HVAC answers 24/7 across Calgary — nights, weekends, holidays. Call 403-970-6988 now.",
    promise: "It's 2am, the house is cold, and you need someone to pick up. We pick up.",
    card: { title: "2am and no heat? Call.", blurb: "We answer 24 hours a day, 7 days a week." },
    icon: "clock",
    tone: "warm",
    serviceType: "Emergency HVAC service",
    intro: [
      "Furnaces don't break at convenient times. They break at 11pm on a Sunday when it's -28°C outside. That's exactly when we answer the phone.",
      "We take calls 24 hours a day, 7 days a week, for homes and businesses across Calgary and the surrounding area. Call 403-970-6988, tell us what's happening, and we'll take it from there.",
    ],
    signs: [
      {
        id: "no-heat",
        title: "No heat in winter",
        body: "In a Calgary winter this is an emergency. Indoor temperature drops fast and water pipes on outside walls can freeze.",
      },
      {
        id: "burning-smell",
        title: "Burning smell from the furnace or vents",
        body: "A dusty smell for a few minutes the first time the furnace runs in fall is normal. A smell of burning plastic or electrical burning that doesn't go away is not. Shut the furnace off at the switch and call.",
      },
      {
        id: "thermostat",
        title: "Thermostat not responding",
        body: "Blank screen, won't change, or the furnace ignores it. Sometimes it's batteries. Sometimes it's the wiring or the furnace control board.",
      },
      {
        title: "Loud bang, then nothing",
        body: "A boom on startup followed by the furnace shutting down needs to be looked at before it runs again.",
      },
      {
        title: "Water pooling around the furnace",
        body: "High-efficiency furnaces make water. A plugged or frozen condensate drain can shut the furnace off and leak onto the floor.",
      },
      {
        title: "AC dead in a heat wave",
        body: "Calgary summers are short, but a few days at 30°C+ with the windows shut for wildfire smoke is hard on kids, seniors and pets.",
      },
    ],
    steps: [
      {
        title: "Call 403-970-6988",
        body: "Any hour. Tell us what you're seeing and hearing, and whether you have any heat at all.",
      },
      {
        title: "Quick checks on the phone",
        body: "Some no-heat calls are a tripped breaker or a switch someone bumped. We'll walk you through the checks below so you're not paying for a visit you don't need.",
      },
      {
        title: "We come out",
        body: "If it's not something you can fix from the hallway, we come out, find the problem and tell you what it'll cost before we fix it. [[CONFIRM: how arrival times are communicated]]",
      },
      {
        title: "Heat back on, or a safe plan",
        body: "Most of the time that means fixing it on the spot. If a part has to be ordered, we'll tell you straight and talk through options to keep the house safe and warm until it's in. [[CONFIRM: whether temporary heaters are offered]]",
      },
    ],
    extra: [
      {
        heading: "What to check while you wait",
        paras: ["Do these in order. They take five minutes and sometimes fix the problem outright."],
        list: [
          "Thermostat — set to HEAT, set a few degrees above room temperature. If it has batteries and the screen is blank or dim, change them.",
          "Breaker — find the furnace breaker in your electrical panel. If it's tripped, switch it fully off, then on, once. If it trips again, leave it off and call.",
          "Furnace switch — there's a light-switch-style service switch on or near the furnace, often at the top of the basement stairs. Make sure it's ON. People bump it all the time.",
          "Filter — pull it out. If it's grey and caked, a plugged filter can make the furnace overheat and shut itself off. Replace it, or run without it for a short while until you can get one.",
          "Furnace door — the front panel has a safety switch. If the door isn't fully seated, the furnace won't run.",
          "Outside vents — on high-efficiency furnaces, two white plastic pipes exit the side of the house. After a heavy snowfall, check they aren't buried or iced over.",
        ],
      },
      {
        heading: "When to get out of the house first",
        paras: [
          "If you smell gas, or your carbon monoxide alarm is going off: don't flip switches, don't try to relight anything. Get everyone outside, then call 911 or your gas utility's emergency line from outside. Call us once you're safe.",
        ],
      },
      {
        heading: "What counts as an emergency",
        paras: [
          "No heat when it's cold outside. A burning or electrical smell. A furnace that bangs and shuts down. Water leaking from the furnace. No cooling for someone vulnerable in a heat wave. If you're not sure, call and ask — that's what the phone is for.",
        ],
      },
    ],
    cost: [
      "[[CONFIRM WITH CLIENT: after-hours / weekend rate, or same rate any hour]]",
      QUOTE_FIRST,
    ],
    related: ["furnace-repair-calgary", "ac-repair-calgary", "hvac-maintenance-calgary"],
  },

  // ───────────────────────────────── AC REPAIR ─────────────────────────────────
  {
    slug: "ac-repair-calgary",
    short: "AC Repair",
    title: "AC Repair Calgary | GBL HVAC",
    h1: "Air Conditioning Repair in Calgary",
    description:
      "AC not cooling, iced up or not turning on? GBL HVAC repairs central air, ductless and window units across Calgary. Call 403-970-6988, any hour.",
    promise: "AC quit on the hottest day of the year? Call — we answer 24/7.",
    card: { title: "Cold air again", blurb: "Central AC, ductless and window unit repair." },
    icon: "snow",
    tone: "cool",
    serviceType: "Air conditioning repair",
    intro: [
      "Calgary only gets a handful of truly hot weeks, which is exactly why nobody thinks about the AC until it quits during one. Add wildfire smoke that keeps the windows shut and an upstairs bedroom can hit 30°C by dinner.",
      "We repair central air conditioners, heat pumps in cooling mode, ductless mini splits and window units across Calgary and the surrounding area. Call 403-970-6988 any hour.",
    ],
    signs: [
      {
        id: "not-cooling",
        title: "AC not cooling",
        body: "Fan runs, air comes out, but it isn't cold. Could be low refrigerant from a leak, a failed capacitor so the outdoor unit isn't running, or a dirty coil.",
      },
      {
        id: "ice",
        title: "Ice on the AC unit or lines",
        body: "Frost on the copper line or the indoor coil means something is wrong with airflow or refrigerant charge. Turn the AC off and let it thaw — running it iced up can damage the compressor.",
      },
      {
        title: "Outdoor unit not running",
        body: "Indoor fan is on but the unit outside is silent, or it hums and won't start. Often a capacitor or contactor — common, fixable parts.",
      },
      { title: "Water leaking indoors", body: "A plugged condensate drain or a cracked drain pan. Catch it early before it soaks drywall or flooring." },
      { title: "Breaker keeps tripping", body: "Something is drawing too much power. Don't keep resetting it — that's how compressors get cooked." },
      { title: "New noises", body: "Grinding, squealing or loud buzzing from the outdoor unit usually means a motor or electrical part is on its way out." },
    ],
    steps: [
      { title: "Call and describe it", body: "What it's doing, how old the system is, and whether it's central air, a heat pump, a mini split or a window unit." },
      {
        title: "Diagnose",
        body: "We check the thermostat, power, capacitor and contactor, both fans, the coils, the drain, airflow through the filter and ducts, and refrigerant pressures.",
      },
      { title: "Price before work", body: "You get the price for the fix before we start. If a leak is the problem, we'll explain the options for finding and repairing it versus just topping it up." },
      { title: "Repair and test", body: "Fix it, then run the system and measure the air temperature at the vents so we know it's cooling properly." },
    ],
    extra: [
      {
        heading: "Before you call: two quick checks",
        paras: ["These solve more AC calls than you'd expect."],
        list: [
          "Filter — a plugged furnace filter chokes the airflow your AC needs and can cause the coil to ice up. Replace it.",
          "Breakers and the outdoor disconnect — there's a breaker in the panel and usually a pull-out disconnect box on the wall beside the outdoor unit. Make sure both are on.",
        ],
      },
      {
        heading: "Why topping up refrigerant isn't a fix",
        paras: [
          "An air conditioner is a sealed system. If it's low on refrigerant, it leaked somewhere. Adding more without finding the leak just means you'll be paying for it again next summer. We'll tell you where it's leaking, if it can be found, and what it costs to repair properly.",
        ],
      },
      {
        heading: "Why AC quits on the first hot day",
        paras: [
          "Same story as furnaces in January. The AC sits idle for nine months, then runs all afternoon the first week it hits 30°C. Capacitors that dried out over the winter, a contactor pitted by mice or bugs, a coil caked with cottonwood fluff — they all show up at once. A spring check catches most of it before you need the AC.",
        ],
      },
    ],
    cost: ["[[PRICING: AC diagnostic / service call fee]]", QUOTE_FIRST],
    related: ["air-conditioning-installation-calgary", "heat-pump-installation-calgary", "hvac-maintenance-calgary"],
  },

  // ───────────────────────────────── AC INSTALLATION ─────────────────────────────────
  {
    slug: "air-conditioning-installation-calgary",
    short: "AC Installation",
    title: "AC Installation Calgary | GBL HVAC",
    h1: "Air Conditioning Installation in Calgary",
    description:
      "Central AC added to your furnace, a full AC and furnace system, or a window unit — installed across Calgary. Price before we start. Call 403-970-6988.",
    promise: "Sleep upstairs in July. Central AC added to the furnace you already have.",
    card: { title: "Cool upstairs bedrooms", blurb: "Central AC added to your existing furnace." },
    icon: "snow",
    tone: "cool",
    serviceType: "Air conditioning installation",
    intro: [
      "Lots of Calgary houses were built without air conditioning, because for most of the year you don't need it. Then July comes, the smoke rolls in, the windows stay shut, and nobody upstairs is sleeping.",
      "If you have a forced-air furnace, adding central AC is straightforward: a coil goes on top of the furnace, a condenser goes outside, and the two are connected with refrigerant lines. The furnace fan and ductwork you already have move the cool air.",
    ],
    signs: [
      { title: "Upstairs is unbearable in summer", body: "Heat rises. Bedrooms over a garage or under the roof get it worst." },
      { title: "Smoke days mean windows shut", body: "Central AC lets you keep the house closed and the furnace filter catching what it can." },
      { title: "Your old AC is 15+ years old", body: "Older units use refrigerant that's being phased out, which makes repairs more expensive every year." },
      { title: "Replacing the furnace anyway", body: "Doing the furnace and AC together as one split system means they're matched and you only have one install day." },
      { title: "A single room or suite needs cooling", body: "Not every space needs central air. A window unit or a ductless mini split may make more sense." },
    ],
    steps: [
      {
        title: "Check what you have",
        body: "We look at the furnace, the ductwork and the electrical panel. The furnace blower has to be able to move enough air for the AC, and the ducts have to carry it upstairs.",
      },
      {
        title: "Size it and quote it",
        body: "AC is sized to the house, not guessed. Too big and it cools fast but leaves the house clammy; too small and it runs all afternoon and loses. You get a written price before anything is booked.",
      },
      {
        title: "Install",
        body: "Coil on the furnace, condenser outside on a pad or wall bracket, refrigerant lines, electrical and a drain for the condensation. [[CONFIRM: typical AC install time]]",
      },
      {
        title: "Start-up",
        body: "We charge and test the system, check the air temperature at the vents, and show you how to run it.",
      },
    ],
    extra: [
      {
        heading: "What we install",
        paras: ["Matched to the house and the budget:"],
        list: [
          "Central AC added to an existing furnace.",
          "AC and furnace split system — new furnace and AC installed together.",
          "Heat pump and furnace split system — cools in summer, helps heat in spring and fall.",
          "Ductless mini splits for rooms or suites without ductwork.",
          "Window units for a single room.",
        ],
      },
      {
        heading: "Where the outdoor unit goes",
        paras: [
          "It needs clear airflow, a solid level base, and enough distance from windows and property lines to keep the noise reasonable for you and your neighbour. Calgary gets hail — a spot with some cover from the west helps. We'll pick the spot with you, not just the shortest line run.",
        ],
      },
      {
        heading: "If your furnace is already old",
        paras: [
          "The AC coil sits on top of the furnace and uses the furnace fan. If the furnace is 15 years old or more, it's worth thinking about replacing both together — one install, matched equipment, and you're not tearing the AC coil off again in three years when the furnace goes. We'll price it both ways.",
        ],
      },
    ],
    cost: ["[[PRICING: AC install price range, if published]]", QUOTE_FIRST, "Ask about current rebates — programs change, so we'll check what's available when we quote."],
    related: ["heat-pump-installation-calgary", "ductless-mini-split-calgary", "furnace-installation-calgary"],
  },

  // ───────────────────────────────── HEAT PUMP ─────────────────────────────────
  {
    slug: "heat-pump-installation-calgary",
    short: "Heat Pumps",
    title: "Heat Pump Installation Calgary | GBL HVAC",
    h1: "Heat Pump Installation in Calgary",
    description:
      "Heat pumps that work in Calgary winters — paired with a gas furnace backup for the coldest nights. Cooling in summer too. Call GBL HVAC: 403-970-6988.",
    promise: "Heating and cooling from one outdoor unit — with your gas furnace as backup for -30°C.",
    card: { title: "Heat and AC from one unit", blurb: "Cold-climate heat pumps with a gas backup." },
    icon: "wind",
    tone: "cool",
    serviceType: "Heat pump installation",
    intro: [
      "A heat pump is an air conditioner that also runs in reverse. In summer it pulls heat out of the house. In winter it pulls heat out of the outdoor air and brings it inside — even when it feels like there's no heat out there to pull.",
      "Ten or fifteen years ago, heat pumps in Calgary were a hard sell. They lost steam in real cold. Cold-climate models have changed that, and paired with a gas furnace for backup, they make a lot of sense here.",
    ],
    signs: [
      { title: "You want AC anyway", body: "If you're adding central air, a heat pump costs more up front than a plain AC but gives you heating too." },
      { title: "Your AC needs replacing", body: "Swapping an old AC for a heat pump adds heating with almost no extra work." },
      { title: "You want to burn less gas", body: "The heat pump carries the load through spring, fall and mild winter days, and the furnace only kicks in when it's really cold." },
      { title: "A space with no ductwork", body: "A ductless heat pump (mini split) heats and cools a garage, addition or basement suite without running ducts." },
      { title: "An electric furnace or baseboard house", body: "Heat pumps paired with an air handler can cut down on straight electric heat." },
    ],
    steps: [
      {
        title: "Look at the house and the furnace",
        body: "We check the furnace, ductwork and electrical panel, and talk about how you use the house. That decides whether a heat pump with a gas furnace, a heat pump with an air handler, or a ductless system fits.",
      },
      {
        title: "Size and quote",
        body: "Sized to the house's heating and cooling load. You get a written price before anything is booked.",
      },
      {
        title: "Install",
        body: "Outdoor unit on a raised stand or wall bracket so it stays above the snow, indoor coil on the furnace or a new air handler, refrigerant lines, electrical, and the controls that decide when to switch to gas.",
      },
      {
        title: "Set the switch-over",
        body: "We set the outdoor temperature where the system hands off from heat pump to furnace, and show you how it works.",
      },
    ],
    extra: [
      {
        heading: "Do heat pumps actually work in Calgary winters?",
        paras: [
          "Yes — with the right equipment. Cold-climate heat pumps are built to keep heating well into sub-zero temperatures. Every model has its own rating, so we'll go through the spec for the one we quote you.",
          "In Calgary the smart setup is usually dual fuel: a heat pump paired with a gas furnace. The heat pump does the work most of the year. When it gets properly cold, the furnace takes over. You're never relying on the heat pump alone at -30°C, and you never lose your backup.",
        ],
      },
      {
        heading: "Systems we install",
        paras: [],
        list: [
          "Heat pump and furnace split system (dual fuel).",
          "Heat pump and air handler split system (all-electric).",
          "Ductless mini split heat pumps.",
        ],
      },
      {
        heading: "Rebates",
        paras: [
          "There have been rebate and grant programs for heat pumps, but they change often — they open, close, and change rules. Ask us about current rebates when we quote and we'll check what's available at the time.",
        ],
      },
    ],
    cost: ["[[PRICING: heat pump install price range, if published]]", QUOTE_FIRST],
    related: ["ductless-mini-split-calgary", "air-conditioning-installation-calgary", "furnace-installation-calgary"],
  },

  // ───────────────────────────────── DUCTLESS ─────────────────────────────────
  {
    slug: "ductless-mini-split-calgary",
    short: "Ductless Mini Splits",
    title: "Ductless Mini Split Calgary | GBL HVAC",
    h1: "Ductless Mini Split Systems in Calgary",
    description:
      "Heat and cool a garage, basement suite, addition or bonus room without ductwork. Ductless mini split installs and repairs in Calgary. Call 403-970-6988.",
    promise: "Heat and cool one room or a whole suite — no ductwork needed.",
    card: { title: "Fix the one room that's always cold", blurb: "Ductless heating and cooling, no ducts." },
    icon: "wind",
    tone: "cool",
    serviceType: "Ductless mini split installation and repair",
    intro: [
      "Every house has one: the bonus room over the garage that's freezing in January and an oven in July. The basement suite on its own thermostat fight. The addition the old furnace was never sized for. The garage you'd actually use if it wasn't 5°C in there.",
      "A ductless mini split fixes that without tearing into walls for ductwork. An outdoor unit connects to one or more slim indoor heads through a small hole in the wall. Each head has its own control, so each room gets its own temperature.",
    ],
    signs: [
      { title: "A room that never matches the rest of the house", body: "Bonus rooms, rooms over garages and sunrooms are the usual ones." },
      { title: "Basement or secondary suite", body: "Gives the suite its own heating and cooling and its own control." },
      { title: "Garage or workshop", body: "Heat it in winter, cool it in summer, without running a gas heater." },
      { title: "Addition or renovation", body: "Cheaper than extending ductwork the old furnace may not have the capacity for anyway." },
      { title: "A house with no ducts", body: "Houses heated by boilers or baseboards can add cooling — and efficient heat — with ductless heads." },
    ],
    steps: [
      {
        title: "Decide where the heads go",
        body: "We look at the rooms, where the outdoor unit can sit, and how the lines and drain will run. One outdoor unit can feed one head or several.",
      },
      {
        title: "Quote",
        body: "A written price for the equipment and install before anything is booked.",
      },
      {
        title: "Install",
        body: "Indoor head mounted on the wall, a small hole through to the outside for the refrigerant lines, power and drain, outdoor unit on a stand or bracket above the snow line.",
      },
      {
        title: "Start-up and walk-through",
        body: "We test heating and cooling, and show you the remote and how to clean the filters — usually a two-minute job you'll do every month or two.",
      },
    ],
    extra: [
      {
        heading: "Repair and maintenance too",
        paras: [
          "Already have a mini split that's stopped heating or cooling, blinking an error code, or leaking water? We repair them. Dirty indoor filters and coils are the number one reason they lose output — regular cleaning keeps them working.",
        ],
      },
      {
        heading: "Will it heat in winter?",
        paras: [
          "Ductless mini splits are heat pumps. Cold-climate models are built to keep heating in sub-zero weather, and each model is rated differently, so we'll show you the spec for the one we quote. For a space you rely on all winter, we'll talk about whether you need a backup heat source too.",
        ],
      },
      {
        heading: "One head or several?",
        paras: [
          "One outdoor unit can run a single indoor head or several, each in its own room with its own remote. A single head is the simplest fix for one problem room. A basement suite might want one head in the living area and one in the bedroom. More heads means more cost, so we'll only suggest what the space actually needs — and we'll tell you if a single head can cover it.",
          "Heads usually mount high on a wall. There are also floor-mounted and ceiling cassette styles for rooms where a wall unit won't work.",
        ],
      },
    ],
    cost: ["[[PRICING: mini split price range, if published]]", QUOTE_FIRST, "Ask about current rebates when we quote."],
    related: ["heat-pump-installation-calgary", "air-conditioning-installation-calgary", "ac-repair-calgary"],
  },

  // ───────────────────────────────── DUCT CLEANING ─────────────────────────────────
  {
    slug: "duct-cleaning-calgary",
    short: "Duct Cleaning",
    title: "Air Duct Cleaning Calgary | GBL HVAC",
    h1: "Air Duct Cleaning in Calgary",
    description:
      "Air duct cleaning in Calgary after renos, new builds or a move-in — and a straight answer on whether you need it at all. Call GBL HVAC: 403-970-6988.",
    promise: "Ducts cleaned when they need it — and a straight answer when they don't.",
    card: { title: "Clear out the reno dust", blurb: "Duct cleaning after renos, new builds and move-ins." },
    icon: "duct",
    tone: "cool",
    serviceType: "Air duct cleaning",
    intro: [
      "Duct cleaning gets oversold. Not every house needs it every year. But some situations really do call for it, and when they do, it makes a difference you can see on the filter.",
      "We clean and repair air ducts across Calgary and the surrounding area, and we'll tell you honestly whether yours need it.",
    ],
    signs: [
      { title: "After a renovation", body: "Drywall dust gets everywhere, especially into return air ducts. It ends up in the furnace and back in the air." },
      { title: "New build or recent construction", body: "Construction debris in the ducts is common in new houses." },
      { title: "You just moved in", body: "You don't know what's in there — previous owners' pets, smoke, years of dust." },
      { title: "Visible dust blowing from the vents", body: "Or dust collecting quickly on the registers right after you clean them." },
      { title: "Signs of mice or insects", body: "Droppings or nesting material in ducts should come out." },
      { title: "The furnace filter plugs up fast", body: "If a fresh filter is grey within a few weeks, there's a lot of dust circulating." },
    ],
    steps: [
      {
        title: "Look first",
        body: "We pull a few registers and look inside the ducts and the furnace blower compartment. If they're clean, we'll say so.",
      },
      {
        title: "Clean supply and return runs",
        body: "Supply and return ducts are cleaned out, along with the registers and grilles. [[CONFIRM: duct cleaning method and equipment used]]",
      },
      {
        title: "Clean the furnace side",
        body: "The blower compartment collects what the ducts send it. A dirty blower wheel moves less air and works harder.",
      },
      {
        title: "Fresh filter",
        body: "A new filter goes in so the dust you just got rid of doesn't build back up right away.",
      },
    ],
    extra: [
      {
        heading: "When you probably don't need it",
        paras: [
          "If the house is older, nobody's done a reno lately, there are no pets or allergies, the filter gets changed on schedule and the registers look clean, your ducts are probably fine. Spend the money on a furnace tune-up instead.",
        ],
      },
      {
        heading: "What duct cleaning won't fix",
        paras: [
          "It won't fix a room that never gets heat — that's usually ductwork design, a closed damper, or a disconnected run. It won't fix a furnace problem. And on its own it isn't a cure for allergies.",
          "In most houses, a decent filter changed on schedule does more for the air than any one cleaning. If dust is the complaint, we'll look at the filter, the return air and any gaps in the ductwork pulling in dust from the basement or attic before we sell you a cleaning.",
          "Calgary is dry and dusty, and plenty of neighbourhoods have construction going on next door for years. If that's you, check and change the filter more often than the box says.",
        ],
      },
      {
        heading: "Duct repair",
        paras: [
          "While we're in there, we also look for disconnected or leaking ducts — common in basements and attics. A disconnected run can be why one room never gets heat. We repair ductwork as well as cleaning it.",
        ],
      },
    ],
    cost: ["[[PRICING: duct cleaning price, if published]]", QUOTE_FIRST],
    related: ["hvac-maintenance-calgary", "furnace-repair-calgary", "furnace-installation-calgary"],
  },

  // ───────────────────────────────── MAINTENANCE ─────────────────────────────────
  {
    slug: "hvac-maintenance-calgary",
    short: "Maintenance",
    title: "HVAC Maintenance Calgary | GBL HVAC",
    h1: "HVAC Maintenance and Tune-Ups in Calgary",
    description:
      "Furnace and AC tune-ups in Calgary. Catch the worn igniter or dirty sensor in September, not on the first -25°C night. Call GBL HVAC: 403-970-6988.",
    promise: "Catch problems in September, not on the first -25°C night.",
    card: { title: "Catch problems before the cold does", blurb: "Furnace and AC tune-ups, done before the season." },
    icon: "wrench",
    tone: "warm",
    serviceType: "HVAC maintenance",
    intro: [
      "Most no-heat calls on the first cold night are parts that were already failing in September. A worn igniter, a coated flame sensor, a plugged drain, a blower motor that's been getting louder. A tune-up finds those while you still have time to fix them on your schedule.",
      "We maintain gas and electric furnaces, air conditioners, heat pumps, ductless mini splits, heaters and air ducts across Calgary and the surrounding area.",
    ],
    signs: [
      { title: "No service in a year or more", body: "Once a year is the standard for a furnace. AC and heat pumps benefit from a spring check." },
      { title: "The furnace is getting louder", body: "New noises are worn parts announcing themselves." },
      { title: "Slow to light or short cycling", body: "Classic signs of a dirty flame sensor or airflow problem — cheap to fix now." },
      { title: "Bills creeping up", body: "Dirty burners, coils and blowers all cost efficiency." },
      { title: "You just bought the house", body: "Find out what you've got and what shape it's in before winter." },
    ],
    steps: [
      {
        title: "Furnace check",
        body: "Burners, ignition, flame sensor, heat exchanger inspection, pressure and limit switches, venting, gas pressure, condensate drain on high-efficiency units, blower and motor.",
      },
      {
        title: "AC or heat pump check",
        body: "Outdoor coil, capacitor and contactor, fan motor, refrigerant pressures, indoor coil and drain, airflow.",
      },
      {
        title: "Thermostat and airflow",
        body: "Thermostat operation, filter, return air, and whether every room is getting air.",
      },
      {
        title: "Straight report",
        body: "What we found, what's fine, what's worn, and what can wait. No list of upsells — just what you need to know.",
      },
    ],
    extra: [
      {
        heading: "When to book",
        paras: [
          "Furnace: late summer or early fall, before you switch the heat on for good. Once the first cold snap hits, everyone calls at once. AC and heat pump: spring, before the first hot week.",
        ],
      },
      {
        heading: "What a tune-up actually catches",
        paras: ["These are the problems that turn into no-heat calls in January:"],
        list: [
          "A dirty flame sensor — the most common reason a furnace lights, runs a few seconds, then shuts off.",
          "A cracked or worn igniter that's one cold night from failing.",
          "A plugged condensate trap or drain on a high-efficiency furnace, which shuts the furnace down.",
          "A weak capacitor on the blower or AC — a cheap part that takes the whole system down when it goes.",
          "Loose or burnt wiring connections.",
          "Rust, cracks or soot around the heat exchanger and burners.",
          "Blocked intake or exhaust pipes — birds' nests in summer, snow and ice in winter.",
        ],
      },
      {
        heading: "Things you can do between visits",
        paras: [],
        list: [
          "Change the furnace filter every 1–3 months. Mark the date on it.",
          "Keep 2–3 feet clear around the furnace. No boxes, no laundry.",
          "After heavy snow, check the white intake and exhaust pipes outside aren't buried.",
          "Hose the outdoor AC coil gently in spring and keep plants trimmed back.",
          "Test your carbon monoxide alarm.",
        ],
      },
      {
        heading: "Maintenance plans",
        paras: ["[[CONFIRM: does GBL HVAC offer a maintenance plan? If yes, describe it here. If no, delete this section.]]"],
      },
    ],
    cost: ["[[PRICING: tune-up price, if published]]", QUOTE_FIRST],
    related: ["furnace-repair-calgary", "duct-cleaning-calgary", "ac-repair-calgary"],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const serviceHref = (slug: string) => `/services/${slug}`;
