# Career Engineer Blog

## Overview

This blog is meant to be a resource for learning about web development. In addition to the ability for registered users to create posts, they can also write comments and replies to posts. Non-authenticated viewers have access to view all posts, comments, and replies, but they cannot write them. Posts, comments, and replies all feature full CRUD functionality.

## Getting Started

To access the blog, click [here](https://career-engineer-blog.netlify.app/).

## Technology

### Front end:

- React, React Router
- JavaScript
- CSS
- Material UI
- Netlify

### Back end:

- Python
- Django, Django Rest Framework
- Heroku

## Challenges

Overall , the project ran quite smoothly, with only a few minor hiccups:

- Issues create the react application, which appeared to have been a result of a bug within <code>create-react-app</code>
- As the scope of the project grew, there were some elements that were left out, since the changes would require some rather intricate changes to the back-end models

## Future Work

Future plans for the project include the following:
* Modify the Django models for more clearer model relationships and more efficient data storage/access
* Implement functionality for likes/dislikes to posts, comments, and replies
* Leverage AWS for uploading user avatars
* Modify the Django default User model to add a "bio" (biography)
* Implement post pagination for more efficient page loading