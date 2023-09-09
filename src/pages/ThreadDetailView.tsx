import Comment from '../components/Comment';
import { useParams } from 'react-router-dom';

const ThreadDetailView = () => {
  const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
  const { id } = useParams()
  // let post: any[] = savedPosts;

  return (
    <div className="card">
        <div className="a-post">
          {/* ID: {id} */}
        {savedPosts.map(function(post:any){
         if(id == post.id){
          return(
            <div key={post.id}>
              <p>Title: {post.title}</p>
              <p>Content: {post.content}</p>
            </div>
          )
         } else (<div>There are no applicable thereds. </div>)
        })}
        </div>
        <div>
          <Comment />
        </div>
    </div>
  );
};

export default ThreadDetailView;