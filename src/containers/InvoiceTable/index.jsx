import React from 'react'
import {Table} from 'antd'
import Panel from 'components/Panel'
import Label from 'components/Label'
import ActionButtons from './content/ActionButtons'
// import inject from './inject'

const mockData = [
	{
		id: 1,
		number: `1`,
		date: `2018-04-26`,
		supplyDate: null,
		comment: `comment`
	}, {
		id: 2,
		number: `2`,
		date: `2018-04-26`,
		supplyDate: null,
		comment: null
	}
]

class InvoiceTable extends React.PureComponent {
	constructor(props) {
		super(props)

		this.columns = [
			{
				title: 'Create',
				dataIndex: 'date',
				key: 'date'
			}, {
				title: 'No',
				dataIndex: 'number',
				key: 'number'
			}, {
				title: 'Supply',
				dataIndex: 'supplyDate',
				key: 'supply'
			}, {
				title: 'Comment',
				dataIndex: 'comment',
				key: 'comment'
			}, {
				title: 'Actions',
				key: 'actions',
				render: (text, record) => <ActionButtons data={record} edit={this.props.editClick}/>
			}
		]
	}
	render() {
		return <Panel>
			<Label>Invoices</Label>
			<Table
				dataSource={mockData}
				columns={this.columns}
				pagination={{position: `bottom`}}
				rowKey="id"
			/>
		</Panel>
	}
}

// export default inject(InvoiceTable)
export default InvoiceTable