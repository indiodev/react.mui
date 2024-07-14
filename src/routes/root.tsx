import { Layout } from '@layouts/index';
import { Page } from '@pages/index';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export function Root(): React.ReactElement {
	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route
					path="/"
					element={<Layout.Root />}
				>
					<Route
						index
						element={<Page.Root />}
					/>
				</Route>
			</Routes>
		</React.Suspense>
	);
}
