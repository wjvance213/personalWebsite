// All site copy lives here so it can be edited without touching the components.
// Anything still missing (résumé, LinkedIn, email, Squilly's Delay) is left out
// rather than shown as a placeholder; add it here when it's ready.
import surfPhoto from './assets/surf.jpg'
import blenderTrackerClip from './assets/BlenderTrackerclip.mp4'

export const site = {
  name: 'Your Name', // TODO: real name
  github: 'https://github.com/wjvance213',
  resume: null, // e.g. '/resume.pdf' once it's in public/
  linkedin: null,
  email: null,
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#life', label: 'Beyond Code' },
  { href: '#contact', label: 'Contact' },
]

export const hero = {
  eyebrow: 'Computer Science · CU Boulder',
  lead: 'A junior studying computer science who likes building things, from data structures to 3D worlds, and spends the rest of the time on the water or the mountain.',
  photo: surfPhoto,
  photoAlt: 'Wakesurfing behind a boat on a lake',
}

export const about = {
  paragraphs: [
    "I started college in electrical and computer engineering. Two years in, an embedded software class made it clear that programming hardware wasn't for me, so I stepped away.",
    "I spent the next year and a half working full time. Then I realized that if I was going to work that hard, I might as well be earning a degree. I re-enrolled at CU in computer science, and I've been happier and more engaged in my studies ever since.",
  ],
  timeline: [
    { title: 'Electrical & Computer Engineering', detail: 'CU Boulder · 2 years' },
    { title: 'Working full time', detail: '~1.5 years' },
    { title: 'Computer Science, B.S.', detail: 'CU Boulder · Junior' },
  ],
}

export const projects = [
  {
    title: 'BlenderTracker',
    video: blenderTrackerClip,
    mediaLabel: 'Webcam movement driving a Blender rig in real time',
    tags: ['Python', 'MediaPipe', 'Blender', 'UDP'],
    description:
      'Real-time motion capture from a webcam. MediaPipe tracks hands and selected body parts, a One Euro filter smooths the points, and they stream over UDP to a custom Blender add-on that moves empties and bones.',
    links: [{ label: 'GitHub', href: 'https://github.com/wjvance213/BlenderTracker' }],
  },
  {
    title: 'This Portfolio',
    tags: ['React', 'Vite', 'Cloudflare'],
    description:
      'A rebuild of my earlier plain-HTML class site, now built with React and Vite and auto-deployed to Cloudflare on every push.',
    links: [{ label: 'GitHub', href: 'https://github.com/wjvance213/personalWebsite' }],
  },
  {
    title: 'Inventory Hash Table',
    tags: ['Data Structures', 'Hash Tables', 'Linked Lists'],
    description:
      'Final project for my data structures class: an inventory system built on a hash table. Items are hashed by type, weight, and damage, and collisions chain into linked lists so similar items stay close together.',
    links: [],
  },
]

export const skills = [
  { title: 'Languages', items: ['Python', 'JavaScript', 'C++'] },
  { title: 'Frameworks & Tools', items: ['React, Vite', 'Git / GitHub', 'Blender, MediaPipe', 'Unity'] },
  { title: 'Coursework', items: ['Data Structures', 'Embedded Software'] },
]

export const experience = [
  {
    when: '7 summers',
    title: 'Head Sailing Instructor',
    description:
      'US Sailing certified instructor. In my final season I was appointed head instructor of the sailing school. I also crewed in weekend races and was a regularly sought-out crew member.',
  },
]

export const hobbies = [
  { title: 'Wakesurfing', level: 'Expert', text: 'Surfing since 2013. Now landing ropeless 360s and working on ollies, with pop shuvits next.' },
  { title: 'Sailing', level: 'Instructor', text: 'Grew up sailing with my family, went on to race crew, and became head instructor.' },
  { title: 'Climbing', level: 'Since 2021', text: "Picked it up when I moved to Colorado. It's the closest thing to a real-life video game." },
  { title: 'Skiing', level: 'Since 2020', text: 'Said yes to a ski trip with no experience, and was on double blacks within a month.' },
  { title: 'Music', level: 'Daily', text: 'Guitar (electric and acoustic), piano, and producing in FL Studio. I started two years ago.' },
  { title: 'Gaming', level: 'Always', text: 'Terraria, Satisfactory, Subnautica, Valheim, Rocket League, Destiny 2.' },
]

export const contact = {
  heading: "Let's talk",
  text: "I'm looking for software internships. The best way to reach me is through any of the links below.",
}
