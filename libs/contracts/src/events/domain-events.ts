export interface UserRegisteredEvent {
  userId: string;
  email: string;
  registeredAt: string;
}

export interface PostCreatedEvent {
  postId: string;
  authorId: string;
  content: string;
  visibility: 'PUBLIC' | 'FRIENDS_ONLY' | 'PRIVATE';
  hashtags: string[];
  mentions: string[];
  mediaUrls: string[];
  createdAt: string;
}

export interface ReactionAddedEvent {
  reactionId: string;
  userId: string;
  targetType: 'POST' | 'COMMENT' | 'REEL';
  targetId: string;
  reactionType: 'LIKE' | 'LOVE' | 'HAHA' | 'WOW' | 'SAD' | 'ANGRY';
  authorId: string; // The owner of the post/comment being reacted to
  createdAt: string;
}

export interface CommentCreatedEvent {
  commentId: string;
  postId: string;
  authorId: string;
  postOwnerId: string;
  parentCommentId?: string;
  parentCommentAuthorId?: string;
  content: string;
  createdAt: string;
}

export interface FriendRequestEvent {
  requestId: string;
  senderId: string;
  receiverId: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'CANCELLED';
  timestamp: string;
}
