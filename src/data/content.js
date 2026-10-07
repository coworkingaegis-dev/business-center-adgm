// ---------------------------------------------------------------------------
// Single source of truth for the "Business Center ADGM" micro-site.
// Prices and facts come from www.aegiscoworking.ae.
// Edit this file — not the components — when prices, FAQs or blogs change.
// ---------------------------------------------------------------------------

import privateImg from '../assets/business-center-adgm-private-office.webp'
import receptionImg from '../assets/business-center-adgm-reception.webp'
import boardroomImg from '../assets/business-center-adgm-boardroom.webp'
import deskImg from '../assets/business-center-adgm-dedicated-desk.webp'
import coworkImg from '../assets/business-center-adgm-coworking.webp'
import meetingImg from '../assets/business-center-adgm-meeting-room.webp'
import smallImg from '../assets/business-center-adgm-small-office.webp'
import servicedImg from '../assets/business-center-adgm-serviced-office.webp'
import execImg from '../assets/business-center-adgm-executive-office.webp'

export const SITE_URL = 'https://businesscenteradgm.online'
export const MAIN_SITE = 'https://www.aegiscoworking.ae'
export const PAGE_TITLE = 'Business Center ADGM for Company Setup & Licensing'
export const PAGE_DESCRIPTION =
  'Business center ADGM for company setup: choose a workspace, complete KYC, get your lease registered on AccessRP and use the address for your ADGM licence.'
export const DATE_PUBLISHED = '2026-10-07'
export const DATE_MODIFIED = '2026-10-07'

export const BUSINESS = {
  name: 'Aegis Coworking - ADGM',
  phoneDisplay: '+971 50 392 6316',
  phoneTel: 'tel:+971503926316',
  whatsapp: 'https://wa.me/971503926316',
  email: 'contact@aegiscoworking.ae',
  street: 'Addax Tower, 3812, Al Reem Island, RT3',
  city: 'Abu Dhabi',
  country: 'United Arab Emirates',
  lat: 24.4989303,
  lng: 54.4031693,
  mapsUrl: 'https://www.google.com/maps/place/Aegis+Coworking+Space+ADGM/@24.4989303,54.4031693,17z',
  mapsEmbed: 'https://www.google.com/maps?q=Aegis+Coworking+Space+ADGM,+Addax+Tower,+Al+Reem+Island,+Abu+Dhabi&ll=24.4989303,54.4031693&z=16&output=embed',
  sameAs: [
    'https://www.linkedin.com/company/aegis-coworking/',
    'https://www.instagram.com/aegis.coworking/',
    'https://www.facebook.com/aegis.coworking',
  ],
}

// Card links open WhatsApp instead of other websites
export const WA_INFO = `${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like more details about your workspace.')}`

export const images = { privateImg, receptionImg, boardroomImg, deskImg, coworkImg, meetingImg, smallImg, servicedImg, execImg }

// Hero expanding panels
export const panels = [
  { id: 'private', img: 'privateImg', w: 1200, h: 900, label: 'Private office', price: 'from AED 4,500', alt: 'Private office ADGM at Aegis business center, Addax Tower' },
  { id: 'desk', img: 'deskImg', w: 900, h: 675, label: 'Dedicated desk', price: 'AED 1,150', alt: 'Dedicated desk ADGM at Aegis business centre' },
  { id: 'cowork', img: 'coworkImg', w: 900, h: 675, label: 'Coworking space', price: 'flexi desk AED 1,000', alt: 'Coworking space ADGM with window desks, Al Reem Island' },
  { id: 'meeting', img: 'meetingImg', w: 900, h: 675, label: 'Meeting room', price: 'by the hour', alt: 'Meeting room ADGM in Aegis business center' },
  { id: 'reception', img: 'receptionImg', w: 900, h: 675, label: 'Virtual office', price: 'from AED 292', alt: 'Business address ADGM reception at Aegis Coworking' },
]

export const sections = [
  { id: 'services', label: 'Business centre services' },
  { id: 'budget', label: 'Budget planner' },
  { id: 'setup', label: 'Business setup office' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
]

export const keywords = [
  'Business center ADGM', 'Business centre ADGM', 'Business center in ADGM', 'Business centre in ADGM', 'ADGM business center',
  'ADGM business centre', 'Business center Abu Dhabi', 'Business centre Abu Dhabi', 'Business center Al Reem Island',
  'Business centre Al Reem Island', 'ADGM office space', 'ADGM office for rent', 'Office space for rent in ADGM', 'Office rental ADGM',
  'Serviced office ADGM', 'Serviced office in ADGM', 'Private office ADGM', 'Furnished office ADGM', 'Flexible office space ADGM',
  'Coworking space ADGM', 'Business address ADGM', 'Registered office ADGM', 'ADGM registered office', 'ADGM office lease',
  'ADGM office leasing', 'Affordable business center ADGM', 'Affordable office space ADGM', 'Business setup office ADGM',
  'Office for ADGM company', 'Office for ADGM licence', 'Commercial office space ADGM', 'Virtual office ADGM', 'Meeting room ADGM',
  'Dedicated desk ADGM', 'Space in ADGM', 'Rent desk space in ADGM', 'Flexi desk in ADGM', 'Cheap desk space in ADGM', 'Aegis Coworking',
]

// Orbit of services (all from aegiscoworking.ae)
export const services = [
  { id: 'private', icon: 'key', name: 'Private office', price: 'From AED 4,500 / month', text: 'A serviced office in ADGM for 1–20+ people: furnished, lockable, 24/7 access and a registered ADGM business address.', link: WA_INFO },
  { id: 'desk', icon: 'chair', name: 'Dedicated desk', price: 'AED 1,150 / month', text: 'Your own desk with an ADGM registered office address — the lowest-cost office for ADGM licence applications.', link: WA_INFO },
  { id: 'flexi', icon: 'people', name: 'Flexi desk', price: 'AED 1,000 / month', text: 'A flexi desk in ADGM: any open desk in the coworking space, with WiFi, coffee and the lounge.', link: WA_INFO },
  { id: 'virtual', icon: 'mail', name: 'Virtual office', price: 'From AED 292 / month', text: 'A business address ADGM companies can register, with mail handling and directory listing.', link: WA_INFO },
  { id: 'meeting', icon: 'video', name: 'Meeting room', price: 'Hourly booking', text: 'A meeting room ADGM clients can visit — book the meeting room or boardroom by the hour.', link: WA_INFO },
  { id: 'day', icon: 'sun', name: 'Day pass', price: 'AED 100 / day', text: 'The cheapest way into the business center: a full workday at a desk for AED 100.', link: WA_INFO },
  { id: 'lease', icon: 'shield', name: 'ADGM office lease', price: 'Registered on AccessRP', text: 'ADGM office leasing done for you — leases of 12–36 months registered on AccessRP.', link: WA_INFO },
  { id: 'address', icon: 'doc', name: 'Registered office', price: 'Included', text: 'Every private office and dedicated desk includes an ADGM registered office for your licence.', link: WA_INFO },
]

// Budget planner (monthly prices from aegiscoworking.ae)
export const planner = [
  { id: 'virtual', name: 'Virtual office', perPerson: false, base: 292, note: 'Address & mail only' },
  { id: 'flexi', name: 'Flexi desk', perPerson: true, base: 1000, note: 'Any open desk per person' },
  { id: 'desk', name: 'Dedicated desk', perPerson: true, base: 1150, note: 'Own desk per person + AED 1,200 one-time due diligence' },
  { id: 'private', name: 'Private office', perPerson: false, base: 4500, note: 'From price for 1–4 people; larger teams priced by layout', maxTeam: 4 },
]

export const amenities = ['24/7 access', 'High-speed WiFi', 'Staffed reception', 'Meeting rooms', 'Boardroom', 'Business lounge', 'Coffee & tea', 'Print & scan', 'Mail handling', 'Cleaning', 'Lockable storage', 'Level 38 views']

export const setupSteps = [
  { title: 'Choose your space', text: 'Pick a private office, dedicated desk, flexi desk or virtual office that suits your licence and team.' },
  { title: 'Tour or video walkthrough', text: 'See Level 38 of Addax Tower Monday–Friday, 9 AM–6 PM, or on a WhatsApp video call.' },
  { title: 'KYC & due diligence', text: 'Quick compliance checks required by ADGM, handled by our team.' },
  { title: 'Lease registered on AccessRP', text: 'We issue your ADGM office lease and register it on AccessRP for your licence application.' },
  { title: 'Licence & move in', text: 'Use your ADGM registered office for the licence, collect your access card and start work.' },
]

// Two genuine member reviews, word for word — a different pair on each site
export const testimonials = [
  { quote: 'Aegis coworking provide super professional services especially with the pricing, and the customer service, i needed the license and a space for one of my team member and they did all within a week time, my team member loved the space. I will highly suggest if any on is looking to get a license and a space in ADGM go for Aegis coworking.', name: 'Ubaid Zia', role: 'Startup Founder' },
  { quote: 'Aegis Coworking is a convenient workspace in Abu Dhabi for startups and growing companies. The flexible workspace options, meeting room and hot desk helped us avoid the commitment of a traditional office.', name: 'Kasim Malikkandy', role: 'Consultant' },
]

export const guides = [
  { slug: 'which-adgm-workspace-fits-you', title: 'Which ADGM Workspace Fits You?', tag: 'Guide' },
  { slug: 'adgm-coworking-space-cost-2026', title: 'ADGM Coworking Space Cost in 2026', tag: 'Cost' },
  { slug: 'private-office-rent-adgm-cost-what-to-expect-in-2026', title: 'Private Office Rent in ADGM: What to Expect in 2026', tag: 'Office' },
  { slug: 'low-cost-office-adgm-budget-friendly-workspace-solutions-in-abu-dhabi', title: 'Low-Cost Office in ADGM: Budget-Friendly Workspace', tag: 'Affordable' },
  { slug: 'virtual-office-adgm-your-prestigious-business-address-minus-the-cost', title: 'Virtual Office ADGM: A Prestigious Business Address', tag: 'Virtual' },
  { slug: 'accessrp-adgm-lease-registration', title: 'AccessRP: How ADGM Lease Registration Works', tag: 'Lease' },
  { slug: 'adgm-company-setup-cost-overseas-founders', title: 'ADGM Company Setup Costs for Overseas Founders', tag: 'Setup' },
  { slug: 'adgm-meeting-room-vs-private-office-client-meetings', title: 'Meeting Room or Private Office for Client Meetings?', tag: 'Compare' },
  { slug: 'addax-tower-adgm-business-workspace', title: 'Addax Tower ADGM: Business Workspace on Al Reem Island', tag: 'Location' },
].map((g) => ({ ...g, url: `${MAIN_SITE}/blog/${g.slug}` }))

export const faqs = [
  {
    q: 'What is a business center in ADGM?',
    a: 'A business center in ADGM is a serviced building or floor inside the Abu Dhabi Global Market jurisdiction that rents furnished offices, desks, meeting rooms and registered addresses on flexible terms, with reception, internet and cleaning included. Aegis Coworking runs its business centre on Level 38 of Addax Tower, Al Reem Island.',
    link: { text: 'Which ADGM workspace fits you?', url: 'https://www.aegiscoworking.ae/blog/which-adgm-workspace-fits-you' },
  },
  {
    q: 'How much does the business center in ADGM cost?',
    a: 'A serviced private office starts from AED 4,500 per month, a dedicated desk is AED 1,150, a flexi desk AED 1,000, a virtual office from AED 292 per month and a day pass AED 100. Meeting rooms are booked by the hour. ADGM government fees are separate.',
  },
  {
    q: 'Is the business center on Al Reem Island inside ADGM?',
    a: 'Yes. Addax Tower on Al Reem Island is within the ADGM jurisdiction, so the business centre gives you a genuine ADGM business address.',
  },
  {
    q: 'Can I use the business center as my ADGM registered office?',
    a: 'Yes. Private offices and dedicated desks include an ADGM registered office for your licence application and renewals. The virtual office also provides an ADGM business address.',
  },
  {
    q: 'Do you provide the ADGM office lease?',
    a: 'Yes. We issue your ADGM office lease and register it on AccessRP. Leases run from 12 to 36 months.',
  },
  {
    q: 'What is the cheapest desk space in ADGM?',
    a: 'A day pass at AED 100 is the cheapest option. For monthly use, a flexi desk is AED 1,000, and the dedicated desk at AED 1,150 is the lowest-cost option that includes a registered ADGM address.',
  },
  {
    q: 'Are there deposits or setup fees?',
    a: 'No deposit, no admin fees and no setup fees, with free registration. A one-time AED 1,200 due-diligence fee applies to the dedicated desk.',
  },
  {
    q: 'Is the business centre open 24/7?',
    a: 'Private office and dedicated desk members have secure 24/7 access. Tours run Monday to Friday, 9 AM–6 PM.',
  },
  {
    q: 'Can I book a meeting room without renting an office?',
    a: 'Yes. Meeting rooms and the boardroom can be booked by the hour for client meetings in ADGM.',
  },
  {
    q: 'Do FSRA-regulated firms need a private office?',
    a: 'FSRA-regulated firms usually need physical premises such as a private office, while many non-regulated companies can use a dedicated desk, flexi desk or virtual office.',
    link: { text: 'ADGM FSRA office requirements', url: 'https://www.aegiscoworking.ae/blog/adgm-fsra-office-requirements' },
  },
  {
    q: 'Can I start small and upgrade later?',
    a: 'Yes. Start on a flexi desk, dedicated desk or virtual office and move into a private office in the same business centre as you grow.',
  },
  {
    q: 'How do I book a tour of the business center?',
    a: 'Message us on WhatsApp or call +971 50 392 6316. Tours run Monday to Friday, 9 AM–6 PM, and we can send a video walkthrough if you are abroad.',
  },
  {
    q: 'At which stage of ADGM company setup should I book my workspace?',
    a: 'Early. ADGM licence applications typically require an office or registered address, so having your lease ready helps your application move forward. ADGM’s Registration Authority or your corporate service provider can confirm the exact requirements for your activity.',
  },
  {
    q: 'What happens after my ADGM licence is issued?',
    a: 'Collect your access card and start working. Your workspace stays your registered address for licence renewals, and you can upgrade to a larger space as you grow.',
  },
]
