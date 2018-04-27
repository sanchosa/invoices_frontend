import React from 'react'
import connect from './connect'

const Img = ({number}) => {
	const onLoad = () => number !== 1 && window.print()
	return <img src={`https://picsum.photos/${number}`} onLoad={onLoad} className="noview"/>
}

export default connect(Img)