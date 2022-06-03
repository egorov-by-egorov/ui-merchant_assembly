import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
	palette: {
		primary: {
			light: '#4cb5f4',
			main: '#109cf1',
			dark: '#0e84cd',
			contrastText: '#fff',
		},
		secondary: {
			light: '#a3a1aa',
			main: '#84828E',
			dark: '#777580',
			contrastText: '#fff',
		},
		error: {
			light: '#f9867c',
			main: '#f7685b',
			dark: '#de5e52',
			contrastText: '#fff',
		},
		warning: {
			light: '#ffdb66',
			main: '#ffc300',
			dark: '#f3ba00',
			contrastText: '#fff',
		},
		info: {
			light: '#a683fa',
			main: '#885af8',
			dark: '#6d48c6',
			contrastText: '#fff',
		},
		success: {
			light: '#c7d94b',
			main: '#b4cd0f',
			dark: '#99ae0d',
			contrastText: '#fff',
		},
		text: {
			primary: '#282340',
			secondary: '#84828E',
			disabled: '#D7DAE4',
		},
		action: {
			active: '#b8c0d4',
			hover: '#ffffff',
			selected: '#ffffff',
			disabled: '#c2cfe0',
			disabledBackground: '#f3f5f9',
		},
		background: {
			default: '#f7f7f8',
			paper: '#ffffff',
		},
		divider: '#D7DAE4',
	},
	typography: {
		fontFamily: 'Inter, sans-serif',
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 600,
		h1: {
			fontSize: '4rem',
			fontWeight: 300,
		},
		h2: {
			fontSize: '3.250rem',
			fontWeight: 300,
		},
		h3: {
			fontSize: '2.750rem',
			fontWeight: 400,
		},
		h4: {
			fontSize: '2rem',
			fontWeight: 500,
		},
		h5: {
			fontSize: '1.500rem',
			fontWeight: 400,
		},
		h6: {
			fontSize: '1.250rem',
			fontWeight: 500,
		},
		body1: {
			fontSize: '1rem',
			fontWeight: 400,
			lineHeight: 1.5,
		},
		body2: {
			fontSize: '0.875rem',
			fontWeight: 400,
			lineHeight: 1.45,
		},
		button: {
			fontSize: '1rem',
			fontWeight: 600,
			textTransform: 'uppercase',
		},
		caption: {
			fontSize: '0.770rem',
			fontWeight: 400,
			lineHeight: 1.45,
		},
		subtitle1: {
			fontSize: '1.125rem',
			fontWeight: 400,
			lineHeight: 1.5,
		},
		subtitle2: {
			fontSize: '0.750rem',
			fontWeight: 500,
			lineHeight: 1.5,
		},
		overline: {
			fontSize: '0.625rem',
			fontWeight: 400,
			textTransform: 'uppercase',
			lineHeight: 1.75,
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
});

export default theme;
