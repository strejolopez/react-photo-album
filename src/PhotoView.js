import React from 'react'
import data from './data.json'


const styles = {
	button: {

	},
	container: {
		width:5000,
		height:3000,
	},
	name: {
		display:'block',
  	background:'grey',
  	color:'black',
  	textAlign:'center',
  	padding:'10 0',
  	fontSize:300,
  	width:4000,
  	margin:'auto'
	},
	mainbox: {
		margin:'auto'
	},
	img: {
		width:3000,
    height:'100%',
    marginLeft:1000
	}
}




class PhotoView extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			photo: data.photos.filter(photo=>{
				return Number(photo.id) === Number(this.props.match.params.photoId)
			})[0]
		}
	}
	goback = (e) => {
		e.preventDefault()
		this.props.history.goBack()
	}

	render() {
		return (
			<div style={styles.container} className="photoview">
				<button onClick={this.goback}>Go Back</button>
				<div style={styles.mainbox}>	
					<h1>{this.state.photo.name}</h1>
					<img style={styles.img} src={this.state.photo.url} alt={this.state.photo.name} />
					<span style={styles.name}>{this.state.photo.name}</span>
				</div>
			</div>
		)
	}
}

export default PhotoView