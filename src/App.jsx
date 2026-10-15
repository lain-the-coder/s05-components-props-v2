import "./index.css";
import Header from "./Header";
import { initialMigrations } from "./data";
import MigrationList from "./MigrationList";

export default function App() {
  const hasFailures = initialMigrations.some((m) => m.status === "failed");

  return (
    <div className="app-container">
      <Header
        dbName="pg_cluster_prod"
        activeConnections={24}
        hasFailures={hasFailures}
      />
      <MigrationList migrations={initialMigrations} />
    </div>
  );
}
