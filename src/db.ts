import "reflect-metadata"
import { DataSource } from "typeorm"
import { Film1697789896922 } from "./migration/1697789896922-film"
export const AppDataSource = new DataSource({
 type: "mysql",
 host: "localhost",
 port: 3306,
 username: "root",
 password: "1234",
 database: "fsd-typeorm",
 entities: [],
 migrations: [Film1697789896922],
 synchronize: false,
 logging: false,
})