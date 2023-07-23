import './employees-list-item.css'

const EmployeesListItem = (props) => {

	const {id, name, lastname, salary, onDelete, onToggleProp, increase, rise, newSalary} = props

	const increaseClass = (increase) ? 'increase' : ''
	const likeClass = (rise) ? ' like' : ''

	const onChangeSalary = (e) => {
		newSalary(id, parseInt(e.target.value))
	}

	return (
		<li className={increaseClass + likeClass + ' list-group-item d-flex justify-content-between'}>
				<span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">
						{name} {lastname}
				</span>
				<input type="text" defaultValue={salary + '$' || ''} onChange={onChangeSalary} className="list-group-item-input" />
				<div className="f-flex justify-content-center align-items-center">

					<button type="button" className="btn-cookie btn-sm" onClick={onToggleProp} data-toggle="increase">
						<i className="fas fa-cookie"></i>
					</button>
					<button type="button" className="btn-trash btn-sm" onClick={onDelete}>
						<i className="fas fa-trash"></i>
					</button>

					<i className="fas fa-star"></i>
		
					</div>
		</li>
	)
}

export default EmployeesListItem