import { Link } from "react-router-dom";

const PostList = () => {
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    console.log(savedPosts);
    {}
    return (
      <div className="card">
        <h2>Thread List</h2>
        <div>
          {savedPosts.map(function(post:any){
            return(
              <Link to={"/Detail/" + post.id}>
              <div key={post.id} className="a-post">
                <p>Title: {post.title}</p>
                <p>Content: {post.content}</p>
              </div>
              </Link>
              
            )
          })}
        </div>
      </div>
    );
  };

  export default PostList;