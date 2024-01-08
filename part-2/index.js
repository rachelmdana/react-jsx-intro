
const App = () => {
  return (
    <div>
      <Tweet
        username="user1"
        name="John Doe"
        date="January 8, 2024"
        message="This is the first tweet. Hello Twitter!"
      />
      <Tweet
        username="user2"
        name="Jane Doe"
        date="January 9, 2024"
        message="Just learned a new programming language. Feeling excited! #coding"
      />
      <Tweet
        username="user3"
        name="Alice Johnson"
        date="January 10, 2024"
        message="Enjoying a relaxing weekend. What are your plans?"
      />
    </div>
  );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);