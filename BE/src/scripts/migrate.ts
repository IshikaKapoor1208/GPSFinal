import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pool } from "../db.js";

const migration = await readFile(resolve(process.cwd(), "migrations", "001_initial.sql"), "utf8");
await pool.query(migration);
await pool.end();
console.log("Database migration completed.");
