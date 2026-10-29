import AnimalCard from "./AnimalCard";

function AnimalGrid({ animals, className }) {
  return (
    <div className={className}>
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
}

export default AnimalGrid;
