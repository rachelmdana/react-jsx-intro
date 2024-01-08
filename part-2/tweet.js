const tweetStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  margin: '10px',
  borderRadius: '5px',
};

const userInfoStyle = {
  marginBottom: '5px',
};

const usernameStyle = {
  fontWeight: 'bold',
  marginRight: '5px',
};

const dateStyle = {
  color: '#888',
  fontSize: '12px',
};

const messageStyle = {
  marginTop: '10px',
};

const Tweet = ({ username, name, date, message }) => {
  return (
    <div style={tweetStyle}>
      <div style={userInfoStyle}>
        <span style={usernameStyle}>{username}</span>
        <span>{name}</span>
        <span style={dateStyle}>{date}</span>
      </div>
      <div style={messageStyle}>{message}</div>
    </div>
  );
};
