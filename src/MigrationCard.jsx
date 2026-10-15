import "./index.css";

function MigrationCard({ migrationObj }) {
  const {
    id,
    name,
    sql,
    executionTimeMs,
    status,
    errorMessage,
    isDestructive,
  } = migrationObj;
  return (
    <li className={`migration-card ${status}`}>
      <div className="card-top">
        <h3>
          {name}{" "}
          {isDestructive && <span className="id-tag">⚠️ DESTRUCTIVE</span>}
        </h3>
        <span className={`status-pill ${status}`}>{status}</span>
      </div>
      <div className="query-box">{sql}</div>
      <div className="card-meta">
        <span className="id-tag">{id}</span>
        <span>
          {executionTimeMs !== null
            ? `${executionTimeMs}ms`
            : "N/A (unexecuted)"}
        </span>
      </div>
      {errorMessage && <div className="error-banner">{errorMessage}</div>}
    </li>
  );
}

export default MigrationCard;
