import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "13g99190",
  database: "market",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
