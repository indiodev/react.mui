import type { Components, Theme } from '@mui/material';
import { toolbarClasses } from '@mui/material';

type MuiAppBarProps = Components['MuiAppBar'];

export const MuiAppBar: MuiAppBarProps = {
	styleOverrides: {
		root: {
			// backgroundColor: Color.WHITE,
			zIndex: 100,
			boxShadow: '0px 0px 8px 0px rgba(13, 102, 102, 0.15)',

			[`& .${toolbarClasses.root}`]: {
				paddingLeft: 0,
				paddingRight: 0,
			},
		},
	},
};
