import React, { Suspense } from "react";
import CheckoutComp from "../../components/CheckoutComp";

const CheckoutForm = () => {
	return (
		<Suspense>
			<CheckoutComp />
		</Suspense>
	);
};

export default CheckoutForm;
