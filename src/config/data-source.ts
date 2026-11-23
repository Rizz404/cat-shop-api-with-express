import { DataSource } from "typeorm";

const myDataSource = new DataSource({
  type: "mysql",
  host: process.env.HOST,
  port: process.env.DATABASE_PORT as unknown as number,
  username: process.env.DB_USER || "root",
  password: process.env.PASSWORD,
  database: process.env.DB_NAME || "cat_adoption",
  entities: [__dirname + "/../entity/*.{ts,js}"],
  migrations: [__dirname + "/../migration/*.{ts,js}"],
  // synchronize: process.env.NODE_ENV === "development" ? true : false,
  // logging: process.env.NODE_ENV === "development" ? true : false,
  subscribers: [],
});

export default myDataSource;
