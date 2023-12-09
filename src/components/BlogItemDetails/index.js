import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blog: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getBlog()
  }

  getBlog = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/blogs/${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blog: updatedData, isLoading: false})
  }

  renderTheBlog = () => {
    const {blog} = this.state
    const {id, title, imageUrl, avatarUrl, author, content, topic} = blog
    return (
      <div className="blog-cont">
        <h1 className="title">{title}</h1>
        <div className="img-cont">
          <img className="avatar" src={avatarUrl} />
          <p className="author">{author}</p>
        </div>
        <img src={imageUrl} className="image" alt={title} />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderTheBlog()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
