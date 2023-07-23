import { Component } from 'react';
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			lastname: '',
			salary: ''
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

  onSubmit = (e) => {
    e.preventDefault();

		if (!this.props.emptyItem) {
			this.props.dataItem(this.state);
			this.setState({
				name: '',
				lastname: '',
				salary: ''
			})
		}

  }

	// статичный метод
	static onLog = () => {
		console.log('123test')
	}


	render() {
		const { name, lastname, salary } = this.state

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex"
								onSubmit={this.onSubmit}
								>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Имя"
										name='name'
										value={name}
										onChange={this.onValueChange}
										/>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Фамилия"
										name='lastname'
										value={lastname}
										onChange={this.onValueChange}
										/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
										name='salary'
										value={salary}
										onChange={this.onValueChange}
										/>

                <button type="submit" className="btn btn-outline-light" >Добавить</button>
            </form>
        </div>
    )
	}
}

EmployeesAddForm.onLog()

export default EmployeesAddForm;