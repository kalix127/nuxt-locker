import type { Database as SQLiteDatabase } from "sqlite3";
import fs from "node:fs";
import path from "node:path";
import { type Database, open } from "sqlite";
import sqlite3 from "sqlite3";

let dbInstance: Database<SQLiteDatabase>;

export async function getDb() {
  if (!dbInstance) {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    dbInstance = await open({
      filename: path.join(dataDir, "sessions.sqlite3"),
      driver: sqlite3.Database,
    });

    await dbInstance.run(`
      CREATE TABLE IF NOT EXISTS sessions (
        token TEXT PRIMARY KEY,
        expires_at INTEGER NOT NULL
      )
    `);
  }
  return dbInstance;
}
