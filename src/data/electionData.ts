export const electionStages = [
  {
    id: 'announce',
    title: 'Announcement & MCC',
    short: 'Announcement',
    intro: 'The Election Commission of India (ECI) announces the schedule, and the Model Code of Conduct (MCC) kicks in.',
    explainer: 'This phase sets the formal timetable. The MCC comes into immediate effect, placing restrictions on the government and political parties to ensure a level playing field.',
    chips: ['Election Schedule', 'Model Code of Conduct', 'ECI Guidelines'],
    details: [
      { title: 'What happens', text: 'Polling dates, phases, and counting dates are announced. The government cannot announce new schemes.' },
      { title: 'Why it matters', text: 'It marks the official beginning of the election process.' },
      { title: 'What to watch', text: 'Check the election schedule for your specific constituency and phase.' }
    ],
    voterActions: ['Note the polling date for your constituency.', 'Be aware of MCC violations and report them via cVIGIL app.']
  },
  {
    id: 'register',
    title: 'Nominations & Voter Roll',
    short: 'Registration',
    intro: 'Candidates file nominations, and voters have a final window to check their names on the electoral roll.',
    explainer: 'Voters must ensure their name is on the final voter list. Meanwhile, candidates file their nomination papers, which are scrutinized by the Returning Officer.',
    chips: ['Electoral Roll', 'Voter ID (EPIC)', 'Candidate Affidavits'],
    details: [
      { title: 'What happens', text: 'Candidate affidavits (wealth, criminal records) are made public. Voter lists are finalized.' },
      { title: 'Why it matters', text: 'If your name is not on the voter list, you cannot vote, even if you have a Voter ID card.' },
      { title: 'What to watch', text: 'Search your name on the ECI electoral search portal or Voter Helpline App.' }
    ],
    voterActions: ['Search your name in the Electoral Roll.', 'Download your digital Voter ID (e-EPIC).', 'Review candidate affidavits on the KYC (Know Your Candidate) app.']
  },
  {
    id: 'campaign',
    title: 'Campaign & Silence Period',
    short: 'Campaign',
    intro: 'Parties hold rallies and release manifestos. Campaigning ends 48 hours before polling (Silence Period).',
    explainer: 'This is the active campaigning phase. It strictly ends 48 hours prior to the close of polls to give voters a peaceful time to consider their choice.',
    chips: ['Manifestos', 'Rallies', 'Silence Period'],
    details: [
      { title: 'What happens', text: 'Public meetings, roadshows, and advertisements take place. All public campaigning stops 48 hours before voting ends.' },
      { title: 'Why it matters', text: 'This is the time to decide who to vote for based on issues and candidate profiles.' },
      { title: 'What to watch', text: 'During the silence period, watch out for illegal inducements like cash or liquor distribution.' }
    ],
    voterActions: ['Compare party manifestos.', 'Decide your vote.', 'Observe the 48-hour silence period rules.']
  },
  {
    id: 'vote',
    title: 'Polling Day',
    short: 'Polling',
    intro: 'Voters cast their vote using Electronic Voting Machines (EVMs) and verify via VVPAT.',
    explainer: 'Voters go to their assigned polling booth, verify their identity, and cast their vote on the EVM. The VVPAT prints a slip visible for 7 seconds to confirm the vote.',
    chips: ['Polling Booth', 'EVM', 'VVPAT'],
    details: [
      { title: 'What happens', text: 'Polling officials verify identity. The voter presses the button next to their chosen symbol on the EVM.' },
      { title: 'Why it matters', text: 'This is the culmination of the democratic process.' },
      { title: 'What to watch', text: 'Ensure the VVPAT slip matches your choice. Check if your finger is marked with indelible ink.' }
    ],
    voterActions: ['Carry your Voter ID (EPIC) or approved alternate ID.', 'Go to your specific polling booth.', 'Check the VVPAT slip after pressing the EVM button.']
  },
  {
    id: 'count',
    title: 'Counting & Results',
    short: 'Results',
    intro: 'EVMs are opened under tight security, votes are counted, and results are officially declared by the ECI.',
    explainer: 'Votes from EVMs and postal ballots are counted in the presence of candidate agents. VVPAT slips from randomly selected booths are tallied to verify EVM results.',
    chips: ['Counting Centers', 'EVM Opening', 'Declaration'],
    details: [
      { title: 'What happens', text: 'Postal ballots are counted first, followed by EVM votes. The Returning Officer declares the winner.' },
      { title: 'Why it matters', text: 'It determines the representative for the constituency and eventually the government.' },
      { title: 'What to watch', text: 'Follow live trends on the ECI results portal or trusted news networks.' }
    ],
    voterActions: ['Follow ECI official channels for accurate results.', 'Accept the democratic mandate peacefully.']
  }
];

export const initialChecklist = [
  { id: 1, text: 'Confirm your name in the official Electoral Roll (Voter List).', done: true },
  { id: 2, text: 'Keep your Voter ID (EPIC) ready.', done: true },
  { id: 3, text: 'Find your assigned polling station/booth number.', done: false },
  { id: 4, text: 'Check if you have an approved alternate ID if EPIC is misplaced.', done: false },
  { id: 5, text: 'Review candidate affidavits on the ECI KYC App.', done: false },
  { id: 6, text: 'Know how to verify your vote using the VVPAT machine.', done: false }
];

export const faqData = [
  { q: 'Can I vote if I have a Voter ID card but my name is not on the voter list?', a: 'No, having your name on the Electoral Roll (voter list) is mandatory to cast your vote.' },
  { q: 'What if I lost my Voter ID (EPIC) card?', a: 'You can still vote if your name is on the voter list. You must show an alternate photo ID approved by the ECI (e.g., Aadhaar, PAN card, Passport, Driving License).' },
  { q: 'Can I vote online or from home?', a: 'India does not have online voting. Home voting (Postal Ballot) is available only for specific categories: Seniors above 85 years, Persons with Disabilities (PwD), and essential service workers.' },
  { q: 'What is a VVPAT?', a: 'Voter Verifiable Paper Audit Trail (VVPAT) is a machine attached to the EVM. It prints a paper slip showing the candidate you voted for, visible for 7 seconds through a glass window, before dropping into a sealed box.' },
  { q: 'What is NOTA?', a: 'None of the Above (NOTA) is a button on the EVM that allows you to officially register your rejection of all candidates contesting in your constituency.' },
  { q: 'Can I use the cVIGIL app?', a: 'Yes, citizens can use the ECI cVIGIL app to secretly report violations of the Model Code of Conduct, such as distribution of money or liquor.' }
];

export const stateData = [
  {
    code: 'MH',
    name: 'Maharashtra',
    registrationDeadline: 'Usually up to the last date of filing nominations for the election.',
    earlyVoting: 'No early voting. Postal ballot for specified categories only.',
    idRequirements: 'Voter ID (EPIC) or any of the 12 alternative photo identity documents approved by the ECI.',
    absenteeVoting: 'Postal ballots available for senior citizens (85+), PwDs, and essential service workers.',
    officialResource: 'https://ceo.maharashtra.gov.in/'
  },
  {
    code: 'UP',
    name: 'Uttar Pradesh',
    registrationDeadline: 'Usually up to the last date of filing nominations for the election.',
    earlyVoting: 'No early voting. Postal ballot for specified categories only.',
    idRequirements: 'Voter ID (EPIC) or e-EPIC or approved alternative photo IDs like Aadhaar, PAN, Passport.',
    absenteeVoting: 'Postal ballots available for senior citizens (85+), PwDs, and essential service workers.',
    officialResource: 'http://ceouttarpradesh.nic.in/'
  },
  {
    code: 'DL',
    name: 'Delhi',
    registrationDeadline: 'Usually up to the last date of filing nominations for the election.',
    earlyVoting: 'No early voting. Postal ballot for specified categories only.',
    idRequirements: 'Voter ID (EPIC) or approved alternative IDs. Check Voter Helpline App for details.',
    absenteeVoting: 'Postal ballots available for senior citizens (85+), PwDs, and essential service workers.',
    officialResource: 'https://ceodelhi.gov.in/'
  },
  {
    code: 'KA',
    name: 'Karnataka',
    registrationDeadline: 'Usually up to the last date of filing nominations for the election.',
    earlyVoting: 'No early voting. Postal ballot for specified categories only.',
    idRequirements: 'Voter ID (EPIC) or approved alternate photo IDs. Voter slip is NOT sufficient as ID.',
    absenteeVoting: 'Postal ballots available for senior citizens (85+), PwDs, and essential service workers.',
    officialResource: 'https://ceo.karnataka.gov.in/'
  },
  {
    code: 'TN',
    name: 'Tamil Nadu',
    registrationDeadline: 'Usually up to the last date of filing nominations for the election.',
    earlyVoting: 'No early voting. Postal ballot for specified categories only.',
    idRequirements: 'Voter ID (EPIC) or one of the specified photo IDs. Bring booth slip to find your room quickly.',
    absenteeVoting: 'Postal ballots available for senior citizens (85+), PwDs, and essential service workers.',
    officialResource: 'https://www.elections.tn.gov.in/'
  }
];
