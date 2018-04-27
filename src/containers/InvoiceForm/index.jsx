import React from 'react'
import moment from 'moment'
import {Form, Button, Input, Icon, Row, Col, DatePicker, Spin} from 'antd'
import styled from 'styled-components'
import Panel from 'components/Panel'
import {dateFormat} from 'common/constants'
import inject from './inject'

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

const formatDate = momentDate =>
	momentDate && moment.isMoment(momentDate) && momentDate.format(dateFormat)
const getDateValue = strDate =>
	strDate && moment(strDate, dateFormat)

class InvoiceForm extends React.PureComponent {
	constructor(props) {
		super(props)

		this.cancel = this.cancel.bind(this)
		this.formSubmit = this.formSubmit.bind(this)
	}
	componentDidMount() {
		this.props.invoiceId && this.props.getInvoice
		&& this.props.getInvoice(this.props.invoiceId)
	}
	cancel() {
		this.props.showForm && this.props.showForm(null, null)
	}
	formSubmit(e) {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				let {date, supplyDate, ...data} = values
				date = formatDate(date)
				supplyDate = formatDate(supplyDate)

				this.props.setInvoice
					&& this.props.setInvoice({
						id: this.props.invoiceId,
						date,
						supplyDate,
						...data
					})
				this.props.showForm && this.props.showForm(null, null)
			}
		})
	}
	render() {
		const {getFieldDecorator} = this.props.form

		return <Panel>
			{!this.props.invoice || this.props.loading
				? <StyledSpin/>
				: [<StyledForm key="form">
					<Row gutter={16}>
						<Col span={12}>
							<FormItem label="Number">
								{getFieldDecorator(`number`, {
									initialValue: this.props.invoice.number,
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
									initialValue: getDateValue(this.props.invoice.date),
									rules: [{
										required: true,
										message: `Please select invoice date`
									}]
								})(
									<StyledDatePicker format={dateFormat}/>
								)}
							</FormItem>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<FormItem label="Supply Date">
								{getFieldDecorator(`supplyDate`, {
									initialValue: getDateValue(this.props.invoice.supplyDate)
								})(
									<StyledDatePicker format={dateFormat}/>
								)}
							</FormItem>
						</Col>
					</Row>
					<Row>
						<Col span={24}>
							<FormItem label="Comment">
								{getFieldDecorator(`comment`, {
									initialValue: this.props.invoice.comment
								})(
									<TextArea type="textarea" autosize/>
								)}
							</FormItem>
						</Col>
					</Row>
				</StyledForm>,
				<Row key="buttons">
					<Col span={24}>
						<StyledButton type="primary" onClick={this.formSubmit}>Save</StyledButton>
						<StyledButton onClick={this.cancel}>Cancel</StyledButton>
					</Col>
				</Row>]
			}
		</Panel>
	}
}

const WrappedInvoiceForm = Form.create()(InvoiceForm)

export default inject(WrappedInvoiceForm)