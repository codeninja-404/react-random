export default function Singer({ singer }) {
  const { id, name, age } = singer;
  return (
    <div>
      <h3> Singer : {name}</h3>
      <p>Age : {age}</p>
    </div>
  );
}
