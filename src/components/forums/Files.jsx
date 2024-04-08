function Files({ icon, name, number }) {
  return (
    <div className="forum-files">
      {icon}
      <div>
        <h5>{name}</h5>
        <h2>{number}</h2>
      </div>
    </div>
  );
}

export default Files;
