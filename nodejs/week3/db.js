import knex from "knex";

const knexInstance = knex({
	client: process.env.DB_CLIENT || "mysql2",
	connection: {
		host: process.env.DB_HOST || "localhost",
		port: process.env.DB_PORT || 3306,
		user: process.env.DB_USER || "root",
		password: process.env.DB_PASSWORD || "pass",
		database: process.env.DB_NAME || "hyf_node_week3_warmup",
		multipleStatements: true,
	},
});

export default knexInstance;
