/*global chrome*/
import React, { useState, useEffect } from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';
import Amplify, { API } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { listComments, listUrls, listUsers } from './graphql/queries';
import * as mutations from './graphql/mutations';
import awsconfig from './aws-exports';
import { Comments, UpdateUrlInput, Url, User } from './API';
import './App.scss';
import '@aws-amplify/ui-react/styles.css';
import { createUser } from './graphql/mutations';
import Avatar from 'react-avatar';
import UrlComment from './Components/Comment/Comment';

Amplify.configure(awsconfig);

const App = ({ user, signOut }: any) => {
  const [newUser, setNewUser] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<User | null>(null);
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  const [urlData, setUrlData] = useState<Url | null>(null);
  const [commentsData, setCommentsData] = useState<Comments[]>([]);
  const [commentText, setCommentText] = useState<string>('');
  const [usernameInput, setUsernameInput] = useState<string>('');

  const getCurrentTab = async () => {
    if (chrome?.tabs) {
      let queryOptions = { active: true, currentWindow: true };
      await chrome.tabs.query(queryOptions, tabs => {
        if (tabs[0]?.url) {
          const { hostname } = new URL(tabs[0].url);
          console.log(`hostname`, hostname)
          setCurrentUrl(hostname);
        }
      });
    }
  }

  const checkUser = async () => {
    const req: any = await API.graphql({
      query: listUsers,
      variables: {
        filter: {
          id: {
            eq: user.username
          }
        }
      }
    });
    if (req.data?.listUsers?.items?.length) {
      setNewUser(false);
      setLoading(false);
      setUserData(req.data?.listUsers?.items[0])
    } else {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCurrentTab();
    checkUser();
  }, []);

  useEffect(() => {
    getUrl();
  }, [currentUrl]);

  useEffect(() => {
    getComments();
    setLoading(false);
  }, [urlData]);

  const getUrl = async () => {
    console.log(`getUrl`);
    if (urlData) setUrlData(null);
    const req: any = await API.graphql({
      query: listUrls,
      variables: {
        filter: {
          url: {
            eq: currentUrl || 'localhost'
          }
        }
      }
    });
    const urls = req.data.listUrls.items;
    if (urls?.length) {
      setUrlData(urls[0]);
    } else {
      const createReq: any = await API.graphql({
        query: mutations.createUrl,
        variables: {
          input: {
            url: currentUrl || 'localhost',
            likes: 0,
            dislikes: 0
          }
        }
      });
      if (createReq?.data?.createUrl) {
        setUrlData(createReq.data.createUrl);
      }
    }
  }

  const getComments = async () => {
    if (commentsData.length) setCommentsData([]);
    const req: any = await API.graphql({
      query: listComments,
      variables: {
        filter: {
          url: {
            eq: currentUrl || 'localhost'
          }
        }
      }
    });
    setCommentsData(req.data.listComments.items);
  }

  // console.log("URLS", urlData);
  // console.log("COMMENTS", commentsData);
  // console.log("USER", userData);

  const createNewUser = async () => {
    const res: any = await API.graphql({
      query: createUser,
      variables: {
        input: {
          id: user.username,
          userName: usernameInput
        }
      }
    });
    if (res?.data?.createUser) {
      setUserData(res.data.createUser);
      setNewUser(false);
      setLoading(false);
    }
  }

  const createComment = async () => {
    const comment = {
      text: commentText,
      likes: 0,
      url: currentUrl || 'localhost',
      userId: userData?.id
    }
    await API.graphql({ query: mutations.createComments, variables: { input: { ...comment } }});
    setCommentText('');
    getComments();
  }

  const likeUrl = () => {
    urlData && updateUrl({
      id: urlData.id,
      likes: urlData.likes ? ++urlData.likes : 1
    });
    getUrl();
    // @TODO update user score
  }
  
  const dislikeUrl = () => {
    urlData && updateUrl({
      id: urlData.id,
      //@ts-ignore
      dislikes: urlData.dislikes ? ++urlData.dislikes : 1
    });
    getUrl();
  }

  const likeComment = (id: string) => {
    const comment = commentsData?.find(comment => comment.id === id);
    if (comment) {
      const cleanedComment = {id, likes: comment.likes ? ++comment.likes : 1};
      updateComment(cleanedComment);
    }
  }

  const dislikeComment = (id: string) => {
    const comment = commentsData?.find(comment => comment.id === id);
    if (comment && comment?.likes && comment.likes > 0) {
      updateComment({ id, likes: --comment.likes });
    }
  }

  const updateUrl = async (url: UpdateUrlInput) => {
    // const { createdAt, updatedAt, ...urldata } = urlData;
    const res: any = await API.graphql({ query: mutations.updateUrl, variables: { input: { ...url } }});
    console.log(`res!!!`, res)
    getUrl();
  }

  const updateComment = async (comment: Partial<Comments>) => {
    await API.graphql({ query: mutations.updateComments, variables: { input: { ...comment } }});
    getComments();
  }

  const commentProps = {
    likeComment, dislikeComment
  };

  return (!newUser
    ? <div className="comments-extension">
        <header>
          <Avatar
            name={userData?.userName || ''}
            className='avatar'
            size="70"
          />
          <div className='user-info'>
            <h3>{userData?.userName}</h3>
            <p>Review score: <span>1.9K</span></p>
          </div>
          <button onClick={signOut}>X</button>
        </header>
        {/* <h1>{currentUrl}</h1> */}
        <section className='likes-section'>
          <div onClick={() => likeUrl()}>
            <BiLike style={{ color: 'green', fontSize: "1.5rem" }}/>
            <span>Like</span>
          </div>
          <div onClick={() => dislikeUrl()}>
            <BiDislike style={{ color: 'red', fontSize: "1.5rem" }}/>
            <span>Dislike</span>
          </div>
          <span className='likes-bar'>
            <span
              className='likes-percent'
              // @ts-ignore
              style={{width: `${(urlData?.likes)*100/(urlData?.likes + urlData?.dislikes)}%`}}
            >
            </span>
          </span>
        </section>
        <section className='comments-section'>
          <section className="comments">
            {Array.isArray(commentsData) && commentsData.map((comment, index) => (
              <UrlComment
                key={index}
                {...commentProps}
                comment={comment}
              />
            ))}
          </section>
          <article className='add-comment'>
            <input
              type="text"
              placeholder='Type your comment here'
              value={commentText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {
                setCommentText(e.target.value);
              }}
            />
            <button onClick={createComment}>Send</button>
          </article>
        </section>
      </div>
    : !loading
      ? <article className='add-comment'>
          <input
            type="text"
            placeholder='Enter your name'
            value={usernameInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {
              setUsernameInput(e.target.value);
            }}
          />
          <button onClick={createNewUser}>Create new user</button>
        </article>
      : <span>Loading</span> //@TODO better
  );
}

export default withAuthenticator(App);