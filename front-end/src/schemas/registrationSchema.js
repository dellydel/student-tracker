import * as yup from "yup";

const registrationSchema = yup.object().shape({
	firstName: yup.string().required("first name is required").min(2).max(30),
	lastName: yup.string().required("last name is required").min(2).max(30),
	phoneNumber: yup
		.string()
		.required("phone number is required")
		.matches(/^[0-9]+$/, "not a valid phone number"),
	email: yup.string().email("not a valid email").required("email is required"),
	street: yup.string().required("street address is required"),
	city: yup.string().required("city is required"),
	state: yup.string().required("state is required"),
	zip: yup
		.string()
		.required("zip code is required")
		.matches(/^[0-9]+$/, "only numeric digits are allowed"),
	country: yup.string().required("country is required"),
	dateOfBirth: yup
		.date()
		.typeError("invalid date of birth entered")
		.required("date of birth is required")
		.max(new Date(new Date().getFullYear() - 18, 0, 1), "must be 18 years old"),
	password: yup
		.string()
		.min(7, "password should be at least 7 characters")
		.required("password is required")
		.matches(/[0-9]+/, "One numeric character required")
		.matches(/[a-z]+/, "One lowercase character required")
		.matches(/[A-Z]+/, "One uppercase character required")
		.matches(/[@$!%*#?&]+/, "One special character required"),
	confirmPassword: yup
		.string()
		.required("please confirm password")
		.oneOf([yup.ref("password"), null], "passwords must match"),
});
export { registrationSchema };
