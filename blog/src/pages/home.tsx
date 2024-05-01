import "./home.css";
import "../index.css";
import { Outlet, Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<div id="sidebar">
				<h1>My Blog</h1>
				<div>
					<form id="search-form" role="search">
						<input
							id="q"
							aria-label="Search posts"
							placeholder="Search"
							type="search"
							name="q"
						/>
						<div id="search-spinner" aria-hidden hidden={true} />
					</form>
				</div>
				<nav>
					<ul>
						<li>
							<Link to={`blog`}>Blog</Link>
						</li>
						<li>
							<Link to={`about`}>About</Link>
						</li>
						<li>
							<Link to={`contact`}>Contact</Link>
						</li>
					</ul>
				</nav>
			</div>

			<div id="detail">
				<Outlet />
			</div>
		</>
	);
}
