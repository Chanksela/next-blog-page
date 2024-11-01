import { fetchArticles } from "./lib/fetchArticles";
import { Article } from "./types/articles";

export default async function Home() {
	let articles: Article[] = await fetchArticles();

	return (
		<div>
			<h1>Hello World</h1>
			<h2>Articles</h2>
			<ul>
				{articles.map((article) => {
					return (
						<li key={article.id}>
							<h3>{article.title}</h3>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
