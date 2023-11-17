import React, { createContext, useState, useEffect } from "react";
import { signIn, signOut } from "aws-amplify/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState();

	useEffect(() => {
		console.log("AuthProvider mounted");
		return () => {
			console.log("AuthProvider unmounted");
		};
	}, []);

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
						type: "error",
						message:
							"Please confirm your email address before attempting to log in.",
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
		<AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
			{children}
		</AuthContext.Provider>
	);
};
