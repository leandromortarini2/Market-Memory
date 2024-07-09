import { DataSource } from "typeorm";
import { Product, User } from "../entities/entities";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "13g99190",
  database: "market",
  synchronize: true,
  // dropSchema:true,
  logging: true,
  entities: [User, Product],
  subscribers: [],
  migrations: [],
});
