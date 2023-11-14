import * as yup from "yup";

const registrationValidationSchema = yup.object().shape({
	firstName: yup.string().required("Please enter firstname").min(2).max(30),
	lastName: yup.string().required("Please enter lastname").min(2).max(30),
	phoneNumber: yup
		.string()
		.required("Please enter phone number")
		.matches(/^[0-9]+$/, "Not a valid phone number"),
	email: yup.string().email("Not a valid email").required("Please enter email"),
	street: yup.string().required("Please enter the street address"),
	city: yup.string().required("Please enter your city"),
	state: yup.string().required("Please enter your state"),
	zip: yup
		.string()
		.required("Please enter zip code")
		.matches(/^[0-9]+$/, "Only digits allowed"),
	country: yup.string().required("Please enter country"),
	dateOfBirth: yup
		.date()
		.typeError("invalid date of birth !")
		.required("Please enter the date of birth")
		.max(new Date(new Date().getFullYear() - 10, 0, 1), "must be 10 years old"),
	password: yup.string().min(8).max(20).required("Please enter password"),
	confirmPassword: yup
		.string()
		.oneOf(
			[yup.ref("password")],
			"Password and the Confirm Password did not match",
		)
		.required("Please confirm password"),
});
export { registrationValidationSchema };
