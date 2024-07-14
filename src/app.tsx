import React from 'react';

import { Route } from './routes';

import { BrowserRouter } from 'react-router-dom';
export function Root(): React.ReactElement {
	return (
		<BrowserRouter>
			<Route.Root />
		</BrowserRouter>
	);
}
