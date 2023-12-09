import './index.css'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <ul>{<BlogList />}</ul>
  </div>
)

export default Home
