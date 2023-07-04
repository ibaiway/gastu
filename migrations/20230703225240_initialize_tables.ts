/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .raw(
      `CREATE TABLE users (
        id uuid DEFAULT uuid_generate_v4 (),
        email VARCHAR (255) UNIQUE NOT NULL,
        username VARCHAR (20) UNIQUE,
        created_at TIMESTAMP NOT NULL DEFAULT now(),
        PRIMARY KEY(id)
      );`
    )
    .raw(
      `CREATE TABLE projects (
        id uuid DEFAULT uuid_generate_v4 (),
        name VARCHAR (30) NOT NULL,
        currency VARCHAR (3) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT now(),
        PRIMARY KEY(id)
      );`
    )
    .raw(
      `CREATE TABLE expenses (
        id uuid DEFAULT uuid_generate_v4 (),
        project_id uuid NOT NULL,
        name VARCHAR (30) NOT NULL,
        value INT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT now(),
        PRIMARY KEY(id),
        FOREIGN KEY(project_id) REFERENCES projects(id) ON DELETE CASCADE
      );`
    )
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.raw(`DROP TABLE IF EXISTS users`)
  knex.schema.raw(`DROP TABLE IF EXISTS projects`)
  knex.schema.raw(`DROP TABLE IF EXISTS expenses`)
}
