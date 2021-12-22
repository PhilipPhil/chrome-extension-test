import { API } from 'aws-amplify';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar';
import { BiDislike, BiLike } from 'react-icons/bi'
import { HiOutlineReply } from 'react-icons/hi'
import { Comments, User } from '../../API';
import { getUser, listUsers } from '../../graphql/queries';

interface Props {
  comment: Comments;
  likeComment: (id: string) => void;
  dislikeComment: (id: string) => void;
}

const UrlComment = ({ comment, likeComment, dislikeComment, ...props }: Props) => {

  const [userData, setUserData] = useState<User | null>(null);
  const [like, setLike] = useState<boolean>(false);
  const [dislike, setDislike] = useState<boolean>(false);

  useEffect(() => {
    findUser();
  }, []);

  const findUser = async () => {
    if (comment) {
      const res: any = await API.graphql({
        query: getUser,
        variables: {
          id: comment.userId
        }
      });
      if (res?.data?.getUser) {
        setUserData(res.data.getUser);
      }
    }
  }

  return (
    <article
      className='comment'
      key={comment.id}
    >
      <section className='comment-header'>
        <Avatar
          name={userData?.userName || ""}
          className="avatar"
          size="50"
        />
        <h3>{userData?.userName || ""}</h3>
        <span>{moment(comment.createdAt).fromNow()}</span>
      </section>

      <p>{comment.text}</p>
      <section className='comment-footer'>
        <div>{comment.likes} Likes</div>
        <div><HiOutlineReply/><span>Reply</span></div>
        <div className='likes-buttons'>
          <BiLike
            onClick={() => {
              if (dislike && !like) setDislike(false);
              setLike(!like);
              likeComment(comment.id)
            }}
            style={{ color: like ? 'green' : 'grey', fontSize: "1.5rem" }}
          />
          <BiDislike
            onClick={() => {
              if (like && !dislike) setLike(false);
              setDislike(!dislike);
              dislikeComment(comment.id)
            }}
            style={{ color: dislike ? 'red' : 'grey', fontSize: "1.5rem" }}
          />
        </div>
      </section>
    </article>
  )
}

export default UrlComment;
