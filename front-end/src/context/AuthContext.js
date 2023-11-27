import React, { createContext, useState, useEffect } from "react";
import {
	signIn,
	signOut,
	confirmSignUp,
	resetPassword,
	confirmResetPassword,
	getCurrentUser,
} from "aws-amplify/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState();
	const [user, setUser] = useState();
	const [showLogin, setShowLogin] = useState(false);

	useEffect(() => {
		const currentAuthenticatedUser = async () => {
			try {
				const { userId, signInDetails } = await getCurrentUser();
				if (userId) {
					setIsLoggedIn(true);
					setUser(signInDetails.loginId);
				}
			} catch (error) {
				return { error };
			}
		};
		currentAuthenticatedUser();
	}, []);

	const handleConfirmation = async (username, confirmationCode) => {
		try {
			const result = await confirmSignUp({
				username,
				confirmationCode,
			});
			setIsLoggedIn(result.isSignUpComplete);
			setUser(username);
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
				isLoggedIn,
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
