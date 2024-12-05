# Expo App with Authentication and Gluestack Integration 

This is an Expo project created with `create-expo-app`. It is designed to streamline user authentication using Google and Supabase providers, while also leveraging **Gluestack** components for a modern, intuitive UI.

## Features 🚀
- **Google Authentication**: Easily sign in users using their Google accounts.
- **Supabase Authentication**: Supports login with multiple Supabase providers for flexibility.
- **User State Management**: Handles user session state seamlessly for a smooth app experience.
- **Gluestack Components**: Built with **Gluestack**, offering responsive, cross-platform UI components for modern app development.

## Get Started

### Install Dependencies
```bash
npm install
```

### Start the App
```bash
npx expo start
```
In the output, you'll find options to open the app in:
- A development build
- An Android emulator
- An iOS simulator
- Expo Go, a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the `app` directory. This project uses file-based routing.

### Environment Configuration
Make sure to set up the required environment variables in a `.env` file. Include your Supabase keys and Google API credentials:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## Tools Used

### Gluestack
This project utilizes **Gluestack**, a powerful framework designed to enhance app development with Expo. Gluestack simplifies UI development with intuitive, modular components, making it easier to build cross-platform applications. Learn more and find the official installation guide [here](https://v1.gluestack.io/ui/docs/guides/guides/install-expo).

### Supabase
Supabase powers the authentication system, allowing for flexible and secure user sign-in options. With support for multiple providers, it provides a robust backend-as-a-service.

## Authentication Features
- **Google Login**: Simplified sign-in via OAuth.
- **Supabase Providers**: Login options for multiple providers supported by Supabase.
- **Session Handling**: Automatic session state updates to maintain user authentication status.

## Development Utilities

### Reset Project
To start fresh, run:
```bash
npm run reset-project
```
This command moves the starter code to the `app-example` directory and creates a blank `app` directory for you to begin developing.

### Testing Authentication
To test authentication workflows, ensure that your backend services (Supabase and Google OAuth) are correctly configured, and use the pre-configured login screens available in the project.

## Learn More
Explore these resources to enhance your development experience:
- **Expo documentation**: Learn fundamentals or dive into advanced topics with our guides.
- **Learn Expo tutorial**: Follow a step-by-step guide to creating a project that runs on Android, iOS, and the web.
- **Supabase documentation**: Understand how to set up authentication and manage user data.

## Join the Community
Be part of a vibrant community of developers creating universal apps:
- **Expo on GitHub**: View our open-source platform and contribute.
- **Discord Community**: Chat with Expo and Supabase users, share insights, and ask questions.
