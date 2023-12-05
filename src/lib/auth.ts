/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { NextAuthOptions } from "next-auth";
// import NextAuth from "next-auth/next";
// import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// import Providers from "next-auth/providers/google";
// import type { NextApiRequest, NextApiResponse } from "next";

// type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

type Profile = {
	email?: string;
	// other profile properties
};

type Account = {
	provider: string;
	// other account properties
};

// Define authentication options using NextAuthOptions interface
export const authOptions: NextAuthOptions = {
	// Customize authentication pages
	pages: {
		signIn: "/login", // Redirect users to "/login" when signing in
	},
	// Configure session management
	session: {
		strategy: "jwt", // Use JSON Web Tokens (JWT) for session management
	},
	// added secret key
	secret: process.env.NEXTAUTH_SECRET,

	callbacks: {
		signIn({
			account,
			profile,
		}: {
			account: Account | null;
			profile?: Profile;
		}) {
			if (account && account.provider === "google" && profile?.email) {
				const result: string | boolean =
					profile.email.endsWith("@vitstudent.ac.in");
				return Promise.resolve(result);
			}

			// Default case, return a resolved Promise with a boolean value
			return Promise.resolve(false);
		},
	},

	// Configure authentication providers
	providers: [
		GoogleProvider({
			// Configure Google authentication provider with environment variables
			clientId: process.env.GOOGLE_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
		}),
		// CredentialsProvider({}), // Include a Credentials provider (username/password)
	],
};
