"use client";

import React, { createContext, useState, useEffect } from "react";
import {
	signIn,
	signOut,
	confirmSignUp,
	resetPassword,
	confirmResetPassword,
	getCurrentUser,
	fetchUserAttributes,
} from "aws-amplify/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [showLogin, setShowLogin] = useState(false);

	useEffect(() => {
		const getCurrentAuthenticatedUser = async () => {
			try {
				const currentUser = await getCurrentUser();
				if (currentUser) {
					const userAttributes = await fetchUserAttributes();
					setUser(userAttributes.email);
				} else {
					setUser(null);
				}
			} catch (error) {
				setUser(null);
				console.error("Error fetching user:", error);
			}
		};
		getCurrentAuthenticatedUser();
	}, []);

	const handleConfirmation = async (username, confirmationCode) => {
		try {
			const result = await confirmSignUp({
				username,
				confirmationCode,
			});
			const userAttributes = await fetchUserAttributes();
			setUser(userAttributes.email);
			return result;
		} catch (error) {
			return error;
		}
	};

	const login = async (username, password) => {
		try {
			const result = await signIn({ username, password });
			if (result.isSignedIn) {
				const userAttributes = await fetchUserAttributes();
				setUser(userAttributes.email);
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
			setUser(null);
		} catch (error) {
			console.log("error signing out: ", error);
			return { type: "error", message: error };
		}
	};

	const forgotPassword = async (username) => {
		try {
			const output = await resetPassword({ username });
			return handleResetPasswordNextSteps(output);
		} catch (error) {
			return { error };
		}
	};

	const handleResetPasswordNextSteps = (output) => {
		const { nextStep } = output;
		switch (nextStep.resetPasswordStep) {
			case "CONFIRM_RESET_PASSWORD_WITH_CODE":
				const codeDeliveryDetails = nextStep.codeDeliveryDetails;
				console.log(
					`Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`,
				);
				return { codeSent: true };
			case "DONE":
				return { complete: true };
			default:
				return { error: "Confirm password flow exited." };
		}
	};

	const handleConfirmResetPassword = async ({
		username,
		confirmationCode,
		newPassword,
	}) => {
		try {
			await confirmResetPassword({ username, confirmationCode, newPassword });
			return { complete: true };
		} catch (error) {
			return { error: error.message };
		}
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: !!user,
				login,
				logout,
				user,
				handleConfirmation,
				showLogin,
				setShowLogin,
				forgotPassword,
				handleConfirmResetPassword,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
