import type { Components } from '@mui/material';

type MuiCssBaselineProps = Components['MuiCssBaseline'];

export const MuiCssBaseline: MuiCssBaselineProps = {
	styleOverrides: {
		':root': {
			'@media (max-width: 1090px)': {
				fontSize: '87.5%',
			},
			margin: 0,
			padding: 0,

			boxSizing: 'border-box',

			'::-webkit-scrollbar, ::-webkit-scrollbar': {
				// backgroundColor: `${Color.MARINE_GREEN_09}`,
				width: '6px',
				height: '6px',
			},
			'::-webkit-scrollbar-thumb, ::-webkit-scrollbar-thumb': {
				borderRadius: 10,
				// backgroundColor: Color.MARINE_GREEN_10,
				// minHeight: 24,
			},
			'::-webkit-scrollbar-thumb:focus, ::-webkit-scrollbar-thumb:focus': {
				// backgroundColor: Color.MARINE_GREEN_10,
			},
			'::-webkit-scrollbar-thumb:active,::-webkit-scrollbar-thumb:active': {
				// backgroundColor: Color.MARINE_GREEN_10,
			},
			'::-webkit-scrollbar-thumb:hover,::-webkit-scrollbar-thumb:hover': {
				// backgroundColor: Color.MARINE_GREEN_10,
			},
			'::-webkit-scrollbar-corner,::-webkit-scrollbar-corner': {
				// backgroundColor: Color.MARINE_GREEN_10,
			},
		},
		body: {},
	},
};
