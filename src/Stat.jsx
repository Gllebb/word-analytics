export default function Stat({ label, variable }) {
  return (
    <section className="stat">
      <span className={`stat__number ${variable == 0 ? `stat__number--limit` : ``}`}>{variable}</span>
      <h2>{label}</h2>
    </section>
  );
}
