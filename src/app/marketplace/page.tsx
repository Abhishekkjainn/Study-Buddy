import { getServerSession } from "next-auth/next";
import { authOptions } from "../../lib/auth";

export default async function MarketPlace() {
	const session = await getServerSession(authOptions);
	if (!session) {
		return (
			<div>
				<p>Access Denied</p>
			</div>
		);
	}

	return (
		<div>
			<div>
				<h1>Marketplace Page</h1>
				<p>You can view this page because you are signed in.</p>
			</div>
		</div>
	);
}
