import { Article } from "../types/articles";
import pool from "./db";

export const fetchArticles = async (): Promise<Article[]> => {
	try {
		const [data] = await pool.query("SELECT * FROM articles");
		return JSON.parse(JSON.stringify(data));
	} catch (error) {
		console.error("Error fetching articles:", error);
		return [];
	}
};
