import type { Components, Theme } from '@mui/material';
import { tableCellClasses } from '@mui/material';

type MuiTableHeadProps = Components['MuiTableHead'];

export const MuiTableHead: MuiTableHeadProps = {
	styleOverrides: {
		root: {
			// backgroundColor: Color.MARINE_GREEN_02,
			[`& .${tableCellClasses.root}`]: {
				paddingTop: '1rem',
			},
		},
	},
};
