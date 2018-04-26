import React from 'react'
import {Form, Button, Input, Icon, Row, Col, DatePicker, Spin} from 'antd'
import styled from 'styled-components'
import Panel from 'components/Panel'

const FormItem = Form.Item
const {TextArea} = Input
const StyledForm = styled(Form)`
	border: 1px solid rgba(194, 196, 199, 0.35);
	padding: 20px;
	margin-bottom: 20px;
`
const StyledButton = styled(Button)`
	margin-left: 20px;
	float: right;
`
const StyledDatePicker = styled(DatePicker)`
	width: 100%;
`
const StyledSpin = styled(Spin)`
	margin: 10px calc(50% - 10px) 0;
`

class InvoiceForm extends React.PureComponent {
	constructor(props) {
		super(props)

		this.cancel = this.cancel.bind(this)
	}
	componentDidMount() {
		this.props.invoiceId && this.props.getInvoice && this.props.getInvoice()
	}
	cancel() {
		this.props.showForm && this.props.showForm(null, null)
	}
	render() {
		const {getFieldDecorator, getFieldsError, getFieldError} = this.props.form
		return <Panel>
			{this.props.loading
				? <StyledSpin/>
				: [<StyledForm key="form">
					<Row gutter={16}>
						<Col span={12}>
							<FormItem label="Number">
								{getFieldDecorator(`number`, {
									rules: [{
										required: true,
										message: `Please input invoice number`
									}]
								})(
			            			<Input
			            				addonAfter={<Icon type="setting"/>}
			            				placeholder="Input number"
			            			/>
								)}
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem label="Invoice Date">
								{getFieldDecorator(`date`, {
									rules: [{
										required: true,
										message: `Please select invoice date`
									}]
								})(
			            			<StyledDatePicker/>
								)}
							</FormItem>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<FormItem label="Supply Date">
								{getFieldDecorator(`supplyDate`, {
									
								})(
			            			<StyledDatePicker/>
								)}
							</FormItem>
						</Col>
					</Row>
					<Row>
						<Col span={24}>
							<FormItem label="Comment">
								{getFieldDecorator(`comment`, {
									
								})(
			            			<TextArea type="textarea" autosize/>
								)}
							</FormItem>
						</Col>
					</Row>
				</StyledForm>,
				<Row key="buttons">
					<Col span={6} offset={18}>
						<StyledButton type="primary">Save</StyledButton>
						<StyledButton onClick={this.cancel}>Cancel</StyledButton>
					</Col>
				</Row>]
			}
		</Panel>
	}
}

const WrappedInvoiceForm = Form.create()(InvoiceForm);

export default WrappedInvoiceForm