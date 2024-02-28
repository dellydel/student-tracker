import { Suspense } from "react";
import Error from "../../components/Error";

const Page = () => {
	return (
		<Suspense>
			<Error />
		</Suspense>
	);
};

export default Page;
