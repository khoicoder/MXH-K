
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PostMedia
 * 
 */
export type PostMedia = $Result.DefaultSelection<Prisma.$PostMediaPayload>
/**
 * Model Hashtag
 * 
 */
export type Hashtag = $Result.DefaultSelection<Prisma.$HashtagPayload>
/**
 * Model PostHashtag
 * 
 */
export type PostHashtag = $Result.DefaultSelection<Prisma.$PostHashtagPayload>
/**
 * Model SavedPost
 * 
 */
export type SavedPost = $Result.DefaultSelection<Prisma.$SavedPostPayload>
/**
 * Model Story
 * 
 */
export type Story = $Result.DefaultSelection<Prisma.$StoryPayload>
/**
 * Model StoryMedia
 * 
 */
export type StoryMedia = $Result.DefaultSelection<Prisma.$StoryMediaPayload>
/**
 * Model StoryView
 * 
 */
export type StoryView = $Result.DefaultSelection<Prisma.$StoryViewPayload>
/**
 * Model StoryReaction
 * 
 */
export type StoryReaction = $Result.DefaultSelection<Prisma.$StoryReactionPayload>
/**
 * Model StoryAudience
 * 
 */
export type StoryAudience = $Result.DefaultSelection<Prisma.$StoryAudiencePayload>
/**
 * Model CloseFriend
 * 
 */
export type CloseFriend = $Result.DefaultSelection<Prisma.$CloseFriendPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PostVisibility: {
  PUBLIC: 'PUBLIC',
  FRIENDS_ONLY: 'FRIENDS_ONLY',
  PRIVATE: 'PRIVATE'
};

export type PostVisibility = (typeof PostVisibility)[keyof typeof PostVisibility]


export const StoryType: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  TEXT: 'TEXT'
};

export type StoryType = (typeof StoryType)[keyof typeof StoryType]


export const StoryVisibility: {
  PUBLIC: 'PUBLIC',
  FRIENDS: 'FRIENDS',
  FRIENDS_EXCEPT: 'FRIENDS_EXCEPT',
  CLOSE_FRIENDS: 'CLOSE_FRIENDS',
  ONLY_ME: 'ONLY_ME',
  CUSTOM: 'CUSTOM'
};

export type StoryVisibility = (typeof StoryVisibility)[keyof typeof StoryVisibility]

}

export type PostVisibility = $Enums.PostVisibility

export const PostVisibility: typeof $Enums.PostVisibility

export type StoryType = $Enums.StoryType

export const StoryType: typeof $Enums.StoryType

export type StoryVisibility = $Enums.StoryVisibility

export const StoryVisibility: typeof $Enums.StoryVisibility

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;

  /**
   * `prisma.postMedia`: Exposes CRUD operations for the **PostMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostMedias
    * const postMedias = await prisma.postMedia.findMany()
    * ```
    */
  get postMedia(): Prisma.PostMediaDelegate<ExtArgs>;

  /**
   * `prisma.hashtag`: Exposes CRUD operations for the **Hashtag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hashtags
    * const hashtags = await prisma.hashtag.findMany()
    * ```
    */
  get hashtag(): Prisma.HashtagDelegate<ExtArgs>;

  /**
   * `prisma.postHashtag`: Exposes CRUD operations for the **PostHashtag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostHashtags
    * const postHashtags = await prisma.postHashtag.findMany()
    * ```
    */
  get postHashtag(): Prisma.PostHashtagDelegate<ExtArgs>;

  /**
   * `prisma.savedPost`: Exposes CRUD operations for the **SavedPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedPosts
    * const savedPosts = await prisma.savedPost.findMany()
    * ```
    */
  get savedPost(): Prisma.SavedPostDelegate<ExtArgs>;

  /**
   * `prisma.story`: Exposes CRUD operations for the **Story** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stories
    * const stories = await prisma.story.findMany()
    * ```
    */
  get story(): Prisma.StoryDelegate<ExtArgs>;

  /**
   * `prisma.storyMedia`: Exposes CRUD operations for the **StoryMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoryMedias
    * const storyMedias = await prisma.storyMedia.findMany()
    * ```
    */
  get storyMedia(): Prisma.StoryMediaDelegate<ExtArgs>;

  /**
   * `prisma.storyView`: Exposes CRUD operations for the **StoryView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoryViews
    * const storyViews = await prisma.storyView.findMany()
    * ```
    */
  get storyView(): Prisma.StoryViewDelegate<ExtArgs>;

  /**
   * `prisma.storyReaction`: Exposes CRUD operations for the **StoryReaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoryReactions
    * const storyReactions = await prisma.storyReaction.findMany()
    * ```
    */
  get storyReaction(): Prisma.StoryReactionDelegate<ExtArgs>;

  /**
   * `prisma.storyAudience`: Exposes CRUD operations for the **StoryAudience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoryAudiences
    * const storyAudiences = await prisma.storyAudience.findMany()
    * ```
    */
  get storyAudience(): Prisma.StoryAudienceDelegate<ExtArgs>;

  /**
   * `prisma.closeFriend`: Exposes CRUD operations for the **CloseFriend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CloseFriends
    * const closeFriends = await prisma.closeFriend.findMany()
    * ```
    */
  get closeFriend(): Prisma.CloseFriendDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    PostMedia: 'PostMedia',
    Hashtag: 'Hashtag',
    PostHashtag: 'PostHashtag',
    SavedPost: 'SavedPost',
    Story: 'Story',
    StoryMedia: 'StoryMedia',
    StoryView: 'StoryView',
    StoryReaction: 'StoryReaction',
    StoryAudience: 'StoryAudience',
    CloseFriend: 'CloseFriend'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "post" | "postMedia" | "hashtag" | "postHashtag" | "savedPost" | "story" | "storyMedia" | "storyView" | "storyReaction" | "storyAudience" | "closeFriend"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PostMedia: {
        payload: Prisma.$PostMediaPayload<ExtArgs>
        fields: Prisma.PostMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>
          }
          findFirst: {
            args: Prisma.PostMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>
          }
          findMany: {
            args: Prisma.PostMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>[]
          }
          create: {
            args: Prisma.PostMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>
          }
          createMany: {
            args: Prisma.PostMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>[]
          }
          delete: {
            args: Prisma.PostMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>
          }
          update: {
            args: Prisma.PostMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>
          }
          deleteMany: {
            args: Prisma.PostMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>
          }
          aggregate: {
            args: Prisma.PostMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostMedia>
          }
          groupBy: {
            args: Prisma.PostMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostMediaCountArgs<ExtArgs>
            result: $Utils.Optional<PostMediaCountAggregateOutputType> | number
          }
        }
      }
      Hashtag: {
        payload: Prisma.$HashtagPayload<ExtArgs>
        fields: Prisma.HashtagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HashtagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HashtagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          findFirst: {
            args: Prisma.HashtagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HashtagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          findMany: {
            args: Prisma.HashtagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>[]
          }
          create: {
            args: Prisma.HashtagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          createMany: {
            args: Prisma.HashtagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HashtagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>[]
          }
          delete: {
            args: Prisma.HashtagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          update: {
            args: Prisma.HashtagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          deleteMany: {
            args: Prisma.HashtagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HashtagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HashtagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          aggregate: {
            args: Prisma.HashtagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHashtag>
          }
          groupBy: {
            args: Prisma.HashtagGroupByArgs<ExtArgs>
            result: $Utils.Optional<HashtagGroupByOutputType>[]
          }
          count: {
            args: Prisma.HashtagCountArgs<ExtArgs>
            result: $Utils.Optional<HashtagCountAggregateOutputType> | number
          }
        }
      }
      PostHashtag: {
        payload: Prisma.$PostHashtagPayload<ExtArgs>
        fields: Prisma.PostHashtagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostHashtagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostHashtagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload>
          }
          findFirst: {
            args: Prisma.PostHashtagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostHashtagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload>
          }
          findMany: {
            args: Prisma.PostHashtagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload>[]
          }
          create: {
            args: Prisma.PostHashtagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload>
          }
          createMany: {
            args: Prisma.PostHashtagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostHashtagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload>[]
          }
          delete: {
            args: Prisma.PostHashtagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload>
          }
          update: {
            args: Prisma.PostHashtagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload>
          }
          deleteMany: {
            args: Prisma.PostHashtagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostHashtagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostHashtagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHashtagPayload>
          }
          aggregate: {
            args: Prisma.PostHashtagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostHashtag>
          }
          groupBy: {
            args: Prisma.PostHashtagGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostHashtagGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostHashtagCountArgs<ExtArgs>
            result: $Utils.Optional<PostHashtagCountAggregateOutputType> | number
          }
        }
      }
      SavedPost: {
        payload: Prisma.$SavedPostPayload<ExtArgs>
        fields: Prisma.SavedPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          findFirst: {
            args: Prisma.SavedPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          findMany: {
            args: Prisma.SavedPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>[]
          }
          create: {
            args: Prisma.SavedPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          createMany: {
            args: Prisma.SavedPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>[]
          }
          delete: {
            args: Prisma.SavedPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          update: {
            args: Prisma.SavedPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          deleteMany: {
            args: Prisma.SavedPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SavedPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          aggregate: {
            args: Prisma.SavedPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedPost>
          }
          groupBy: {
            args: Prisma.SavedPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedPostCountArgs<ExtArgs>
            result: $Utils.Optional<SavedPostCountAggregateOutputType> | number
          }
        }
      }
      Story: {
        payload: Prisma.$StoryPayload<ExtArgs>
        fields: Prisma.StoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          findFirst: {
            args: Prisma.StoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          findMany: {
            args: Prisma.StoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          create: {
            args: Prisma.StoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          createMany: {
            args: Prisma.StoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          delete: {
            args: Prisma.StoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          update: {
            args: Prisma.StoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          deleteMany: {
            args: Prisma.StoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          aggregate: {
            args: Prisma.StoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStory>
          }
          groupBy: {
            args: Prisma.StoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoryCountArgs<ExtArgs>
            result: $Utils.Optional<StoryCountAggregateOutputType> | number
          }
        }
      }
      StoryMedia: {
        payload: Prisma.$StoryMediaPayload<ExtArgs>
        fields: Prisma.StoryMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoryMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoryMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryMediaPayload>
          }
          findFirst: {
            args: Prisma.StoryMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoryMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryMediaPayload>
          }
          findMany: {
            args: Prisma.StoryMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryMediaPayload>[]
          }
          create: {
            args: Prisma.StoryMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryMediaPayload>
          }
          createMany: {
            args: Prisma.StoryMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoryMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryMediaPayload>[]
          }
          delete: {
            args: Prisma.StoryMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryMediaPayload>
          }
          update: {
            args: Prisma.StoryMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryMediaPayload>
          }
          deleteMany: {
            args: Prisma.StoryMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoryMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoryMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryMediaPayload>
          }
          aggregate: {
            args: Prisma.StoryMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoryMedia>
          }
          groupBy: {
            args: Prisma.StoryMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoryMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoryMediaCountArgs<ExtArgs>
            result: $Utils.Optional<StoryMediaCountAggregateOutputType> | number
          }
        }
      }
      StoryView: {
        payload: Prisma.$StoryViewPayload<ExtArgs>
        fields: Prisma.StoryViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoryViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoryViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryViewPayload>
          }
          findFirst: {
            args: Prisma.StoryViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoryViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryViewPayload>
          }
          findMany: {
            args: Prisma.StoryViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryViewPayload>[]
          }
          create: {
            args: Prisma.StoryViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryViewPayload>
          }
          createMany: {
            args: Prisma.StoryViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoryViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryViewPayload>[]
          }
          delete: {
            args: Prisma.StoryViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryViewPayload>
          }
          update: {
            args: Prisma.StoryViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryViewPayload>
          }
          deleteMany: {
            args: Prisma.StoryViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoryViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoryViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryViewPayload>
          }
          aggregate: {
            args: Prisma.StoryViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoryView>
          }
          groupBy: {
            args: Prisma.StoryViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoryViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoryViewCountArgs<ExtArgs>
            result: $Utils.Optional<StoryViewCountAggregateOutputType> | number
          }
        }
      }
      StoryReaction: {
        payload: Prisma.$StoryReactionPayload<ExtArgs>
        fields: Prisma.StoryReactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoryReactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryReactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoryReactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryReactionPayload>
          }
          findFirst: {
            args: Prisma.StoryReactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryReactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoryReactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryReactionPayload>
          }
          findMany: {
            args: Prisma.StoryReactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryReactionPayload>[]
          }
          create: {
            args: Prisma.StoryReactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryReactionPayload>
          }
          createMany: {
            args: Prisma.StoryReactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoryReactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryReactionPayload>[]
          }
          delete: {
            args: Prisma.StoryReactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryReactionPayload>
          }
          update: {
            args: Prisma.StoryReactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryReactionPayload>
          }
          deleteMany: {
            args: Prisma.StoryReactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoryReactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoryReactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryReactionPayload>
          }
          aggregate: {
            args: Prisma.StoryReactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoryReaction>
          }
          groupBy: {
            args: Prisma.StoryReactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoryReactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoryReactionCountArgs<ExtArgs>
            result: $Utils.Optional<StoryReactionCountAggregateOutputType> | number
          }
        }
      }
      StoryAudience: {
        payload: Prisma.$StoryAudiencePayload<ExtArgs>
        fields: Prisma.StoryAudienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoryAudienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryAudiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoryAudienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryAudiencePayload>
          }
          findFirst: {
            args: Prisma.StoryAudienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryAudiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoryAudienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryAudiencePayload>
          }
          findMany: {
            args: Prisma.StoryAudienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryAudiencePayload>[]
          }
          create: {
            args: Prisma.StoryAudienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryAudiencePayload>
          }
          createMany: {
            args: Prisma.StoryAudienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoryAudienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryAudiencePayload>[]
          }
          delete: {
            args: Prisma.StoryAudienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryAudiencePayload>
          }
          update: {
            args: Prisma.StoryAudienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryAudiencePayload>
          }
          deleteMany: {
            args: Prisma.StoryAudienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoryAudienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoryAudienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryAudiencePayload>
          }
          aggregate: {
            args: Prisma.StoryAudienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoryAudience>
          }
          groupBy: {
            args: Prisma.StoryAudienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoryAudienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoryAudienceCountArgs<ExtArgs>
            result: $Utils.Optional<StoryAudienceCountAggregateOutputType> | number
          }
        }
      }
      CloseFriend: {
        payload: Prisma.$CloseFriendPayload<ExtArgs>
        fields: Prisma.CloseFriendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CloseFriendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloseFriendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CloseFriendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloseFriendPayload>
          }
          findFirst: {
            args: Prisma.CloseFriendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloseFriendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CloseFriendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloseFriendPayload>
          }
          findMany: {
            args: Prisma.CloseFriendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloseFriendPayload>[]
          }
          create: {
            args: Prisma.CloseFriendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloseFriendPayload>
          }
          createMany: {
            args: Prisma.CloseFriendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CloseFriendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloseFriendPayload>[]
          }
          delete: {
            args: Prisma.CloseFriendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloseFriendPayload>
          }
          update: {
            args: Prisma.CloseFriendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloseFriendPayload>
          }
          deleteMany: {
            args: Prisma.CloseFriendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CloseFriendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CloseFriendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloseFriendPayload>
          }
          aggregate: {
            args: Prisma.CloseFriendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCloseFriend>
          }
          groupBy: {
            args: Prisma.CloseFriendGroupByArgs<ExtArgs>
            result: $Utils.Optional<CloseFriendGroupByOutputType>[]
          }
          count: {
            args: Prisma.CloseFriendCountArgs<ExtArgs>
            result: $Utils.Optional<CloseFriendCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    media: number
    hashtags: number
    saves: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | PostCountOutputTypeCountMediaArgs
    hashtags?: boolean | PostCountOutputTypeCountHashtagsArgs
    saves?: boolean | PostCountOutputTypeCountSavesArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostMediaWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountHashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostHashtagWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountSavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedPostWhereInput
  }


  /**
   * Count Type HashtagCountOutputType
   */

  export type HashtagCountOutputType = {
    posts: number
  }

  export type HashtagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | HashtagCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * HashtagCountOutputType without action
   */
  export type HashtagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HashtagCountOutputType
     */
    select?: HashtagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HashtagCountOutputType without action
   */
  export type HashtagCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostHashtagWhereInput
  }


  /**
   * Count Type StoryCountOutputType
   */

  export type StoryCountOutputType = {
    media: number
    views: number
    reactions: number
    audiences: number
  }

  export type StoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | StoryCountOutputTypeCountMediaArgs
    views?: boolean | StoryCountOutputTypeCountViewsArgs
    reactions?: boolean | StoryCountOutputTypeCountReactionsArgs
    audiences?: boolean | StoryCountOutputTypeCountAudiencesArgs
  }

  // Custom InputTypes
  /**
   * StoryCountOutputType without action
   */
  export type StoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryCountOutputType
     */
    select?: StoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoryCountOutputType without action
   */
  export type StoryCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryMediaWhereInput
  }

  /**
   * StoryCountOutputType without action
   */
  export type StoryCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryViewWhereInput
  }

  /**
   * StoryCountOutputType without action
   */
  export type StoryCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryReactionWhereInput
  }

  /**
   * StoryCountOutputType without action
   */
  export type StoryCountOutputTypeCountAudiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryAudienceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    mediaCount: number | null
  }

  export type PostSumAggregateOutputType = {
    mediaCount: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    content: string | null
    visibility: $Enums.PostVisibility | null
    isPinned: boolean | null
    sharedPostId: string | null
    mediaCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    content: string | null
    visibility: $Enums.PostVisibility | null
    isPinned: boolean | null
    sharedPostId: string | null
    mediaCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    authorId: number
    content: number
    visibility: number
    isPinned: number
    sharedPostId: number
    mediaCount: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    mediaCount?: true
  }

  export type PostSumAggregateInputType = {
    mediaCount?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    authorId?: true
    content?: true
    visibility?: true
    isPinned?: true
    sharedPostId?: true
    mediaCount?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    authorId?: true
    content?: true
    visibility?: true
    isPinned?: true
    sharedPostId?: true
    mediaCount?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    authorId?: true
    content?: true
    visibility?: true
    isPinned?: true
    sharedPostId?: true
    mediaCount?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    authorId: string
    content: string
    visibility: $Enums.PostVisibility
    isPinned: boolean
    sharedPostId: string | null
    mediaCount: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    content?: boolean
    visibility?: boolean
    isPinned?: boolean
    sharedPostId?: boolean
    mediaCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    media?: boolean | Post$mediaArgs<ExtArgs>
    hashtags?: boolean | Post$hashtagsArgs<ExtArgs>
    saves?: boolean | Post$savesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    content?: boolean
    visibility?: boolean
    isPinned?: boolean
    sharedPostId?: boolean
    mediaCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    authorId?: boolean
    content?: boolean
    visibility?: boolean
    isPinned?: boolean
    sharedPostId?: boolean
    mediaCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | Post$mediaArgs<ExtArgs>
    hashtags?: boolean | Post$hashtagsArgs<ExtArgs>
    saves?: boolean | Post$savesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      media: Prisma.$PostMediaPayload<ExtArgs>[]
      hashtags: Prisma.$PostHashtagPayload<ExtArgs>[]
      saves: Prisma.$SavedPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      content: string
      visibility: $Enums.PostVisibility
      isPinned: boolean
      sharedPostId: string | null
      mediaCount: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    media<T extends Post$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Post$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findMany"> | Null>
    hashtags<T extends Post$hashtagsArgs<ExtArgs> = {}>(args?: Subset<T, Post$hashtagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "findMany"> | Null>
    saves<T extends Post$savesArgs<ExtArgs> = {}>(args?: Subset<T, Post$savesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly authorId: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly visibility: FieldRef<"Post", 'PostVisibility'>
    readonly isPinned: FieldRef<"Post", 'Boolean'>
    readonly sharedPostId: FieldRef<"Post", 'String'>
    readonly mediaCount: FieldRef<"Post", 'Int'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly deletedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }

  /**
   * Post.media
   */
  export type Post$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    where?: PostMediaWhereInput
    orderBy?: PostMediaOrderByWithRelationInput | PostMediaOrderByWithRelationInput[]
    cursor?: PostMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostMediaScalarFieldEnum | PostMediaScalarFieldEnum[]
  }

  /**
   * Post.hashtags
   */
  export type Post$hashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    where?: PostHashtagWhereInput
    orderBy?: PostHashtagOrderByWithRelationInput | PostHashtagOrderByWithRelationInput[]
    cursor?: PostHashtagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostHashtagScalarFieldEnum | PostHashtagScalarFieldEnum[]
  }

  /**
   * Post.saves
   */
  export type Post$savesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    where?: SavedPostWhereInput
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    cursor?: SavedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model PostMedia
   */

  export type AggregatePostMedia = {
    _count: PostMediaCountAggregateOutputType | null
    _avg: PostMediaAvgAggregateOutputType | null
    _sum: PostMediaSumAggregateOutputType | null
    _min: PostMediaMinAggregateOutputType | null
    _max: PostMediaMaxAggregateOutputType | null
  }

  export type PostMediaAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type PostMediaSumAggregateOutputType = {
    orderIndex: number | null
  }

  export type PostMediaMinAggregateOutputType = {
    id: string | null
    postId: string | null
    mediaId: string | null
    mediaType: string | null
    url: string | null
    orderIndex: number | null
  }

  export type PostMediaMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    mediaId: string | null
    mediaType: string | null
    url: string | null
    orderIndex: number | null
  }

  export type PostMediaCountAggregateOutputType = {
    id: number
    postId: number
    mediaId: number
    mediaType: number
    url: number
    orderIndex: number
    _all: number
  }


  export type PostMediaAvgAggregateInputType = {
    orderIndex?: true
  }

  export type PostMediaSumAggregateInputType = {
    orderIndex?: true
  }

  export type PostMediaMinAggregateInputType = {
    id?: true
    postId?: true
    mediaId?: true
    mediaType?: true
    url?: true
    orderIndex?: true
  }

  export type PostMediaMaxAggregateInputType = {
    id?: true
    postId?: true
    mediaId?: true
    mediaType?: true
    url?: true
    orderIndex?: true
  }

  export type PostMediaCountAggregateInputType = {
    id?: true
    postId?: true
    mediaId?: true
    mediaType?: true
    url?: true
    orderIndex?: true
    _all?: true
  }

  export type PostMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostMedia to aggregate.
     */
    where?: PostMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMedias to fetch.
     */
    orderBy?: PostMediaOrderByWithRelationInput | PostMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostMedias
    **/
    _count?: true | PostMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostMediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostMediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMediaMaxAggregateInputType
  }

  export type GetPostMediaAggregateType<T extends PostMediaAggregateArgs> = {
        [P in keyof T & keyof AggregatePostMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostMedia[P]>
      : GetScalarType<T[P], AggregatePostMedia[P]>
  }




  export type PostMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostMediaWhereInput
    orderBy?: PostMediaOrderByWithAggregationInput | PostMediaOrderByWithAggregationInput[]
    by: PostMediaScalarFieldEnum[] | PostMediaScalarFieldEnum
    having?: PostMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostMediaCountAggregateInputType | true
    _avg?: PostMediaAvgAggregateInputType
    _sum?: PostMediaSumAggregateInputType
    _min?: PostMediaMinAggregateInputType
    _max?: PostMediaMaxAggregateInputType
  }

  export type PostMediaGroupByOutputType = {
    id: string
    postId: string
    mediaId: string
    mediaType: string
    url: string
    orderIndex: number
    _count: PostMediaCountAggregateOutputType | null
    _avg: PostMediaAvgAggregateOutputType | null
    _sum: PostMediaSumAggregateOutputType | null
    _min: PostMediaMinAggregateOutputType | null
    _max: PostMediaMaxAggregateOutputType | null
  }

  type GetPostMediaGroupByPayload<T extends PostMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostMediaGroupByOutputType[P]>
            : GetScalarType<T[P], PostMediaGroupByOutputType[P]>
        }
      >
    >


  export type PostMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    mediaId?: boolean
    mediaType?: boolean
    url?: boolean
    orderIndex?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postMedia"]>

  export type PostMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    mediaId?: boolean
    mediaType?: boolean
    url?: boolean
    orderIndex?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postMedia"]>

  export type PostMediaSelectScalar = {
    id?: boolean
    postId?: boolean
    mediaId?: boolean
    mediaType?: boolean
    url?: boolean
    orderIndex?: boolean
  }

  export type PostMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostMedia"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      mediaId: string
      mediaType: string
      url: string
      orderIndex: number
    }, ExtArgs["result"]["postMedia"]>
    composites: {}
  }

  type PostMediaGetPayload<S extends boolean | null | undefined | PostMediaDefaultArgs> = $Result.GetResult<Prisma.$PostMediaPayload, S>

  type PostMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostMediaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostMediaCountAggregateInputType | true
    }

  export interface PostMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostMedia'], meta: { name: 'PostMedia' } }
    /**
     * Find zero or one PostMedia that matches the filter.
     * @param {PostMediaFindUniqueArgs} args - Arguments to find a PostMedia
     * @example
     * // Get one PostMedia
     * const postMedia = await prisma.postMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostMediaFindUniqueArgs>(args: SelectSubset<T, PostMediaFindUniqueArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PostMedia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PostMediaFindUniqueOrThrowArgs} args - Arguments to find a PostMedia
     * @example
     * // Get one PostMedia
     * const postMedia = await prisma.postMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, PostMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PostMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaFindFirstArgs} args - Arguments to find a PostMedia
     * @example
     * // Get one PostMedia
     * const postMedia = await prisma.postMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostMediaFindFirstArgs>(args?: SelectSubset<T, PostMediaFindFirstArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PostMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaFindFirstOrThrowArgs} args - Arguments to find a PostMedia
     * @example
     * // Get one PostMedia
     * const postMedia = await prisma.postMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, PostMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PostMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostMedias
     * const postMedias = await prisma.postMedia.findMany()
     * 
     * // Get first 10 PostMedias
     * const postMedias = await prisma.postMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postMediaWithIdOnly = await prisma.postMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostMediaFindManyArgs>(args?: SelectSubset<T, PostMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PostMedia.
     * @param {PostMediaCreateArgs} args - Arguments to create a PostMedia.
     * @example
     * // Create one PostMedia
     * const PostMedia = await prisma.postMedia.create({
     *   data: {
     *     // ... data to create a PostMedia
     *   }
     * })
     * 
     */
    create<T extends PostMediaCreateArgs>(args: SelectSubset<T, PostMediaCreateArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PostMedias.
     * @param {PostMediaCreateManyArgs} args - Arguments to create many PostMedias.
     * @example
     * // Create many PostMedias
     * const postMedia = await prisma.postMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostMediaCreateManyArgs>(args?: SelectSubset<T, PostMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostMedias and returns the data saved in the database.
     * @param {PostMediaCreateManyAndReturnArgs} args - Arguments to create many PostMedias.
     * @example
     * // Create many PostMedias
     * const postMedia = await prisma.postMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostMedias and only return the `id`
     * const postMediaWithIdOnly = await prisma.postMedia.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, PostMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PostMedia.
     * @param {PostMediaDeleteArgs} args - Arguments to delete one PostMedia.
     * @example
     * // Delete one PostMedia
     * const PostMedia = await prisma.postMedia.delete({
     *   where: {
     *     // ... filter to delete one PostMedia
     *   }
     * })
     * 
     */
    delete<T extends PostMediaDeleteArgs>(args: SelectSubset<T, PostMediaDeleteArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PostMedia.
     * @param {PostMediaUpdateArgs} args - Arguments to update one PostMedia.
     * @example
     * // Update one PostMedia
     * const postMedia = await prisma.postMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostMediaUpdateArgs>(args: SelectSubset<T, PostMediaUpdateArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PostMedias.
     * @param {PostMediaDeleteManyArgs} args - Arguments to filter PostMedias to delete.
     * @example
     * // Delete a few PostMedias
     * const { count } = await prisma.postMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostMediaDeleteManyArgs>(args?: SelectSubset<T, PostMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostMedias
     * const postMedia = await prisma.postMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostMediaUpdateManyArgs>(args: SelectSubset<T, PostMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostMedia.
     * @param {PostMediaUpsertArgs} args - Arguments to update or create a PostMedia.
     * @example
     * // Update or create a PostMedia
     * const postMedia = await prisma.postMedia.upsert({
     *   create: {
     *     // ... data to create a PostMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostMedia we want to update
     *   }
     * })
     */
    upsert<T extends PostMediaUpsertArgs>(args: SelectSubset<T, PostMediaUpsertArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PostMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaCountArgs} args - Arguments to filter PostMedias to count.
     * @example
     * // Count the number of PostMedias
     * const count = await prisma.postMedia.count({
     *   where: {
     *     // ... the filter for the PostMedias we want to count
     *   }
     * })
    **/
    count<T extends PostMediaCountArgs>(
      args?: Subset<T, PostMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostMediaAggregateArgs>(args: Subset<T, PostMediaAggregateArgs>): Prisma.PrismaPromise<GetPostMediaAggregateType<T>>

    /**
     * Group by PostMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostMediaGroupByArgs['orderBy'] }
        : { orderBy?: PostMediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostMedia model
   */
  readonly fields: PostMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostMedia model
   */ 
  interface PostMediaFieldRefs {
    readonly id: FieldRef<"PostMedia", 'String'>
    readonly postId: FieldRef<"PostMedia", 'String'>
    readonly mediaId: FieldRef<"PostMedia", 'String'>
    readonly mediaType: FieldRef<"PostMedia", 'String'>
    readonly url: FieldRef<"PostMedia", 'String'>
    readonly orderIndex: FieldRef<"PostMedia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PostMedia findUnique
   */
  export type PostMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * Filter, which PostMedia to fetch.
     */
    where: PostMediaWhereUniqueInput
  }

  /**
   * PostMedia findUniqueOrThrow
   */
  export type PostMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * Filter, which PostMedia to fetch.
     */
    where: PostMediaWhereUniqueInput
  }

  /**
   * PostMedia findFirst
   */
  export type PostMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * Filter, which PostMedia to fetch.
     */
    where?: PostMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMedias to fetch.
     */
    orderBy?: PostMediaOrderByWithRelationInput | PostMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostMedias.
     */
    cursor?: PostMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostMedias.
     */
    distinct?: PostMediaScalarFieldEnum | PostMediaScalarFieldEnum[]
  }

  /**
   * PostMedia findFirstOrThrow
   */
  export type PostMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * Filter, which PostMedia to fetch.
     */
    where?: PostMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMedias to fetch.
     */
    orderBy?: PostMediaOrderByWithRelationInput | PostMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostMedias.
     */
    cursor?: PostMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostMedias.
     */
    distinct?: PostMediaScalarFieldEnum | PostMediaScalarFieldEnum[]
  }

  /**
   * PostMedia findMany
   */
  export type PostMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * Filter, which PostMedias to fetch.
     */
    where?: PostMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMedias to fetch.
     */
    orderBy?: PostMediaOrderByWithRelationInput | PostMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostMedias.
     */
    cursor?: PostMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMedias.
     */
    skip?: number
    distinct?: PostMediaScalarFieldEnum | PostMediaScalarFieldEnum[]
  }

  /**
   * PostMedia create
   */
  export type PostMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a PostMedia.
     */
    data: XOR<PostMediaCreateInput, PostMediaUncheckedCreateInput>
  }

  /**
   * PostMedia createMany
   */
  export type PostMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostMedias.
     */
    data: PostMediaCreateManyInput | PostMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostMedia createManyAndReturn
   */
  export type PostMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PostMedias.
     */
    data: PostMediaCreateManyInput | PostMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostMedia update
   */
  export type PostMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a PostMedia.
     */
    data: XOR<PostMediaUpdateInput, PostMediaUncheckedUpdateInput>
    /**
     * Choose, which PostMedia to update.
     */
    where: PostMediaWhereUniqueInput
  }

  /**
   * PostMedia updateMany
   */
  export type PostMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostMedias.
     */
    data: XOR<PostMediaUpdateManyMutationInput, PostMediaUncheckedUpdateManyInput>
    /**
     * Filter which PostMedias to update
     */
    where?: PostMediaWhereInput
  }

  /**
   * PostMedia upsert
   */
  export type PostMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the PostMedia to update in case it exists.
     */
    where: PostMediaWhereUniqueInput
    /**
     * In case the PostMedia found by the `where` argument doesn't exist, create a new PostMedia with this data.
     */
    create: XOR<PostMediaCreateInput, PostMediaUncheckedCreateInput>
    /**
     * In case the PostMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostMediaUpdateInput, PostMediaUncheckedUpdateInput>
  }

  /**
   * PostMedia delete
   */
  export type PostMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * Filter which PostMedia to delete.
     */
    where: PostMediaWhereUniqueInput
  }

  /**
   * PostMedia deleteMany
   */
  export type PostMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostMedias to delete
     */
    where?: PostMediaWhereInput
  }

  /**
   * PostMedia without action
   */
  export type PostMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
  }


  /**
   * Model Hashtag
   */

  export type AggregateHashtag = {
    _count: HashtagCountAggregateOutputType | null
    _avg: HashtagAvgAggregateOutputType | null
    _sum: HashtagSumAggregateOutputType | null
    _min: HashtagMinAggregateOutputType | null
    _max: HashtagMaxAggregateOutputType | null
  }

  export type HashtagAvgAggregateOutputType = {
    postCount: number | null
  }

  export type HashtagSumAggregateOutputType = {
    postCount: number | null
  }

  export type HashtagMinAggregateOutputType = {
    id: string | null
    tag: string | null
    postCount: number | null
    lastUsedAt: Date | null
  }

  export type HashtagMaxAggregateOutputType = {
    id: string | null
    tag: string | null
    postCount: number | null
    lastUsedAt: Date | null
  }

  export type HashtagCountAggregateOutputType = {
    id: number
    tag: number
    postCount: number
    lastUsedAt: number
    _all: number
  }


  export type HashtagAvgAggregateInputType = {
    postCount?: true
  }

  export type HashtagSumAggregateInputType = {
    postCount?: true
  }

  export type HashtagMinAggregateInputType = {
    id?: true
    tag?: true
    postCount?: true
    lastUsedAt?: true
  }

  export type HashtagMaxAggregateInputType = {
    id?: true
    tag?: true
    postCount?: true
    lastUsedAt?: true
  }

  export type HashtagCountAggregateInputType = {
    id?: true
    tag?: true
    postCount?: true
    lastUsedAt?: true
    _all?: true
  }

  export type HashtagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hashtag to aggregate.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hashtags
    **/
    _count?: true | HashtagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HashtagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HashtagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HashtagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HashtagMaxAggregateInputType
  }

  export type GetHashtagAggregateType<T extends HashtagAggregateArgs> = {
        [P in keyof T & keyof AggregateHashtag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHashtag[P]>
      : GetScalarType<T[P], AggregateHashtag[P]>
  }




  export type HashtagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HashtagWhereInput
    orderBy?: HashtagOrderByWithAggregationInput | HashtagOrderByWithAggregationInput[]
    by: HashtagScalarFieldEnum[] | HashtagScalarFieldEnum
    having?: HashtagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HashtagCountAggregateInputType | true
    _avg?: HashtagAvgAggregateInputType
    _sum?: HashtagSumAggregateInputType
    _min?: HashtagMinAggregateInputType
    _max?: HashtagMaxAggregateInputType
  }

  export type HashtagGroupByOutputType = {
    id: string
    tag: string
    postCount: number
    lastUsedAt: Date
    _count: HashtagCountAggregateOutputType | null
    _avg: HashtagAvgAggregateOutputType | null
    _sum: HashtagSumAggregateOutputType | null
    _min: HashtagMinAggregateOutputType | null
    _max: HashtagMaxAggregateOutputType | null
  }

  type GetHashtagGroupByPayload<T extends HashtagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HashtagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HashtagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HashtagGroupByOutputType[P]>
            : GetScalarType<T[P], HashtagGroupByOutputType[P]>
        }
      >
    >


  export type HashtagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag?: boolean
    postCount?: boolean
    lastUsedAt?: boolean
    posts?: boolean | Hashtag$postsArgs<ExtArgs>
    _count?: boolean | HashtagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hashtag"]>

  export type HashtagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag?: boolean
    postCount?: boolean
    lastUsedAt?: boolean
  }, ExtArgs["result"]["hashtag"]>

  export type HashtagSelectScalar = {
    id?: boolean
    tag?: boolean
    postCount?: boolean
    lastUsedAt?: boolean
  }

  export type HashtagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Hashtag$postsArgs<ExtArgs>
    _count?: boolean | HashtagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HashtagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HashtagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hashtag"
    objects: {
      posts: Prisma.$PostHashtagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tag: string
      postCount: number
      lastUsedAt: Date
    }, ExtArgs["result"]["hashtag"]>
    composites: {}
  }

  type HashtagGetPayload<S extends boolean | null | undefined | HashtagDefaultArgs> = $Result.GetResult<Prisma.$HashtagPayload, S>

  type HashtagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HashtagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HashtagCountAggregateInputType | true
    }

  export interface HashtagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hashtag'], meta: { name: 'Hashtag' } }
    /**
     * Find zero or one Hashtag that matches the filter.
     * @param {HashtagFindUniqueArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HashtagFindUniqueArgs>(args: SelectSubset<T, HashtagFindUniqueArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Hashtag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HashtagFindUniqueOrThrowArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HashtagFindUniqueOrThrowArgs>(args: SelectSubset<T, HashtagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Hashtag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindFirstArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HashtagFindFirstArgs>(args?: SelectSubset<T, HashtagFindFirstArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Hashtag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindFirstOrThrowArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HashtagFindFirstOrThrowArgs>(args?: SelectSubset<T, HashtagFindFirstOrThrowArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Hashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hashtags
     * const hashtags = await prisma.hashtag.findMany()
     * 
     * // Get first 10 Hashtags
     * const hashtags = await prisma.hashtag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hashtagWithIdOnly = await prisma.hashtag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HashtagFindManyArgs>(args?: SelectSubset<T, HashtagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Hashtag.
     * @param {HashtagCreateArgs} args - Arguments to create a Hashtag.
     * @example
     * // Create one Hashtag
     * const Hashtag = await prisma.hashtag.create({
     *   data: {
     *     // ... data to create a Hashtag
     *   }
     * })
     * 
     */
    create<T extends HashtagCreateArgs>(args: SelectSubset<T, HashtagCreateArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Hashtags.
     * @param {HashtagCreateManyArgs} args - Arguments to create many Hashtags.
     * @example
     * // Create many Hashtags
     * const hashtag = await prisma.hashtag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HashtagCreateManyArgs>(args?: SelectSubset<T, HashtagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hashtags and returns the data saved in the database.
     * @param {HashtagCreateManyAndReturnArgs} args - Arguments to create many Hashtags.
     * @example
     * // Create many Hashtags
     * const hashtag = await prisma.hashtag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hashtags and only return the `id`
     * const hashtagWithIdOnly = await prisma.hashtag.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HashtagCreateManyAndReturnArgs>(args?: SelectSubset<T, HashtagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Hashtag.
     * @param {HashtagDeleteArgs} args - Arguments to delete one Hashtag.
     * @example
     * // Delete one Hashtag
     * const Hashtag = await prisma.hashtag.delete({
     *   where: {
     *     // ... filter to delete one Hashtag
     *   }
     * })
     * 
     */
    delete<T extends HashtagDeleteArgs>(args: SelectSubset<T, HashtagDeleteArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Hashtag.
     * @param {HashtagUpdateArgs} args - Arguments to update one Hashtag.
     * @example
     * // Update one Hashtag
     * const hashtag = await prisma.hashtag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HashtagUpdateArgs>(args: SelectSubset<T, HashtagUpdateArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Hashtags.
     * @param {HashtagDeleteManyArgs} args - Arguments to filter Hashtags to delete.
     * @example
     * // Delete a few Hashtags
     * const { count } = await prisma.hashtag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HashtagDeleteManyArgs>(args?: SelectSubset<T, HashtagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hashtags
     * const hashtag = await prisma.hashtag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HashtagUpdateManyArgs>(args: SelectSubset<T, HashtagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hashtag.
     * @param {HashtagUpsertArgs} args - Arguments to update or create a Hashtag.
     * @example
     * // Update or create a Hashtag
     * const hashtag = await prisma.hashtag.upsert({
     *   create: {
     *     // ... data to create a Hashtag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hashtag we want to update
     *   }
     * })
     */
    upsert<T extends HashtagUpsertArgs>(args: SelectSubset<T, HashtagUpsertArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagCountArgs} args - Arguments to filter Hashtags to count.
     * @example
     * // Count the number of Hashtags
     * const count = await prisma.hashtag.count({
     *   where: {
     *     // ... the filter for the Hashtags we want to count
     *   }
     * })
    **/
    count<T extends HashtagCountArgs>(
      args?: Subset<T, HashtagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HashtagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HashtagAggregateArgs>(args: Subset<T, HashtagAggregateArgs>): Prisma.PrismaPromise<GetHashtagAggregateType<T>>

    /**
     * Group by Hashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HashtagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HashtagGroupByArgs['orderBy'] }
        : { orderBy?: HashtagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HashtagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHashtagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hashtag model
   */
  readonly fields: HashtagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hashtag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HashtagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Hashtag$postsArgs<ExtArgs> = {}>(args?: Subset<T, Hashtag$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hashtag model
   */ 
  interface HashtagFieldRefs {
    readonly id: FieldRef<"Hashtag", 'String'>
    readonly tag: FieldRef<"Hashtag", 'String'>
    readonly postCount: FieldRef<"Hashtag", 'Int'>
    readonly lastUsedAt: FieldRef<"Hashtag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hashtag findUnique
   */
  export type HashtagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag findUniqueOrThrow
   */
  export type HashtagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag findFirst
   */
  export type HashtagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hashtags.
     */
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Hashtag findFirstOrThrow
   */
  export type HashtagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hashtags.
     */
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Hashtag findMany
   */
  export type HashtagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtags to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Hashtag create
   */
  export type HashtagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * The data needed to create a Hashtag.
     */
    data: XOR<HashtagCreateInput, HashtagUncheckedCreateInput>
  }

  /**
   * Hashtag createMany
   */
  export type HashtagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hashtags.
     */
    data: HashtagCreateManyInput | HashtagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hashtag createManyAndReturn
   */
  export type HashtagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Hashtags.
     */
    data: HashtagCreateManyInput | HashtagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hashtag update
   */
  export type HashtagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * The data needed to update a Hashtag.
     */
    data: XOR<HashtagUpdateInput, HashtagUncheckedUpdateInput>
    /**
     * Choose, which Hashtag to update.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag updateMany
   */
  export type HashtagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hashtags.
     */
    data: XOR<HashtagUpdateManyMutationInput, HashtagUncheckedUpdateManyInput>
    /**
     * Filter which Hashtags to update
     */
    where?: HashtagWhereInput
  }

  /**
   * Hashtag upsert
   */
  export type HashtagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * The filter to search for the Hashtag to update in case it exists.
     */
    where: HashtagWhereUniqueInput
    /**
     * In case the Hashtag found by the `where` argument doesn't exist, create a new Hashtag with this data.
     */
    create: XOR<HashtagCreateInput, HashtagUncheckedCreateInput>
    /**
     * In case the Hashtag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HashtagUpdateInput, HashtagUncheckedUpdateInput>
  }

  /**
   * Hashtag delete
   */
  export type HashtagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter which Hashtag to delete.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag deleteMany
   */
  export type HashtagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hashtags to delete
     */
    where?: HashtagWhereInput
  }

  /**
   * Hashtag.posts
   */
  export type Hashtag$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    where?: PostHashtagWhereInput
    orderBy?: PostHashtagOrderByWithRelationInput | PostHashtagOrderByWithRelationInput[]
    cursor?: PostHashtagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostHashtagScalarFieldEnum | PostHashtagScalarFieldEnum[]
  }

  /**
   * Hashtag without action
   */
  export type HashtagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
  }


  /**
   * Model PostHashtag
   */

  export type AggregatePostHashtag = {
    _count: PostHashtagCountAggregateOutputType | null
    _min: PostHashtagMinAggregateOutputType | null
    _max: PostHashtagMaxAggregateOutputType | null
  }

  export type PostHashtagMinAggregateOutputType = {
    postId: string | null
    hashtagId: string | null
  }

  export type PostHashtagMaxAggregateOutputType = {
    postId: string | null
    hashtagId: string | null
  }

  export type PostHashtagCountAggregateOutputType = {
    postId: number
    hashtagId: number
    _all: number
  }


  export type PostHashtagMinAggregateInputType = {
    postId?: true
    hashtagId?: true
  }

  export type PostHashtagMaxAggregateInputType = {
    postId?: true
    hashtagId?: true
  }

  export type PostHashtagCountAggregateInputType = {
    postId?: true
    hashtagId?: true
    _all?: true
  }

  export type PostHashtagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostHashtag to aggregate.
     */
    where?: PostHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHashtags to fetch.
     */
    orderBy?: PostHashtagOrderByWithRelationInput | PostHashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostHashtags
    **/
    _count?: true | PostHashtagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostHashtagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostHashtagMaxAggregateInputType
  }

  export type GetPostHashtagAggregateType<T extends PostHashtagAggregateArgs> = {
        [P in keyof T & keyof AggregatePostHashtag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostHashtag[P]>
      : GetScalarType<T[P], AggregatePostHashtag[P]>
  }




  export type PostHashtagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostHashtagWhereInput
    orderBy?: PostHashtagOrderByWithAggregationInput | PostHashtagOrderByWithAggregationInput[]
    by: PostHashtagScalarFieldEnum[] | PostHashtagScalarFieldEnum
    having?: PostHashtagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostHashtagCountAggregateInputType | true
    _min?: PostHashtagMinAggregateInputType
    _max?: PostHashtagMaxAggregateInputType
  }

  export type PostHashtagGroupByOutputType = {
    postId: string
    hashtagId: string
    _count: PostHashtagCountAggregateOutputType | null
    _min: PostHashtagMinAggregateOutputType | null
    _max: PostHashtagMaxAggregateOutputType | null
  }

  type GetPostHashtagGroupByPayload<T extends PostHashtagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostHashtagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostHashtagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostHashtagGroupByOutputType[P]>
            : GetScalarType<T[P], PostHashtagGroupByOutputType[P]>
        }
      >
    >


  export type PostHashtagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    hashtagId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postHashtag"]>

  export type PostHashtagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    hashtagId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postHashtag"]>

  export type PostHashtagSelectScalar = {
    postId?: boolean
    hashtagId?: boolean
  }

  export type PostHashtagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }
  export type PostHashtagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    hashtag?: boolean | HashtagDefaultArgs<ExtArgs>
  }

  export type $PostHashtagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostHashtag"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      hashtag: Prisma.$HashtagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      postId: string
      hashtagId: string
    }, ExtArgs["result"]["postHashtag"]>
    composites: {}
  }

  type PostHashtagGetPayload<S extends boolean | null | undefined | PostHashtagDefaultArgs> = $Result.GetResult<Prisma.$PostHashtagPayload, S>

  type PostHashtagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostHashtagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostHashtagCountAggregateInputType | true
    }

  export interface PostHashtagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostHashtag'], meta: { name: 'PostHashtag' } }
    /**
     * Find zero or one PostHashtag that matches the filter.
     * @param {PostHashtagFindUniqueArgs} args - Arguments to find a PostHashtag
     * @example
     * // Get one PostHashtag
     * const postHashtag = await prisma.postHashtag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostHashtagFindUniqueArgs>(args: SelectSubset<T, PostHashtagFindUniqueArgs<ExtArgs>>): Prisma__PostHashtagClient<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PostHashtag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PostHashtagFindUniqueOrThrowArgs} args - Arguments to find a PostHashtag
     * @example
     * // Get one PostHashtag
     * const postHashtag = await prisma.postHashtag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostHashtagFindUniqueOrThrowArgs>(args: SelectSubset<T, PostHashtagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostHashtagClient<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PostHashtag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagFindFirstArgs} args - Arguments to find a PostHashtag
     * @example
     * // Get one PostHashtag
     * const postHashtag = await prisma.postHashtag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostHashtagFindFirstArgs>(args?: SelectSubset<T, PostHashtagFindFirstArgs<ExtArgs>>): Prisma__PostHashtagClient<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PostHashtag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagFindFirstOrThrowArgs} args - Arguments to find a PostHashtag
     * @example
     * // Get one PostHashtag
     * const postHashtag = await prisma.postHashtag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostHashtagFindFirstOrThrowArgs>(args?: SelectSubset<T, PostHashtagFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostHashtagClient<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PostHashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostHashtags
     * const postHashtags = await prisma.postHashtag.findMany()
     * 
     * // Get first 10 PostHashtags
     * const postHashtags = await prisma.postHashtag.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const postHashtagWithPostIdOnly = await prisma.postHashtag.findMany({ select: { postId: true } })
     * 
     */
    findMany<T extends PostHashtagFindManyArgs>(args?: SelectSubset<T, PostHashtagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PostHashtag.
     * @param {PostHashtagCreateArgs} args - Arguments to create a PostHashtag.
     * @example
     * // Create one PostHashtag
     * const PostHashtag = await prisma.postHashtag.create({
     *   data: {
     *     // ... data to create a PostHashtag
     *   }
     * })
     * 
     */
    create<T extends PostHashtagCreateArgs>(args: SelectSubset<T, PostHashtagCreateArgs<ExtArgs>>): Prisma__PostHashtagClient<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PostHashtags.
     * @param {PostHashtagCreateManyArgs} args - Arguments to create many PostHashtags.
     * @example
     * // Create many PostHashtags
     * const postHashtag = await prisma.postHashtag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostHashtagCreateManyArgs>(args?: SelectSubset<T, PostHashtagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostHashtags and returns the data saved in the database.
     * @param {PostHashtagCreateManyAndReturnArgs} args - Arguments to create many PostHashtags.
     * @example
     * // Create many PostHashtags
     * const postHashtag = await prisma.postHashtag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostHashtags and only return the `postId`
     * const postHashtagWithPostIdOnly = await prisma.postHashtag.createManyAndReturn({ 
     *   select: { postId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostHashtagCreateManyAndReturnArgs>(args?: SelectSubset<T, PostHashtagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PostHashtag.
     * @param {PostHashtagDeleteArgs} args - Arguments to delete one PostHashtag.
     * @example
     * // Delete one PostHashtag
     * const PostHashtag = await prisma.postHashtag.delete({
     *   where: {
     *     // ... filter to delete one PostHashtag
     *   }
     * })
     * 
     */
    delete<T extends PostHashtagDeleteArgs>(args: SelectSubset<T, PostHashtagDeleteArgs<ExtArgs>>): Prisma__PostHashtagClient<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PostHashtag.
     * @param {PostHashtagUpdateArgs} args - Arguments to update one PostHashtag.
     * @example
     * // Update one PostHashtag
     * const postHashtag = await prisma.postHashtag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostHashtagUpdateArgs>(args: SelectSubset<T, PostHashtagUpdateArgs<ExtArgs>>): Prisma__PostHashtagClient<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PostHashtags.
     * @param {PostHashtagDeleteManyArgs} args - Arguments to filter PostHashtags to delete.
     * @example
     * // Delete a few PostHashtags
     * const { count } = await prisma.postHashtag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostHashtagDeleteManyArgs>(args?: SelectSubset<T, PostHashtagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostHashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostHashtags
     * const postHashtag = await prisma.postHashtag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostHashtagUpdateManyArgs>(args: SelectSubset<T, PostHashtagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostHashtag.
     * @param {PostHashtagUpsertArgs} args - Arguments to update or create a PostHashtag.
     * @example
     * // Update or create a PostHashtag
     * const postHashtag = await prisma.postHashtag.upsert({
     *   create: {
     *     // ... data to create a PostHashtag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostHashtag we want to update
     *   }
     * })
     */
    upsert<T extends PostHashtagUpsertArgs>(args: SelectSubset<T, PostHashtagUpsertArgs<ExtArgs>>): Prisma__PostHashtagClient<$Result.GetResult<Prisma.$PostHashtagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PostHashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagCountArgs} args - Arguments to filter PostHashtags to count.
     * @example
     * // Count the number of PostHashtags
     * const count = await prisma.postHashtag.count({
     *   where: {
     *     // ... the filter for the PostHashtags we want to count
     *   }
     * })
    **/
    count<T extends PostHashtagCountArgs>(
      args?: Subset<T, PostHashtagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostHashtagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostHashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostHashtagAggregateArgs>(args: Subset<T, PostHashtagAggregateArgs>): Prisma.PrismaPromise<GetPostHashtagAggregateType<T>>

    /**
     * Group by PostHashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHashtagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostHashtagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostHashtagGroupByArgs['orderBy'] }
        : { orderBy?: PostHashtagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostHashtagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostHashtagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostHashtag model
   */
  readonly fields: PostHashtagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostHashtag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostHashtagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    hashtag<T extends HashtagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HashtagDefaultArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostHashtag model
   */ 
  interface PostHashtagFieldRefs {
    readonly postId: FieldRef<"PostHashtag", 'String'>
    readonly hashtagId: FieldRef<"PostHashtag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostHashtag findUnique
   */
  export type PostHashtagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    /**
     * Filter, which PostHashtag to fetch.
     */
    where: PostHashtagWhereUniqueInput
  }

  /**
   * PostHashtag findUniqueOrThrow
   */
  export type PostHashtagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    /**
     * Filter, which PostHashtag to fetch.
     */
    where: PostHashtagWhereUniqueInput
  }

  /**
   * PostHashtag findFirst
   */
  export type PostHashtagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    /**
     * Filter, which PostHashtag to fetch.
     */
    where?: PostHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHashtags to fetch.
     */
    orderBy?: PostHashtagOrderByWithRelationInput | PostHashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostHashtags.
     */
    cursor?: PostHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostHashtags.
     */
    distinct?: PostHashtagScalarFieldEnum | PostHashtagScalarFieldEnum[]
  }

  /**
   * PostHashtag findFirstOrThrow
   */
  export type PostHashtagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    /**
     * Filter, which PostHashtag to fetch.
     */
    where?: PostHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHashtags to fetch.
     */
    orderBy?: PostHashtagOrderByWithRelationInput | PostHashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostHashtags.
     */
    cursor?: PostHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostHashtags.
     */
    distinct?: PostHashtagScalarFieldEnum | PostHashtagScalarFieldEnum[]
  }

  /**
   * PostHashtag findMany
   */
  export type PostHashtagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    /**
     * Filter, which PostHashtags to fetch.
     */
    where?: PostHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHashtags to fetch.
     */
    orderBy?: PostHashtagOrderByWithRelationInput | PostHashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostHashtags.
     */
    cursor?: PostHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHashtags.
     */
    skip?: number
    distinct?: PostHashtagScalarFieldEnum | PostHashtagScalarFieldEnum[]
  }

  /**
   * PostHashtag create
   */
  export type PostHashtagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    /**
     * The data needed to create a PostHashtag.
     */
    data: XOR<PostHashtagCreateInput, PostHashtagUncheckedCreateInput>
  }

  /**
   * PostHashtag createMany
   */
  export type PostHashtagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostHashtags.
     */
    data: PostHashtagCreateManyInput | PostHashtagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostHashtag createManyAndReturn
   */
  export type PostHashtagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PostHashtags.
     */
    data: PostHashtagCreateManyInput | PostHashtagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostHashtag update
   */
  export type PostHashtagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    /**
     * The data needed to update a PostHashtag.
     */
    data: XOR<PostHashtagUpdateInput, PostHashtagUncheckedUpdateInput>
    /**
     * Choose, which PostHashtag to update.
     */
    where: PostHashtagWhereUniqueInput
  }

  /**
   * PostHashtag updateMany
   */
  export type PostHashtagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostHashtags.
     */
    data: XOR<PostHashtagUpdateManyMutationInput, PostHashtagUncheckedUpdateManyInput>
    /**
     * Filter which PostHashtags to update
     */
    where?: PostHashtagWhereInput
  }

  /**
   * PostHashtag upsert
   */
  export type PostHashtagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    /**
     * The filter to search for the PostHashtag to update in case it exists.
     */
    where: PostHashtagWhereUniqueInput
    /**
     * In case the PostHashtag found by the `where` argument doesn't exist, create a new PostHashtag with this data.
     */
    create: XOR<PostHashtagCreateInput, PostHashtagUncheckedCreateInput>
    /**
     * In case the PostHashtag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostHashtagUpdateInput, PostHashtagUncheckedUpdateInput>
  }

  /**
   * PostHashtag delete
   */
  export type PostHashtagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
    /**
     * Filter which PostHashtag to delete.
     */
    where: PostHashtagWhereUniqueInput
  }

  /**
   * PostHashtag deleteMany
   */
  export type PostHashtagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostHashtags to delete
     */
    where?: PostHashtagWhereInput
  }

  /**
   * PostHashtag without action
   */
  export type PostHashtagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHashtag
     */
    select?: PostHashtagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHashtagInclude<ExtArgs> | null
  }


  /**
   * Model SavedPost
   */

  export type AggregateSavedPost = {
    _count: SavedPostCountAggregateOutputType | null
    _min: SavedPostMinAggregateOutputType | null
    _max: SavedPostMaxAggregateOutputType | null
  }

  export type SavedPostMinAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    savedAt: Date | null
  }

  export type SavedPostMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    savedAt: Date | null
  }

  export type SavedPostCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    savedAt: number
    _all: number
  }


  export type SavedPostMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    savedAt?: true
  }

  export type SavedPostMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    savedAt?: true
  }

  export type SavedPostCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    savedAt?: true
    _all?: true
  }

  export type SavedPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedPost to aggregate.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedPosts
    **/
    _count?: true | SavedPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedPostMaxAggregateInputType
  }

  export type GetSavedPostAggregateType<T extends SavedPostAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedPost[P]>
      : GetScalarType<T[P], AggregateSavedPost[P]>
  }




  export type SavedPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedPostWhereInput
    orderBy?: SavedPostOrderByWithAggregationInput | SavedPostOrderByWithAggregationInput[]
    by: SavedPostScalarFieldEnum[] | SavedPostScalarFieldEnum
    having?: SavedPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedPostCountAggregateInputType | true
    _min?: SavedPostMinAggregateInputType
    _max?: SavedPostMaxAggregateInputType
  }

  export type SavedPostGroupByOutputType = {
    id: string
    userId: string
    postId: string
    savedAt: Date
    _count: SavedPostCountAggregateOutputType | null
    _min: SavedPostMinAggregateOutputType | null
    _max: SavedPostMaxAggregateOutputType | null
  }

  type GetSavedPostGroupByPayload<T extends SavedPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedPostGroupByOutputType[P]>
            : GetScalarType<T[P], SavedPostGroupByOutputType[P]>
        }
      >
    >


  export type SavedPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    savedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedPost"]>

  export type SavedPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    savedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedPost"]>

  export type SavedPostSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    savedAt?: boolean
  }

  export type SavedPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type SavedPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $SavedPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedPost"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      postId: string
      savedAt: Date
    }, ExtArgs["result"]["savedPost"]>
    composites: {}
  }

  type SavedPostGetPayload<S extends boolean | null | undefined | SavedPostDefaultArgs> = $Result.GetResult<Prisma.$SavedPostPayload, S>

  type SavedPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SavedPostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SavedPostCountAggregateInputType | true
    }

  export interface SavedPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedPost'], meta: { name: 'SavedPost' } }
    /**
     * Find zero or one SavedPost that matches the filter.
     * @param {SavedPostFindUniqueArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedPostFindUniqueArgs>(args: SelectSubset<T, SavedPostFindUniqueArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SavedPost that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SavedPostFindUniqueOrThrowArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedPostFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SavedPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostFindFirstArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedPostFindFirstArgs>(args?: SelectSubset<T, SavedPostFindFirstArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SavedPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostFindFirstOrThrowArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedPostFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SavedPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedPosts
     * const savedPosts = await prisma.savedPost.findMany()
     * 
     * // Get first 10 SavedPosts
     * const savedPosts = await prisma.savedPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedPostWithIdOnly = await prisma.savedPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedPostFindManyArgs>(args?: SelectSubset<T, SavedPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SavedPost.
     * @param {SavedPostCreateArgs} args - Arguments to create a SavedPost.
     * @example
     * // Create one SavedPost
     * const SavedPost = await prisma.savedPost.create({
     *   data: {
     *     // ... data to create a SavedPost
     *   }
     * })
     * 
     */
    create<T extends SavedPostCreateArgs>(args: SelectSubset<T, SavedPostCreateArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SavedPosts.
     * @param {SavedPostCreateManyArgs} args - Arguments to create many SavedPosts.
     * @example
     * // Create many SavedPosts
     * const savedPost = await prisma.savedPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedPostCreateManyArgs>(args?: SelectSubset<T, SavedPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedPosts and returns the data saved in the database.
     * @param {SavedPostCreateManyAndReturnArgs} args - Arguments to create many SavedPosts.
     * @example
     * // Create many SavedPosts
     * const savedPost = await prisma.savedPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedPosts and only return the `id`
     * const savedPostWithIdOnly = await prisma.savedPost.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedPostCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SavedPost.
     * @param {SavedPostDeleteArgs} args - Arguments to delete one SavedPost.
     * @example
     * // Delete one SavedPost
     * const SavedPost = await prisma.savedPost.delete({
     *   where: {
     *     // ... filter to delete one SavedPost
     *   }
     * })
     * 
     */
    delete<T extends SavedPostDeleteArgs>(args: SelectSubset<T, SavedPostDeleteArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SavedPost.
     * @param {SavedPostUpdateArgs} args - Arguments to update one SavedPost.
     * @example
     * // Update one SavedPost
     * const savedPost = await prisma.savedPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedPostUpdateArgs>(args: SelectSubset<T, SavedPostUpdateArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SavedPosts.
     * @param {SavedPostDeleteManyArgs} args - Arguments to filter SavedPosts to delete.
     * @example
     * // Delete a few SavedPosts
     * const { count } = await prisma.savedPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedPostDeleteManyArgs>(args?: SelectSubset<T, SavedPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedPosts
     * const savedPost = await prisma.savedPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedPostUpdateManyArgs>(args: SelectSubset<T, SavedPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavedPost.
     * @param {SavedPostUpsertArgs} args - Arguments to update or create a SavedPost.
     * @example
     * // Update or create a SavedPost
     * const savedPost = await prisma.savedPost.upsert({
     *   create: {
     *     // ... data to create a SavedPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedPost we want to update
     *   }
     * })
     */
    upsert<T extends SavedPostUpsertArgs>(args: SelectSubset<T, SavedPostUpsertArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SavedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostCountArgs} args - Arguments to filter SavedPosts to count.
     * @example
     * // Count the number of SavedPosts
     * const count = await prisma.savedPost.count({
     *   where: {
     *     // ... the filter for the SavedPosts we want to count
     *   }
     * })
    **/
    count<T extends SavedPostCountArgs>(
      args?: Subset<T, SavedPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedPostAggregateArgs>(args: Subset<T, SavedPostAggregateArgs>): Prisma.PrismaPromise<GetSavedPostAggregateType<T>>

    /**
     * Group by SavedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedPostGroupByArgs['orderBy'] }
        : { orderBy?: SavedPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedPost model
   */
  readonly fields: SavedPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedPost model
   */ 
  interface SavedPostFieldRefs {
    readonly id: FieldRef<"SavedPost", 'String'>
    readonly userId: FieldRef<"SavedPost", 'String'>
    readonly postId: FieldRef<"SavedPost", 'String'>
    readonly savedAt: FieldRef<"SavedPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedPost findUnique
   */
  export type SavedPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost findUniqueOrThrow
   */
  export type SavedPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost findFirst
   */
  export type SavedPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedPosts.
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedPosts.
     */
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * SavedPost findFirstOrThrow
   */
  export type SavedPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedPosts.
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedPosts.
     */
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * SavedPost findMany
   */
  export type SavedPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPosts to fetch.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedPosts.
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * SavedPost create
   */
  export type SavedPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedPost.
     */
    data: XOR<SavedPostCreateInput, SavedPostUncheckedCreateInput>
  }

  /**
   * SavedPost createMany
   */
  export type SavedPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedPosts.
     */
    data: SavedPostCreateManyInput | SavedPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedPost createManyAndReturn
   */
  export type SavedPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SavedPosts.
     */
    data: SavedPostCreateManyInput | SavedPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedPost update
   */
  export type SavedPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedPost.
     */
    data: XOR<SavedPostUpdateInput, SavedPostUncheckedUpdateInput>
    /**
     * Choose, which SavedPost to update.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost updateMany
   */
  export type SavedPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedPosts.
     */
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyInput>
    /**
     * Filter which SavedPosts to update
     */
    where?: SavedPostWhereInput
  }

  /**
   * SavedPost upsert
   */
  export type SavedPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedPost to update in case it exists.
     */
    where: SavedPostWhereUniqueInput
    /**
     * In case the SavedPost found by the `where` argument doesn't exist, create a new SavedPost with this data.
     */
    create: XOR<SavedPostCreateInput, SavedPostUncheckedCreateInput>
    /**
     * In case the SavedPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedPostUpdateInput, SavedPostUncheckedUpdateInput>
  }

  /**
   * SavedPost delete
   */
  export type SavedPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter which SavedPost to delete.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost deleteMany
   */
  export type SavedPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedPosts to delete
     */
    where?: SavedPostWhereInput
  }

  /**
   * SavedPost without action
   */
  export type SavedPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
  }


  /**
   * Model Story
   */

  export type AggregateStory = {
    _count: StoryCountAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  export type StoryMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    type: $Enums.StoryType | null
    content: string | null
    backgroundColor: string | null
    fontStyle: string | null
    visibility: $Enums.StoryVisibility | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    deletedAt: Date | null
  }

  export type StoryMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    type: $Enums.StoryType | null
    content: string | null
    backgroundColor: string | null
    fontStyle: string | null
    visibility: $Enums.StoryVisibility | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    deletedAt: Date | null
  }

  export type StoryCountAggregateOutputType = {
    id: number
    authorId: number
    type: number
    content: number
    backgroundColor: number
    fontStyle: number
    visibility: number
    createdAt: number
    updatedAt: number
    expiresAt: number
    deletedAt: number
    _all: number
  }


  export type StoryMinAggregateInputType = {
    id?: true
    authorId?: true
    type?: true
    content?: true
    backgroundColor?: true
    fontStyle?: true
    visibility?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    deletedAt?: true
  }

  export type StoryMaxAggregateInputType = {
    id?: true
    authorId?: true
    type?: true
    content?: true
    backgroundColor?: true
    fontStyle?: true
    visibility?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    deletedAt?: true
  }

  export type StoryCountAggregateInputType = {
    id?: true
    authorId?: true
    type?: true
    content?: true
    backgroundColor?: true
    fontStyle?: true
    visibility?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    deletedAt?: true
    _all?: true
  }

  export type StoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Story to aggregate.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stories
    **/
    _count?: true | StoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryMaxAggregateInputType
  }

  export type GetStoryAggregateType<T extends StoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStory[P]>
      : GetScalarType<T[P], AggregateStory[P]>
  }




  export type StoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryWhereInput
    orderBy?: StoryOrderByWithAggregationInput | StoryOrderByWithAggregationInput[]
    by: StoryScalarFieldEnum[] | StoryScalarFieldEnum
    having?: StoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryCountAggregateInputType | true
    _min?: StoryMinAggregateInputType
    _max?: StoryMaxAggregateInputType
  }

  export type StoryGroupByOutputType = {
    id: string
    authorId: string
    type: $Enums.StoryType
    content: string | null
    backgroundColor: string | null
    fontStyle: string | null
    visibility: $Enums.StoryVisibility
    createdAt: Date
    updatedAt: Date
    expiresAt: Date
    deletedAt: Date | null
    _count: StoryCountAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  type GetStoryGroupByPayload<T extends StoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryGroupByOutputType[P]>
            : GetScalarType<T[P], StoryGroupByOutputType[P]>
        }
      >
    >


  export type StorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    type?: boolean
    content?: boolean
    backgroundColor?: boolean
    fontStyle?: boolean
    visibility?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    deletedAt?: boolean
    media?: boolean | Story$mediaArgs<ExtArgs>
    views?: boolean | Story$viewsArgs<ExtArgs>
    reactions?: boolean | Story$reactionsArgs<ExtArgs>
    audiences?: boolean | Story$audiencesArgs<ExtArgs>
    _count?: boolean | StoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["story"]>

  export type StorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    type?: boolean
    content?: boolean
    backgroundColor?: boolean
    fontStyle?: boolean
    visibility?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["story"]>

  export type StorySelectScalar = {
    id?: boolean
    authorId?: boolean
    type?: boolean
    content?: boolean
    backgroundColor?: boolean
    fontStyle?: boolean
    visibility?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    deletedAt?: boolean
  }

  export type StoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | Story$mediaArgs<ExtArgs>
    views?: boolean | Story$viewsArgs<ExtArgs>
    reactions?: boolean | Story$reactionsArgs<ExtArgs>
    audiences?: boolean | Story$audiencesArgs<ExtArgs>
    _count?: boolean | StoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Story"
    objects: {
      media: Prisma.$StoryMediaPayload<ExtArgs>[]
      views: Prisma.$StoryViewPayload<ExtArgs>[]
      reactions: Prisma.$StoryReactionPayload<ExtArgs>[]
      audiences: Prisma.$StoryAudiencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      type: $Enums.StoryType
      content: string | null
      backgroundColor: string | null
      fontStyle: string | null
      visibility: $Enums.StoryVisibility
      createdAt: Date
      updatedAt: Date
      expiresAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["story"]>
    composites: {}
  }

  type StoryGetPayload<S extends boolean | null | undefined | StoryDefaultArgs> = $Result.GetResult<Prisma.$StoryPayload, S>

  type StoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoryCountAggregateInputType | true
    }

  export interface StoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Story'], meta: { name: 'Story' } }
    /**
     * Find zero or one Story that matches the filter.
     * @param {StoryFindUniqueArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoryFindUniqueArgs>(args: SelectSubset<T, StoryFindUniqueArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Story that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoryFindUniqueOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoryFindUniqueOrThrowArgs>(args: SelectSubset<T, StoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Story that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoryFindFirstArgs>(args?: SelectSubset<T, StoryFindFirstArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Story that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoryFindFirstOrThrowArgs>(args?: SelectSubset<T, StoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stories
     * const stories = await prisma.story.findMany()
     * 
     * // Get first 10 Stories
     * const stories = await prisma.story.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyWithIdOnly = await prisma.story.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoryFindManyArgs>(args?: SelectSubset<T, StoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Story.
     * @param {StoryCreateArgs} args - Arguments to create a Story.
     * @example
     * // Create one Story
     * const Story = await prisma.story.create({
     *   data: {
     *     // ... data to create a Story
     *   }
     * })
     * 
     */
    create<T extends StoryCreateArgs>(args: SelectSubset<T, StoryCreateArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stories.
     * @param {StoryCreateManyArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const story = await prisma.story.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoryCreateManyArgs>(args?: SelectSubset<T, StoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stories and returns the data saved in the database.
     * @param {StoryCreateManyAndReturnArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const story = await prisma.story.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stories and only return the `id`
     * const storyWithIdOnly = await prisma.story.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoryCreateManyAndReturnArgs>(args?: SelectSubset<T, StoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Story.
     * @param {StoryDeleteArgs} args - Arguments to delete one Story.
     * @example
     * // Delete one Story
     * const Story = await prisma.story.delete({
     *   where: {
     *     // ... filter to delete one Story
     *   }
     * })
     * 
     */
    delete<T extends StoryDeleteArgs>(args: SelectSubset<T, StoryDeleteArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Story.
     * @param {StoryUpdateArgs} args - Arguments to update one Story.
     * @example
     * // Update one Story
     * const story = await prisma.story.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoryUpdateArgs>(args: SelectSubset<T, StoryUpdateArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stories.
     * @param {StoryDeleteManyArgs} args - Arguments to filter Stories to delete.
     * @example
     * // Delete a few Stories
     * const { count } = await prisma.story.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoryDeleteManyArgs>(args?: SelectSubset<T, StoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stories
     * const story = await prisma.story.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoryUpdateManyArgs>(args: SelectSubset<T, StoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Story.
     * @param {StoryUpsertArgs} args - Arguments to update or create a Story.
     * @example
     * // Update or create a Story
     * const story = await prisma.story.upsert({
     *   create: {
     *     // ... data to create a Story
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Story we want to update
     *   }
     * })
     */
    upsert<T extends StoryUpsertArgs>(args: SelectSubset<T, StoryUpsertArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryCountArgs} args - Arguments to filter Stories to count.
     * @example
     * // Count the number of Stories
     * const count = await prisma.story.count({
     *   where: {
     *     // ... the filter for the Stories we want to count
     *   }
     * })
    **/
    count<T extends StoryCountArgs>(
      args?: Subset<T, StoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoryAggregateArgs>(args: Subset<T, StoryAggregateArgs>): Prisma.PrismaPromise<GetStoryAggregateType<T>>

    /**
     * Group by Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoryGroupByArgs['orderBy'] }
        : { orderBy?: StoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Story model
   */
  readonly fields: StoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Story.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    media<T extends Story$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Story$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryMediaPayload<ExtArgs>, T, "findMany"> | Null>
    views<T extends Story$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Story$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryViewPayload<ExtArgs>, T, "findMany"> | Null>
    reactions<T extends Story$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, Story$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryReactionPayload<ExtArgs>, T, "findMany"> | Null>
    audiences<T extends Story$audiencesArgs<ExtArgs> = {}>(args?: Subset<T, Story$audiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryAudiencePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Story model
   */ 
  interface StoryFieldRefs {
    readonly id: FieldRef<"Story", 'String'>
    readonly authorId: FieldRef<"Story", 'String'>
    readonly type: FieldRef<"Story", 'StoryType'>
    readonly content: FieldRef<"Story", 'String'>
    readonly backgroundColor: FieldRef<"Story", 'String'>
    readonly fontStyle: FieldRef<"Story", 'String'>
    readonly visibility: FieldRef<"Story", 'StoryVisibility'>
    readonly createdAt: FieldRef<"Story", 'DateTime'>
    readonly updatedAt: FieldRef<"Story", 'DateTime'>
    readonly expiresAt: FieldRef<"Story", 'DateTime'>
    readonly deletedAt: FieldRef<"Story", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Story findUnique
   */
  export type StoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story findUniqueOrThrow
   */
  export type StoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story findFirst
   */
  export type StoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story findFirstOrThrow
   */
  export type StoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story findMany
   */
  export type StoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Stories to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story create
   */
  export type StoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Story.
     */
    data: XOR<StoryCreateInput, StoryUncheckedCreateInput>
  }

  /**
   * Story createMany
   */
  export type StoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stories.
     */
    data: StoryCreateManyInput | StoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Story createManyAndReturn
   */
  export type StoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Stories.
     */
    data: StoryCreateManyInput | StoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Story update
   */
  export type StoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Story.
     */
    data: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
    /**
     * Choose, which Story to update.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story updateMany
   */
  export type StoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stories.
     */
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyInput>
    /**
     * Filter which Stories to update
     */
    where?: StoryWhereInput
  }

  /**
   * Story upsert
   */
  export type StoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Story to update in case it exists.
     */
    where: StoryWhereUniqueInput
    /**
     * In case the Story found by the `where` argument doesn't exist, create a new Story with this data.
     */
    create: XOR<StoryCreateInput, StoryUncheckedCreateInput>
    /**
     * In case the Story was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
  }

  /**
   * Story delete
   */
  export type StoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter which Story to delete.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story deleteMany
   */
  export type StoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stories to delete
     */
    where?: StoryWhereInput
  }

  /**
   * Story.media
   */
  export type Story$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryMedia
     */
    select?: StoryMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryMediaInclude<ExtArgs> | null
    where?: StoryMediaWhereInput
    orderBy?: StoryMediaOrderByWithRelationInput | StoryMediaOrderByWithRelationInput[]
    cursor?: StoryMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoryMediaScalarFieldEnum | StoryMediaScalarFieldEnum[]
  }

  /**
   * Story.views
   */
  export type Story$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryView
     */
    select?: StoryViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryViewInclude<ExtArgs> | null
    where?: StoryViewWhereInput
    orderBy?: StoryViewOrderByWithRelationInput | StoryViewOrderByWithRelationInput[]
    cursor?: StoryViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoryViewScalarFieldEnum | StoryViewScalarFieldEnum[]
  }

  /**
   * Story.reactions
   */
  export type Story$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryReaction
     */
    select?: StoryReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryReactionInclude<ExtArgs> | null
    where?: StoryReactionWhereInput
    orderBy?: StoryReactionOrderByWithRelationInput | StoryReactionOrderByWithRelationInput[]
    cursor?: StoryReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoryReactionScalarFieldEnum | StoryReactionScalarFieldEnum[]
  }

  /**
   * Story.audiences
   */
  export type Story$audiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryAudience
     */
    select?: StoryAudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryAudienceInclude<ExtArgs> | null
    where?: StoryAudienceWhereInput
    orderBy?: StoryAudienceOrderByWithRelationInput | StoryAudienceOrderByWithRelationInput[]
    cursor?: StoryAudienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoryAudienceScalarFieldEnum | StoryAudienceScalarFieldEnum[]
  }

  /**
   * Story without action
   */
  export type StoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
  }


  /**
   * Model StoryMedia
   */

  export type AggregateStoryMedia = {
    _count: StoryMediaCountAggregateOutputType | null
    _avg: StoryMediaAvgAggregateOutputType | null
    _sum: StoryMediaSumAggregateOutputType | null
    _min: StoryMediaMinAggregateOutputType | null
    _max: StoryMediaMaxAggregateOutputType | null
  }

  export type StoryMediaAvgAggregateOutputType = {
    fileSize: number | null
    duration: number | null
  }

  export type StoryMediaSumAggregateOutputType = {
    fileSize: number | null
    duration: number | null
  }

  export type StoryMediaMinAggregateOutputType = {
    id: string | null
    storyId: string | null
    mediaType: string | null
    url: string | null
    mimeType: string | null
    fileSize: number | null
    duration: number | null
    createdAt: Date | null
  }

  export type StoryMediaMaxAggregateOutputType = {
    id: string | null
    storyId: string | null
    mediaType: string | null
    url: string | null
    mimeType: string | null
    fileSize: number | null
    duration: number | null
    createdAt: Date | null
  }

  export type StoryMediaCountAggregateOutputType = {
    id: number
    storyId: number
    mediaType: number
    url: number
    mimeType: number
    fileSize: number
    duration: number
    createdAt: number
    _all: number
  }


  export type StoryMediaAvgAggregateInputType = {
    fileSize?: true
    duration?: true
  }

  export type StoryMediaSumAggregateInputType = {
    fileSize?: true
    duration?: true
  }

  export type StoryMediaMinAggregateInputType = {
    id?: true
    storyId?: true
    mediaType?: true
    url?: true
    mimeType?: true
    fileSize?: true
    duration?: true
    createdAt?: true
  }

  export type StoryMediaMaxAggregateInputType = {
    id?: true
    storyId?: true
    mediaType?: true
    url?: true
    mimeType?: true
    fileSize?: true
    duration?: true
    createdAt?: true
  }

  export type StoryMediaCountAggregateInputType = {
    id?: true
    storyId?: true
    mediaType?: true
    url?: true
    mimeType?: true
    fileSize?: true
    duration?: true
    createdAt?: true
    _all?: true
  }

  export type StoryMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoryMedia to aggregate.
     */
    where?: StoryMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryMedias to fetch.
     */
    orderBy?: StoryMediaOrderByWithRelationInput | StoryMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoryMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoryMedias
    **/
    _count?: true | StoryMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoryMediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoryMediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryMediaMaxAggregateInputType
  }

  export type GetStoryMediaAggregateType<T extends StoryMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateStoryMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoryMedia[P]>
      : GetScalarType<T[P], AggregateStoryMedia[P]>
  }




  export type StoryMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryMediaWhereInput
    orderBy?: StoryMediaOrderByWithAggregationInput | StoryMediaOrderByWithAggregationInput[]
    by: StoryMediaScalarFieldEnum[] | StoryMediaScalarFieldEnum
    having?: StoryMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryMediaCountAggregateInputType | true
    _avg?: StoryMediaAvgAggregateInputType
    _sum?: StoryMediaSumAggregateInputType
    _min?: StoryMediaMinAggregateInputType
    _max?: StoryMediaMaxAggregateInputType
  }

  export type StoryMediaGroupByOutputType = {
    id: string
    storyId: string
    mediaType: string
    url: string
    mimeType: string | null
    fileSize: number | null
    duration: number | null
    createdAt: Date
    _count: StoryMediaCountAggregateOutputType | null
    _avg: StoryMediaAvgAggregateOutputType | null
    _sum: StoryMediaSumAggregateOutputType | null
    _min: StoryMediaMinAggregateOutputType | null
    _max: StoryMediaMaxAggregateOutputType | null
  }

  type GetStoryMediaGroupByPayload<T extends StoryMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryMediaGroupByOutputType[P]>
            : GetScalarType<T[P], StoryMediaGroupByOutputType[P]>
        }
      >
    >


  export type StoryMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storyId?: boolean
    mediaType?: boolean
    url?: boolean
    mimeType?: boolean
    fileSize?: boolean
    duration?: boolean
    createdAt?: boolean
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyMedia"]>

  export type StoryMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storyId?: boolean
    mediaType?: boolean
    url?: boolean
    mimeType?: boolean
    fileSize?: boolean
    duration?: boolean
    createdAt?: boolean
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyMedia"]>

  export type StoryMediaSelectScalar = {
    id?: boolean
    storyId?: boolean
    mediaType?: boolean
    url?: boolean
    mimeType?: boolean
    fileSize?: boolean
    duration?: boolean
    createdAt?: boolean
  }

  export type StoryMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }
  export type StoryMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }

  export type $StoryMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoryMedia"
    objects: {
      story: Prisma.$StoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storyId: string
      mediaType: string
      url: string
      mimeType: string | null
      fileSize: number | null
      duration: number | null
      createdAt: Date
    }, ExtArgs["result"]["storyMedia"]>
    composites: {}
  }

  type StoryMediaGetPayload<S extends boolean | null | undefined | StoryMediaDefaultArgs> = $Result.GetResult<Prisma.$StoryMediaPayload, S>

  type StoryMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoryMediaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoryMediaCountAggregateInputType | true
    }

  export interface StoryMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoryMedia'], meta: { name: 'StoryMedia' } }
    /**
     * Find zero or one StoryMedia that matches the filter.
     * @param {StoryMediaFindUniqueArgs} args - Arguments to find a StoryMedia
     * @example
     * // Get one StoryMedia
     * const storyMedia = await prisma.storyMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoryMediaFindUniqueArgs>(args: SelectSubset<T, StoryMediaFindUniqueArgs<ExtArgs>>): Prisma__StoryMediaClient<$Result.GetResult<Prisma.$StoryMediaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StoryMedia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoryMediaFindUniqueOrThrowArgs} args - Arguments to find a StoryMedia
     * @example
     * // Get one StoryMedia
     * const storyMedia = await prisma.storyMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoryMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, StoryMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoryMediaClient<$Result.GetResult<Prisma.$StoryMediaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StoryMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryMediaFindFirstArgs} args - Arguments to find a StoryMedia
     * @example
     * // Get one StoryMedia
     * const storyMedia = await prisma.storyMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoryMediaFindFirstArgs>(args?: SelectSubset<T, StoryMediaFindFirstArgs<ExtArgs>>): Prisma__StoryMediaClient<$Result.GetResult<Prisma.$StoryMediaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StoryMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryMediaFindFirstOrThrowArgs} args - Arguments to find a StoryMedia
     * @example
     * // Get one StoryMedia
     * const storyMedia = await prisma.storyMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoryMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, StoryMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoryMediaClient<$Result.GetResult<Prisma.$StoryMediaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StoryMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoryMedias
     * const storyMedias = await prisma.storyMedia.findMany()
     * 
     * // Get first 10 StoryMedias
     * const storyMedias = await prisma.storyMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyMediaWithIdOnly = await prisma.storyMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoryMediaFindManyArgs>(args?: SelectSubset<T, StoryMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryMediaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StoryMedia.
     * @param {StoryMediaCreateArgs} args - Arguments to create a StoryMedia.
     * @example
     * // Create one StoryMedia
     * const StoryMedia = await prisma.storyMedia.create({
     *   data: {
     *     // ... data to create a StoryMedia
     *   }
     * })
     * 
     */
    create<T extends StoryMediaCreateArgs>(args: SelectSubset<T, StoryMediaCreateArgs<ExtArgs>>): Prisma__StoryMediaClient<$Result.GetResult<Prisma.$StoryMediaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StoryMedias.
     * @param {StoryMediaCreateManyArgs} args - Arguments to create many StoryMedias.
     * @example
     * // Create many StoryMedias
     * const storyMedia = await prisma.storyMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoryMediaCreateManyArgs>(args?: SelectSubset<T, StoryMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoryMedias and returns the data saved in the database.
     * @param {StoryMediaCreateManyAndReturnArgs} args - Arguments to create many StoryMedias.
     * @example
     * // Create many StoryMedias
     * const storyMedia = await prisma.storyMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoryMedias and only return the `id`
     * const storyMediaWithIdOnly = await prisma.storyMedia.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoryMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, StoryMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryMediaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StoryMedia.
     * @param {StoryMediaDeleteArgs} args - Arguments to delete one StoryMedia.
     * @example
     * // Delete one StoryMedia
     * const StoryMedia = await prisma.storyMedia.delete({
     *   where: {
     *     // ... filter to delete one StoryMedia
     *   }
     * })
     * 
     */
    delete<T extends StoryMediaDeleteArgs>(args: SelectSubset<T, StoryMediaDeleteArgs<ExtArgs>>): Prisma__StoryMediaClient<$Result.GetResult<Prisma.$StoryMediaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StoryMedia.
     * @param {StoryMediaUpdateArgs} args - Arguments to update one StoryMedia.
     * @example
     * // Update one StoryMedia
     * const storyMedia = await prisma.storyMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoryMediaUpdateArgs>(args: SelectSubset<T, StoryMediaUpdateArgs<ExtArgs>>): Prisma__StoryMediaClient<$Result.GetResult<Prisma.$StoryMediaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StoryMedias.
     * @param {StoryMediaDeleteManyArgs} args - Arguments to filter StoryMedias to delete.
     * @example
     * // Delete a few StoryMedias
     * const { count } = await prisma.storyMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoryMediaDeleteManyArgs>(args?: SelectSubset<T, StoryMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoryMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoryMedias
     * const storyMedia = await prisma.storyMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoryMediaUpdateManyArgs>(args: SelectSubset<T, StoryMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoryMedia.
     * @param {StoryMediaUpsertArgs} args - Arguments to update or create a StoryMedia.
     * @example
     * // Update or create a StoryMedia
     * const storyMedia = await prisma.storyMedia.upsert({
     *   create: {
     *     // ... data to create a StoryMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoryMedia we want to update
     *   }
     * })
     */
    upsert<T extends StoryMediaUpsertArgs>(args: SelectSubset<T, StoryMediaUpsertArgs<ExtArgs>>): Prisma__StoryMediaClient<$Result.GetResult<Prisma.$StoryMediaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StoryMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryMediaCountArgs} args - Arguments to filter StoryMedias to count.
     * @example
     * // Count the number of StoryMedias
     * const count = await prisma.storyMedia.count({
     *   where: {
     *     // ... the filter for the StoryMedias we want to count
     *   }
     * })
    **/
    count<T extends StoryMediaCountArgs>(
      args?: Subset<T, StoryMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoryMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoryMediaAggregateArgs>(args: Subset<T, StoryMediaAggregateArgs>): Prisma.PrismaPromise<GetStoryMediaAggregateType<T>>

    /**
     * Group by StoryMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryMediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoryMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoryMediaGroupByArgs['orderBy'] }
        : { orderBy?: StoryMediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoryMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoryMedia model
   */
  readonly fields: StoryMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoryMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoryMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    story<T extends StoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoryDefaultArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StoryMedia model
   */ 
  interface StoryMediaFieldRefs {
    readonly id: FieldRef<"StoryMedia", 'String'>
    readonly storyId: FieldRef<"StoryMedia", 'String'>
    readonly mediaType: FieldRef<"StoryMedia", 'String'>
    readonly url: FieldRef<"StoryMedia", 'String'>
    readonly mimeType: FieldRef<"StoryMedia", 'String'>
    readonly fileSize: FieldRef<"StoryMedia", 'Int'>
    readonly duration: FieldRef<"StoryMedia", 'Float'>
    readonly createdAt: FieldRef<"StoryMedia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoryMedia findUnique
   */
  export type StoryMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryMedia
     */
    select?: StoryMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryMediaInclude<ExtArgs> | null
    /**
     * Filter, which StoryMedia to fetch.
     */
    where: StoryMediaWhereUniqueInput
  }

  /**
   * StoryMedia findUniqueOrThrow
   */
  export type StoryMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryMedia
     */
    select?: StoryMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryMediaInclude<ExtArgs> | null
    /**
     * Filter, which StoryMedia to fetch.
     */
    where: StoryMediaWhereUniqueInput
  }

  /**
   * StoryMedia findFirst
   */
  export type StoryMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryMedia
     */
    select?: StoryMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryMediaInclude<ExtArgs> | null
    /**
     * Filter, which StoryMedia to fetch.
     */
    where?: StoryMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryMedias to fetch.
     */
    orderBy?: StoryMediaOrderByWithRelationInput | StoryMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoryMedias.
     */
    cursor?: StoryMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoryMedias.
     */
    distinct?: StoryMediaScalarFieldEnum | StoryMediaScalarFieldEnum[]
  }

  /**
   * StoryMedia findFirstOrThrow
   */
  export type StoryMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryMedia
     */
    select?: StoryMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryMediaInclude<ExtArgs> | null
    /**
     * Filter, which StoryMedia to fetch.
     */
    where?: StoryMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryMedias to fetch.
     */
    orderBy?: StoryMediaOrderByWithRelationInput | StoryMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoryMedias.
     */
    cursor?: StoryMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoryMedias.
     */
    distinct?: StoryMediaScalarFieldEnum | StoryMediaScalarFieldEnum[]
  }

  /**
   * StoryMedia findMany
   */
  export type StoryMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryMedia
     */
    select?: StoryMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryMediaInclude<ExtArgs> | null
    /**
     * Filter, which StoryMedias to fetch.
     */
    where?: StoryMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryMedias to fetch.
     */
    orderBy?: StoryMediaOrderByWithRelationInput | StoryMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoryMedias.
     */
    cursor?: StoryMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryMedias.
     */
    skip?: number
    distinct?: StoryMediaScalarFieldEnum | StoryMediaScalarFieldEnum[]
  }

  /**
   * StoryMedia create
   */
  export type StoryMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryMedia
     */
    select?: StoryMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a StoryMedia.
     */
    data: XOR<StoryMediaCreateInput, StoryMediaUncheckedCreateInput>
  }

  /**
   * StoryMedia createMany
   */
  export type StoryMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoryMedias.
     */
    data: StoryMediaCreateManyInput | StoryMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoryMedia createManyAndReturn
   */
  export type StoryMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryMedia
     */
    select?: StoryMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StoryMedias.
     */
    data: StoryMediaCreateManyInput | StoryMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoryMedia update
   */
  export type StoryMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryMedia
     */
    select?: StoryMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a StoryMedia.
     */
    data: XOR<StoryMediaUpdateInput, StoryMediaUncheckedUpdateInput>
    /**
     * Choose, which StoryMedia to update.
     */
    where: StoryMediaWhereUniqueInput
  }

  /**
   * StoryMedia updateMany
   */
  export type StoryMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoryMedias.
     */
    data: XOR<StoryMediaUpdateManyMutationInput, StoryMediaUncheckedUpdateManyInput>
    /**
     * Filter which StoryMedias to update
     */
    where?: StoryMediaWhereInput
  }

  /**
   * StoryMedia upsert
   */
  export type StoryMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryMedia
     */
    select?: StoryMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the StoryMedia to update in case it exists.
     */
    where: StoryMediaWhereUniqueInput
    /**
     * In case the StoryMedia found by the `where` argument doesn't exist, create a new StoryMedia with this data.
     */
    create: XOR<StoryMediaCreateInput, StoryMediaUncheckedCreateInput>
    /**
     * In case the StoryMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoryMediaUpdateInput, StoryMediaUncheckedUpdateInput>
  }

  /**
   * StoryMedia delete
   */
  export type StoryMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryMedia
     */
    select?: StoryMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryMediaInclude<ExtArgs> | null
    /**
     * Filter which StoryMedia to delete.
     */
    where: StoryMediaWhereUniqueInput
  }

  /**
   * StoryMedia deleteMany
   */
  export type StoryMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoryMedias to delete
     */
    where?: StoryMediaWhereInput
  }

  /**
   * StoryMedia without action
   */
  export type StoryMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryMedia
     */
    select?: StoryMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryMediaInclude<ExtArgs> | null
  }


  /**
   * Model StoryView
   */

  export type AggregateStoryView = {
    _count: StoryViewCountAggregateOutputType | null
    _min: StoryViewMinAggregateOutputType | null
    _max: StoryViewMaxAggregateOutputType | null
  }

  export type StoryViewMinAggregateOutputType = {
    id: string | null
    storyId: string | null
    viewerId: string | null
    viewedAt: Date | null
  }

  export type StoryViewMaxAggregateOutputType = {
    id: string | null
    storyId: string | null
    viewerId: string | null
    viewedAt: Date | null
  }

  export type StoryViewCountAggregateOutputType = {
    id: number
    storyId: number
    viewerId: number
    viewedAt: number
    _all: number
  }


  export type StoryViewMinAggregateInputType = {
    id?: true
    storyId?: true
    viewerId?: true
    viewedAt?: true
  }

  export type StoryViewMaxAggregateInputType = {
    id?: true
    storyId?: true
    viewerId?: true
    viewedAt?: true
  }

  export type StoryViewCountAggregateInputType = {
    id?: true
    storyId?: true
    viewerId?: true
    viewedAt?: true
    _all?: true
  }

  export type StoryViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoryView to aggregate.
     */
    where?: StoryViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryViews to fetch.
     */
    orderBy?: StoryViewOrderByWithRelationInput | StoryViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoryViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoryViews
    **/
    _count?: true | StoryViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryViewMaxAggregateInputType
  }

  export type GetStoryViewAggregateType<T extends StoryViewAggregateArgs> = {
        [P in keyof T & keyof AggregateStoryView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoryView[P]>
      : GetScalarType<T[P], AggregateStoryView[P]>
  }




  export type StoryViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryViewWhereInput
    orderBy?: StoryViewOrderByWithAggregationInput | StoryViewOrderByWithAggregationInput[]
    by: StoryViewScalarFieldEnum[] | StoryViewScalarFieldEnum
    having?: StoryViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryViewCountAggregateInputType | true
    _min?: StoryViewMinAggregateInputType
    _max?: StoryViewMaxAggregateInputType
  }

  export type StoryViewGroupByOutputType = {
    id: string
    storyId: string
    viewerId: string
    viewedAt: Date
    _count: StoryViewCountAggregateOutputType | null
    _min: StoryViewMinAggregateOutputType | null
    _max: StoryViewMaxAggregateOutputType | null
  }

  type GetStoryViewGroupByPayload<T extends StoryViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryViewGroupByOutputType[P]>
            : GetScalarType<T[P], StoryViewGroupByOutputType[P]>
        }
      >
    >


  export type StoryViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storyId?: boolean
    viewerId?: boolean
    viewedAt?: boolean
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyView"]>

  export type StoryViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storyId?: boolean
    viewerId?: boolean
    viewedAt?: boolean
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyView"]>

  export type StoryViewSelectScalar = {
    id?: boolean
    storyId?: boolean
    viewerId?: boolean
    viewedAt?: boolean
  }

  export type StoryViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }
  export type StoryViewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }

  export type $StoryViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoryView"
    objects: {
      story: Prisma.$StoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storyId: string
      viewerId: string
      viewedAt: Date
    }, ExtArgs["result"]["storyView"]>
    composites: {}
  }

  type StoryViewGetPayload<S extends boolean | null | undefined | StoryViewDefaultArgs> = $Result.GetResult<Prisma.$StoryViewPayload, S>

  type StoryViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoryViewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoryViewCountAggregateInputType | true
    }

  export interface StoryViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoryView'], meta: { name: 'StoryView' } }
    /**
     * Find zero or one StoryView that matches the filter.
     * @param {StoryViewFindUniqueArgs} args - Arguments to find a StoryView
     * @example
     * // Get one StoryView
     * const storyView = await prisma.storyView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoryViewFindUniqueArgs>(args: SelectSubset<T, StoryViewFindUniqueArgs<ExtArgs>>): Prisma__StoryViewClient<$Result.GetResult<Prisma.$StoryViewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StoryView that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoryViewFindUniqueOrThrowArgs} args - Arguments to find a StoryView
     * @example
     * // Get one StoryView
     * const storyView = await prisma.storyView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoryViewFindUniqueOrThrowArgs>(args: SelectSubset<T, StoryViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoryViewClient<$Result.GetResult<Prisma.$StoryViewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StoryView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryViewFindFirstArgs} args - Arguments to find a StoryView
     * @example
     * // Get one StoryView
     * const storyView = await prisma.storyView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoryViewFindFirstArgs>(args?: SelectSubset<T, StoryViewFindFirstArgs<ExtArgs>>): Prisma__StoryViewClient<$Result.GetResult<Prisma.$StoryViewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StoryView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryViewFindFirstOrThrowArgs} args - Arguments to find a StoryView
     * @example
     * // Get one StoryView
     * const storyView = await prisma.storyView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoryViewFindFirstOrThrowArgs>(args?: SelectSubset<T, StoryViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoryViewClient<$Result.GetResult<Prisma.$StoryViewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StoryViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoryViews
     * const storyViews = await prisma.storyView.findMany()
     * 
     * // Get first 10 StoryViews
     * const storyViews = await prisma.storyView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyViewWithIdOnly = await prisma.storyView.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoryViewFindManyArgs>(args?: SelectSubset<T, StoryViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryViewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StoryView.
     * @param {StoryViewCreateArgs} args - Arguments to create a StoryView.
     * @example
     * // Create one StoryView
     * const StoryView = await prisma.storyView.create({
     *   data: {
     *     // ... data to create a StoryView
     *   }
     * })
     * 
     */
    create<T extends StoryViewCreateArgs>(args: SelectSubset<T, StoryViewCreateArgs<ExtArgs>>): Prisma__StoryViewClient<$Result.GetResult<Prisma.$StoryViewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StoryViews.
     * @param {StoryViewCreateManyArgs} args - Arguments to create many StoryViews.
     * @example
     * // Create many StoryViews
     * const storyView = await prisma.storyView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoryViewCreateManyArgs>(args?: SelectSubset<T, StoryViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoryViews and returns the data saved in the database.
     * @param {StoryViewCreateManyAndReturnArgs} args - Arguments to create many StoryViews.
     * @example
     * // Create many StoryViews
     * const storyView = await prisma.storyView.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoryViews and only return the `id`
     * const storyViewWithIdOnly = await prisma.storyView.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoryViewCreateManyAndReturnArgs>(args?: SelectSubset<T, StoryViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryViewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StoryView.
     * @param {StoryViewDeleteArgs} args - Arguments to delete one StoryView.
     * @example
     * // Delete one StoryView
     * const StoryView = await prisma.storyView.delete({
     *   where: {
     *     // ... filter to delete one StoryView
     *   }
     * })
     * 
     */
    delete<T extends StoryViewDeleteArgs>(args: SelectSubset<T, StoryViewDeleteArgs<ExtArgs>>): Prisma__StoryViewClient<$Result.GetResult<Prisma.$StoryViewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StoryView.
     * @param {StoryViewUpdateArgs} args - Arguments to update one StoryView.
     * @example
     * // Update one StoryView
     * const storyView = await prisma.storyView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoryViewUpdateArgs>(args: SelectSubset<T, StoryViewUpdateArgs<ExtArgs>>): Prisma__StoryViewClient<$Result.GetResult<Prisma.$StoryViewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StoryViews.
     * @param {StoryViewDeleteManyArgs} args - Arguments to filter StoryViews to delete.
     * @example
     * // Delete a few StoryViews
     * const { count } = await prisma.storyView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoryViewDeleteManyArgs>(args?: SelectSubset<T, StoryViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoryViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoryViews
     * const storyView = await prisma.storyView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoryViewUpdateManyArgs>(args: SelectSubset<T, StoryViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoryView.
     * @param {StoryViewUpsertArgs} args - Arguments to update or create a StoryView.
     * @example
     * // Update or create a StoryView
     * const storyView = await prisma.storyView.upsert({
     *   create: {
     *     // ... data to create a StoryView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoryView we want to update
     *   }
     * })
     */
    upsert<T extends StoryViewUpsertArgs>(args: SelectSubset<T, StoryViewUpsertArgs<ExtArgs>>): Prisma__StoryViewClient<$Result.GetResult<Prisma.$StoryViewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StoryViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryViewCountArgs} args - Arguments to filter StoryViews to count.
     * @example
     * // Count the number of StoryViews
     * const count = await prisma.storyView.count({
     *   where: {
     *     // ... the filter for the StoryViews we want to count
     *   }
     * })
    **/
    count<T extends StoryViewCountArgs>(
      args?: Subset<T, StoryViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoryView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoryViewAggregateArgs>(args: Subset<T, StoryViewAggregateArgs>): Prisma.PrismaPromise<GetStoryViewAggregateType<T>>

    /**
     * Group by StoryView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryViewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoryViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoryViewGroupByArgs['orderBy'] }
        : { orderBy?: StoryViewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoryViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoryView model
   */
  readonly fields: StoryViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoryView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoryViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    story<T extends StoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoryDefaultArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StoryView model
   */ 
  interface StoryViewFieldRefs {
    readonly id: FieldRef<"StoryView", 'String'>
    readonly storyId: FieldRef<"StoryView", 'String'>
    readonly viewerId: FieldRef<"StoryView", 'String'>
    readonly viewedAt: FieldRef<"StoryView", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoryView findUnique
   */
  export type StoryViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryView
     */
    select?: StoryViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryViewInclude<ExtArgs> | null
    /**
     * Filter, which StoryView to fetch.
     */
    where: StoryViewWhereUniqueInput
  }

  /**
   * StoryView findUniqueOrThrow
   */
  export type StoryViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryView
     */
    select?: StoryViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryViewInclude<ExtArgs> | null
    /**
     * Filter, which StoryView to fetch.
     */
    where: StoryViewWhereUniqueInput
  }

  /**
   * StoryView findFirst
   */
  export type StoryViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryView
     */
    select?: StoryViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryViewInclude<ExtArgs> | null
    /**
     * Filter, which StoryView to fetch.
     */
    where?: StoryViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryViews to fetch.
     */
    orderBy?: StoryViewOrderByWithRelationInput | StoryViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoryViews.
     */
    cursor?: StoryViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoryViews.
     */
    distinct?: StoryViewScalarFieldEnum | StoryViewScalarFieldEnum[]
  }

  /**
   * StoryView findFirstOrThrow
   */
  export type StoryViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryView
     */
    select?: StoryViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryViewInclude<ExtArgs> | null
    /**
     * Filter, which StoryView to fetch.
     */
    where?: StoryViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryViews to fetch.
     */
    orderBy?: StoryViewOrderByWithRelationInput | StoryViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoryViews.
     */
    cursor?: StoryViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoryViews.
     */
    distinct?: StoryViewScalarFieldEnum | StoryViewScalarFieldEnum[]
  }

  /**
   * StoryView findMany
   */
  export type StoryViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryView
     */
    select?: StoryViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryViewInclude<ExtArgs> | null
    /**
     * Filter, which StoryViews to fetch.
     */
    where?: StoryViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryViews to fetch.
     */
    orderBy?: StoryViewOrderByWithRelationInput | StoryViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoryViews.
     */
    cursor?: StoryViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryViews.
     */
    skip?: number
    distinct?: StoryViewScalarFieldEnum | StoryViewScalarFieldEnum[]
  }

  /**
   * StoryView create
   */
  export type StoryViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryView
     */
    select?: StoryViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryViewInclude<ExtArgs> | null
    /**
     * The data needed to create a StoryView.
     */
    data: XOR<StoryViewCreateInput, StoryViewUncheckedCreateInput>
  }

  /**
   * StoryView createMany
   */
  export type StoryViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoryViews.
     */
    data: StoryViewCreateManyInput | StoryViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoryView createManyAndReturn
   */
  export type StoryViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryView
     */
    select?: StoryViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StoryViews.
     */
    data: StoryViewCreateManyInput | StoryViewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryViewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoryView update
   */
  export type StoryViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryView
     */
    select?: StoryViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryViewInclude<ExtArgs> | null
    /**
     * The data needed to update a StoryView.
     */
    data: XOR<StoryViewUpdateInput, StoryViewUncheckedUpdateInput>
    /**
     * Choose, which StoryView to update.
     */
    where: StoryViewWhereUniqueInput
  }

  /**
   * StoryView updateMany
   */
  export type StoryViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoryViews.
     */
    data: XOR<StoryViewUpdateManyMutationInput, StoryViewUncheckedUpdateManyInput>
    /**
     * Filter which StoryViews to update
     */
    where?: StoryViewWhereInput
  }

  /**
   * StoryView upsert
   */
  export type StoryViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryView
     */
    select?: StoryViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryViewInclude<ExtArgs> | null
    /**
     * The filter to search for the StoryView to update in case it exists.
     */
    where: StoryViewWhereUniqueInput
    /**
     * In case the StoryView found by the `where` argument doesn't exist, create a new StoryView with this data.
     */
    create: XOR<StoryViewCreateInput, StoryViewUncheckedCreateInput>
    /**
     * In case the StoryView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoryViewUpdateInput, StoryViewUncheckedUpdateInput>
  }

  /**
   * StoryView delete
   */
  export type StoryViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryView
     */
    select?: StoryViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryViewInclude<ExtArgs> | null
    /**
     * Filter which StoryView to delete.
     */
    where: StoryViewWhereUniqueInput
  }

  /**
   * StoryView deleteMany
   */
  export type StoryViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoryViews to delete
     */
    where?: StoryViewWhereInput
  }

  /**
   * StoryView without action
   */
  export type StoryViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryView
     */
    select?: StoryViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryViewInclude<ExtArgs> | null
  }


  /**
   * Model StoryReaction
   */

  export type AggregateStoryReaction = {
    _count: StoryReactionCountAggregateOutputType | null
    _min: StoryReactionMinAggregateOutputType | null
    _max: StoryReactionMaxAggregateOutputType | null
  }

  export type StoryReactionMinAggregateOutputType = {
    id: string | null
    storyId: string | null
    userId: string | null
    reactionType: string | null
    createdAt: Date | null
  }

  export type StoryReactionMaxAggregateOutputType = {
    id: string | null
    storyId: string | null
    userId: string | null
    reactionType: string | null
    createdAt: Date | null
  }

  export type StoryReactionCountAggregateOutputType = {
    id: number
    storyId: number
    userId: number
    reactionType: number
    createdAt: number
    _all: number
  }


  export type StoryReactionMinAggregateInputType = {
    id?: true
    storyId?: true
    userId?: true
    reactionType?: true
    createdAt?: true
  }

  export type StoryReactionMaxAggregateInputType = {
    id?: true
    storyId?: true
    userId?: true
    reactionType?: true
    createdAt?: true
  }

  export type StoryReactionCountAggregateInputType = {
    id?: true
    storyId?: true
    userId?: true
    reactionType?: true
    createdAt?: true
    _all?: true
  }

  export type StoryReactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoryReaction to aggregate.
     */
    where?: StoryReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryReactions to fetch.
     */
    orderBy?: StoryReactionOrderByWithRelationInput | StoryReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoryReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoryReactions
    **/
    _count?: true | StoryReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryReactionMaxAggregateInputType
  }

  export type GetStoryReactionAggregateType<T extends StoryReactionAggregateArgs> = {
        [P in keyof T & keyof AggregateStoryReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoryReaction[P]>
      : GetScalarType<T[P], AggregateStoryReaction[P]>
  }




  export type StoryReactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryReactionWhereInput
    orderBy?: StoryReactionOrderByWithAggregationInput | StoryReactionOrderByWithAggregationInput[]
    by: StoryReactionScalarFieldEnum[] | StoryReactionScalarFieldEnum
    having?: StoryReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryReactionCountAggregateInputType | true
    _min?: StoryReactionMinAggregateInputType
    _max?: StoryReactionMaxAggregateInputType
  }

  export type StoryReactionGroupByOutputType = {
    id: string
    storyId: string
    userId: string
    reactionType: string
    createdAt: Date
    _count: StoryReactionCountAggregateOutputType | null
    _min: StoryReactionMinAggregateOutputType | null
    _max: StoryReactionMaxAggregateOutputType | null
  }

  type GetStoryReactionGroupByPayload<T extends StoryReactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryReactionGroupByOutputType[P]>
            : GetScalarType<T[P], StoryReactionGroupByOutputType[P]>
        }
      >
    >


  export type StoryReactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storyId?: boolean
    userId?: boolean
    reactionType?: boolean
    createdAt?: boolean
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyReaction"]>

  export type StoryReactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storyId?: boolean
    userId?: boolean
    reactionType?: boolean
    createdAt?: boolean
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyReaction"]>

  export type StoryReactionSelectScalar = {
    id?: boolean
    storyId?: boolean
    userId?: boolean
    reactionType?: boolean
    createdAt?: boolean
  }

  export type StoryReactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }
  export type StoryReactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }

  export type $StoryReactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoryReaction"
    objects: {
      story: Prisma.$StoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storyId: string
      userId: string
      reactionType: string
      createdAt: Date
    }, ExtArgs["result"]["storyReaction"]>
    composites: {}
  }

  type StoryReactionGetPayload<S extends boolean | null | undefined | StoryReactionDefaultArgs> = $Result.GetResult<Prisma.$StoryReactionPayload, S>

  type StoryReactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoryReactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoryReactionCountAggregateInputType | true
    }

  export interface StoryReactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoryReaction'], meta: { name: 'StoryReaction' } }
    /**
     * Find zero or one StoryReaction that matches the filter.
     * @param {StoryReactionFindUniqueArgs} args - Arguments to find a StoryReaction
     * @example
     * // Get one StoryReaction
     * const storyReaction = await prisma.storyReaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoryReactionFindUniqueArgs>(args: SelectSubset<T, StoryReactionFindUniqueArgs<ExtArgs>>): Prisma__StoryReactionClient<$Result.GetResult<Prisma.$StoryReactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StoryReaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoryReactionFindUniqueOrThrowArgs} args - Arguments to find a StoryReaction
     * @example
     * // Get one StoryReaction
     * const storyReaction = await prisma.storyReaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoryReactionFindUniqueOrThrowArgs>(args: SelectSubset<T, StoryReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoryReactionClient<$Result.GetResult<Prisma.$StoryReactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StoryReaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryReactionFindFirstArgs} args - Arguments to find a StoryReaction
     * @example
     * // Get one StoryReaction
     * const storyReaction = await prisma.storyReaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoryReactionFindFirstArgs>(args?: SelectSubset<T, StoryReactionFindFirstArgs<ExtArgs>>): Prisma__StoryReactionClient<$Result.GetResult<Prisma.$StoryReactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StoryReaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryReactionFindFirstOrThrowArgs} args - Arguments to find a StoryReaction
     * @example
     * // Get one StoryReaction
     * const storyReaction = await prisma.storyReaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoryReactionFindFirstOrThrowArgs>(args?: SelectSubset<T, StoryReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoryReactionClient<$Result.GetResult<Prisma.$StoryReactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StoryReactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoryReactions
     * const storyReactions = await prisma.storyReaction.findMany()
     * 
     * // Get first 10 StoryReactions
     * const storyReactions = await prisma.storyReaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyReactionWithIdOnly = await prisma.storyReaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoryReactionFindManyArgs>(args?: SelectSubset<T, StoryReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryReactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StoryReaction.
     * @param {StoryReactionCreateArgs} args - Arguments to create a StoryReaction.
     * @example
     * // Create one StoryReaction
     * const StoryReaction = await prisma.storyReaction.create({
     *   data: {
     *     // ... data to create a StoryReaction
     *   }
     * })
     * 
     */
    create<T extends StoryReactionCreateArgs>(args: SelectSubset<T, StoryReactionCreateArgs<ExtArgs>>): Prisma__StoryReactionClient<$Result.GetResult<Prisma.$StoryReactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StoryReactions.
     * @param {StoryReactionCreateManyArgs} args - Arguments to create many StoryReactions.
     * @example
     * // Create many StoryReactions
     * const storyReaction = await prisma.storyReaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoryReactionCreateManyArgs>(args?: SelectSubset<T, StoryReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoryReactions and returns the data saved in the database.
     * @param {StoryReactionCreateManyAndReturnArgs} args - Arguments to create many StoryReactions.
     * @example
     * // Create many StoryReactions
     * const storyReaction = await prisma.storyReaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoryReactions and only return the `id`
     * const storyReactionWithIdOnly = await prisma.storyReaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoryReactionCreateManyAndReturnArgs>(args?: SelectSubset<T, StoryReactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryReactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StoryReaction.
     * @param {StoryReactionDeleteArgs} args - Arguments to delete one StoryReaction.
     * @example
     * // Delete one StoryReaction
     * const StoryReaction = await prisma.storyReaction.delete({
     *   where: {
     *     // ... filter to delete one StoryReaction
     *   }
     * })
     * 
     */
    delete<T extends StoryReactionDeleteArgs>(args: SelectSubset<T, StoryReactionDeleteArgs<ExtArgs>>): Prisma__StoryReactionClient<$Result.GetResult<Prisma.$StoryReactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StoryReaction.
     * @param {StoryReactionUpdateArgs} args - Arguments to update one StoryReaction.
     * @example
     * // Update one StoryReaction
     * const storyReaction = await prisma.storyReaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoryReactionUpdateArgs>(args: SelectSubset<T, StoryReactionUpdateArgs<ExtArgs>>): Prisma__StoryReactionClient<$Result.GetResult<Prisma.$StoryReactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StoryReactions.
     * @param {StoryReactionDeleteManyArgs} args - Arguments to filter StoryReactions to delete.
     * @example
     * // Delete a few StoryReactions
     * const { count } = await prisma.storyReaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoryReactionDeleteManyArgs>(args?: SelectSubset<T, StoryReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoryReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoryReactions
     * const storyReaction = await prisma.storyReaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoryReactionUpdateManyArgs>(args: SelectSubset<T, StoryReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoryReaction.
     * @param {StoryReactionUpsertArgs} args - Arguments to update or create a StoryReaction.
     * @example
     * // Update or create a StoryReaction
     * const storyReaction = await prisma.storyReaction.upsert({
     *   create: {
     *     // ... data to create a StoryReaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoryReaction we want to update
     *   }
     * })
     */
    upsert<T extends StoryReactionUpsertArgs>(args: SelectSubset<T, StoryReactionUpsertArgs<ExtArgs>>): Prisma__StoryReactionClient<$Result.GetResult<Prisma.$StoryReactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StoryReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryReactionCountArgs} args - Arguments to filter StoryReactions to count.
     * @example
     * // Count the number of StoryReactions
     * const count = await prisma.storyReaction.count({
     *   where: {
     *     // ... the filter for the StoryReactions we want to count
     *   }
     * })
    **/
    count<T extends StoryReactionCountArgs>(
      args?: Subset<T, StoryReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoryReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoryReactionAggregateArgs>(args: Subset<T, StoryReactionAggregateArgs>): Prisma.PrismaPromise<GetStoryReactionAggregateType<T>>

    /**
     * Group by StoryReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryReactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoryReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoryReactionGroupByArgs['orderBy'] }
        : { orderBy?: StoryReactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoryReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoryReaction model
   */
  readonly fields: StoryReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoryReaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoryReactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    story<T extends StoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoryDefaultArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StoryReaction model
   */ 
  interface StoryReactionFieldRefs {
    readonly id: FieldRef<"StoryReaction", 'String'>
    readonly storyId: FieldRef<"StoryReaction", 'String'>
    readonly userId: FieldRef<"StoryReaction", 'String'>
    readonly reactionType: FieldRef<"StoryReaction", 'String'>
    readonly createdAt: FieldRef<"StoryReaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoryReaction findUnique
   */
  export type StoryReactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryReaction
     */
    select?: StoryReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryReactionInclude<ExtArgs> | null
    /**
     * Filter, which StoryReaction to fetch.
     */
    where: StoryReactionWhereUniqueInput
  }

  /**
   * StoryReaction findUniqueOrThrow
   */
  export type StoryReactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryReaction
     */
    select?: StoryReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryReactionInclude<ExtArgs> | null
    /**
     * Filter, which StoryReaction to fetch.
     */
    where: StoryReactionWhereUniqueInput
  }

  /**
   * StoryReaction findFirst
   */
  export type StoryReactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryReaction
     */
    select?: StoryReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryReactionInclude<ExtArgs> | null
    /**
     * Filter, which StoryReaction to fetch.
     */
    where?: StoryReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryReactions to fetch.
     */
    orderBy?: StoryReactionOrderByWithRelationInput | StoryReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoryReactions.
     */
    cursor?: StoryReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoryReactions.
     */
    distinct?: StoryReactionScalarFieldEnum | StoryReactionScalarFieldEnum[]
  }

  /**
   * StoryReaction findFirstOrThrow
   */
  export type StoryReactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryReaction
     */
    select?: StoryReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryReactionInclude<ExtArgs> | null
    /**
     * Filter, which StoryReaction to fetch.
     */
    where?: StoryReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryReactions to fetch.
     */
    orderBy?: StoryReactionOrderByWithRelationInput | StoryReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoryReactions.
     */
    cursor?: StoryReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoryReactions.
     */
    distinct?: StoryReactionScalarFieldEnum | StoryReactionScalarFieldEnum[]
  }

  /**
   * StoryReaction findMany
   */
  export type StoryReactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryReaction
     */
    select?: StoryReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryReactionInclude<ExtArgs> | null
    /**
     * Filter, which StoryReactions to fetch.
     */
    where?: StoryReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryReactions to fetch.
     */
    orderBy?: StoryReactionOrderByWithRelationInput | StoryReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoryReactions.
     */
    cursor?: StoryReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryReactions.
     */
    skip?: number
    distinct?: StoryReactionScalarFieldEnum | StoryReactionScalarFieldEnum[]
  }

  /**
   * StoryReaction create
   */
  export type StoryReactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryReaction
     */
    select?: StoryReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryReactionInclude<ExtArgs> | null
    /**
     * The data needed to create a StoryReaction.
     */
    data: XOR<StoryReactionCreateInput, StoryReactionUncheckedCreateInput>
  }

  /**
   * StoryReaction createMany
   */
  export type StoryReactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoryReactions.
     */
    data: StoryReactionCreateManyInput | StoryReactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoryReaction createManyAndReturn
   */
  export type StoryReactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryReaction
     */
    select?: StoryReactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StoryReactions.
     */
    data: StoryReactionCreateManyInput | StoryReactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryReactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoryReaction update
   */
  export type StoryReactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryReaction
     */
    select?: StoryReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryReactionInclude<ExtArgs> | null
    /**
     * The data needed to update a StoryReaction.
     */
    data: XOR<StoryReactionUpdateInput, StoryReactionUncheckedUpdateInput>
    /**
     * Choose, which StoryReaction to update.
     */
    where: StoryReactionWhereUniqueInput
  }

  /**
   * StoryReaction updateMany
   */
  export type StoryReactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoryReactions.
     */
    data: XOR<StoryReactionUpdateManyMutationInput, StoryReactionUncheckedUpdateManyInput>
    /**
     * Filter which StoryReactions to update
     */
    where?: StoryReactionWhereInput
  }

  /**
   * StoryReaction upsert
   */
  export type StoryReactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryReaction
     */
    select?: StoryReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryReactionInclude<ExtArgs> | null
    /**
     * The filter to search for the StoryReaction to update in case it exists.
     */
    where: StoryReactionWhereUniqueInput
    /**
     * In case the StoryReaction found by the `where` argument doesn't exist, create a new StoryReaction with this data.
     */
    create: XOR<StoryReactionCreateInput, StoryReactionUncheckedCreateInput>
    /**
     * In case the StoryReaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoryReactionUpdateInput, StoryReactionUncheckedUpdateInput>
  }

  /**
   * StoryReaction delete
   */
  export type StoryReactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryReaction
     */
    select?: StoryReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryReactionInclude<ExtArgs> | null
    /**
     * Filter which StoryReaction to delete.
     */
    where: StoryReactionWhereUniqueInput
  }

  /**
   * StoryReaction deleteMany
   */
  export type StoryReactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoryReactions to delete
     */
    where?: StoryReactionWhereInput
  }

  /**
   * StoryReaction without action
   */
  export type StoryReactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryReaction
     */
    select?: StoryReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryReactionInclude<ExtArgs> | null
  }


  /**
   * Model StoryAudience
   */

  export type AggregateStoryAudience = {
    _count: StoryAudienceCountAggregateOutputType | null
    _min: StoryAudienceMinAggregateOutputType | null
    _max: StoryAudienceMaxAggregateOutputType | null
  }

  export type StoryAudienceMinAggregateOutputType = {
    id: string | null
    storyId: string | null
    userId: string | null
    type: string | null
    createdAt: Date | null
  }

  export type StoryAudienceMaxAggregateOutputType = {
    id: string | null
    storyId: string | null
    userId: string | null
    type: string | null
    createdAt: Date | null
  }

  export type StoryAudienceCountAggregateOutputType = {
    id: number
    storyId: number
    userId: number
    type: number
    createdAt: number
    _all: number
  }


  export type StoryAudienceMinAggregateInputType = {
    id?: true
    storyId?: true
    userId?: true
    type?: true
    createdAt?: true
  }

  export type StoryAudienceMaxAggregateInputType = {
    id?: true
    storyId?: true
    userId?: true
    type?: true
    createdAt?: true
  }

  export type StoryAudienceCountAggregateInputType = {
    id?: true
    storyId?: true
    userId?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type StoryAudienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoryAudience to aggregate.
     */
    where?: StoryAudienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryAudiences to fetch.
     */
    orderBy?: StoryAudienceOrderByWithRelationInput | StoryAudienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoryAudienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryAudiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryAudiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoryAudiences
    **/
    _count?: true | StoryAudienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryAudienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryAudienceMaxAggregateInputType
  }

  export type GetStoryAudienceAggregateType<T extends StoryAudienceAggregateArgs> = {
        [P in keyof T & keyof AggregateStoryAudience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoryAudience[P]>
      : GetScalarType<T[P], AggregateStoryAudience[P]>
  }




  export type StoryAudienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryAudienceWhereInput
    orderBy?: StoryAudienceOrderByWithAggregationInput | StoryAudienceOrderByWithAggregationInput[]
    by: StoryAudienceScalarFieldEnum[] | StoryAudienceScalarFieldEnum
    having?: StoryAudienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryAudienceCountAggregateInputType | true
    _min?: StoryAudienceMinAggregateInputType
    _max?: StoryAudienceMaxAggregateInputType
  }

  export type StoryAudienceGroupByOutputType = {
    id: string
    storyId: string
    userId: string
    type: string
    createdAt: Date
    _count: StoryAudienceCountAggregateOutputType | null
    _min: StoryAudienceMinAggregateOutputType | null
    _max: StoryAudienceMaxAggregateOutputType | null
  }

  type GetStoryAudienceGroupByPayload<T extends StoryAudienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryAudienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryAudienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryAudienceGroupByOutputType[P]>
            : GetScalarType<T[P], StoryAudienceGroupByOutputType[P]>
        }
      >
    >


  export type StoryAudienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storyId?: boolean
    userId?: boolean
    type?: boolean
    createdAt?: boolean
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyAudience"]>

  export type StoryAudienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storyId?: boolean
    userId?: boolean
    type?: boolean
    createdAt?: boolean
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyAudience"]>

  export type StoryAudienceSelectScalar = {
    id?: boolean
    storyId?: boolean
    userId?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type StoryAudienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }
  export type StoryAudienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }

  export type $StoryAudiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoryAudience"
    objects: {
      story: Prisma.$StoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storyId: string
      userId: string
      type: string
      createdAt: Date
    }, ExtArgs["result"]["storyAudience"]>
    composites: {}
  }

  type StoryAudienceGetPayload<S extends boolean | null | undefined | StoryAudienceDefaultArgs> = $Result.GetResult<Prisma.$StoryAudiencePayload, S>

  type StoryAudienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoryAudienceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoryAudienceCountAggregateInputType | true
    }

  export interface StoryAudienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoryAudience'], meta: { name: 'StoryAudience' } }
    /**
     * Find zero or one StoryAudience that matches the filter.
     * @param {StoryAudienceFindUniqueArgs} args - Arguments to find a StoryAudience
     * @example
     * // Get one StoryAudience
     * const storyAudience = await prisma.storyAudience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoryAudienceFindUniqueArgs>(args: SelectSubset<T, StoryAudienceFindUniqueArgs<ExtArgs>>): Prisma__StoryAudienceClient<$Result.GetResult<Prisma.$StoryAudiencePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StoryAudience that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoryAudienceFindUniqueOrThrowArgs} args - Arguments to find a StoryAudience
     * @example
     * // Get one StoryAudience
     * const storyAudience = await prisma.storyAudience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoryAudienceFindUniqueOrThrowArgs>(args: SelectSubset<T, StoryAudienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoryAudienceClient<$Result.GetResult<Prisma.$StoryAudiencePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StoryAudience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAudienceFindFirstArgs} args - Arguments to find a StoryAudience
     * @example
     * // Get one StoryAudience
     * const storyAudience = await prisma.storyAudience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoryAudienceFindFirstArgs>(args?: SelectSubset<T, StoryAudienceFindFirstArgs<ExtArgs>>): Prisma__StoryAudienceClient<$Result.GetResult<Prisma.$StoryAudiencePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StoryAudience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAudienceFindFirstOrThrowArgs} args - Arguments to find a StoryAudience
     * @example
     * // Get one StoryAudience
     * const storyAudience = await prisma.storyAudience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoryAudienceFindFirstOrThrowArgs>(args?: SelectSubset<T, StoryAudienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoryAudienceClient<$Result.GetResult<Prisma.$StoryAudiencePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StoryAudiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAudienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoryAudiences
     * const storyAudiences = await prisma.storyAudience.findMany()
     * 
     * // Get first 10 StoryAudiences
     * const storyAudiences = await prisma.storyAudience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyAudienceWithIdOnly = await prisma.storyAudience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoryAudienceFindManyArgs>(args?: SelectSubset<T, StoryAudienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryAudiencePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StoryAudience.
     * @param {StoryAudienceCreateArgs} args - Arguments to create a StoryAudience.
     * @example
     * // Create one StoryAudience
     * const StoryAudience = await prisma.storyAudience.create({
     *   data: {
     *     // ... data to create a StoryAudience
     *   }
     * })
     * 
     */
    create<T extends StoryAudienceCreateArgs>(args: SelectSubset<T, StoryAudienceCreateArgs<ExtArgs>>): Prisma__StoryAudienceClient<$Result.GetResult<Prisma.$StoryAudiencePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StoryAudiences.
     * @param {StoryAudienceCreateManyArgs} args - Arguments to create many StoryAudiences.
     * @example
     * // Create many StoryAudiences
     * const storyAudience = await prisma.storyAudience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoryAudienceCreateManyArgs>(args?: SelectSubset<T, StoryAudienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoryAudiences and returns the data saved in the database.
     * @param {StoryAudienceCreateManyAndReturnArgs} args - Arguments to create many StoryAudiences.
     * @example
     * // Create many StoryAudiences
     * const storyAudience = await prisma.storyAudience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoryAudiences and only return the `id`
     * const storyAudienceWithIdOnly = await prisma.storyAudience.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoryAudienceCreateManyAndReturnArgs>(args?: SelectSubset<T, StoryAudienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryAudiencePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StoryAudience.
     * @param {StoryAudienceDeleteArgs} args - Arguments to delete one StoryAudience.
     * @example
     * // Delete one StoryAudience
     * const StoryAudience = await prisma.storyAudience.delete({
     *   where: {
     *     // ... filter to delete one StoryAudience
     *   }
     * })
     * 
     */
    delete<T extends StoryAudienceDeleteArgs>(args: SelectSubset<T, StoryAudienceDeleteArgs<ExtArgs>>): Prisma__StoryAudienceClient<$Result.GetResult<Prisma.$StoryAudiencePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StoryAudience.
     * @param {StoryAudienceUpdateArgs} args - Arguments to update one StoryAudience.
     * @example
     * // Update one StoryAudience
     * const storyAudience = await prisma.storyAudience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoryAudienceUpdateArgs>(args: SelectSubset<T, StoryAudienceUpdateArgs<ExtArgs>>): Prisma__StoryAudienceClient<$Result.GetResult<Prisma.$StoryAudiencePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StoryAudiences.
     * @param {StoryAudienceDeleteManyArgs} args - Arguments to filter StoryAudiences to delete.
     * @example
     * // Delete a few StoryAudiences
     * const { count } = await prisma.storyAudience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoryAudienceDeleteManyArgs>(args?: SelectSubset<T, StoryAudienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoryAudiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAudienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoryAudiences
     * const storyAudience = await prisma.storyAudience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoryAudienceUpdateManyArgs>(args: SelectSubset<T, StoryAudienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoryAudience.
     * @param {StoryAudienceUpsertArgs} args - Arguments to update or create a StoryAudience.
     * @example
     * // Update or create a StoryAudience
     * const storyAudience = await prisma.storyAudience.upsert({
     *   create: {
     *     // ... data to create a StoryAudience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoryAudience we want to update
     *   }
     * })
     */
    upsert<T extends StoryAudienceUpsertArgs>(args: SelectSubset<T, StoryAudienceUpsertArgs<ExtArgs>>): Prisma__StoryAudienceClient<$Result.GetResult<Prisma.$StoryAudiencePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StoryAudiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAudienceCountArgs} args - Arguments to filter StoryAudiences to count.
     * @example
     * // Count the number of StoryAudiences
     * const count = await prisma.storyAudience.count({
     *   where: {
     *     // ... the filter for the StoryAudiences we want to count
     *   }
     * })
    **/
    count<T extends StoryAudienceCountArgs>(
      args?: Subset<T, StoryAudienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryAudienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoryAudience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAudienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoryAudienceAggregateArgs>(args: Subset<T, StoryAudienceAggregateArgs>): Prisma.PrismaPromise<GetStoryAudienceAggregateType<T>>

    /**
     * Group by StoryAudience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAudienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoryAudienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoryAudienceGroupByArgs['orderBy'] }
        : { orderBy?: StoryAudienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoryAudienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryAudienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoryAudience model
   */
  readonly fields: StoryAudienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoryAudience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoryAudienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    story<T extends StoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoryDefaultArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StoryAudience model
   */ 
  interface StoryAudienceFieldRefs {
    readonly id: FieldRef<"StoryAudience", 'String'>
    readonly storyId: FieldRef<"StoryAudience", 'String'>
    readonly userId: FieldRef<"StoryAudience", 'String'>
    readonly type: FieldRef<"StoryAudience", 'String'>
    readonly createdAt: FieldRef<"StoryAudience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoryAudience findUnique
   */
  export type StoryAudienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryAudience
     */
    select?: StoryAudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryAudienceInclude<ExtArgs> | null
    /**
     * Filter, which StoryAudience to fetch.
     */
    where: StoryAudienceWhereUniqueInput
  }

  /**
   * StoryAudience findUniqueOrThrow
   */
  export type StoryAudienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryAudience
     */
    select?: StoryAudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryAudienceInclude<ExtArgs> | null
    /**
     * Filter, which StoryAudience to fetch.
     */
    where: StoryAudienceWhereUniqueInput
  }

  /**
   * StoryAudience findFirst
   */
  export type StoryAudienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryAudience
     */
    select?: StoryAudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryAudienceInclude<ExtArgs> | null
    /**
     * Filter, which StoryAudience to fetch.
     */
    where?: StoryAudienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryAudiences to fetch.
     */
    orderBy?: StoryAudienceOrderByWithRelationInput | StoryAudienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoryAudiences.
     */
    cursor?: StoryAudienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryAudiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryAudiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoryAudiences.
     */
    distinct?: StoryAudienceScalarFieldEnum | StoryAudienceScalarFieldEnum[]
  }

  /**
   * StoryAudience findFirstOrThrow
   */
  export type StoryAudienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryAudience
     */
    select?: StoryAudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryAudienceInclude<ExtArgs> | null
    /**
     * Filter, which StoryAudience to fetch.
     */
    where?: StoryAudienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryAudiences to fetch.
     */
    orderBy?: StoryAudienceOrderByWithRelationInput | StoryAudienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoryAudiences.
     */
    cursor?: StoryAudienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryAudiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryAudiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoryAudiences.
     */
    distinct?: StoryAudienceScalarFieldEnum | StoryAudienceScalarFieldEnum[]
  }

  /**
   * StoryAudience findMany
   */
  export type StoryAudienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryAudience
     */
    select?: StoryAudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryAudienceInclude<ExtArgs> | null
    /**
     * Filter, which StoryAudiences to fetch.
     */
    where?: StoryAudienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryAudiences to fetch.
     */
    orderBy?: StoryAudienceOrderByWithRelationInput | StoryAudienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoryAudiences.
     */
    cursor?: StoryAudienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryAudiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryAudiences.
     */
    skip?: number
    distinct?: StoryAudienceScalarFieldEnum | StoryAudienceScalarFieldEnum[]
  }

  /**
   * StoryAudience create
   */
  export type StoryAudienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryAudience
     */
    select?: StoryAudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryAudienceInclude<ExtArgs> | null
    /**
     * The data needed to create a StoryAudience.
     */
    data: XOR<StoryAudienceCreateInput, StoryAudienceUncheckedCreateInput>
  }

  /**
   * StoryAudience createMany
   */
  export type StoryAudienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoryAudiences.
     */
    data: StoryAudienceCreateManyInput | StoryAudienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoryAudience createManyAndReturn
   */
  export type StoryAudienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryAudience
     */
    select?: StoryAudienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StoryAudiences.
     */
    data: StoryAudienceCreateManyInput | StoryAudienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryAudienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoryAudience update
   */
  export type StoryAudienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryAudience
     */
    select?: StoryAudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryAudienceInclude<ExtArgs> | null
    /**
     * The data needed to update a StoryAudience.
     */
    data: XOR<StoryAudienceUpdateInput, StoryAudienceUncheckedUpdateInput>
    /**
     * Choose, which StoryAudience to update.
     */
    where: StoryAudienceWhereUniqueInput
  }

  /**
   * StoryAudience updateMany
   */
  export type StoryAudienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoryAudiences.
     */
    data: XOR<StoryAudienceUpdateManyMutationInput, StoryAudienceUncheckedUpdateManyInput>
    /**
     * Filter which StoryAudiences to update
     */
    where?: StoryAudienceWhereInput
  }

  /**
   * StoryAudience upsert
   */
  export type StoryAudienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryAudience
     */
    select?: StoryAudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryAudienceInclude<ExtArgs> | null
    /**
     * The filter to search for the StoryAudience to update in case it exists.
     */
    where: StoryAudienceWhereUniqueInput
    /**
     * In case the StoryAudience found by the `where` argument doesn't exist, create a new StoryAudience with this data.
     */
    create: XOR<StoryAudienceCreateInput, StoryAudienceUncheckedCreateInput>
    /**
     * In case the StoryAudience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoryAudienceUpdateInput, StoryAudienceUncheckedUpdateInput>
  }

  /**
   * StoryAudience delete
   */
  export type StoryAudienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryAudience
     */
    select?: StoryAudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryAudienceInclude<ExtArgs> | null
    /**
     * Filter which StoryAudience to delete.
     */
    where: StoryAudienceWhereUniqueInput
  }

  /**
   * StoryAudience deleteMany
   */
  export type StoryAudienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoryAudiences to delete
     */
    where?: StoryAudienceWhereInput
  }

  /**
   * StoryAudience without action
   */
  export type StoryAudienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryAudience
     */
    select?: StoryAudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryAudienceInclude<ExtArgs> | null
  }


  /**
   * Model CloseFriend
   */

  export type AggregateCloseFriend = {
    _count: CloseFriendCountAggregateOutputType | null
    _min: CloseFriendMinAggregateOutputType | null
    _max: CloseFriendMaxAggregateOutputType | null
  }

  export type CloseFriendMinAggregateOutputType = {
    id: string | null
    userId: string | null
    friendId: string | null
    createdAt: Date | null
  }

  export type CloseFriendMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    friendId: string | null
    createdAt: Date | null
  }

  export type CloseFriendCountAggregateOutputType = {
    id: number
    userId: number
    friendId: number
    createdAt: number
    _all: number
  }


  export type CloseFriendMinAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
  }

  export type CloseFriendMaxAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
  }

  export type CloseFriendCountAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
    _all?: true
  }

  export type CloseFriendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CloseFriend to aggregate.
     */
    where?: CloseFriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CloseFriends to fetch.
     */
    orderBy?: CloseFriendOrderByWithRelationInput | CloseFriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CloseFriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CloseFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CloseFriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CloseFriends
    **/
    _count?: true | CloseFriendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CloseFriendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CloseFriendMaxAggregateInputType
  }

  export type GetCloseFriendAggregateType<T extends CloseFriendAggregateArgs> = {
        [P in keyof T & keyof AggregateCloseFriend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCloseFriend[P]>
      : GetScalarType<T[P], AggregateCloseFriend[P]>
  }




  export type CloseFriendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CloseFriendWhereInput
    orderBy?: CloseFriendOrderByWithAggregationInput | CloseFriendOrderByWithAggregationInput[]
    by: CloseFriendScalarFieldEnum[] | CloseFriendScalarFieldEnum
    having?: CloseFriendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CloseFriendCountAggregateInputType | true
    _min?: CloseFriendMinAggregateInputType
    _max?: CloseFriendMaxAggregateInputType
  }

  export type CloseFriendGroupByOutputType = {
    id: string
    userId: string
    friendId: string
    createdAt: Date
    _count: CloseFriendCountAggregateOutputType | null
    _min: CloseFriendMinAggregateOutputType | null
    _max: CloseFriendMaxAggregateOutputType | null
  }

  type GetCloseFriendGroupByPayload<T extends CloseFriendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CloseFriendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CloseFriendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CloseFriendGroupByOutputType[P]>
            : GetScalarType<T[P], CloseFriendGroupByOutputType[P]>
        }
      >
    >


  export type CloseFriendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["closeFriend"]>

  export type CloseFriendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["closeFriend"]>

  export type CloseFriendSelectScalar = {
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
  }


  export type $CloseFriendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CloseFriend"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      friendId: string
      createdAt: Date
    }, ExtArgs["result"]["closeFriend"]>
    composites: {}
  }

  type CloseFriendGetPayload<S extends boolean | null | undefined | CloseFriendDefaultArgs> = $Result.GetResult<Prisma.$CloseFriendPayload, S>

  type CloseFriendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CloseFriendFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CloseFriendCountAggregateInputType | true
    }

  export interface CloseFriendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CloseFriend'], meta: { name: 'CloseFriend' } }
    /**
     * Find zero or one CloseFriend that matches the filter.
     * @param {CloseFriendFindUniqueArgs} args - Arguments to find a CloseFriend
     * @example
     * // Get one CloseFriend
     * const closeFriend = await prisma.closeFriend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CloseFriendFindUniqueArgs>(args: SelectSubset<T, CloseFriendFindUniqueArgs<ExtArgs>>): Prisma__CloseFriendClient<$Result.GetResult<Prisma.$CloseFriendPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CloseFriend that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CloseFriendFindUniqueOrThrowArgs} args - Arguments to find a CloseFriend
     * @example
     * // Get one CloseFriend
     * const closeFriend = await prisma.closeFriend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CloseFriendFindUniqueOrThrowArgs>(args: SelectSubset<T, CloseFriendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CloseFriendClient<$Result.GetResult<Prisma.$CloseFriendPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CloseFriend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloseFriendFindFirstArgs} args - Arguments to find a CloseFriend
     * @example
     * // Get one CloseFriend
     * const closeFriend = await prisma.closeFriend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CloseFriendFindFirstArgs>(args?: SelectSubset<T, CloseFriendFindFirstArgs<ExtArgs>>): Prisma__CloseFriendClient<$Result.GetResult<Prisma.$CloseFriendPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CloseFriend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloseFriendFindFirstOrThrowArgs} args - Arguments to find a CloseFriend
     * @example
     * // Get one CloseFriend
     * const closeFriend = await prisma.closeFriend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CloseFriendFindFirstOrThrowArgs>(args?: SelectSubset<T, CloseFriendFindFirstOrThrowArgs<ExtArgs>>): Prisma__CloseFriendClient<$Result.GetResult<Prisma.$CloseFriendPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CloseFriends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloseFriendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CloseFriends
     * const closeFriends = await prisma.closeFriend.findMany()
     * 
     * // Get first 10 CloseFriends
     * const closeFriends = await prisma.closeFriend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const closeFriendWithIdOnly = await prisma.closeFriend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CloseFriendFindManyArgs>(args?: SelectSubset<T, CloseFriendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CloseFriendPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CloseFriend.
     * @param {CloseFriendCreateArgs} args - Arguments to create a CloseFriend.
     * @example
     * // Create one CloseFriend
     * const CloseFriend = await prisma.closeFriend.create({
     *   data: {
     *     // ... data to create a CloseFriend
     *   }
     * })
     * 
     */
    create<T extends CloseFriendCreateArgs>(args: SelectSubset<T, CloseFriendCreateArgs<ExtArgs>>): Prisma__CloseFriendClient<$Result.GetResult<Prisma.$CloseFriendPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CloseFriends.
     * @param {CloseFriendCreateManyArgs} args - Arguments to create many CloseFriends.
     * @example
     * // Create many CloseFriends
     * const closeFriend = await prisma.closeFriend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CloseFriendCreateManyArgs>(args?: SelectSubset<T, CloseFriendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CloseFriends and returns the data saved in the database.
     * @param {CloseFriendCreateManyAndReturnArgs} args - Arguments to create many CloseFriends.
     * @example
     * // Create many CloseFriends
     * const closeFriend = await prisma.closeFriend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CloseFriends and only return the `id`
     * const closeFriendWithIdOnly = await prisma.closeFriend.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CloseFriendCreateManyAndReturnArgs>(args?: SelectSubset<T, CloseFriendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CloseFriendPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CloseFriend.
     * @param {CloseFriendDeleteArgs} args - Arguments to delete one CloseFriend.
     * @example
     * // Delete one CloseFriend
     * const CloseFriend = await prisma.closeFriend.delete({
     *   where: {
     *     // ... filter to delete one CloseFriend
     *   }
     * })
     * 
     */
    delete<T extends CloseFriendDeleteArgs>(args: SelectSubset<T, CloseFriendDeleteArgs<ExtArgs>>): Prisma__CloseFriendClient<$Result.GetResult<Prisma.$CloseFriendPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CloseFriend.
     * @param {CloseFriendUpdateArgs} args - Arguments to update one CloseFriend.
     * @example
     * // Update one CloseFriend
     * const closeFriend = await prisma.closeFriend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CloseFriendUpdateArgs>(args: SelectSubset<T, CloseFriendUpdateArgs<ExtArgs>>): Prisma__CloseFriendClient<$Result.GetResult<Prisma.$CloseFriendPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CloseFriends.
     * @param {CloseFriendDeleteManyArgs} args - Arguments to filter CloseFriends to delete.
     * @example
     * // Delete a few CloseFriends
     * const { count } = await prisma.closeFriend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CloseFriendDeleteManyArgs>(args?: SelectSubset<T, CloseFriendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CloseFriends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloseFriendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CloseFriends
     * const closeFriend = await prisma.closeFriend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CloseFriendUpdateManyArgs>(args: SelectSubset<T, CloseFriendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CloseFriend.
     * @param {CloseFriendUpsertArgs} args - Arguments to update or create a CloseFriend.
     * @example
     * // Update or create a CloseFriend
     * const closeFriend = await prisma.closeFriend.upsert({
     *   create: {
     *     // ... data to create a CloseFriend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CloseFriend we want to update
     *   }
     * })
     */
    upsert<T extends CloseFriendUpsertArgs>(args: SelectSubset<T, CloseFriendUpsertArgs<ExtArgs>>): Prisma__CloseFriendClient<$Result.GetResult<Prisma.$CloseFriendPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CloseFriends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloseFriendCountArgs} args - Arguments to filter CloseFriends to count.
     * @example
     * // Count the number of CloseFriends
     * const count = await prisma.closeFriend.count({
     *   where: {
     *     // ... the filter for the CloseFriends we want to count
     *   }
     * })
    **/
    count<T extends CloseFriendCountArgs>(
      args?: Subset<T, CloseFriendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CloseFriendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CloseFriend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloseFriendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CloseFriendAggregateArgs>(args: Subset<T, CloseFriendAggregateArgs>): Prisma.PrismaPromise<GetCloseFriendAggregateType<T>>

    /**
     * Group by CloseFriend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloseFriendGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CloseFriendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CloseFriendGroupByArgs['orderBy'] }
        : { orderBy?: CloseFriendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CloseFriendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCloseFriendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CloseFriend model
   */
  readonly fields: CloseFriendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CloseFriend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CloseFriendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CloseFriend model
   */ 
  interface CloseFriendFieldRefs {
    readonly id: FieldRef<"CloseFriend", 'String'>
    readonly userId: FieldRef<"CloseFriend", 'String'>
    readonly friendId: FieldRef<"CloseFriend", 'String'>
    readonly createdAt: FieldRef<"CloseFriend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CloseFriend findUnique
   */
  export type CloseFriendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloseFriend
     */
    select?: CloseFriendSelect<ExtArgs> | null
    /**
     * Filter, which CloseFriend to fetch.
     */
    where: CloseFriendWhereUniqueInput
  }

  /**
   * CloseFriend findUniqueOrThrow
   */
  export type CloseFriendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloseFriend
     */
    select?: CloseFriendSelect<ExtArgs> | null
    /**
     * Filter, which CloseFriend to fetch.
     */
    where: CloseFriendWhereUniqueInput
  }

  /**
   * CloseFriend findFirst
   */
  export type CloseFriendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloseFriend
     */
    select?: CloseFriendSelect<ExtArgs> | null
    /**
     * Filter, which CloseFriend to fetch.
     */
    where?: CloseFriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CloseFriends to fetch.
     */
    orderBy?: CloseFriendOrderByWithRelationInput | CloseFriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CloseFriends.
     */
    cursor?: CloseFriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CloseFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CloseFriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CloseFriends.
     */
    distinct?: CloseFriendScalarFieldEnum | CloseFriendScalarFieldEnum[]
  }

  /**
   * CloseFriend findFirstOrThrow
   */
  export type CloseFriendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloseFriend
     */
    select?: CloseFriendSelect<ExtArgs> | null
    /**
     * Filter, which CloseFriend to fetch.
     */
    where?: CloseFriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CloseFriends to fetch.
     */
    orderBy?: CloseFriendOrderByWithRelationInput | CloseFriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CloseFriends.
     */
    cursor?: CloseFriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CloseFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CloseFriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CloseFriends.
     */
    distinct?: CloseFriendScalarFieldEnum | CloseFriendScalarFieldEnum[]
  }

  /**
   * CloseFriend findMany
   */
  export type CloseFriendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloseFriend
     */
    select?: CloseFriendSelect<ExtArgs> | null
    /**
     * Filter, which CloseFriends to fetch.
     */
    where?: CloseFriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CloseFriends to fetch.
     */
    orderBy?: CloseFriendOrderByWithRelationInput | CloseFriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CloseFriends.
     */
    cursor?: CloseFriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CloseFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CloseFriends.
     */
    skip?: number
    distinct?: CloseFriendScalarFieldEnum | CloseFriendScalarFieldEnum[]
  }

  /**
   * CloseFriend create
   */
  export type CloseFriendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloseFriend
     */
    select?: CloseFriendSelect<ExtArgs> | null
    /**
     * The data needed to create a CloseFriend.
     */
    data: XOR<CloseFriendCreateInput, CloseFriendUncheckedCreateInput>
  }

  /**
   * CloseFriend createMany
   */
  export type CloseFriendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CloseFriends.
     */
    data: CloseFriendCreateManyInput | CloseFriendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CloseFriend createManyAndReturn
   */
  export type CloseFriendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloseFriend
     */
    select?: CloseFriendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CloseFriends.
     */
    data: CloseFriendCreateManyInput | CloseFriendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CloseFriend update
   */
  export type CloseFriendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloseFriend
     */
    select?: CloseFriendSelect<ExtArgs> | null
    /**
     * The data needed to update a CloseFriend.
     */
    data: XOR<CloseFriendUpdateInput, CloseFriendUncheckedUpdateInput>
    /**
     * Choose, which CloseFriend to update.
     */
    where: CloseFriendWhereUniqueInput
  }

  /**
   * CloseFriend updateMany
   */
  export type CloseFriendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CloseFriends.
     */
    data: XOR<CloseFriendUpdateManyMutationInput, CloseFriendUncheckedUpdateManyInput>
    /**
     * Filter which CloseFriends to update
     */
    where?: CloseFriendWhereInput
  }

  /**
   * CloseFriend upsert
   */
  export type CloseFriendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloseFriend
     */
    select?: CloseFriendSelect<ExtArgs> | null
    /**
     * The filter to search for the CloseFriend to update in case it exists.
     */
    where: CloseFriendWhereUniqueInput
    /**
     * In case the CloseFriend found by the `where` argument doesn't exist, create a new CloseFriend with this data.
     */
    create: XOR<CloseFriendCreateInput, CloseFriendUncheckedCreateInput>
    /**
     * In case the CloseFriend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CloseFriendUpdateInput, CloseFriendUncheckedUpdateInput>
  }

  /**
   * CloseFriend delete
   */
  export type CloseFriendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloseFriend
     */
    select?: CloseFriendSelect<ExtArgs> | null
    /**
     * Filter which CloseFriend to delete.
     */
    where: CloseFriendWhereUniqueInput
  }

  /**
   * CloseFriend deleteMany
   */
  export type CloseFriendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CloseFriends to delete
     */
    where?: CloseFriendWhereInput
  }

  /**
   * CloseFriend without action
   */
  export type CloseFriendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloseFriend
     */
    select?: CloseFriendSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    content: 'content',
    visibility: 'visibility',
    isPinned: 'isPinned',
    sharedPostId: 'sharedPostId',
    mediaCount: 'mediaCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostMediaScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    mediaId: 'mediaId',
    mediaType: 'mediaType',
    url: 'url',
    orderIndex: 'orderIndex'
  };

  export type PostMediaScalarFieldEnum = (typeof PostMediaScalarFieldEnum)[keyof typeof PostMediaScalarFieldEnum]


  export const HashtagScalarFieldEnum: {
    id: 'id',
    tag: 'tag',
    postCount: 'postCount',
    lastUsedAt: 'lastUsedAt'
  };

  export type HashtagScalarFieldEnum = (typeof HashtagScalarFieldEnum)[keyof typeof HashtagScalarFieldEnum]


  export const PostHashtagScalarFieldEnum: {
    postId: 'postId',
    hashtagId: 'hashtagId'
  };

  export type PostHashtagScalarFieldEnum = (typeof PostHashtagScalarFieldEnum)[keyof typeof PostHashtagScalarFieldEnum]


  export const SavedPostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    savedAt: 'savedAt'
  };

  export type SavedPostScalarFieldEnum = (typeof SavedPostScalarFieldEnum)[keyof typeof SavedPostScalarFieldEnum]


  export const StoryScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    type: 'type',
    content: 'content',
    backgroundColor: 'backgroundColor',
    fontStyle: 'fontStyle',
    visibility: 'visibility',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiresAt: 'expiresAt',
    deletedAt: 'deletedAt'
  };

  export type StoryScalarFieldEnum = (typeof StoryScalarFieldEnum)[keyof typeof StoryScalarFieldEnum]


  export const StoryMediaScalarFieldEnum: {
    id: 'id',
    storyId: 'storyId',
    mediaType: 'mediaType',
    url: 'url',
    mimeType: 'mimeType',
    fileSize: 'fileSize',
    duration: 'duration',
    createdAt: 'createdAt'
  };

  export type StoryMediaScalarFieldEnum = (typeof StoryMediaScalarFieldEnum)[keyof typeof StoryMediaScalarFieldEnum]


  export const StoryViewScalarFieldEnum: {
    id: 'id',
    storyId: 'storyId',
    viewerId: 'viewerId',
    viewedAt: 'viewedAt'
  };

  export type StoryViewScalarFieldEnum = (typeof StoryViewScalarFieldEnum)[keyof typeof StoryViewScalarFieldEnum]


  export const StoryReactionScalarFieldEnum: {
    id: 'id',
    storyId: 'storyId',
    userId: 'userId',
    reactionType: 'reactionType',
    createdAt: 'createdAt'
  };

  export type StoryReactionScalarFieldEnum = (typeof StoryReactionScalarFieldEnum)[keyof typeof StoryReactionScalarFieldEnum]


  export const StoryAudienceScalarFieldEnum: {
    id: 'id',
    storyId: 'storyId',
    userId: 'userId',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type StoryAudienceScalarFieldEnum = (typeof StoryAudienceScalarFieldEnum)[keyof typeof StoryAudienceScalarFieldEnum]


  export const CloseFriendScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    friendId: 'friendId',
    createdAt: 'createdAt'
  };

  export type CloseFriendScalarFieldEnum = (typeof CloseFriendScalarFieldEnum)[keyof typeof CloseFriendScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'PostVisibility'
   */
  export type EnumPostVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostVisibility'>
    


  /**
   * Reference to a field of type 'PostVisibility[]'
   */
  export type ListEnumPostVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostVisibility[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StoryType'
   */
  export type EnumStoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StoryType'>
    


  /**
   * Reference to a field of type 'StoryType[]'
   */
  export type ListEnumStoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StoryType[]'>
    


  /**
   * Reference to a field of type 'StoryVisibility'
   */
  export type EnumStoryVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StoryVisibility'>
    


  /**
   * Reference to a field of type 'StoryVisibility[]'
   */
  export type ListEnumStoryVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StoryVisibility[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    authorId?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    visibility?: EnumPostVisibilityFilter<"Post"> | $Enums.PostVisibility
    isPinned?: BoolFilter<"Post"> | boolean
    sharedPostId?: StringNullableFilter<"Post"> | string | null
    mediaCount?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    media?: PostMediaListRelationFilter
    hashtags?: PostHashtagListRelationFilter
    saves?: SavedPostListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    visibility?: SortOrder
    isPinned?: SortOrder
    sharedPostId?: SortOrderInput | SortOrder
    mediaCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    media?: PostMediaOrderByRelationAggregateInput
    hashtags?: PostHashtagOrderByRelationAggregateInput
    saves?: SavedPostOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    authorId?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    visibility?: EnumPostVisibilityFilter<"Post"> | $Enums.PostVisibility
    isPinned?: BoolFilter<"Post"> | boolean
    sharedPostId?: StringNullableFilter<"Post"> | string | null
    mediaCount?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    media?: PostMediaListRelationFilter
    hashtags?: PostHashtagListRelationFilter
    saves?: SavedPostListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    visibility?: SortOrder
    isPinned?: SortOrder
    sharedPostId?: SortOrderInput | SortOrder
    mediaCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    authorId?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    visibility?: EnumPostVisibilityWithAggregatesFilter<"Post"> | $Enums.PostVisibility
    isPinned?: BoolWithAggregatesFilter<"Post"> | boolean
    sharedPostId?: StringNullableWithAggregatesFilter<"Post"> | string | null
    mediaCount?: IntWithAggregatesFilter<"Post"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
  }

  export type PostMediaWhereInput = {
    AND?: PostMediaWhereInput | PostMediaWhereInput[]
    OR?: PostMediaWhereInput[]
    NOT?: PostMediaWhereInput | PostMediaWhereInput[]
    id?: StringFilter<"PostMedia"> | string
    postId?: StringFilter<"PostMedia"> | string
    mediaId?: StringFilter<"PostMedia"> | string
    mediaType?: StringFilter<"PostMedia"> | string
    url?: StringFilter<"PostMedia"> | string
    orderIndex?: IntFilter<"PostMedia"> | number
    post?: XOR<PostRelationFilter, PostWhereInput>
  }

  export type PostMediaOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    mediaId?: SortOrder
    mediaType?: SortOrder
    url?: SortOrder
    orderIndex?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type PostMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostMediaWhereInput | PostMediaWhereInput[]
    OR?: PostMediaWhereInput[]
    NOT?: PostMediaWhereInput | PostMediaWhereInput[]
    postId?: StringFilter<"PostMedia"> | string
    mediaId?: StringFilter<"PostMedia"> | string
    mediaType?: StringFilter<"PostMedia"> | string
    url?: StringFilter<"PostMedia"> | string
    orderIndex?: IntFilter<"PostMedia"> | number
    post?: XOR<PostRelationFilter, PostWhereInput>
  }, "id">

  export type PostMediaOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    mediaId?: SortOrder
    mediaType?: SortOrder
    url?: SortOrder
    orderIndex?: SortOrder
    _count?: PostMediaCountOrderByAggregateInput
    _avg?: PostMediaAvgOrderByAggregateInput
    _max?: PostMediaMaxOrderByAggregateInput
    _min?: PostMediaMinOrderByAggregateInput
    _sum?: PostMediaSumOrderByAggregateInput
  }

  export type PostMediaScalarWhereWithAggregatesInput = {
    AND?: PostMediaScalarWhereWithAggregatesInput | PostMediaScalarWhereWithAggregatesInput[]
    OR?: PostMediaScalarWhereWithAggregatesInput[]
    NOT?: PostMediaScalarWhereWithAggregatesInput | PostMediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostMedia"> | string
    postId?: StringWithAggregatesFilter<"PostMedia"> | string
    mediaId?: StringWithAggregatesFilter<"PostMedia"> | string
    mediaType?: StringWithAggregatesFilter<"PostMedia"> | string
    url?: StringWithAggregatesFilter<"PostMedia"> | string
    orderIndex?: IntWithAggregatesFilter<"PostMedia"> | number
  }

  export type HashtagWhereInput = {
    AND?: HashtagWhereInput | HashtagWhereInput[]
    OR?: HashtagWhereInput[]
    NOT?: HashtagWhereInput | HashtagWhereInput[]
    id?: StringFilter<"Hashtag"> | string
    tag?: StringFilter<"Hashtag"> | string
    postCount?: IntFilter<"Hashtag"> | number
    lastUsedAt?: DateTimeFilter<"Hashtag"> | Date | string
    posts?: PostHashtagListRelationFilter
  }

  export type HashtagOrderByWithRelationInput = {
    id?: SortOrder
    tag?: SortOrder
    postCount?: SortOrder
    lastUsedAt?: SortOrder
    posts?: PostHashtagOrderByRelationAggregateInput
  }

  export type HashtagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tag?: string
    AND?: HashtagWhereInput | HashtagWhereInput[]
    OR?: HashtagWhereInput[]
    NOT?: HashtagWhereInput | HashtagWhereInput[]
    postCount?: IntFilter<"Hashtag"> | number
    lastUsedAt?: DateTimeFilter<"Hashtag"> | Date | string
    posts?: PostHashtagListRelationFilter
  }, "id" | "tag">

  export type HashtagOrderByWithAggregationInput = {
    id?: SortOrder
    tag?: SortOrder
    postCount?: SortOrder
    lastUsedAt?: SortOrder
    _count?: HashtagCountOrderByAggregateInput
    _avg?: HashtagAvgOrderByAggregateInput
    _max?: HashtagMaxOrderByAggregateInput
    _min?: HashtagMinOrderByAggregateInput
    _sum?: HashtagSumOrderByAggregateInput
  }

  export type HashtagScalarWhereWithAggregatesInput = {
    AND?: HashtagScalarWhereWithAggregatesInput | HashtagScalarWhereWithAggregatesInput[]
    OR?: HashtagScalarWhereWithAggregatesInput[]
    NOT?: HashtagScalarWhereWithAggregatesInput | HashtagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hashtag"> | string
    tag?: StringWithAggregatesFilter<"Hashtag"> | string
    postCount?: IntWithAggregatesFilter<"Hashtag"> | number
    lastUsedAt?: DateTimeWithAggregatesFilter<"Hashtag"> | Date | string
  }

  export type PostHashtagWhereInput = {
    AND?: PostHashtagWhereInput | PostHashtagWhereInput[]
    OR?: PostHashtagWhereInput[]
    NOT?: PostHashtagWhereInput | PostHashtagWhereInput[]
    postId?: StringFilter<"PostHashtag"> | string
    hashtagId?: StringFilter<"PostHashtag"> | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    hashtag?: XOR<HashtagRelationFilter, HashtagWhereInput>
  }

  export type PostHashtagOrderByWithRelationInput = {
    postId?: SortOrder
    hashtagId?: SortOrder
    post?: PostOrderByWithRelationInput
    hashtag?: HashtagOrderByWithRelationInput
  }

  export type PostHashtagWhereUniqueInput = Prisma.AtLeast<{
    postId_hashtagId?: PostHashtagPostIdHashtagIdCompoundUniqueInput
    AND?: PostHashtagWhereInput | PostHashtagWhereInput[]
    OR?: PostHashtagWhereInput[]
    NOT?: PostHashtagWhereInput | PostHashtagWhereInput[]
    postId?: StringFilter<"PostHashtag"> | string
    hashtagId?: StringFilter<"PostHashtag"> | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    hashtag?: XOR<HashtagRelationFilter, HashtagWhereInput>
  }, "postId_hashtagId">

  export type PostHashtagOrderByWithAggregationInput = {
    postId?: SortOrder
    hashtagId?: SortOrder
    _count?: PostHashtagCountOrderByAggregateInput
    _max?: PostHashtagMaxOrderByAggregateInput
    _min?: PostHashtagMinOrderByAggregateInput
  }

  export type PostHashtagScalarWhereWithAggregatesInput = {
    AND?: PostHashtagScalarWhereWithAggregatesInput | PostHashtagScalarWhereWithAggregatesInput[]
    OR?: PostHashtagScalarWhereWithAggregatesInput[]
    NOT?: PostHashtagScalarWhereWithAggregatesInput | PostHashtagScalarWhereWithAggregatesInput[]
    postId?: StringWithAggregatesFilter<"PostHashtag"> | string
    hashtagId?: StringWithAggregatesFilter<"PostHashtag"> | string
  }

  export type SavedPostWhereInput = {
    AND?: SavedPostWhereInput | SavedPostWhereInput[]
    OR?: SavedPostWhereInput[]
    NOT?: SavedPostWhereInput | SavedPostWhereInput[]
    id?: StringFilter<"SavedPost"> | string
    userId?: StringFilter<"SavedPost"> | string
    postId?: StringFilter<"SavedPost"> | string
    savedAt?: DateTimeFilter<"SavedPost"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
  }

  export type SavedPostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    savedAt?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type SavedPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_postId?: SavedPostUserIdPostIdCompoundUniqueInput
    AND?: SavedPostWhereInput | SavedPostWhereInput[]
    OR?: SavedPostWhereInput[]
    NOT?: SavedPostWhereInput | SavedPostWhereInput[]
    userId?: StringFilter<"SavedPost"> | string
    postId?: StringFilter<"SavedPost"> | string
    savedAt?: DateTimeFilter<"SavedPost"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
  }, "id" | "userId_postId">

  export type SavedPostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    savedAt?: SortOrder
    _count?: SavedPostCountOrderByAggregateInput
    _max?: SavedPostMaxOrderByAggregateInput
    _min?: SavedPostMinOrderByAggregateInput
  }

  export type SavedPostScalarWhereWithAggregatesInput = {
    AND?: SavedPostScalarWhereWithAggregatesInput | SavedPostScalarWhereWithAggregatesInput[]
    OR?: SavedPostScalarWhereWithAggregatesInput[]
    NOT?: SavedPostScalarWhereWithAggregatesInput | SavedPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedPost"> | string
    userId?: StringWithAggregatesFilter<"SavedPost"> | string
    postId?: StringWithAggregatesFilter<"SavedPost"> | string
    savedAt?: DateTimeWithAggregatesFilter<"SavedPost"> | Date | string
  }

  export type StoryWhereInput = {
    AND?: StoryWhereInput | StoryWhereInput[]
    OR?: StoryWhereInput[]
    NOT?: StoryWhereInput | StoryWhereInput[]
    id?: StringFilter<"Story"> | string
    authorId?: StringFilter<"Story"> | string
    type?: EnumStoryTypeFilter<"Story"> | $Enums.StoryType
    content?: StringNullableFilter<"Story"> | string | null
    backgroundColor?: StringNullableFilter<"Story"> | string | null
    fontStyle?: StringNullableFilter<"Story"> | string | null
    visibility?: EnumStoryVisibilityFilter<"Story"> | $Enums.StoryVisibility
    createdAt?: DateTimeFilter<"Story"> | Date | string
    updatedAt?: DateTimeFilter<"Story"> | Date | string
    expiresAt?: DateTimeFilter<"Story"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Story"> | Date | string | null
    media?: StoryMediaListRelationFilter
    views?: StoryViewListRelationFilter
    reactions?: StoryReactionListRelationFilter
    audiences?: StoryAudienceListRelationFilter
  }

  export type StoryOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    type?: SortOrder
    content?: SortOrderInput | SortOrder
    backgroundColor?: SortOrderInput | SortOrder
    fontStyle?: SortOrderInput | SortOrder
    visibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    media?: StoryMediaOrderByRelationAggregateInput
    views?: StoryViewOrderByRelationAggregateInput
    reactions?: StoryReactionOrderByRelationAggregateInput
    audiences?: StoryAudienceOrderByRelationAggregateInput
  }

  export type StoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StoryWhereInput | StoryWhereInput[]
    OR?: StoryWhereInput[]
    NOT?: StoryWhereInput | StoryWhereInput[]
    authorId?: StringFilter<"Story"> | string
    type?: EnumStoryTypeFilter<"Story"> | $Enums.StoryType
    content?: StringNullableFilter<"Story"> | string | null
    backgroundColor?: StringNullableFilter<"Story"> | string | null
    fontStyle?: StringNullableFilter<"Story"> | string | null
    visibility?: EnumStoryVisibilityFilter<"Story"> | $Enums.StoryVisibility
    createdAt?: DateTimeFilter<"Story"> | Date | string
    updatedAt?: DateTimeFilter<"Story"> | Date | string
    expiresAt?: DateTimeFilter<"Story"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Story"> | Date | string | null
    media?: StoryMediaListRelationFilter
    views?: StoryViewListRelationFilter
    reactions?: StoryReactionListRelationFilter
    audiences?: StoryAudienceListRelationFilter
  }, "id">

  export type StoryOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    type?: SortOrder
    content?: SortOrderInput | SortOrder
    backgroundColor?: SortOrderInput | SortOrder
    fontStyle?: SortOrderInput | SortOrder
    visibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: StoryCountOrderByAggregateInput
    _max?: StoryMaxOrderByAggregateInput
    _min?: StoryMinOrderByAggregateInput
  }

  export type StoryScalarWhereWithAggregatesInput = {
    AND?: StoryScalarWhereWithAggregatesInput | StoryScalarWhereWithAggregatesInput[]
    OR?: StoryScalarWhereWithAggregatesInput[]
    NOT?: StoryScalarWhereWithAggregatesInput | StoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Story"> | string
    authorId?: StringWithAggregatesFilter<"Story"> | string
    type?: EnumStoryTypeWithAggregatesFilter<"Story"> | $Enums.StoryType
    content?: StringNullableWithAggregatesFilter<"Story"> | string | null
    backgroundColor?: StringNullableWithAggregatesFilter<"Story"> | string | null
    fontStyle?: StringNullableWithAggregatesFilter<"Story"> | string | null
    visibility?: EnumStoryVisibilityWithAggregatesFilter<"Story"> | $Enums.StoryVisibility
    createdAt?: DateTimeWithAggregatesFilter<"Story"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Story"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Story"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Story"> | Date | string | null
  }

  export type StoryMediaWhereInput = {
    AND?: StoryMediaWhereInput | StoryMediaWhereInput[]
    OR?: StoryMediaWhereInput[]
    NOT?: StoryMediaWhereInput | StoryMediaWhereInput[]
    id?: StringFilter<"StoryMedia"> | string
    storyId?: StringFilter<"StoryMedia"> | string
    mediaType?: StringFilter<"StoryMedia"> | string
    url?: StringFilter<"StoryMedia"> | string
    mimeType?: StringNullableFilter<"StoryMedia"> | string | null
    fileSize?: IntNullableFilter<"StoryMedia"> | number | null
    duration?: FloatNullableFilter<"StoryMedia"> | number | null
    createdAt?: DateTimeFilter<"StoryMedia"> | Date | string
    story?: XOR<StoryRelationFilter, StoryWhereInput>
  }

  export type StoryMediaOrderByWithRelationInput = {
    id?: SortOrder
    storyId?: SortOrder
    mediaType?: SortOrder
    url?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    story?: StoryOrderByWithRelationInput
  }

  export type StoryMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StoryMediaWhereInput | StoryMediaWhereInput[]
    OR?: StoryMediaWhereInput[]
    NOT?: StoryMediaWhereInput | StoryMediaWhereInput[]
    storyId?: StringFilter<"StoryMedia"> | string
    mediaType?: StringFilter<"StoryMedia"> | string
    url?: StringFilter<"StoryMedia"> | string
    mimeType?: StringNullableFilter<"StoryMedia"> | string | null
    fileSize?: IntNullableFilter<"StoryMedia"> | number | null
    duration?: FloatNullableFilter<"StoryMedia"> | number | null
    createdAt?: DateTimeFilter<"StoryMedia"> | Date | string
    story?: XOR<StoryRelationFilter, StoryWhereInput>
  }, "id">

  export type StoryMediaOrderByWithAggregationInput = {
    id?: SortOrder
    storyId?: SortOrder
    mediaType?: SortOrder
    url?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StoryMediaCountOrderByAggregateInput
    _avg?: StoryMediaAvgOrderByAggregateInput
    _max?: StoryMediaMaxOrderByAggregateInput
    _min?: StoryMediaMinOrderByAggregateInput
    _sum?: StoryMediaSumOrderByAggregateInput
  }

  export type StoryMediaScalarWhereWithAggregatesInput = {
    AND?: StoryMediaScalarWhereWithAggregatesInput | StoryMediaScalarWhereWithAggregatesInput[]
    OR?: StoryMediaScalarWhereWithAggregatesInput[]
    NOT?: StoryMediaScalarWhereWithAggregatesInput | StoryMediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StoryMedia"> | string
    storyId?: StringWithAggregatesFilter<"StoryMedia"> | string
    mediaType?: StringWithAggregatesFilter<"StoryMedia"> | string
    url?: StringWithAggregatesFilter<"StoryMedia"> | string
    mimeType?: StringNullableWithAggregatesFilter<"StoryMedia"> | string | null
    fileSize?: IntNullableWithAggregatesFilter<"StoryMedia"> | number | null
    duration?: FloatNullableWithAggregatesFilter<"StoryMedia"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"StoryMedia"> | Date | string
  }

  export type StoryViewWhereInput = {
    AND?: StoryViewWhereInput | StoryViewWhereInput[]
    OR?: StoryViewWhereInput[]
    NOT?: StoryViewWhereInput | StoryViewWhereInput[]
    id?: StringFilter<"StoryView"> | string
    storyId?: StringFilter<"StoryView"> | string
    viewerId?: StringFilter<"StoryView"> | string
    viewedAt?: DateTimeFilter<"StoryView"> | Date | string
    story?: XOR<StoryRelationFilter, StoryWhereInput>
  }

  export type StoryViewOrderByWithRelationInput = {
    id?: SortOrder
    storyId?: SortOrder
    viewerId?: SortOrder
    viewedAt?: SortOrder
    story?: StoryOrderByWithRelationInput
  }

  export type StoryViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    storyId_viewerId?: StoryViewStoryIdViewerIdCompoundUniqueInput
    AND?: StoryViewWhereInput | StoryViewWhereInput[]
    OR?: StoryViewWhereInput[]
    NOT?: StoryViewWhereInput | StoryViewWhereInput[]
    storyId?: StringFilter<"StoryView"> | string
    viewerId?: StringFilter<"StoryView"> | string
    viewedAt?: DateTimeFilter<"StoryView"> | Date | string
    story?: XOR<StoryRelationFilter, StoryWhereInput>
  }, "id" | "storyId_viewerId">

  export type StoryViewOrderByWithAggregationInput = {
    id?: SortOrder
    storyId?: SortOrder
    viewerId?: SortOrder
    viewedAt?: SortOrder
    _count?: StoryViewCountOrderByAggregateInput
    _max?: StoryViewMaxOrderByAggregateInput
    _min?: StoryViewMinOrderByAggregateInput
  }

  export type StoryViewScalarWhereWithAggregatesInput = {
    AND?: StoryViewScalarWhereWithAggregatesInput | StoryViewScalarWhereWithAggregatesInput[]
    OR?: StoryViewScalarWhereWithAggregatesInput[]
    NOT?: StoryViewScalarWhereWithAggregatesInput | StoryViewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StoryView"> | string
    storyId?: StringWithAggregatesFilter<"StoryView"> | string
    viewerId?: StringWithAggregatesFilter<"StoryView"> | string
    viewedAt?: DateTimeWithAggregatesFilter<"StoryView"> | Date | string
  }

  export type StoryReactionWhereInput = {
    AND?: StoryReactionWhereInput | StoryReactionWhereInput[]
    OR?: StoryReactionWhereInput[]
    NOT?: StoryReactionWhereInput | StoryReactionWhereInput[]
    id?: StringFilter<"StoryReaction"> | string
    storyId?: StringFilter<"StoryReaction"> | string
    userId?: StringFilter<"StoryReaction"> | string
    reactionType?: StringFilter<"StoryReaction"> | string
    createdAt?: DateTimeFilter<"StoryReaction"> | Date | string
    story?: XOR<StoryRelationFilter, StoryWhereInput>
  }

  export type StoryReactionOrderByWithRelationInput = {
    id?: SortOrder
    storyId?: SortOrder
    userId?: SortOrder
    reactionType?: SortOrder
    createdAt?: SortOrder
    story?: StoryOrderByWithRelationInput
  }

  export type StoryReactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    storyId_userId?: StoryReactionStoryIdUserIdCompoundUniqueInput
    AND?: StoryReactionWhereInput | StoryReactionWhereInput[]
    OR?: StoryReactionWhereInput[]
    NOT?: StoryReactionWhereInput | StoryReactionWhereInput[]
    storyId?: StringFilter<"StoryReaction"> | string
    userId?: StringFilter<"StoryReaction"> | string
    reactionType?: StringFilter<"StoryReaction"> | string
    createdAt?: DateTimeFilter<"StoryReaction"> | Date | string
    story?: XOR<StoryRelationFilter, StoryWhereInput>
  }, "id" | "storyId_userId">

  export type StoryReactionOrderByWithAggregationInput = {
    id?: SortOrder
    storyId?: SortOrder
    userId?: SortOrder
    reactionType?: SortOrder
    createdAt?: SortOrder
    _count?: StoryReactionCountOrderByAggregateInput
    _max?: StoryReactionMaxOrderByAggregateInput
    _min?: StoryReactionMinOrderByAggregateInput
  }

  export type StoryReactionScalarWhereWithAggregatesInput = {
    AND?: StoryReactionScalarWhereWithAggregatesInput | StoryReactionScalarWhereWithAggregatesInput[]
    OR?: StoryReactionScalarWhereWithAggregatesInput[]
    NOT?: StoryReactionScalarWhereWithAggregatesInput | StoryReactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StoryReaction"> | string
    storyId?: StringWithAggregatesFilter<"StoryReaction"> | string
    userId?: StringWithAggregatesFilter<"StoryReaction"> | string
    reactionType?: StringWithAggregatesFilter<"StoryReaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StoryReaction"> | Date | string
  }

  export type StoryAudienceWhereInput = {
    AND?: StoryAudienceWhereInput | StoryAudienceWhereInput[]
    OR?: StoryAudienceWhereInput[]
    NOT?: StoryAudienceWhereInput | StoryAudienceWhereInput[]
    id?: StringFilter<"StoryAudience"> | string
    storyId?: StringFilter<"StoryAudience"> | string
    userId?: StringFilter<"StoryAudience"> | string
    type?: StringFilter<"StoryAudience"> | string
    createdAt?: DateTimeFilter<"StoryAudience"> | Date | string
    story?: XOR<StoryRelationFilter, StoryWhereInput>
  }

  export type StoryAudienceOrderByWithRelationInput = {
    id?: SortOrder
    storyId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    story?: StoryOrderByWithRelationInput
  }

  export type StoryAudienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    storyId_userId_type?: StoryAudienceStoryIdUserIdTypeCompoundUniqueInput
    AND?: StoryAudienceWhereInput | StoryAudienceWhereInput[]
    OR?: StoryAudienceWhereInput[]
    NOT?: StoryAudienceWhereInput | StoryAudienceWhereInput[]
    storyId?: StringFilter<"StoryAudience"> | string
    userId?: StringFilter<"StoryAudience"> | string
    type?: StringFilter<"StoryAudience"> | string
    createdAt?: DateTimeFilter<"StoryAudience"> | Date | string
    story?: XOR<StoryRelationFilter, StoryWhereInput>
  }, "id" | "storyId_userId_type">

  export type StoryAudienceOrderByWithAggregationInput = {
    id?: SortOrder
    storyId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: StoryAudienceCountOrderByAggregateInput
    _max?: StoryAudienceMaxOrderByAggregateInput
    _min?: StoryAudienceMinOrderByAggregateInput
  }

  export type StoryAudienceScalarWhereWithAggregatesInput = {
    AND?: StoryAudienceScalarWhereWithAggregatesInput | StoryAudienceScalarWhereWithAggregatesInput[]
    OR?: StoryAudienceScalarWhereWithAggregatesInput[]
    NOT?: StoryAudienceScalarWhereWithAggregatesInput | StoryAudienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StoryAudience"> | string
    storyId?: StringWithAggregatesFilter<"StoryAudience"> | string
    userId?: StringWithAggregatesFilter<"StoryAudience"> | string
    type?: StringWithAggregatesFilter<"StoryAudience"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StoryAudience"> | Date | string
  }

  export type CloseFriendWhereInput = {
    AND?: CloseFriendWhereInput | CloseFriendWhereInput[]
    OR?: CloseFriendWhereInput[]
    NOT?: CloseFriendWhereInput | CloseFriendWhereInput[]
    id?: StringFilter<"CloseFriend"> | string
    userId?: StringFilter<"CloseFriend"> | string
    friendId?: StringFilter<"CloseFriend"> | string
    createdAt?: DateTimeFilter<"CloseFriend"> | Date | string
  }

  export type CloseFriendOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type CloseFriendWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_friendId?: CloseFriendUserIdFriendIdCompoundUniqueInput
    AND?: CloseFriendWhereInput | CloseFriendWhereInput[]
    OR?: CloseFriendWhereInput[]
    NOT?: CloseFriendWhereInput | CloseFriendWhereInput[]
    userId?: StringFilter<"CloseFriend"> | string
    friendId?: StringFilter<"CloseFriend"> | string
    createdAt?: DateTimeFilter<"CloseFriend"> | Date | string
  }, "id" | "userId_friendId">

  export type CloseFriendOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    _count?: CloseFriendCountOrderByAggregateInput
    _max?: CloseFriendMaxOrderByAggregateInput
    _min?: CloseFriendMinOrderByAggregateInput
  }

  export type CloseFriendScalarWhereWithAggregatesInput = {
    AND?: CloseFriendScalarWhereWithAggregatesInput | CloseFriendScalarWhereWithAggregatesInput[]
    OR?: CloseFriendScalarWhereWithAggregatesInput[]
    NOT?: CloseFriendScalarWhereWithAggregatesInput | CloseFriendScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CloseFriend"> | string
    userId?: StringWithAggregatesFilter<"CloseFriend"> | string
    friendId?: StringWithAggregatesFilter<"CloseFriend"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CloseFriend"> | Date | string
  }

  export type PostCreateInput = {
    id?: string
    authorId: string
    content: string
    visibility?: $Enums.PostVisibility
    isPinned?: boolean
    sharedPostId?: string | null
    mediaCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    media?: PostMediaCreateNestedManyWithoutPostInput
    hashtags?: PostHashtagCreateNestedManyWithoutPostInput
    saves?: SavedPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    authorId: string
    content: string
    visibility?: $Enums.PostVisibility
    isPinned?: boolean
    sharedPostId?: string | null
    mediaCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    media?: PostMediaUncheckedCreateNestedManyWithoutPostInput
    hashtags?: PostHashtagUncheckedCreateNestedManyWithoutPostInput
    saves?: SavedPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: PostMediaUpdateManyWithoutPostNestedInput
    hashtags?: PostHashtagUpdateManyWithoutPostNestedInput
    saves?: SavedPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: PostMediaUncheckedUpdateManyWithoutPostNestedInput
    hashtags?: PostHashtagUncheckedUpdateManyWithoutPostNestedInput
    saves?: SavedPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    authorId: string
    content: string
    visibility?: $Enums.PostVisibility
    isPinned?: boolean
    sharedPostId?: string | null
    mediaCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostMediaCreateInput = {
    id?: string
    mediaId: string
    mediaType: string
    url: string
    orderIndex?: number
    post: PostCreateNestedOneWithoutMediaInput
  }

  export type PostMediaUncheckedCreateInput = {
    id?: string
    postId: string
    mediaId: string
    mediaType: string
    url: string
    orderIndex?: number
  }

  export type PostMediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    post?: PostUpdateOneRequiredWithoutMediaNestedInput
  }

  export type PostMediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type PostMediaCreateManyInput = {
    id?: string
    postId: string
    mediaId: string
    mediaType: string
    url: string
    orderIndex?: number
  }

  export type PostMediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type PostMediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type HashtagCreateInput = {
    id?: string
    tag: string
    postCount?: number
    lastUsedAt?: Date | string
    posts?: PostHashtagCreateNestedManyWithoutHashtagInput
  }

  export type HashtagUncheckedCreateInput = {
    id?: string
    tag: string
    postCount?: number
    lastUsedAt?: Date | string
    posts?: PostHashtagUncheckedCreateNestedManyWithoutHashtagInput
  }

  export type HashtagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    postCount?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostHashtagUpdateManyWithoutHashtagNestedInput
  }

  export type HashtagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    postCount?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostHashtagUncheckedUpdateManyWithoutHashtagNestedInput
  }

  export type HashtagCreateManyInput = {
    id?: string
    tag: string
    postCount?: number
    lastUsedAt?: Date | string
  }

  export type HashtagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    postCount?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    postCount?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostHashtagCreateInput = {
    post: PostCreateNestedOneWithoutHashtagsInput
    hashtag: HashtagCreateNestedOneWithoutPostsInput
  }

  export type PostHashtagUncheckedCreateInput = {
    postId: string
    hashtagId: string
  }

  export type PostHashtagUpdateInput = {
    post?: PostUpdateOneRequiredWithoutHashtagsNestedInput
    hashtag?: HashtagUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostHashtagUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    hashtagId?: StringFieldUpdateOperationsInput | string
  }

  export type PostHashtagCreateManyInput = {
    postId: string
    hashtagId: string
  }

  export type PostHashtagUpdateManyMutationInput = {

  }

  export type PostHashtagUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    hashtagId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedPostCreateInput = {
    id?: string
    userId: string
    savedAt?: Date | string
    post: PostCreateNestedOneWithoutSavesInput
  }

  export type SavedPostUncheckedCreateInput = {
    id?: string
    userId: string
    postId: string
    savedAt?: Date | string
  }

  export type SavedPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutSavesNestedInput
  }

  export type SavedPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostCreateManyInput = {
    id?: string
    userId: string
    postId: string
    savedAt?: Date | string
  }

  export type SavedPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryCreateInput = {
    id?: string
    authorId: string
    type?: $Enums.StoryType
    content?: string | null
    backgroundColor?: string | null
    fontStyle?: string | null
    visibility?: $Enums.StoryVisibility
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    deletedAt?: Date | string | null
    media?: StoryMediaCreateNestedManyWithoutStoryInput
    views?: StoryViewCreateNestedManyWithoutStoryInput
    reactions?: StoryReactionCreateNestedManyWithoutStoryInput
    audiences?: StoryAudienceCreateNestedManyWithoutStoryInput
  }

  export type StoryUncheckedCreateInput = {
    id?: string
    authorId: string
    type?: $Enums.StoryType
    content?: string | null
    backgroundColor?: string | null
    fontStyle?: string | null
    visibility?: $Enums.StoryVisibility
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    deletedAt?: Date | string | null
    media?: StoryMediaUncheckedCreateNestedManyWithoutStoryInput
    views?: StoryViewUncheckedCreateNestedManyWithoutStoryInput
    reactions?: StoryReactionUncheckedCreateNestedManyWithoutStoryInput
    audiences?: StoryAudienceUncheckedCreateNestedManyWithoutStoryInput
  }

  export type StoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    type?: EnumStoryTypeFieldUpdateOperationsInput | $Enums.StoryType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumStoryVisibilityFieldUpdateOperationsInput | $Enums.StoryVisibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: StoryMediaUpdateManyWithoutStoryNestedInput
    views?: StoryViewUpdateManyWithoutStoryNestedInput
    reactions?: StoryReactionUpdateManyWithoutStoryNestedInput
    audiences?: StoryAudienceUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    type?: EnumStoryTypeFieldUpdateOperationsInput | $Enums.StoryType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumStoryVisibilityFieldUpdateOperationsInput | $Enums.StoryVisibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: StoryMediaUncheckedUpdateManyWithoutStoryNestedInput
    views?: StoryViewUncheckedUpdateManyWithoutStoryNestedInput
    reactions?: StoryReactionUncheckedUpdateManyWithoutStoryNestedInput
    audiences?: StoryAudienceUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type StoryCreateManyInput = {
    id?: string
    authorId: string
    type?: $Enums.StoryType
    content?: string | null
    backgroundColor?: string | null
    fontStyle?: string | null
    visibility?: $Enums.StoryVisibility
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    deletedAt?: Date | string | null
  }

  export type StoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    type?: EnumStoryTypeFieldUpdateOperationsInput | $Enums.StoryType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumStoryVisibilityFieldUpdateOperationsInput | $Enums.StoryVisibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    type?: EnumStoryTypeFieldUpdateOperationsInput | $Enums.StoryType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumStoryVisibilityFieldUpdateOperationsInput | $Enums.StoryVisibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoryMediaCreateInput = {
    id?: string
    mediaType: string
    url: string
    mimeType?: string | null
    fileSize?: number | null
    duration?: number | null
    createdAt?: Date | string
    story: StoryCreateNestedOneWithoutMediaInput
  }

  export type StoryMediaUncheckedCreateInput = {
    id?: string
    storyId: string
    mediaType: string
    url: string
    mimeType?: string | null
    fileSize?: number | null
    duration?: number | null
    createdAt?: Date | string
  }

  export type StoryMediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    story?: StoryUpdateOneRequiredWithoutMediaNestedInput
  }

  export type StoryMediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storyId?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryMediaCreateManyInput = {
    id?: string
    storyId: string
    mediaType: string
    url: string
    mimeType?: string | null
    fileSize?: number | null
    duration?: number | null
    createdAt?: Date | string
  }

  export type StoryMediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryMediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storyId?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryViewCreateInput = {
    id?: string
    viewerId: string
    viewedAt?: Date | string
    story: StoryCreateNestedOneWithoutViewsInput
  }

  export type StoryViewUncheckedCreateInput = {
    id?: string
    storyId: string
    viewerId: string
    viewedAt?: Date | string
  }

  export type StoryViewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewerId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    story?: StoryUpdateOneRequiredWithoutViewsNestedInput
  }

  export type StoryViewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storyId?: StringFieldUpdateOperationsInput | string
    viewerId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryViewCreateManyInput = {
    id?: string
    storyId: string
    viewerId: string
    viewedAt?: Date | string
  }

  export type StoryViewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewerId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryViewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storyId?: StringFieldUpdateOperationsInput | string
    viewerId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryReactionCreateInput = {
    id?: string
    userId: string
    reactionType: string
    createdAt?: Date | string
    story: StoryCreateNestedOneWithoutReactionsInput
  }

  export type StoryReactionUncheckedCreateInput = {
    id?: string
    storyId: string
    userId: string
    reactionType: string
    createdAt?: Date | string
  }

  export type StoryReactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reactionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    story?: StoryUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type StoryReactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reactionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryReactionCreateManyInput = {
    id?: string
    storyId: string
    userId: string
    reactionType: string
    createdAt?: Date | string
  }

  export type StoryReactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reactionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryReactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reactionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryAudienceCreateInput = {
    id?: string
    userId: string
    type: string
    createdAt?: Date | string
    story: StoryCreateNestedOneWithoutAudiencesInput
  }

  export type StoryAudienceUncheckedCreateInput = {
    id?: string
    storyId: string
    userId: string
    type: string
    createdAt?: Date | string
  }

  export type StoryAudienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    story?: StoryUpdateOneRequiredWithoutAudiencesNestedInput
  }

  export type StoryAudienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryAudienceCreateManyInput = {
    id?: string
    storyId: string
    userId: string
    type: string
    createdAt?: Date | string
  }

  export type StoryAudienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryAudienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CloseFriendCreateInput = {
    id?: string
    userId: string
    friendId: string
    createdAt?: Date | string
  }

  export type CloseFriendUncheckedCreateInput = {
    id?: string
    userId: string
    friendId: string
    createdAt?: Date | string
  }

  export type CloseFriendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CloseFriendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CloseFriendCreateManyInput = {
    id?: string
    userId: string
    friendId: string
    createdAt?: Date | string
  }

  export type CloseFriendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CloseFriendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumPostVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.PostVisibility | EnumPostVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.PostVisibility[] | ListEnumPostVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostVisibility[] | ListEnumPostVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumPostVisibilityFilter<$PrismaModel> | $Enums.PostVisibility
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PostMediaListRelationFilter = {
    every?: PostMediaWhereInput
    some?: PostMediaWhereInput
    none?: PostMediaWhereInput
  }

  export type PostHashtagListRelationFilter = {
    every?: PostHashtagWhereInput
    some?: PostHashtagWhereInput
    none?: PostHashtagWhereInput
  }

  export type SavedPostListRelationFilter = {
    every?: SavedPostWhereInput
    some?: SavedPostWhereInput
    none?: SavedPostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostHashtagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    visibility?: SortOrder
    isPinned?: SortOrder
    sharedPostId?: SortOrder
    mediaCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    mediaCount?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    visibility?: SortOrder
    isPinned?: SortOrder
    sharedPostId?: SortOrder
    mediaCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    visibility?: SortOrder
    isPinned?: SortOrder
    sharedPostId?: SortOrder
    mediaCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    mediaCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumPostVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostVisibility | EnumPostVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.PostVisibility[] | ListEnumPostVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostVisibility[] | ListEnumPostVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumPostVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.PostVisibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostVisibilityFilter<$PrismaModel>
    _max?: NestedEnumPostVisibilityFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type PostMediaCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    mediaId?: SortOrder
    mediaType?: SortOrder
    url?: SortOrder
    orderIndex?: SortOrder
  }

  export type PostMediaAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type PostMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    mediaId?: SortOrder
    mediaType?: SortOrder
    url?: SortOrder
    orderIndex?: SortOrder
  }

  export type PostMediaMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    mediaId?: SortOrder
    mediaType?: SortOrder
    url?: SortOrder
    orderIndex?: SortOrder
  }

  export type PostMediaSumOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type HashtagCountOrderByAggregateInput = {
    id?: SortOrder
    tag?: SortOrder
    postCount?: SortOrder
    lastUsedAt?: SortOrder
  }

  export type HashtagAvgOrderByAggregateInput = {
    postCount?: SortOrder
  }

  export type HashtagMaxOrderByAggregateInput = {
    id?: SortOrder
    tag?: SortOrder
    postCount?: SortOrder
    lastUsedAt?: SortOrder
  }

  export type HashtagMinOrderByAggregateInput = {
    id?: SortOrder
    tag?: SortOrder
    postCount?: SortOrder
    lastUsedAt?: SortOrder
  }

  export type HashtagSumOrderByAggregateInput = {
    postCount?: SortOrder
  }

  export type HashtagRelationFilter = {
    is?: HashtagWhereInput
    isNot?: HashtagWhereInput
  }

  export type PostHashtagPostIdHashtagIdCompoundUniqueInput = {
    postId: string
    hashtagId: string
  }

  export type PostHashtagCountOrderByAggregateInput = {
    postId?: SortOrder
    hashtagId?: SortOrder
  }

  export type PostHashtagMaxOrderByAggregateInput = {
    postId?: SortOrder
    hashtagId?: SortOrder
  }

  export type PostHashtagMinOrderByAggregateInput = {
    postId?: SortOrder
    hashtagId?: SortOrder
  }

  export type SavedPostUserIdPostIdCompoundUniqueInput = {
    userId: string
    postId: string
  }

  export type SavedPostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedPostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedPostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    savedAt?: SortOrder
  }

  export type EnumStoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StoryType | EnumStoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StoryType[] | ListEnumStoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StoryType[] | ListEnumStoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStoryTypeFilter<$PrismaModel> | $Enums.StoryType
  }

  export type EnumStoryVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.StoryVisibility | EnumStoryVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.StoryVisibility[] | ListEnumStoryVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.StoryVisibility[] | ListEnumStoryVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumStoryVisibilityFilter<$PrismaModel> | $Enums.StoryVisibility
  }

  export type StoryMediaListRelationFilter = {
    every?: StoryMediaWhereInput
    some?: StoryMediaWhereInput
    none?: StoryMediaWhereInput
  }

  export type StoryViewListRelationFilter = {
    every?: StoryViewWhereInput
    some?: StoryViewWhereInput
    none?: StoryViewWhereInput
  }

  export type StoryReactionListRelationFilter = {
    every?: StoryReactionWhereInput
    some?: StoryReactionWhereInput
    none?: StoryReactionWhereInput
  }

  export type StoryAudienceListRelationFilter = {
    every?: StoryAudienceWhereInput
    some?: StoryAudienceWhereInput
    none?: StoryAudienceWhereInput
  }

  export type StoryMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoryViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoryReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoryAudienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoryCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    backgroundColor?: SortOrder
    fontStyle?: SortOrder
    visibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StoryMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    backgroundColor?: SortOrder
    fontStyle?: SortOrder
    visibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StoryMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    backgroundColor?: SortOrder
    fontStyle?: SortOrder
    visibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumStoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StoryType | EnumStoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StoryType[] | ListEnumStoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StoryType[] | ListEnumStoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.StoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStoryTypeFilter<$PrismaModel>
    _max?: NestedEnumStoryTypeFilter<$PrismaModel>
  }

  export type EnumStoryVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StoryVisibility | EnumStoryVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.StoryVisibility[] | ListEnumStoryVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.StoryVisibility[] | ListEnumStoryVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumStoryVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.StoryVisibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStoryVisibilityFilter<$PrismaModel>
    _max?: NestedEnumStoryVisibilityFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StoryRelationFilter = {
    is?: StoryWhereInput
    isNot?: StoryWhereInput
  }

  export type StoryMediaCountOrderByAggregateInput = {
    id?: SortOrder
    storyId?: SortOrder
    mediaType?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type StoryMediaAvgOrderByAggregateInput = {
    fileSize?: SortOrder
    duration?: SortOrder
  }

  export type StoryMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    storyId?: SortOrder
    mediaType?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type StoryMediaMinOrderByAggregateInput = {
    id?: SortOrder
    storyId?: SortOrder
    mediaType?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type StoryMediaSumOrderByAggregateInput = {
    fileSize?: SortOrder
    duration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StoryViewStoryIdViewerIdCompoundUniqueInput = {
    storyId: string
    viewerId: string
  }

  export type StoryViewCountOrderByAggregateInput = {
    id?: SortOrder
    storyId?: SortOrder
    viewerId?: SortOrder
    viewedAt?: SortOrder
  }

  export type StoryViewMaxOrderByAggregateInput = {
    id?: SortOrder
    storyId?: SortOrder
    viewerId?: SortOrder
    viewedAt?: SortOrder
  }

  export type StoryViewMinOrderByAggregateInput = {
    id?: SortOrder
    storyId?: SortOrder
    viewerId?: SortOrder
    viewedAt?: SortOrder
  }

  export type StoryReactionStoryIdUserIdCompoundUniqueInput = {
    storyId: string
    userId: string
  }

  export type StoryReactionCountOrderByAggregateInput = {
    id?: SortOrder
    storyId?: SortOrder
    userId?: SortOrder
    reactionType?: SortOrder
    createdAt?: SortOrder
  }

  export type StoryReactionMaxOrderByAggregateInput = {
    id?: SortOrder
    storyId?: SortOrder
    userId?: SortOrder
    reactionType?: SortOrder
    createdAt?: SortOrder
  }

  export type StoryReactionMinOrderByAggregateInput = {
    id?: SortOrder
    storyId?: SortOrder
    userId?: SortOrder
    reactionType?: SortOrder
    createdAt?: SortOrder
  }

  export type StoryAudienceStoryIdUserIdTypeCompoundUniqueInput = {
    storyId: string
    userId: string
    type: string
  }

  export type StoryAudienceCountOrderByAggregateInput = {
    id?: SortOrder
    storyId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type StoryAudienceMaxOrderByAggregateInput = {
    id?: SortOrder
    storyId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type StoryAudienceMinOrderByAggregateInput = {
    id?: SortOrder
    storyId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type CloseFriendUserIdFriendIdCompoundUniqueInput = {
    userId: string
    friendId: string
  }

  export type CloseFriendCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type CloseFriendMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type CloseFriendMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostMediaCreateNestedManyWithoutPostInput = {
    create?: XOR<PostMediaCreateWithoutPostInput, PostMediaUncheckedCreateWithoutPostInput> | PostMediaCreateWithoutPostInput[] | PostMediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostMediaCreateOrConnectWithoutPostInput | PostMediaCreateOrConnectWithoutPostInput[]
    createMany?: PostMediaCreateManyPostInputEnvelope
    connect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
  }

  export type PostHashtagCreateNestedManyWithoutPostInput = {
    create?: XOR<PostHashtagCreateWithoutPostInput, PostHashtagUncheckedCreateWithoutPostInput> | PostHashtagCreateWithoutPostInput[] | PostHashtagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostHashtagCreateOrConnectWithoutPostInput | PostHashtagCreateOrConnectWithoutPostInput[]
    createMany?: PostHashtagCreateManyPostInputEnvelope
    connect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
  }

  export type SavedPostCreateNestedManyWithoutPostInput = {
    create?: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput> | SavedPostCreateWithoutPostInput[] | SavedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostInput | SavedPostCreateOrConnectWithoutPostInput[]
    createMany?: SavedPostCreateManyPostInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type PostMediaUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostMediaCreateWithoutPostInput, PostMediaUncheckedCreateWithoutPostInput> | PostMediaCreateWithoutPostInput[] | PostMediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostMediaCreateOrConnectWithoutPostInput | PostMediaCreateOrConnectWithoutPostInput[]
    createMany?: PostMediaCreateManyPostInputEnvelope
    connect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
  }

  export type PostHashtagUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostHashtagCreateWithoutPostInput, PostHashtagUncheckedCreateWithoutPostInput> | PostHashtagCreateWithoutPostInput[] | PostHashtagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostHashtagCreateOrConnectWithoutPostInput | PostHashtagCreateOrConnectWithoutPostInput[]
    createMany?: PostHashtagCreateManyPostInputEnvelope
    connect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
  }

  export type SavedPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput> | SavedPostCreateWithoutPostInput[] | SavedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostInput | SavedPostCreateOrConnectWithoutPostInput[]
    createMany?: SavedPostCreateManyPostInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPostVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.PostVisibility
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PostMediaUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostMediaCreateWithoutPostInput, PostMediaUncheckedCreateWithoutPostInput> | PostMediaCreateWithoutPostInput[] | PostMediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostMediaCreateOrConnectWithoutPostInput | PostMediaCreateOrConnectWithoutPostInput[]
    upsert?: PostMediaUpsertWithWhereUniqueWithoutPostInput | PostMediaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostMediaCreateManyPostInputEnvelope
    set?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    disconnect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    delete?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    connect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    update?: PostMediaUpdateWithWhereUniqueWithoutPostInput | PostMediaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostMediaUpdateManyWithWhereWithoutPostInput | PostMediaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostMediaScalarWhereInput | PostMediaScalarWhereInput[]
  }

  export type PostHashtagUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostHashtagCreateWithoutPostInput, PostHashtagUncheckedCreateWithoutPostInput> | PostHashtagCreateWithoutPostInput[] | PostHashtagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostHashtagCreateOrConnectWithoutPostInput | PostHashtagCreateOrConnectWithoutPostInput[]
    upsert?: PostHashtagUpsertWithWhereUniqueWithoutPostInput | PostHashtagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostHashtagCreateManyPostInputEnvelope
    set?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    disconnect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    delete?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    connect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    update?: PostHashtagUpdateWithWhereUniqueWithoutPostInput | PostHashtagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostHashtagUpdateManyWithWhereWithoutPostInput | PostHashtagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostHashtagScalarWhereInput | PostHashtagScalarWhereInput[]
  }

  export type SavedPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput> | SavedPostCreateWithoutPostInput[] | SavedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostInput | SavedPostCreateOrConnectWithoutPostInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutPostInput | SavedPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SavedPostCreateManyPostInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutPostInput | SavedPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutPostInput | SavedPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type PostMediaUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostMediaCreateWithoutPostInput, PostMediaUncheckedCreateWithoutPostInput> | PostMediaCreateWithoutPostInput[] | PostMediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostMediaCreateOrConnectWithoutPostInput | PostMediaCreateOrConnectWithoutPostInput[]
    upsert?: PostMediaUpsertWithWhereUniqueWithoutPostInput | PostMediaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostMediaCreateManyPostInputEnvelope
    set?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    disconnect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    delete?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    connect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    update?: PostMediaUpdateWithWhereUniqueWithoutPostInput | PostMediaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostMediaUpdateManyWithWhereWithoutPostInput | PostMediaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostMediaScalarWhereInput | PostMediaScalarWhereInput[]
  }

  export type PostHashtagUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostHashtagCreateWithoutPostInput, PostHashtagUncheckedCreateWithoutPostInput> | PostHashtagCreateWithoutPostInput[] | PostHashtagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostHashtagCreateOrConnectWithoutPostInput | PostHashtagCreateOrConnectWithoutPostInput[]
    upsert?: PostHashtagUpsertWithWhereUniqueWithoutPostInput | PostHashtagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostHashtagCreateManyPostInputEnvelope
    set?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    disconnect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    delete?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    connect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    update?: PostHashtagUpdateWithWhereUniqueWithoutPostInput | PostHashtagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostHashtagUpdateManyWithWhereWithoutPostInput | PostHashtagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostHashtagScalarWhereInput | PostHashtagScalarWhereInput[]
  }

  export type SavedPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput> | SavedPostCreateWithoutPostInput[] | SavedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostInput | SavedPostCreateOrConnectWithoutPostInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutPostInput | SavedPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SavedPostCreateManyPostInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutPostInput | SavedPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutPostInput | SavedPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutMediaInput = {
    create?: XOR<PostCreateWithoutMediaInput, PostUncheckedCreateWithoutMediaInput>
    connectOrCreate?: PostCreateOrConnectWithoutMediaInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<PostCreateWithoutMediaInput, PostUncheckedCreateWithoutMediaInput>
    connectOrCreate?: PostCreateOrConnectWithoutMediaInput
    upsert?: PostUpsertWithoutMediaInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutMediaInput, PostUpdateWithoutMediaInput>, PostUncheckedUpdateWithoutMediaInput>
  }

  export type PostHashtagCreateNestedManyWithoutHashtagInput = {
    create?: XOR<PostHashtagCreateWithoutHashtagInput, PostHashtagUncheckedCreateWithoutHashtagInput> | PostHashtagCreateWithoutHashtagInput[] | PostHashtagUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: PostHashtagCreateOrConnectWithoutHashtagInput | PostHashtagCreateOrConnectWithoutHashtagInput[]
    createMany?: PostHashtagCreateManyHashtagInputEnvelope
    connect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
  }

  export type PostHashtagUncheckedCreateNestedManyWithoutHashtagInput = {
    create?: XOR<PostHashtagCreateWithoutHashtagInput, PostHashtagUncheckedCreateWithoutHashtagInput> | PostHashtagCreateWithoutHashtagInput[] | PostHashtagUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: PostHashtagCreateOrConnectWithoutHashtagInput | PostHashtagCreateOrConnectWithoutHashtagInput[]
    createMany?: PostHashtagCreateManyHashtagInputEnvelope
    connect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
  }

  export type PostHashtagUpdateManyWithoutHashtagNestedInput = {
    create?: XOR<PostHashtagCreateWithoutHashtagInput, PostHashtagUncheckedCreateWithoutHashtagInput> | PostHashtagCreateWithoutHashtagInput[] | PostHashtagUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: PostHashtagCreateOrConnectWithoutHashtagInput | PostHashtagCreateOrConnectWithoutHashtagInput[]
    upsert?: PostHashtagUpsertWithWhereUniqueWithoutHashtagInput | PostHashtagUpsertWithWhereUniqueWithoutHashtagInput[]
    createMany?: PostHashtagCreateManyHashtagInputEnvelope
    set?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    disconnect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    delete?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    connect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    update?: PostHashtagUpdateWithWhereUniqueWithoutHashtagInput | PostHashtagUpdateWithWhereUniqueWithoutHashtagInput[]
    updateMany?: PostHashtagUpdateManyWithWhereWithoutHashtagInput | PostHashtagUpdateManyWithWhereWithoutHashtagInput[]
    deleteMany?: PostHashtagScalarWhereInput | PostHashtagScalarWhereInput[]
  }

  export type PostHashtagUncheckedUpdateManyWithoutHashtagNestedInput = {
    create?: XOR<PostHashtagCreateWithoutHashtagInput, PostHashtagUncheckedCreateWithoutHashtagInput> | PostHashtagCreateWithoutHashtagInput[] | PostHashtagUncheckedCreateWithoutHashtagInput[]
    connectOrCreate?: PostHashtagCreateOrConnectWithoutHashtagInput | PostHashtagCreateOrConnectWithoutHashtagInput[]
    upsert?: PostHashtagUpsertWithWhereUniqueWithoutHashtagInput | PostHashtagUpsertWithWhereUniqueWithoutHashtagInput[]
    createMany?: PostHashtagCreateManyHashtagInputEnvelope
    set?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    disconnect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    delete?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    connect?: PostHashtagWhereUniqueInput | PostHashtagWhereUniqueInput[]
    update?: PostHashtagUpdateWithWhereUniqueWithoutHashtagInput | PostHashtagUpdateWithWhereUniqueWithoutHashtagInput[]
    updateMany?: PostHashtagUpdateManyWithWhereWithoutHashtagInput | PostHashtagUpdateManyWithWhereWithoutHashtagInput[]
    deleteMany?: PostHashtagScalarWhereInput | PostHashtagScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutHashtagsInput = {
    create?: XOR<PostCreateWithoutHashtagsInput, PostUncheckedCreateWithoutHashtagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutHashtagsInput
    connect?: PostWhereUniqueInput
  }

  export type HashtagCreateNestedOneWithoutPostsInput = {
    create?: XOR<HashtagCreateWithoutPostsInput, HashtagUncheckedCreateWithoutPostsInput>
    connectOrCreate?: HashtagCreateOrConnectWithoutPostsInput
    connect?: HashtagWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutHashtagsNestedInput = {
    create?: XOR<PostCreateWithoutHashtagsInput, PostUncheckedCreateWithoutHashtagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutHashtagsInput
    upsert?: PostUpsertWithoutHashtagsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutHashtagsInput, PostUpdateWithoutHashtagsInput>, PostUncheckedUpdateWithoutHashtagsInput>
  }

  export type HashtagUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<HashtagCreateWithoutPostsInput, HashtagUncheckedCreateWithoutPostsInput>
    connectOrCreate?: HashtagCreateOrConnectWithoutPostsInput
    upsert?: HashtagUpsertWithoutPostsInput
    connect?: HashtagWhereUniqueInput
    update?: XOR<XOR<HashtagUpdateToOneWithWhereWithoutPostsInput, HashtagUpdateWithoutPostsInput>, HashtagUncheckedUpdateWithoutPostsInput>
  }

  export type PostCreateNestedOneWithoutSavesInput = {
    create?: XOR<PostCreateWithoutSavesInput, PostUncheckedCreateWithoutSavesInput>
    connectOrCreate?: PostCreateOrConnectWithoutSavesInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutSavesNestedInput = {
    create?: XOR<PostCreateWithoutSavesInput, PostUncheckedCreateWithoutSavesInput>
    connectOrCreate?: PostCreateOrConnectWithoutSavesInput
    upsert?: PostUpsertWithoutSavesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutSavesInput, PostUpdateWithoutSavesInput>, PostUncheckedUpdateWithoutSavesInput>
  }

  export type StoryMediaCreateNestedManyWithoutStoryInput = {
    create?: XOR<StoryMediaCreateWithoutStoryInput, StoryMediaUncheckedCreateWithoutStoryInput> | StoryMediaCreateWithoutStoryInput[] | StoryMediaUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryMediaCreateOrConnectWithoutStoryInput | StoryMediaCreateOrConnectWithoutStoryInput[]
    createMany?: StoryMediaCreateManyStoryInputEnvelope
    connect?: StoryMediaWhereUniqueInput | StoryMediaWhereUniqueInput[]
  }

  export type StoryViewCreateNestedManyWithoutStoryInput = {
    create?: XOR<StoryViewCreateWithoutStoryInput, StoryViewUncheckedCreateWithoutStoryInput> | StoryViewCreateWithoutStoryInput[] | StoryViewUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryViewCreateOrConnectWithoutStoryInput | StoryViewCreateOrConnectWithoutStoryInput[]
    createMany?: StoryViewCreateManyStoryInputEnvelope
    connect?: StoryViewWhereUniqueInput | StoryViewWhereUniqueInput[]
  }

  export type StoryReactionCreateNestedManyWithoutStoryInput = {
    create?: XOR<StoryReactionCreateWithoutStoryInput, StoryReactionUncheckedCreateWithoutStoryInput> | StoryReactionCreateWithoutStoryInput[] | StoryReactionUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryReactionCreateOrConnectWithoutStoryInput | StoryReactionCreateOrConnectWithoutStoryInput[]
    createMany?: StoryReactionCreateManyStoryInputEnvelope
    connect?: StoryReactionWhereUniqueInput | StoryReactionWhereUniqueInput[]
  }

  export type StoryAudienceCreateNestedManyWithoutStoryInput = {
    create?: XOR<StoryAudienceCreateWithoutStoryInput, StoryAudienceUncheckedCreateWithoutStoryInput> | StoryAudienceCreateWithoutStoryInput[] | StoryAudienceUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryAudienceCreateOrConnectWithoutStoryInput | StoryAudienceCreateOrConnectWithoutStoryInput[]
    createMany?: StoryAudienceCreateManyStoryInputEnvelope
    connect?: StoryAudienceWhereUniqueInput | StoryAudienceWhereUniqueInput[]
  }

  export type StoryMediaUncheckedCreateNestedManyWithoutStoryInput = {
    create?: XOR<StoryMediaCreateWithoutStoryInput, StoryMediaUncheckedCreateWithoutStoryInput> | StoryMediaCreateWithoutStoryInput[] | StoryMediaUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryMediaCreateOrConnectWithoutStoryInput | StoryMediaCreateOrConnectWithoutStoryInput[]
    createMany?: StoryMediaCreateManyStoryInputEnvelope
    connect?: StoryMediaWhereUniqueInput | StoryMediaWhereUniqueInput[]
  }

  export type StoryViewUncheckedCreateNestedManyWithoutStoryInput = {
    create?: XOR<StoryViewCreateWithoutStoryInput, StoryViewUncheckedCreateWithoutStoryInput> | StoryViewCreateWithoutStoryInput[] | StoryViewUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryViewCreateOrConnectWithoutStoryInput | StoryViewCreateOrConnectWithoutStoryInput[]
    createMany?: StoryViewCreateManyStoryInputEnvelope
    connect?: StoryViewWhereUniqueInput | StoryViewWhereUniqueInput[]
  }

  export type StoryReactionUncheckedCreateNestedManyWithoutStoryInput = {
    create?: XOR<StoryReactionCreateWithoutStoryInput, StoryReactionUncheckedCreateWithoutStoryInput> | StoryReactionCreateWithoutStoryInput[] | StoryReactionUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryReactionCreateOrConnectWithoutStoryInput | StoryReactionCreateOrConnectWithoutStoryInput[]
    createMany?: StoryReactionCreateManyStoryInputEnvelope
    connect?: StoryReactionWhereUniqueInput | StoryReactionWhereUniqueInput[]
  }

  export type StoryAudienceUncheckedCreateNestedManyWithoutStoryInput = {
    create?: XOR<StoryAudienceCreateWithoutStoryInput, StoryAudienceUncheckedCreateWithoutStoryInput> | StoryAudienceCreateWithoutStoryInput[] | StoryAudienceUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryAudienceCreateOrConnectWithoutStoryInput | StoryAudienceCreateOrConnectWithoutStoryInput[]
    createMany?: StoryAudienceCreateManyStoryInputEnvelope
    connect?: StoryAudienceWhereUniqueInput | StoryAudienceWhereUniqueInput[]
  }

  export type EnumStoryTypeFieldUpdateOperationsInput = {
    set?: $Enums.StoryType
  }

  export type EnumStoryVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.StoryVisibility
  }

  export type StoryMediaUpdateManyWithoutStoryNestedInput = {
    create?: XOR<StoryMediaCreateWithoutStoryInput, StoryMediaUncheckedCreateWithoutStoryInput> | StoryMediaCreateWithoutStoryInput[] | StoryMediaUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryMediaCreateOrConnectWithoutStoryInput | StoryMediaCreateOrConnectWithoutStoryInput[]
    upsert?: StoryMediaUpsertWithWhereUniqueWithoutStoryInput | StoryMediaUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: StoryMediaCreateManyStoryInputEnvelope
    set?: StoryMediaWhereUniqueInput | StoryMediaWhereUniqueInput[]
    disconnect?: StoryMediaWhereUniqueInput | StoryMediaWhereUniqueInput[]
    delete?: StoryMediaWhereUniqueInput | StoryMediaWhereUniqueInput[]
    connect?: StoryMediaWhereUniqueInput | StoryMediaWhereUniqueInput[]
    update?: StoryMediaUpdateWithWhereUniqueWithoutStoryInput | StoryMediaUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: StoryMediaUpdateManyWithWhereWithoutStoryInput | StoryMediaUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: StoryMediaScalarWhereInput | StoryMediaScalarWhereInput[]
  }

  export type StoryViewUpdateManyWithoutStoryNestedInput = {
    create?: XOR<StoryViewCreateWithoutStoryInput, StoryViewUncheckedCreateWithoutStoryInput> | StoryViewCreateWithoutStoryInput[] | StoryViewUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryViewCreateOrConnectWithoutStoryInput | StoryViewCreateOrConnectWithoutStoryInput[]
    upsert?: StoryViewUpsertWithWhereUniqueWithoutStoryInput | StoryViewUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: StoryViewCreateManyStoryInputEnvelope
    set?: StoryViewWhereUniqueInput | StoryViewWhereUniqueInput[]
    disconnect?: StoryViewWhereUniqueInput | StoryViewWhereUniqueInput[]
    delete?: StoryViewWhereUniqueInput | StoryViewWhereUniqueInput[]
    connect?: StoryViewWhereUniqueInput | StoryViewWhereUniqueInput[]
    update?: StoryViewUpdateWithWhereUniqueWithoutStoryInput | StoryViewUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: StoryViewUpdateManyWithWhereWithoutStoryInput | StoryViewUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: StoryViewScalarWhereInput | StoryViewScalarWhereInput[]
  }

  export type StoryReactionUpdateManyWithoutStoryNestedInput = {
    create?: XOR<StoryReactionCreateWithoutStoryInput, StoryReactionUncheckedCreateWithoutStoryInput> | StoryReactionCreateWithoutStoryInput[] | StoryReactionUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryReactionCreateOrConnectWithoutStoryInput | StoryReactionCreateOrConnectWithoutStoryInput[]
    upsert?: StoryReactionUpsertWithWhereUniqueWithoutStoryInput | StoryReactionUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: StoryReactionCreateManyStoryInputEnvelope
    set?: StoryReactionWhereUniqueInput | StoryReactionWhereUniqueInput[]
    disconnect?: StoryReactionWhereUniqueInput | StoryReactionWhereUniqueInput[]
    delete?: StoryReactionWhereUniqueInput | StoryReactionWhereUniqueInput[]
    connect?: StoryReactionWhereUniqueInput | StoryReactionWhereUniqueInput[]
    update?: StoryReactionUpdateWithWhereUniqueWithoutStoryInput | StoryReactionUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: StoryReactionUpdateManyWithWhereWithoutStoryInput | StoryReactionUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: StoryReactionScalarWhereInput | StoryReactionScalarWhereInput[]
  }

  export type StoryAudienceUpdateManyWithoutStoryNestedInput = {
    create?: XOR<StoryAudienceCreateWithoutStoryInput, StoryAudienceUncheckedCreateWithoutStoryInput> | StoryAudienceCreateWithoutStoryInput[] | StoryAudienceUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryAudienceCreateOrConnectWithoutStoryInput | StoryAudienceCreateOrConnectWithoutStoryInput[]
    upsert?: StoryAudienceUpsertWithWhereUniqueWithoutStoryInput | StoryAudienceUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: StoryAudienceCreateManyStoryInputEnvelope
    set?: StoryAudienceWhereUniqueInput | StoryAudienceWhereUniqueInput[]
    disconnect?: StoryAudienceWhereUniqueInput | StoryAudienceWhereUniqueInput[]
    delete?: StoryAudienceWhereUniqueInput | StoryAudienceWhereUniqueInput[]
    connect?: StoryAudienceWhereUniqueInput | StoryAudienceWhereUniqueInput[]
    update?: StoryAudienceUpdateWithWhereUniqueWithoutStoryInput | StoryAudienceUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: StoryAudienceUpdateManyWithWhereWithoutStoryInput | StoryAudienceUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: StoryAudienceScalarWhereInput | StoryAudienceScalarWhereInput[]
  }

  export type StoryMediaUncheckedUpdateManyWithoutStoryNestedInput = {
    create?: XOR<StoryMediaCreateWithoutStoryInput, StoryMediaUncheckedCreateWithoutStoryInput> | StoryMediaCreateWithoutStoryInput[] | StoryMediaUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryMediaCreateOrConnectWithoutStoryInput | StoryMediaCreateOrConnectWithoutStoryInput[]
    upsert?: StoryMediaUpsertWithWhereUniqueWithoutStoryInput | StoryMediaUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: StoryMediaCreateManyStoryInputEnvelope
    set?: StoryMediaWhereUniqueInput | StoryMediaWhereUniqueInput[]
    disconnect?: StoryMediaWhereUniqueInput | StoryMediaWhereUniqueInput[]
    delete?: StoryMediaWhereUniqueInput | StoryMediaWhereUniqueInput[]
    connect?: StoryMediaWhereUniqueInput | StoryMediaWhereUniqueInput[]
    update?: StoryMediaUpdateWithWhereUniqueWithoutStoryInput | StoryMediaUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: StoryMediaUpdateManyWithWhereWithoutStoryInput | StoryMediaUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: StoryMediaScalarWhereInput | StoryMediaScalarWhereInput[]
  }

  export type StoryViewUncheckedUpdateManyWithoutStoryNestedInput = {
    create?: XOR<StoryViewCreateWithoutStoryInput, StoryViewUncheckedCreateWithoutStoryInput> | StoryViewCreateWithoutStoryInput[] | StoryViewUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryViewCreateOrConnectWithoutStoryInput | StoryViewCreateOrConnectWithoutStoryInput[]
    upsert?: StoryViewUpsertWithWhereUniqueWithoutStoryInput | StoryViewUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: StoryViewCreateManyStoryInputEnvelope
    set?: StoryViewWhereUniqueInput | StoryViewWhereUniqueInput[]
    disconnect?: StoryViewWhereUniqueInput | StoryViewWhereUniqueInput[]
    delete?: StoryViewWhereUniqueInput | StoryViewWhereUniqueInput[]
    connect?: StoryViewWhereUniqueInput | StoryViewWhereUniqueInput[]
    update?: StoryViewUpdateWithWhereUniqueWithoutStoryInput | StoryViewUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: StoryViewUpdateManyWithWhereWithoutStoryInput | StoryViewUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: StoryViewScalarWhereInput | StoryViewScalarWhereInput[]
  }

  export type StoryReactionUncheckedUpdateManyWithoutStoryNestedInput = {
    create?: XOR<StoryReactionCreateWithoutStoryInput, StoryReactionUncheckedCreateWithoutStoryInput> | StoryReactionCreateWithoutStoryInput[] | StoryReactionUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryReactionCreateOrConnectWithoutStoryInput | StoryReactionCreateOrConnectWithoutStoryInput[]
    upsert?: StoryReactionUpsertWithWhereUniqueWithoutStoryInput | StoryReactionUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: StoryReactionCreateManyStoryInputEnvelope
    set?: StoryReactionWhereUniqueInput | StoryReactionWhereUniqueInput[]
    disconnect?: StoryReactionWhereUniqueInput | StoryReactionWhereUniqueInput[]
    delete?: StoryReactionWhereUniqueInput | StoryReactionWhereUniqueInput[]
    connect?: StoryReactionWhereUniqueInput | StoryReactionWhereUniqueInput[]
    update?: StoryReactionUpdateWithWhereUniqueWithoutStoryInput | StoryReactionUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: StoryReactionUpdateManyWithWhereWithoutStoryInput | StoryReactionUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: StoryReactionScalarWhereInput | StoryReactionScalarWhereInput[]
  }

  export type StoryAudienceUncheckedUpdateManyWithoutStoryNestedInput = {
    create?: XOR<StoryAudienceCreateWithoutStoryInput, StoryAudienceUncheckedCreateWithoutStoryInput> | StoryAudienceCreateWithoutStoryInput[] | StoryAudienceUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryAudienceCreateOrConnectWithoutStoryInput | StoryAudienceCreateOrConnectWithoutStoryInput[]
    upsert?: StoryAudienceUpsertWithWhereUniqueWithoutStoryInput | StoryAudienceUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: StoryAudienceCreateManyStoryInputEnvelope
    set?: StoryAudienceWhereUniqueInput | StoryAudienceWhereUniqueInput[]
    disconnect?: StoryAudienceWhereUniqueInput | StoryAudienceWhereUniqueInput[]
    delete?: StoryAudienceWhereUniqueInput | StoryAudienceWhereUniqueInput[]
    connect?: StoryAudienceWhereUniqueInput | StoryAudienceWhereUniqueInput[]
    update?: StoryAudienceUpdateWithWhereUniqueWithoutStoryInput | StoryAudienceUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: StoryAudienceUpdateManyWithWhereWithoutStoryInput | StoryAudienceUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: StoryAudienceScalarWhereInput | StoryAudienceScalarWhereInput[]
  }

  export type StoryCreateNestedOneWithoutMediaInput = {
    create?: XOR<StoryCreateWithoutMediaInput, StoryUncheckedCreateWithoutMediaInput>
    connectOrCreate?: StoryCreateOrConnectWithoutMediaInput
    connect?: StoryWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StoryUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<StoryCreateWithoutMediaInput, StoryUncheckedCreateWithoutMediaInput>
    connectOrCreate?: StoryCreateOrConnectWithoutMediaInput
    upsert?: StoryUpsertWithoutMediaInput
    connect?: StoryWhereUniqueInput
    update?: XOR<XOR<StoryUpdateToOneWithWhereWithoutMediaInput, StoryUpdateWithoutMediaInput>, StoryUncheckedUpdateWithoutMediaInput>
  }

  export type StoryCreateNestedOneWithoutViewsInput = {
    create?: XOR<StoryCreateWithoutViewsInput, StoryUncheckedCreateWithoutViewsInput>
    connectOrCreate?: StoryCreateOrConnectWithoutViewsInput
    connect?: StoryWhereUniqueInput
  }

  export type StoryUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<StoryCreateWithoutViewsInput, StoryUncheckedCreateWithoutViewsInput>
    connectOrCreate?: StoryCreateOrConnectWithoutViewsInput
    upsert?: StoryUpsertWithoutViewsInput
    connect?: StoryWhereUniqueInput
    update?: XOR<XOR<StoryUpdateToOneWithWhereWithoutViewsInput, StoryUpdateWithoutViewsInput>, StoryUncheckedUpdateWithoutViewsInput>
  }

  export type StoryCreateNestedOneWithoutReactionsInput = {
    create?: XOR<StoryCreateWithoutReactionsInput, StoryUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: StoryCreateOrConnectWithoutReactionsInput
    connect?: StoryWhereUniqueInput
  }

  export type StoryUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<StoryCreateWithoutReactionsInput, StoryUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: StoryCreateOrConnectWithoutReactionsInput
    upsert?: StoryUpsertWithoutReactionsInput
    connect?: StoryWhereUniqueInput
    update?: XOR<XOR<StoryUpdateToOneWithWhereWithoutReactionsInput, StoryUpdateWithoutReactionsInput>, StoryUncheckedUpdateWithoutReactionsInput>
  }

  export type StoryCreateNestedOneWithoutAudiencesInput = {
    create?: XOR<StoryCreateWithoutAudiencesInput, StoryUncheckedCreateWithoutAudiencesInput>
    connectOrCreate?: StoryCreateOrConnectWithoutAudiencesInput
    connect?: StoryWhereUniqueInput
  }

  export type StoryUpdateOneRequiredWithoutAudiencesNestedInput = {
    create?: XOR<StoryCreateWithoutAudiencesInput, StoryUncheckedCreateWithoutAudiencesInput>
    connectOrCreate?: StoryCreateOrConnectWithoutAudiencesInput
    upsert?: StoryUpsertWithoutAudiencesInput
    connect?: StoryWhereUniqueInput
    update?: XOR<XOR<StoryUpdateToOneWithWhereWithoutAudiencesInput, StoryUpdateWithoutAudiencesInput>, StoryUncheckedUpdateWithoutAudiencesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumPostVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.PostVisibility | EnumPostVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.PostVisibility[] | ListEnumPostVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostVisibility[] | ListEnumPostVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumPostVisibilityFilter<$PrismaModel> | $Enums.PostVisibility
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumPostVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostVisibility | EnumPostVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.PostVisibility[] | ListEnumPostVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostVisibility[] | ListEnumPostVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumPostVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.PostVisibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostVisibilityFilter<$PrismaModel>
    _max?: NestedEnumPostVisibilityFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StoryType | EnumStoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StoryType[] | ListEnumStoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StoryType[] | ListEnumStoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStoryTypeFilter<$PrismaModel> | $Enums.StoryType
  }

  export type NestedEnumStoryVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.StoryVisibility | EnumStoryVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.StoryVisibility[] | ListEnumStoryVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.StoryVisibility[] | ListEnumStoryVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumStoryVisibilityFilter<$PrismaModel> | $Enums.StoryVisibility
  }

  export type NestedEnumStoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StoryType | EnumStoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StoryType[] | ListEnumStoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StoryType[] | ListEnumStoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.StoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStoryTypeFilter<$PrismaModel>
    _max?: NestedEnumStoryTypeFilter<$PrismaModel>
  }

  export type NestedEnumStoryVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StoryVisibility | EnumStoryVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.StoryVisibility[] | ListEnumStoryVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.StoryVisibility[] | ListEnumStoryVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumStoryVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.StoryVisibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStoryVisibilityFilter<$PrismaModel>
    _max?: NestedEnumStoryVisibilityFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type PostMediaCreateWithoutPostInput = {
    id?: string
    mediaId: string
    mediaType: string
    url: string
    orderIndex?: number
  }

  export type PostMediaUncheckedCreateWithoutPostInput = {
    id?: string
    mediaId: string
    mediaType: string
    url: string
    orderIndex?: number
  }

  export type PostMediaCreateOrConnectWithoutPostInput = {
    where: PostMediaWhereUniqueInput
    create: XOR<PostMediaCreateWithoutPostInput, PostMediaUncheckedCreateWithoutPostInput>
  }

  export type PostMediaCreateManyPostInputEnvelope = {
    data: PostMediaCreateManyPostInput | PostMediaCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostHashtagCreateWithoutPostInput = {
    hashtag: HashtagCreateNestedOneWithoutPostsInput
  }

  export type PostHashtagUncheckedCreateWithoutPostInput = {
    hashtagId: string
  }

  export type PostHashtagCreateOrConnectWithoutPostInput = {
    where: PostHashtagWhereUniqueInput
    create: XOR<PostHashtagCreateWithoutPostInput, PostHashtagUncheckedCreateWithoutPostInput>
  }

  export type PostHashtagCreateManyPostInputEnvelope = {
    data: PostHashtagCreateManyPostInput | PostHashtagCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type SavedPostCreateWithoutPostInput = {
    id?: string
    userId: string
    savedAt?: Date | string
  }

  export type SavedPostUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    savedAt?: Date | string
  }

  export type SavedPostCreateOrConnectWithoutPostInput = {
    where: SavedPostWhereUniqueInput
    create: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput>
  }

  export type SavedPostCreateManyPostInputEnvelope = {
    data: SavedPostCreateManyPostInput | SavedPostCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostMediaUpsertWithWhereUniqueWithoutPostInput = {
    where: PostMediaWhereUniqueInput
    update: XOR<PostMediaUpdateWithoutPostInput, PostMediaUncheckedUpdateWithoutPostInput>
    create: XOR<PostMediaCreateWithoutPostInput, PostMediaUncheckedCreateWithoutPostInput>
  }

  export type PostMediaUpdateWithWhereUniqueWithoutPostInput = {
    where: PostMediaWhereUniqueInput
    data: XOR<PostMediaUpdateWithoutPostInput, PostMediaUncheckedUpdateWithoutPostInput>
  }

  export type PostMediaUpdateManyWithWhereWithoutPostInput = {
    where: PostMediaScalarWhereInput
    data: XOR<PostMediaUpdateManyMutationInput, PostMediaUncheckedUpdateManyWithoutPostInput>
  }

  export type PostMediaScalarWhereInput = {
    AND?: PostMediaScalarWhereInput | PostMediaScalarWhereInput[]
    OR?: PostMediaScalarWhereInput[]
    NOT?: PostMediaScalarWhereInput | PostMediaScalarWhereInput[]
    id?: StringFilter<"PostMedia"> | string
    postId?: StringFilter<"PostMedia"> | string
    mediaId?: StringFilter<"PostMedia"> | string
    mediaType?: StringFilter<"PostMedia"> | string
    url?: StringFilter<"PostMedia"> | string
    orderIndex?: IntFilter<"PostMedia"> | number
  }

  export type PostHashtagUpsertWithWhereUniqueWithoutPostInput = {
    where: PostHashtagWhereUniqueInput
    update: XOR<PostHashtagUpdateWithoutPostInput, PostHashtagUncheckedUpdateWithoutPostInput>
    create: XOR<PostHashtagCreateWithoutPostInput, PostHashtagUncheckedCreateWithoutPostInput>
  }

  export type PostHashtagUpdateWithWhereUniqueWithoutPostInput = {
    where: PostHashtagWhereUniqueInput
    data: XOR<PostHashtagUpdateWithoutPostInput, PostHashtagUncheckedUpdateWithoutPostInput>
  }

  export type PostHashtagUpdateManyWithWhereWithoutPostInput = {
    where: PostHashtagScalarWhereInput
    data: XOR<PostHashtagUpdateManyMutationInput, PostHashtagUncheckedUpdateManyWithoutPostInput>
  }

  export type PostHashtagScalarWhereInput = {
    AND?: PostHashtagScalarWhereInput | PostHashtagScalarWhereInput[]
    OR?: PostHashtagScalarWhereInput[]
    NOT?: PostHashtagScalarWhereInput | PostHashtagScalarWhereInput[]
    postId?: StringFilter<"PostHashtag"> | string
    hashtagId?: StringFilter<"PostHashtag"> | string
  }

  export type SavedPostUpsertWithWhereUniqueWithoutPostInput = {
    where: SavedPostWhereUniqueInput
    update: XOR<SavedPostUpdateWithoutPostInput, SavedPostUncheckedUpdateWithoutPostInput>
    create: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput>
  }

  export type SavedPostUpdateWithWhereUniqueWithoutPostInput = {
    where: SavedPostWhereUniqueInput
    data: XOR<SavedPostUpdateWithoutPostInput, SavedPostUncheckedUpdateWithoutPostInput>
  }

  export type SavedPostUpdateManyWithWhereWithoutPostInput = {
    where: SavedPostScalarWhereInput
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyWithoutPostInput>
  }

  export type SavedPostScalarWhereInput = {
    AND?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
    OR?: SavedPostScalarWhereInput[]
    NOT?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
    id?: StringFilter<"SavedPost"> | string
    userId?: StringFilter<"SavedPost"> | string
    postId?: StringFilter<"SavedPost"> | string
    savedAt?: DateTimeFilter<"SavedPost"> | Date | string
  }

  export type PostCreateWithoutMediaInput = {
    id?: string
    authorId: string
    content: string
    visibility?: $Enums.PostVisibility
    isPinned?: boolean
    sharedPostId?: string | null
    mediaCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    hashtags?: PostHashtagCreateNestedManyWithoutPostInput
    saves?: SavedPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutMediaInput = {
    id?: string
    authorId: string
    content: string
    visibility?: $Enums.PostVisibility
    isPinned?: boolean
    sharedPostId?: string | null
    mediaCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    hashtags?: PostHashtagUncheckedCreateNestedManyWithoutPostInput
    saves?: SavedPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutMediaInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutMediaInput, PostUncheckedCreateWithoutMediaInput>
  }

  export type PostUpsertWithoutMediaInput = {
    update: XOR<PostUpdateWithoutMediaInput, PostUncheckedUpdateWithoutMediaInput>
    create: XOR<PostCreateWithoutMediaInput, PostUncheckedCreateWithoutMediaInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutMediaInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutMediaInput, PostUncheckedUpdateWithoutMediaInput>
  }

  export type PostUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hashtags?: PostHashtagUpdateManyWithoutPostNestedInput
    saves?: SavedPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hashtags?: PostHashtagUncheckedUpdateManyWithoutPostNestedInput
    saves?: SavedPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostHashtagCreateWithoutHashtagInput = {
    post: PostCreateNestedOneWithoutHashtagsInput
  }

  export type PostHashtagUncheckedCreateWithoutHashtagInput = {
    postId: string
  }

  export type PostHashtagCreateOrConnectWithoutHashtagInput = {
    where: PostHashtagWhereUniqueInput
    create: XOR<PostHashtagCreateWithoutHashtagInput, PostHashtagUncheckedCreateWithoutHashtagInput>
  }

  export type PostHashtagCreateManyHashtagInputEnvelope = {
    data: PostHashtagCreateManyHashtagInput | PostHashtagCreateManyHashtagInput[]
    skipDuplicates?: boolean
  }

  export type PostHashtagUpsertWithWhereUniqueWithoutHashtagInput = {
    where: PostHashtagWhereUniqueInput
    update: XOR<PostHashtagUpdateWithoutHashtagInput, PostHashtagUncheckedUpdateWithoutHashtagInput>
    create: XOR<PostHashtagCreateWithoutHashtagInput, PostHashtagUncheckedCreateWithoutHashtagInput>
  }

  export type PostHashtagUpdateWithWhereUniqueWithoutHashtagInput = {
    where: PostHashtagWhereUniqueInput
    data: XOR<PostHashtagUpdateWithoutHashtagInput, PostHashtagUncheckedUpdateWithoutHashtagInput>
  }

  export type PostHashtagUpdateManyWithWhereWithoutHashtagInput = {
    where: PostHashtagScalarWhereInput
    data: XOR<PostHashtagUpdateManyMutationInput, PostHashtagUncheckedUpdateManyWithoutHashtagInput>
  }

  export type PostCreateWithoutHashtagsInput = {
    id?: string
    authorId: string
    content: string
    visibility?: $Enums.PostVisibility
    isPinned?: boolean
    sharedPostId?: string | null
    mediaCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    media?: PostMediaCreateNestedManyWithoutPostInput
    saves?: SavedPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutHashtagsInput = {
    id?: string
    authorId: string
    content: string
    visibility?: $Enums.PostVisibility
    isPinned?: boolean
    sharedPostId?: string | null
    mediaCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    media?: PostMediaUncheckedCreateNestedManyWithoutPostInput
    saves?: SavedPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutHashtagsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutHashtagsInput, PostUncheckedCreateWithoutHashtagsInput>
  }

  export type HashtagCreateWithoutPostsInput = {
    id?: string
    tag: string
    postCount?: number
    lastUsedAt?: Date | string
  }

  export type HashtagUncheckedCreateWithoutPostsInput = {
    id?: string
    tag: string
    postCount?: number
    lastUsedAt?: Date | string
  }

  export type HashtagCreateOrConnectWithoutPostsInput = {
    where: HashtagWhereUniqueInput
    create: XOR<HashtagCreateWithoutPostsInput, HashtagUncheckedCreateWithoutPostsInput>
  }

  export type PostUpsertWithoutHashtagsInput = {
    update: XOR<PostUpdateWithoutHashtagsInput, PostUncheckedUpdateWithoutHashtagsInput>
    create: XOR<PostCreateWithoutHashtagsInput, PostUncheckedCreateWithoutHashtagsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutHashtagsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutHashtagsInput, PostUncheckedUpdateWithoutHashtagsInput>
  }

  export type PostUpdateWithoutHashtagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: PostMediaUpdateManyWithoutPostNestedInput
    saves?: SavedPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutHashtagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: PostMediaUncheckedUpdateManyWithoutPostNestedInput
    saves?: SavedPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type HashtagUpsertWithoutPostsInput = {
    update: XOR<HashtagUpdateWithoutPostsInput, HashtagUncheckedUpdateWithoutPostsInput>
    create: XOR<HashtagCreateWithoutPostsInput, HashtagUncheckedCreateWithoutPostsInput>
    where?: HashtagWhereInput
  }

  export type HashtagUpdateToOneWithWhereWithoutPostsInput = {
    where?: HashtagWhereInput
    data: XOR<HashtagUpdateWithoutPostsInput, HashtagUncheckedUpdateWithoutPostsInput>
  }

  export type HashtagUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    postCount?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    postCount?: IntFieldUpdateOperationsInput | number
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateWithoutSavesInput = {
    id?: string
    authorId: string
    content: string
    visibility?: $Enums.PostVisibility
    isPinned?: boolean
    sharedPostId?: string | null
    mediaCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    media?: PostMediaCreateNestedManyWithoutPostInput
    hashtags?: PostHashtagCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutSavesInput = {
    id?: string
    authorId: string
    content: string
    visibility?: $Enums.PostVisibility
    isPinned?: boolean
    sharedPostId?: string | null
    mediaCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    media?: PostMediaUncheckedCreateNestedManyWithoutPostInput
    hashtags?: PostHashtagUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutSavesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutSavesInput, PostUncheckedCreateWithoutSavesInput>
  }

  export type PostUpsertWithoutSavesInput = {
    update: XOR<PostUpdateWithoutSavesInput, PostUncheckedUpdateWithoutSavesInput>
    create: XOR<PostCreateWithoutSavesInput, PostUncheckedCreateWithoutSavesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutSavesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutSavesInput, PostUncheckedUpdateWithoutSavesInput>
  }

  export type PostUpdateWithoutSavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: PostMediaUpdateManyWithoutPostNestedInput
    hashtags?: PostHashtagUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutSavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    sharedPostId?: NullableStringFieldUpdateOperationsInput | string | null
    mediaCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: PostMediaUncheckedUpdateManyWithoutPostNestedInput
    hashtags?: PostHashtagUncheckedUpdateManyWithoutPostNestedInput
  }

  export type StoryMediaCreateWithoutStoryInput = {
    id?: string
    mediaType: string
    url: string
    mimeType?: string | null
    fileSize?: number | null
    duration?: number | null
    createdAt?: Date | string
  }

  export type StoryMediaUncheckedCreateWithoutStoryInput = {
    id?: string
    mediaType: string
    url: string
    mimeType?: string | null
    fileSize?: number | null
    duration?: number | null
    createdAt?: Date | string
  }

  export type StoryMediaCreateOrConnectWithoutStoryInput = {
    where: StoryMediaWhereUniqueInput
    create: XOR<StoryMediaCreateWithoutStoryInput, StoryMediaUncheckedCreateWithoutStoryInput>
  }

  export type StoryMediaCreateManyStoryInputEnvelope = {
    data: StoryMediaCreateManyStoryInput | StoryMediaCreateManyStoryInput[]
    skipDuplicates?: boolean
  }

  export type StoryViewCreateWithoutStoryInput = {
    id?: string
    viewerId: string
    viewedAt?: Date | string
  }

  export type StoryViewUncheckedCreateWithoutStoryInput = {
    id?: string
    viewerId: string
    viewedAt?: Date | string
  }

  export type StoryViewCreateOrConnectWithoutStoryInput = {
    where: StoryViewWhereUniqueInput
    create: XOR<StoryViewCreateWithoutStoryInput, StoryViewUncheckedCreateWithoutStoryInput>
  }

  export type StoryViewCreateManyStoryInputEnvelope = {
    data: StoryViewCreateManyStoryInput | StoryViewCreateManyStoryInput[]
    skipDuplicates?: boolean
  }

  export type StoryReactionCreateWithoutStoryInput = {
    id?: string
    userId: string
    reactionType: string
    createdAt?: Date | string
  }

  export type StoryReactionUncheckedCreateWithoutStoryInput = {
    id?: string
    userId: string
    reactionType: string
    createdAt?: Date | string
  }

  export type StoryReactionCreateOrConnectWithoutStoryInput = {
    where: StoryReactionWhereUniqueInput
    create: XOR<StoryReactionCreateWithoutStoryInput, StoryReactionUncheckedCreateWithoutStoryInput>
  }

  export type StoryReactionCreateManyStoryInputEnvelope = {
    data: StoryReactionCreateManyStoryInput | StoryReactionCreateManyStoryInput[]
    skipDuplicates?: boolean
  }

  export type StoryAudienceCreateWithoutStoryInput = {
    id?: string
    userId: string
    type: string
    createdAt?: Date | string
  }

  export type StoryAudienceUncheckedCreateWithoutStoryInput = {
    id?: string
    userId: string
    type: string
    createdAt?: Date | string
  }

  export type StoryAudienceCreateOrConnectWithoutStoryInput = {
    where: StoryAudienceWhereUniqueInput
    create: XOR<StoryAudienceCreateWithoutStoryInput, StoryAudienceUncheckedCreateWithoutStoryInput>
  }

  export type StoryAudienceCreateManyStoryInputEnvelope = {
    data: StoryAudienceCreateManyStoryInput | StoryAudienceCreateManyStoryInput[]
    skipDuplicates?: boolean
  }

  export type StoryMediaUpsertWithWhereUniqueWithoutStoryInput = {
    where: StoryMediaWhereUniqueInput
    update: XOR<StoryMediaUpdateWithoutStoryInput, StoryMediaUncheckedUpdateWithoutStoryInput>
    create: XOR<StoryMediaCreateWithoutStoryInput, StoryMediaUncheckedCreateWithoutStoryInput>
  }

  export type StoryMediaUpdateWithWhereUniqueWithoutStoryInput = {
    where: StoryMediaWhereUniqueInput
    data: XOR<StoryMediaUpdateWithoutStoryInput, StoryMediaUncheckedUpdateWithoutStoryInput>
  }

  export type StoryMediaUpdateManyWithWhereWithoutStoryInput = {
    where: StoryMediaScalarWhereInput
    data: XOR<StoryMediaUpdateManyMutationInput, StoryMediaUncheckedUpdateManyWithoutStoryInput>
  }

  export type StoryMediaScalarWhereInput = {
    AND?: StoryMediaScalarWhereInput | StoryMediaScalarWhereInput[]
    OR?: StoryMediaScalarWhereInput[]
    NOT?: StoryMediaScalarWhereInput | StoryMediaScalarWhereInput[]
    id?: StringFilter<"StoryMedia"> | string
    storyId?: StringFilter<"StoryMedia"> | string
    mediaType?: StringFilter<"StoryMedia"> | string
    url?: StringFilter<"StoryMedia"> | string
    mimeType?: StringNullableFilter<"StoryMedia"> | string | null
    fileSize?: IntNullableFilter<"StoryMedia"> | number | null
    duration?: FloatNullableFilter<"StoryMedia"> | number | null
    createdAt?: DateTimeFilter<"StoryMedia"> | Date | string
  }

  export type StoryViewUpsertWithWhereUniqueWithoutStoryInput = {
    where: StoryViewWhereUniqueInput
    update: XOR<StoryViewUpdateWithoutStoryInput, StoryViewUncheckedUpdateWithoutStoryInput>
    create: XOR<StoryViewCreateWithoutStoryInput, StoryViewUncheckedCreateWithoutStoryInput>
  }

  export type StoryViewUpdateWithWhereUniqueWithoutStoryInput = {
    where: StoryViewWhereUniqueInput
    data: XOR<StoryViewUpdateWithoutStoryInput, StoryViewUncheckedUpdateWithoutStoryInput>
  }

  export type StoryViewUpdateManyWithWhereWithoutStoryInput = {
    where: StoryViewScalarWhereInput
    data: XOR<StoryViewUpdateManyMutationInput, StoryViewUncheckedUpdateManyWithoutStoryInput>
  }

  export type StoryViewScalarWhereInput = {
    AND?: StoryViewScalarWhereInput | StoryViewScalarWhereInput[]
    OR?: StoryViewScalarWhereInput[]
    NOT?: StoryViewScalarWhereInput | StoryViewScalarWhereInput[]
    id?: StringFilter<"StoryView"> | string
    storyId?: StringFilter<"StoryView"> | string
    viewerId?: StringFilter<"StoryView"> | string
    viewedAt?: DateTimeFilter<"StoryView"> | Date | string
  }

  export type StoryReactionUpsertWithWhereUniqueWithoutStoryInput = {
    where: StoryReactionWhereUniqueInput
    update: XOR<StoryReactionUpdateWithoutStoryInput, StoryReactionUncheckedUpdateWithoutStoryInput>
    create: XOR<StoryReactionCreateWithoutStoryInput, StoryReactionUncheckedCreateWithoutStoryInput>
  }

  export type StoryReactionUpdateWithWhereUniqueWithoutStoryInput = {
    where: StoryReactionWhereUniqueInput
    data: XOR<StoryReactionUpdateWithoutStoryInput, StoryReactionUncheckedUpdateWithoutStoryInput>
  }

  export type StoryReactionUpdateManyWithWhereWithoutStoryInput = {
    where: StoryReactionScalarWhereInput
    data: XOR<StoryReactionUpdateManyMutationInput, StoryReactionUncheckedUpdateManyWithoutStoryInput>
  }

  export type StoryReactionScalarWhereInput = {
    AND?: StoryReactionScalarWhereInput | StoryReactionScalarWhereInput[]
    OR?: StoryReactionScalarWhereInput[]
    NOT?: StoryReactionScalarWhereInput | StoryReactionScalarWhereInput[]
    id?: StringFilter<"StoryReaction"> | string
    storyId?: StringFilter<"StoryReaction"> | string
    userId?: StringFilter<"StoryReaction"> | string
    reactionType?: StringFilter<"StoryReaction"> | string
    createdAt?: DateTimeFilter<"StoryReaction"> | Date | string
  }

  export type StoryAudienceUpsertWithWhereUniqueWithoutStoryInput = {
    where: StoryAudienceWhereUniqueInput
    update: XOR<StoryAudienceUpdateWithoutStoryInput, StoryAudienceUncheckedUpdateWithoutStoryInput>
    create: XOR<StoryAudienceCreateWithoutStoryInput, StoryAudienceUncheckedCreateWithoutStoryInput>
  }

  export type StoryAudienceUpdateWithWhereUniqueWithoutStoryInput = {
    where: StoryAudienceWhereUniqueInput
    data: XOR<StoryAudienceUpdateWithoutStoryInput, StoryAudienceUncheckedUpdateWithoutStoryInput>
  }

  export type StoryAudienceUpdateManyWithWhereWithoutStoryInput = {
    where: StoryAudienceScalarWhereInput
    data: XOR<StoryAudienceUpdateManyMutationInput, StoryAudienceUncheckedUpdateManyWithoutStoryInput>
  }

  export type StoryAudienceScalarWhereInput = {
    AND?: StoryAudienceScalarWhereInput | StoryAudienceScalarWhereInput[]
    OR?: StoryAudienceScalarWhereInput[]
    NOT?: StoryAudienceScalarWhereInput | StoryAudienceScalarWhereInput[]
    id?: StringFilter<"StoryAudience"> | string
    storyId?: StringFilter<"StoryAudience"> | string
    userId?: StringFilter<"StoryAudience"> | string
    type?: StringFilter<"StoryAudience"> | string
    createdAt?: DateTimeFilter<"StoryAudience"> | Date | string
  }

  export type StoryCreateWithoutMediaInput = {
    id?: string
    authorId: string
    type?: $Enums.StoryType
    content?: string | null
    backgroundColor?: string | null
    fontStyle?: string | null
    visibility?: $Enums.StoryVisibility
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    deletedAt?: Date | string | null
    views?: StoryViewCreateNestedManyWithoutStoryInput
    reactions?: StoryReactionCreateNestedManyWithoutStoryInput
    audiences?: StoryAudienceCreateNestedManyWithoutStoryInput
  }

  export type StoryUncheckedCreateWithoutMediaInput = {
    id?: string
    authorId: string
    type?: $Enums.StoryType
    content?: string | null
    backgroundColor?: string | null
    fontStyle?: string | null
    visibility?: $Enums.StoryVisibility
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    deletedAt?: Date | string | null
    views?: StoryViewUncheckedCreateNestedManyWithoutStoryInput
    reactions?: StoryReactionUncheckedCreateNestedManyWithoutStoryInput
    audiences?: StoryAudienceUncheckedCreateNestedManyWithoutStoryInput
  }

  export type StoryCreateOrConnectWithoutMediaInput = {
    where: StoryWhereUniqueInput
    create: XOR<StoryCreateWithoutMediaInput, StoryUncheckedCreateWithoutMediaInput>
  }

  export type StoryUpsertWithoutMediaInput = {
    update: XOR<StoryUpdateWithoutMediaInput, StoryUncheckedUpdateWithoutMediaInput>
    create: XOR<StoryCreateWithoutMediaInput, StoryUncheckedCreateWithoutMediaInput>
    where?: StoryWhereInput
  }

  export type StoryUpdateToOneWithWhereWithoutMediaInput = {
    where?: StoryWhereInput
    data: XOR<StoryUpdateWithoutMediaInput, StoryUncheckedUpdateWithoutMediaInput>
  }

  export type StoryUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    type?: EnumStoryTypeFieldUpdateOperationsInput | $Enums.StoryType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumStoryVisibilityFieldUpdateOperationsInput | $Enums.StoryVisibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: StoryViewUpdateManyWithoutStoryNestedInput
    reactions?: StoryReactionUpdateManyWithoutStoryNestedInput
    audiences?: StoryAudienceUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    type?: EnumStoryTypeFieldUpdateOperationsInput | $Enums.StoryType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumStoryVisibilityFieldUpdateOperationsInput | $Enums.StoryVisibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: StoryViewUncheckedUpdateManyWithoutStoryNestedInput
    reactions?: StoryReactionUncheckedUpdateManyWithoutStoryNestedInput
    audiences?: StoryAudienceUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type StoryCreateWithoutViewsInput = {
    id?: string
    authorId: string
    type?: $Enums.StoryType
    content?: string | null
    backgroundColor?: string | null
    fontStyle?: string | null
    visibility?: $Enums.StoryVisibility
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    deletedAt?: Date | string | null
    media?: StoryMediaCreateNestedManyWithoutStoryInput
    reactions?: StoryReactionCreateNestedManyWithoutStoryInput
    audiences?: StoryAudienceCreateNestedManyWithoutStoryInput
  }

  export type StoryUncheckedCreateWithoutViewsInput = {
    id?: string
    authorId: string
    type?: $Enums.StoryType
    content?: string | null
    backgroundColor?: string | null
    fontStyle?: string | null
    visibility?: $Enums.StoryVisibility
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    deletedAt?: Date | string | null
    media?: StoryMediaUncheckedCreateNestedManyWithoutStoryInput
    reactions?: StoryReactionUncheckedCreateNestedManyWithoutStoryInput
    audiences?: StoryAudienceUncheckedCreateNestedManyWithoutStoryInput
  }

  export type StoryCreateOrConnectWithoutViewsInput = {
    where: StoryWhereUniqueInput
    create: XOR<StoryCreateWithoutViewsInput, StoryUncheckedCreateWithoutViewsInput>
  }

  export type StoryUpsertWithoutViewsInput = {
    update: XOR<StoryUpdateWithoutViewsInput, StoryUncheckedUpdateWithoutViewsInput>
    create: XOR<StoryCreateWithoutViewsInput, StoryUncheckedCreateWithoutViewsInput>
    where?: StoryWhereInput
  }

  export type StoryUpdateToOneWithWhereWithoutViewsInput = {
    where?: StoryWhereInput
    data: XOR<StoryUpdateWithoutViewsInput, StoryUncheckedUpdateWithoutViewsInput>
  }

  export type StoryUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    type?: EnumStoryTypeFieldUpdateOperationsInput | $Enums.StoryType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumStoryVisibilityFieldUpdateOperationsInput | $Enums.StoryVisibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: StoryMediaUpdateManyWithoutStoryNestedInput
    reactions?: StoryReactionUpdateManyWithoutStoryNestedInput
    audiences?: StoryAudienceUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    type?: EnumStoryTypeFieldUpdateOperationsInput | $Enums.StoryType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumStoryVisibilityFieldUpdateOperationsInput | $Enums.StoryVisibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: StoryMediaUncheckedUpdateManyWithoutStoryNestedInput
    reactions?: StoryReactionUncheckedUpdateManyWithoutStoryNestedInput
    audiences?: StoryAudienceUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type StoryCreateWithoutReactionsInput = {
    id?: string
    authorId: string
    type?: $Enums.StoryType
    content?: string | null
    backgroundColor?: string | null
    fontStyle?: string | null
    visibility?: $Enums.StoryVisibility
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    deletedAt?: Date | string | null
    media?: StoryMediaCreateNestedManyWithoutStoryInput
    views?: StoryViewCreateNestedManyWithoutStoryInput
    audiences?: StoryAudienceCreateNestedManyWithoutStoryInput
  }

  export type StoryUncheckedCreateWithoutReactionsInput = {
    id?: string
    authorId: string
    type?: $Enums.StoryType
    content?: string | null
    backgroundColor?: string | null
    fontStyle?: string | null
    visibility?: $Enums.StoryVisibility
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    deletedAt?: Date | string | null
    media?: StoryMediaUncheckedCreateNestedManyWithoutStoryInput
    views?: StoryViewUncheckedCreateNestedManyWithoutStoryInput
    audiences?: StoryAudienceUncheckedCreateNestedManyWithoutStoryInput
  }

  export type StoryCreateOrConnectWithoutReactionsInput = {
    where: StoryWhereUniqueInput
    create: XOR<StoryCreateWithoutReactionsInput, StoryUncheckedCreateWithoutReactionsInput>
  }

  export type StoryUpsertWithoutReactionsInput = {
    update: XOR<StoryUpdateWithoutReactionsInput, StoryUncheckedUpdateWithoutReactionsInput>
    create: XOR<StoryCreateWithoutReactionsInput, StoryUncheckedCreateWithoutReactionsInput>
    where?: StoryWhereInput
  }

  export type StoryUpdateToOneWithWhereWithoutReactionsInput = {
    where?: StoryWhereInput
    data: XOR<StoryUpdateWithoutReactionsInput, StoryUncheckedUpdateWithoutReactionsInput>
  }

  export type StoryUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    type?: EnumStoryTypeFieldUpdateOperationsInput | $Enums.StoryType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumStoryVisibilityFieldUpdateOperationsInput | $Enums.StoryVisibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: StoryMediaUpdateManyWithoutStoryNestedInput
    views?: StoryViewUpdateManyWithoutStoryNestedInput
    audiences?: StoryAudienceUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    type?: EnumStoryTypeFieldUpdateOperationsInput | $Enums.StoryType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumStoryVisibilityFieldUpdateOperationsInput | $Enums.StoryVisibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: StoryMediaUncheckedUpdateManyWithoutStoryNestedInput
    views?: StoryViewUncheckedUpdateManyWithoutStoryNestedInput
    audiences?: StoryAudienceUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type StoryCreateWithoutAudiencesInput = {
    id?: string
    authorId: string
    type?: $Enums.StoryType
    content?: string | null
    backgroundColor?: string | null
    fontStyle?: string | null
    visibility?: $Enums.StoryVisibility
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    deletedAt?: Date | string | null
    media?: StoryMediaCreateNestedManyWithoutStoryInput
    views?: StoryViewCreateNestedManyWithoutStoryInput
    reactions?: StoryReactionCreateNestedManyWithoutStoryInput
  }

  export type StoryUncheckedCreateWithoutAudiencesInput = {
    id?: string
    authorId: string
    type?: $Enums.StoryType
    content?: string | null
    backgroundColor?: string | null
    fontStyle?: string | null
    visibility?: $Enums.StoryVisibility
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    deletedAt?: Date | string | null
    media?: StoryMediaUncheckedCreateNestedManyWithoutStoryInput
    views?: StoryViewUncheckedCreateNestedManyWithoutStoryInput
    reactions?: StoryReactionUncheckedCreateNestedManyWithoutStoryInput
  }

  export type StoryCreateOrConnectWithoutAudiencesInput = {
    where: StoryWhereUniqueInput
    create: XOR<StoryCreateWithoutAudiencesInput, StoryUncheckedCreateWithoutAudiencesInput>
  }

  export type StoryUpsertWithoutAudiencesInput = {
    update: XOR<StoryUpdateWithoutAudiencesInput, StoryUncheckedUpdateWithoutAudiencesInput>
    create: XOR<StoryCreateWithoutAudiencesInput, StoryUncheckedCreateWithoutAudiencesInput>
    where?: StoryWhereInput
  }

  export type StoryUpdateToOneWithWhereWithoutAudiencesInput = {
    where?: StoryWhereInput
    data: XOR<StoryUpdateWithoutAudiencesInput, StoryUncheckedUpdateWithoutAudiencesInput>
  }

  export type StoryUpdateWithoutAudiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    type?: EnumStoryTypeFieldUpdateOperationsInput | $Enums.StoryType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumStoryVisibilityFieldUpdateOperationsInput | $Enums.StoryVisibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: StoryMediaUpdateManyWithoutStoryNestedInput
    views?: StoryViewUpdateManyWithoutStoryNestedInput
    reactions?: StoryReactionUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateWithoutAudiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    type?: EnumStoryTypeFieldUpdateOperationsInput | $Enums.StoryType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    fontStyle?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumStoryVisibilityFieldUpdateOperationsInput | $Enums.StoryVisibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: StoryMediaUncheckedUpdateManyWithoutStoryNestedInput
    views?: StoryViewUncheckedUpdateManyWithoutStoryNestedInput
    reactions?: StoryReactionUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type PostMediaCreateManyPostInput = {
    id?: string
    mediaId: string
    mediaType: string
    url: string
    orderIndex?: number
  }

  export type PostHashtagCreateManyPostInput = {
    hashtagId: string
  }

  export type SavedPostCreateManyPostInput = {
    id?: string
    userId: string
    savedAt?: Date | string
  }

  export type PostMediaUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type PostMediaUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type PostMediaUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type PostHashtagUpdateWithoutPostInput = {
    hashtag?: HashtagUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostHashtagUncheckedUpdateWithoutPostInput = {
    hashtagId?: StringFieldUpdateOperationsInput | string
  }

  export type PostHashtagUncheckedUpdateManyWithoutPostInput = {
    hashtagId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedPostUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostHashtagCreateManyHashtagInput = {
    postId: string
  }

  export type PostHashtagUpdateWithoutHashtagInput = {
    post?: PostUpdateOneRequiredWithoutHashtagsNestedInput
  }

  export type PostHashtagUncheckedUpdateWithoutHashtagInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostHashtagUncheckedUpdateManyWithoutHashtagInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type StoryMediaCreateManyStoryInput = {
    id?: string
    mediaType: string
    url: string
    mimeType?: string | null
    fileSize?: number | null
    duration?: number | null
    createdAt?: Date | string
  }

  export type StoryViewCreateManyStoryInput = {
    id?: string
    viewerId: string
    viewedAt?: Date | string
  }

  export type StoryReactionCreateManyStoryInput = {
    id?: string
    userId: string
    reactionType: string
    createdAt?: Date | string
  }

  export type StoryAudienceCreateManyStoryInput = {
    id?: string
    userId: string
    type: string
    createdAt?: Date | string
  }

  export type StoryMediaUpdateWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryMediaUncheckedUpdateWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryMediaUncheckedUpdateManyWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryViewUpdateWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewerId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryViewUncheckedUpdateWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewerId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryViewUncheckedUpdateManyWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewerId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryReactionUpdateWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reactionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryReactionUncheckedUpdateWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reactionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryReactionUncheckedUpdateManyWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reactionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryAudienceUpdateWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryAudienceUncheckedUpdateWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryAudienceUncheckedUpdateManyWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PostCountOutputTypeDefaultArgs instead
     */
    export type PostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HashtagCountOutputTypeDefaultArgs instead
     */
    export type HashtagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HashtagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoryCountOutputTypeDefaultArgs instead
     */
    export type StoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostDefaultArgs instead
     */
    export type PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostMediaDefaultArgs instead
     */
    export type PostMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostMediaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HashtagDefaultArgs instead
     */
    export type HashtagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HashtagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostHashtagDefaultArgs instead
     */
    export type PostHashtagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostHashtagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SavedPostDefaultArgs instead
     */
    export type SavedPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SavedPostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoryDefaultArgs instead
     */
    export type StoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoryMediaDefaultArgs instead
     */
    export type StoryMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoryMediaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoryViewDefaultArgs instead
     */
    export type StoryViewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoryViewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoryReactionDefaultArgs instead
     */
    export type StoryReactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoryReactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoryAudienceDefaultArgs instead
     */
    export type StoryAudienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoryAudienceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CloseFriendDefaultArgs instead
     */
    export type CloseFriendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CloseFriendDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}