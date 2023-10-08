import React from "react";

const commentData = [
  {
    name: "Bill Gates",
    text: "Wow this looks amazing such an amazing website ",
    replies: [
      {
        name: "Jeff Bezos",
        text: "Wow this looks amazing such an amazing website ",
        replies: [],
      },
      {
        name: "Elon Musk",
        text: "Wow this looks amazing such an amazing website ",
        replies: [
          {
            name: "Sundar Pichai",
            text: "Wow this looks amazing such an amazing website ",
            replies: [
              {
                name: "Satya Nadella",
                text: "Wow this looks amazing such an amazing website ",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Barack Obama",
    text: "Wow this looks amazing such an amazing website ",
    replies: [],
  },
  {
    name: "Donald Trump",
    text: "Wow this looks amazing such an amazing website ",
    replies: [],
  },
  {
    name: "Narendra Modi",
    text: "Wow this looks amazing such an amazing website ",
    replies: [],
  },
  {
    name: "Issac Newton",
    text: "Wow this looks amazing such an amazing website ",
    replies: [],
  },
  {
    name: "Zatin Pandey",
    text: "Wow this looks amazing such an amazing website ",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-slate-300 border-2 border-black">
      <img
        className="w-8 h-8"
        src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
        alt="profile"
      />
      <div>
        <h1 className="px-3 font-bold">{name}</h1>
        <h1 className="px-3">{text}</h1>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <div>
      <Comment data={comment} />
      <div className="pl-5  ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2 ml-96 ">
      <h1 className="font-bold text-2xl"> Comments:</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
