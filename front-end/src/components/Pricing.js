import * as React from "react";
import Box from "@mui/material/Box";

function Pricing() {
	return (
		<Box sx={{ mb: 10 }}>
			<stripe-pricing-table
				pricing-table-id="prctbl_1NuPsFLoiLBmpxqiKuBTv1JO"
				publishable-key="pk_test_51NpN43LoiLBmpxqifOYqQuagPOWXBfGFI4qaGqhcMN84DzYFC1RPCb1F1SOAgiSFL0owHIe23ylwHszp1Dt8n09u00I0KLUkzx"
			></stripe-pricing-table>
		</Box>
	);
}

export default Pricing;
