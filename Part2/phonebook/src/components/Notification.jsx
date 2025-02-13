const Notification = ({ message, isFailure }) => {
  if (!message) return null;
  return <div className={`notification ${isFailure? 'failure': 'success'}`}>{message}</div>;
};

export default Notification;
