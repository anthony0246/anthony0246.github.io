export const projects = [
  {
    id: 'accessibility-chatbot',
    title: 'Accessibility Chatbot',
    subtitle: 'Grant-Winning · Rutgers University',
    description:
      'A full-stack AI chatbot that evaluates the accessibility of Rutgers University online courses, earning a competitive grant for AI innovation from the University of Ottawa. Built a custom CSV parsing algorithm to process thousands of lines of course data, enabling faculty to instantly receive tailored accessibility recommendations based on WCAG 2.1 guidelines.',
    tags: ['JavaScript', 'HTML', 'CSS', 'OpenAI API', 'Accessibility', 'WCAG 2.1'],
    badge: null,
    links: {
      github: 'https://github.com/anthony0246/LMS_TOOL',
      live: null,
    },
  },
  {
    id: 'playitagain',
    title: 'PlayItAgain',
    subtitle: 'Catan Game Save · iOS App',
    description:
      'An iOS app that digitizes physical Catan boards, cards, and game state from a single photo — allowing players to save and resume games across sessions. Features a Core Image perspective-correction pipeline and an on-device YOLOv8 + Core ML detector to recognize terrains, number tokens, and player pieces.',
    tags: ['Swift', 'SwiftUI', 'YOLOv8', 'Core ML', 'Core Image', 'Computer Vision'],
    badge: 'In Development',
    links: {
      github: null,
      live: null,
    },
    stayTuned: true,
  },
]
