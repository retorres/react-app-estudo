import React from 'react'
import axios from 'axios'
//const Home = () => {
class Home extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({ posts: res.data.slice(0, 10) })
            })
    }
    render() {
        const { posts } = this.state
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className=" card-content">
                            <span className="card-title"> {post.title}</span>
                            <p> {post.body} </p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center" >  no posts yet</div>
            )
        return (
            <div className="container" >
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home