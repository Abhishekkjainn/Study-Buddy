import { getServerSession } from "next-auth/next";
import { authOptions } from "../../lib/auth";

export default async function Profile() {
	const session = await getServerSession(authOptions);

	fetch("http://localhost:3000/api/profile", {})
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});

	if (session) {
		return (
			<div>
				<h1>Protected Page</h1>
				<p>You can view this page because you are signed in.</p>
			</div>
		);
	}

	return (
		<div>
			<p>Access Denied</p>
		</div>
	);
}
