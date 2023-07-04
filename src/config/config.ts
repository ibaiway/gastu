const getIntEnv = (key: string) => {
  const intVariable = parseInt(process.env[key] || '')
  return Number.isInteger(intVariable) ? intVariable : undefined
}

interface PostgresConfig {
  db: string
  name: string
  password: string
}

interface Config {
  postgres: PostgresConfig
  port: number
}

export const config: Config = {
  postgres: {
    db: process.env.DB_PG_DBNAME || 'postgres',
    name: process.env.DB_PG_USERNAME || 'postgres',
    password: process.env.DB_PG_USERNAME || ''
  },
  port: getIntEnv('port') || 3000
}
