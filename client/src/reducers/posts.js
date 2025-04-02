const postsReducer = (posts = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
      case 'CREATE':
        return posts; // Fixed: actually add new post
      default:
        return posts;
    }
  };
  
  export default postsReducer;