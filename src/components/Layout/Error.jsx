function Error({ errCode, errMsg }) {
  return (
    <div className="error">
      <h2>{errCode}</h2>
      <p>{errMsg}</p>
    </div>
  );
}

export default Error;
