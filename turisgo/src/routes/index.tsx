import { createBrowserRouter } from 'react-router';
import { Layout } from "../components/layout/layout";
import { HomePage } from "../pages/HomePage";
import { NotFound } from '../pages/NotFound';
import { NewAttraction } from '../pages/NewAttraction';

import { SearchResults } from '../pages/SearchResults';

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "notfound", element: <NotFound /> },
			{ path: "pontos/novo", element: <NewAttraction /> },
			{ path: "pontos", element: <SearchResults /> },
		],
	}
]);
