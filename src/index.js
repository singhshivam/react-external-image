import React from 'react'
import PropTypes from 'prop-types'

class ExternalImage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			fallbackIndex: 0
		}
		this.onLoad = this.onLoad.bind(this)
		this.onError = this.onError.bind(this)
		this.fetchImage = this.fetchImage.bind(this)
	}
	componentDidMount() {
		const { src } = this.props
		this.fetchImage(src)
	}
	componentWillUnmount() {
		this.clearEvents()
	}
	onLoad() {
		this.clearEvents()
		this.setState({loading:false, failed:false})
	}
	clearEvents() {
		if (this.image) {
			this.image.removeEventListener('load', this.onLoad)
			this.image.removeEventListener('error', this.onError)
		}
	}
	onError() {
		const { fallbackImages } = this.props
		const { fallbackIndex } = this.state
		if (fallbackImages && fallbackIndex < fallbackImages.length) {
			this.fetchImage(fallbackImages[fallbackIndex])
			this.setState({fallbackIndex: fallbackIndex+1})
		} else {
			this.clearEvents()
			this.setState({loading: false, failed: true})
		}
	}
	fetchImage(src) {
		this.image = new Image()
		this.image.addEventListener('load', this.onLoad)
		this.image.addEventListener('error', this.onError)
		this.image.src = src
	}
	render() {
		const { className, loader } = this.props
		const { loading } = this.state
		if (loading) {
			return loader ? <span>{loader}</span> || null
		} else {
			return <img src={this.image.src} className={className || ""}/>
		}
	}
}

export default ExternalImage
