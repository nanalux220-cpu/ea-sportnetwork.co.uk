import { heroCards } from '@/mocks/home';

export default function HeroCards() {
  return (
    <section className="cards-band" aria-label="What we do">
      <div className="cards">
        {heroCards.map((c) => (
          <article className="card" key={c.title} data-reveal>
            <h3>{c.title}</h3>
            <span className="card-rule" aria-hidden="true" />
            <p>{c.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}