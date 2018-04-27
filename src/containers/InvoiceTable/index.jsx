import React from 'react'
import {Table} from 'antd'
import Panel from 'components/Panel'
import Label from 'components/Label'
import ActionButtons from './content/ActionButtons'
import inject from './inject'
import styled from 'styled-components'

const StyledTable = styled(Table)`
	.ant-table-tbody > tr > td {
		padding: 10px 16px;
	}
`

class InvoiceTable extends React.PureComponent {
	constructor(props) {
		super(props)

		this.columns = [
			{
				title: `Create`,
				dataIndex: `date`,
				key: `date`,
				sorter: true
			}, {
				title: `No`,
				dataIndex: `number`,
				key: `number`,
				sorter: true
			}, {
				title: `Supply`,
				dataIndex: `supplyDate`,
				key: `supply`,
				sorter: true
			}, {
				title: `Comment`,
				dataIndex: `comment`,
				key: `comment`,
				sorter: true
			}, {
				title: `Actions`,
				key: `actions`,
				render: (text, record) => <ActionButtons
					data={record}
					edit={this.props.editClick}
					delete={this.props.deleteInvoice}
				/>
			}
		]

		const sorter = this.props.sorter
		sorter && this.columns.forEach(column => {
			if (column.dataIndex === sorter.field) {
				column.defaultSortOrder = sorter.order
			}
		})

		this.handleTableChange = this.handleTableChange.bind(this)
	}
	componentDidMount() {
		this.props.getInvoices && this.props.getInvoices()
	}
	handleTableChange(pagination, filters, {field, order}) {
		const sorter = {field, order}
		const storeField = this.props.sorter && this.props.sorter.field || undefined
		const storeOrder = this.props.sorter && this.props.sorter.order || undefined

		if (storeField !== field || storeOrder !== order) {
			this.props.setSorter && this.props.setSorter(sorter)
			this.props.getInvoices && this.props.getInvoices()
		}
	}
	render() {
		return <Panel>
			<Label>Invoices</Label>
			<StyledTable
				dataSource={this.props.invoices}
				columns={this.columns}
				pagination={{position: `bottom`}}
				rowKey="id"
				loading={this.props.loading}
				onChange={this.handleTableChange}
			/>
		</Panel>
	}
}

export default inject(InvoiceTable)