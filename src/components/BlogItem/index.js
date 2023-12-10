import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = details

  return (
    <li>
    <Link to={`/blogs/${id}`}>
      <div className="blog-item-cont">
        <img className="image" src={imageUrl} />
        <div className="text-cont">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="img-cont">
            <img className="avatar" src={avatarUrl} />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  </li>
  )
}
export default BlogItem
