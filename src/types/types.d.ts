

// interface User {
// 	id: number;
// 	name: string;
// 	userName: string;
// }

// type ThreadCategory = "THREAD" | "QNA"

// interface Thread {
//   id: number;
// 	title: string;
// 	category: ThreadCategory;
// 	creationDate: string;
// 	description: string;
// 	creator: User
// }

// interface QNAThread extends Thread {
// 	category: "QNA";
// 	isAnswered: boolean;
// 	commentAnswerId?: number
// }

interface CommentData {
    id: number;
    content: string;
    userName: string;
  };

interface PostData {
    id: number;
    title: string;
    content: string;
    comments: CommentData;
  };