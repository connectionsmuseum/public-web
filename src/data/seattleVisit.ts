const day = "Sunday";
const opens = "10 am";
const closes = "3 pm";
const doorsClose = "2:30 pm";
const streetAddress = "7000 E Marginal Way S";
const address = `${streetAddress}, Seattle, WA 98108`;
const compactTime = (time: string) => time.replace(" ", "");

/** Seattle visitor facts shared by the home, overview, and visit pages. */
export const seattleVisit = {
  hours: {
    day,
    days: `${day}s`,
    opens,
    closes,
    opensCompact: compactTime(opens),
    closesCompact: compactTime(closes),
    doorsClose,
    doorsCloseClock: doorsClose.split(" ")[0],
    arriveEarlyBy: "1pm",
    donationDropoff: {
      day: "Tuesdays",
      opens: "11am",
      closes: "3pm",
    },
  },
  location: {
    neighborhood: "Georgetown",
    streetAddress,
    address,
    mapsHref: `maps:?q=$Connections Museum, ${address}`,
    googleMapsHref: `https://maps.google.com/?q=${address.replace(/[,\s]+/g, "+")}`,
    doorColor: "blue",
    awningColor: "yellow",
  },
  suggestedDonation: {
    adult: "$10",
    youth: "$5",
    youthAges: "12 to 18",
  },
  contact: {
    phone: "+12067673012",
    phoneLabel: "(206) 767–3012",
    email: "seattle@connections.museum",
  },
  // Set a dated message that names Seattle for a closure, then return this to
  // null when it ends. The home page also covers Denver.
  // ClosureAnnouncement shows the same notice on all three visit entry pages.
  closureNotice: null as string | null,
} as const;
