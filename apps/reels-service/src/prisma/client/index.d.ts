
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
 * Model Reel
 * 
 */
export type Reel = $Result.DefaultSelection<Prisma.$ReelPayload>
/**
 * Model ReelView
 * 
 */
export type ReelView = $Result.DefaultSelection<Prisma.$ReelViewPayload>
/**
 * Model ReelBookmark
 * 
 */
export type ReelBookmark = $Result.DefaultSelection<Prisma.$ReelBookmarkPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Reels
 * const reels = await prisma.reel.findMany()
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
   * // Fetch zero or more Reels
   * const reels = await prisma.reel.findMany()
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
   * `prisma.reel`: Exposes CRUD operations for the **Reel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reels
    * const reels = await prisma.reel.findMany()
    * ```
    */
  get reel(): Prisma.ReelDelegate<ExtArgs>;

  /**
   * `prisma.reelView`: Exposes CRUD operations for the **ReelView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReelViews
    * const reelViews = await prisma.reelView.findMany()
    * ```
    */
  get reelView(): Prisma.ReelViewDelegate<ExtArgs>;

  /**
   * `prisma.reelBookmark`: Exposes CRUD operations for the **ReelBookmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReelBookmarks
    * const reelBookmarks = await prisma.reelBookmark.findMany()
    * ```
    */
  get reelBookmark(): Prisma.ReelBookmarkDelegate<ExtArgs>;
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
    Reel: 'Reel',
    ReelView: 'ReelView',
    ReelBookmark: 'ReelBookmark'
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
      modelProps: "reel" | "reelView" | "reelBookmark"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Reel: {
        payload: Prisma.$ReelPayload<ExtArgs>
        fields: Prisma.ReelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload>
          }
          findFirst: {
            args: Prisma.ReelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload>
          }
          findMany: {
            args: Prisma.ReelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload>[]
          }
          create: {
            args: Prisma.ReelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload>
          }
          createMany: {
            args: Prisma.ReelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload>[]
          }
          delete: {
            args: Prisma.ReelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload>
          }
          update: {
            args: Prisma.ReelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload>
          }
          deleteMany: {
            args: Prisma.ReelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload>
          }
          aggregate: {
            args: Prisma.ReelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReel>
          }
          groupBy: {
            args: Prisma.ReelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReelCountArgs<ExtArgs>
            result: $Utils.Optional<ReelCountAggregateOutputType> | number
          }
        }
      }
      ReelView: {
        payload: Prisma.$ReelViewPayload<ExtArgs>
        fields: Prisma.ReelViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReelViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReelViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelViewPayload>
          }
          findFirst: {
            args: Prisma.ReelViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReelViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelViewPayload>
          }
          findMany: {
            args: Prisma.ReelViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelViewPayload>[]
          }
          create: {
            args: Prisma.ReelViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelViewPayload>
          }
          createMany: {
            args: Prisma.ReelViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReelViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelViewPayload>[]
          }
          delete: {
            args: Prisma.ReelViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelViewPayload>
          }
          update: {
            args: Prisma.ReelViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelViewPayload>
          }
          deleteMany: {
            args: Prisma.ReelViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReelViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReelViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelViewPayload>
          }
          aggregate: {
            args: Prisma.ReelViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReelView>
          }
          groupBy: {
            args: Prisma.ReelViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReelViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReelViewCountArgs<ExtArgs>
            result: $Utils.Optional<ReelViewCountAggregateOutputType> | number
          }
        }
      }
      ReelBookmark: {
        payload: Prisma.$ReelBookmarkPayload<ExtArgs>
        fields: Prisma.ReelBookmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReelBookmarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelBookmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReelBookmarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelBookmarkPayload>
          }
          findFirst: {
            args: Prisma.ReelBookmarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelBookmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReelBookmarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelBookmarkPayload>
          }
          findMany: {
            args: Prisma.ReelBookmarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelBookmarkPayload>[]
          }
          create: {
            args: Prisma.ReelBookmarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelBookmarkPayload>
          }
          createMany: {
            args: Prisma.ReelBookmarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReelBookmarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelBookmarkPayload>[]
          }
          delete: {
            args: Prisma.ReelBookmarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelBookmarkPayload>
          }
          update: {
            args: Prisma.ReelBookmarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelBookmarkPayload>
          }
          deleteMany: {
            args: Prisma.ReelBookmarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReelBookmarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReelBookmarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelBookmarkPayload>
          }
          aggregate: {
            args: Prisma.ReelBookmarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReelBookmark>
          }
          groupBy: {
            args: Prisma.ReelBookmarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReelBookmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReelBookmarkCountArgs<ExtArgs>
            result: $Utils.Optional<ReelBookmarkCountAggregateOutputType> | number
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
   * Count Type ReelCountOutputType
   */

  export type ReelCountOutputType = {
    views: number
    bookmarks: number
  }

  export type ReelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    views?: boolean | ReelCountOutputTypeCountViewsArgs
    bookmarks?: boolean | ReelCountOutputTypeCountBookmarksArgs
  }

  // Custom InputTypes
  /**
   * ReelCountOutputType without action
   */
  export type ReelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelCountOutputType
     */
    select?: ReelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReelCountOutputType without action
   */
  export type ReelCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReelViewWhereInput
  }

  /**
   * ReelCountOutputType without action
   */
  export type ReelCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReelBookmarkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Reel
   */

  export type AggregateReel = {
    _count: ReelCountAggregateOutputType | null
    _avg: ReelAvgAggregateOutputType | null
    _sum: ReelSumAggregateOutputType | null
    _min: ReelMinAggregateOutputType | null
    _max: ReelMaxAggregateOutputType | null
  }

  export type ReelAvgAggregateOutputType = {
    durationSec: number | null
    viewsCount: number | null
    likesCount: number | null
    commentsCount: number | null
    sharesCount: number | null
  }

  export type ReelSumAggregateOutputType = {
    durationSec: number | null
    viewsCount: number | null
    likesCount: number | null
    commentsCount: number | null
    sharesCount: number | null
  }

  export type ReelMinAggregateOutputType = {
    id: string | null
    creatorId: string | null
    caption: string | null
    videoUrl: string | null
    thumbnailUrl: string | null
    durationSec: number | null
    viewsCount: number | null
    likesCount: number | null
    commentsCount: number | null
    sharesCount: number | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type ReelMaxAggregateOutputType = {
    id: string | null
    creatorId: string | null
    caption: string | null
    videoUrl: string | null
    thumbnailUrl: string | null
    durationSec: number | null
    viewsCount: number | null
    likesCount: number | null
    commentsCount: number | null
    sharesCount: number | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type ReelCountAggregateOutputType = {
    id: number
    creatorId: number
    caption: number
    videoUrl: number
    thumbnailUrl: number
    durationSec: number
    viewsCount: number
    likesCount: number
    commentsCount: number
    sharesCount: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type ReelAvgAggregateInputType = {
    durationSec?: true
    viewsCount?: true
    likesCount?: true
    commentsCount?: true
    sharesCount?: true
  }

  export type ReelSumAggregateInputType = {
    durationSec?: true
    viewsCount?: true
    likesCount?: true
    commentsCount?: true
    sharesCount?: true
  }

  export type ReelMinAggregateInputType = {
    id?: true
    creatorId?: true
    caption?: true
    videoUrl?: true
    thumbnailUrl?: true
    durationSec?: true
    viewsCount?: true
    likesCount?: true
    commentsCount?: true
    sharesCount?: true
    createdAt?: true
    deletedAt?: true
  }

  export type ReelMaxAggregateInputType = {
    id?: true
    creatorId?: true
    caption?: true
    videoUrl?: true
    thumbnailUrl?: true
    durationSec?: true
    viewsCount?: true
    likesCount?: true
    commentsCount?: true
    sharesCount?: true
    createdAt?: true
    deletedAt?: true
  }

  export type ReelCountAggregateInputType = {
    id?: true
    creatorId?: true
    caption?: true
    videoUrl?: true
    thumbnailUrl?: true
    durationSec?: true
    viewsCount?: true
    likesCount?: true
    commentsCount?: true
    sharesCount?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ReelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reel to aggregate.
     */
    where?: ReelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reels to fetch.
     */
    orderBy?: ReelOrderByWithRelationInput | ReelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reels
    **/
    _count?: true | ReelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReelMaxAggregateInputType
  }

  export type GetReelAggregateType<T extends ReelAggregateArgs> = {
        [P in keyof T & keyof AggregateReel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReel[P]>
      : GetScalarType<T[P], AggregateReel[P]>
  }




  export type ReelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReelWhereInput
    orderBy?: ReelOrderByWithAggregationInput | ReelOrderByWithAggregationInput[]
    by: ReelScalarFieldEnum[] | ReelScalarFieldEnum
    having?: ReelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReelCountAggregateInputType | true
    _avg?: ReelAvgAggregateInputType
    _sum?: ReelSumAggregateInputType
    _min?: ReelMinAggregateInputType
    _max?: ReelMaxAggregateInputType
  }

  export type ReelGroupByOutputType = {
    id: string
    creatorId: string
    caption: string
    videoUrl: string
    thumbnailUrl: string | null
    durationSec: number
    viewsCount: number
    likesCount: number
    commentsCount: number
    sharesCount: number
    createdAt: Date
    deletedAt: Date | null
    _count: ReelCountAggregateOutputType | null
    _avg: ReelAvgAggregateOutputType | null
    _sum: ReelSumAggregateOutputType | null
    _min: ReelMinAggregateOutputType | null
    _max: ReelMaxAggregateOutputType | null
  }

  type GetReelGroupByPayload<T extends ReelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReelGroupByOutputType[P]>
            : GetScalarType<T[P], ReelGroupByOutputType[P]>
        }
      >
    >


  export type ReelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    caption?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    durationSec?: boolean
    viewsCount?: boolean
    likesCount?: boolean
    commentsCount?: boolean
    sharesCount?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    views?: boolean | Reel$viewsArgs<ExtArgs>
    bookmarks?: boolean | Reel$bookmarksArgs<ExtArgs>
    _count?: boolean | ReelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reel"]>

  export type ReelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    caption?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    durationSec?: boolean
    viewsCount?: boolean
    likesCount?: boolean
    commentsCount?: boolean
    sharesCount?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["reel"]>

  export type ReelSelectScalar = {
    id?: boolean
    creatorId?: boolean
    caption?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    durationSec?: boolean
    viewsCount?: boolean
    likesCount?: boolean
    commentsCount?: boolean
    sharesCount?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type ReelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    views?: boolean | Reel$viewsArgs<ExtArgs>
    bookmarks?: boolean | Reel$bookmarksArgs<ExtArgs>
    _count?: boolean | ReelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reel"
    objects: {
      views: Prisma.$ReelViewPayload<ExtArgs>[]
      bookmarks: Prisma.$ReelBookmarkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      creatorId: string
      caption: string
      videoUrl: string
      thumbnailUrl: string | null
      durationSec: number
      viewsCount: number
      likesCount: number
      commentsCount: number
      sharesCount: number
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["reel"]>
    composites: {}
  }

  type ReelGetPayload<S extends boolean | null | undefined | ReelDefaultArgs> = $Result.GetResult<Prisma.$ReelPayload, S>

  type ReelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReelCountAggregateInputType | true
    }

  export interface ReelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reel'], meta: { name: 'Reel' } }
    /**
     * Find zero or one Reel that matches the filter.
     * @param {ReelFindUniqueArgs} args - Arguments to find a Reel
     * @example
     * // Get one Reel
     * const reel = await prisma.reel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReelFindUniqueArgs>(args: SelectSubset<T, ReelFindUniqueArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReelFindUniqueOrThrowArgs} args - Arguments to find a Reel
     * @example
     * // Get one Reel
     * const reel = await prisma.reel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReelFindUniqueOrThrowArgs>(args: SelectSubset<T, ReelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelFindFirstArgs} args - Arguments to find a Reel
     * @example
     * // Get one Reel
     * const reel = await prisma.reel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReelFindFirstArgs>(args?: SelectSubset<T, ReelFindFirstArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelFindFirstOrThrowArgs} args - Arguments to find a Reel
     * @example
     * // Get one Reel
     * const reel = await prisma.reel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReelFindFirstOrThrowArgs>(args?: SelectSubset<T, ReelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reels
     * const reels = await prisma.reel.findMany()
     * 
     * // Get first 10 Reels
     * const reels = await prisma.reel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reelWithIdOnly = await prisma.reel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReelFindManyArgs>(args?: SelectSubset<T, ReelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reel.
     * @param {ReelCreateArgs} args - Arguments to create a Reel.
     * @example
     * // Create one Reel
     * const Reel = await prisma.reel.create({
     *   data: {
     *     // ... data to create a Reel
     *   }
     * })
     * 
     */
    create<T extends ReelCreateArgs>(args: SelectSubset<T, ReelCreateArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reels.
     * @param {ReelCreateManyArgs} args - Arguments to create many Reels.
     * @example
     * // Create many Reels
     * const reel = await prisma.reel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReelCreateManyArgs>(args?: SelectSubset<T, ReelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reels and returns the data saved in the database.
     * @param {ReelCreateManyAndReturnArgs} args - Arguments to create many Reels.
     * @example
     * // Create many Reels
     * const reel = await prisma.reel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reels and only return the `id`
     * const reelWithIdOnly = await prisma.reel.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReelCreateManyAndReturnArgs>(args?: SelectSubset<T, ReelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reel.
     * @param {ReelDeleteArgs} args - Arguments to delete one Reel.
     * @example
     * // Delete one Reel
     * const Reel = await prisma.reel.delete({
     *   where: {
     *     // ... filter to delete one Reel
     *   }
     * })
     * 
     */
    delete<T extends ReelDeleteArgs>(args: SelectSubset<T, ReelDeleteArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reel.
     * @param {ReelUpdateArgs} args - Arguments to update one Reel.
     * @example
     * // Update one Reel
     * const reel = await prisma.reel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReelUpdateArgs>(args: SelectSubset<T, ReelUpdateArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reels.
     * @param {ReelDeleteManyArgs} args - Arguments to filter Reels to delete.
     * @example
     * // Delete a few Reels
     * const { count } = await prisma.reel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReelDeleteManyArgs>(args?: SelectSubset<T, ReelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reels
     * const reel = await prisma.reel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReelUpdateManyArgs>(args: SelectSubset<T, ReelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reel.
     * @param {ReelUpsertArgs} args - Arguments to update or create a Reel.
     * @example
     * // Update or create a Reel
     * const reel = await prisma.reel.upsert({
     *   create: {
     *     // ... data to create a Reel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reel we want to update
     *   }
     * })
     */
    upsert<T extends ReelUpsertArgs>(args: SelectSubset<T, ReelUpsertArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelCountArgs} args - Arguments to filter Reels to count.
     * @example
     * // Count the number of Reels
     * const count = await prisma.reel.count({
     *   where: {
     *     // ... the filter for the Reels we want to count
     *   }
     * })
    **/
    count<T extends ReelCountArgs>(
      args?: Subset<T, ReelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReelAggregateArgs>(args: Subset<T, ReelAggregateArgs>): Prisma.PrismaPromise<GetReelAggregateType<T>>

    /**
     * Group by Reel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelGroupByArgs} args - Group by arguments.
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
      T extends ReelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReelGroupByArgs['orderBy'] }
        : { orderBy?: ReelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reel model
   */
  readonly fields: ReelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    views<T extends Reel$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Reel$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelViewPayload<ExtArgs>, T, "findMany"> | Null>
    bookmarks<T extends Reel$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, Reel$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelBookmarkPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Reel model
   */ 
  interface ReelFieldRefs {
    readonly id: FieldRef<"Reel", 'String'>
    readonly creatorId: FieldRef<"Reel", 'String'>
    readonly caption: FieldRef<"Reel", 'String'>
    readonly videoUrl: FieldRef<"Reel", 'String'>
    readonly thumbnailUrl: FieldRef<"Reel", 'String'>
    readonly durationSec: FieldRef<"Reel", 'Int'>
    readonly viewsCount: FieldRef<"Reel", 'Int'>
    readonly likesCount: FieldRef<"Reel", 'Int'>
    readonly commentsCount: FieldRef<"Reel", 'Int'>
    readonly sharesCount: FieldRef<"Reel", 'Int'>
    readonly createdAt: FieldRef<"Reel", 'DateTime'>
    readonly deletedAt: FieldRef<"Reel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reel findUnique
   */
  export type ReelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    /**
     * Filter, which Reel to fetch.
     */
    where: ReelWhereUniqueInput
  }

  /**
   * Reel findUniqueOrThrow
   */
  export type ReelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    /**
     * Filter, which Reel to fetch.
     */
    where: ReelWhereUniqueInput
  }

  /**
   * Reel findFirst
   */
  export type ReelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    /**
     * Filter, which Reel to fetch.
     */
    where?: ReelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reels to fetch.
     */
    orderBy?: ReelOrderByWithRelationInput | ReelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reels.
     */
    cursor?: ReelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reels.
     */
    distinct?: ReelScalarFieldEnum | ReelScalarFieldEnum[]
  }

  /**
   * Reel findFirstOrThrow
   */
  export type ReelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    /**
     * Filter, which Reel to fetch.
     */
    where?: ReelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reels to fetch.
     */
    orderBy?: ReelOrderByWithRelationInput | ReelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reels.
     */
    cursor?: ReelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reels.
     */
    distinct?: ReelScalarFieldEnum | ReelScalarFieldEnum[]
  }

  /**
   * Reel findMany
   */
  export type ReelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    /**
     * Filter, which Reels to fetch.
     */
    where?: ReelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reels to fetch.
     */
    orderBy?: ReelOrderByWithRelationInput | ReelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reels.
     */
    cursor?: ReelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reels.
     */
    skip?: number
    distinct?: ReelScalarFieldEnum | ReelScalarFieldEnum[]
  }

  /**
   * Reel create
   */
  export type ReelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    /**
     * The data needed to create a Reel.
     */
    data: XOR<ReelCreateInput, ReelUncheckedCreateInput>
  }

  /**
   * Reel createMany
   */
  export type ReelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reels.
     */
    data: ReelCreateManyInput | ReelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reel createManyAndReturn
   */
  export type ReelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reels.
     */
    data: ReelCreateManyInput | ReelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reel update
   */
  export type ReelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    /**
     * The data needed to update a Reel.
     */
    data: XOR<ReelUpdateInput, ReelUncheckedUpdateInput>
    /**
     * Choose, which Reel to update.
     */
    where: ReelWhereUniqueInput
  }

  /**
   * Reel updateMany
   */
  export type ReelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reels.
     */
    data: XOR<ReelUpdateManyMutationInput, ReelUncheckedUpdateManyInput>
    /**
     * Filter which Reels to update
     */
    where?: ReelWhereInput
  }

  /**
   * Reel upsert
   */
  export type ReelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    /**
     * The filter to search for the Reel to update in case it exists.
     */
    where: ReelWhereUniqueInput
    /**
     * In case the Reel found by the `where` argument doesn't exist, create a new Reel with this data.
     */
    create: XOR<ReelCreateInput, ReelUncheckedCreateInput>
    /**
     * In case the Reel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReelUpdateInput, ReelUncheckedUpdateInput>
  }

  /**
   * Reel delete
   */
  export type ReelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    /**
     * Filter which Reel to delete.
     */
    where: ReelWhereUniqueInput
  }

  /**
   * Reel deleteMany
   */
  export type ReelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reels to delete
     */
    where?: ReelWhereInput
  }

  /**
   * Reel.views
   */
  export type Reel$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelView
     */
    select?: ReelViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelViewInclude<ExtArgs> | null
    where?: ReelViewWhereInput
    orderBy?: ReelViewOrderByWithRelationInput | ReelViewOrderByWithRelationInput[]
    cursor?: ReelViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReelViewScalarFieldEnum | ReelViewScalarFieldEnum[]
  }

  /**
   * Reel.bookmarks
   */
  export type Reel$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelBookmark
     */
    select?: ReelBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelBookmarkInclude<ExtArgs> | null
    where?: ReelBookmarkWhereInput
    orderBy?: ReelBookmarkOrderByWithRelationInput | ReelBookmarkOrderByWithRelationInput[]
    cursor?: ReelBookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReelBookmarkScalarFieldEnum | ReelBookmarkScalarFieldEnum[]
  }

  /**
   * Reel without action
   */
  export type ReelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
  }


  /**
   * Model ReelView
   */

  export type AggregateReelView = {
    _count: ReelViewCountAggregateOutputType | null
    _avg: ReelViewAvgAggregateOutputType | null
    _sum: ReelViewSumAggregateOutputType | null
    _min: ReelViewMinAggregateOutputType | null
    _max: ReelViewMaxAggregateOutputType | null
  }

  export type ReelViewAvgAggregateOutputType = {
    watchDurationSec: number | null
  }

  export type ReelViewSumAggregateOutputType = {
    watchDurationSec: number | null
  }

  export type ReelViewMinAggregateOutputType = {
    id: string | null
    reelId: string | null
    viewerId: string | null
    watchDurationSec: number | null
    completed: boolean | null
    createdAt: Date | null
  }

  export type ReelViewMaxAggregateOutputType = {
    id: string | null
    reelId: string | null
    viewerId: string | null
    watchDurationSec: number | null
    completed: boolean | null
    createdAt: Date | null
  }

  export type ReelViewCountAggregateOutputType = {
    id: number
    reelId: number
    viewerId: number
    watchDurationSec: number
    completed: number
    createdAt: number
    _all: number
  }


  export type ReelViewAvgAggregateInputType = {
    watchDurationSec?: true
  }

  export type ReelViewSumAggregateInputType = {
    watchDurationSec?: true
  }

  export type ReelViewMinAggregateInputType = {
    id?: true
    reelId?: true
    viewerId?: true
    watchDurationSec?: true
    completed?: true
    createdAt?: true
  }

  export type ReelViewMaxAggregateInputType = {
    id?: true
    reelId?: true
    viewerId?: true
    watchDurationSec?: true
    completed?: true
    createdAt?: true
  }

  export type ReelViewCountAggregateInputType = {
    id?: true
    reelId?: true
    viewerId?: true
    watchDurationSec?: true
    completed?: true
    createdAt?: true
    _all?: true
  }

  export type ReelViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReelView to aggregate.
     */
    where?: ReelViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelViews to fetch.
     */
    orderBy?: ReelViewOrderByWithRelationInput | ReelViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReelViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReelViews
    **/
    _count?: true | ReelViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReelViewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReelViewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReelViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReelViewMaxAggregateInputType
  }

  export type GetReelViewAggregateType<T extends ReelViewAggregateArgs> = {
        [P in keyof T & keyof AggregateReelView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReelView[P]>
      : GetScalarType<T[P], AggregateReelView[P]>
  }




  export type ReelViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReelViewWhereInput
    orderBy?: ReelViewOrderByWithAggregationInput | ReelViewOrderByWithAggregationInput[]
    by: ReelViewScalarFieldEnum[] | ReelViewScalarFieldEnum
    having?: ReelViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReelViewCountAggregateInputType | true
    _avg?: ReelViewAvgAggregateInputType
    _sum?: ReelViewSumAggregateInputType
    _min?: ReelViewMinAggregateInputType
    _max?: ReelViewMaxAggregateInputType
  }

  export type ReelViewGroupByOutputType = {
    id: string
    reelId: string
    viewerId: string
    watchDurationSec: number
    completed: boolean
    createdAt: Date
    _count: ReelViewCountAggregateOutputType | null
    _avg: ReelViewAvgAggregateOutputType | null
    _sum: ReelViewSumAggregateOutputType | null
    _min: ReelViewMinAggregateOutputType | null
    _max: ReelViewMaxAggregateOutputType | null
  }

  type GetReelViewGroupByPayload<T extends ReelViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReelViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReelViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReelViewGroupByOutputType[P]>
            : GetScalarType<T[P], ReelViewGroupByOutputType[P]>
        }
      >
    >


  export type ReelViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reelId?: boolean
    viewerId?: boolean
    watchDurationSec?: boolean
    completed?: boolean
    createdAt?: boolean
    reel?: boolean | ReelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reelView"]>

  export type ReelViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reelId?: boolean
    viewerId?: boolean
    watchDurationSec?: boolean
    completed?: boolean
    createdAt?: boolean
    reel?: boolean | ReelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reelView"]>

  export type ReelViewSelectScalar = {
    id?: boolean
    reelId?: boolean
    viewerId?: boolean
    watchDurationSec?: boolean
    completed?: boolean
    createdAt?: boolean
  }

  export type ReelViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reel?: boolean | ReelDefaultArgs<ExtArgs>
  }
  export type ReelViewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reel?: boolean | ReelDefaultArgs<ExtArgs>
  }

  export type $ReelViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReelView"
    objects: {
      reel: Prisma.$ReelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reelId: string
      viewerId: string
      watchDurationSec: number
      completed: boolean
      createdAt: Date
    }, ExtArgs["result"]["reelView"]>
    composites: {}
  }

  type ReelViewGetPayload<S extends boolean | null | undefined | ReelViewDefaultArgs> = $Result.GetResult<Prisma.$ReelViewPayload, S>

  type ReelViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReelViewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReelViewCountAggregateInputType | true
    }

  export interface ReelViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReelView'], meta: { name: 'ReelView' } }
    /**
     * Find zero or one ReelView that matches the filter.
     * @param {ReelViewFindUniqueArgs} args - Arguments to find a ReelView
     * @example
     * // Get one ReelView
     * const reelView = await prisma.reelView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReelViewFindUniqueArgs>(args: SelectSubset<T, ReelViewFindUniqueArgs<ExtArgs>>): Prisma__ReelViewClient<$Result.GetResult<Prisma.$ReelViewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReelView that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReelViewFindUniqueOrThrowArgs} args - Arguments to find a ReelView
     * @example
     * // Get one ReelView
     * const reelView = await prisma.reelView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReelViewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReelViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReelViewClient<$Result.GetResult<Prisma.$ReelViewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReelView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelViewFindFirstArgs} args - Arguments to find a ReelView
     * @example
     * // Get one ReelView
     * const reelView = await prisma.reelView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReelViewFindFirstArgs>(args?: SelectSubset<T, ReelViewFindFirstArgs<ExtArgs>>): Prisma__ReelViewClient<$Result.GetResult<Prisma.$ReelViewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReelView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelViewFindFirstOrThrowArgs} args - Arguments to find a ReelView
     * @example
     * // Get one ReelView
     * const reelView = await prisma.reelView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReelViewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReelViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReelViewClient<$Result.GetResult<Prisma.$ReelViewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReelViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReelViews
     * const reelViews = await prisma.reelView.findMany()
     * 
     * // Get first 10 ReelViews
     * const reelViews = await prisma.reelView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reelViewWithIdOnly = await prisma.reelView.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReelViewFindManyArgs>(args?: SelectSubset<T, ReelViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelViewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReelView.
     * @param {ReelViewCreateArgs} args - Arguments to create a ReelView.
     * @example
     * // Create one ReelView
     * const ReelView = await prisma.reelView.create({
     *   data: {
     *     // ... data to create a ReelView
     *   }
     * })
     * 
     */
    create<T extends ReelViewCreateArgs>(args: SelectSubset<T, ReelViewCreateArgs<ExtArgs>>): Prisma__ReelViewClient<$Result.GetResult<Prisma.$ReelViewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReelViews.
     * @param {ReelViewCreateManyArgs} args - Arguments to create many ReelViews.
     * @example
     * // Create many ReelViews
     * const reelView = await prisma.reelView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReelViewCreateManyArgs>(args?: SelectSubset<T, ReelViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReelViews and returns the data saved in the database.
     * @param {ReelViewCreateManyAndReturnArgs} args - Arguments to create many ReelViews.
     * @example
     * // Create many ReelViews
     * const reelView = await prisma.reelView.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReelViews and only return the `id`
     * const reelViewWithIdOnly = await prisma.reelView.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReelViewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReelViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelViewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReelView.
     * @param {ReelViewDeleteArgs} args - Arguments to delete one ReelView.
     * @example
     * // Delete one ReelView
     * const ReelView = await prisma.reelView.delete({
     *   where: {
     *     // ... filter to delete one ReelView
     *   }
     * })
     * 
     */
    delete<T extends ReelViewDeleteArgs>(args: SelectSubset<T, ReelViewDeleteArgs<ExtArgs>>): Prisma__ReelViewClient<$Result.GetResult<Prisma.$ReelViewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReelView.
     * @param {ReelViewUpdateArgs} args - Arguments to update one ReelView.
     * @example
     * // Update one ReelView
     * const reelView = await prisma.reelView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReelViewUpdateArgs>(args: SelectSubset<T, ReelViewUpdateArgs<ExtArgs>>): Prisma__ReelViewClient<$Result.GetResult<Prisma.$ReelViewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReelViews.
     * @param {ReelViewDeleteManyArgs} args - Arguments to filter ReelViews to delete.
     * @example
     * // Delete a few ReelViews
     * const { count } = await prisma.reelView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReelViewDeleteManyArgs>(args?: SelectSubset<T, ReelViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReelViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReelViews
     * const reelView = await prisma.reelView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReelViewUpdateManyArgs>(args: SelectSubset<T, ReelViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReelView.
     * @param {ReelViewUpsertArgs} args - Arguments to update or create a ReelView.
     * @example
     * // Update or create a ReelView
     * const reelView = await prisma.reelView.upsert({
     *   create: {
     *     // ... data to create a ReelView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReelView we want to update
     *   }
     * })
     */
    upsert<T extends ReelViewUpsertArgs>(args: SelectSubset<T, ReelViewUpsertArgs<ExtArgs>>): Prisma__ReelViewClient<$Result.GetResult<Prisma.$ReelViewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReelViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelViewCountArgs} args - Arguments to filter ReelViews to count.
     * @example
     * // Count the number of ReelViews
     * const count = await prisma.reelView.count({
     *   where: {
     *     // ... the filter for the ReelViews we want to count
     *   }
     * })
    **/
    count<T extends ReelViewCountArgs>(
      args?: Subset<T, ReelViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReelViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReelView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReelViewAggregateArgs>(args: Subset<T, ReelViewAggregateArgs>): Prisma.PrismaPromise<GetReelViewAggregateType<T>>

    /**
     * Group by ReelView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelViewGroupByArgs} args - Group by arguments.
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
      T extends ReelViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReelViewGroupByArgs['orderBy'] }
        : { orderBy?: ReelViewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReelViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReelViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReelView model
   */
  readonly fields: ReelViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReelView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReelViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reel<T extends ReelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReelDefaultArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ReelView model
   */ 
  interface ReelViewFieldRefs {
    readonly id: FieldRef<"ReelView", 'String'>
    readonly reelId: FieldRef<"ReelView", 'String'>
    readonly viewerId: FieldRef<"ReelView", 'String'>
    readonly watchDurationSec: FieldRef<"ReelView", 'Int'>
    readonly completed: FieldRef<"ReelView", 'Boolean'>
    readonly createdAt: FieldRef<"ReelView", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReelView findUnique
   */
  export type ReelViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelView
     */
    select?: ReelViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelViewInclude<ExtArgs> | null
    /**
     * Filter, which ReelView to fetch.
     */
    where: ReelViewWhereUniqueInput
  }

  /**
   * ReelView findUniqueOrThrow
   */
  export type ReelViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelView
     */
    select?: ReelViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelViewInclude<ExtArgs> | null
    /**
     * Filter, which ReelView to fetch.
     */
    where: ReelViewWhereUniqueInput
  }

  /**
   * ReelView findFirst
   */
  export type ReelViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelView
     */
    select?: ReelViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelViewInclude<ExtArgs> | null
    /**
     * Filter, which ReelView to fetch.
     */
    where?: ReelViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelViews to fetch.
     */
    orderBy?: ReelViewOrderByWithRelationInput | ReelViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReelViews.
     */
    cursor?: ReelViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReelViews.
     */
    distinct?: ReelViewScalarFieldEnum | ReelViewScalarFieldEnum[]
  }

  /**
   * ReelView findFirstOrThrow
   */
  export type ReelViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelView
     */
    select?: ReelViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelViewInclude<ExtArgs> | null
    /**
     * Filter, which ReelView to fetch.
     */
    where?: ReelViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelViews to fetch.
     */
    orderBy?: ReelViewOrderByWithRelationInput | ReelViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReelViews.
     */
    cursor?: ReelViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReelViews.
     */
    distinct?: ReelViewScalarFieldEnum | ReelViewScalarFieldEnum[]
  }

  /**
   * ReelView findMany
   */
  export type ReelViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelView
     */
    select?: ReelViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelViewInclude<ExtArgs> | null
    /**
     * Filter, which ReelViews to fetch.
     */
    where?: ReelViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelViews to fetch.
     */
    orderBy?: ReelViewOrderByWithRelationInput | ReelViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReelViews.
     */
    cursor?: ReelViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelViews.
     */
    skip?: number
    distinct?: ReelViewScalarFieldEnum | ReelViewScalarFieldEnum[]
  }

  /**
   * ReelView create
   */
  export type ReelViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelView
     */
    select?: ReelViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelViewInclude<ExtArgs> | null
    /**
     * The data needed to create a ReelView.
     */
    data: XOR<ReelViewCreateInput, ReelViewUncheckedCreateInput>
  }

  /**
   * ReelView createMany
   */
  export type ReelViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReelViews.
     */
    data: ReelViewCreateManyInput | ReelViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReelView createManyAndReturn
   */
  export type ReelViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelView
     */
    select?: ReelViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReelViews.
     */
    data: ReelViewCreateManyInput | ReelViewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelViewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReelView update
   */
  export type ReelViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelView
     */
    select?: ReelViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelViewInclude<ExtArgs> | null
    /**
     * The data needed to update a ReelView.
     */
    data: XOR<ReelViewUpdateInput, ReelViewUncheckedUpdateInput>
    /**
     * Choose, which ReelView to update.
     */
    where: ReelViewWhereUniqueInput
  }

  /**
   * ReelView updateMany
   */
  export type ReelViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReelViews.
     */
    data: XOR<ReelViewUpdateManyMutationInput, ReelViewUncheckedUpdateManyInput>
    /**
     * Filter which ReelViews to update
     */
    where?: ReelViewWhereInput
  }

  /**
   * ReelView upsert
   */
  export type ReelViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelView
     */
    select?: ReelViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelViewInclude<ExtArgs> | null
    /**
     * The filter to search for the ReelView to update in case it exists.
     */
    where: ReelViewWhereUniqueInput
    /**
     * In case the ReelView found by the `where` argument doesn't exist, create a new ReelView with this data.
     */
    create: XOR<ReelViewCreateInput, ReelViewUncheckedCreateInput>
    /**
     * In case the ReelView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReelViewUpdateInput, ReelViewUncheckedUpdateInput>
  }

  /**
   * ReelView delete
   */
  export type ReelViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelView
     */
    select?: ReelViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelViewInclude<ExtArgs> | null
    /**
     * Filter which ReelView to delete.
     */
    where: ReelViewWhereUniqueInput
  }

  /**
   * ReelView deleteMany
   */
  export type ReelViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReelViews to delete
     */
    where?: ReelViewWhereInput
  }

  /**
   * ReelView without action
   */
  export type ReelViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelView
     */
    select?: ReelViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelViewInclude<ExtArgs> | null
  }


  /**
   * Model ReelBookmark
   */

  export type AggregateReelBookmark = {
    _count: ReelBookmarkCountAggregateOutputType | null
    _min: ReelBookmarkMinAggregateOutputType | null
    _max: ReelBookmarkMaxAggregateOutputType | null
  }

  export type ReelBookmarkMinAggregateOutputType = {
    id: string | null
    userId: string | null
    reelId: string | null
    createdAt: Date | null
  }

  export type ReelBookmarkMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    reelId: string | null
    createdAt: Date | null
  }

  export type ReelBookmarkCountAggregateOutputType = {
    id: number
    userId: number
    reelId: number
    createdAt: number
    _all: number
  }


  export type ReelBookmarkMinAggregateInputType = {
    id?: true
    userId?: true
    reelId?: true
    createdAt?: true
  }

  export type ReelBookmarkMaxAggregateInputType = {
    id?: true
    userId?: true
    reelId?: true
    createdAt?: true
  }

  export type ReelBookmarkCountAggregateInputType = {
    id?: true
    userId?: true
    reelId?: true
    createdAt?: true
    _all?: true
  }

  export type ReelBookmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReelBookmark to aggregate.
     */
    where?: ReelBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelBookmarks to fetch.
     */
    orderBy?: ReelBookmarkOrderByWithRelationInput | ReelBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReelBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelBookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReelBookmarks
    **/
    _count?: true | ReelBookmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReelBookmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReelBookmarkMaxAggregateInputType
  }

  export type GetReelBookmarkAggregateType<T extends ReelBookmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateReelBookmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReelBookmark[P]>
      : GetScalarType<T[P], AggregateReelBookmark[P]>
  }




  export type ReelBookmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReelBookmarkWhereInput
    orderBy?: ReelBookmarkOrderByWithAggregationInput | ReelBookmarkOrderByWithAggregationInput[]
    by: ReelBookmarkScalarFieldEnum[] | ReelBookmarkScalarFieldEnum
    having?: ReelBookmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReelBookmarkCountAggregateInputType | true
    _min?: ReelBookmarkMinAggregateInputType
    _max?: ReelBookmarkMaxAggregateInputType
  }

  export type ReelBookmarkGroupByOutputType = {
    id: string
    userId: string
    reelId: string
    createdAt: Date
    _count: ReelBookmarkCountAggregateOutputType | null
    _min: ReelBookmarkMinAggregateOutputType | null
    _max: ReelBookmarkMaxAggregateOutputType | null
  }

  type GetReelBookmarkGroupByPayload<T extends ReelBookmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReelBookmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReelBookmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReelBookmarkGroupByOutputType[P]>
            : GetScalarType<T[P], ReelBookmarkGroupByOutputType[P]>
        }
      >
    >


  export type ReelBookmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reelId?: boolean
    createdAt?: boolean
    reel?: boolean | ReelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reelBookmark"]>

  export type ReelBookmarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reelId?: boolean
    createdAt?: boolean
    reel?: boolean | ReelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reelBookmark"]>

  export type ReelBookmarkSelectScalar = {
    id?: boolean
    userId?: boolean
    reelId?: boolean
    createdAt?: boolean
  }

  export type ReelBookmarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reel?: boolean | ReelDefaultArgs<ExtArgs>
  }
  export type ReelBookmarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reel?: boolean | ReelDefaultArgs<ExtArgs>
  }

  export type $ReelBookmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReelBookmark"
    objects: {
      reel: Prisma.$ReelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      reelId: string
      createdAt: Date
    }, ExtArgs["result"]["reelBookmark"]>
    composites: {}
  }

  type ReelBookmarkGetPayload<S extends boolean | null | undefined | ReelBookmarkDefaultArgs> = $Result.GetResult<Prisma.$ReelBookmarkPayload, S>

  type ReelBookmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReelBookmarkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReelBookmarkCountAggregateInputType | true
    }

  export interface ReelBookmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReelBookmark'], meta: { name: 'ReelBookmark' } }
    /**
     * Find zero or one ReelBookmark that matches the filter.
     * @param {ReelBookmarkFindUniqueArgs} args - Arguments to find a ReelBookmark
     * @example
     * // Get one ReelBookmark
     * const reelBookmark = await prisma.reelBookmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReelBookmarkFindUniqueArgs>(args: SelectSubset<T, ReelBookmarkFindUniqueArgs<ExtArgs>>): Prisma__ReelBookmarkClient<$Result.GetResult<Prisma.$ReelBookmarkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReelBookmark that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReelBookmarkFindUniqueOrThrowArgs} args - Arguments to find a ReelBookmark
     * @example
     * // Get one ReelBookmark
     * const reelBookmark = await prisma.reelBookmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReelBookmarkFindUniqueOrThrowArgs>(args: SelectSubset<T, ReelBookmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReelBookmarkClient<$Result.GetResult<Prisma.$ReelBookmarkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReelBookmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelBookmarkFindFirstArgs} args - Arguments to find a ReelBookmark
     * @example
     * // Get one ReelBookmark
     * const reelBookmark = await prisma.reelBookmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReelBookmarkFindFirstArgs>(args?: SelectSubset<T, ReelBookmarkFindFirstArgs<ExtArgs>>): Prisma__ReelBookmarkClient<$Result.GetResult<Prisma.$ReelBookmarkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReelBookmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelBookmarkFindFirstOrThrowArgs} args - Arguments to find a ReelBookmark
     * @example
     * // Get one ReelBookmark
     * const reelBookmark = await prisma.reelBookmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReelBookmarkFindFirstOrThrowArgs>(args?: SelectSubset<T, ReelBookmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReelBookmarkClient<$Result.GetResult<Prisma.$ReelBookmarkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReelBookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelBookmarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReelBookmarks
     * const reelBookmarks = await prisma.reelBookmark.findMany()
     * 
     * // Get first 10 ReelBookmarks
     * const reelBookmarks = await prisma.reelBookmark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reelBookmarkWithIdOnly = await prisma.reelBookmark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReelBookmarkFindManyArgs>(args?: SelectSubset<T, ReelBookmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelBookmarkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReelBookmark.
     * @param {ReelBookmarkCreateArgs} args - Arguments to create a ReelBookmark.
     * @example
     * // Create one ReelBookmark
     * const ReelBookmark = await prisma.reelBookmark.create({
     *   data: {
     *     // ... data to create a ReelBookmark
     *   }
     * })
     * 
     */
    create<T extends ReelBookmarkCreateArgs>(args: SelectSubset<T, ReelBookmarkCreateArgs<ExtArgs>>): Prisma__ReelBookmarkClient<$Result.GetResult<Prisma.$ReelBookmarkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReelBookmarks.
     * @param {ReelBookmarkCreateManyArgs} args - Arguments to create many ReelBookmarks.
     * @example
     * // Create many ReelBookmarks
     * const reelBookmark = await prisma.reelBookmark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReelBookmarkCreateManyArgs>(args?: SelectSubset<T, ReelBookmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReelBookmarks and returns the data saved in the database.
     * @param {ReelBookmarkCreateManyAndReturnArgs} args - Arguments to create many ReelBookmarks.
     * @example
     * // Create many ReelBookmarks
     * const reelBookmark = await prisma.reelBookmark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReelBookmarks and only return the `id`
     * const reelBookmarkWithIdOnly = await prisma.reelBookmark.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReelBookmarkCreateManyAndReturnArgs>(args?: SelectSubset<T, ReelBookmarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelBookmarkPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReelBookmark.
     * @param {ReelBookmarkDeleteArgs} args - Arguments to delete one ReelBookmark.
     * @example
     * // Delete one ReelBookmark
     * const ReelBookmark = await prisma.reelBookmark.delete({
     *   where: {
     *     // ... filter to delete one ReelBookmark
     *   }
     * })
     * 
     */
    delete<T extends ReelBookmarkDeleteArgs>(args: SelectSubset<T, ReelBookmarkDeleteArgs<ExtArgs>>): Prisma__ReelBookmarkClient<$Result.GetResult<Prisma.$ReelBookmarkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReelBookmark.
     * @param {ReelBookmarkUpdateArgs} args - Arguments to update one ReelBookmark.
     * @example
     * // Update one ReelBookmark
     * const reelBookmark = await prisma.reelBookmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReelBookmarkUpdateArgs>(args: SelectSubset<T, ReelBookmarkUpdateArgs<ExtArgs>>): Prisma__ReelBookmarkClient<$Result.GetResult<Prisma.$ReelBookmarkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReelBookmarks.
     * @param {ReelBookmarkDeleteManyArgs} args - Arguments to filter ReelBookmarks to delete.
     * @example
     * // Delete a few ReelBookmarks
     * const { count } = await prisma.reelBookmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReelBookmarkDeleteManyArgs>(args?: SelectSubset<T, ReelBookmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReelBookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelBookmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReelBookmarks
     * const reelBookmark = await prisma.reelBookmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReelBookmarkUpdateManyArgs>(args: SelectSubset<T, ReelBookmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReelBookmark.
     * @param {ReelBookmarkUpsertArgs} args - Arguments to update or create a ReelBookmark.
     * @example
     * // Update or create a ReelBookmark
     * const reelBookmark = await prisma.reelBookmark.upsert({
     *   create: {
     *     // ... data to create a ReelBookmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReelBookmark we want to update
     *   }
     * })
     */
    upsert<T extends ReelBookmarkUpsertArgs>(args: SelectSubset<T, ReelBookmarkUpsertArgs<ExtArgs>>): Prisma__ReelBookmarkClient<$Result.GetResult<Prisma.$ReelBookmarkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReelBookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelBookmarkCountArgs} args - Arguments to filter ReelBookmarks to count.
     * @example
     * // Count the number of ReelBookmarks
     * const count = await prisma.reelBookmark.count({
     *   where: {
     *     // ... the filter for the ReelBookmarks we want to count
     *   }
     * })
    **/
    count<T extends ReelBookmarkCountArgs>(
      args?: Subset<T, ReelBookmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReelBookmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReelBookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelBookmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReelBookmarkAggregateArgs>(args: Subset<T, ReelBookmarkAggregateArgs>): Prisma.PrismaPromise<GetReelBookmarkAggregateType<T>>

    /**
     * Group by ReelBookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelBookmarkGroupByArgs} args - Group by arguments.
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
      T extends ReelBookmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReelBookmarkGroupByArgs['orderBy'] }
        : { orderBy?: ReelBookmarkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReelBookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReelBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReelBookmark model
   */
  readonly fields: ReelBookmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReelBookmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReelBookmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reel<T extends ReelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReelDefaultArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ReelBookmark model
   */ 
  interface ReelBookmarkFieldRefs {
    readonly id: FieldRef<"ReelBookmark", 'String'>
    readonly userId: FieldRef<"ReelBookmark", 'String'>
    readonly reelId: FieldRef<"ReelBookmark", 'String'>
    readonly createdAt: FieldRef<"ReelBookmark", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReelBookmark findUnique
   */
  export type ReelBookmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelBookmark
     */
    select?: ReelBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which ReelBookmark to fetch.
     */
    where: ReelBookmarkWhereUniqueInput
  }

  /**
   * ReelBookmark findUniqueOrThrow
   */
  export type ReelBookmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelBookmark
     */
    select?: ReelBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which ReelBookmark to fetch.
     */
    where: ReelBookmarkWhereUniqueInput
  }

  /**
   * ReelBookmark findFirst
   */
  export type ReelBookmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelBookmark
     */
    select?: ReelBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which ReelBookmark to fetch.
     */
    where?: ReelBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelBookmarks to fetch.
     */
    orderBy?: ReelBookmarkOrderByWithRelationInput | ReelBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReelBookmarks.
     */
    cursor?: ReelBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelBookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReelBookmarks.
     */
    distinct?: ReelBookmarkScalarFieldEnum | ReelBookmarkScalarFieldEnum[]
  }

  /**
   * ReelBookmark findFirstOrThrow
   */
  export type ReelBookmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelBookmark
     */
    select?: ReelBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which ReelBookmark to fetch.
     */
    where?: ReelBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelBookmarks to fetch.
     */
    orderBy?: ReelBookmarkOrderByWithRelationInput | ReelBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReelBookmarks.
     */
    cursor?: ReelBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelBookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReelBookmarks.
     */
    distinct?: ReelBookmarkScalarFieldEnum | ReelBookmarkScalarFieldEnum[]
  }

  /**
   * ReelBookmark findMany
   */
  export type ReelBookmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelBookmark
     */
    select?: ReelBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which ReelBookmarks to fetch.
     */
    where?: ReelBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelBookmarks to fetch.
     */
    orderBy?: ReelBookmarkOrderByWithRelationInput | ReelBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReelBookmarks.
     */
    cursor?: ReelBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelBookmarks.
     */
    skip?: number
    distinct?: ReelBookmarkScalarFieldEnum | ReelBookmarkScalarFieldEnum[]
  }

  /**
   * ReelBookmark create
   */
  export type ReelBookmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelBookmark
     */
    select?: ReelBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelBookmarkInclude<ExtArgs> | null
    /**
     * The data needed to create a ReelBookmark.
     */
    data: XOR<ReelBookmarkCreateInput, ReelBookmarkUncheckedCreateInput>
  }

  /**
   * ReelBookmark createMany
   */
  export type ReelBookmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReelBookmarks.
     */
    data: ReelBookmarkCreateManyInput | ReelBookmarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReelBookmark createManyAndReturn
   */
  export type ReelBookmarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelBookmark
     */
    select?: ReelBookmarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReelBookmarks.
     */
    data: ReelBookmarkCreateManyInput | ReelBookmarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelBookmarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReelBookmark update
   */
  export type ReelBookmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelBookmark
     */
    select?: ReelBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelBookmarkInclude<ExtArgs> | null
    /**
     * The data needed to update a ReelBookmark.
     */
    data: XOR<ReelBookmarkUpdateInput, ReelBookmarkUncheckedUpdateInput>
    /**
     * Choose, which ReelBookmark to update.
     */
    where: ReelBookmarkWhereUniqueInput
  }

  /**
   * ReelBookmark updateMany
   */
  export type ReelBookmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReelBookmarks.
     */
    data: XOR<ReelBookmarkUpdateManyMutationInput, ReelBookmarkUncheckedUpdateManyInput>
    /**
     * Filter which ReelBookmarks to update
     */
    where?: ReelBookmarkWhereInput
  }

  /**
   * ReelBookmark upsert
   */
  export type ReelBookmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelBookmark
     */
    select?: ReelBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelBookmarkInclude<ExtArgs> | null
    /**
     * The filter to search for the ReelBookmark to update in case it exists.
     */
    where: ReelBookmarkWhereUniqueInput
    /**
     * In case the ReelBookmark found by the `where` argument doesn't exist, create a new ReelBookmark with this data.
     */
    create: XOR<ReelBookmarkCreateInput, ReelBookmarkUncheckedCreateInput>
    /**
     * In case the ReelBookmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReelBookmarkUpdateInput, ReelBookmarkUncheckedUpdateInput>
  }

  /**
   * ReelBookmark delete
   */
  export type ReelBookmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelBookmark
     */
    select?: ReelBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelBookmarkInclude<ExtArgs> | null
    /**
     * Filter which ReelBookmark to delete.
     */
    where: ReelBookmarkWhereUniqueInput
  }

  /**
   * ReelBookmark deleteMany
   */
  export type ReelBookmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReelBookmarks to delete
     */
    where?: ReelBookmarkWhereInput
  }

  /**
   * ReelBookmark without action
   */
  export type ReelBookmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelBookmark
     */
    select?: ReelBookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelBookmarkInclude<ExtArgs> | null
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


  export const ReelScalarFieldEnum: {
    id: 'id',
    creatorId: 'creatorId',
    caption: 'caption',
    videoUrl: 'videoUrl',
    thumbnailUrl: 'thumbnailUrl',
    durationSec: 'durationSec',
    viewsCount: 'viewsCount',
    likesCount: 'likesCount',
    commentsCount: 'commentsCount',
    sharesCount: 'sharesCount',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type ReelScalarFieldEnum = (typeof ReelScalarFieldEnum)[keyof typeof ReelScalarFieldEnum]


  export const ReelViewScalarFieldEnum: {
    id: 'id',
    reelId: 'reelId',
    viewerId: 'viewerId',
    watchDurationSec: 'watchDurationSec',
    completed: 'completed',
    createdAt: 'createdAt'
  };

  export type ReelViewScalarFieldEnum = (typeof ReelViewScalarFieldEnum)[keyof typeof ReelViewScalarFieldEnum]


  export const ReelBookmarkScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    reelId: 'reelId',
    createdAt: 'createdAt'
  };

  export type ReelBookmarkScalarFieldEnum = (typeof ReelBookmarkScalarFieldEnum)[keyof typeof ReelBookmarkScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type ReelWhereInput = {
    AND?: ReelWhereInput | ReelWhereInput[]
    OR?: ReelWhereInput[]
    NOT?: ReelWhereInput | ReelWhereInput[]
    id?: StringFilter<"Reel"> | string
    creatorId?: StringFilter<"Reel"> | string
    caption?: StringFilter<"Reel"> | string
    videoUrl?: StringFilter<"Reel"> | string
    thumbnailUrl?: StringNullableFilter<"Reel"> | string | null
    durationSec?: IntFilter<"Reel"> | number
    viewsCount?: IntFilter<"Reel"> | number
    likesCount?: IntFilter<"Reel"> | number
    commentsCount?: IntFilter<"Reel"> | number
    sharesCount?: IntFilter<"Reel"> | number
    createdAt?: DateTimeFilter<"Reel"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Reel"> | Date | string | null
    views?: ReelViewListRelationFilter
    bookmarks?: ReelBookmarkListRelationFilter
  }

  export type ReelOrderByWithRelationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    caption?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    durationSec?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    sharesCount?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    views?: ReelViewOrderByRelationAggregateInput
    bookmarks?: ReelBookmarkOrderByRelationAggregateInput
  }

  export type ReelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReelWhereInput | ReelWhereInput[]
    OR?: ReelWhereInput[]
    NOT?: ReelWhereInput | ReelWhereInput[]
    creatorId?: StringFilter<"Reel"> | string
    caption?: StringFilter<"Reel"> | string
    videoUrl?: StringFilter<"Reel"> | string
    thumbnailUrl?: StringNullableFilter<"Reel"> | string | null
    durationSec?: IntFilter<"Reel"> | number
    viewsCount?: IntFilter<"Reel"> | number
    likesCount?: IntFilter<"Reel"> | number
    commentsCount?: IntFilter<"Reel"> | number
    sharesCount?: IntFilter<"Reel"> | number
    createdAt?: DateTimeFilter<"Reel"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Reel"> | Date | string | null
    views?: ReelViewListRelationFilter
    bookmarks?: ReelBookmarkListRelationFilter
  }, "id">

  export type ReelOrderByWithAggregationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    caption?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    durationSec?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    sharesCount?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ReelCountOrderByAggregateInput
    _avg?: ReelAvgOrderByAggregateInput
    _max?: ReelMaxOrderByAggregateInput
    _min?: ReelMinOrderByAggregateInput
    _sum?: ReelSumOrderByAggregateInput
  }

  export type ReelScalarWhereWithAggregatesInput = {
    AND?: ReelScalarWhereWithAggregatesInput | ReelScalarWhereWithAggregatesInput[]
    OR?: ReelScalarWhereWithAggregatesInput[]
    NOT?: ReelScalarWhereWithAggregatesInput | ReelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reel"> | string
    creatorId?: StringWithAggregatesFilter<"Reel"> | string
    caption?: StringWithAggregatesFilter<"Reel"> | string
    videoUrl?: StringWithAggregatesFilter<"Reel"> | string
    thumbnailUrl?: StringNullableWithAggregatesFilter<"Reel"> | string | null
    durationSec?: IntWithAggregatesFilter<"Reel"> | number
    viewsCount?: IntWithAggregatesFilter<"Reel"> | number
    likesCount?: IntWithAggregatesFilter<"Reel"> | number
    commentsCount?: IntWithAggregatesFilter<"Reel"> | number
    sharesCount?: IntWithAggregatesFilter<"Reel"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Reel"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Reel"> | Date | string | null
  }

  export type ReelViewWhereInput = {
    AND?: ReelViewWhereInput | ReelViewWhereInput[]
    OR?: ReelViewWhereInput[]
    NOT?: ReelViewWhereInput | ReelViewWhereInput[]
    id?: StringFilter<"ReelView"> | string
    reelId?: StringFilter<"ReelView"> | string
    viewerId?: StringFilter<"ReelView"> | string
    watchDurationSec?: IntFilter<"ReelView"> | number
    completed?: BoolFilter<"ReelView"> | boolean
    createdAt?: DateTimeFilter<"ReelView"> | Date | string
    reel?: XOR<ReelRelationFilter, ReelWhereInput>
  }

  export type ReelViewOrderByWithRelationInput = {
    id?: SortOrder
    reelId?: SortOrder
    viewerId?: SortOrder
    watchDurationSec?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    reel?: ReelOrderByWithRelationInput
  }

  export type ReelViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReelViewWhereInput | ReelViewWhereInput[]
    OR?: ReelViewWhereInput[]
    NOT?: ReelViewWhereInput | ReelViewWhereInput[]
    reelId?: StringFilter<"ReelView"> | string
    viewerId?: StringFilter<"ReelView"> | string
    watchDurationSec?: IntFilter<"ReelView"> | number
    completed?: BoolFilter<"ReelView"> | boolean
    createdAt?: DateTimeFilter<"ReelView"> | Date | string
    reel?: XOR<ReelRelationFilter, ReelWhereInput>
  }, "id">

  export type ReelViewOrderByWithAggregationInput = {
    id?: SortOrder
    reelId?: SortOrder
    viewerId?: SortOrder
    watchDurationSec?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    _count?: ReelViewCountOrderByAggregateInput
    _avg?: ReelViewAvgOrderByAggregateInput
    _max?: ReelViewMaxOrderByAggregateInput
    _min?: ReelViewMinOrderByAggregateInput
    _sum?: ReelViewSumOrderByAggregateInput
  }

  export type ReelViewScalarWhereWithAggregatesInput = {
    AND?: ReelViewScalarWhereWithAggregatesInput | ReelViewScalarWhereWithAggregatesInput[]
    OR?: ReelViewScalarWhereWithAggregatesInput[]
    NOT?: ReelViewScalarWhereWithAggregatesInput | ReelViewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReelView"> | string
    reelId?: StringWithAggregatesFilter<"ReelView"> | string
    viewerId?: StringWithAggregatesFilter<"ReelView"> | string
    watchDurationSec?: IntWithAggregatesFilter<"ReelView"> | number
    completed?: BoolWithAggregatesFilter<"ReelView"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ReelView"> | Date | string
  }

  export type ReelBookmarkWhereInput = {
    AND?: ReelBookmarkWhereInput | ReelBookmarkWhereInput[]
    OR?: ReelBookmarkWhereInput[]
    NOT?: ReelBookmarkWhereInput | ReelBookmarkWhereInput[]
    id?: StringFilter<"ReelBookmark"> | string
    userId?: StringFilter<"ReelBookmark"> | string
    reelId?: StringFilter<"ReelBookmark"> | string
    createdAt?: DateTimeFilter<"ReelBookmark"> | Date | string
    reel?: XOR<ReelRelationFilter, ReelWhereInput>
  }

  export type ReelBookmarkOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    reelId?: SortOrder
    createdAt?: SortOrder
    reel?: ReelOrderByWithRelationInput
  }

  export type ReelBookmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_reelId?: ReelBookmarkUserIdReelIdCompoundUniqueInput
    AND?: ReelBookmarkWhereInput | ReelBookmarkWhereInput[]
    OR?: ReelBookmarkWhereInput[]
    NOT?: ReelBookmarkWhereInput | ReelBookmarkWhereInput[]
    userId?: StringFilter<"ReelBookmark"> | string
    reelId?: StringFilter<"ReelBookmark"> | string
    createdAt?: DateTimeFilter<"ReelBookmark"> | Date | string
    reel?: XOR<ReelRelationFilter, ReelWhereInput>
  }, "id" | "userId_reelId">

  export type ReelBookmarkOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    reelId?: SortOrder
    createdAt?: SortOrder
    _count?: ReelBookmarkCountOrderByAggregateInput
    _max?: ReelBookmarkMaxOrderByAggregateInput
    _min?: ReelBookmarkMinOrderByAggregateInput
  }

  export type ReelBookmarkScalarWhereWithAggregatesInput = {
    AND?: ReelBookmarkScalarWhereWithAggregatesInput | ReelBookmarkScalarWhereWithAggregatesInput[]
    OR?: ReelBookmarkScalarWhereWithAggregatesInput[]
    NOT?: ReelBookmarkScalarWhereWithAggregatesInput | ReelBookmarkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReelBookmark"> | string
    userId?: StringWithAggregatesFilter<"ReelBookmark"> | string
    reelId?: StringWithAggregatesFilter<"ReelBookmark"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReelBookmark"> | Date | string
  }

  export type ReelCreateInput = {
    id?: string
    creatorId: string
    caption: string
    videoUrl: string
    thumbnailUrl?: string | null
    durationSec?: number
    viewsCount?: number
    likesCount?: number
    commentsCount?: number
    sharesCount?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    views?: ReelViewCreateNestedManyWithoutReelInput
    bookmarks?: ReelBookmarkCreateNestedManyWithoutReelInput
  }

  export type ReelUncheckedCreateInput = {
    id?: string
    creatorId: string
    caption: string
    videoUrl: string
    thumbnailUrl?: string | null
    durationSec?: number
    viewsCount?: number
    likesCount?: number
    commentsCount?: number
    sharesCount?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    views?: ReelViewUncheckedCreateNestedManyWithoutReelInput
    bookmarks?: ReelBookmarkUncheckedCreateNestedManyWithoutReelInput
  }

  export type ReelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: IntFieldUpdateOperationsInput | number
    viewsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    sharesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: ReelViewUpdateManyWithoutReelNestedInput
    bookmarks?: ReelBookmarkUpdateManyWithoutReelNestedInput
  }

  export type ReelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: IntFieldUpdateOperationsInput | number
    viewsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    sharesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: ReelViewUncheckedUpdateManyWithoutReelNestedInput
    bookmarks?: ReelBookmarkUncheckedUpdateManyWithoutReelNestedInput
  }

  export type ReelCreateManyInput = {
    id?: string
    creatorId: string
    caption: string
    videoUrl: string
    thumbnailUrl?: string | null
    durationSec?: number
    viewsCount?: number
    likesCount?: number
    commentsCount?: number
    sharesCount?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: IntFieldUpdateOperationsInput | number
    viewsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    sharesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: IntFieldUpdateOperationsInput | number
    viewsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    sharesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReelViewCreateInput = {
    id?: string
    viewerId: string
    watchDurationSec: number
    completed?: boolean
    createdAt?: Date | string
    reel: ReelCreateNestedOneWithoutViewsInput
  }

  export type ReelViewUncheckedCreateInput = {
    id?: string
    reelId: string
    viewerId: string
    watchDurationSec: number
    completed?: boolean
    createdAt?: Date | string
  }

  export type ReelViewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewerId?: StringFieldUpdateOperationsInput | string
    watchDurationSec?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reel?: ReelUpdateOneRequiredWithoutViewsNestedInput
  }

  export type ReelViewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reelId?: StringFieldUpdateOperationsInput | string
    viewerId?: StringFieldUpdateOperationsInput | string
    watchDurationSec?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReelViewCreateManyInput = {
    id?: string
    reelId: string
    viewerId: string
    watchDurationSec: number
    completed?: boolean
    createdAt?: Date | string
  }

  export type ReelViewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewerId?: StringFieldUpdateOperationsInput | string
    watchDurationSec?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReelViewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reelId?: StringFieldUpdateOperationsInput | string
    viewerId?: StringFieldUpdateOperationsInput | string
    watchDurationSec?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReelBookmarkCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    reel: ReelCreateNestedOneWithoutBookmarksInput
  }

  export type ReelBookmarkUncheckedCreateInput = {
    id?: string
    userId: string
    reelId: string
    createdAt?: Date | string
  }

  export type ReelBookmarkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reel?: ReelUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type ReelBookmarkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReelBookmarkCreateManyInput = {
    id?: string
    userId: string
    reelId: string
    createdAt?: Date | string
  }

  export type ReelBookmarkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReelBookmarkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reelId?: StringFieldUpdateOperationsInput | string
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

  export type ReelViewListRelationFilter = {
    every?: ReelViewWhereInput
    some?: ReelViewWhereInput
    none?: ReelViewWhereInput
  }

  export type ReelBookmarkListRelationFilter = {
    every?: ReelBookmarkWhereInput
    some?: ReelBookmarkWhereInput
    none?: ReelBookmarkWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReelViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReelBookmarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReelCountOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    caption?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    durationSec?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    sharesCount?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ReelAvgOrderByAggregateInput = {
    durationSec?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    sharesCount?: SortOrder
  }

  export type ReelMaxOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    caption?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    durationSec?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    sharesCount?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ReelMinOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    caption?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    durationSec?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    sharesCount?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ReelSumOrderByAggregateInput = {
    durationSec?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    sharesCount?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ReelRelationFilter = {
    is?: ReelWhereInput
    isNot?: ReelWhereInput
  }

  export type ReelViewCountOrderByAggregateInput = {
    id?: SortOrder
    reelId?: SortOrder
    viewerId?: SortOrder
    watchDurationSec?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
  }

  export type ReelViewAvgOrderByAggregateInput = {
    watchDurationSec?: SortOrder
  }

  export type ReelViewMaxOrderByAggregateInput = {
    id?: SortOrder
    reelId?: SortOrder
    viewerId?: SortOrder
    watchDurationSec?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
  }

  export type ReelViewMinOrderByAggregateInput = {
    id?: SortOrder
    reelId?: SortOrder
    viewerId?: SortOrder
    watchDurationSec?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
  }

  export type ReelViewSumOrderByAggregateInput = {
    watchDurationSec?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ReelBookmarkUserIdReelIdCompoundUniqueInput = {
    userId: string
    reelId: string
  }

  export type ReelBookmarkCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reelId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReelBookmarkMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reelId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReelBookmarkMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reelId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReelViewCreateNestedManyWithoutReelInput = {
    create?: XOR<ReelViewCreateWithoutReelInput, ReelViewUncheckedCreateWithoutReelInput> | ReelViewCreateWithoutReelInput[] | ReelViewUncheckedCreateWithoutReelInput[]
    connectOrCreate?: ReelViewCreateOrConnectWithoutReelInput | ReelViewCreateOrConnectWithoutReelInput[]
    createMany?: ReelViewCreateManyReelInputEnvelope
    connect?: ReelViewWhereUniqueInput | ReelViewWhereUniqueInput[]
  }

  export type ReelBookmarkCreateNestedManyWithoutReelInput = {
    create?: XOR<ReelBookmarkCreateWithoutReelInput, ReelBookmarkUncheckedCreateWithoutReelInput> | ReelBookmarkCreateWithoutReelInput[] | ReelBookmarkUncheckedCreateWithoutReelInput[]
    connectOrCreate?: ReelBookmarkCreateOrConnectWithoutReelInput | ReelBookmarkCreateOrConnectWithoutReelInput[]
    createMany?: ReelBookmarkCreateManyReelInputEnvelope
    connect?: ReelBookmarkWhereUniqueInput | ReelBookmarkWhereUniqueInput[]
  }

  export type ReelViewUncheckedCreateNestedManyWithoutReelInput = {
    create?: XOR<ReelViewCreateWithoutReelInput, ReelViewUncheckedCreateWithoutReelInput> | ReelViewCreateWithoutReelInput[] | ReelViewUncheckedCreateWithoutReelInput[]
    connectOrCreate?: ReelViewCreateOrConnectWithoutReelInput | ReelViewCreateOrConnectWithoutReelInput[]
    createMany?: ReelViewCreateManyReelInputEnvelope
    connect?: ReelViewWhereUniqueInput | ReelViewWhereUniqueInput[]
  }

  export type ReelBookmarkUncheckedCreateNestedManyWithoutReelInput = {
    create?: XOR<ReelBookmarkCreateWithoutReelInput, ReelBookmarkUncheckedCreateWithoutReelInput> | ReelBookmarkCreateWithoutReelInput[] | ReelBookmarkUncheckedCreateWithoutReelInput[]
    connectOrCreate?: ReelBookmarkCreateOrConnectWithoutReelInput | ReelBookmarkCreateOrConnectWithoutReelInput[]
    createMany?: ReelBookmarkCreateManyReelInputEnvelope
    connect?: ReelBookmarkWhereUniqueInput | ReelBookmarkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type ReelViewUpdateManyWithoutReelNestedInput = {
    create?: XOR<ReelViewCreateWithoutReelInput, ReelViewUncheckedCreateWithoutReelInput> | ReelViewCreateWithoutReelInput[] | ReelViewUncheckedCreateWithoutReelInput[]
    connectOrCreate?: ReelViewCreateOrConnectWithoutReelInput | ReelViewCreateOrConnectWithoutReelInput[]
    upsert?: ReelViewUpsertWithWhereUniqueWithoutReelInput | ReelViewUpsertWithWhereUniqueWithoutReelInput[]
    createMany?: ReelViewCreateManyReelInputEnvelope
    set?: ReelViewWhereUniqueInput | ReelViewWhereUniqueInput[]
    disconnect?: ReelViewWhereUniqueInput | ReelViewWhereUniqueInput[]
    delete?: ReelViewWhereUniqueInput | ReelViewWhereUniqueInput[]
    connect?: ReelViewWhereUniqueInput | ReelViewWhereUniqueInput[]
    update?: ReelViewUpdateWithWhereUniqueWithoutReelInput | ReelViewUpdateWithWhereUniqueWithoutReelInput[]
    updateMany?: ReelViewUpdateManyWithWhereWithoutReelInput | ReelViewUpdateManyWithWhereWithoutReelInput[]
    deleteMany?: ReelViewScalarWhereInput | ReelViewScalarWhereInput[]
  }

  export type ReelBookmarkUpdateManyWithoutReelNestedInput = {
    create?: XOR<ReelBookmarkCreateWithoutReelInput, ReelBookmarkUncheckedCreateWithoutReelInput> | ReelBookmarkCreateWithoutReelInput[] | ReelBookmarkUncheckedCreateWithoutReelInput[]
    connectOrCreate?: ReelBookmarkCreateOrConnectWithoutReelInput | ReelBookmarkCreateOrConnectWithoutReelInput[]
    upsert?: ReelBookmarkUpsertWithWhereUniqueWithoutReelInput | ReelBookmarkUpsertWithWhereUniqueWithoutReelInput[]
    createMany?: ReelBookmarkCreateManyReelInputEnvelope
    set?: ReelBookmarkWhereUniqueInput | ReelBookmarkWhereUniqueInput[]
    disconnect?: ReelBookmarkWhereUniqueInput | ReelBookmarkWhereUniqueInput[]
    delete?: ReelBookmarkWhereUniqueInput | ReelBookmarkWhereUniqueInput[]
    connect?: ReelBookmarkWhereUniqueInput | ReelBookmarkWhereUniqueInput[]
    update?: ReelBookmarkUpdateWithWhereUniqueWithoutReelInput | ReelBookmarkUpdateWithWhereUniqueWithoutReelInput[]
    updateMany?: ReelBookmarkUpdateManyWithWhereWithoutReelInput | ReelBookmarkUpdateManyWithWhereWithoutReelInput[]
    deleteMany?: ReelBookmarkScalarWhereInput | ReelBookmarkScalarWhereInput[]
  }

  export type ReelViewUncheckedUpdateManyWithoutReelNestedInput = {
    create?: XOR<ReelViewCreateWithoutReelInput, ReelViewUncheckedCreateWithoutReelInput> | ReelViewCreateWithoutReelInput[] | ReelViewUncheckedCreateWithoutReelInput[]
    connectOrCreate?: ReelViewCreateOrConnectWithoutReelInput | ReelViewCreateOrConnectWithoutReelInput[]
    upsert?: ReelViewUpsertWithWhereUniqueWithoutReelInput | ReelViewUpsertWithWhereUniqueWithoutReelInput[]
    createMany?: ReelViewCreateManyReelInputEnvelope
    set?: ReelViewWhereUniqueInput | ReelViewWhereUniqueInput[]
    disconnect?: ReelViewWhereUniqueInput | ReelViewWhereUniqueInput[]
    delete?: ReelViewWhereUniqueInput | ReelViewWhereUniqueInput[]
    connect?: ReelViewWhereUniqueInput | ReelViewWhereUniqueInput[]
    update?: ReelViewUpdateWithWhereUniqueWithoutReelInput | ReelViewUpdateWithWhereUniqueWithoutReelInput[]
    updateMany?: ReelViewUpdateManyWithWhereWithoutReelInput | ReelViewUpdateManyWithWhereWithoutReelInput[]
    deleteMany?: ReelViewScalarWhereInput | ReelViewScalarWhereInput[]
  }

  export type ReelBookmarkUncheckedUpdateManyWithoutReelNestedInput = {
    create?: XOR<ReelBookmarkCreateWithoutReelInput, ReelBookmarkUncheckedCreateWithoutReelInput> | ReelBookmarkCreateWithoutReelInput[] | ReelBookmarkUncheckedCreateWithoutReelInput[]
    connectOrCreate?: ReelBookmarkCreateOrConnectWithoutReelInput | ReelBookmarkCreateOrConnectWithoutReelInput[]
    upsert?: ReelBookmarkUpsertWithWhereUniqueWithoutReelInput | ReelBookmarkUpsertWithWhereUniqueWithoutReelInput[]
    createMany?: ReelBookmarkCreateManyReelInputEnvelope
    set?: ReelBookmarkWhereUniqueInput | ReelBookmarkWhereUniqueInput[]
    disconnect?: ReelBookmarkWhereUniqueInput | ReelBookmarkWhereUniqueInput[]
    delete?: ReelBookmarkWhereUniqueInput | ReelBookmarkWhereUniqueInput[]
    connect?: ReelBookmarkWhereUniqueInput | ReelBookmarkWhereUniqueInput[]
    update?: ReelBookmarkUpdateWithWhereUniqueWithoutReelInput | ReelBookmarkUpdateWithWhereUniqueWithoutReelInput[]
    updateMany?: ReelBookmarkUpdateManyWithWhereWithoutReelInput | ReelBookmarkUpdateManyWithWhereWithoutReelInput[]
    deleteMany?: ReelBookmarkScalarWhereInput | ReelBookmarkScalarWhereInput[]
  }

  export type ReelCreateNestedOneWithoutViewsInput = {
    create?: XOR<ReelCreateWithoutViewsInput, ReelUncheckedCreateWithoutViewsInput>
    connectOrCreate?: ReelCreateOrConnectWithoutViewsInput
    connect?: ReelWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ReelUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<ReelCreateWithoutViewsInput, ReelUncheckedCreateWithoutViewsInput>
    connectOrCreate?: ReelCreateOrConnectWithoutViewsInput
    upsert?: ReelUpsertWithoutViewsInput
    connect?: ReelWhereUniqueInput
    update?: XOR<XOR<ReelUpdateToOneWithWhereWithoutViewsInput, ReelUpdateWithoutViewsInput>, ReelUncheckedUpdateWithoutViewsInput>
  }

  export type ReelCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<ReelCreateWithoutBookmarksInput, ReelUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: ReelCreateOrConnectWithoutBookmarksInput
    connect?: ReelWhereUniqueInput
  }

  export type ReelUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<ReelCreateWithoutBookmarksInput, ReelUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: ReelCreateOrConnectWithoutBookmarksInput
    upsert?: ReelUpsertWithoutBookmarksInput
    connect?: ReelWhereUniqueInput
    update?: XOR<XOR<ReelUpdateToOneWithWhereWithoutBookmarksInput, ReelUpdateWithoutBookmarksInput>, ReelUncheckedUpdateWithoutBookmarksInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ReelViewCreateWithoutReelInput = {
    id?: string
    viewerId: string
    watchDurationSec: number
    completed?: boolean
    createdAt?: Date | string
  }

  export type ReelViewUncheckedCreateWithoutReelInput = {
    id?: string
    viewerId: string
    watchDurationSec: number
    completed?: boolean
    createdAt?: Date | string
  }

  export type ReelViewCreateOrConnectWithoutReelInput = {
    where: ReelViewWhereUniqueInput
    create: XOR<ReelViewCreateWithoutReelInput, ReelViewUncheckedCreateWithoutReelInput>
  }

  export type ReelViewCreateManyReelInputEnvelope = {
    data: ReelViewCreateManyReelInput | ReelViewCreateManyReelInput[]
    skipDuplicates?: boolean
  }

  export type ReelBookmarkCreateWithoutReelInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ReelBookmarkUncheckedCreateWithoutReelInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ReelBookmarkCreateOrConnectWithoutReelInput = {
    where: ReelBookmarkWhereUniqueInput
    create: XOR<ReelBookmarkCreateWithoutReelInput, ReelBookmarkUncheckedCreateWithoutReelInput>
  }

  export type ReelBookmarkCreateManyReelInputEnvelope = {
    data: ReelBookmarkCreateManyReelInput | ReelBookmarkCreateManyReelInput[]
    skipDuplicates?: boolean
  }

  export type ReelViewUpsertWithWhereUniqueWithoutReelInput = {
    where: ReelViewWhereUniqueInput
    update: XOR<ReelViewUpdateWithoutReelInput, ReelViewUncheckedUpdateWithoutReelInput>
    create: XOR<ReelViewCreateWithoutReelInput, ReelViewUncheckedCreateWithoutReelInput>
  }

  export type ReelViewUpdateWithWhereUniqueWithoutReelInput = {
    where: ReelViewWhereUniqueInput
    data: XOR<ReelViewUpdateWithoutReelInput, ReelViewUncheckedUpdateWithoutReelInput>
  }

  export type ReelViewUpdateManyWithWhereWithoutReelInput = {
    where: ReelViewScalarWhereInput
    data: XOR<ReelViewUpdateManyMutationInput, ReelViewUncheckedUpdateManyWithoutReelInput>
  }

  export type ReelViewScalarWhereInput = {
    AND?: ReelViewScalarWhereInput | ReelViewScalarWhereInput[]
    OR?: ReelViewScalarWhereInput[]
    NOT?: ReelViewScalarWhereInput | ReelViewScalarWhereInput[]
    id?: StringFilter<"ReelView"> | string
    reelId?: StringFilter<"ReelView"> | string
    viewerId?: StringFilter<"ReelView"> | string
    watchDurationSec?: IntFilter<"ReelView"> | number
    completed?: BoolFilter<"ReelView"> | boolean
    createdAt?: DateTimeFilter<"ReelView"> | Date | string
  }

  export type ReelBookmarkUpsertWithWhereUniqueWithoutReelInput = {
    where: ReelBookmarkWhereUniqueInput
    update: XOR<ReelBookmarkUpdateWithoutReelInput, ReelBookmarkUncheckedUpdateWithoutReelInput>
    create: XOR<ReelBookmarkCreateWithoutReelInput, ReelBookmarkUncheckedCreateWithoutReelInput>
  }

  export type ReelBookmarkUpdateWithWhereUniqueWithoutReelInput = {
    where: ReelBookmarkWhereUniqueInput
    data: XOR<ReelBookmarkUpdateWithoutReelInput, ReelBookmarkUncheckedUpdateWithoutReelInput>
  }

  export type ReelBookmarkUpdateManyWithWhereWithoutReelInput = {
    where: ReelBookmarkScalarWhereInput
    data: XOR<ReelBookmarkUpdateManyMutationInput, ReelBookmarkUncheckedUpdateManyWithoutReelInput>
  }

  export type ReelBookmarkScalarWhereInput = {
    AND?: ReelBookmarkScalarWhereInput | ReelBookmarkScalarWhereInput[]
    OR?: ReelBookmarkScalarWhereInput[]
    NOT?: ReelBookmarkScalarWhereInput | ReelBookmarkScalarWhereInput[]
    id?: StringFilter<"ReelBookmark"> | string
    userId?: StringFilter<"ReelBookmark"> | string
    reelId?: StringFilter<"ReelBookmark"> | string
    createdAt?: DateTimeFilter<"ReelBookmark"> | Date | string
  }

  export type ReelCreateWithoutViewsInput = {
    id?: string
    creatorId: string
    caption: string
    videoUrl: string
    thumbnailUrl?: string | null
    durationSec?: number
    viewsCount?: number
    likesCount?: number
    commentsCount?: number
    sharesCount?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    bookmarks?: ReelBookmarkCreateNestedManyWithoutReelInput
  }

  export type ReelUncheckedCreateWithoutViewsInput = {
    id?: string
    creatorId: string
    caption: string
    videoUrl: string
    thumbnailUrl?: string | null
    durationSec?: number
    viewsCount?: number
    likesCount?: number
    commentsCount?: number
    sharesCount?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    bookmarks?: ReelBookmarkUncheckedCreateNestedManyWithoutReelInput
  }

  export type ReelCreateOrConnectWithoutViewsInput = {
    where: ReelWhereUniqueInput
    create: XOR<ReelCreateWithoutViewsInput, ReelUncheckedCreateWithoutViewsInput>
  }

  export type ReelUpsertWithoutViewsInput = {
    update: XOR<ReelUpdateWithoutViewsInput, ReelUncheckedUpdateWithoutViewsInput>
    create: XOR<ReelCreateWithoutViewsInput, ReelUncheckedCreateWithoutViewsInput>
    where?: ReelWhereInput
  }

  export type ReelUpdateToOneWithWhereWithoutViewsInput = {
    where?: ReelWhereInput
    data: XOR<ReelUpdateWithoutViewsInput, ReelUncheckedUpdateWithoutViewsInput>
  }

  export type ReelUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: IntFieldUpdateOperationsInput | number
    viewsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    sharesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookmarks?: ReelBookmarkUpdateManyWithoutReelNestedInput
  }

  export type ReelUncheckedUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: IntFieldUpdateOperationsInput | number
    viewsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    sharesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookmarks?: ReelBookmarkUncheckedUpdateManyWithoutReelNestedInput
  }

  export type ReelCreateWithoutBookmarksInput = {
    id?: string
    creatorId: string
    caption: string
    videoUrl: string
    thumbnailUrl?: string | null
    durationSec?: number
    viewsCount?: number
    likesCount?: number
    commentsCount?: number
    sharesCount?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    views?: ReelViewCreateNestedManyWithoutReelInput
  }

  export type ReelUncheckedCreateWithoutBookmarksInput = {
    id?: string
    creatorId: string
    caption: string
    videoUrl: string
    thumbnailUrl?: string | null
    durationSec?: number
    viewsCount?: number
    likesCount?: number
    commentsCount?: number
    sharesCount?: number
    createdAt?: Date | string
    deletedAt?: Date | string | null
    views?: ReelViewUncheckedCreateNestedManyWithoutReelInput
  }

  export type ReelCreateOrConnectWithoutBookmarksInput = {
    where: ReelWhereUniqueInput
    create: XOR<ReelCreateWithoutBookmarksInput, ReelUncheckedCreateWithoutBookmarksInput>
  }

  export type ReelUpsertWithoutBookmarksInput = {
    update: XOR<ReelUpdateWithoutBookmarksInput, ReelUncheckedUpdateWithoutBookmarksInput>
    create: XOR<ReelCreateWithoutBookmarksInput, ReelUncheckedCreateWithoutBookmarksInput>
    where?: ReelWhereInput
  }

  export type ReelUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: ReelWhereInput
    data: XOR<ReelUpdateWithoutBookmarksInput, ReelUncheckedUpdateWithoutBookmarksInput>
  }

  export type ReelUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: IntFieldUpdateOperationsInput | number
    viewsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    sharesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: ReelViewUpdateManyWithoutReelNestedInput
  }

  export type ReelUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSec?: IntFieldUpdateOperationsInput | number
    viewsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    commentsCount?: IntFieldUpdateOperationsInput | number
    sharesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: ReelViewUncheckedUpdateManyWithoutReelNestedInput
  }

  export type ReelViewCreateManyReelInput = {
    id?: string
    viewerId: string
    watchDurationSec: number
    completed?: boolean
    createdAt?: Date | string
  }

  export type ReelBookmarkCreateManyReelInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ReelViewUpdateWithoutReelInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewerId?: StringFieldUpdateOperationsInput | string
    watchDurationSec?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReelViewUncheckedUpdateWithoutReelInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewerId?: StringFieldUpdateOperationsInput | string
    watchDurationSec?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReelViewUncheckedUpdateManyWithoutReelInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewerId?: StringFieldUpdateOperationsInput | string
    watchDurationSec?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReelBookmarkUpdateWithoutReelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReelBookmarkUncheckedUpdateWithoutReelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReelBookmarkUncheckedUpdateManyWithoutReelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ReelCountOutputTypeDefaultArgs instead
     */
    export type ReelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReelDefaultArgs instead
     */
    export type ReelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReelViewDefaultArgs instead
     */
    export type ReelViewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReelViewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReelBookmarkDefaultArgs instead
     */
    export type ReelBookmarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReelBookmarkDefaultArgs<ExtArgs>

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