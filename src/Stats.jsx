import Stat from "./Stat";

export default function Stats({ numberOfCharacters, words, instagramCharacters, facebookCharacters }) {
  return (
    <section className="stats">
      <Stat label={'Words'} number={0} variable={words} />
      <Stat label={'Characters'} variable={numberOfCharacters} />
      <Stat label={'Instagram'} variable={instagramCharacters} />
      <Stat label={'Facebook'} variable={facebookCharacters} />
    </section>
  );
}
