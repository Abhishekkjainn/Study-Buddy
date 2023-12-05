import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
// import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

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
  secret: process.env.NEXT_PUBLIC_SECRET,
  // Configure authentication providers
  providers: [
    GoogleProvider({
      // Configure Google authentication provider with environment variables
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    // CredentialsProvider({}), // Include a Credentials provider (username/password)
  ],
};
