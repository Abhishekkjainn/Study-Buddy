import { LoginForm } from "./form";
import { authOptions } from "~/lib/auth";
import { getServerSession } from "next-auth";

export default async function LoginPage() {
	const session = await getServerSession(authOptions);
	if (session) {
		return (
			<div>
				<p>You are already logged in!</p>
			</div>
		);
	}
	return (
		<>
			<section className="bg-ct-blue-600 min-h-screen pt-20">
				<div className="container mx-auto flex h-full items-center justify-center px-6 py-12">
					<div className="bg-white px-8 py-10 md:w-8/12 lg:w-5/12">
						<LoginForm />
					</div>
				</div>
			</section>
		</>
	);
}
