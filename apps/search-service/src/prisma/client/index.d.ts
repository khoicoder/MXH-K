
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
 * Model SearchIndex
 * 
 */
export type SearchIndex = $Result.DefaultSelection<Prisma.$SearchIndexPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SearchIndices
 * const searchIndices = await prisma.searchIndex.findMany()
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
   * // Fetch zero or more SearchIndices
   * const searchIndices = await prisma.searchIndex.findMany()
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
   * `prisma.searchIndex`: Exposes CRUD operations for the **SearchIndex** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchIndices
    * const searchIndices = await prisma.searchIndex.findMany()
    * ```
    */
  get searchIndex(): Prisma.SearchIndexDelegate<ExtArgs>;
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
    SearchIndex: 'SearchIndex'
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
      modelProps: "searchIndex"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SearchIndex: {
        payload: Prisma.$SearchIndexPayload<ExtArgs>
        fields: Prisma.SearchIndexFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchIndexFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchIndexFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexPayload>
          }
          findFirst: {
            args: Prisma.SearchIndexFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchIndexFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexPayload>
          }
          findMany: {
            args: Prisma.SearchIndexFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexPayload>[]
          }
          create: {
            args: Prisma.SearchIndexCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexPayload>
          }
          createMany: {
            args: Prisma.SearchIndexCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchIndexCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexPayload>[]
          }
          delete: {
            args: Prisma.SearchIndexDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexPayload>
          }
          update: {
            args: Prisma.SearchIndexUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexPayload>
          }
          deleteMany: {
            args: Prisma.SearchIndexDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchIndexUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SearchIndexUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexPayload>
          }
          aggregate: {
            args: Prisma.SearchIndexAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchIndex>
          }
          groupBy: {
            args: Prisma.SearchIndexGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchIndexGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchIndexCountArgs<ExtArgs>
            result: $Utils.Optional<SearchIndexCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model SearchIndex
   */

  export type AggregateSearchIndex = {
    _count: SearchIndexCountAggregateOutputType | null
    _avg: SearchIndexAvgAggregateOutputType | null
    _sum: SearchIndexSumAggregateOutputType | null
    _min: SearchIndexMinAggregateOutputType | null
    _max: SearchIndexMaxAggregateOutputType | null
  }

  export type SearchIndexAvgAggregateOutputType = {
    popularity: number | null
  }

  export type SearchIndexSumAggregateOutputType = {
    popularity: number | null
  }

  export type SearchIndexMinAggregateOutputType = {
    id: string | null
    entityType: string | null
    entityId: string | null
    title: string | null
    content: string | null
    popularity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchIndexMaxAggregateOutputType = {
    id: string | null
    entityType: string | null
    entityId: string | null
    title: string | null
    content: string | null
    popularity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchIndexCountAggregateOutputType = {
    id: number
    entityType: number
    entityId: number
    title: number
    content: number
    tags: number
    popularity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SearchIndexAvgAggregateInputType = {
    popularity?: true
  }

  export type SearchIndexSumAggregateInputType = {
    popularity?: true
  }

  export type SearchIndexMinAggregateInputType = {
    id?: true
    entityType?: true
    entityId?: true
    title?: true
    content?: true
    popularity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchIndexMaxAggregateInputType = {
    id?: true
    entityType?: true
    entityId?: true
    title?: true
    content?: true
    popularity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchIndexCountAggregateInputType = {
    id?: true
    entityType?: true
    entityId?: true
    title?: true
    content?: true
    tags?: true
    popularity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SearchIndexAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchIndex to aggregate.
     */
    where?: SearchIndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchIndices to fetch.
     */
    orderBy?: SearchIndexOrderByWithRelationInput | SearchIndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchIndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchIndices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchIndices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchIndices
    **/
    _count?: true | SearchIndexCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SearchIndexAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SearchIndexSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchIndexMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchIndexMaxAggregateInputType
  }

  export type GetSearchIndexAggregateType<T extends SearchIndexAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchIndex]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchIndex[P]>
      : GetScalarType<T[P], AggregateSearchIndex[P]>
  }




  export type SearchIndexGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchIndexWhereInput
    orderBy?: SearchIndexOrderByWithAggregationInput | SearchIndexOrderByWithAggregationInput[]
    by: SearchIndexScalarFieldEnum[] | SearchIndexScalarFieldEnum
    having?: SearchIndexScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchIndexCountAggregateInputType | true
    _avg?: SearchIndexAvgAggregateInputType
    _sum?: SearchIndexSumAggregateInputType
    _min?: SearchIndexMinAggregateInputType
    _max?: SearchIndexMaxAggregateInputType
  }

  export type SearchIndexGroupByOutputType = {
    id: string
    entityType: string
    entityId: string
    title: string
    content: string
    tags: string[]
    popularity: number
    createdAt: Date
    updatedAt: Date
    _count: SearchIndexCountAggregateOutputType | null
    _avg: SearchIndexAvgAggregateOutputType | null
    _sum: SearchIndexSumAggregateOutputType | null
    _min: SearchIndexMinAggregateOutputType | null
    _max: SearchIndexMaxAggregateOutputType | null
  }

  type GetSearchIndexGroupByPayload<T extends SearchIndexGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchIndexGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchIndexGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchIndexGroupByOutputType[P]>
            : GetScalarType<T[P], SearchIndexGroupByOutputType[P]>
        }
      >
    >


  export type SearchIndexSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entityType?: boolean
    entityId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    popularity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["searchIndex"]>

  export type SearchIndexSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entityType?: boolean
    entityId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    popularity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["searchIndex"]>

  export type SearchIndexSelectScalar = {
    id?: boolean
    entityType?: boolean
    entityId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    popularity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SearchIndexPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchIndex"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      entityType: string
      entityId: string
      title: string
      content: string
      tags: string[]
      popularity: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["searchIndex"]>
    composites: {}
  }

  type SearchIndexGetPayload<S extends boolean | null | undefined | SearchIndexDefaultArgs> = $Result.GetResult<Prisma.$SearchIndexPayload, S>

  type SearchIndexCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SearchIndexFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SearchIndexCountAggregateInputType | true
    }

  export interface SearchIndexDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchIndex'], meta: { name: 'SearchIndex' } }
    /**
     * Find zero or one SearchIndex that matches the filter.
     * @param {SearchIndexFindUniqueArgs} args - Arguments to find a SearchIndex
     * @example
     * // Get one SearchIndex
     * const searchIndex = await prisma.searchIndex.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchIndexFindUniqueArgs>(args: SelectSubset<T, SearchIndexFindUniqueArgs<ExtArgs>>): Prisma__SearchIndexClient<$Result.GetResult<Prisma.$SearchIndexPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SearchIndex that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SearchIndexFindUniqueOrThrowArgs} args - Arguments to find a SearchIndex
     * @example
     * // Get one SearchIndex
     * const searchIndex = await prisma.searchIndex.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchIndexFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchIndexFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchIndexClient<$Result.GetResult<Prisma.$SearchIndexPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SearchIndex that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchIndexFindFirstArgs} args - Arguments to find a SearchIndex
     * @example
     * // Get one SearchIndex
     * const searchIndex = await prisma.searchIndex.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchIndexFindFirstArgs>(args?: SelectSubset<T, SearchIndexFindFirstArgs<ExtArgs>>): Prisma__SearchIndexClient<$Result.GetResult<Prisma.$SearchIndexPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SearchIndex that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchIndexFindFirstOrThrowArgs} args - Arguments to find a SearchIndex
     * @example
     * // Get one SearchIndex
     * const searchIndex = await prisma.searchIndex.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchIndexFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchIndexFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchIndexClient<$Result.GetResult<Prisma.$SearchIndexPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SearchIndices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchIndexFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchIndices
     * const searchIndices = await prisma.searchIndex.findMany()
     * 
     * // Get first 10 SearchIndices
     * const searchIndices = await prisma.searchIndex.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchIndexWithIdOnly = await prisma.searchIndex.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchIndexFindManyArgs>(args?: SelectSubset<T, SearchIndexFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchIndexPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SearchIndex.
     * @param {SearchIndexCreateArgs} args - Arguments to create a SearchIndex.
     * @example
     * // Create one SearchIndex
     * const SearchIndex = await prisma.searchIndex.create({
     *   data: {
     *     // ... data to create a SearchIndex
     *   }
     * })
     * 
     */
    create<T extends SearchIndexCreateArgs>(args: SelectSubset<T, SearchIndexCreateArgs<ExtArgs>>): Prisma__SearchIndexClient<$Result.GetResult<Prisma.$SearchIndexPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SearchIndices.
     * @param {SearchIndexCreateManyArgs} args - Arguments to create many SearchIndices.
     * @example
     * // Create many SearchIndices
     * const searchIndex = await prisma.searchIndex.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchIndexCreateManyArgs>(args?: SelectSubset<T, SearchIndexCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchIndices and returns the data saved in the database.
     * @param {SearchIndexCreateManyAndReturnArgs} args - Arguments to create many SearchIndices.
     * @example
     * // Create many SearchIndices
     * const searchIndex = await prisma.searchIndex.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchIndices and only return the `id`
     * const searchIndexWithIdOnly = await prisma.searchIndex.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchIndexCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchIndexCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchIndexPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SearchIndex.
     * @param {SearchIndexDeleteArgs} args - Arguments to delete one SearchIndex.
     * @example
     * // Delete one SearchIndex
     * const SearchIndex = await prisma.searchIndex.delete({
     *   where: {
     *     // ... filter to delete one SearchIndex
     *   }
     * })
     * 
     */
    delete<T extends SearchIndexDeleteArgs>(args: SelectSubset<T, SearchIndexDeleteArgs<ExtArgs>>): Prisma__SearchIndexClient<$Result.GetResult<Prisma.$SearchIndexPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SearchIndex.
     * @param {SearchIndexUpdateArgs} args - Arguments to update one SearchIndex.
     * @example
     * // Update one SearchIndex
     * const searchIndex = await prisma.searchIndex.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchIndexUpdateArgs>(args: SelectSubset<T, SearchIndexUpdateArgs<ExtArgs>>): Prisma__SearchIndexClient<$Result.GetResult<Prisma.$SearchIndexPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SearchIndices.
     * @param {SearchIndexDeleteManyArgs} args - Arguments to filter SearchIndices to delete.
     * @example
     * // Delete a few SearchIndices
     * const { count } = await prisma.searchIndex.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchIndexDeleteManyArgs>(args?: SelectSubset<T, SearchIndexDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchIndexUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchIndices
     * const searchIndex = await prisma.searchIndex.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchIndexUpdateManyArgs>(args: SelectSubset<T, SearchIndexUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SearchIndex.
     * @param {SearchIndexUpsertArgs} args - Arguments to update or create a SearchIndex.
     * @example
     * // Update or create a SearchIndex
     * const searchIndex = await prisma.searchIndex.upsert({
     *   create: {
     *     // ... data to create a SearchIndex
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchIndex we want to update
     *   }
     * })
     */
    upsert<T extends SearchIndexUpsertArgs>(args: SelectSubset<T, SearchIndexUpsertArgs<ExtArgs>>): Prisma__SearchIndexClient<$Result.GetResult<Prisma.$SearchIndexPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SearchIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchIndexCountArgs} args - Arguments to filter SearchIndices to count.
     * @example
     * // Count the number of SearchIndices
     * const count = await prisma.searchIndex.count({
     *   where: {
     *     // ... the filter for the SearchIndices we want to count
     *   }
     * })
    **/
    count<T extends SearchIndexCountArgs>(
      args?: Subset<T, SearchIndexCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchIndexCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchIndex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchIndexAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SearchIndexAggregateArgs>(args: Subset<T, SearchIndexAggregateArgs>): Prisma.PrismaPromise<GetSearchIndexAggregateType<T>>

    /**
     * Group by SearchIndex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchIndexGroupByArgs} args - Group by arguments.
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
      T extends SearchIndexGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchIndexGroupByArgs['orderBy'] }
        : { orderBy?: SearchIndexGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SearchIndexGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchIndexGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchIndex model
   */
  readonly fields: SearchIndexFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchIndex.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchIndexClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SearchIndex model
   */ 
  interface SearchIndexFieldRefs {
    readonly id: FieldRef<"SearchIndex", 'String'>
    readonly entityType: FieldRef<"SearchIndex", 'String'>
    readonly entityId: FieldRef<"SearchIndex", 'String'>
    readonly title: FieldRef<"SearchIndex", 'String'>
    readonly content: FieldRef<"SearchIndex", 'String'>
    readonly tags: FieldRef<"SearchIndex", 'String[]'>
    readonly popularity: FieldRef<"SearchIndex", 'Float'>
    readonly createdAt: FieldRef<"SearchIndex", 'DateTime'>
    readonly updatedAt: FieldRef<"SearchIndex", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SearchIndex findUnique
   */
  export type SearchIndexFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndex
     */
    select?: SearchIndexSelect<ExtArgs> | null
    /**
     * Filter, which SearchIndex to fetch.
     */
    where: SearchIndexWhereUniqueInput
  }

  /**
   * SearchIndex findUniqueOrThrow
   */
  export type SearchIndexFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndex
     */
    select?: SearchIndexSelect<ExtArgs> | null
    /**
     * Filter, which SearchIndex to fetch.
     */
    where: SearchIndexWhereUniqueInput
  }

  /**
   * SearchIndex findFirst
   */
  export type SearchIndexFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndex
     */
    select?: SearchIndexSelect<ExtArgs> | null
    /**
     * Filter, which SearchIndex to fetch.
     */
    where?: SearchIndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchIndices to fetch.
     */
    orderBy?: SearchIndexOrderByWithRelationInput | SearchIndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchIndices.
     */
    cursor?: SearchIndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchIndices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchIndices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchIndices.
     */
    distinct?: SearchIndexScalarFieldEnum | SearchIndexScalarFieldEnum[]
  }

  /**
   * SearchIndex findFirstOrThrow
   */
  export type SearchIndexFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndex
     */
    select?: SearchIndexSelect<ExtArgs> | null
    /**
     * Filter, which SearchIndex to fetch.
     */
    where?: SearchIndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchIndices to fetch.
     */
    orderBy?: SearchIndexOrderByWithRelationInput | SearchIndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchIndices.
     */
    cursor?: SearchIndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchIndices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchIndices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchIndices.
     */
    distinct?: SearchIndexScalarFieldEnum | SearchIndexScalarFieldEnum[]
  }

  /**
   * SearchIndex findMany
   */
  export type SearchIndexFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndex
     */
    select?: SearchIndexSelect<ExtArgs> | null
    /**
     * Filter, which SearchIndices to fetch.
     */
    where?: SearchIndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchIndices to fetch.
     */
    orderBy?: SearchIndexOrderByWithRelationInput | SearchIndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchIndices.
     */
    cursor?: SearchIndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchIndices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchIndices.
     */
    skip?: number
    distinct?: SearchIndexScalarFieldEnum | SearchIndexScalarFieldEnum[]
  }

  /**
   * SearchIndex create
   */
  export type SearchIndexCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndex
     */
    select?: SearchIndexSelect<ExtArgs> | null
    /**
     * The data needed to create a SearchIndex.
     */
    data: XOR<SearchIndexCreateInput, SearchIndexUncheckedCreateInput>
  }

  /**
   * SearchIndex createMany
   */
  export type SearchIndexCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchIndices.
     */
    data: SearchIndexCreateManyInput | SearchIndexCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchIndex createManyAndReturn
   */
  export type SearchIndexCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndex
     */
    select?: SearchIndexSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SearchIndices.
     */
    data: SearchIndexCreateManyInput | SearchIndexCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchIndex update
   */
  export type SearchIndexUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndex
     */
    select?: SearchIndexSelect<ExtArgs> | null
    /**
     * The data needed to update a SearchIndex.
     */
    data: XOR<SearchIndexUpdateInput, SearchIndexUncheckedUpdateInput>
    /**
     * Choose, which SearchIndex to update.
     */
    where: SearchIndexWhereUniqueInput
  }

  /**
   * SearchIndex updateMany
   */
  export type SearchIndexUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchIndices.
     */
    data: XOR<SearchIndexUpdateManyMutationInput, SearchIndexUncheckedUpdateManyInput>
    /**
     * Filter which SearchIndices to update
     */
    where?: SearchIndexWhereInput
  }

  /**
   * SearchIndex upsert
   */
  export type SearchIndexUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndex
     */
    select?: SearchIndexSelect<ExtArgs> | null
    /**
     * The filter to search for the SearchIndex to update in case it exists.
     */
    where: SearchIndexWhereUniqueInput
    /**
     * In case the SearchIndex found by the `where` argument doesn't exist, create a new SearchIndex with this data.
     */
    create: XOR<SearchIndexCreateInput, SearchIndexUncheckedCreateInput>
    /**
     * In case the SearchIndex was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchIndexUpdateInput, SearchIndexUncheckedUpdateInput>
  }

  /**
   * SearchIndex delete
   */
  export type SearchIndexDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndex
     */
    select?: SearchIndexSelect<ExtArgs> | null
    /**
     * Filter which SearchIndex to delete.
     */
    where: SearchIndexWhereUniqueInput
  }

  /**
   * SearchIndex deleteMany
   */
  export type SearchIndexDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchIndices to delete
     */
    where?: SearchIndexWhereInput
  }

  /**
   * SearchIndex without action
   */
  export type SearchIndexDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndex
     */
    select?: SearchIndexSelect<ExtArgs> | null
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


  export const SearchIndexScalarFieldEnum: {
    id: 'id',
    entityType: 'entityType',
    entityId: 'entityId',
    title: 'title',
    content: 'content',
    tags: 'tags',
    popularity: 'popularity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SearchIndexScalarFieldEnum = (typeof SearchIndexScalarFieldEnum)[keyof typeof SearchIndexScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type SearchIndexWhereInput = {
    AND?: SearchIndexWhereInput | SearchIndexWhereInput[]
    OR?: SearchIndexWhereInput[]
    NOT?: SearchIndexWhereInput | SearchIndexWhereInput[]
    id?: StringFilter<"SearchIndex"> | string
    entityType?: StringFilter<"SearchIndex"> | string
    entityId?: StringFilter<"SearchIndex"> | string
    title?: StringFilter<"SearchIndex"> | string
    content?: StringFilter<"SearchIndex"> | string
    tags?: StringNullableListFilter<"SearchIndex">
    popularity?: FloatFilter<"SearchIndex"> | number
    createdAt?: DateTimeFilter<"SearchIndex"> | Date | string
    updatedAt?: DateTimeFilter<"SearchIndex"> | Date | string
  }

  export type SearchIndexOrderByWithRelationInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    popularity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchIndexWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    entityType_entityId?: SearchIndexEntityTypeEntityIdCompoundUniqueInput
    AND?: SearchIndexWhereInput | SearchIndexWhereInput[]
    OR?: SearchIndexWhereInput[]
    NOT?: SearchIndexWhereInput | SearchIndexWhereInput[]
    entityType?: StringFilter<"SearchIndex"> | string
    entityId?: StringFilter<"SearchIndex"> | string
    title?: StringFilter<"SearchIndex"> | string
    content?: StringFilter<"SearchIndex"> | string
    tags?: StringNullableListFilter<"SearchIndex">
    popularity?: FloatFilter<"SearchIndex"> | number
    createdAt?: DateTimeFilter<"SearchIndex"> | Date | string
    updatedAt?: DateTimeFilter<"SearchIndex"> | Date | string
  }, "id" | "entityType_entityId">

  export type SearchIndexOrderByWithAggregationInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    popularity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SearchIndexCountOrderByAggregateInput
    _avg?: SearchIndexAvgOrderByAggregateInput
    _max?: SearchIndexMaxOrderByAggregateInput
    _min?: SearchIndexMinOrderByAggregateInput
    _sum?: SearchIndexSumOrderByAggregateInput
  }

  export type SearchIndexScalarWhereWithAggregatesInput = {
    AND?: SearchIndexScalarWhereWithAggregatesInput | SearchIndexScalarWhereWithAggregatesInput[]
    OR?: SearchIndexScalarWhereWithAggregatesInput[]
    NOT?: SearchIndexScalarWhereWithAggregatesInput | SearchIndexScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SearchIndex"> | string
    entityType?: StringWithAggregatesFilter<"SearchIndex"> | string
    entityId?: StringWithAggregatesFilter<"SearchIndex"> | string
    title?: StringWithAggregatesFilter<"SearchIndex"> | string
    content?: StringWithAggregatesFilter<"SearchIndex"> | string
    tags?: StringNullableListFilter<"SearchIndex">
    popularity?: FloatWithAggregatesFilter<"SearchIndex"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SearchIndex"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SearchIndex"> | Date | string
  }

  export type SearchIndexCreateInput = {
    id?: string
    entityType: string
    entityId: string
    title: string
    content?: string
    tags?: SearchIndexCreatetagsInput | string[]
    popularity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchIndexUncheckedCreateInput = {
    id?: string
    entityType: string
    entityId: string
    title: string
    content?: string
    tags?: SearchIndexCreatetagsInput | string[]
    popularity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchIndexUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: SearchIndexUpdatetagsInput | string[]
    popularity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchIndexUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: SearchIndexUpdatetagsInput | string[]
    popularity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchIndexCreateManyInput = {
    id?: string
    entityType: string
    entityId: string
    title: string
    content?: string
    tags?: SearchIndexCreatetagsInput | string[]
    popularity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchIndexUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: SearchIndexUpdatetagsInput | string[]
    popularity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchIndexUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: SearchIndexUpdatetagsInput | string[]
    popularity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type SearchIndexEntityTypeEntityIdCompoundUniqueInput = {
    entityType: string
    entityId: string
  }

  export type SearchIndexCountOrderByAggregateInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    popularity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchIndexAvgOrderByAggregateInput = {
    popularity?: SortOrder
  }

  export type SearchIndexMaxOrderByAggregateInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    popularity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchIndexMinOrderByAggregateInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    popularity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchIndexSumOrderByAggregateInput = {
    popularity?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type SearchIndexCreatetagsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SearchIndexUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SearchIndexDefaultArgs instead
     */
    export type SearchIndexArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SearchIndexDefaultArgs<ExtArgs>

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