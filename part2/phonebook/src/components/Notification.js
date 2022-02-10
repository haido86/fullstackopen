const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return (
    <div
      className="error"
      style={
        message.includes("remove") || message.includes("failed")
          ? { color: "red" }
          : {}
      }
    >
      {message}
    </div>
  );
};

export default Notification;
