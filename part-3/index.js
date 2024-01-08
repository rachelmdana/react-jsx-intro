const App = () => {
  const people = [
    { name: 'John Doe', age: 25, hobbies: ['Reading', 'Swimming', 'Coding'] },
    { name: 'Jane Smith', age: 16, hobbies: ['Painting', 'Dancing', 'Singing'] },
    { name: 'Bob Johnson', age: 30, hobbies: ['Gardening', 'Traveling', 'Photography'] },
  ];

  return (
    <div>
      {people.map((person, index) => (
        <Person key={index} {...person} />
      ))}
    </div>
  );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);