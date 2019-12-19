import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import './style.scss'

function App() {
	const [count, setCount] = useState(0)

	useEffect(() => {
		document.title = 'TEST APP'
	}, [])

	const onIncrease = () => {
		setCount(count => count + 1)
	}

	const onDecrease = () => {
		setCount(count => count - 1)
	}

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={onIncrease}>+1</button>
			<button onClick={onDecrease}>-1</button>
		</div>
	)
}

export default hot(App)
