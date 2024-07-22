import type { Components, Theme } from '@mui/material';

type MuiButtonProps = Components['MuiButton'];

export const MuiButton: MuiButtonProps = {
	styleOverrides: {
		root: {
			borderRadius: 28,
			textTransform: 'none',
			boxShadow: 'none',
			minHeight: 52,

			'&:hover': {
				boxShadow: 'none',
			},
		},

		contained: {
			// color: Color.NEUTRAL_14,
		},
	},
};
