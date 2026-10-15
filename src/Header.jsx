import "./index.css";

function Header({ dbName, activeConnections, hasFailures }) {
  return (
    <header className="header">
      <div>
        <h1>Database Ledger: {dbName}</h1>
        <p>Active pool connections: {activeConnections}</p>
      </div>
      <div
        className={
          hasFailures
            ? "badge-system badge-alert"
            : "badge-system badge-healthy"
        }
      >
        {hasFailures ? "ATTENTION NEEDED" : "SYSTEM HEALTHY"}
      </div>
    </header>
  );
}

export default Header;
