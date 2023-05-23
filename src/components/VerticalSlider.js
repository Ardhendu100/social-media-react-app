import React from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';
import { useState } from 'react';

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

  const handleShowText = () => {
    setShowFullContent(!showFullContent);
  };

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
                className={`text-sm ${showFullContent ? 'whitespace-normal' : 'whitespace-nowrap overflow-ellipsis'
                  } break-all sm:max-w-lg md:max-w-xl`}
              >
                {post.content.length > 50 && !showFullContent
                  ? post.content.slice(0, 100) + '...'
                  : post.content}
              </p>
            </div>
            {post.content.length > 50 && (
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
          <div class="grid grid-cols-6 gap-2">
            <div class="col-start-2 col-span-3">
              <button className="text-black-500">
                Like
              </button>
            </div>

            <div class="">
            <button className="text-black-500">
                Comment
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalSlider;
