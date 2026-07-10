const ITEMS = [
  'Django',
  'PostgreSQL',
  'AWS',
  'Docker',
  'React',
  'Kafka',
  'Redis',
  'Distributed Systems',
  'REST APIs',
  'CI/CD',
]

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((t, i) => (
          <span className="marquee__item" key={i}>
            {t}
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  )
}
