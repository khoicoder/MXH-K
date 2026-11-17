
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
 * Enums
 */
export namespace $Enums {
  export const PostVisibility: {
  PUBLIC: 'PUBLIC',
  FRIENDS_ONLY: 'FRIENDS_ONLY',
  PRIVATE: 'PRIVATE'
};

export type PostVisibility = (typeof PostVisibility)[keyof typeof PostVisibility]

}

export type PostVisibility = $Enums.PostVisibility

export const PostVisibility: typeof $Enums.PostVisibility

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
    SavedPost: 'SavedPost'
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
      modelProps: "post" | "postMedia" | "hashtag" | "postHashtag" | "savedPost"
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