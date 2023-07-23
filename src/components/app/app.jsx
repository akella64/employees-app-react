import { Component } from 'react'
import nextId from 'react-id-generator'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

class App extends Component {
	

	constructor(props) {
		super(props)
		this.state = {
			data: [
				{name: 'Иван', lastname: 'Иванов', salary: 800, increase: false, rise: false, id: nextId()},
				{name: 'Владимир', lastname: 'Сергеев', salary: 1000, increase: false, rise: false, id: nextId()},
				{name: 'Александр', lastname: 'Иваньков', salary: 3000, increase: false, rise: false, id: nextId()}
			],
			emptyItem: false,
			term: '',
			filter: ''
		}
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
			const index = data.findIndex(item => item.id === id) // поиск индекса по id
			
			// метод удаления элементов массива
/* 			const before = data.slice(0, index)
			const after = data.slice(index + 1)
			const newArr = [...before, ...after] */

			return {
				data: data.filter(item => item.id !== id) // более укороченный метод с помощью filter
			}
		})
	}

	addItem = (e) => {
		const item = {
			name: e.name,
			lastname: e.lastname,
			salary: e.salary,
			increase: false,
			rise: false,
			id: nextId()
		}
		if (e.name !== '' && e.lastname !== '' && e.salary !== '') {
			this.setState({data: [...this.state.data, item]})
			this.setState({emptyItem: true})
		} else {
			this.setState({emptyItem: false})
		}
	}

	onToggleProp = (id, prop) => {

		// обновление объекта
			/*	this.setState(({data}) => {
 				const index = data.findIndex(elem => elem.id === id)

				const old = data[index]
				const newItem = {...old, increase: !old.increase}
				const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

				return {
					data: newArr
				} 
			})
*/

		// способ обновление объекта через map()
			this.setState(({data}) => ({
				data: data.map(elem => {
					if (elem.id === id) {
						return {...elem, [prop]: !elem[prop]}
					}
					return elem
				})
			}))
	}
	
	searchEmp = (items, term) => {
		if (items.length === 0) {
				return items
		}

		return items.filter(item => {
			const fullName = `${item.name.toLowerCase()} ${item.lastname.toLowerCase()}`
			return fullName.indexOf(term) > -1
		})
	}

	onUpdateSearch = (term) => this.setState({term})

	filterPost = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter(item => item.rise);
			case 'updateSalary':
				return items.filter(item => item.salary > 1000);
			default:
				return items;
		}
	}

	onUpdateFilter = (filter) => this.setState({ filter })

	newSalary = (id, salary) => {
		this.setState(({data}) => {
			const updateData = data.map(item => {
				if (id === item.id) {
					return {
						...item,
						salary
					}
				}
				return item
		})
			return {data: updateData}
		})
	}

	render() {

	const { data, emptyItem, term, filter } = this.state

	const lengthItems = data.length
	const increaseItems = data.filter(item => item.increase).length

	const visibleData = this.filterPost(this.searchEmp(data, term), filter)

		return (
			<div className="app">
					<AppInfo lengthItems={lengthItems} increaseItems={increaseItems} />
	
					<div className="search-panel">
						<SearchPanel onUpdateSearch={this.onUpdateSearch}/>
						<AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter}/>
					</div>
	
					<EmployeesList 
						data={visibleData}
						onDelete={this.deleteItem}
						onToggleProp={this.onToggleProp}
						newSalary={this.newSalary}
					/>
					<EmployeesAddForm emptyItem={emptyItem} dataItem={this.addItem}/>
			</div>
		)
	}
}

export default App