export const RABBITMQ_EXCHANGES = {
  MXH_TOPIC: 'mxh.topic.exchange',
  MXH_FANOUT: 'mxh.fanout.exchange',
  MXH_NOTIF: 'mxh.notifications.exchange',
} as const;

export const RABBITMQ_ROUTING_KEYS = {
  USER_REGISTERED: 'user.event.registered',
  USER_UPDATED: 'user.event.updated',
  FRIEND_REQUEST_SENT: 'social.friend.request_sent',
  FRIEND_REQUEST_ACCEPTED: 'social.friend.accepted',
  USER_FOLLOWED: 'social.follow.created',
  USER_BLOCKED: 'social.block.created',
  POST_CREATED: 'post.event.created',
  POST_UPDATED: 'post.event.updated',
  POST_DELETED: 'post.event.deleted',
  REACTION_ADDED: 'interact.reaction.added',
  REACTION_REMOVED: 'interact.reaction.removed',
  COMMENT_CREATED: 'interact.comment.created',
  REEL_CREATED: 'reels.event.created',
  REEL_VIEWED: 'reels.event.viewed',
} as const;

export const RABBITMQ_QUEUES = {
  FEED_INGEST_QUEUE: 'mxh.feed.ingest.queue',
  NOTIF_DISPATCH_QUEUE: 'mxh.notif.dispatch.queue',
  SEARCH_INDEX_QUEUE: 'mxh.search.index.queue',
  USER_SYNC_QUEUE: 'mxh.user.sync.queue',
} as const;
