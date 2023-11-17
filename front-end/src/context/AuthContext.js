import React, { createContext, useState } from "react";
import { signIn, signOut, confirmSignUp } from "aws-amplify/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState();
	const [showLogin, setShowLogin] = useState(false);

	const handleConfirmation = async (username, confirmationCode) => {
		try {
			const result = await confirmSignUp({
				username,
				confirmationCode,
			});
			return result;
		} catch (error) {
			return error;
		}
	};

	const login = async (username, password) => {
		try {
			const result = await signIn({ username, password });
			if (result.isSignedIn) {
				setIsLoggedIn(result.isSignedIn);
				setUser(username);
				return { type: "success", message: "Successfully signed in" };
			} else {
				if (result.nextStep.signInStep === "CONFIRM_SIGN_UP") {
					return {
						type: "nextSteps",
						message:
							"Please confirm your registration by entering the code that was sent to your email address.",
					};
				}
			}
		} catch (error) {
			return { type: "error", message: error.message };
		}
	};

	const logout = async () => {
		try {
			await signOut({ global: true });
			setIsLoggedIn(false);
			setUser();
		} catch (error) {
			console.log("error signing out: ", error);
			return { type: "error", message: error };
		}
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				login,
				logout,
				user,
				handleConfirmation,
				showLogin,
				setShowLogin,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
