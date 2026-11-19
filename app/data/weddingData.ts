export interface HeroContent {
  eyebrow: string;
  invite: string;
  groomName: string;
  brideName: string;
  tagline: string;
}

export interface CountdownContent {
  targetDate: string; // ISO date + time, e.g. "2026-12-10T09:00:00+05:30"
  lead: [string, string];
  between: [string, string];
  closer: string;
  announce: [string, string, string];
}

export interface TimelineMilestone {
  title: string;
  start: string;
  icon: "welcome" | "rings" | "photos" | "meal" | "flowers" | "ceremony" | "blessings" |"Hamburger" | "PartyPopper" | "Heart";
}

export interface EventItem {
  id: string;
  title: string;
  tagline: string; // short romantic line under the title
  start: string; // ISO date + time with India offset, e.g. "2026-12-13T18:30:00+05:30"
  end?: string;
  time?: string; // custom display time, e.g. "6:00 PM onwards"
  place: string; // place name shown on the card
  image: string; // background photo in /public, e.g. "/event-engagement.jpg" (gradient shows if the file is missing)
  mapQuery?: string; // optional: different map pin for this event (otherwise the main venue is used)
  art?: "engagement" | "wedding";
  contentPosition?: "top" | "bottom";
  timeline?: TimelineMilestone[];
}

export interface VenueInfo {
  name: string;
  address: string;
  mapQuery: string; // what Google Maps should search / pin, e.g. "Hotel Name, City"
  mapLink?: string;
  coordinates?: string;
}

export interface EventsSectionContent {
  eyebrow: string;
  title: string;
  note: string;
}

export interface WeddingData {
  title: string;
  groom: string;
  bride: string;
  quote: [string, string];
  date: string;
  hero: HeroContent;
  countdown: CountdownContent;
  eventsSection: EventsSectionContent;
  events: EventItem[];
  venue: VenueInfo;
}

// Edit your wedding details here
export const weddingData: WeddingData = {
  // opening card
  title: "OUR FOREVER BEGINS",
  groom: "Balaji",
  bride: "Harsa",
  quote: ["One moment brought us together,", "One love will carry us Forever"],
  date: "Date to be added", // e.g. "14 February 2027"

  // hero section
  hero: {
    eyebrow: "WITH LOVE & BLESSINGS",
    invite: "We invite you to celebrate the beautiful beginning of our forever.",
    groomName: "Balaji",
    brideName: "Harsa Vardine",
    tagline: "From this moment, for all our tomorrows.",
  },

  // countdown (shown inside the hero, below the tagline)
  countdown: {
    // ⚠️ PLACEHOLDER - change to your real wedding date and time (keep +05:30 for India time)
    targetDate: "2026-12-14T09:00:00+05:30", // marriage day (time is a placeholder)
    lead: ["Diwali will fill the skies with light,", "and the New Year will bring a new beginning."],
    between: ["And somewhere between all these beautiful", "celebrations..."],
    closer: "Our Own Celebration Is Getting Closer. 💍",
    announce: ["The Countdown To","Harsa Weds Balaji", "Has Officially Begun."]
  },

  // events + venue section
  eventsSection: {
    eyebrow: "THE CELEBRATION",
    title: "Save the Dates",
    note: "We would be honoured to have you with us on these days.",
  },

  // ⚠️ Dates are from you (13 and 14 Dec). Times, places and photos are PLACEHOLDERS - please change.
  // Put your photos in /public with the file names below (or change the names).
  events: [
    {
      id: "engagement",
      title: "Engagement & Reception",
      tagline: "Two hearts, one promise",
      start: "2026-12-13T18:00:00+05:30",
      end: "2026-12-13T21:30:00+05:30",
      time: "6:00 PM onwards",
      place: "Arunachalam Kamalambal",
      image: "/event-reception.jpg",
      art: "engagement",
      contentPosition: "top",
      timeline: [
        { title: "Welcome & arrivals", icon: "welcome", start: "2026-12-13T18:00:00+05:30" },
        { title: "Ring exchange", icon: "rings", start: "2026-12-13T18:30:00+05:30" },
        { title: "Photos with the couple", icon: "photos", start: "2026-12-13T19:00:00+05:30" },
        { title: "Dinner", icon: "meal", start: "2026-12-13T19:30:00+05:30" },
      ],
    },
    {
      id: "marriage",
      title: "Wedding Ceremony",
      tagline: "Two hearts, one forever",
      start: "2026-12-14T09:00:00+05:30",
      end: "2026-12-14T10:30:00+05:30",
      time: "9:00 AM – 10:30 AM",
      place: "Arunachalam Kamalambal",
      image: "/event-wedding.jpg",
      art: "wedding",
      contentPosition: "bottom",
      timeline: [
        { title: "Nandhi Hoom(rituals)", icon: "welcome", start: "2026-12-14T07:00:00+05:30" },
        { title: "Breakfast", icon: "Hamburger", start: "2026-12-14T07:30:00+05:30" },
        { title: "Groom Welcome", icon: "PartyPopper", start: "2026-12-14T09:00:00+05:30" },
        { title: "Wedding", icon: "Heart", start: "2026-12-14T09:30:00+05:30" },
        { title: "Wedding Rituals", icon: "blessings", start: "2026-12-14T11:00:00+05:30" },
        { title: "Lunch", icon: "meal", start: "2026-12-14T12:00:00+05:30" },
      ],
    },
  ],

  venue: {
    name: "Arunachalam Kamalambal",
    address: "Arunachalam Kamalambal Kalyana Mandapam, Tamil Nadu",
    mapQuery: "Arunachalam Kamalambal",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Arunachalam+Kamalambal",
  },
};
