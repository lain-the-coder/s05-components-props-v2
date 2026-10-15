export const initialMigrations = [
  {
    id: "001_init_schema",
    name: "Create accounts & organizations tables",
    sql: "CREATE TABLE organizations (id UUID PRIMARY KEY, name VARCHAR(255));",
    executionTimeMs: 142,
    status: "applied", // "applied" | "pending" | "failed"
    errorMessage: null,
    isDestructive: false,
  },
  {
    id: "002_add_roles_index",
    name: "Add composite index on org_members",
    sql: "CREATE INDEX idx_org_members_user_role ON org_members (org_id, user_id, role);",
    executionTimeMs: 48,
    status: "applied",
    errorMessage: null,
    isDestructive: false,
  },
  {
    id: "003_drop_legacy_tokens",
    name: "Purge v1 OAuth tokens column",
    sql: "ALTER TABLE users DROP COLUMN legacy_session_token;",
    executionTimeMs: null,
    status: "pending",
    errorMessage: null,
    isDestructive: true,
  },
  {
    id: "004_add_audit_partition",
    name: "Partition audit_logs table by range",
    sql: "CREATE TABLE audit_logs_2026_q4 PARTITION OF audit_logs FOR VALUES FROM ('2026-10-01') TO ('2027-01-01');",
    executionTimeMs: 310,
    status: "failed",
    errorMessage:
      "PostgresException: relation 'audit_logs' does not exist in public schema",
    isDestructive: false,
  },
];
