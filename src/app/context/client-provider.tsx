"use client";

import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Provider({
	children,
	session,
}: {
	children: React.ReactNode;
	session: any;
}): React.ReactNode {
	return (
		<SessionProvider session={session}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</SessionProvider>
	);
}
