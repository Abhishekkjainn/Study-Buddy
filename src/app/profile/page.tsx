import { getServerSession } from "next-auth/next";
import { authOptions } from "../../lib/auth";
import ProfileForm from "./ProfileForm";

export default async function Profile() {
	const session = await getServerSession(authOptions);
	if (!session) {
		return (
			<div className="min-h-screen min-w-full flex justify-center items-center">
				
				<p>Access Denied</p>
			</div>
		);
	}

	return (
		<div>
			<div>
				{/* <h1>Protected Page</h1>
				<p>You can view this page because you are signed in.</p> */}
			</div>
			<div>
				<ProfileForm />
			</div>
		</div>
	);
}
