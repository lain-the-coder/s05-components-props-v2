import "./index.css";
import MigrationCard from "./MigrationCard";

function MigrationList({ migrations }) {
  if (migrations.length === 0) {
    return (
      <div className="empty-state">
        <p>
          No migrations recorded. Run <code>migrate init</code> to begin.
        </p>
      </div>
    );
  }
  return (
    <>
      <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
        Displaying {migrations.length} registered schema operations:
      </p>
      <ul className="migration-list">
        {migrations.map((migration) => (
          <MigrationCard migrationObj={migration} key={migration.id} />
        ))}
      </ul>
    </>
  );
}

export default MigrationList;
