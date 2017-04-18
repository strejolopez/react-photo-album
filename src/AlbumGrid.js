import React from 'react'
import { Link } from 'react-router-dom'
import data from './data.json'



const styles = {
	mainTitle: {
		textAlign:'center',
  	padding:10,
  	margin:0,
  	color:'black',
  	backgroundColor:'Grey',
  	fontSize:300
	},
	img: {
		width:2500,
		height:1500,
	},
	title: {
		display:'block',
  	background:'grey',
  	color:'black',
  	textAlign:'center',
  	padding:'10 0',
  	fontSize:100,
  	textDecoration:'none'
  },
  container: {
  	display:'flex'
  },
  mainbox: {
  	marginLeft:500
  }
}

class AlbumGrid extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: data.gallery.filter(album=>{
				return Number(album.id) === Number(this.props.match.params.albumId)
			})[0].name,
			photos: data.photos.filter(photo=>{
				return Number(photo.albumid) === Number (this.props.match.params.albumId)
			})
		}
	}

	componentWillReceiveProps(props) {
		this.setState({
			name: data.gallery.filter(album=>{
				return Number(album.id) === Number(this.props.match.params.albumId)
			})[0].name,
			photos: data.photos.filter(photo=>{
				return Number(photo.albumid) === Number (this.props.match.params.albumId)
			})
		})
	}
	render() {
		return (
			<div style={styles.container} className="albumPage">
				<div className="nav">
					{data.gallery.map(album=>(
						<Link key={'nav' + album.id} to={"/album/" + album.id}>
						{album.name}
						</Link>
					))}
				</div>
				<div style={styles.mainbox}>
					<h1 style={styles.mainTitle} className="albumheading">{this.state.name}</h1>
					<div className="grid1">
						{this.state.photos.map(photo=>(
							<div key={'photolink' + photo.id}>
								<Link to={"/photo/" + photo.id}>
									<img style={styles.img} src={photo.url} alt={photo.name} />
									<span style={styles.title} className="name">{photo.name}</span>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}
}

export default AlbumGrid