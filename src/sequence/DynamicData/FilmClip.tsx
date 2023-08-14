export interface FilmClipProps {
	className?: string;
	style?: object;
}

export const FilmClip: React.FC<FilmClipProps> = ({
	className = '',
	style = {},
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 606 446"
			className={className}
			fill="currentColor"
			style={style}
		>
			<g>
				<path
					d="M0,0v446h606V0H0z M561.5,19h29v29h-29V19z M511.95,19h29v29h-29V19z M462.41,19h29v29h-29V19z M412.86,19h29v29h-29V19z
		 M363.32,19h29v29h-29V19z M313.77,19h29v29h-29V19z M264.23,19h29v29h-29V19z M214.68,19h29v29h-29V19z M165.14,19h29v29h-29V19z
		 M115.59,19h29v29h-29V19z M66.05,19h29v29h-29V19z M16.5,19h29v29h-29V19z M45.5,428h-29v-29h29V428z M95.05,428h-29v-29h29V428z
		 M144.59,428h-29v-29h29V428z M194.14,428h-29v-29h29V428z M243.68,428h-29v-29h29V428z M293.23,428h-29v-29h29V428z M342.77,428
		h-29v-29h29V428z M392.32,428h-29v-29h29V428z M441.86,428h-29v-29h29V428z M491.41,428h-29v-29h29V428z M540.95,428h-29v-29h29
		V428z M590.5,428h-29v-29h29V428z M591,385H15V61h576V385z"
				/>
			</g>
			<circle cx="303" cy="223" r="67.84" />
			<g>
				<rect x="171.5" y="213.79" width="50.25" height="18.43" />
				<rect x="384.25" y="213.79" width="50.25" height="18.43" />
			</g>
			<g>
				<rect
					x="202.66"
					y="138.57"
					transform="matrix(0.7071 0.7071 -0.7071 0.7071 171.2147 -117.7823)"
					width="50.25"
					height="18.43"
				/>
				<rect
					x="353.09"
					y="289"
					transform="matrix(0.7071 0.7071 -0.7071 0.7071 321.6483 -180.094)"
					width="50.25"
					height="18.43"
				/>
			</g>
			<g>
				<rect
					x="353.09"
					y="138.57"
					transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 750.155 -15.1579)"
					width="50.25"
					height="18.43"
				/>
				<rect
					x="202.66"
					y="289"
					transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 599.7214 348.0209)"
					width="50.25"
					height="18.43"
				/>
			</g>
			<g>
				<rect
					x="277.87"
					y="320.16"
					transform="matrix(6.123234e-17 -1 1 6.123234e-17 -26.3726 632.3726)"
					width="50.25"
					height="18.43"
				/>
				<rect
					x="277.87"
					y="107.41"
					transform="matrix(6.123234e-17 -1 1 6.123234e-17 186.3726 419.6274)"
					width="50.25"
					height="18.43"
				/>
			</g>
		</svg>
	);
};
