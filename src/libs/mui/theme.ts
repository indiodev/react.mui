import { createTheme } from '@mui/material';

import { Components } from './components';
import { Palette } from './palette';
import { Typography } from './typography';

export const Theme = createTheme({
	palette: Palette,
	typography: Typography,
	shape: {
		borderRadius: 8,
	},
	components: Components,
});
