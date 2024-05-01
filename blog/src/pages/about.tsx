export default function About() {
	return (
		<div className="about-page">
			<header className="header mb-20">
				<h1 className="bg-indigo-500text-2xl bg-indigo-600 px-4 py-2 text-white mt-3 mr-4 rounded hover:bg-white hover:text-indigo-600 transition-duration-500 ease-in-out">About Us</h1>
			</header>
			<div className="flex flex-col space-y-40">
				<section>
					<div className="container flex space-x-40">
						<h2 className="w-1/4 text-7xl">Who We Are</h2>
						<p className="text-2xl">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
							facilisi. Nullam id sapien turpis. Proin scelerisque nec leo sed
							convallis. Cras vel ex euismod, feugiat metus in, vehicula risus.
							Morbi condimentum, est nec consectetur feugiat, metus nulla
							vulputate felis, a lacinia libero tortor eget est. Proin mattis
							ultricies velit, sed tincidunt dui dictum sit amet.
						</p>
					</div>
				</section>
				<section>
					<div
						className="container flex  
         space-x-40"
					>
						<p className="text-2xl">
							Curabitur auctor dignissim est, id consequat orci volutpat sed.
							Duis porttitor vehicula odio, a pharetra nisi tincidunt nec. Fusce
							bibendum sollicitudin est vitae consequat. Vivamus pulvinar,
							libero eu interdum rhoncus, est orci fringilla felis, a eleifend
							est massa vel odio. Nullam posuere diam eu magna feugiat, non
							aliquet mauris fringilla.
						</p>
            <h2 className="w-1/4 text-7xl">Our Mission</h2>
					</div>
				</section>
			</div>
		</div>
	);
}
