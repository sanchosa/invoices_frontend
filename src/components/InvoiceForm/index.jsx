import React from 'react'
import StyledContent from 'components/StyledContent'

export default props =>
	<StyledContent>
		{props.invoiceId && `Edit invoice ${props.invoiceId} Form` || `Create invoice Form`}
	</StyledContent>