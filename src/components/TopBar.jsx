function TopBar({ title = 'Campus Copilot', studentName = 'Anna', darkMode, onToggleTheme }) {
  const initials = studentName
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="topbar">
      <div className="brand-mobile">
        <div className="brand-mark small">C</div>
        <span>{title}</span>
      </div>

      <div className="topbar-actions">
        <button className="icon-button" aria-label="Notifications" type="button">
          🔔
        </button>
        <button className="icon-button" aria-label="Toggle dark mode" type="button" onClick={onToggleTheme}>{darkMode ? '☼' : '☾'}</button>
        <div className="profile-pill" aria-label="Profile">
          <span className="profile-avatar">{initials || 'A'}</span>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
