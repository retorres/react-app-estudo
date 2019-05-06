import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'

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
                        <img src={ Pokeball } alt="a pokeball"></img>
                        <div className=" card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text" > {post.title}</span>
                            </Link>
                            <p> {post.body} </p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center" >  no posts yet</div>
            )
        return (
            <div className="container home" >
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home