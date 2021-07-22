import React from 'react'
import Post from '../post/Post';
import StoryAvatar from '../story/StoryAvatar';
import './Feeds.css'

function Feeds() {
    return (
      <div className="feeds">
        <div className="feeds__stories">
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
          <StoryAvatar />
        </div>

        <div className="feeds__sharePost"></div>

        <div className="feeds__posts--container">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    );
}

export default Feeds
