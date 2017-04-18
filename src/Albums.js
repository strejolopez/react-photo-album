import React from 'react'
import { Link } from 'react-router-dom'
import data from './data.json'

const styles = {
	img: {
		width:2000,
		height:1500,
		
	},
	grid: {
		display:'flex',
		flexWrap:'wrap',
		justifyContent:'space-around',
		BackgroundImage:"https://mdn.mozillademos.org/files/7693/catfront.png"
	},
	title: {
		display:'block',
  	background:'grey',
  	color:'black',
  	textAlign:'center',
  	padding:'10 0',
  	fontSize:100
	},
	mainTitle: {
		textAlign:'center',
  	padding:10,
  	margin:0,
  	color:'black',
  	backgroundColor:'Grey',
  	fontSize:300
	}
}




class Albums extends React.Component {
	constructor() {
		super()
		this.state = {
			albums: data.gallery
		}
	}

	render() {
		return (
			<div>
				<h1 style={styles.mainTitle} className="mainheading">My Albums</h1>
				<div style={styles.grid} className="grid">
					{this.state.albums.map(album=>(
						<div key={'album' + album.id}>
							<Link to={"/album/" + album.id}>
								<img style={styles.img} src={album.coverphoto} alt={album.name} />
								<span style={styles.title} className="name">{album.name}</span>
							</Link>
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default Albums