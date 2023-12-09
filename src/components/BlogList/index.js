import {Component} from 'react'
import BlogItem from '../BlogItem'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogList extends Component {
  state = {
    blogsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogs()
  }

  getBlogs = async () => {
    const url = 'https://apis.ccbp.in/blogs'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({
      blogsList: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, blogsList} = this.state

    return (
      <li className="blog-list-cont">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsList.map(each => <BlogItem details={each} key={each.id} />)
        )}
      </li>
    )
  }
}
export default BlogList
