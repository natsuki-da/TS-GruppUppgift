import React, { useState, useEffect } from 'react'

// type CommentData = {
//     id: number;
//     content: string;
//     userName: string;
//   };
  
  const Comment: React.FC = () => {
    const [comments, setComments] = useState<CommentData[]>([]);
    const [newComment, setNewComment] = useState<CommentData>({
      id: 0,
      content: '',
      userName: '',
    });
    
  
      useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
        setComments(savedComments);
      }, []);
  
      //trigger onChange event
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // console.log(e.target.value);
        const { name, value } = e.target;
        setNewComment({ ...newComment, [name]: value });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        
        if (newComment.content && newComment.userName) {
          const newCommentData = { ...newComment, id: Date.now() };
          const updatedComments = [...comments, newCommentData];
    
          // Save the updated posts to localStorage
          localStorage.setItem('comments', JSON.stringify(updatedComments));
    
          setComments(updatedComments);
          console.log(updatedComments);
          setNewComment({ id: 0, content: '', userName: '', });
          
        }
      };
  
      return (
        <div>
          <h4>Give advice:</h4>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="content">Content:</label>
              <textarea
                id="content"
                name="content"
                value={newComment.content}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="userName">User Name:</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={newComment.userName}
                onChange={handleInputChange}
              />
            </div>
            <div>
            <input type="submit" value="Comments"></input>
            </div>
            <div>
              {comments.map((comment)=>
              <div key={comment.id}>
                <p>Title: {comment.content}</p>
                <p>Content: {comment.userName}</p>
              </div>
              )}
        </div>
          </form>
        </div>
      );
    };
  
    export default Comment;