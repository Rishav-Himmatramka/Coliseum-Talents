import { useRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import './Expertise.css'

const CARDS = [
  {
    num: '01',
    title: 'Speakers & Thought Leaders',
    desc: 'High-caliber voices for keynote stages, strategy forums and executive gatherings.',
    tags: ['Leadership & Innovation', 'Motivational Keynotes', 'Global Thought Leadership'],
  },
  {
    num: '02',
    title: 'Celebrity Hosts & Public Figures',
    desc: 'Iconic personalities that anchor events with glamour, credibility and cultural relevance.',
    tags: ['Red Carpet & Gala Hosting', 'Brand Storytelling', 'Prestige Engagement'],
  },
  {
    num: '03',
    title: 'Performers & Live Acts',
    desc: 'Dynamic entertainment that turns a room into an experience from the first beat onward.',
    tags: ['Musical Performances', 'Stage Acts', 'High-Energy Programming'],
  },
  {
    num: '04',
    title: 'Artists & Curated Entertainment',
    desc: 'Distinctive talent for intimate gatherings, award nights and private celebrations.',
    tags: ['Luxury Private Events', 'Custom Concepts', 'Tailored Experiences'],
  },
]

export default function Expertise() {
  const ref = useRef()
  useFadeIn(ref)

  return (
    <section className="section expertise-section" id="expertise" ref={ref}>
      <div className="container">
        <div className="section-heading fade-up">
          <div className="gold-line" />
          <p className="eyebrow">Our expertise</p>
          <h2>Signature talent experiences, crafted for every brief.</h2>
          <p>Each category is thoughtfully curated to create a distinct atmosphere, whether the brief is polished corporate, cinematic gala or intimate celebration.</p>
        </div>

        <div className="expertise-grid">
          {CARDS.map((card, i) => (
            <article key={card.num} className={`expertise-card fade-up delay-${i + 1}`}>
              <span className="card-num">{card.num}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <ul>
                {card.tags.map(tag => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
