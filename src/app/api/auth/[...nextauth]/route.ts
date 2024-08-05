// imports
import NextAuth from "next-auth";

// importing providers
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string, // need to provide these values in .env.local
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string, // need to provide these values in .env.local
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    // custom provider
  ],

  pages: {
    signIn: "/auth/signin",
  },

  callbacks: {
    // use callback to capture user data from provider and save it to database
    // ... custom implementation
  },
});

export { handler as GET, handler as POST };
