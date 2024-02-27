function Icon({ children, backgroundColor, border, color }) {
  const styles = {
    backgroundColor,
    border,
    color,
  };
  return (
    <div className="media">
      <span style={styles}>{children}</span>
    </div>
  );
}

export default Icon;
