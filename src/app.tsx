import { CssBaseline } from '@mui/material';
import React from 'react';
import { Route } from './routes';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { ptBR } from '@mui/x-date-pickers/locales';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './hooks/theme';

const LOCALE_TEXT =
	ptBR.components.MuiLocalizationProvider.defaultProps.localeText;

export function App(): React.ReactElement {
	return (
		<LocalizationProvider
			dateAdapter={AdapterLuxon}
			localeText={LOCALE_TEXT}
			adapterLocale="pt-br"
		>
			<ThemeProvider>
				<BrowserRouter>
					<Route.Root />
				</BrowserRouter>
				<CssBaseline />
			</ThemeProvider>
		</LocalizationProvider>
	);
}
