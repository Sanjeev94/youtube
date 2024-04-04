import React from 'react'

const commentsData = [
    {
        name: "Sanjeev",
        text: "Looks good",
        replies: [

        ]
    },
    {
        name: "Sanjeev",
        text: "Looks good",
        replies: [
            {
                name: "Sanjeev",
                text: "Looks good",
                replies: [
                    {
                        name: "Sanjeev",
                        text: "Looks good",
                        replies: [
                
                            {
                                name: "Sanjeev",
                                text: "Looks good",
                                replies: [
                        
                                ]
                            },
                        ]
                    },
                ]
            },
            
        ]
    },
    {
        name: "Sanjeev",
        text: "Looks good",
        replies: [

        ]
    },
]

const Comment = ({data}) => {
    const {name, text, replies} = data;
    return (
        <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
            <img
            className="w-12 h-12"
            alt="user"
            src="https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0"
             />
             <div className="px-3">
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
             </div>
        </div>
    );
};

const CommentsList = ({comments}) => {
    // don't use indexes as key
    return comments.map((comment, index) => (
        <div>
            <Comment key={index} data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
            <CommentsList comments={comment.replies} />
        </div>
        </div>
    ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2" >
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer