function Files({ icon, name, number, allClass }) {
  return (
    <div className={`forum-files ${allClass}`}>
      {icon}
      <div>
        <h5>{name}</h5>
        <h2>{number}</h2>
      </div>
    </div>
  );
}

export default Files;
