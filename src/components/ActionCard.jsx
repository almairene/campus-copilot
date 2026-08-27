function ActionCard({ title, tone, icon }) {
  return (
    <button className={`action-card ${tone}`} type="button">
      <span className="action-icon">{icon}</span>
      <span>{title}</span>
    </button>
  );
}

export default ActionCard;
