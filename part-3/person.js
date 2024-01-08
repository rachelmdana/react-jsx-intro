const Person = ({ name, age, hobbies }) => {
  const shortName = name.length > 8 ? name.slice(0, 6) : name;

  return (
    <div>
      <p>Learn some information about this person</p>
      <h3>{age > 18 ? 'Please go vote!' : 'You must be 18'}</h3>
      <p>Name: {shortName}</p>
      <p>Age: {age}</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};