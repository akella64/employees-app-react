import './app-info.css'

const AppInfo = ({lengthItems, increaseItems}) => {
	return (
		<div className="app-info">	
				<h1>Учет сотрудников в компании "Новая жизнь"</h1>

				<h2>Общее число сотрудников: {lengthItems} чел.</h2>
				<h2>Премию получат: {increaseItems} чел.</h2>
		</div>
	)
}

export default AppInfo