import { useLanguage } from '../context/LanguageContext'

// UI strings indexed by key. Use via useT() hook.
export const ui = {
  en: {
    // Navbar
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.cv': 'Resume',
    'nav.toggleTheme': 'Toggle theme',
    'nav.menu': 'Menu',

    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.role.before': 'Web',
    'hero.role.web': 'developer',
    'hero.role.and': 'and',
    'hero.role.devops': 'DevOps engineer',
    'hero.bio': 'I run multi-environment releases and Kubernetes platforms, and keep production observable.',
    'hero.cta.projects': 'View my projects',
    'hero.cta.contact': 'Get in touch',

    // TechBanner
    'techBanner.label': 'Technologies',

    // Highlight cards
    'highlight.label': 'WHAT I DO',
    'highlight.title.before': 'My areas of',
    'highlight.title.accent': 'expertise',

    // ValueProps
    'valueProps.pill': 'One',
    'valueProps.middle': 'expertise',
    'valueProps.before': 'complete solutions',
    'valueProps.accent': 'for every need',

    // FeatureList
    'feature.label': 'KEY SKILLS',
    'feature.title.before': 'What makes the',
    'feature.title.accent': 'difference',
    'feature.sub': 'My experience let me build skills that go beyond the purely technical.',

    // GitHub activity
    'github.label': 'GITHUB ACTIVITY',
    'github.title.before': 'I ship ',
    'github.title.accent': 'every day',
    'github.metric.contributions': 'Contributions this year',
    'github.metric.activeDays': 'Active days',
    'github.metric.bestStreak': 'Longest streak (days)',
    'github.metric.issues': 'Issues opened',
    'github.calendar.unit': 'contributions',
    'github.calendar.less': 'Less',
    'github.calendar.more': 'More',

    // HomeCTA
    'cta.title': 'Let\'s work together?',
    'cta.button': 'Get in touch',

    // Footer
    'footer.tagline': 'DevOps engineer',
    'footer.copyright': 'All rights reserved',

    // Page heroes
    'page.experience.badge': 'My professional path',
    'page.experience.title': 'Experience',
    'page.experience.highlight': '& missions',
    'page.experience.desc': 'DevOps engineer at Tata Consultancy Services since 2024 - release engineering, Kubernetes operations and production support for an enterprise retail platform.',
    'competences.title': 'Skills',

    'page.education.badge': 'My education',
    'page.education.title': 'Academic',
    'page.education.highlight': 'background',
    'page.education.desc': 'My engineering degree and cloud certifications.',
    'education.apprenticeship': 'Apprenticeship at',

    'page.portfolio.badge': 'Selected work',
    'page.portfolio.title': 'Hands-on',
    'page.portfolio.highlight': 'projects',
    'page.portfolio.desc': 'Hands-on DevOps projects I built and documented on GitHub.',

    'page.contact.badge': 'Let\'s work together',
    'page.contact.title': 'Get in',
    'page.contact.highlight': 'touch',
    'page.contact.desc': 'A project, a question, or just want to chat? I\'m available.',

    // Project detail
    'project.back': 'Back to projects',
    'project.notFound': 'Project not found.',
    'project.viewCta': 'View project',
    'project.links': 'Links',
    'project.technologies': 'Main technologies',
    'project.tasks': 'Personally accomplished tasks',

    // Contact form
    'contact.info.text': 'Have a question, or want to talk about DevOps? Send me a message and I will reply by email.',
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Your message...',
    'contact.form.send': 'Send',
    'contact.form.sending': 'Sending…',
    'contact.toast.success': 'Opening your email app so you can send the message.',
    'contact.toast.error': 'Something went wrong. Please try again later.',
  }
}

export const useT = () => {
  const { locale } = useLanguage()
  return (key) => (ui[locale] && ui[locale][key]) || ui.en[key] || key
}
