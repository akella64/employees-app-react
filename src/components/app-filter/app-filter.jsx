import './app-filter.css'
import nextId from 'react-id-generator'

const AppFilter = (props) => {

	const { filter, onUpdateFilter } = props

	const dataButtons = [
		{key: nextId(), label: 'all', name: 'Все сотрудники'},
		{key: nextId(), label: 'rise', name: 'На повышение'},
		{key: nextId(), label: 'updateSalary', name: 'З/П больше 1000$'}
	]

	const items = dataButtons.map(item => {
		const active = (filter === item.label) ? 'btn-light' : 'btn-outline-light'
		return (
			<button onClick={() => onUpdateFilter(item.label)} key={item.key} data-label={item.label} className={`btn ${active}`} type="button">
				{item.name}
			</button>
		)
	})

		return (
			<div className="btn-group">
				{items}
			</div>
		)
}

export default AppFilter