import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { docker, k8s, helm, jenkins, argocd, git, aws, terraform } from '../assets'
import { storyBlocks } from '../constants'
import { useLanguage, pickLang } from '../context/LanguageContext'

const TechStackVisual = () => (
  <div className='story-visual story-visual--stack'>
    <div className='story-visual__card'>
      <div className='story-visual__group'>
        <span className='story-visual__group-label'>Containers</span>
        <div className='story-visual__icons'>
          <img src={docker} alt='Docker' title='Docker' />
          <img src={k8s} alt='Kubernetes' title='Kubernetes' />
          <img src={helm} alt='Helm' title='Helm' />
        </div>
      </div>
      <div className='story-visual__group'>
        <span className='story-visual__group-label'>CI/CD</span>
        <div className='story-visual__icons'>
          <img src={jenkins} alt='Jenkins' title='Jenkins' />
          <img src={argocd} alt='ArgoCD' title='ArgoCD' />
          <img src={git} alt='Git' title='Git' />
        </div>
      </div>
      <div className='story-visual__group'>
        <span className='story-visual__group-label'>Cloud</span>
        <div className='story-visual__icons'>
          <img src={aws} alt='AWS' title='AWS' />
          <img src={terraform} alt='Terraform' title='Terraform' />
        </div>
      </div>
    </div>
  </div>
)

const StatsVisual = ({ locale }) => {
  const stats = [
    { value: '2.8+', label: 'years of experience' },
    { value: '5', label: 'projects built' },
    { value: '20+', label: 'tools' }
  ]
  return (
    <div className='story-visual story-visual--stats'>
      {stats.map((s) => (
        <div key={s.label} className='story-visual__stat'>
          <span className='story-visual__stat-value'>{s.value}</span>
          <span className='story-visual__stat-label'>{s.label}</span>
        </div>
      ))}
    </div>
  )
}

const VISUALS = {
  techStack: TechStackVisual,
  stats: StatsVisual,
}

const StorySection = () => {
  const { locale } = useLanguage()

  return (
    <div className='story-section'>
      {storyBlocks.map((block, i) => {
        const { Icon } = block
        const Visual = VISUALS[block.visualType]
        return (
          <div key={i} className={`story-block ${block.reversed ? 'story-block--reversed' : ''}`}>
            <motion.div
              className='story-block__text'
              initial={{ opacity: 0, x: block.reversed ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <div className='story-block__icon-wrap'>
                <Icon size={18} />
              </div>
              <p className='story-block__label'>{pickLang(block.label, locale)}</p>
              <h2>
                {pickLang(block.title, locale)} <span>{pickLang(block.highlight, locale)}</span>
              </h2>
              <p className='story-block__desc'>{pickLang(block.description, locale)}</p>
              <Link to={block.linkTo} className='btn btn--outline'>
                {pickLang(block.linkText, locale)} <FiArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              className='story-block__visual'
              initial={{ opacity: 0, x: block.reversed ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <Visual locale={locale} />
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}

export default StorySection
