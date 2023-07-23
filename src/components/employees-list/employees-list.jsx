import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleProp, newSalary}) => {

	const elements = data.map(item => {

		const {id, ...props} = item;
		return (
			<EmployeesListItem 
			key={id} 
			{...props}
			id={id}
			newSalary={newSalary}
			onDelete={() => onDelete(id)}
			onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
			/>
		)
		
	})

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
		
	)
}

export default EmployeesList