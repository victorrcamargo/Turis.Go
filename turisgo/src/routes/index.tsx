import { createBrowserRouter, Navigate } from 'react-router';
import { Layout } from "../components/layout/layout";
import { HomePage } from "../pages/HomePage";
import { NotFound } from '../pages/NotFound';
import { NewAttraction } from '../pages/NewAttraction';

import { SearchResults } from '../pages/SearchResults';
import { AttractionDetails } from '../pages/AttractionDetails';

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "notfound", element: <NotFound /> },
			{ path: "pontos/novo", element: <NewAttraction /> },
			{ path: "pontos", element: <SearchResults /> },
			{ path: "pontos/:id", element: <AttractionDetails /> },

			{ path: "*", element: <Navigate to="/notfound" replace /> },
		],
	}
]);
