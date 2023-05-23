import React from 'react';
import VerticalSlider from './VerticalSlider';

const HomePage = () => {
  const posts = [
    { id: 1, type: 'text', title: 'Post 1', content: 'Beautiful memories are like old friends.They may not always be on your mind, but they are forever in your heart ❤️❤️ . No matter what you say, the ethnic look has its own swag ❤❤. Hello everyone, I am the only one from Odisha, got nominated for National ivolunteer awards in the "youth champion" category for the outstanding social contribution towards nature & society on behalf of Sattvic SOUL Foundation . Do Vote for me in the below link👇👇 and help me to win. ' },
    { id: 2, type: 'text', title: 'Post 1', content: 'This is the first post.' },
    { id: 3, type: 'text', title: 'Post 1', content: 'This is the first post.' },
    { id: 4, type: 'text', title: 'Post 1', content: 'This is the first post.' },
    { id: 5, type: 'text', title: 'Post 1', content: 'This is the first post.' },
    { id: 5, type: 'text', title: 'Post 1', content: 'This is the first post.' },
    // { id: 5, type: 'text', title: 'Post 1', content: 'This is the first post.' },
    // { id: 5, type: 'text', title: 'Post 1', content: 'This is the first post.' },
    // { id: 5, type: 'text', title: 'Post 1', content: 'This is the first post.' },

    

    // { id: 2, type: 'video', url: 'https://www.youtube.com/watch?v=12345' },
    // Add more posts as needed
  ];

  return (
    // <div>
    //   <h1>Welcome to My Facebook-like Slider</h1>
    //   <VerticalSlider posts={posts} />
    // </div>
    // <div class="container mx-auto">
    // <div className="flex justify-center items-center h-screen">
    //   <div className="">
        // <VerticalSlider posts={posts} />
    //   </div>
    // </div>
    // </div>

    <div className='bg-slate-300 flex flex-col justify-center items-center h-screen'>
    <div className="fixed top-16 left-0 right-0 bottom-0">
      <div className="container mx-auto p-7 h-full overflow-y-auto hide-scrollbar">
        <VerticalSlider posts={posts} />
      </div>
    </div>
  </div>
  );
};

export default HomePage;
