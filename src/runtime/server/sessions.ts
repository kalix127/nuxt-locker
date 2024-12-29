import { getDb } from "./database";

export async function createSession(token: string, age: number): Promise<void> {
  const expiresAt = Date.now() + age * 1000;

  const db = await getDb();
  await db.run(
    `INSERT INTO sessions (token, expires_at) VALUES (?, ?)`,
    token,
    expiresAt,
  );
}

export async function validateSession(token: string): Promise<boolean> {
  const db = await getDb();
  const session = await db.get(`SELECT * FROM sessions WHERE token = ?`, token);

  if (session && session.expires_at > Date.now()) {
    return true;
  }

  if (session) {
    await db.run(`DELETE FROM sessions WHERE token = ?`, token);
  }

  return false;
}

export async function deleteSession(token: string): Promise<void> {
  const db = await getDb();
  await db.run(`DELETE FROM sessions WHERE token = ?`, token);
}
