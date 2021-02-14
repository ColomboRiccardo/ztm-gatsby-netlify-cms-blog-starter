import React from "react";

const Footer = () => {
	return (
		<footer className="mt-4 text-gray-900 dark:text-white">
			© {new Date().getFullYear()}, Built with
			{` `}
			<a href="https://www.gatsbyjs.com">Gatsby</a>
		</footer>
	);
};

export default Footer;
