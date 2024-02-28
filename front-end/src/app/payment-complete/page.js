import { Suspense } from "react";
import PaymentComplete from "../../components/PaymentComplete";

const Page = () => {
	return (
		<Suspense>
			<PaymentComplete />
		</Suspense>
	);
};

export default Page;
