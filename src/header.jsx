import { useState } from 'react';

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<header>
				<div className="img"></div>
				<h1>Fashion & Legacy</h1>
				<nav>
					<a href="#">Home</a>
					<a href="#">About</a>
					<a href="#">Contact</a>
					<a href="#">hello</a>
				</nav>
				<button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
					☰
				</button>
			</header>
			<div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
				<a href="#" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
				<a href="#" onClick={() => setIsMobileMenuOpen(false)}>About</a>
				<a href="#" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
				<a href="#" onClick={() => setIsMobileMenuOpen(false)}>hello</a>
			</div>
		</>
	);
}
