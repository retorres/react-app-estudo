const initState = {
    posts: [
        { id: 1, title: 'Squirtle', body: 'the squirtle text' },
        { id: 2, title: 'CHarmander', body: 'the c text' },
        { id: 3, title: 'Bubassaur', body: 'the d text' },
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action) 

    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })

        return {
            ...state,
            posts: newPosts
        }
    }

    return state;
}

export default rootReducer;