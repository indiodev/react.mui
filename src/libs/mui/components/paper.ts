import type { Components, Theme } from '@mui/material';

type MuiPaperProps = Components<Omit<Theme, 'components'>>['MuiPaper'];

export const MuiPaper: MuiPaperProps = {
	styleOverrides: {
		root: {
			boxShadow: '0px 0px 8px 0px #0D666626;',
		},
	},
};
