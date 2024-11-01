import Link from "next/link";

export default function Navbar() {
	return (
		<header className="bg-red-200 px-10 py-4">
			<nav className="flex">
				<p className="w-1/3">NextNews</p>
				<ul className="flex justify-end w-full gap-5">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="/add-article">Add</Link>
				</ul>
			</nav>
		</header>
	);
}
