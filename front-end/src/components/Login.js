import React, { useState, useEffect } from "react";
// import "./components/Login.css";
import { Amplify } from "aws-amplify";
import { awsExports } from "./aws-exports";
import {
  Authenticator,
  Heading,
  useTheme,
  View,
  Button,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { I18n } from "aws-amplify";
import { translations } from "@aws-amplify/ui-react";
I18n.putVocabularies(translations);

I18n.putVocabulariesForLanguage("en", {
  "Sign In": "Login", // Tab header
  "Sign in": "Log in", // Button label
  "Sign in to your account": "Welcome Back!",
  email: "Enter your username", // Username label
  Password: "Enter your password", // Password label
  "Forgot your password?": "Reset Password",
  originalMessage: "enter correct email",
  translatedMessage: "Username cannot have whitespace.",
});

Amplify.configure({
  Auth: {
    region: awsExports.REGION,
    userPoolId: awsExports.USER_POOL_ID,
    userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID,
  },
});
const components = {
  SignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Log in to NextByte
        </Heading>
      );
    },
    Footer() {
      const { toResetPassword } = useAuthenticator();
      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
            color="blue"
          >
            Forgot Password?
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();
      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
            color="blue"
          >
            Back to LogIn
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
  },
  ResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
  },
};

const formFields = {
  signUp: {
    email: {
      label: "Email:",
      order: 1,
    },
    given_name: {
      label: "Firstname:",
      order: 2,
    },
    family_name: {
      label: "Surname:",
      order: 3,
    },
    password: {
      label: "Password:",
      placeholder: "Enter your Password:",
      isRequired: false,
      order: 4,
    },
    confirm_password: {
      label: "Confirm Password:",
      order: 5,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: "Enter your Password:",
    },
  },
  resetPassword: {
    username: {
      placeholder: "Enter your email:",
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: "Enter your Confirmation Code:",
      label: "Confirmation Code",
      isRequired: false,
    },
    confirm_password: {
      placeholder: "Enter your Password Please:",
    },
  },

  confirmSignIn: {
    confirmation_code: {
      label: "Confirmation Code",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
};

export default function Login() {
  return (
    <Authenticator
      formFields={formFields}
      components={components}
      loginMechanisms={["email"]}
    >
      {({ signOut }) => <button onClick={signOut}>Log out</button>}
    </Authenticator>
  );
}
