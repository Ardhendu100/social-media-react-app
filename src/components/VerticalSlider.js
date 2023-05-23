import React from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import { FaThumbsUp, FaComment, FaPaperPlane } from 'react-icons/fa';

const VerticalSlider = ({ posts }) => {
  const settings = {
    dots: true,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const [showFullContent, setShowFullContent] = useState(false);
  const [isLike, setisLike] = useState([]);
  const [showCommentField, setShowCommentField] = useState(false);
  const [commentText, setCommentText] = useState('');

  const handleToggleCommentField = () => {
    setShowCommentField(!showCommentField);
  };

  const handleCommentTextChange = (event) => {
    setCommentText(event.target.value);
  };
  const handlePostComment = (comment) => {
    setCommentText('')
    console.log(comment)

    // alert(comment)
    // Handle posting the comment logic here
    // You can access the comment text using the commentText state variable
    // and perform the necessary actions (e.g., save to a database, update state, etc.)
    // You can clear the comment text field by calling setCommentText('') if needed.
  };
  const handleShowText = () => {
    setShowFullContent(!showFullContent);
  };

  const handleLike = (postId) => {
    if (isLike.includes(postId)) {
      setisLike(isLike.filter((id) => id !== postId));
    } else {
      setisLike([...isLike, postId]);
    }
  }

  return (
    // <Slider {...settings}>
    // {posts.map((post) => (
    //     <div key={post.id} className="bg-white shadow rounded-lg p-4 mb-4 bg-slate-300 ">
    //     {post.type === 'video' ? (
    //       <>
    //       </>
    //       // <ReactPlayer url={post.url} controls width="100%" height="auto" />
    //     ) : (
    //       <div className="bg-white rounded-lg p-4">
    //         <h2 className="text-lg font-bold">{post.title}</h2>
    //         <img
    // class="rounded-t-lg"
    // src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
    // alt="" />
    //         <p className="text-gray-600">{post.content}</p>
    //       </div>
    //     )}
    //   </div>
    // ))}
    // </Slider>
    //   <div className='bg-slate-300 overflow-y-auto flex flex-col justify-center items-center h-screen'>
    // <div className="fixed top-16 left-0 right-0 bottom-0 overflow-y-auto flex justify-center items-center">
    <div className="flex flex-col items-center">
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow rounded-lg p-4 mb-4">
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="profile.jpg"
                  alt="Profile"
                />
              </div>
              <span className="ml-2 text-sm font-medium">John Doe</span>
            </div>
            <div className="mt-2 mb-2">
              <p
                className={`text-sm ${showFullContent
                  ? 'whitespace-normal'
                  : 'whitespace-nowrap overflow-ellipsis'
                  } break-all sm:max-w-lg md:max-w-xl`}
              >
                {post.content.length > 50 && !showFullContent
                  ? post.content.slice(0, 100) + '...'
                  : post.content}
              </p>
            </div>
            {post.content.length > 50 && window.innerWidth > 768 && (
              <button
                className="text-blue-500 underline mb-2"
                onClick={handleShowText}
              >
                {showFullContent ? 'Show Less' : 'Show More'}
              </button>
            )}
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
              alt=""
            />
          </div>
          <hr />
          <div className="grid grid-cols-6 gap-2">
            <div className="col-start-2 col-span-3 flex flex-row items-center">
              {isLike.includes(post.id) ?
                <FaThumbsUp color="blue" />
                :
                <FaThumbsUp />
              }
              <button className="text-black-500 ml-2"
                onClick={() => handleLike(post.id)}>Like</button>
            </div>
            <div className="flex flex-row items-center">
              <FaComment />
              <button className="text-black-500 ml-2" onClick={handleToggleCommentField}>Comment</button>
            </div>
          </div>

          {showCommentField && (
            <div className="flex flex-row items-center col-span-3 mt-3">
              <div className="relative flex-grow w-full">
                <textarea
                  value={commentText}
                  onChange={handleCommentTextChange}
                  className="rounded-lg bg-gray-100 p-2 pl-10 pr-10 focus:outline-none w-full"
                  rows={3}
                  placeholder="Type your comment..."
                />
                {commentText ?
                  <FaPaperPlane color="blue"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                    onClick={() => handlePostComment(commentText)}
                  />
                  :
                  <FaPaperPlane className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 cursor-not-allowed" />
                }

              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalSlider;
