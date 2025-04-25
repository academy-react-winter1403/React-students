import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const LikeDislike = ({ initialLikes = 0, initialDislikes = 0 }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [userAction, setUserAction] = useState(null);

  const handleLike = () => {
    if (userAction === "like") {
      setLikes(likes - 1);
      setUserAction(null);
    } else {
      setLikes(userAction === "dislike" ? likes + 1 : likes + 1);
      if (userAction === "dislike") setDislikes(dislikes - 1);
      setUserAction("like");   
    }
  };

  const handleDislike = () => {
    if (userAction === "dislike") {
      setDislikes(dislikes - 1);
      setUserAction(null);
    } else {
      setDislikes(userAction === "like" ? dislikes + 1 : dislikes + 1);
      if (userAction === "like") setLikes(likes - 1);
      setUserAction("dislike");
    }
  };

  return (
    <div className='text-[16px] flex-row flex gap-5'>
      <div
        onClick={handleLike}
        className={`cursor-pointer flex items-center gap-2 ${
            userAction === "like" ? "text-purple-600" : "text-gray-500"
          }`
        }
      >
      <FaThumbsUp/> {likes}
      </div>
      <div
        onClick={handleDislike}
        className={`cursor-pointer flex items-center gap-2  ${
            userAction === "dislike" ? "text-purple-600" : "text-gray-500"
          }`}
      >
      <FaThumbsDown/> {dislikes}
      </div>
    </div>
  );
};

export default LikeDislike;
