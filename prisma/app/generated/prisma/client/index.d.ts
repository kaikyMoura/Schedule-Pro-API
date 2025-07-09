
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserSession
 * 
 */
export type UserSession = $Result.DefaultSelection<Prisma.$UserSessionPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model ServiceItem
 * 
 */
export type ServiceItem = $Result.DefaultSelection<Prisma.$ServiceItemPayload>
/**
 * Model StaffAvailability
 * 
 */
export type StaffAvailability = $Result.DefaultSelection<Prisma.$StaffAvailabilityPayload>
/**
 * Model StaffService
 * 
 */
export type StaffService = $Result.DefaultSelection<Prisma.$StaffServicePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  CANCELLED: 'CANCELLED',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING',
  RESCHEDULED: 'RESCHEDULED',
  NO_SHOW: 'NO_SHOW'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Role: {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF',
  CUSTOMER: 'CUSTOMER',
  MANAGER: 'MANAGER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  REFUNDED: 'REFUNDED',
  CANCELLED: 'CANCELLED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentMethod: {
  CASH: 'CASH',
  CARD: 'CARD',
  PAYPAL: 'PAYPAL',
  PIX: 'PIX'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const NotificationChannel: {
  EMAIL: 'EMAIL',
  SMS: 'SMS',
  PUSH: 'PUSH',
  IN_APP: 'IN_APP'
};

export type NotificationChannel = (typeof NotificationChannel)[keyof typeof NotificationChannel]


export const NotificationType: {
  APPOINTMENT_CONFIRMED: 'APPOINTMENT_CONFIRMED',
  APPOINTMENT_CANCELLED: 'APPOINTMENT_CANCELLED',
  REMINDER: 'REMINDER',
  CUSTOM: 'CUSTOM'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const AuditAction: {
  INSERT: 'INSERT',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

export type AuditAction = (typeof AuditAction)[keyof typeof AuditAction]


export const DayOfWeek: {
  SUNDAY: 'SUNDAY',
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY'
};

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek]


export const AppointmentType: {
  REGULAR: 'REGULAR',
  FOLLOW_UP: 'FOLLOW_UP',
  CONSULTATION: 'CONSULTATION',
  EMERGENCY: 'EMERGENCY'
};

export type AppointmentType = (typeof AppointmentType)[keyof typeof AppointmentType]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type NotificationChannel = $Enums.NotificationChannel

export const NotificationChannel: typeof $Enums.NotificationChannel

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type AuditAction = $Enums.AuditAction

export const AuditAction: typeof $Enums.AuditAction

export type DayOfWeek = $Enums.DayOfWeek

export const DayOfWeek: typeof $Enums.DayOfWeek

export type AppointmentType = $Enums.AppointmentType

export const AppointmentType: typeof $Enums.AppointmentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSession`: Exposes CRUD operations for the **UserSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSessions
    * const userSessions = await prisma.userSession.findMany()
    * ```
    */
  get userSession(): Prisma.UserSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceItem`: Exposes CRUD operations for the **ServiceItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceItems
    * const serviceItems = await prisma.serviceItem.findMany()
    * ```
    */
  get serviceItem(): Prisma.ServiceItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffAvailability`: Exposes CRUD operations for the **StaffAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffAvailabilities
    * const staffAvailabilities = await prisma.staffAvailability.findMany()
    * ```
    */
  get staffAvailability(): Prisma.StaffAvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffService`: Exposes CRUD operations for the **StaffService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffServices
    * const staffServices = await prisma.staffService.findMany()
    * ```
    */
  get staffService(): Prisma.StaffServiceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    UserSession: 'UserSession',
    Notification: 'Notification',
    AuditLog: 'AuditLog',
    Payment: 'Payment',
    Review: 'Review',
    Appointment: 'Appointment',
    ServiceItem: 'ServiceItem',
    StaffAvailability: 'StaffAvailability',
    StaffService: 'StaffService'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userSession" | "notification" | "auditLog" | "payment" | "review" | "appointment" | "serviceItem" | "staffAvailability" | "staffService"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserSession: {
        payload: Prisma.$UserSessionPayload<ExtArgs>
        fields: Prisma.UserSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findFirst: {
            args: Prisma.UserSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findMany: {
            args: Prisma.UserSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          create: {
            args: Prisma.UserSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          createMany: {
            args: Prisma.UserSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          delete: {
            args: Prisma.UserSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          update: {
            args: Prisma.UserSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          deleteMany: {
            args: Prisma.UserSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          upsert: {
            args: Prisma.UserSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          aggregate: {
            args: Prisma.UserSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSession>
          }
          groupBy: {
            args: Prisma.UserSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSessionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSessionCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      ServiceItem: {
        payload: Prisma.$ServiceItemPayload<ExtArgs>
        fields: Prisma.ServiceItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>
          }
          findFirst: {
            args: Prisma.ServiceItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>
          }
          findMany: {
            args: Prisma.ServiceItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>[]
          }
          create: {
            args: Prisma.ServiceItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>
          }
          createMany: {
            args: Prisma.ServiceItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>[]
          }
          delete: {
            args: Prisma.ServiceItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>
          }
          update: {
            args: Prisma.ServiceItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>
          }
          deleteMany: {
            args: Prisma.ServiceItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>[]
          }
          upsert: {
            args: Prisma.ServiceItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>
          }
          aggregate: {
            args: Prisma.ServiceItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceItem>
          }
          groupBy: {
            args: Prisma.ServiceItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceItemCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceItemCountAggregateOutputType> | number
          }
        }
      }
      StaffAvailability: {
        payload: Prisma.$StaffAvailabilityPayload<ExtArgs>
        fields: Prisma.StaffAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.StaffAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAvailabilityPayload>
          }
          findMany: {
            args: Prisma.StaffAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAvailabilityPayload>[]
          }
          create: {
            args: Prisma.StaffAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAvailabilityPayload>
          }
          createMany: {
            args: Prisma.StaffAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.StaffAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAvailabilityPayload>
          }
          update: {
            args: Prisma.StaffAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.StaffAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffAvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.StaffAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.StaffAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffAvailability>
          }
          groupBy: {
            args: Prisma.StaffAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<StaffAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      StaffService: {
        payload: Prisma.$StaffServicePayload<ExtArgs>
        fields: Prisma.StaffServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffServicePayload>
          }
          findFirst: {
            args: Prisma.StaffServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffServicePayload>
          }
          findMany: {
            args: Prisma.StaffServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffServicePayload>[]
          }
          create: {
            args: Prisma.StaffServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffServicePayload>
          }
          createMany: {
            args: Prisma.StaffServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffServicePayload>[]
          }
          delete: {
            args: Prisma.StaffServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffServicePayload>
          }
          update: {
            args: Prisma.StaffServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffServicePayload>
          }
          deleteMany: {
            args: Prisma.StaffServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffServicePayload>[]
          }
          upsert: {
            args: Prisma.StaffServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffServicePayload>
          }
          aggregate: {
            args: Prisma.StaffServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffService>
          }
          groupBy: {
            args: Prisma.StaffServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffServiceCountArgs<ExtArgs>
            result: $Utils.Optional<StaffServiceCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userSession?: UserSessionOmit
    notification?: NotificationOmit
    auditLog?: AuditLogOmit
    payment?: PaymentOmit
    review?: ReviewOmit
    appointment?: AppointmentOmit
    serviceItem?: ServiceItemOmit
    staffAvailability?: StaffAvailabilityOmit
    staffService?: StaffServiceOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    customerAppointments: number
    staffAppointments: number
    availability: number
    staffServices: number
    sessions: number
    notifications: number
    reviews: number
    receivedReviews: number
    payments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customerAppointments?: boolean | UserCountOutputTypeCountCustomerAppointmentsArgs
    staffAppointments?: boolean | UserCountOutputTypeCountStaffAppointmentsArgs
    availability?: boolean | UserCountOutputTypeCountAvailabilityArgs
    staffServices?: boolean | UserCountOutputTypeCountStaffServicesArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    receivedReviews?: boolean | UserCountOutputTypeCountReceivedReviewsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomerAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStaffAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffAvailabilityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStaffServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffServiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type AppointmentCountOutputType
   */

  export type AppointmentCountOutputType = {
    payments: number
    notifications: number
    reviews: number
  }

  export type AppointmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | AppointmentCountOutputTypeCountPaymentsArgs
    notifications?: boolean | AppointmentCountOutputTypeCountNotificationsArgs
    reviews?: boolean | AppointmentCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCountOutputType
     */
    select?: AppointmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ServiceItemCountOutputType
   */

  export type ServiceItemCountOutputType = {
    appointments: number
    staffServices: number
    reviews: number
  }

  export type ServiceItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | ServiceItemCountOutputTypeCountAppointmentsArgs
    staffServices?: boolean | ServiceItemCountOutputTypeCountStaffServicesArgs
    reviews?: boolean | ServiceItemCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ServiceItemCountOutputType without action
   */
  export type ServiceItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItemCountOutputType
     */
    select?: ServiceItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceItemCountOutputType without action
   */
  export type ServiceItemCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * ServiceItemCountOutputType without action
   */
  export type ServiceItemCountOutputTypeCountStaffServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffServiceWhereInput
  }

  /**
   * ServiceItemCountOutputType without action
   */
  export type ServiceItemCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    firstName: string | null
    lastName: string | null
    avatar: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    isActive: boolean | null
    isVerified: boolean | null
    verifiedAt: Date | null
    lastLoginAt: Date | null
    timezone: string | null
    language: string | null
    currency: string | null
    emailNotifications: boolean | null
    smsNotifications: boolean | null
    pushNotifications: boolean | null
    passwordResetToken: string | null
    passwordResetTokenExpiresAt: Date | null
    verificationToken: string | null
    verificationTokenExpiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    firstName: string | null
    lastName: string | null
    avatar: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    isActive: boolean | null
    isVerified: boolean | null
    verifiedAt: Date | null
    lastLoginAt: Date | null
    timezone: string | null
    language: string | null
    currency: string | null
    emailNotifications: boolean | null
    smsNotifications: boolean | null
    pushNotifications: boolean | null
    passwordResetToken: string | null
    passwordResetTokenExpiresAt: Date | null
    verificationToken: string | null
    verificationTokenExpiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    phone: number
    role: number
    firstName: number
    lastName: number
    avatar: number
    dateOfBirth: number
    gender: number
    address: number
    city: number
    state: number
    zipCode: number
    country: number
    isActive: number
    isVerified: number
    verifiedAt: number
    lastLoginAt: number
    timezone: number
    language: number
    currency: number
    emailNotifications: number
    smsNotifications: number
    pushNotifications: number
    passwordResetToken: number
    passwordResetTokenExpiresAt: number
    verificationToken: number
    verificationTokenExpiresAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    firstName?: true
    lastName?: true
    avatar?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    isActive?: true
    isVerified?: true
    verifiedAt?: true
    lastLoginAt?: true
    timezone?: true
    language?: true
    currency?: true
    emailNotifications?: true
    smsNotifications?: true
    pushNotifications?: true
    passwordResetToken?: true
    passwordResetTokenExpiresAt?: true
    verificationToken?: true
    verificationTokenExpiresAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    firstName?: true
    lastName?: true
    avatar?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    isActive?: true
    isVerified?: true
    verifiedAt?: true
    lastLoginAt?: true
    timezone?: true
    language?: true
    currency?: true
    emailNotifications?: true
    smsNotifications?: true
    pushNotifications?: true
    passwordResetToken?: true
    passwordResetTokenExpiresAt?: true
    verificationToken?: true
    verificationTokenExpiresAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    firstName?: true
    lastName?: true
    avatar?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    isActive?: true
    isVerified?: true
    verifiedAt?: true
    lastLoginAt?: true
    timezone?: true
    language?: true
    currency?: true
    emailNotifications?: true
    smsNotifications?: true
    pushNotifications?: true
    passwordResetToken?: true
    passwordResetTokenExpiresAt?: true
    verificationToken?: true
    verificationTokenExpiresAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    phone: string
    role: $Enums.Role
    firstName: string
    lastName: string
    avatar: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    isActive: boolean
    isVerified: boolean
    verifiedAt: Date | null
    lastLoginAt: Date | null
    timezone: string
    language: string
    currency: string
    emailNotifications: boolean
    smsNotifications: boolean
    pushNotifications: boolean
    passwordResetToken: string | null
    passwordResetTokenExpiresAt: Date | null
    verificationToken: string | null
    verificationTokenExpiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    lastLoginAt?: boolean
    timezone?: boolean
    language?: boolean
    currency?: boolean
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: boolean
    passwordResetTokenExpiresAt?: boolean
    verificationToken?: boolean
    verificationTokenExpiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    customerAppointments?: boolean | User$customerAppointmentsArgs<ExtArgs>
    staffAppointments?: boolean | User$staffAppointmentsArgs<ExtArgs>
    availability?: boolean | User$availabilityArgs<ExtArgs>
    staffServices?: boolean | User$staffServicesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    receivedReviews?: boolean | User$receivedReviewsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    lastLoginAt?: boolean
    timezone?: boolean
    language?: boolean
    currency?: boolean
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: boolean
    passwordResetTokenExpiresAt?: boolean
    verificationToken?: boolean
    verificationTokenExpiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    lastLoginAt?: boolean
    timezone?: boolean
    language?: boolean
    currency?: boolean
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: boolean
    passwordResetTokenExpiresAt?: boolean
    verificationToken?: boolean
    verificationTokenExpiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    lastLoginAt?: boolean
    timezone?: boolean
    language?: boolean
    currency?: boolean
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: boolean
    passwordResetTokenExpiresAt?: boolean
    verificationToken?: boolean
    verificationTokenExpiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "phone" | "role" | "firstName" | "lastName" | "avatar" | "dateOfBirth" | "gender" | "address" | "city" | "state" | "zipCode" | "country" | "isActive" | "isVerified" | "verifiedAt" | "lastLoginAt" | "timezone" | "language" | "currency" | "emailNotifications" | "smsNotifications" | "pushNotifications" | "passwordResetToken" | "passwordResetTokenExpiresAt" | "verificationToken" | "verificationTokenExpiresAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customerAppointments?: boolean | User$customerAppointmentsArgs<ExtArgs>
    staffAppointments?: boolean | User$staffAppointmentsArgs<ExtArgs>
    availability?: boolean | User$availabilityArgs<ExtArgs>
    staffServices?: boolean | User$staffServicesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    receivedReviews?: boolean | User$receivedReviewsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      customerAppointments: Prisma.$AppointmentPayload<ExtArgs>[]
      staffAppointments: Prisma.$AppointmentPayload<ExtArgs>[]
      availability: Prisma.$StaffAvailabilityPayload<ExtArgs>[]
      staffServices: Prisma.$StaffServicePayload<ExtArgs>[]
      sessions: Prisma.$UserSessionPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      receivedReviews: Prisma.$ReviewPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      phone: string
      role: $Enums.Role
      firstName: string
      lastName: string
      avatar: string | null
      dateOfBirth: Date | null
      gender: $Enums.Gender | null
      address: string | null
      city: string | null
      state: string | null
      zipCode: string | null
      country: string | null
      isActive: boolean
      isVerified: boolean
      verifiedAt: Date | null
      lastLoginAt: Date | null
      timezone: string
      language: string
      currency: string
      emailNotifications: boolean
      smsNotifications: boolean
      pushNotifications: boolean
      passwordResetToken: string | null
      passwordResetTokenExpiresAt: Date | null
      verificationToken: string | null
      verificationTokenExpiresAt: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customerAppointments<T extends User$customerAppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$customerAppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staffAppointments<T extends User$staffAppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$staffAppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availability<T extends User$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, User$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staffServices<T extends User$staffServicesArgs<ExtArgs> = {}>(args?: Subset<T, User$staffServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedReviews<T extends User$receivedReviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly dateOfBirth: FieldRef<"User", 'DateTime'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly address: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly state: FieldRef<"User", 'String'>
    readonly zipCode: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly verifiedAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly timezone: FieldRef<"User", 'String'>
    readonly language: FieldRef<"User", 'String'>
    readonly currency: FieldRef<"User", 'String'>
    readonly emailNotifications: FieldRef<"User", 'Boolean'>
    readonly smsNotifications: FieldRef<"User", 'Boolean'>
    readonly pushNotifications: FieldRef<"User", 'Boolean'>
    readonly passwordResetToken: FieldRef<"User", 'String'>
    readonly passwordResetTokenExpiresAt: FieldRef<"User", 'DateTime'>
    readonly verificationToken: FieldRef<"User", 'String'>
    readonly verificationTokenExpiresAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.customerAppointments
   */
  export type User$customerAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.staffAppointments
   */
  export type User$staffAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.availability
   */
  export type User$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAvailability
     */
    select?: StaffAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAvailability
     */
    omit?: StaffAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAvailabilityInclude<ExtArgs> | null
    where?: StaffAvailabilityWhereInput
    orderBy?: StaffAvailabilityOrderByWithRelationInput | StaffAvailabilityOrderByWithRelationInput[]
    cursor?: StaffAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffAvailabilityScalarFieldEnum | StaffAvailabilityScalarFieldEnum[]
  }

  /**
   * User.staffServices
   */
  export type User$staffServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffService
     */
    select?: StaffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffService
     */
    omit?: StaffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffServiceInclude<ExtArgs> | null
    where?: StaffServiceWhereInput
    orderBy?: StaffServiceOrderByWithRelationInput | StaffServiceOrderByWithRelationInput[]
    cursor?: StaffServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffServiceScalarFieldEnum | StaffServiceScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    where?: UserSessionWhereInput
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    cursor?: UserSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.receivedReviews
   */
  export type User$receivedReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserSession
   */

  export type AggregateUserSession = {
    _count: UserSessionCountAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  export type UserSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    refreshToken: string | null
    userAgent: string | null
    ipAddress: string | null
    isActive: boolean | null
    createdAt: Date | null
    expiresAt: Date | null
    updatedAt: Date | null
    lastUsedAt: Date | null
  }

  export type UserSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    refreshToken: string | null
    userAgent: string | null
    ipAddress: string | null
    isActive: boolean | null
    createdAt: Date | null
    expiresAt: Date | null
    updatedAt: Date | null
    lastUsedAt: Date | null
  }

  export type UserSessionCountAggregateOutputType = {
    id: number
    userId: number
    refreshToken: number
    userAgent: number
    ipAddress: number
    isActive: number
    createdAt: number
    expiresAt: number
    updatedAt: number
    lastUsedAt: number
    _all: number
  }


  export type UserSessionMinAggregateInputType = {
    id?: true
    userId?: true
    refreshToken?: true
    userAgent?: true
    ipAddress?: true
    isActive?: true
    createdAt?: true
    expiresAt?: true
    updatedAt?: true
    lastUsedAt?: true
  }

  export type UserSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    refreshToken?: true
    userAgent?: true
    ipAddress?: true
    isActive?: true
    createdAt?: true
    expiresAt?: true
    updatedAt?: true
    lastUsedAt?: true
  }

  export type UserSessionCountAggregateInputType = {
    id?: true
    userId?: true
    refreshToken?: true
    userAgent?: true
    ipAddress?: true
    isActive?: true
    createdAt?: true
    expiresAt?: true
    updatedAt?: true
    lastUsedAt?: true
    _all?: true
  }

  export type UserSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSession to aggregate.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSessions
    **/
    _count?: true | UserSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSessionMaxAggregateInputType
  }

  export type GetUserSessionAggregateType<T extends UserSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSession[P]>
      : GetScalarType<T[P], AggregateUserSession[P]>
  }




  export type UserSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionWhereInput
    orderBy?: UserSessionOrderByWithAggregationInput | UserSessionOrderByWithAggregationInput[]
    by: UserSessionScalarFieldEnum[] | UserSessionScalarFieldEnum
    having?: UserSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSessionCountAggregateInputType | true
    _min?: UserSessionMinAggregateInputType
    _max?: UserSessionMaxAggregateInputType
  }

  export type UserSessionGroupByOutputType = {
    id: string
    userId: string
    refreshToken: string
    userAgent: string | null
    ipAddress: string | null
    isActive: boolean
    createdAt: Date
    expiresAt: Date
    updatedAt: Date
    lastUsedAt: Date | null
    _count: UserSessionCountAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  type GetUserSessionGroupByPayload<T extends UserSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
        }
      >
    >


  export type UserSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    isActive?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    updatedAt?: boolean
    lastUsedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    isActive?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    updatedAt?: boolean
    lastUsedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    isActive?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    updatedAt?: boolean
    lastUsedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    isActive?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    updatedAt?: boolean
    lastUsedAt?: boolean
  }

  export type UserSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "refreshToken" | "userAgent" | "ipAddress" | "isActive" | "createdAt" | "expiresAt" | "updatedAt" | "lastUsedAt", ExtArgs["result"]["userSession"]>
  export type UserSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      refreshToken: string
      userAgent: string | null
      ipAddress: string | null
      isActive: boolean
      createdAt: Date
      expiresAt: Date
      updatedAt: Date
      lastUsedAt: Date | null
    }, ExtArgs["result"]["userSession"]>
    composites: {}
  }

  type UserSessionGetPayload<S extends boolean | null | undefined | UserSessionDefaultArgs> = $Result.GetResult<Prisma.$UserSessionPayload, S>

  type UserSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSessionCountAggregateInputType | true
    }

  export interface UserSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSession'], meta: { name: 'UserSession' } }
    /**
     * Find zero or one UserSession that matches the filter.
     * @param {UserSessionFindUniqueArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSessionFindUniqueArgs>(args: SelectSubset<T, UserSessionFindUniqueArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSessionFindUniqueOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSessionFindFirstArgs>(args?: SelectSubset<T, UserSessionFindFirstArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSessions
     * const userSessions = await prisma.userSession.findMany()
     * 
     * // Get first 10 UserSessions
     * const userSessions = await prisma.userSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSessionWithIdOnly = await prisma.userSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSessionFindManyArgs>(args?: SelectSubset<T, UserSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSession.
     * @param {UserSessionCreateArgs} args - Arguments to create a UserSession.
     * @example
     * // Create one UserSession
     * const UserSession = await prisma.userSession.create({
     *   data: {
     *     // ... data to create a UserSession
     *   }
     * })
     * 
     */
    create<T extends UserSessionCreateArgs>(args: SelectSubset<T, UserSessionCreateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSessions.
     * @param {UserSessionCreateManyArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSessionCreateManyArgs>(args?: SelectSubset<T, UserSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSessions and returns the data saved in the database.
     * @param {UserSessionCreateManyAndReturnArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSessions and only return the `id`
     * const userSessionWithIdOnly = await prisma.userSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSession.
     * @param {UserSessionDeleteArgs} args - Arguments to delete one UserSession.
     * @example
     * // Delete one UserSession
     * const UserSession = await prisma.userSession.delete({
     *   where: {
     *     // ... filter to delete one UserSession
     *   }
     * })
     * 
     */
    delete<T extends UserSessionDeleteArgs>(args: SelectSubset<T, UserSessionDeleteArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSession.
     * @param {UserSessionUpdateArgs} args - Arguments to update one UserSession.
     * @example
     * // Update one UserSession
     * const userSession = await prisma.userSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSessionUpdateArgs>(args: SelectSubset<T, UserSessionUpdateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSessions.
     * @param {UserSessionDeleteManyArgs} args - Arguments to filter UserSessions to delete.
     * @example
     * // Delete a few UserSessions
     * const { count } = await prisma.userSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSessionDeleteManyArgs>(args?: SelectSubset<T, UserSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSessionUpdateManyArgs>(args: SelectSubset<T, UserSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions and returns the data updated in the database.
     * @param {UserSessionUpdateManyAndReturnArgs} args - Arguments to update many UserSessions.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSessions and only return the `id`
     * const userSessionWithIdOnly = await prisma.userSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSession.
     * @param {UserSessionUpsertArgs} args - Arguments to update or create a UserSession.
     * @example
     * // Update or create a UserSession
     * const userSession = await prisma.userSession.upsert({
     *   create: {
     *     // ... data to create a UserSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSession we want to update
     *   }
     * })
     */
    upsert<T extends UserSessionUpsertArgs>(args: SelectSubset<T, UserSessionUpsertArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionCountArgs} args - Arguments to filter UserSessions to count.
     * @example
     * // Count the number of UserSessions
     * const count = await prisma.userSession.count({
     *   where: {
     *     // ... the filter for the UserSessions we want to count
     *   }
     * })
    **/
    count<T extends UserSessionCountArgs>(
      args?: Subset<T, UserSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSessionAggregateArgs>(args: Subset<T, UserSessionAggregateArgs>): Prisma.PrismaPromise<GetUserSessionAggregateType<T>>

    /**
     * Group by UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionGroupByArgs} args - Group by arguments.
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
      T extends UserSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSessionGroupByArgs['orderBy'] }
        : { orderBy?: UserSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSession model
   */
  readonly fields: UserSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSession model
   */
  interface UserSessionFieldRefs {
    readonly id: FieldRef<"UserSession", 'String'>
    readonly userId: FieldRef<"UserSession", 'String'>
    readonly refreshToken: FieldRef<"UserSession", 'String'>
    readonly userAgent: FieldRef<"UserSession", 'String'>
    readonly ipAddress: FieldRef<"UserSession", 'String'>
    readonly isActive: FieldRef<"UserSession", 'Boolean'>
    readonly createdAt: FieldRef<"UserSession", 'DateTime'>
    readonly expiresAt: FieldRef<"UserSession", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSession", 'DateTime'>
    readonly lastUsedAt: FieldRef<"UserSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSession findUnique
   */
  export type UserSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findUniqueOrThrow
   */
  export type UserSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findFirst
   */
  export type UserSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findFirstOrThrow
   */
  export type UserSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findMany
   */
  export type UserSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSessions to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession create
   */
  export type UserSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSession.
     */
    data: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
  }

  /**
   * UserSession createMany
   */
  export type UserSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSession createManyAndReturn
   */
  export type UserSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSession update
   */
  export type UserSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSession.
     */
    data: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
    /**
     * Choose, which UserSession to update.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession updateMany
   */
  export type UserSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to update.
     */
    limit?: number
  }

  /**
   * UserSession updateManyAndReturn
   */
  export type UserSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSession upsert
   */
  export type UserSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSession to update in case it exists.
     */
    where: UserSessionWhereUniqueInput
    /**
     * In case the UserSession found by the `where` argument doesn't exist, create a new UserSession with this data.
     */
    create: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
    /**
     * In case the UserSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
  }

  /**
   * UserSession delete
   */
  export type UserSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter which UserSession to delete.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession deleteMany
   */
  export type UserSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSessions to delete
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to delete.
     */
    limit?: number
  }

  /**
   * UserSession without action
   */
  export type UserSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    appointmentId: string | null
    title: string | null
    message: string | null
    type: $Enums.NotificationType | null
    channel: $Enums.NotificationChannel | null
    isRead: boolean | null
    readAt: Date | null
    scheduledFor: Date | null
    sentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    appointmentId: string | null
    title: string | null
    message: string | null
    type: $Enums.NotificationType | null
    channel: $Enums.NotificationChannel | null
    isRead: boolean | null
    readAt: Date | null
    scheduledFor: Date | null
    sentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    appointmentId: number
    title: number
    message: number
    type: number
    channel: number
    isRead: number
    readAt: number
    scheduledFor: number
    sentAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    appointmentId?: true
    title?: true
    message?: true
    type?: true
    channel?: true
    isRead?: true
    readAt?: true
    scheduledFor?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    appointmentId?: true
    title?: true
    message?: true
    type?: true
    channel?: true
    isRead?: true
    readAt?: true
    scheduledFor?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    appointmentId?: true
    title?: true
    message?: true
    type?: true
    channel?: true
    isRead?: true
    readAt?: true
    scheduledFor?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    appointmentId: string | null
    title: string
    message: string
    type: $Enums.NotificationType
    channel: $Enums.NotificationChannel
    isRead: boolean
    readAt: Date | null
    scheduledFor: Date | null
    sentAt: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    appointmentId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    channel?: boolean
    isRead?: boolean
    readAt?: boolean
    scheduledFor?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | Notification$appointmentArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    appointmentId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    channel?: boolean
    isRead?: boolean
    readAt?: boolean
    scheduledFor?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | Notification$appointmentArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    appointmentId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    channel?: boolean
    isRead?: boolean
    readAt?: boolean
    scheduledFor?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | Notification$appointmentArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    appointmentId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    channel?: boolean
    isRead?: boolean
    readAt?: boolean
    scheduledFor?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "appointmentId" | "title" | "message" | "type" | "channel" | "isRead" | "readAt" | "scheduledFor" | "sentAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | Notification$appointmentArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | Notification$appointmentArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | Notification$appointmentArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      appointment: Prisma.$AppointmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      appointmentId: string | null
      title: string
      message: string
      type: $Enums.NotificationType
      channel: $Enums.NotificationChannel
      isRead: boolean
      readAt: Date | null
      scheduledFor: Date | null
      sentAt: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointment<T extends Notification$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, Notification$appointmentArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly appointmentId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly channel: FieldRef<"Notification", 'NotificationChannel'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly readAt: FieldRef<"Notification", 'DateTime'>
    readonly scheduledFor: FieldRef<"Notification", 'DateTime'>
    readonly sentAt: FieldRef<"Notification", 'DateTime'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
    readonly deletedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.appointment
   */
  export type Notification$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    tableName: string | null
    recordId: string | null
    action: $Enums.AuditAction | null
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    tableName: string | null
    recordId: string | null
    action: $Enums.AuditAction | null
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    tableName: number
    recordId: number
    action: number
    oldValues: number
    newValues: number
    userId: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    tableName?: true
    recordId?: true
    action?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    tableName?: true
    recordId?: true
    action?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    tableName?: true
    recordId?: true
    action?: true
    oldValues?: true
    newValues?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    tableName: string
    recordId: string
    action: $Enums.AuditAction
    oldValues: JsonValue | null
    newValues: JsonValue | null
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableName?: boolean
    recordId?: boolean
    action?: boolean
    oldValues?: boolean
    newValues?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableName?: boolean
    recordId?: boolean
    action?: boolean
    oldValues?: boolean
    newValues?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableName?: boolean
    recordId?: boolean
    action?: boolean
    oldValues?: boolean
    newValues?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    tableName?: boolean
    recordId?: boolean
    action?: boolean
    oldValues?: boolean
    newValues?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tableName" | "recordId" | "action" | "oldValues" | "newValues" | "userId" | "ipAddress" | "userAgent" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tableName: string
      recordId: string
      action: $Enums.AuditAction
      oldValues: Prisma.JsonValue | null
      newValues: Prisma.JsonValue | null
      userId: string | null
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly tableName: FieldRef<"AuditLog", 'String'>
    readonly recordId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'AuditAction'>
    readonly oldValues: FieldRef<"AuditLog", 'Json'>
    readonly newValues: FieldRef<"AuditLog", 'Json'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly userAgent: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    userId: string | null
    amount: Decimal | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    paymentMethod: $Enums.PaymentMethod | null
    stripePaymentId: string | null
    transactionId: string | null
    paidAt: Date | null
    refundedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    userId: string | null
    amount: Decimal | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    paymentMethod: $Enums.PaymentMethod | null
    stripePaymentId: string | null
    transactionId: string | null
    paidAt: Date | null
    refundedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    appointmentId: number
    userId: number
    amount: number
    currency: number
    status: number
    paymentMethod: number
    stripePaymentId: number
    transactionId: number
    paidAt: number
    refundedAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    appointmentId?: true
    userId?: true
    amount?: true
    currency?: true
    status?: true
    paymentMethod?: true
    stripePaymentId?: true
    transactionId?: true
    paidAt?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    appointmentId?: true
    userId?: true
    amount?: true
    currency?: true
    status?: true
    paymentMethod?: true
    stripePaymentId?: true
    transactionId?: true
    paidAt?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    appointmentId?: true
    userId?: true
    amount?: true
    currency?: true
    status?: true
    paymentMethod?: true
    stripePaymentId?: true
    transactionId?: true
    paidAt?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    appointmentId: string | null
    userId: string
    amount: Decimal
    currency: string
    status: $Enums.PaymentStatus
    paymentMethod: $Enums.PaymentMethod
    stripePaymentId: string | null
    transactionId: string | null
    paidAt: Date | null
    refundedAt: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentMethod?: boolean
    stripePaymentId?: boolean
    transactionId?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    appointment?: boolean | Payment$appointmentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentMethod?: boolean
    stripePaymentId?: boolean
    transactionId?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    appointment?: boolean | Payment$appointmentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentMethod?: boolean
    stripePaymentId?: boolean
    transactionId?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    appointment?: boolean | Payment$appointmentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    appointmentId?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentMethod?: boolean
    stripePaymentId?: boolean
    transactionId?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointmentId" | "userId" | "amount" | "currency" | "status" | "paymentMethod" | "stripePaymentId" | "transactionId" | "paidAt" | "refundedAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | Payment$appointmentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | Payment$appointmentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | Payment$appointmentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appointmentId: string | null
      userId: string
      amount: Prisma.Decimal
      currency: string
      status: $Enums.PaymentStatus
      paymentMethod: $Enums.PaymentMethod
      stripePaymentId: string | null
      transactionId: string | null
      paidAt: Date | null
      refundedAt: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends Payment$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, Payment$appointmentArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly appointmentId: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly paymentMethod: FieldRef<"Payment", 'PaymentMethod'>
    readonly stripePaymentId: FieldRef<"Payment", 'String'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly refundedAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
    readonly deletedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.appointment
   */
  export type Payment$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    customerId: string | null
    staffId: string | null
    serviceId: string | null
    rating: number | null
    title: string | null
    comment: string | null
    isApproved: boolean | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    customerId: string | null
    staffId: string | null
    serviceId: string | null
    rating: number | null
    title: string | null
    comment: string | null
    isApproved: boolean | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    appointmentId: number
    customerId: number
    staffId: number
    serviceId: number
    rating: number
    title: number
    comment: number
    isApproved: number
    isPublic: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    appointmentId?: true
    customerId?: true
    staffId?: true
    serviceId?: true
    rating?: true
    title?: true
    comment?: true
    isApproved?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    appointmentId?: true
    customerId?: true
    staffId?: true
    serviceId?: true
    rating?: true
    title?: true
    comment?: true
    isApproved?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    appointmentId?: true
    customerId?: true
    staffId?: true
    serviceId?: true
    rating?: true
    title?: true
    comment?: true
    isApproved?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    appointmentId: string
    customerId: string
    staffId: string | null
    serviceId: string
    rating: number
    title: string | null
    comment: string | null
    isApproved: boolean
    isPublic: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    customerId?: boolean
    staffId?: boolean
    serviceId?: boolean
    rating?: boolean
    title?: boolean
    comment?: boolean
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    customer?: boolean | UserDefaultArgs<ExtArgs>
    staff?: boolean | Review$staffArgs<ExtArgs>
    service?: boolean | ServiceItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    customerId?: boolean
    staffId?: boolean
    serviceId?: boolean
    rating?: boolean
    title?: boolean
    comment?: boolean
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    customer?: boolean | UserDefaultArgs<ExtArgs>
    staff?: boolean | Review$staffArgs<ExtArgs>
    service?: boolean | ServiceItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    customerId?: boolean
    staffId?: boolean
    serviceId?: boolean
    rating?: boolean
    title?: boolean
    comment?: boolean
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    customer?: boolean | UserDefaultArgs<ExtArgs>
    staff?: boolean | Review$staffArgs<ExtArgs>
    service?: boolean | ServiceItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    appointmentId?: boolean
    customerId?: boolean
    staffId?: boolean
    serviceId?: boolean
    rating?: boolean
    title?: boolean
    comment?: boolean
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointmentId" | "customerId" | "staffId" | "serviceId" | "rating" | "title" | "comment" | "isApproved" | "isPublic" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    customer?: boolean | UserDefaultArgs<ExtArgs>
    staff?: boolean | Review$staffArgs<ExtArgs>
    service?: boolean | ServiceItemDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    customer?: boolean | UserDefaultArgs<ExtArgs>
    staff?: boolean | Review$staffArgs<ExtArgs>
    service?: boolean | ServiceItemDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    customer?: boolean | UserDefaultArgs<ExtArgs>
    staff?: boolean | Review$staffArgs<ExtArgs>
    service?: boolean | ServiceItemDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
      customer: Prisma.$UserPayload<ExtArgs>
      staff: Prisma.$UserPayload<ExtArgs> | null
      service: Prisma.$ServiceItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appointmentId: string
      customerId: string
      staffId: string | null
      serviceId: string
      rating: number
      title: string | null
      comment: string | null
      isApproved: boolean
      isPublic: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends Review$staffArgs<ExtArgs> = {}>(args?: Subset<T, Review$staffArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceItemDefaultArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly appointmentId: FieldRef<"Review", 'String'>
    readonly customerId: FieldRef<"Review", 'String'>
    readonly staffId: FieldRef<"Review", 'String'>
    readonly serviceId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly title: FieldRef<"Review", 'String'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly isApproved: FieldRef<"Review", 'Boolean'>
    readonly isPublic: FieldRef<"Review", 'Boolean'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
    readonly deletedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.staff
   */
  export type Review$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    price: Decimal | null
    discount: Decimal | null
    finalPrice: Decimal | null
  }

  export type AppointmentSumAggregateOutputType = {
    price: Decimal | null
    discount: Decimal | null
    finalPrice: Decimal | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    scheduledDate: Date | null
    scheduledTime: string | null
    startTime: Date | null
    endTime: Date | null
    timezone: string | null
    status: $Enums.Status | null
    type: $Enums.AppointmentType | null
    notes: string | null
    internalNotes: string | null
    price: Decimal | null
    currency: string | null
    discount: Decimal | null
    finalPrice: Decimal | null
    customerId: string | null
    staffId: string | null
    serviceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    scheduledDate: Date | null
    scheduledTime: string | null
    startTime: Date | null
    endTime: Date | null
    timezone: string | null
    status: $Enums.Status | null
    type: $Enums.AppointmentType | null
    notes: string | null
    internalNotes: string | null
    price: Decimal | null
    currency: string | null
    discount: Decimal | null
    finalPrice: Decimal | null
    customerId: string | null
    staffId: string | null
    serviceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    scheduledDate: number
    scheduledTime: number
    startTime: number
    endTime: number
    timezone: number
    status: number
    type: number
    notes: number
    internalNotes: number
    price: number
    currency: number
    discount: number
    finalPrice: number
    customerId: number
    staffId: number
    serviceId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    price?: true
    discount?: true
    finalPrice?: true
  }

  export type AppointmentSumAggregateInputType = {
    price?: true
    discount?: true
    finalPrice?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    scheduledDate?: true
    scheduledTime?: true
    startTime?: true
    endTime?: true
    timezone?: true
    status?: true
    type?: true
    notes?: true
    internalNotes?: true
    price?: true
    currency?: true
    discount?: true
    finalPrice?: true
    customerId?: true
    staffId?: true
    serviceId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    scheduledDate?: true
    scheduledTime?: true
    startTime?: true
    endTime?: true
    timezone?: true
    status?: true
    type?: true
    notes?: true
    internalNotes?: true
    price?: true
    currency?: true
    discount?: true
    finalPrice?: true
    customerId?: true
    staffId?: true
    serviceId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    scheduledDate?: true
    scheduledTime?: true
    startTime?: true
    endTime?: true
    timezone?: true
    status?: true
    type?: true
    notes?: true
    internalNotes?: true
    price?: true
    currency?: true
    discount?: true
    finalPrice?: true
    customerId?: true
    staffId?: true
    serviceId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    scheduledDate: Date
    scheduledTime: string
    startTime: Date
    endTime: Date
    timezone: string
    status: $Enums.Status
    type: $Enums.AppointmentType
    notes: string | null
    internalNotes: string | null
    price: Decimal
    currency: string
    discount: Decimal
    finalPrice: Decimal
    customerId: string
    staffId: string | null
    serviceId: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduledDate?: boolean
    scheduledTime?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
    status?: boolean
    type?: boolean
    notes?: boolean
    internalNotes?: boolean
    price?: boolean
    currency?: boolean
    discount?: boolean
    finalPrice?: boolean
    customerId?: boolean
    staffId?: boolean
    serviceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    staff?: boolean | Appointment$staffArgs<ExtArgs>
    service?: boolean | ServiceItemDefaultArgs<ExtArgs>
    payments?: boolean | Appointment$paymentsArgs<ExtArgs>
    notifications?: boolean | Appointment$notificationsArgs<ExtArgs>
    reviews?: boolean | Appointment$reviewsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduledDate?: boolean
    scheduledTime?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
    status?: boolean
    type?: boolean
    notes?: boolean
    internalNotes?: boolean
    price?: boolean
    currency?: boolean
    discount?: boolean
    finalPrice?: boolean
    customerId?: boolean
    staffId?: boolean
    serviceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    staff?: boolean | Appointment$staffArgs<ExtArgs>
    service?: boolean | ServiceItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduledDate?: boolean
    scheduledTime?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
    status?: boolean
    type?: boolean
    notes?: boolean
    internalNotes?: boolean
    price?: boolean
    currency?: boolean
    discount?: boolean
    finalPrice?: boolean
    customerId?: boolean
    staffId?: boolean
    serviceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    staff?: boolean | Appointment$staffArgs<ExtArgs>
    service?: boolean | ServiceItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    scheduledDate?: boolean
    scheduledTime?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
    status?: boolean
    type?: boolean
    notes?: boolean
    internalNotes?: boolean
    price?: boolean
    currency?: boolean
    discount?: boolean
    finalPrice?: boolean
    customerId?: boolean
    staffId?: boolean
    serviceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scheduledDate" | "scheduledTime" | "startTime" | "endTime" | "timezone" | "status" | "type" | "notes" | "internalNotes" | "price" | "currency" | "discount" | "finalPrice" | "customerId" | "staffId" | "serviceId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    staff?: boolean | Appointment$staffArgs<ExtArgs>
    service?: boolean | ServiceItemDefaultArgs<ExtArgs>
    payments?: boolean | Appointment$paymentsArgs<ExtArgs>
    notifications?: boolean | Appointment$notificationsArgs<ExtArgs>
    reviews?: boolean | Appointment$reviewsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    staff?: boolean | Appointment$staffArgs<ExtArgs>
    service?: boolean | ServiceItemDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    staff?: boolean | Appointment$staffArgs<ExtArgs>
    service?: boolean | ServiceItemDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      customer: Prisma.$UserPayload<ExtArgs>
      staff: Prisma.$UserPayload<ExtArgs> | null
      service: Prisma.$ServiceItemPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scheduledDate: Date
      scheduledTime: string
      startTime: Date
      endTime: Date
      timezone: string
      status: $Enums.Status
      type: $Enums.AppointmentType
      notes: string | null
      internalNotes: string | null
      price: Prisma.Decimal
      currency: string
      discount: Prisma.Decimal
      finalPrice: Prisma.Decimal
      customerId: string
      staffId: string | null
      serviceId: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends Appointment$staffArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$staffArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceItemDefaultArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Appointment$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Appointment$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Appointment$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly scheduledDate: FieldRef<"Appointment", 'DateTime'>
    readonly scheduledTime: FieldRef<"Appointment", 'String'>
    readonly startTime: FieldRef<"Appointment", 'DateTime'>
    readonly endTime: FieldRef<"Appointment", 'DateTime'>
    readonly timezone: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'Status'>
    readonly type: FieldRef<"Appointment", 'AppointmentType'>
    readonly notes: FieldRef<"Appointment", 'String'>
    readonly internalNotes: FieldRef<"Appointment", 'String'>
    readonly price: FieldRef<"Appointment", 'Decimal'>
    readonly currency: FieldRef<"Appointment", 'String'>
    readonly discount: FieldRef<"Appointment", 'Decimal'>
    readonly finalPrice: FieldRef<"Appointment", 'Decimal'>
    readonly customerId: FieldRef<"Appointment", 'String'>
    readonly staffId: FieldRef<"Appointment", 'String'>
    readonly serviceId: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
    readonly deletedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.staff
   */
  export type Appointment$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Appointment.payments
   */
  export type Appointment$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Appointment.notifications
   */
  export type Appointment$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Appointment.reviews
   */
  export type Appointment$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model ServiceItem
   */

  export type AggregateServiceItem = {
    _count: ServiceItemCountAggregateOutputType | null
    _avg: ServiceItemAvgAggregateOutputType | null
    _sum: ServiceItemSumAggregateOutputType | null
    _min: ServiceItemMinAggregateOutputType | null
    _max: ServiceItemMaxAggregateOutputType | null
  }

  export type ServiceItemAvgAggregateOutputType = {
    basePrice: Decimal | null
    durationMinutes: number | null
    bufferMinutes: number | null
    maxAdvanceBooking: number | null
    minAdvanceBooking: number | null
  }

  export type ServiceItemSumAggregateOutputType = {
    basePrice: Decimal | null
    durationMinutes: number | null
    bufferMinutes: number | null
    maxAdvanceBooking: number | null
    minAdvanceBooking: number | null
  }

  export type ServiceItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    category: string | null
    basePrice: Decimal | null
    currency: string | null
    durationMinutes: number | null
    bufferMinutes: number | null
    isActive: boolean | null
    isOnline: boolean | null
    maxAdvanceBooking: number | null
    minAdvanceBooking: number | null
    color: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ServiceItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    category: string | null
    basePrice: Decimal | null
    currency: string | null
    durationMinutes: number | null
    bufferMinutes: number | null
    isActive: boolean | null
    isOnline: boolean | null
    maxAdvanceBooking: number | null
    minAdvanceBooking: number | null
    color: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ServiceItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    basePrice: number
    currency: number
    durationMinutes: number
    bufferMinutes: number
    isActive: number
    isOnline: number
    maxAdvanceBooking: number
    minAdvanceBooking: number
    color: number
    icon: number
    tags: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ServiceItemAvgAggregateInputType = {
    basePrice?: true
    durationMinutes?: true
    bufferMinutes?: true
    maxAdvanceBooking?: true
    minAdvanceBooking?: true
  }

  export type ServiceItemSumAggregateInputType = {
    basePrice?: true
    durationMinutes?: true
    bufferMinutes?: true
    maxAdvanceBooking?: true
    minAdvanceBooking?: true
  }

  export type ServiceItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    basePrice?: true
    currency?: true
    durationMinutes?: true
    bufferMinutes?: true
    isActive?: true
    isOnline?: true
    maxAdvanceBooking?: true
    minAdvanceBooking?: true
    color?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ServiceItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    basePrice?: true
    currency?: true
    durationMinutes?: true
    bufferMinutes?: true
    isActive?: true
    isOnline?: true
    maxAdvanceBooking?: true
    minAdvanceBooking?: true
    color?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ServiceItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    basePrice?: true
    currency?: true
    durationMinutes?: true
    bufferMinutes?: true
    isActive?: true
    isOnline?: true
    maxAdvanceBooking?: true
    minAdvanceBooking?: true
    color?: true
    icon?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ServiceItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceItem to aggregate.
     */
    where?: ServiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceItems to fetch.
     */
    orderBy?: ServiceItemOrderByWithRelationInput | ServiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceItems
    **/
    _count?: true | ServiceItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceItemMaxAggregateInputType
  }

  export type GetServiceItemAggregateType<T extends ServiceItemAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceItem[P]>
      : GetScalarType<T[P], AggregateServiceItem[P]>
  }




  export type ServiceItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceItemWhereInput
    orderBy?: ServiceItemOrderByWithAggregationInput | ServiceItemOrderByWithAggregationInput[]
    by: ServiceItemScalarFieldEnum[] | ServiceItemScalarFieldEnum
    having?: ServiceItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceItemCountAggregateInputType | true
    _avg?: ServiceItemAvgAggregateInputType
    _sum?: ServiceItemSumAggregateInputType
    _min?: ServiceItemMinAggregateInputType
    _max?: ServiceItemMaxAggregateInputType
  }

  export type ServiceItemGroupByOutputType = {
    id: string
    name: string
    description: string | null
    category: string
    basePrice: Decimal
    currency: string
    durationMinutes: number
    bufferMinutes: number
    isActive: boolean
    isOnline: boolean
    maxAdvanceBooking: number | null
    minAdvanceBooking: number | null
    color: string | null
    icon: string | null
    tags: string[]
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ServiceItemCountAggregateOutputType | null
    _avg: ServiceItemAvgAggregateOutputType | null
    _sum: ServiceItemSumAggregateOutputType | null
    _min: ServiceItemMinAggregateOutputType | null
    _max: ServiceItemMaxAggregateOutputType | null
  }

  type GetServiceItemGroupByPayload<T extends ServiceItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceItemGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceItemGroupByOutputType[P]>
        }
      >
    >


  export type ServiceItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    basePrice?: boolean
    currency?: boolean
    durationMinutes?: boolean
    bufferMinutes?: boolean
    isActive?: boolean
    isOnline?: boolean
    maxAdvanceBooking?: boolean
    minAdvanceBooking?: boolean
    color?: boolean
    icon?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    appointments?: boolean | ServiceItem$appointmentsArgs<ExtArgs>
    staffServices?: boolean | ServiceItem$staffServicesArgs<ExtArgs>
    reviews?: boolean | ServiceItem$reviewsArgs<ExtArgs>
    _count?: boolean | ServiceItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceItem"]>

  export type ServiceItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    basePrice?: boolean
    currency?: boolean
    durationMinutes?: boolean
    bufferMinutes?: boolean
    isActive?: boolean
    isOnline?: boolean
    maxAdvanceBooking?: boolean
    minAdvanceBooking?: boolean
    color?: boolean
    icon?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["serviceItem"]>

  export type ServiceItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    basePrice?: boolean
    currency?: boolean
    durationMinutes?: boolean
    bufferMinutes?: boolean
    isActive?: boolean
    isOnline?: boolean
    maxAdvanceBooking?: boolean
    minAdvanceBooking?: boolean
    color?: boolean
    icon?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["serviceItem"]>

  export type ServiceItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    basePrice?: boolean
    currency?: boolean
    durationMinutes?: boolean
    bufferMinutes?: boolean
    isActive?: boolean
    isOnline?: boolean
    maxAdvanceBooking?: boolean
    minAdvanceBooking?: boolean
    color?: boolean
    icon?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ServiceItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category" | "basePrice" | "currency" | "durationMinutes" | "bufferMinutes" | "isActive" | "isOnline" | "maxAdvanceBooking" | "minAdvanceBooking" | "color" | "icon" | "tags" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["serviceItem"]>
  export type ServiceItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | ServiceItem$appointmentsArgs<ExtArgs>
    staffServices?: boolean | ServiceItem$staffServicesArgs<ExtArgs>
    reviews?: boolean | ServiceItem$reviewsArgs<ExtArgs>
    _count?: boolean | ServiceItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServiceItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceItem"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      staffServices: Prisma.$StaffServicePayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      category: string
      basePrice: Prisma.Decimal
      currency: string
      durationMinutes: number
      bufferMinutes: number
      isActive: boolean
      isOnline: boolean
      maxAdvanceBooking: number | null
      minAdvanceBooking: number | null
      color: string | null
      icon: string | null
      tags: string[]
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["serviceItem"]>
    composites: {}
  }

  type ServiceItemGetPayload<S extends boolean | null | undefined | ServiceItemDefaultArgs> = $Result.GetResult<Prisma.$ServiceItemPayload, S>

  type ServiceItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceItemCountAggregateInputType | true
    }

  export interface ServiceItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceItem'], meta: { name: 'ServiceItem' } }
    /**
     * Find zero or one ServiceItem that matches the filter.
     * @param {ServiceItemFindUniqueArgs} args - Arguments to find a ServiceItem
     * @example
     * // Get one ServiceItem
     * const serviceItem = await prisma.serviceItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceItemFindUniqueArgs>(args: SelectSubset<T, ServiceItemFindUniqueArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceItemFindUniqueOrThrowArgs} args - Arguments to find a ServiceItem
     * @example
     * // Get one ServiceItem
     * const serviceItem = await prisma.serviceItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemFindFirstArgs} args - Arguments to find a ServiceItem
     * @example
     * // Get one ServiceItem
     * const serviceItem = await prisma.serviceItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceItemFindFirstArgs>(args?: SelectSubset<T, ServiceItemFindFirstArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemFindFirstOrThrowArgs} args - Arguments to find a ServiceItem
     * @example
     * // Get one ServiceItem
     * const serviceItem = await prisma.serviceItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceItems
     * const serviceItems = await prisma.serviceItem.findMany()
     * 
     * // Get first 10 ServiceItems
     * const serviceItems = await prisma.serviceItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceItemWithIdOnly = await prisma.serviceItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceItemFindManyArgs>(args?: SelectSubset<T, ServiceItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceItem.
     * @param {ServiceItemCreateArgs} args - Arguments to create a ServiceItem.
     * @example
     * // Create one ServiceItem
     * const ServiceItem = await prisma.serviceItem.create({
     *   data: {
     *     // ... data to create a ServiceItem
     *   }
     * })
     * 
     */
    create<T extends ServiceItemCreateArgs>(args: SelectSubset<T, ServiceItemCreateArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceItems.
     * @param {ServiceItemCreateManyArgs} args - Arguments to create many ServiceItems.
     * @example
     * // Create many ServiceItems
     * const serviceItem = await prisma.serviceItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceItemCreateManyArgs>(args?: SelectSubset<T, ServiceItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceItems and returns the data saved in the database.
     * @param {ServiceItemCreateManyAndReturnArgs} args - Arguments to create many ServiceItems.
     * @example
     * // Create many ServiceItems
     * const serviceItem = await prisma.serviceItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceItems and only return the `id`
     * const serviceItemWithIdOnly = await prisma.serviceItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceItem.
     * @param {ServiceItemDeleteArgs} args - Arguments to delete one ServiceItem.
     * @example
     * // Delete one ServiceItem
     * const ServiceItem = await prisma.serviceItem.delete({
     *   where: {
     *     // ... filter to delete one ServiceItem
     *   }
     * })
     * 
     */
    delete<T extends ServiceItemDeleteArgs>(args: SelectSubset<T, ServiceItemDeleteArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceItem.
     * @param {ServiceItemUpdateArgs} args - Arguments to update one ServiceItem.
     * @example
     * // Update one ServiceItem
     * const serviceItem = await prisma.serviceItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceItemUpdateArgs>(args: SelectSubset<T, ServiceItemUpdateArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceItems.
     * @param {ServiceItemDeleteManyArgs} args - Arguments to filter ServiceItems to delete.
     * @example
     * // Delete a few ServiceItems
     * const { count } = await prisma.serviceItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceItemDeleteManyArgs>(args?: SelectSubset<T, ServiceItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceItems
     * const serviceItem = await prisma.serviceItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceItemUpdateManyArgs>(args: SelectSubset<T, ServiceItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceItems and returns the data updated in the database.
     * @param {ServiceItemUpdateManyAndReturnArgs} args - Arguments to update many ServiceItems.
     * @example
     * // Update many ServiceItems
     * const serviceItem = await prisma.serviceItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceItems and only return the `id`
     * const serviceItemWithIdOnly = await prisma.serviceItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceItem.
     * @param {ServiceItemUpsertArgs} args - Arguments to update or create a ServiceItem.
     * @example
     * // Update or create a ServiceItem
     * const serviceItem = await prisma.serviceItem.upsert({
     *   create: {
     *     // ... data to create a ServiceItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceItem we want to update
     *   }
     * })
     */
    upsert<T extends ServiceItemUpsertArgs>(args: SelectSubset<T, ServiceItemUpsertArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemCountArgs} args - Arguments to filter ServiceItems to count.
     * @example
     * // Count the number of ServiceItems
     * const count = await prisma.serviceItem.count({
     *   where: {
     *     // ... the filter for the ServiceItems we want to count
     *   }
     * })
    **/
    count<T extends ServiceItemCountArgs>(
      args?: Subset<T, ServiceItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceItemAggregateArgs>(args: Subset<T, ServiceItemAggregateArgs>): Prisma.PrismaPromise<GetServiceItemAggregateType<T>>

    /**
     * Group by ServiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemGroupByArgs} args - Group by arguments.
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
      T extends ServiceItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceItemGroupByArgs['orderBy'] }
        : { orderBy?: ServiceItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceItem model
   */
  readonly fields: ServiceItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends ServiceItem$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, ServiceItem$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staffServices<T extends ServiceItem$staffServicesArgs<ExtArgs> = {}>(args?: Subset<T, ServiceItem$staffServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends ServiceItem$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, ServiceItem$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ServiceItem model
   */
  interface ServiceItemFieldRefs {
    readonly id: FieldRef<"ServiceItem", 'String'>
    readonly name: FieldRef<"ServiceItem", 'String'>
    readonly description: FieldRef<"ServiceItem", 'String'>
    readonly category: FieldRef<"ServiceItem", 'String'>
    readonly basePrice: FieldRef<"ServiceItem", 'Decimal'>
    readonly currency: FieldRef<"ServiceItem", 'String'>
    readonly durationMinutes: FieldRef<"ServiceItem", 'Int'>
    readonly bufferMinutes: FieldRef<"ServiceItem", 'Int'>
    readonly isActive: FieldRef<"ServiceItem", 'Boolean'>
    readonly isOnline: FieldRef<"ServiceItem", 'Boolean'>
    readonly maxAdvanceBooking: FieldRef<"ServiceItem", 'Int'>
    readonly minAdvanceBooking: FieldRef<"ServiceItem", 'Int'>
    readonly color: FieldRef<"ServiceItem", 'String'>
    readonly icon: FieldRef<"ServiceItem", 'String'>
    readonly tags: FieldRef<"ServiceItem", 'String[]'>
    readonly createdAt: FieldRef<"ServiceItem", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceItem", 'DateTime'>
    readonly deletedAt: FieldRef<"ServiceItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceItem findUnique
   */
  export type ServiceItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceItem to fetch.
     */
    where: ServiceItemWhereUniqueInput
  }

  /**
   * ServiceItem findUniqueOrThrow
   */
  export type ServiceItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceItem to fetch.
     */
    where: ServiceItemWhereUniqueInput
  }

  /**
   * ServiceItem findFirst
   */
  export type ServiceItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceItem to fetch.
     */
    where?: ServiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceItems to fetch.
     */
    orderBy?: ServiceItemOrderByWithRelationInput | ServiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceItems.
     */
    cursor?: ServiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceItems.
     */
    distinct?: ServiceItemScalarFieldEnum | ServiceItemScalarFieldEnum[]
  }

  /**
   * ServiceItem findFirstOrThrow
   */
  export type ServiceItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceItem to fetch.
     */
    where?: ServiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceItems to fetch.
     */
    orderBy?: ServiceItemOrderByWithRelationInput | ServiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceItems.
     */
    cursor?: ServiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceItems.
     */
    distinct?: ServiceItemScalarFieldEnum | ServiceItemScalarFieldEnum[]
  }

  /**
   * ServiceItem findMany
   */
  export type ServiceItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceItems to fetch.
     */
    where?: ServiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceItems to fetch.
     */
    orderBy?: ServiceItemOrderByWithRelationInput | ServiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceItems.
     */
    cursor?: ServiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceItems.
     */
    skip?: number
    distinct?: ServiceItemScalarFieldEnum | ServiceItemScalarFieldEnum[]
  }

  /**
   * ServiceItem create
   */
  export type ServiceItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceItem.
     */
    data: XOR<ServiceItemCreateInput, ServiceItemUncheckedCreateInput>
  }

  /**
   * ServiceItem createMany
   */
  export type ServiceItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceItems.
     */
    data: ServiceItemCreateManyInput | ServiceItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceItem createManyAndReturn
   */
  export type ServiceItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceItems.
     */
    data: ServiceItemCreateManyInput | ServiceItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceItem update
   */
  export type ServiceItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceItem.
     */
    data: XOR<ServiceItemUpdateInput, ServiceItemUncheckedUpdateInput>
    /**
     * Choose, which ServiceItem to update.
     */
    where: ServiceItemWhereUniqueInput
  }

  /**
   * ServiceItem updateMany
   */
  export type ServiceItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceItems.
     */
    data: XOR<ServiceItemUpdateManyMutationInput, ServiceItemUncheckedUpdateManyInput>
    /**
     * Filter which ServiceItems to update
     */
    where?: ServiceItemWhereInput
    /**
     * Limit how many ServiceItems to update.
     */
    limit?: number
  }

  /**
   * ServiceItem updateManyAndReturn
   */
  export type ServiceItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * The data used to update ServiceItems.
     */
    data: XOR<ServiceItemUpdateManyMutationInput, ServiceItemUncheckedUpdateManyInput>
    /**
     * Filter which ServiceItems to update
     */
    where?: ServiceItemWhereInput
    /**
     * Limit how many ServiceItems to update.
     */
    limit?: number
  }

  /**
   * ServiceItem upsert
   */
  export type ServiceItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceItem to update in case it exists.
     */
    where: ServiceItemWhereUniqueInput
    /**
     * In case the ServiceItem found by the `where` argument doesn't exist, create a new ServiceItem with this data.
     */
    create: XOR<ServiceItemCreateInput, ServiceItemUncheckedCreateInput>
    /**
     * In case the ServiceItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceItemUpdateInput, ServiceItemUncheckedUpdateInput>
  }

  /**
   * ServiceItem delete
   */
  export type ServiceItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    /**
     * Filter which ServiceItem to delete.
     */
    where: ServiceItemWhereUniqueInput
  }

  /**
   * ServiceItem deleteMany
   */
  export type ServiceItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceItems to delete
     */
    where?: ServiceItemWhereInput
    /**
     * Limit how many ServiceItems to delete.
     */
    limit?: number
  }

  /**
   * ServiceItem.appointments
   */
  export type ServiceItem$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * ServiceItem.staffServices
   */
  export type ServiceItem$staffServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffService
     */
    select?: StaffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffService
     */
    omit?: StaffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffServiceInclude<ExtArgs> | null
    where?: StaffServiceWhereInput
    orderBy?: StaffServiceOrderByWithRelationInput | StaffServiceOrderByWithRelationInput[]
    cursor?: StaffServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffServiceScalarFieldEnum | StaffServiceScalarFieldEnum[]
  }

  /**
   * ServiceItem.reviews
   */
  export type ServiceItem$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * ServiceItem without action
   */
  export type ServiceItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
  }


  /**
   * Model StaffAvailability
   */

  export type AggregateStaffAvailability = {
    _count: StaffAvailabilityCountAggregateOutputType | null
    _min: StaffAvailabilityMinAggregateOutputType | null
    _max: StaffAvailabilityMaxAggregateOutputType | null
  }

  export type StaffAvailabilityMinAggregateOutputType = {
    id: string | null
    staffId: string | null
    dayOfWeek: $Enums.DayOfWeek | null
    startTime: string | null
    endTime: string | null
    specificDate: Date | null
    isAvailable: boolean | null
    breakStartTime: string | null
    breakEndTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type StaffAvailabilityMaxAggregateOutputType = {
    id: string | null
    staffId: string | null
    dayOfWeek: $Enums.DayOfWeek | null
    startTime: string | null
    endTime: string | null
    specificDate: Date | null
    isAvailable: boolean | null
    breakStartTime: string | null
    breakEndTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type StaffAvailabilityCountAggregateOutputType = {
    id: number
    staffId: number
    dayOfWeek: number
    startTime: number
    endTime: number
    specificDate: number
    isAvailable: number
    breakStartTime: number
    breakEndTime: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type StaffAvailabilityMinAggregateInputType = {
    id?: true
    staffId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    specificDate?: true
    isAvailable?: true
    breakStartTime?: true
    breakEndTime?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type StaffAvailabilityMaxAggregateInputType = {
    id?: true
    staffId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    specificDate?: true
    isAvailable?: true
    breakStartTime?: true
    breakEndTime?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type StaffAvailabilityCountAggregateInputType = {
    id?: true
    staffId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    specificDate?: true
    isAvailable?: true
    breakStartTime?: true
    breakEndTime?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type StaffAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffAvailability to aggregate.
     */
    where?: StaffAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAvailabilities to fetch.
     */
    orderBy?: StaffAvailabilityOrderByWithRelationInput | StaffAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffAvailabilities
    **/
    _count?: true | StaffAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffAvailabilityMaxAggregateInputType
  }

  export type GetStaffAvailabilityAggregateType<T extends StaffAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffAvailability[P]>
      : GetScalarType<T[P], AggregateStaffAvailability[P]>
  }




  export type StaffAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffAvailabilityWhereInput
    orderBy?: StaffAvailabilityOrderByWithAggregationInput | StaffAvailabilityOrderByWithAggregationInput[]
    by: StaffAvailabilityScalarFieldEnum[] | StaffAvailabilityScalarFieldEnum
    having?: StaffAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffAvailabilityCountAggregateInputType | true
    _min?: StaffAvailabilityMinAggregateInputType
    _max?: StaffAvailabilityMaxAggregateInputType
  }

  export type StaffAvailabilityGroupByOutputType = {
    id: string
    staffId: string
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    specificDate: Date | null
    isAvailable: boolean
    breakStartTime: string | null
    breakEndTime: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: StaffAvailabilityCountAggregateOutputType | null
    _min: StaffAvailabilityMinAggregateOutputType | null
    _max: StaffAvailabilityMaxAggregateOutputType | null
  }

  type GetStaffAvailabilityGroupByPayload<T extends StaffAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], StaffAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type StaffAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    specificDate?: boolean
    isAvailable?: boolean
    breakStartTime?: boolean
    breakEndTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffAvailability"]>

  export type StaffAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    specificDate?: boolean
    isAvailable?: boolean
    breakStartTime?: boolean
    breakEndTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffAvailability"]>

  export type StaffAvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    specificDate?: boolean
    isAvailable?: boolean
    breakStartTime?: boolean
    breakEndTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffAvailability"]>

  export type StaffAvailabilitySelectScalar = {
    id?: boolean
    staffId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    specificDate?: boolean
    isAvailable?: boolean
    breakStartTime?: boolean
    breakEndTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type StaffAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "staffId" | "dayOfWeek" | "startTime" | "endTime" | "specificDate" | "isAvailable" | "breakStartTime" | "breakEndTime" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["staffAvailability"]>
  export type StaffAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StaffAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StaffAvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StaffAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffAvailability"
    objects: {
      staff: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      staffId: string
      dayOfWeek: $Enums.DayOfWeek
      startTime: string
      endTime: string
      specificDate: Date | null
      isAvailable: boolean
      breakStartTime: string | null
      breakEndTime: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["staffAvailability"]>
    composites: {}
  }

  type StaffAvailabilityGetPayload<S extends boolean | null | undefined | StaffAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$StaffAvailabilityPayload, S>

  type StaffAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffAvailabilityCountAggregateInputType | true
    }

  export interface StaffAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffAvailability'], meta: { name: 'StaffAvailability' } }
    /**
     * Find zero or one StaffAvailability that matches the filter.
     * @param {StaffAvailabilityFindUniqueArgs} args - Arguments to find a StaffAvailability
     * @example
     * // Get one StaffAvailability
     * const staffAvailability = await prisma.staffAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffAvailabilityFindUniqueArgs>(args: SelectSubset<T, StaffAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__StaffAvailabilityClient<$Result.GetResult<Prisma.$StaffAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a StaffAvailability
     * @example
     * // Get one StaffAvailability
     * const staffAvailability = await prisma.staffAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffAvailabilityClient<$Result.GetResult<Prisma.$StaffAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAvailabilityFindFirstArgs} args - Arguments to find a StaffAvailability
     * @example
     * // Get one StaffAvailability
     * const staffAvailability = await prisma.staffAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffAvailabilityFindFirstArgs>(args?: SelectSubset<T, StaffAvailabilityFindFirstArgs<ExtArgs>>): Prisma__StaffAvailabilityClient<$Result.GetResult<Prisma.$StaffAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAvailabilityFindFirstOrThrowArgs} args - Arguments to find a StaffAvailability
     * @example
     * // Get one StaffAvailability
     * const staffAvailability = await prisma.staffAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffAvailabilityClient<$Result.GetResult<Prisma.$StaffAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffAvailabilities
     * const staffAvailabilities = await prisma.staffAvailability.findMany()
     * 
     * // Get first 10 StaffAvailabilities
     * const staffAvailabilities = await prisma.staffAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffAvailabilityWithIdOnly = await prisma.staffAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffAvailabilityFindManyArgs>(args?: SelectSubset<T, StaffAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffAvailability.
     * @param {StaffAvailabilityCreateArgs} args - Arguments to create a StaffAvailability.
     * @example
     * // Create one StaffAvailability
     * const StaffAvailability = await prisma.staffAvailability.create({
     *   data: {
     *     // ... data to create a StaffAvailability
     *   }
     * })
     * 
     */
    create<T extends StaffAvailabilityCreateArgs>(args: SelectSubset<T, StaffAvailabilityCreateArgs<ExtArgs>>): Prisma__StaffAvailabilityClient<$Result.GetResult<Prisma.$StaffAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffAvailabilities.
     * @param {StaffAvailabilityCreateManyArgs} args - Arguments to create many StaffAvailabilities.
     * @example
     * // Create many StaffAvailabilities
     * const staffAvailability = await prisma.staffAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffAvailabilityCreateManyArgs>(args?: SelectSubset<T, StaffAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffAvailabilities and returns the data saved in the database.
     * @param {StaffAvailabilityCreateManyAndReturnArgs} args - Arguments to create many StaffAvailabilities.
     * @example
     * // Create many StaffAvailabilities
     * const staffAvailability = await prisma.staffAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffAvailabilities and only return the `id`
     * const staffAvailabilityWithIdOnly = await prisma.staffAvailability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaffAvailability.
     * @param {StaffAvailabilityDeleteArgs} args - Arguments to delete one StaffAvailability.
     * @example
     * // Delete one StaffAvailability
     * const StaffAvailability = await prisma.staffAvailability.delete({
     *   where: {
     *     // ... filter to delete one StaffAvailability
     *   }
     * })
     * 
     */
    delete<T extends StaffAvailabilityDeleteArgs>(args: SelectSubset<T, StaffAvailabilityDeleteArgs<ExtArgs>>): Prisma__StaffAvailabilityClient<$Result.GetResult<Prisma.$StaffAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffAvailability.
     * @param {StaffAvailabilityUpdateArgs} args - Arguments to update one StaffAvailability.
     * @example
     * // Update one StaffAvailability
     * const staffAvailability = await prisma.staffAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffAvailabilityUpdateArgs>(args: SelectSubset<T, StaffAvailabilityUpdateArgs<ExtArgs>>): Prisma__StaffAvailabilityClient<$Result.GetResult<Prisma.$StaffAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffAvailabilities.
     * @param {StaffAvailabilityDeleteManyArgs} args - Arguments to filter StaffAvailabilities to delete.
     * @example
     * // Delete a few StaffAvailabilities
     * const { count } = await prisma.staffAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffAvailabilityDeleteManyArgs>(args?: SelectSubset<T, StaffAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffAvailabilities
     * const staffAvailability = await prisma.staffAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffAvailabilityUpdateManyArgs>(args: SelectSubset<T, StaffAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffAvailabilities and returns the data updated in the database.
     * @param {StaffAvailabilityUpdateManyAndReturnArgs} args - Arguments to update many StaffAvailabilities.
     * @example
     * // Update many StaffAvailabilities
     * const staffAvailability = await prisma.staffAvailability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaffAvailabilities and only return the `id`
     * const staffAvailabilityWithIdOnly = await prisma.staffAvailability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffAvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffAvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaffAvailability.
     * @param {StaffAvailabilityUpsertArgs} args - Arguments to update or create a StaffAvailability.
     * @example
     * // Update or create a StaffAvailability
     * const staffAvailability = await prisma.staffAvailability.upsert({
     *   create: {
     *     // ... data to create a StaffAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffAvailability we want to update
     *   }
     * })
     */
    upsert<T extends StaffAvailabilityUpsertArgs>(args: SelectSubset<T, StaffAvailabilityUpsertArgs<ExtArgs>>): Prisma__StaffAvailabilityClient<$Result.GetResult<Prisma.$StaffAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAvailabilityCountArgs} args - Arguments to filter StaffAvailabilities to count.
     * @example
     * // Count the number of StaffAvailabilities
     * const count = await prisma.staffAvailability.count({
     *   where: {
     *     // ... the filter for the StaffAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends StaffAvailabilityCountArgs>(
      args?: Subset<T, StaffAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffAvailabilityAggregateArgs>(args: Subset<T, StaffAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetStaffAvailabilityAggregateType<T>>

    /**
     * Group by StaffAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAvailabilityGroupByArgs} args - Group by arguments.
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
      T extends StaffAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: StaffAvailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffAvailability model
   */
  readonly fields: StaffAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StaffAvailability model
   */
  interface StaffAvailabilityFieldRefs {
    readonly id: FieldRef<"StaffAvailability", 'String'>
    readonly staffId: FieldRef<"StaffAvailability", 'String'>
    readonly dayOfWeek: FieldRef<"StaffAvailability", 'DayOfWeek'>
    readonly startTime: FieldRef<"StaffAvailability", 'String'>
    readonly endTime: FieldRef<"StaffAvailability", 'String'>
    readonly specificDate: FieldRef<"StaffAvailability", 'DateTime'>
    readonly isAvailable: FieldRef<"StaffAvailability", 'Boolean'>
    readonly breakStartTime: FieldRef<"StaffAvailability", 'String'>
    readonly breakEndTime: FieldRef<"StaffAvailability", 'String'>
    readonly createdAt: FieldRef<"StaffAvailability", 'DateTime'>
    readonly updatedAt: FieldRef<"StaffAvailability", 'DateTime'>
    readonly deletedAt: FieldRef<"StaffAvailability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StaffAvailability findUnique
   */
  export type StaffAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAvailability
     */
    select?: StaffAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAvailability
     */
    omit?: StaffAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which StaffAvailability to fetch.
     */
    where: StaffAvailabilityWhereUniqueInput
  }

  /**
   * StaffAvailability findUniqueOrThrow
   */
  export type StaffAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAvailability
     */
    select?: StaffAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAvailability
     */
    omit?: StaffAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which StaffAvailability to fetch.
     */
    where: StaffAvailabilityWhereUniqueInput
  }

  /**
   * StaffAvailability findFirst
   */
  export type StaffAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAvailability
     */
    select?: StaffAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAvailability
     */
    omit?: StaffAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which StaffAvailability to fetch.
     */
    where?: StaffAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAvailabilities to fetch.
     */
    orderBy?: StaffAvailabilityOrderByWithRelationInput | StaffAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffAvailabilities.
     */
    cursor?: StaffAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffAvailabilities.
     */
    distinct?: StaffAvailabilityScalarFieldEnum | StaffAvailabilityScalarFieldEnum[]
  }

  /**
   * StaffAvailability findFirstOrThrow
   */
  export type StaffAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAvailability
     */
    select?: StaffAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAvailability
     */
    omit?: StaffAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which StaffAvailability to fetch.
     */
    where?: StaffAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAvailabilities to fetch.
     */
    orderBy?: StaffAvailabilityOrderByWithRelationInput | StaffAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffAvailabilities.
     */
    cursor?: StaffAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffAvailabilities.
     */
    distinct?: StaffAvailabilityScalarFieldEnum | StaffAvailabilityScalarFieldEnum[]
  }

  /**
   * StaffAvailability findMany
   */
  export type StaffAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAvailability
     */
    select?: StaffAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAvailability
     */
    omit?: StaffAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which StaffAvailabilities to fetch.
     */
    where?: StaffAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAvailabilities to fetch.
     */
    orderBy?: StaffAvailabilityOrderByWithRelationInput | StaffAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffAvailabilities.
     */
    cursor?: StaffAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAvailabilities.
     */
    skip?: number
    distinct?: StaffAvailabilityScalarFieldEnum | StaffAvailabilityScalarFieldEnum[]
  }

  /**
   * StaffAvailability create
   */
  export type StaffAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAvailability
     */
    select?: StaffAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAvailability
     */
    omit?: StaffAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a StaffAvailability.
     */
    data: XOR<StaffAvailabilityCreateInput, StaffAvailabilityUncheckedCreateInput>
  }

  /**
   * StaffAvailability createMany
   */
  export type StaffAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffAvailabilities.
     */
    data: StaffAvailabilityCreateManyInput | StaffAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaffAvailability createManyAndReturn
   */
  export type StaffAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAvailability
     */
    select?: StaffAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAvailability
     */
    omit?: StaffAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many StaffAvailabilities.
     */
    data: StaffAvailabilityCreateManyInput | StaffAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffAvailability update
   */
  export type StaffAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAvailability
     */
    select?: StaffAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAvailability
     */
    omit?: StaffAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a StaffAvailability.
     */
    data: XOR<StaffAvailabilityUpdateInput, StaffAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which StaffAvailability to update.
     */
    where: StaffAvailabilityWhereUniqueInput
  }

  /**
   * StaffAvailability updateMany
   */
  export type StaffAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffAvailabilities.
     */
    data: XOR<StaffAvailabilityUpdateManyMutationInput, StaffAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which StaffAvailabilities to update
     */
    where?: StaffAvailabilityWhereInput
    /**
     * Limit how many StaffAvailabilities to update.
     */
    limit?: number
  }

  /**
   * StaffAvailability updateManyAndReturn
   */
  export type StaffAvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAvailability
     */
    select?: StaffAvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAvailability
     */
    omit?: StaffAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update StaffAvailabilities.
     */
    data: XOR<StaffAvailabilityUpdateManyMutationInput, StaffAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which StaffAvailabilities to update
     */
    where?: StaffAvailabilityWhereInput
    /**
     * Limit how many StaffAvailabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffAvailability upsert
   */
  export type StaffAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAvailability
     */
    select?: StaffAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAvailability
     */
    omit?: StaffAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the StaffAvailability to update in case it exists.
     */
    where: StaffAvailabilityWhereUniqueInput
    /**
     * In case the StaffAvailability found by the `where` argument doesn't exist, create a new StaffAvailability with this data.
     */
    create: XOR<StaffAvailabilityCreateInput, StaffAvailabilityUncheckedCreateInput>
    /**
     * In case the StaffAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffAvailabilityUpdateInput, StaffAvailabilityUncheckedUpdateInput>
  }

  /**
   * StaffAvailability delete
   */
  export type StaffAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAvailability
     */
    select?: StaffAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAvailability
     */
    omit?: StaffAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which StaffAvailability to delete.
     */
    where: StaffAvailabilityWhereUniqueInput
  }

  /**
   * StaffAvailability deleteMany
   */
  export type StaffAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffAvailabilities to delete
     */
    where?: StaffAvailabilityWhereInput
    /**
     * Limit how many StaffAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * StaffAvailability without action
   */
  export type StaffAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAvailability
     */
    select?: StaffAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAvailability
     */
    omit?: StaffAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model StaffService
   */

  export type AggregateStaffService = {
    _count: StaffServiceCountAggregateOutputType | null
    _avg: StaffServiceAvgAggregateOutputType | null
    _sum: StaffServiceSumAggregateOutputType | null
    _min: StaffServiceMinAggregateOutputType | null
    _max: StaffServiceMaxAggregateOutputType | null
  }

  export type StaffServiceAvgAggregateOutputType = {
    customPrice: Decimal | null
    customDuration: number | null
    skillLevel: number | null
    experience: number | null
  }

  export type StaffServiceSumAggregateOutputType = {
    customPrice: Decimal | null
    customDuration: number | null
    skillLevel: number | null
    experience: number | null
  }

  export type StaffServiceMinAggregateOutputType = {
    id: string | null
    staffId: string | null
    serviceId: string | null
    customPrice: Decimal | null
    customDuration: number | null
    isActive: boolean | null
    isPreferred: boolean | null
    skillLevel: number | null
    experience: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type StaffServiceMaxAggregateOutputType = {
    id: string | null
    staffId: string | null
    serviceId: string | null
    customPrice: Decimal | null
    customDuration: number | null
    isActive: boolean | null
    isPreferred: boolean | null
    skillLevel: number | null
    experience: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type StaffServiceCountAggregateOutputType = {
    id: number
    staffId: number
    serviceId: number
    customPrice: number
    customDuration: number
    isActive: number
    isPreferred: number
    skillLevel: number
    experience: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type StaffServiceAvgAggregateInputType = {
    customPrice?: true
    customDuration?: true
    skillLevel?: true
    experience?: true
  }

  export type StaffServiceSumAggregateInputType = {
    customPrice?: true
    customDuration?: true
    skillLevel?: true
    experience?: true
  }

  export type StaffServiceMinAggregateInputType = {
    id?: true
    staffId?: true
    serviceId?: true
    customPrice?: true
    customDuration?: true
    isActive?: true
    isPreferred?: true
    skillLevel?: true
    experience?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type StaffServiceMaxAggregateInputType = {
    id?: true
    staffId?: true
    serviceId?: true
    customPrice?: true
    customDuration?: true
    isActive?: true
    isPreferred?: true
    skillLevel?: true
    experience?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type StaffServiceCountAggregateInputType = {
    id?: true
    staffId?: true
    serviceId?: true
    customPrice?: true
    customDuration?: true
    isActive?: true
    isPreferred?: true
    skillLevel?: true
    experience?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type StaffServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffService to aggregate.
     */
    where?: StaffServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffServices to fetch.
     */
    orderBy?: StaffServiceOrderByWithRelationInput | StaffServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffServices
    **/
    _count?: true | StaffServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffServiceMaxAggregateInputType
  }

  export type GetStaffServiceAggregateType<T extends StaffServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffService[P]>
      : GetScalarType<T[P], AggregateStaffService[P]>
  }




  export type StaffServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffServiceWhereInput
    orderBy?: StaffServiceOrderByWithAggregationInput | StaffServiceOrderByWithAggregationInput[]
    by: StaffServiceScalarFieldEnum[] | StaffServiceScalarFieldEnum
    having?: StaffServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffServiceCountAggregateInputType | true
    _avg?: StaffServiceAvgAggregateInputType
    _sum?: StaffServiceSumAggregateInputType
    _min?: StaffServiceMinAggregateInputType
    _max?: StaffServiceMaxAggregateInputType
  }

  export type StaffServiceGroupByOutputType = {
    id: string
    staffId: string
    serviceId: string
    customPrice: Decimal | null
    customDuration: number | null
    isActive: boolean
    isPreferred: boolean
    skillLevel: number
    experience: number | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: StaffServiceCountAggregateOutputType | null
    _avg: StaffServiceAvgAggregateOutputType | null
    _sum: StaffServiceSumAggregateOutputType | null
    _min: StaffServiceMinAggregateOutputType | null
    _max: StaffServiceMaxAggregateOutputType | null
  }

  type GetStaffServiceGroupByPayload<T extends StaffServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffServiceGroupByOutputType[P]>
            : GetScalarType<T[P], StaffServiceGroupByOutputType[P]>
        }
      >
    >


  export type StaffServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    serviceId?: boolean
    customPrice?: boolean
    customDuration?: boolean
    isActive?: boolean
    isPreferred?: boolean
    skillLevel?: boolean
    experience?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    staff?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffService"]>

  export type StaffServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    serviceId?: boolean
    customPrice?: boolean
    customDuration?: boolean
    isActive?: boolean
    isPreferred?: boolean
    skillLevel?: boolean
    experience?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    staff?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffService"]>

  export type StaffServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    serviceId?: boolean
    customPrice?: boolean
    customDuration?: boolean
    isActive?: boolean
    isPreferred?: boolean
    skillLevel?: boolean
    experience?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    staff?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffService"]>

  export type StaffServiceSelectScalar = {
    id?: boolean
    staffId?: boolean
    serviceId?: boolean
    customPrice?: boolean
    customDuration?: boolean
    isActive?: boolean
    isPreferred?: boolean
    skillLevel?: boolean
    experience?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type StaffServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "staffId" | "serviceId" | "customPrice" | "customDuration" | "isActive" | "isPreferred" | "skillLevel" | "experience" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["staffService"]>
  export type StaffServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceItemDefaultArgs<ExtArgs>
  }
  export type StaffServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceItemDefaultArgs<ExtArgs>
  }
  export type StaffServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceItemDefaultArgs<ExtArgs>
  }

  export type $StaffServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffService"
    objects: {
      staff: Prisma.$UserPayload<ExtArgs>
      service: Prisma.$ServiceItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      staffId: string
      serviceId: string
      customPrice: Prisma.Decimal | null
      customDuration: number | null
      isActive: boolean
      isPreferred: boolean
      skillLevel: number
      experience: number | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["staffService"]>
    composites: {}
  }

  type StaffServiceGetPayload<S extends boolean | null | undefined | StaffServiceDefaultArgs> = $Result.GetResult<Prisma.$StaffServicePayload, S>

  type StaffServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffServiceCountAggregateInputType | true
    }

  export interface StaffServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffService'], meta: { name: 'StaffService' } }
    /**
     * Find zero or one StaffService that matches the filter.
     * @param {StaffServiceFindUniqueArgs} args - Arguments to find a StaffService
     * @example
     * // Get one StaffService
     * const staffService = await prisma.staffService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffServiceFindUniqueArgs>(args: SelectSubset<T, StaffServiceFindUniqueArgs<ExtArgs>>): Prisma__StaffServiceClient<$Result.GetResult<Prisma.$StaffServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffServiceFindUniqueOrThrowArgs} args - Arguments to find a StaffService
     * @example
     * // Get one StaffService
     * const staffService = await prisma.staffService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffServiceClient<$Result.GetResult<Prisma.$StaffServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffServiceFindFirstArgs} args - Arguments to find a StaffService
     * @example
     * // Get one StaffService
     * const staffService = await prisma.staffService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffServiceFindFirstArgs>(args?: SelectSubset<T, StaffServiceFindFirstArgs<ExtArgs>>): Prisma__StaffServiceClient<$Result.GetResult<Prisma.$StaffServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffServiceFindFirstOrThrowArgs} args - Arguments to find a StaffService
     * @example
     * // Get one StaffService
     * const staffService = await prisma.staffService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffServiceClient<$Result.GetResult<Prisma.$StaffServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffServices
     * const staffServices = await prisma.staffService.findMany()
     * 
     * // Get first 10 StaffServices
     * const staffServices = await prisma.staffService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffServiceWithIdOnly = await prisma.staffService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffServiceFindManyArgs>(args?: SelectSubset<T, StaffServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffService.
     * @param {StaffServiceCreateArgs} args - Arguments to create a StaffService.
     * @example
     * // Create one StaffService
     * const StaffService = await prisma.staffService.create({
     *   data: {
     *     // ... data to create a StaffService
     *   }
     * })
     * 
     */
    create<T extends StaffServiceCreateArgs>(args: SelectSubset<T, StaffServiceCreateArgs<ExtArgs>>): Prisma__StaffServiceClient<$Result.GetResult<Prisma.$StaffServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffServices.
     * @param {StaffServiceCreateManyArgs} args - Arguments to create many StaffServices.
     * @example
     * // Create many StaffServices
     * const staffService = await prisma.staffService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffServiceCreateManyArgs>(args?: SelectSubset<T, StaffServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffServices and returns the data saved in the database.
     * @param {StaffServiceCreateManyAndReturnArgs} args - Arguments to create many StaffServices.
     * @example
     * // Create many StaffServices
     * const staffService = await prisma.staffService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffServices and only return the `id`
     * const staffServiceWithIdOnly = await prisma.staffService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaffService.
     * @param {StaffServiceDeleteArgs} args - Arguments to delete one StaffService.
     * @example
     * // Delete one StaffService
     * const StaffService = await prisma.staffService.delete({
     *   where: {
     *     // ... filter to delete one StaffService
     *   }
     * })
     * 
     */
    delete<T extends StaffServiceDeleteArgs>(args: SelectSubset<T, StaffServiceDeleteArgs<ExtArgs>>): Prisma__StaffServiceClient<$Result.GetResult<Prisma.$StaffServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffService.
     * @param {StaffServiceUpdateArgs} args - Arguments to update one StaffService.
     * @example
     * // Update one StaffService
     * const staffService = await prisma.staffService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffServiceUpdateArgs>(args: SelectSubset<T, StaffServiceUpdateArgs<ExtArgs>>): Prisma__StaffServiceClient<$Result.GetResult<Prisma.$StaffServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffServices.
     * @param {StaffServiceDeleteManyArgs} args - Arguments to filter StaffServices to delete.
     * @example
     * // Delete a few StaffServices
     * const { count } = await prisma.staffService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffServiceDeleteManyArgs>(args?: SelectSubset<T, StaffServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffServices
     * const staffService = await prisma.staffService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffServiceUpdateManyArgs>(args: SelectSubset<T, StaffServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffServices and returns the data updated in the database.
     * @param {StaffServiceUpdateManyAndReturnArgs} args - Arguments to update many StaffServices.
     * @example
     * // Update many StaffServices
     * const staffService = await prisma.staffService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaffServices and only return the `id`
     * const staffServiceWithIdOnly = await prisma.staffService.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaffService.
     * @param {StaffServiceUpsertArgs} args - Arguments to update or create a StaffService.
     * @example
     * // Update or create a StaffService
     * const staffService = await prisma.staffService.upsert({
     *   create: {
     *     // ... data to create a StaffService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffService we want to update
     *   }
     * })
     */
    upsert<T extends StaffServiceUpsertArgs>(args: SelectSubset<T, StaffServiceUpsertArgs<ExtArgs>>): Prisma__StaffServiceClient<$Result.GetResult<Prisma.$StaffServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffServiceCountArgs} args - Arguments to filter StaffServices to count.
     * @example
     * // Count the number of StaffServices
     * const count = await prisma.staffService.count({
     *   where: {
     *     // ... the filter for the StaffServices we want to count
     *   }
     * })
    **/
    count<T extends StaffServiceCountArgs>(
      args?: Subset<T, StaffServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffServiceAggregateArgs>(args: Subset<T, StaffServiceAggregateArgs>): Prisma.PrismaPromise<GetStaffServiceAggregateType<T>>

    /**
     * Group by StaffService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffServiceGroupByArgs} args - Group by arguments.
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
      T extends StaffServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffServiceGroupByArgs['orderBy'] }
        : { orderBy?: StaffServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffService model
   */
  readonly fields: StaffServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceItemDefaultArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StaffService model
   */
  interface StaffServiceFieldRefs {
    readonly id: FieldRef<"StaffService", 'String'>
    readonly staffId: FieldRef<"StaffService", 'String'>
    readonly serviceId: FieldRef<"StaffService", 'String'>
    readonly customPrice: FieldRef<"StaffService", 'Decimal'>
    readonly customDuration: FieldRef<"StaffService", 'Int'>
    readonly isActive: FieldRef<"StaffService", 'Boolean'>
    readonly isPreferred: FieldRef<"StaffService", 'Boolean'>
    readonly skillLevel: FieldRef<"StaffService", 'Int'>
    readonly experience: FieldRef<"StaffService", 'Int'>
    readonly createdAt: FieldRef<"StaffService", 'DateTime'>
    readonly updatedAt: FieldRef<"StaffService", 'DateTime'>
    readonly deletedAt: FieldRef<"StaffService", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StaffService findUnique
   */
  export type StaffServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffService
     */
    select?: StaffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffService
     */
    omit?: StaffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffServiceInclude<ExtArgs> | null
    /**
     * Filter, which StaffService to fetch.
     */
    where: StaffServiceWhereUniqueInput
  }

  /**
   * StaffService findUniqueOrThrow
   */
  export type StaffServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffService
     */
    select?: StaffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffService
     */
    omit?: StaffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffServiceInclude<ExtArgs> | null
    /**
     * Filter, which StaffService to fetch.
     */
    where: StaffServiceWhereUniqueInput
  }

  /**
   * StaffService findFirst
   */
  export type StaffServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffService
     */
    select?: StaffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffService
     */
    omit?: StaffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffServiceInclude<ExtArgs> | null
    /**
     * Filter, which StaffService to fetch.
     */
    where?: StaffServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffServices to fetch.
     */
    orderBy?: StaffServiceOrderByWithRelationInput | StaffServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffServices.
     */
    cursor?: StaffServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffServices.
     */
    distinct?: StaffServiceScalarFieldEnum | StaffServiceScalarFieldEnum[]
  }

  /**
   * StaffService findFirstOrThrow
   */
  export type StaffServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffService
     */
    select?: StaffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffService
     */
    omit?: StaffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffServiceInclude<ExtArgs> | null
    /**
     * Filter, which StaffService to fetch.
     */
    where?: StaffServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffServices to fetch.
     */
    orderBy?: StaffServiceOrderByWithRelationInput | StaffServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffServices.
     */
    cursor?: StaffServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffServices.
     */
    distinct?: StaffServiceScalarFieldEnum | StaffServiceScalarFieldEnum[]
  }

  /**
   * StaffService findMany
   */
  export type StaffServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffService
     */
    select?: StaffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffService
     */
    omit?: StaffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffServiceInclude<ExtArgs> | null
    /**
     * Filter, which StaffServices to fetch.
     */
    where?: StaffServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffServices to fetch.
     */
    orderBy?: StaffServiceOrderByWithRelationInput | StaffServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffServices.
     */
    cursor?: StaffServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffServices.
     */
    skip?: number
    distinct?: StaffServiceScalarFieldEnum | StaffServiceScalarFieldEnum[]
  }

  /**
   * StaffService create
   */
  export type StaffServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffService
     */
    select?: StaffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffService
     */
    omit?: StaffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a StaffService.
     */
    data: XOR<StaffServiceCreateInput, StaffServiceUncheckedCreateInput>
  }

  /**
   * StaffService createMany
   */
  export type StaffServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffServices.
     */
    data: StaffServiceCreateManyInput | StaffServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaffService createManyAndReturn
   */
  export type StaffServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffService
     */
    select?: StaffServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffService
     */
    omit?: StaffServiceOmit<ExtArgs> | null
    /**
     * The data used to create many StaffServices.
     */
    data: StaffServiceCreateManyInput | StaffServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffService update
   */
  export type StaffServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffService
     */
    select?: StaffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffService
     */
    omit?: StaffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a StaffService.
     */
    data: XOR<StaffServiceUpdateInput, StaffServiceUncheckedUpdateInput>
    /**
     * Choose, which StaffService to update.
     */
    where: StaffServiceWhereUniqueInput
  }

  /**
   * StaffService updateMany
   */
  export type StaffServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffServices.
     */
    data: XOR<StaffServiceUpdateManyMutationInput, StaffServiceUncheckedUpdateManyInput>
    /**
     * Filter which StaffServices to update
     */
    where?: StaffServiceWhereInput
    /**
     * Limit how many StaffServices to update.
     */
    limit?: number
  }

  /**
   * StaffService updateManyAndReturn
   */
  export type StaffServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffService
     */
    select?: StaffServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffService
     */
    omit?: StaffServiceOmit<ExtArgs> | null
    /**
     * The data used to update StaffServices.
     */
    data: XOR<StaffServiceUpdateManyMutationInput, StaffServiceUncheckedUpdateManyInput>
    /**
     * Filter which StaffServices to update
     */
    where?: StaffServiceWhereInput
    /**
     * Limit how many StaffServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffService upsert
   */
  export type StaffServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffService
     */
    select?: StaffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffService
     */
    omit?: StaffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the StaffService to update in case it exists.
     */
    where: StaffServiceWhereUniqueInput
    /**
     * In case the StaffService found by the `where` argument doesn't exist, create a new StaffService with this data.
     */
    create: XOR<StaffServiceCreateInput, StaffServiceUncheckedCreateInput>
    /**
     * In case the StaffService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffServiceUpdateInput, StaffServiceUncheckedUpdateInput>
  }

  /**
   * StaffService delete
   */
  export type StaffServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffService
     */
    select?: StaffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffService
     */
    omit?: StaffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffServiceInclude<ExtArgs> | null
    /**
     * Filter which StaffService to delete.
     */
    where: StaffServiceWhereUniqueInput
  }

  /**
   * StaffService deleteMany
   */
  export type StaffServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffServices to delete
     */
    where?: StaffServiceWhereInput
    /**
     * Limit how many StaffServices to delete.
     */
    limit?: number
  }

  /**
   * StaffService without action
   */
  export type StaffServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffService
     */
    select?: StaffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffService
     */
    omit?: StaffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffServiceInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    phone: 'phone',
    role: 'role',
    firstName: 'firstName',
    lastName: 'lastName',
    avatar: 'avatar',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    address: 'address',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    country: 'country',
    isActive: 'isActive',
    isVerified: 'isVerified',
    verifiedAt: 'verifiedAt',
    lastLoginAt: 'lastLoginAt',
    timezone: 'timezone',
    language: 'language',
    currency: 'currency',
    emailNotifications: 'emailNotifications',
    smsNotifications: 'smsNotifications',
    pushNotifications: 'pushNotifications',
    passwordResetToken: 'passwordResetToken',
    passwordResetTokenExpiresAt: 'passwordResetTokenExpiresAt',
    verificationToken: 'verificationToken',
    verificationTokenExpiresAt: 'verificationTokenExpiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    refreshToken: 'refreshToken',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress',
    isActive: 'isActive',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    updatedAt: 'updatedAt',
    lastUsedAt: 'lastUsedAt'
  };

  export type UserSessionScalarFieldEnum = (typeof UserSessionScalarFieldEnum)[keyof typeof UserSessionScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    appointmentId: 'appointmentId',
    title: 'title',
    message: 'message',
    type: 'type',
    channel: 'channel',
    isRead: 'isRead',
    readAt: 'readAt',
    scheduledFor: 'scheduledFor',
    sentAt: 'sentAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    tableName: 'tableName',
    recordId: 'recordId',
    action: 'action',
    oldValues: 'oldValues',
    newValues: 'newValues',
    userId: 'userId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    userId: 'userId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    paymentMethod: 'paymentMethod',
    stripePaymentId: 'stripePaymentId',
    transactionId: 'transactionId',
    paidAt: 'paidAt',
    refundedAt: 'refundedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    customerId: 'customerId',
    staffId: 'staffId',
    serviceId: 'serviceId',
    rating: 'rating',
    title: 'title',
    comment: 'comment',
    isApproved: 'isApproved',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    scheduledDate: 'scheduledDate',
    scheduledTime: 'scheduledTime',
    startTime: 'startTime',
    endTime: 'endTime',
    timezone: 'timezone',
    status: 'status',
    type: 'type',
    notes: 'notes',
    internalNotes: 'internalNotes',
    price: 'price',
    currency: 'currency',
    discount: 'discount',
    finalPrice: 'finalPrice',
    customerId: 'customerId',
    staffId: 'staffId',
    serviceId: 'serviceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const ServiceItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    basePrice: 'basePrice',
    currency: 'currency',
    durationMinutes: 'durationMinutes',
    bufferMinutes: 'bufferMinutes',
    isActive: 'isActive',
    isOnline: 'isOnline',
    maxAdvanceBooking: 'maxAdvanceBooking',
    minAdvanceBooking: 'minAdvanceBooking',
    color: 'color',
    icon: 'icon',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ServiceItemScalarFieldEnum = (typeof ServiceItemScalarFieldEnum)[keyof typeof ServiceItemScalarFieldEnum]


  export const StaffAvailabilityScalarFieldEnum: {
    id: 'id',
    staffId: 'staffId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    specificDate: 'specificDate',
    isAvailable: 'isAvailable',
    breakStartTime: 'breakStartTime',
    breakEndTime: 'breakEndTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type StaffAvailabilityScalarFieldEnum = (typeof StaffAvailabilityScalarFieldEnum)[keyof typeof StaffAvailabilityScalarFieldEnum]


  export const StaffServiceScalarFieldEnum: {
    id: 'id',
    staffId: 'staffId',
    serviceId: 'serviceId',
    customPrice: 'customPrice',
    customDuration: 'customDuration',
    isActive: 'isActive',
    isPreferred: 'isPreferred',
    skillLevel: 'skillLevel',
    experience: 'experience',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type StaffServiceScalarFieldEnum = (typeof StaffServiceScalarFieldEnum)[keyof typeof StaffServiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    phone: 'phone',
    firstName: 'firstName',
    lastName: 'lastName',
    avatar: 'avatar',
    address: 'address',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    country: 'country',
    timezone: 'timezone',
    language: 'language',
    currency: 'currency',
    passwordResetToken: 'passwordResetToken',
    verificationToken: 'verificationToken'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const UserSessionOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    refreshToken: 'refreshToken',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress'
  };

  export type UserSessionOrderByRelevanceFieldEnum = (typeof UserSessionOrderByRelevanceFieldEnum)[keyof typeof UserSessionOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    appointmentId: 'appointmentId',
    title: 'title',
    message: 'message'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const AuditLogOrderByRelevanceFieldEnum: {
    id: 'id',
    tableName: 'tableName',
    recordId: 'recordId',
    userId: 'userId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
  };

  export type AuditLogOrderByRelevanceFieldEnum = (typeof AuditLogOrderByRelevanceFieldEnum)[keyof typeof AuditLogOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    userId: 'userId',
    currency: 'currency',
    stripePaymentId: 'stripePaymentId',
    transactionId: 'transactionId'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    customerId: 'customerId',
    staffId: 'staffId',
    serviceId: 'serviceId',
    title: 'title',
    comment: 'comment'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  export const AppointmentOrderByRelevanceFieldEnum: {
    id: 'id',
    scheduledTime: 'scheduledTime',
    timezone: 'timezone',
    notes: 'notes',
    internalNotes: 'internalNotes',
    currency: 'currency',
    customerId: 'customerId',
    staffId: 'staffId',
    serviceId: 'serviceId'
  };

  export type AppointmentOrderByRelevanceFieldEnum = (typeof AppointmentOrderByRelevanceFieldEnum)[keyof typeof AppointmentOrderByRelevanceFieldEnum]


  export const ServiceItemOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    currency: 'currency',
    color: 'color',
    icon: 'icon',
    tags: 'tags'
  };

  export type ServiceItemOrderByRelevanceFieldEnum = (typeof ServiceItemOrderByRelevanceFieldEnum)[keyof typeof ServiceItemOrderByRelevanceFieldEnum]


  export const StaffAvailabilityOrderByRelevanceFieldEnum: {
    id: 'id',
    staffId: 'staffId',
    startTime: 'startTime',
    endTime: 'endTime',
    breakStartTime: 'breakStartTime',
    breakEndTime: 'breakEndTime'
  };

  export type StaffAvailabilityOrderByRelevanceFieldEnum = (typeof StaffAvailabilityOrderByRelevanceFieldEnum)[keyof typeof StaffAvailabilityOrderByRelevanceFieldEnum]


  export const StaffServiceOrderByRelevanceFieldEnum: {
    id: 'id',
    staffId: 'staffId',
    serviceId: 'serviceId'
  };

  export type StaffServiceOrderByRelevanceFieldEnum = (typeof StaffServiceOrderByRelevanceFieldEnum)[keyof typeof StaffServiceOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'NotificationChannel'
   */
  export type EnumNotificationChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationChannel'>
    


  /**
   * Reference to a field of type 'NotificationChannel[]'
   */
  export type ListEnumNotificationChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationChannel[]'>
    


  /**
   * Reference to a field of type 'AuditAction'
   */
  export type EnumAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditAction'>
    


  /**
   * Reference to a field of type 'AuditAction[]'
   */
  export type ListEnumAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditAction[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'AppointmentType'
   */
  export type EnumAppointmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentType'>
    


  /**
   * Reference to a field of type 'AppointmentType[]'
   */
  export type ListEnumAppointmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentType[]'>
    


  /**
   * Reference to a field of type 'DayOfWeek'
   */
  export type EnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek'>
    


  /**
   * Reference to a field of type 'DayOfWeek[]'
   */
  export type ListEnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    zipCode?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    verifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    timezone?: StringFilter<"User"> | string
    language?: StringFilter<"User"> | string
    currency?: StringFilter<"User"> | string
    emailNotifications?: BoolFilter<"User"> | boolean
    smsNotifications?: BoolFilter<"User"> | boolean
    pushNotifications?: BoolFilter<"User"> | boolean
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetTokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    verificationToken?: StringNullableFilter<"User"> | string | null
    verificationTokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    customerAppointments?: AppointmentListRelationFilter
    staffAppointments?: AppointmentListRelationFilter
    availability?: StaffAvailabilityListRelationFilter
    staffServices?: StaffServiceListRelationFilter
    sessions?: UserSessionListRelationFilter
    notifications?: NotificationListRelationFilter
    reviews?: ReviewListRelationFilter
    receivedReviews?: ReviewListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    timezone?: SortOrder
    language?: SortOrder
    currency?: SortOrder
    emailNotifications?: SortOrder
    smsNotifications?: SortOrder
    pushNotifications?: SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetTokenExpiresAt?: SortOrderInput | SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationTokenExpiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    customerAppointments?: AppointmentOrderByRelationAggregateInput
    staffAppointments?: AppointmentOrderByRelationAggregateInput
    availability?: StaffAvailabilityOrderByRelationAggregateInput
    staffServices?: StaffServiceOrderByRelationAggregateInput
    sessions?: UserSessionOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    receivedReviews?: ReviewOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    passwordResetToken?: string
    verificationToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    zipCode?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    verifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    timezone?: StringFilter<"User"> | string
    language?: StringFilter<"User"> | string
    currency?: StringFilter<"User"> | string
    emailNotifications?: BoolFilter<"User"> | boolean
    smsNotifications?: BoolFilter<"User"> | boolean
    pushNotifications?: BoolFilter<"User"> | boolean
    passwordResetTokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    verificationTokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    customerAppointments?: AppointmentListRelationFilter
    staffAppointments?: AppointmentListRelationFilter
    availability?: StaffAvailabilityListRelationFilter
    staffServices?: StaffServiceListRelationFilter
    sessions?: UserSessionListRelationFilter
    notifications?: NotificationListRelationFilter
    reviews?: ReviewListRelationFilter
    receivedReviews?: ReviewListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "email" | "phone" | "passwordResetToken" | "verificationToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    timezone?: SortOrder
    language?: SortOrder
    currency?: SortOrder
    emailNotifications?: SortOrder
    smsNotifications?: SortOrder
    pushNotifications?: SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetTokenExpiresAt?: SortOrderInput | SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationTokenExpiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"User"> | $Enums.Gender | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    state?: StringNullableWithAggregatesFilter<"User"> | string | null
    zipCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    timezone?: StringWithAggregatesFilter<"User"> | string
    language?: StringWithAggregatesFilter<"User"> | string
    currency?: StringWithAggregatesFilter<"User"> | string
    emailNotifications?: BoolWithAggregatesFilter<"User"> | boolean
    smsNotifications?: BoolWithAggregatesFilter<"User"> | boolean
    pushNotifications?: BoolWithAggregatesFilter<"User"> | boolean
    passwordResetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordResetTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    verificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    verificationTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type UserSessionWhereInput = {
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    id?: UuidFilter<"UserSession"> | string
    userId?: UuidFilter<"UserSession"> | string
    refreshToken?: StringFilter<"UserSession"> | string
    userAgent?: StringNullableFilter<"UserSession"> | string | null
    ipAddress?: StringNullableFilter<"UserSession"> | string | null
    isActive?: BoolFilter<"UserSession"> | boolean
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    expiresAt?: DateTimeFilter<"UserSession"> | Date | string
    updatedAt?: DateTimeFilter<"UserSession"> | Date | string
    lastUsedAt?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: UserSessionOrderByRelevanceInput
  }

  export type UserSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    userId?: UuidFilter<"UserSession"> | string
    refreshToken?: StringFilter<"UserSession"> | string
    userAgent?: StringNullableFilter<"UserSession"> | string | null
    ipAddress?: StringNullableFilter<"UserSession"> | string | null
    isActive?: BoolFilter<"UserSession"> | boolean
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    expiresAt?: DateTimeFilter<"UserSession"> | Date | string
    updatedAt?: DateTimeFilter<"UserSession"> | Date | string
    lastUsedAt?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    _count?: UserSessionCountOrderByAggregateInput
    _max?: UserSessionMaxOrderByAggregateInput
    _min?: UserSessionMinOrderByAggregateInput
  }

  export type UserSessionScalarWhereWithAggregatesInput = {
    AND?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    OR?: UserSessionScalarWhereWithAggregatesInput[]
    NOT?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserSession"> | string
    userId?: UuidWithAggregatesFilter<"UserSession"> | string
    refreshToken?: StringWithAggregatesFilter<"UserSession"> | string
    userAgent?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    isActive?: BoolWithAggregatesFilter<"UserSession"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"UserSession"> | Date | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: UuidFilter<"Notification"> | string
    userId?: UuidFilter<"Notification"> | string
    appointmentId?: UuidNullableFilter<"Notification"> | string | null
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    channel?: EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel
    isRead?: BoolFilter<"Notification"> | boolean
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    scheduledFor?: DateTimeNullableFilter<"Notification"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointment?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrderInput | SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    appointment?: AppointmentOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: UuidFilter<"Notification"> | string
    appointmentId?: UuidNullableFilter<"Notification"> | string | null
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    channel?: EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel
    isRead?: BoolFilter<"Notification"> | boolean
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    scheduledFor?: DateTimeNullableFilter<"Notification"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointment?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrderInput | SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Notification"> | string
    userId?: UuidWithAggregatesFilter<"Notification"> | string
    appointmentId?: UuidNullableWithAggregatesFilter<"Notification"> | string | null
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    channel?: EnumNotificationChannelWithAggregatesFilter<"Notification"> | $Enums.NotificationChannel
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    readAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    scheduledFor?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    sentAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: UuidFilter<"AuditLog"> | string
    tableName?: StringFilter<"AuditLog"> | string
    recordId?: UuidFilter<"AuditLog"> | string
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    oldValues?: JsonNullableFilter<"AuditLog">
    newValues?: JsonNullableFilter<"AuditLog">
    userId?: UuidNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    tableName?: SortOrder
    recordId?: SortOrder
    action?: SortOrder
    oldValues?: SortOrderInput | SortOrder
    newValues?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _relevance?: AuditLogOrderByRelevanceInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    tableName?: StringFilter<"AuditLog"> | string
    recordId?: UuidFilter<"AuditLog"> | string
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    oldValues?: JsonNullableFilter<"AuditLog">
    newValues?: JsonNullableFilter<"AuditLog">
    userId?: UuidNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    tableName?: SortOrder
    recordId?: SortOrder
    action?: SortOrder
    oldValues?: SortOrderInput | SortOrder
    newValues?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AuditLog"> | string
    tableName?: StringWithAggregatesFilter<"AuditLog"> | string
    recordId?: UuidWithAggregatesFilter<"AuditLog"> | string
    action?: EnumAuditActionWithAggregatesFilter<"AuditLog"> | $Enums.AuditAction
    oldValues?: JsonNullableWithAggregatesFilter<"AuditLog">
    newValues?: JsonNullableWithAggregatesFilter<"AuditLog">
    userId?: UuidNullableWithAggregatesFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: UuidFilter<"Payment"> | string
    appointmentId?: UuidNullableFilter<"Payment"> | string | null
    userId?: UuidFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    stripePaymentId?: StringNullableFilter<"Payment"> | string | null
    transactionId?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    appointment?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    stripePaymentId?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    appointmentId?: UuidNullableFilter<"Payment"> | string | null
    userId?: UuidFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    stripePaymentId?: StringNullableFilter<"Payment"> | string | null
    transactionId?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    appointment?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    stripePaymentId?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Payment"> | string
    appointmentId?: UuidNullableWithAggregatesFilter<"Payment"> | string | null
    userId?: UuidWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    stripePaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    transactionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: UuidFilter<"Review"> | string
    appointmentId?: UuidFilter<"Review"> | string
    customerId?: UuidFilter<"Review"> | string
    staffId?: UuidNullableFilter<"Review"> | string | null
    serviceId?: UuidFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    title?: StringNullableFilter<"Review"> | string | null
    comment?: StringNullableFilter<"Review"> | string | null
    isApproved?: BoolFilter<"Review"> | boolean
    isPublic?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Review"> | Date | string | null
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    staff?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    service?: XOR<ServiceItemScalarRelationFilter, ServiceItemWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    customerId?: SortOrder
    staffId?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    rating?: SortOrder
    title?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    isApproved?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    customer?: UserOrderByWithRelationInput
    staff?: UserOrderByWithRelationInput
    service?: ServiceItemOrderByWithRelationInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uniq_review_appointment_customer?: ReviewUniq_review_appointment_customerCompoundUniqueInput
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    appointmentId?: UuidFilter<"Review"> | string
    customerId?: UuidFilter<"Review"> | string
    staffId?: UuidNullableFilter<"Review"> | string | null
    serviceId?: UuidFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    title?: StringNullableFilter<"Review"> | string | null
    comment?: StringNullableFilter<"Review"> | string | null
    isApproved?: BoolFilter<"Review"> | boolean
    isPublic?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Review"> | Date | string | null
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    staff?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    service?: XOR<ServiceItemScalarRelationFilter, ServiceItemWhereInput>
  }, "id" | "uniq_review_appointment_customer">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    customerId?: SortOrder
    staffId?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    rating?: SortOrder
    title?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    isApproved?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Review"> | string
    appointmentId?: UuidWithAggregatesFilter<"Review"> | string
    customerId?: UuidWithAggregatesFilter<"Review"> | string
    staffId?: UuidNullableWithAggregatesFilter<"Review"> | string | null
    serviceId?: UuidWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    title?: StringNullableWithAggregatesFilter<"Review"> | string | null
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    isApproved?: BoolWithAggregatesFilter<"Review"> | boolean
    isPublic?: BoolWithAggregatesFilter<"Review"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Review"> | Date | string | null
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: UuidFilter<"Appointment"> | string
    scheduledDate?: DateTimeFilter<"Appointment"> | Date | string
    scheduledTime?: StringFilter<"Appointment"> | string
    startTime?: DateTimeFilter<"Appointment"> | Date | string
    endTime?: DateTimeFilter<"Appointment"> | Date | string
    timezone?: StringFilter<"Appointment"> | string
    status?: EnumStatusFilter<"Appointment"> | $Enums.Status
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    notes?: StringNullableFilter<"Appointment"> | string | null
    internalNotes?: StringNullableFilter<"Appointment"> | string | null
    price?: DecimalFilter<"Appointment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Appointment"> | string
    discount?: DecimalFilter<"Appointment"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFilter<"Appointment"> | Decimal | DecimalJsLike | number | string
    customerId?: UuidFilter<"Appointment"> | string
    staffId?: UuidNullableFilter<"Appointment"> | string | null
    serviceId?: UuidFilter<"Appointment"> | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    staff?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    service?: XOR<ServiceItemScalarRelationFilter, ServiceItemWhereInput>
    payments?: PaymentListRelationFilter
    notifications?: NotificationListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    scheduledDate?: SortOrder
    scheduledTime?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    status?: SortOrder
    type?: SortOrder
    notes?: SortOrderInput | SortOrder
    internalNotes?: SortOrderInput | SortOrder
    price?: SortOrder
    currency?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
    customerId?: SortOrder
    staffId?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    customer?: UserOrderByWithRelationInput
    staff?: UserOrderByWithRelationInput
    service?: ServiceItemOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    _relevance?: AppointmentOrderByRelevanceInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uniq_appointment_staff_starttime?: AppointmentUniq_appointment_staff_starttimeCompoundUniqueInput
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    scheduledDate?: DateTimeFilter<"Appointment"> | Date | string
    scheduledTime?: StringFilter<"Appointment"> | string
    startTime?: DateTimeFilter<"Appointment"> | Date | string
    endTime?: DateTimeFilter<"Appointment"> | Date | string
    timezone?: StringFilter<"Appointment"> | string
    status?: EnumStatusFilter<"Appointment"> | $Enums.Status
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    notes?: StringNullableFilter<"Appointment"> | string | null
    internalNotes?: StringNullableFilter<"Appointment"> | string | null
    price?: DecimalFilter<"Appointment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Appointment"> | string
    discount?: DecimalFilter<"Appointment"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFilter<"Appointment"> | Decimal | DecimalJsLike | number | string
    customerId?: UuidFilter<"Appointment"> | string
    staffId?: UuidNullableFilter<"Appointment"> | string | null
    serviceId?: UuidFilter<"Appointment"> | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    staff?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    service?: XOR<ServiceItemScalarRelationFilter, ServiceItemWhereInput>
    payments?: PaymentListRelationFilter
    notifications?: NotificationListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "uniq_appointment_staff_starttime">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    scheduledDate?: SortOrder
    scheduledTime?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    status?: SortOrder
    type?: SortOrder
    notes?: SortOrderInput | SortOrder
    internalNotes?: SortOrderInput | SortOrder
    price?: SortOrder
    currency?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
    customerId?: SortOrder
    staffId?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Appointment"> | string
    scheduledDate?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    scheduledTime?: StringWithAggregatesFilter<"Appointment"> | string
    startTime?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    timezone?: StringWithAggregatesFilter<"Appointment"> | string
    status?: EnumStatusWithAggregatesFilter<"Appointment"> | $Enums.Status
    type?: EnumAppointmentTypeWithAggregatesFilter<"Appointment"> | $Enums.AppointmentType
    notes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    internalNotes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    price?: DecimalWithAggregatesFilter<"Appointment"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Appointment"> | string
    discount?: DecimalWithAggregatesFilter<"Appointment"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalWithAggregatesFilter<"Appointment"> | Decimal | DecimalJsLike | number | string
    customerId?: UuidWithAggregatesFilter<"Appointment"> | string
    staffId?: UuidNullableWithAggregatesFilter<"Appointment"> | string | null
    serviceId?: UuidWithAggregatesFilter<"Appointment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Appointment"> | Date | string | null
  }

  export type ServiceItemWhereInput = {
    AND?: ServiceItemWhereInput | ServiceItemWhereInput[]
    OR?: ServiceItemWhereInput[]
    NOT?: ServiceItemWhereInput | ServiceItemWhereInput[]
    id?: UuidFilter<"ServiceItem"> | string
    name?: StringFilter<"ServiceItem"> | string
    description?: StringNullableFilter<"ServiceItem"> | string | null
    category?: StringFilter<"ServiceItem"> | string
    basePrice?: DecimalFilter<"ServiceItem"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"ServiceItem"> | string
    durationMinutes?: IntFilter<"ServiceItem"> | number
    bufferMinutes?: IntFilter<"ServiceItem"> | number
    isActive?: BoolFilter<"ServiceItem"> | boolean
    isOnline?: BoolFilter<"ServiceItem"> | boolean
    maxAdvanceBooking?: IntNullableFilter<"ServiceItem"> | number | null
    minAdvanceBooking?: IntNullableFilter<"ServiceItem"> | number | null
    color?: StringNullableFilter<"ServiceItem"> | string | null
    icon?: StringNullableFilter<"ServiceItem"> | string | null
    tags?: StringNullableListFilter<"ServiceItem">
    createdAt?: DateTimeFilter<"ServiceItem"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceItem"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ServiceItem"> | Date | string | null
    appointments?: AppointmentListRelationFilter
    staffServices?: StaffServiceListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type ServiceItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    basePrice?: SortOrder
    currency?: SortOrder
    durationMinutes?: SortOrder
    bufferMinutes?: SortOrder
    isActive?: SortOrder
    isOnline?: SortOrder
    maxAdvanceBooking?: SortOrderInput | SortOrder
    minAdvanceBooking?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
    staffServices?: StaffServiceOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    _relevance?: ServiceItemOrderByRelevanceInput
  }

  export type ServiceItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceItemWhereInput | ServiceItemWhereInput[]
    OR?: ServiceItemWhereInput[]
    NOT?: ServiceItemWhereInput | ServiceItemWhereInput[]
    name?: StringFilter<"ServiceItem"> | string
    description?: StringNullableFilter<"ServiceItem"> | string | null
    category?: StringFilter<"ServiceItem"> | string
    basePrice?: DecimalFilter<"ServiceItem"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"ServiceItem"> | string
    durationMinutes?: IntFilter<"ServiceItem"> | number
    bufferMinutes?: IntFilter<"ServiceItem"> | number
    isActive?: BoolFilter<"ServiceItem"> | boolean
    isOnline?: BoolFilter<"ServiceItem"> | boolean
    maxAdvanceBooking?: IntNullableFilter<"ServiceItem"> | number | null
    minAdvanceBooking?: IntNullableFilter<"ServiceItem"> | number | null
    color?: StringNullableFilter<"ServiceItem"> | string | null
    icon?: StringNullableFilter<"ServiceItem"> | string | null
    tags?: StringNullableListFilter<"ServiceItem">
    createdAt?: DateTimeFilter<"ServiceItem"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceItem"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ServiceItem"> | Date | string | null
    appointments?: AppointmentListRelationFilter
    staffServices?: StaffServiceListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id">

  export type ServiceItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    basePrice?: SortOrder
    currency?: SortOrder
    durationMinutes?: SortOrder
    bufferMinutes?: SortOrder
    isActive?: SortOrder
    isOnline?: SortOrder
    maxAdvanceBooking?: SortOrderInput | SortOrder
    minAdvanceBooking?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ServiceItemCountOrderByAggregateInput
    _avg?: ServiceItemAvgOrderByAggregateInput
    _max?: ServiceItemMaxOrderByAggregateInput
    _min?: ServiceItemMinOrderByAggregateInput
    _sum?: ServiceItemSumOrderByAggregateInput
  }

  export type ServiceItemScalarWhereWithAggregatesInput = {
    AND?: ServiceItemScalarWhereWithAggregatesInput | ServiceItemScalarWhereWithAggregatesInput[]
    OR?: ServiceItemScalarWhereWithAggregatesInput[]
    NOT?: ServiceItemScalarWhereWithAggregatesInput | ServiceItemScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ServiceItem"> | string
    name?: StringWithAggregatesFilter<"ServiceItem"> | string
    description?: StringNullableWithAggregatesFilter<"ServiceItem"> | string | null
    category?: StringWithAggregatesFilter<"ServiceItem"> | string
    basePrice?: DecimalWithAggregatesFilter<"ServiceItem"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"ServiceItem"> | string
    durationMinutes?: IntWithAggregatesFilter<"ServiceItem"> | number
    bufferMinutes?: IntWithAggregatesFilter<"ServiceItem"> | number
    isActive?: BoolWithAggregatesFilter<"ServiceItem"> | boolean
    isOnline?: BoolWithAggregatesFilter<"ServiceItem"> | boolean
    maxAdvanceBooking?: IntNullableWithAggregatesFilter<"ServiceItem"> | number | null
    minAdvanceBooking?: IntNullableWithAggregatesFilter<"ServiceItem"> | number | null
    color?: StringNullableWithAggregatesFilter<"ServiceItem"> | string | null
    icon?: StringNullableWithAggregatesFilter<"ServiceItem"> | string | null
    tags?: StringNullableListFilter<"ServiceItem">
    createdAt?: DateTimeWithAggregatesFilter<"ServiceItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceItem"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ServiceItem"> | Date | string | null
  }

  export type StaffAvailabilityWhereInput = {
    AND?: StaffAvailabilityWhereInput | StaffAvailabilityWhereInput[]
    OR?: StaffAvailabilityWhereInput[]
    NOT?: StaffAvailabilityWhereInput | StaffAvailabilityWhereInput[]
    id?: UuidFilter<"StaffAvailability"> | string
    staffId?: UuidFilter<"StaffAvailability"> | string
    dayOfWeek?: EnumDayOfWeekFilter<"StaffAvailability"> | $Enums.DayOfWeek
    startTime?: StringFilter<"StaffAvailability"> | string
    endTime?: StringFilter<"StaffAvailability"> | string
    specificDate?: DateTimeNullableFilter<"StaffAvailability"> | Date | string | null
    isAvailable?: BoolFilter<"StaffAvailability"> | boolean
    breakStartTime?: StringNullableFilter<"StaffAvailability"> | string | null
    breakEndTime?: StringNullableFilter<"StaffAvailability"> | string | null
    createdAt?: DateTimeFilter<"StaffAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"StaffAvailability"> | Date | string
    deletedAt?: DateTimeNullableFilter<"StaffAvailability"> | Date | string | null
    staff?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StaffAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    staffId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    specificDate?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    breakStartTime?: SortOrderInput | SortOrder
    breakEndTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    staff?: UserOrderByWithRelationInput
    _relevance?: StaffAvailabilityOrderByRelevanceInput
  }

  export type StaffAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uniq_staffavailability_staff_day_time_date?: StaffAvailabilityUniq_staffavailability_staff_day_time_dateCompoundUniqueInput
    AND?: StaffAvailabilityWhereInput | StaffAvailabilityWhereInput[]
    OR?: StaffAvailabilityWhereInput[]
    NOT?: StaffAvailabilityWhereInput | StaffAvailabilityWhereInput[]
    staffId?: UuidFilter<"StaffAvailability"> | string
    dayOfWeek?: EnumDayOfWeekFilter<"StaffAvailability"> | $Enums.DayOfWeek
    startTime?: StringFilter<"StaffAvailability"> | string
    endTime?: StringFilter<"StaffAvailability"> | string
    specificDate?: DateTimeNullableFilter<"StaffAvailability"> | Date | string | null
    isAvailable?: BoolFilter<"StaffAvailability"> | boolean
    breakStartTime?: StringNullableFilter<"StaffAvailability"> | string | null
    breakEndTime?: StringNullableFilter<"StaffAvailability"> | string | null
    createdAt?: DateTimeFilter<"StaffAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"StaffAvailability"> | Date | string
    deletedAt?: DateTimeNullableFilter<"StaffAvailability"> | Date | string | null
    staff?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "uniq_staffavailability_staff_day_time_date">

  export type StaffAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    staffId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    specificDate?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    breakStartTime?: SortOrderInput | SortOrder
    breakEndTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: StaffAvailabilityCountOrderByAggregateInput
    _max?: StaffAvailabilityMaxOrderByAggregateInput
    _min?: StaffAvailabilityMinOrderByAggregateInput
  }

  export type StaffAvailabilityScalarWhereWithAggregatesInput = {
    AND?: StaffAvailabilityScalarWhereWithAggregatesInput | StaffAvailabilityScalarWhereWithAggregatesInput[]
    OR?: StaffAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: StaffAvailabilityScalarWhereWithAggregatesInput | StaffAvailabilityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"StaffAvailability"> | string
    staffId?: UuidWithAggregatesFilter<"StaffAvailability"> | string
    dayOfWeek?: EnumDayOfWeekWithAggregatesFilter<"StaffAvailability"> | $Enums.DayOfWeek
    startTime?: StringWithAggregatesFilter<"StaffAvailability"> | string
    endTime?: StringWithAggregatesFilter<"StaffAvailability"> | string
    specificDate?: DateTimeNullableWithAggregatesFilter<"StaffAvailability"> | Date | string | null
    isAvailable?: BoolWithAggregatesFilter<"StaffAvailability"> | boolean
    breakStartTime?: StringNullableWithAggregatesFilter<"StaffAvailability"> | string | null
    breakEndTime?: StringNullableWithAggregatesFilter<"StaffAvailability"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StaffAvailability"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StaffAvailability"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"StaffAvailability"> | Date | string | null
  }

  export type StaffServiceWhereInput = {
    AND?: StaffServiceWhereInput | StaffServiceWhereInput[]
    OR?: StaffServiceWhereInput[]
    NOT?: StaffServiceWhereInput | StaffServiceWhereInput[]
    id?: UuidFilter<"StaffService"> | string
    staffId?: UuidFilter<"StaffService"> | string
    serviceId?: UuidFilter<"StaffService"> | string
    customPrice?: DecimalNullableFilter<"StaffService"> | Decimal | DecimalJsLike | number | string | null
    customDuration?: IntNullableFilter<"StaffService"> | number | null
    isActive?: BoolFilter<"StaffService"> | boolean
    isPreferred?: BoolFilter<"StaffService"> | boolean
    skillLevel?: IntFilter<"StaffService"> | number
    experience?: IntNullableFilter<"StaffService"> | number | null
    createdAt?: DateTimeFilter<"StaffService"> | Date | string
    updatedAt?: DateTimeFilter<"StaffService"> | Date | string
    deletedAt?: DateTimeNullableFilter<"StaffService"> | Date | string | null
    staff?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: XOR<ServiceItemScalarRelationFilter, ServiceItemWhereInput>
  }

  export type StaffServiceOrderByWithRelationInput = {
    id?: SortOrder
    staffId?: SortOrder
    serviceId?: SortOrder
    customPrice?: SortOrderInput | SortOrder
    customDuration?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isPreferred?: SortOrder
    skillLevel?: SortOrder
    experience?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    staff?: UserOrderByWithRelationInput
    service?: ServiceItemOrderByWithRelationInput
    _relevance?: StaffServiceOrderByRelevanceInput
  }

  export type StaffServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uniq_staffservice_staff_service?: StaffServiceUniq_staffservice_staff_serviceCompoundUniqueInput
    AND?: StaffServiceWhereInput | StaffServiceWhereInput[]
    OR?: StaffServiceWhereInput[]
    NOT?: StaffServiceWhereInput | StaffServiceWhereInput[]
    staffId?: UuidFilter<"StaffService"> | string
    serviceId?: UuidFilter<"StaffService"> | string
    customPrice?: DecimalNullableFilter<"StaffService"> | Decimal | DecimalJsLike | number | string | null
    customDuration?: IntNullableFilter<"StaffService"> | number | null
    isActive?: BoolFilter<"StaffService"> | boolean
    isPreferred?: BoolFilter<"StaffService"> | boolean
    skillLevel?: IntFilter<"StaffService"> | number
    experience?: IntNullableFilter<"StaffService"> | number | null
    createdAt?: DateTimeFilter<"StaffService"> | Date | string
    updatedAt?: DateTimeFilter<"StaffService"> | Date | string
    deletedAt?: DateTimeNullableFilter<"StaffService"> | Date | string | null
    staff?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: XOR<ServiceItemScalarRelationFilter, ServiceItemWhereInput>
  }, "id" | "uniq_staffservice_staff_service">

  export type StaffServiceOrderByWithAggregationInput = {
    id?: SortOrder
    staffId?: SortOrder
    serviceId?: SortOrder
    customPrice?: SortOrderInput | SortOrder
    customDuration?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isPreferred?: SortOrder
    skillLevel?: SortOrder
    experience?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: StaffServiceCountOrderByAggregateInput
    _avg?: StaffServiceAvgOrderByAggregateInput
    _max?: StaffServiceMaxOrderByAggregateInput
    _min?: StaffServiceMinOrderByAggregateInput
    _sum?: StaffServiceSumOrderByAggregateInput
  }

  export type StaffServiceScalarWhereWithAggregatesInput = {
    AND?: StaffServiceScalarWhereWithAggregatesInput | StaffServiceScalarWhereWithAggregatesInput[]
    OR?: StaffServiceScalarWhereWithAggregatesInput[]
    NOT?: StaffServiceScalarWhereWithAggregatesInput | StaffServiceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"StaffService"> | string
    staffId?: UuidWithAggregatesFilter<"StaffService"> | string
    serviceId?: UuidWithAggregatesFilter<"StaffService"> | string
    customPrice?: DecimalNullableWithAggregatesFilter<"StaffService"> | Decimal | DecimalJsLike | number | string | null
    customDuration?: IntNullableWithAggregatesFilter<"StaffService"> | number | null
    isActive?: BoolWithAggregatesFilter<"StaffService"> | boolean
    isPreferred?: BoolWithAggregatesFilter<"StaffService"> | boolean
    skillLevel?: IntWithAggregatesFilter<"StaffService"> | number
    experience?: IntNullableWithAggregatesFilter<"StaffService"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"StaffService"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StaffService"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"StaffService"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerAppointments?: AppointmentCreateNestedManyWithoutCustomerInput
    staffAppointments?: AppointmentCreateNestedManyWithoutStaffInput
    availability?: StaffAvailabilityCreateNestedManyWithoutStaffInput
    staffServices?: StaffServiceCreateNestedManyWithoutStaffInput
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutCustomerInput
    receivedReviews?: ReviewCreateNestedManyWithoutStaffInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerAppointments?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    staffAppointments?: AppointmentUncheckedCreateNestedManyWithoutStaffInput
    availability?: StaffAvailabilityUncheckedCreateNestedManyWithoutStaffInput
    staffServices?: StaffServiceUncheckedCreateNestedManyWithoutStaffInput
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutStaffInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAppointments?: AppointmentUpdateManyWithoutCustomerNestedInput
    staffAppointments?: AppointmentUpdateManyWithoutStaffNestedInput
    availability?: StaffAvailabilityUpdateManyWithoutStaffNestedInput
    staffServices?: StaffServiceUpdateManyWithoutStaffNestedInput
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutCustomerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutStaffNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAppointments?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    staffAppointments?: AppointmentUncheckedUpdateManyWithoutStaffNestedInput
    availability?: StaffAvailabilityUncheckedUpdateManyWithoutStaffNestedInput
    staffServices?: StaffServiceUncheckedUpdateManyWithoutStaffNestedInput
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutStaffNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionCreateInput = {
    id?: string
    refreshToken: string
    userAgent?: string | null
    ipAddress?: string | null
    isActive?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
    updatedAt?: Date | string
    lastUsedAt?: Date | string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type UserSessionUncheckedCreateInput = {
    id?: string
    userId: string
    refreshToken: string
    userAgent?: string | null
    ipAddress?: string | null
    isActive?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
    updatedAt?: Date | string
    lastUsedAt?: Date | string | null
  }

  export type UserSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type UserSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionCreateManyInput = {
    id?: string
    userId: string
    refreshToken: string
    userAgent?: string | null
    ipAddress?: string | null
    isActive?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
    updatedAt?: Date | string
    lastUsedAt?: Date | string | null
  }

  export type UserSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    type: $Enums.NotificationType
    channel: $Enums.NotificationChannel
    isRead?: boolean
    readAt?: Date | string | null
    scheduledFor?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutNotificationsInput
    appointment?: AppointmentCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    appointmentId?: string | null
    title: string
    message: string
    type: $Enums.NotificationType
    channel: $Enums.NotificationChannel
    isRead?: boolean
    readAt?: Date | string | null
    scheduledFor?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    appointment?: AppointmentUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    appointmentId?: string | null
    title: string
    message: string
    type: $Enums.NotificationType
    channel: $Enums.NotificationChannel
    isRead?: boolean
    readAt?: Date | string | null
    scheduledFor?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuditLogCreateInput = {
    id?: string
    tableName: string
    recordId: string
    action: $Enums.AuditAction
    oldValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    userId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    tableName: string
    recordId: string
    action: $Enums.AuditAction
    oldValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    userId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    oldValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    oldValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    tableName: string
    recordId: string
    action: $Enums.AuditAction
    oldValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    userId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    oldValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    oldValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    paymentMethod: $Enums.PaymentMethod
    stripePaymentId?: string | null
    transactionId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    appointment?: AppointmentCreateNestedOneWithoutPaymentsInput
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    appointmentId?: string | null
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    paymentMethod: $Enums.PaymentMethod
    stripePaymentId?: string | null
    transactionId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUpdateOneWithoutPaymentsNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateManyInput = {
    id?: string
    appointmentId?: string | null
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    paymentMethod: $Enums.PaymentMethod
    stripePaymentId?: string | null
    transactionId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    title?: string | null
    comment?: string | null
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    appointment: AppointmentCreateNestedOneWithoutReviewsInput
    customer: UserCreateNestedOneWithoutReviewsInput
    staff?: UserCreateNestedOneWithoutReceivedReviewsInput
    service: ServiceItemCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    appointmentId: string
    customerId: string
    staffId?: string | null
    serviceId: string
    rating: number
    title?: string | null
    comment?: string | null
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUpdateOneRequiredWithoutReviewsNestedInput
    customer?: UserUpdateOneRequiredWithoutReviewsNestedInput
    staff?: UserUpdateOneWithoutReceivedReviewsNestedInput
    service?: ServiceItemUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewCreateManyInput = {
    id?: string
    appointmentId: string
    customerId: string
    staffId?: string | null
    serviceId: string
    rating: number
    title?: string | null
    comment?: string | null
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentCreateInput = {
    id?: string
    scheduledDate: Date | string
    scheduledTime: string
    startTime: Date | string
    endTime: Date | string
    timezone?: string
    status?: $Enums.Status
    type?: $Enums.AppointmentType
    notes?: string | null
    internalNotes?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    discount?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customer: UserCreateNestedOneWithoutCustomerAppointmentsInput
    staff?: UserCreateNestedOneWithoutStaffAppointmentsInput
    service: ServiceItemCreateNestedOneWithoutAppointmentsInput
    payments?: PaymentCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationCreateNestedManyWithoutAppointmentInput
    reviews?: ReviewCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    scheduledDate: Date | string
    scheduledTime: string
    startTime: Date | string
    endTime: Date | string
    timezone?: string
    status?: $Enums.Status
    type?: $Enums.AppointmentType
    notes?: string | null
    internalNotes?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    discount?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    customerId: string
    staffId?: string | null
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutCustomerAppointmentsNestedInput
    staff?: UserUpdateOneWithoutStaffAppointmentsNestedInput
    service?: ServiceItemUpdateOneRequiredWithoutAppointmentsNestedInput
    payments?: PaymentUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUpdateManyWithoutAppointmentNestedInput
    reviews?: ReviewUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customerId?: StringFieldUpdateOperationsInput | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: string
    scheduledDate: Date | string
    scheduledTime: string
    startTime: Date | string
    endTime: Date | string
    timezone?: string
    status?: $Enums.Status
    type?: $Enums.AppointmentType
    notes?: string | null
    internalNotes?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    discount?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    customerId: string
    staffId?: string | null
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customerId?: StringFieldUpdateOperationsInput | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceItemCreateInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    durationMinutes: number
    bufferMinutes?: number
    isActive?: boolean
    isOnline?: boolean
    maxAdvanceBooking?: number | null
    minAdvanceBooking?: number | null
    color?: string | null
    icon?: string | null
    tags?: ServiceItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    appointments?: AppointmentCreateNestedManyWithoutServiceInput
    staffServices?: StaffServiceCreateNestedManyWithoutServiceInput
    reviews?: ReviewCreateNestedManyWithoutServiceInput
  }

  export type ServiceItemUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    durationMinutes: number
    bufferMinutes?: number
    isActive?: boolean
    isOnline?: boolean
    maxAdvanceBooking?: number | null
    minAdvanceBooking?: number | null
    color?: string | null
    icon?: string | null
    tags?: ServiceItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutServiceInput
    staffServices?: StaffServiceUncheckedCreateNestedManyWithoutServiceInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    maxAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    minAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ServiceItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: AppointmentUpdateManyWithoutServiceNestedInput
    staffServices?: StaffServiceUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUpdateManyWithoutServiceNestedInput
  }

  export type ServiceItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    maxAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    minAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ServiceItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutServiceNestedInput
    staffServices?: StaffServiceUncheckedUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceItemCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    durationMinutes: number
    bufferMinutes?: number
    isActive?: boolean
    isOnline?: boolean
    maxAdvanceBooking?: number | null
    minAdvanceBooking?: number | null
    color?: string | null
    icon?: string | null
    tags?: ServiceItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ServiceItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    maxAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    minAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ServiceItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    maxAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    minAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ServiceItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffAvailabilityCreateInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    specificDate?: Date | string | null
    isAvailable?: boolean
    breakStartTime?: string | null
    breakEndTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    staff: UserCreateNestedOneWithoutAvailabilityInput
  }

  export type StaffAvailabilityUncheckedCreateInput = {
    id?: string
    staffId: string
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    specificDate?: Date | string | null
    isAvailable?: boolean
    breakStartTime?: string | null
    breakEndTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type StaffAvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    breakStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    breakEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff?: UserUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type StaffAvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    breakStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    breakEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffAvailabilityCreateManyInput = {
    id?: string
    staffId: string
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    specificDate?: Date | string | null
    isAvailable?: boolean
    breakStartTime?: string | null
    breakEndTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type StaffAvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    breakStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    breakEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffAvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    breakStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    breakEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffServiceCreateInput = {
    id?: string
    customPrice?: Decimal | DecimalJsLike | number | string | null
    customDuration?: number | null
    isActive?: boolean
    isPreferred?: boolean
    skillLevel?: number
    experience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    staff: UserCreateNestedOneWithoutStaffServicesInput
    service: ServiceItemCreateNestedOneWithoutStaffServicesInput
  }

  export type StaffServiceUncheckedCreateInput = {
    id?: string
    staffId: string
    serviceId: string
    customPrice?: Decimal | DecimalJsLike | number | string | null
    customDuration?: number | null
    isActive?: boolean
    isPreferred?: boolean
    skillLevel?: number
    experience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type StaffServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    customDuration?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPreferred?: BoolFieldUpdateOperationsInput | boolean
    skillLevel?: IntFieldUpdateOperationsInput | number
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff?: UserUpdateOneRequiredWithoutStaffServicesNestedInput
    service?: ServiceItemUpdateOneRequiredWithoutStaffServicesNestedInput
  }

  export type StaffServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    customDuration?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPreferred?: BoolFieldUpdateOperationsInput | boolean
    skillLevel?: IntFieldUpdateOperationsInput | number
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffServiceCreateManyInput = {
    id?: string
    staffId: string
    serviceId: string
    customPrice?: Decimal | DecimalJsLike | number | string | null
    customDuration?: number | null
    isActive?: boolean
    isPreferred?: boolean
    skillLevel?: number
    experience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type StaffServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    customDuration?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPreferred?: BoolFieldUpdateOperationsInput | boolean
    skillLevel?: IntFieldUpdateOperationsInput | number
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    customDuration?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPreferred?: BoolFieldUpdateOperationsInput | boolean
    skillLevel?: IntFieldUpdateOperationsInput | number
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type StaffAvailabilityListRelationFilter = {
    every?: StaffAvailabilityWhereInput
    some?: StaffAvailabilityWhereInput
    none?: StaffAvailabilityWhereInput
  }

  export type StaffServiceListRelationFilter = {
    every?: StaffServiceWhereInput
    some?: StaffServiceWhereInput
    none?: StaffServiceWhereInput
  }

  export type UserSessionListRelationFilter = {
    every?: UserSessionWhereInput
    some?: UserSessionWhereInput
    none?: UserSessionWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    lastLoginAt?: SortOrder
    timezone?: SortOrder
    language?: SortOrder
    currency?: SortOrder
    emailNotifications?: SortOrder
    smsNotifications?: SortOrder
    pushNotifications?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetTokenExpiresAt?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    lastLoginAt?: SortOrder
    timezone?: SortOrder
    language?: SortOrder
    currency?: SortOrder
    emailNotifications?: SortOrder
    smsNotifications?: SortOrder
    pushNotifications?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetTokenExpiresAt?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    lastLoginAt?: SortOrder
    timezone?: SortOrder
    language?: SortOrder
    currency?: SortOrder
    emailNotifications?: SortOrder
    smsNotifications?: SortOrder
    pushNotifications?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetTokenExpiresAt?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserSessionOrderByRelevanceInput = {
    fields: UserSessionOrderByRelevanceFieldEnum | UserSessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
    lastUsedAt?: SortOrder
  }

  export type UserSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
    lastUsedAt?: SortOrder
  }

  export type UserSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
    lastUsedAt?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type EnumNotificationChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationChannelFilter<$PrismaModel> | $Enums.NotificationChannel
  }

  export type AppointmentNullableScalarRelationFilter = {
    is?: AppointmentWhereInput | null
    isNot?: AppointmentWhereInput | null
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    appointmentId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    scheduledFor?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    appointmentId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    scheduledFor?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    appointmentId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    scheduledFor?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type EnumNotificationChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel> | $Enums.NotificationChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationChannelFilter<$PrismaModel>
    _max?: NestedEnumNotificationChannelFilter<$PrismaModel>
  }

  export type EnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditLogOrderByRelevanceInput = {
    fields: AuditLogOrderByRelevanceFieldEnum | AuditLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    tableName?: SortOrder
    recordId?: SortOrder
    action?: SortOrder
    oldValues?: SortOrder
    newValues?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    tableName?: SortOrder
    recordId?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    tableName?: SortOrder
    recordId?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditActionFilter<$PrismaModel>
    _max?: NestedEnumAuditActionFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    stripePaymentId?: SortOrder
    transactionId?: SortOrder
    paidAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    stripePaymentId?: SortOrder
    transactionId?: SortOrder
    paidAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    stripePaymentId?: SortOrder
    transactionId?: SortOrder
    paidAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
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

  export type AppointmentScalarRelationFilter = {
    is?: AppointmentWhereInput
    isNot?: AppointmentWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ServiceItemScalarRelationFilter = {
    is?: ServiceItemWhereInput
    isNot?: ServiceItemWhereInput
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewUniq_review_appointment_customerCompoundUniqueInput = {
    appointmentId: string
    customerId: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    customerId?: SortOrder
    staffId?: SortOrder
    serviceId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    comment?: SortOrder
    isApproved?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    customerId?: SortOrder
    staffId?: SortOrder
    serviceId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    comment?: SortOrder
    isApproved?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    customerId?: SortOrder
    staffId?: SortOrder
    serviceId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    comment?: SortOrder
    isApproved?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
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

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type EnumAppointmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeFilter<$PrismaModel> | $Enums.AppointmentType
  }

  export type AppointmentOrderByRelevanceInput = {
    fields: AppointmentOrderByRelevanceFieldEnum | AppointmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AppointmentUniq_appointment_staff_starttimeCompoundUniqueInput = {
    staffId: string
    startTime: Date | string
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    scheduledDate?: SortOrder
    scheduledTime?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    status?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    internalNotes?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
    customerId?: SortOrder
    staffId?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    scheduledDate?: SortOrder
    scheduledTime?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    status?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    internalNotes?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
    customerId?: SortOrder
    staffId?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    scheduledDate?: SortOrder
    scheduledTime?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    status?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    internalNotes?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
    customerId?: SortOrder
    staffId?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumAppointmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentTypeFilter<$PrismaModel>
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ServiceItemOrderByRelevanceInput = {
    fields: ServiceItemOrderByRelevanceFieldEnum | ServiceItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServiceItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    basePrice?: SortOrder
    currency?: SortOrder
    durationMinutes?: SortOrder
    bufferMinutes?: SortOrder
    isActive?: SortOrder
    isOnline?: SortOrder
    maxAdvanceBooking?: SortOrder
    minAdvanceBooking?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ServiceItemAvgOrderByAggregateInput = {
    basePrice?: SortOrder
    durationMinutes?: SortOrder
    bufferMinutes?: SortOrder
    maxAdvanceBooking?: SortOrder
    minAdvanceBooking?: SortOrder
  }

  export type ServiceItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    basePrice?: SortOrder
    currency?: SortOrder
    durationMinutes?: SortOrder
    bufferMinutes?: SortOrder
    isActive?: SortOrder
    isOnline?: SortOrder
    maxAdvanceBooking?: SortOrder
    minAdvanceBooking?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ServiceItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    basePrice?: SortOrder
    currency?: SortOrder
    durationMinutes?: SortOrder
    bufferMinutes?: SortOrder
    isActive?: SortOrder
    isOnline?: SortOrder
    maxAdvanceBooking?: SortOrder
    minAdvanceBooking?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ServiceItemSumOrderByAggregateInput = {
    basePrice?: SortOrder
    durationMinutes?: SortOrder
    bufferMinutes?: SortOrder
    maxAdvanceBooking?: SortOrder
    minAdvanceBooking?: SortOrder
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

  export type EnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type StaffAvailabilityOrderByRelevanceInput = {
    fields: StaffAvailabilityOrderByRelevanceFieldEnum | StaffAvailabilityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StaffAvailabilityUniq_staffavailability_staff_day_time_dateCompoundUniqueInput = {
    staffId: string
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    specificDate: Date | string
  }

  export type StaffAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    specificDate?: SortOrder
    isAvailable?: SortOrder
    breakStartTime?: SortOrder
    breakEndTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StaffAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    specificDate?: SortOrder
    isAvailable?: SortOrder
    breakStartTime?: SortOrder
    breakEndTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StaffAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    specificDate?: SortOrder
    isAvailable?: SortOrder
    breakStartTime?: SortOrder
    breakEndTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type StaffServiceOrderByRelevanceInput = {
    fields: StaffServiceOrderByRelevanceFieldEnum | StaffServiceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StaffServiceUniq_staffservice_staff_serviceCompoundUniqueInput = {
    staffId: string
    serviceId: string
  }

  export type StaffServiceCountOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    serviceId?: SortOrder
    customPrice?: SortOrder
    customDuration?: SortOrder
    isActive?: SortOrder
    isPreferred?: SortOrder
    skillLevel?: SortOrder
    experience?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StaffServiceAvgOrderByAggregateInput = {
    customPrice?: SortOrder
    customDuration?: SortOrder
    skillLevel?: SortOrder
    experience?: SortOrder
  }

  export type StaffServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    serviceId?: SortOrder
    customPrice?: SortOrder
    customDuration?: SortOrder
    isActive?: SortOrder
    isPreferred?: SortOrder
    skillLevel?: SortOrder
    experience?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StaffServiceMinOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    serviceId?: SortOrder
    customPrice?: SortOrder
    customDuration?: SortOrder
    isActive?: SortOrder
    isPreferred?: SortOrder
    skillLevel?: SortOrder
    experience?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StaffServiceSumOrderByAggregateInput = {
    customPrice?: SortOrder
    customDuration?: SortOrder
    skillLevel?: SortOrder
    experience?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type AppointmentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutStaffInput = {
    create?: XOR<AppointmentCreateWithoutStaffInput, AppointmentUncheckedCreateWithoutStaffInput> | AppointmentCreateWithoutStaffInput[] | AppointmentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutStaffInput | AppointmentCreateOrConnectWithoutStaffInput[]
    createMany?: AppointmentCreateManyStaffInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type StaffAvailabilityCreateNestedManyWithoutStaffInput = {
    create?: XOR<StaffAvailabilityCreateWithoutStaffInput, StaffAvailabilityUncheckedCreateWithoutStaffInput> | StaffAvailabilityCreateWithoutStaffInput[] | StaffAvailabilityUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffAvailabilityCreateOrConnectWithoutStaffInput | StaffAvailabilityCreateOrConnectWithoutStaffInput[]
    createMany?: StaffAvailabilityCreateManyStaffInputEnvelope
    connect?: StaffAvailabilityWhereUniqueInput | StaffAvailabilityWhereUniqueInput[]
  }

  export type StaffServiceCreateNestedManyWithoutStaffInput = {
    create?: XOR<StaffServiceCreateWithoutStaffInput, StaffServiceUncheckedCreateWithoutStaffInput> | StaffServiceCreateWithoutStaffInput[] | StaffServiceUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffServiceCreateOrConnectWithoutStaffInput | StaffServiceCreateOrConnectWithoutStaffInput[]
    createMany?: StaffServiceCreateManyStaffInputEnvelope
    connect?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
  }

  export type UserSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutStaffInput = {
    create?: XOR<ReviewCreateWithoutStaffInput, ReviewUncheckedCreateWithoutStaffInput> | ReviewCreateWithoutStaffInput[] | ReviewUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStaffInput | ReviewCreateOrConnectWithoutStaffInput[]
    createMany?: ReviewCreateManyStaffInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<AppointmentCreateWithoutStaffInput, AppointmentUncheckedCreateWithoutStaffInput> | AppointmentCreateWithoutStaffInput[] | AppointmentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutStaffInput | AppointmentCreateOrConnectWithoutStaffInput[]
    createMany?: AppointmentCreateManyStaffInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type StaffAvailabilityUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<StaffAvailabilityCreateWithoutStaffInput, StaffAvailabilityUncheckedCreateWithoutStaffInput> | StaffAvailabilityCreateWithoutStaffInput[] | StaffAvailabilityUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffAvailabilityCreateOrConnectWithoutStaffInput | StaffAvailabilityCreateOrConnectWithoutStaffInput[]
    createMany?: StaffAvailabilityCreateManyStaffInputEnvelope
    connect?: StaffAvailabilityWhereUniqueInput | StaffAvailabilityWhereUniqueInput[]
  }

  export type StaffServiceUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<StaffServiceCreateWithoutStaffInput, StaffServiceUncheckedCreateWithoutStaffInput> | StaffServiceCreateWithoutStaffInput[] | StaffServiceUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffServiceCreateOrConnectWithoutStaffInput | StaffServiceCreateOrConnectWithoutStaffInput[]
    createMany?: StaffServiceCreateManyStaffInputEnvelope
    connect?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
  }

  export type UserSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<ReviewCreateWithoutStaffInput, ReviewUncheckedCreateWithoutStaffInput> | ReviewCreateWithoutStaffInput[] | ReviewUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStaffInput | ReviewCreateOrConnectWithoutStaffInput[]
    createMany?: ReviewCreateManyStaffInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AppointmentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCustomerInput | AppointmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCustomerInput | AppointmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCustomerInput | AppointmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutStaffNestedInput = {
    create?: XOR<AppointmentCreateWithoutStaffInput, AppointmentUncheckedCreateWithoutStaffInput> | AppointmentCreateWithoutStaffInput[] | AppointmentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutStaffInput | AppointmentCreateOrConnectWithoutStaffInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutStaffInput | AppointmentUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: AppointmentCreateManyStaffInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutStaffInput | AppointmentUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutStaffInput | AppointmentUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type StaffAvailabilityUpdateManyWithoutStaffNestedInput = {
    create?: XOR<StaffAvailabilityCreateWithoutStaffInput, StaffAvailabilityUncheckedCreateWithoutStaffInput> | StaffAvailabilityCreateWithoutStaffInput[] | StaffAvailabilityUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffAvailabilityCreateOrConnectWithoutStaffInput | StaffAvailabilityCreateOrConnectWithoutStaffInput[]
    upsert?: StaffAvailabilityUpsertWithWhereUniqueWithoutStaffInput | StaffAvailabilityUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: StaffAvailabilityCreateManyStaffInputEnvelope
    set?: StaffAvailabilityWhereUniqueInput | StaffAvailabilityWhereUniqueInput[]
    disconnect?: StaffAvailabilityWhereUniqueInput | StaffAvailabilityWhereUniqueInput[]
    delete?: StaffAvailabilityWhereUniqueInput | StaffAvailabilityWhereUniqueInput[]
    connect?: StaffAvailabilityWhereUniqueInput | StaffAvailabilityWhereUniqueInput[]
    update?: StaffAvailabilityUpdateWithWhereUniqueWithoutStaffInput | StaffAvailabilityUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: StaffAvailabilityUpdateManyWithWhereWithoutStaffInput | StaffAvailabilityUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: StaffAvailabilityScalarWhereInput | StaffAvailabilityScalarWhereInput[]
  }

  export type StaffServiceUpdateManyWithoutStaffNestedInput = {
    create?: XOR<StaffServiceCreateWithoutStaffInput, StaffServiceUncheckedCreateWithoutStaffInput> | StaffServiceCreateWithoutStaffInput[] | StaffServiceUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffServiceCreateOrConnectWithoutStaffInput | StaffServiceCreateOrConnectWithoutStaffInput[]
    upsert?: StaffServiceUpsertWithWhereUniqueWithoutStaffInput | StaffServiceUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: StaffServiceCreateManyStaffInputEnvelope
    set?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
    disconnect?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
    delete?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
    connect?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
    update?: StaffServiceUpdateWithWhereUniqueWithoutStaffInput | StaffServiceUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: StaffServiceUpdateManyWithWhereWithoutStaffInput | StaffServiceUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: StaffServiceScalarWhereInput | StaffServiceScalarWhereInput[]
  }

  export type UserSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    upsert?: UserSessionUpsertWithWhereUniqueWithoutUserInput | UserSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    set?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    disconnect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    delete?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    update?: UserSessionUpdateWithWhereUniqueWithoutUserInput | UserSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSessionUpdateManyWithWhereWithoutUserInput | UserSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutCustomerInput | ReviewUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutCustomerInput | ReviewUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutCustomerInput | ReviewUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutStaffNestedInput = {
    create?: XOR<ReviewCreateWithoutStaffInput, ReviewUncheckedCreateWithoutStaffInput> | ReviewCreateWithoutStaffInput[] | ReviewUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStaffInput | ReviewCreateOrConnectWithoutStaffInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutStaffInput | ReviewUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: ReviewCreateManyStaffInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutStaffInput | ReviewUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutStaffInput | ReviewUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCustomerInput | AppointmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCustomerInput | AppointmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCustomerInput | AppointmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<AppointmentCreateWithoutStaffInput, AppointmentUncheckedCreateWithoutStaffInput> | AppointmentCreateWithoutStaffInput[] | AppointmentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutStaffInput | AppointmentCreateOrConnectWithoutStaffInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutStaffInput | AppointmentUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: AppointmentCreateManyStaffInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutStaffInput | AppointmentUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutStaffInput | AppointmentUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type StaffAvailabilityUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<StaffAvailabilityCreateWithoutStaffInput, StaffAvailabilityUncheckedCreateWithoutStaffInput> | StaffAvailabilityCreateWithoutStaffInput[] | StaffAvailabilityUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffAvailabilityCreateOrConnectWithoutStaffInput | StaffAvailabilityCreateOrConnectWithoutStaffInput[]
    upsert?: StaffAvailabilityUpsertWithWhereUniqueWithoutStaffInput | StaffAvailabilityUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: StaffAvailabilityCreateManyStaffInputEnvelope
    set?: StaffAvailabilityWhereUniqueInput | StaffAvailabilityWhereUniqueInput[]
    disconnect?: StaffAvailabilityWhereUniqueInput | StaffAvailabilityWhereUniqueInput[]
    delete?: StaffAvailabilityWhereUniqueInput | StaffAvailabilityWhereUniqueInput[]
    connect?: StaffAvailabilityWhereUniqueInput | StaffAvailabilityWhereUniqueInput[]
    update?: StaffAvailabilityUpdateWithWhereUniqueWithoutStaffInput | StaffAvailabilityUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: StaffAvailabilityUpdateManyWithWhereWithoutStaffInput | StaffAvailabilityUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: StaffAvailabilityScalarWhereInput | StaffAvailabilityScalarWhereInput[]
  }

  export type StaffServiceUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<StaffServiceCreateWithoutStaffInput, StaffServiceUncheckedCreateWithoutStaffInput> | StaffServiceCreateWithoutStaffInput[] | StaffServiceUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffServiceCreateOrConnectWithoutStaffInput | StaffServiceCreateOrConnectWithoutStaffInput[]
    upsert?: StaffServiceUpsertWithWhereUniqueWithoutStaffInput | StaffServiceUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: StaffServiceCreateManyStaffInputEnvelope
    set?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
    disconnect?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
    delete?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
    connect?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
    update?: StaffServiceUpdateWithWhereUniqueWithoutStaffInput | StaffServiceUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: StaffServiceUpdateManyWithWhereWithoutStaffInput | StaffServiceUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: StaffServiceScalarWhereInput | StaffServiceScalarWhereInput[]
  }

  export type UserSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    upsert?: UserSessionUpsertWithWhereUniqueWithoutUserInput | UserSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    set?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    disconnect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    delete?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    update?: UserSessionUpdateWithWhereUniqueWithoutUserInput | UserSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSessionUpdateManyWithWhereWithoutUserInput | UserSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutCustomerInput | ReviewUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutCustomerInput | ReviewUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutCustomerInput | ReviewUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<ReviewCreateWithoutStaffInput, ReviewUncheckedCreateWithoutStaffInput> | ReviewCreateWithoutStaffInput[] | ReviewUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStaffInput | ReviewCreateOrConnectWithoutStaffInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutStaffInput | ReviewUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: ReviewCreateManyStaffInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutStaffInput | ReviewUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutStaffInput | ReviewUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<AppointmentCreateWithoutNotificationsInput, AppointmentUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutNotificationsInput
    connect?: AppointmentWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type EnumNotificationChannelFieldUpdateOperationsInput = {
    set?: $Enums.NotificationChannel
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type AppointmentUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<AppointmentCreateWithoutNotificationsInput, AppointmentUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutNotificationsInput
    upsert?: AppointmentUpsertWithoutNotificationsInput
    disconnect?: AppointmentWhereInput | boolean
    delete?: AppointmentWhereInput | boolean
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutNotificationsInput, AppointmentUpdateWithoutNotificationsInput>, AppointmentUncheckedUpdateWithoutNotificationsInput>
  }

  export type EnumAuditActionFieldUpdateOperationsInput = {
    set?: $Enums.AuditAction
  }

  export type AppointmentCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<AppointmentCreateWithoutPaymentsInput, AppointmentUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutPaymentsInput
    connect?: AppointmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type AppointmentUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<AppointmentCreateWithoutPaymentsInput, AppointmentUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutPaymentsInput
    upsert?: AppointmentUpsertWithoutPaymentsInput
    disconnect?: AppointmentWhereInput | boolean
    delete?: AppointmentWhereInput | boolean
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutPaymentsInput, AppointmentUpdateWithoutPaymentsInput>, AppointmentUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type AppointmentCreateNestedOneWithoutReviewsInput = {
    create?: XOR<AppointmentCreateWithoutReviewsInput, AppointmentUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutReviewsInput
    connect?: AppointmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedReviewsInput = {
    create?: XOR<UserCreateWithoutReceivedReviewsInput, UserUncheckedCreateWithoutReceivedReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceItemCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ServiceItemCreateWithoutReviewsInput, ServiceItemUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ServiceItemCreateOrConnectWithoutReviewsInput
    connect?: ServiceItemWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppointmentUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<AppointmentCreateWithoutReviewsInput, AppointmentUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutReviewsInput
    upsert?: AppointmentUpsertWithoutReviewsInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutReviewsInput, AppointmentUpdateWithoutReviewsInput>, AppointmentUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneWithoutReceivedReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedReviewsInput, UserUncheckedCreateWithoutReceivedReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedReviewsInput
    upsert?: UserUpsertWithoutReceivedReviewsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedReviewsInput, UserUpdateWithoutReceivedReviewsInput>, UserUncheckedUpdateWithoutReceivedReviewsInput>
  }

  export type ServiceItemUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ServiceItemCreateWithoutReviewsInput, ServiceItemUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ServiceItemCreateOrConnectWithoutReviewsInput
    upsert?: ServiceItemUpsertWithoutReviewsInput
    connect?: ServiceItemWhereUniqueInput
    update?: XOR<XOR<ServiceItemUpdateToOneWithWhereWithoutReviewsInput, ServiceItemUpdateWithoutReviewsInput>, ServiceItemUncheckedUpdateWithoutReviewsInput>
  }

  export type UserCreateNestedOneWithoutCustomerAppointmentsInput = {
    create?: XOR<UserCreateWithoutCustomerAppointmentsInput, UserUncheckedCreateWithoutCustomerAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStaffAppointmentsInput = {
    create?: XOR<UserCreateWithoutStaffAppointmentsInput, UserUncheckedCreateWithoutStaffAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceItemCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<ServiceItemCreateWithoutAppointmentsInput, ServiceItemUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ServiceItemCreateOrConnectWithoutAppointmentsInput
    connect?: ServiceItemWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput> | PaymentCreateWithoutAppointmentInput[] | PaymentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput | PaymentCreateOrConnectWithoutAppointmentInput[]
    createMany?: PaymentCreateManyAppointmentInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput> | NotificationCreateWithoutAppointmentInput[] | NotificationUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAppointmentInput | NotificationCreateOrConnectWithoutAppointmentInput[]
    createMany?: NotificationCreateManyAppointmentInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput> | ReviewCreateWithoutAppointmentInput[] | ReviewUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAppointmentInput | ReviewCreateOrConnectWithoutAppointmentInput[]
    createMany?: ReviewCreateManyAppointmentInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput> | PaymentCreateWithoutAppointmentInput[] | PaymentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput | PaymentCreateOrConnectWithoutAppointmentInput[]
    createMany?: PaymentCreateManyAppointmentInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput> | NotificationCreateWithoutAppointmentInput[] | NotificationUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAppointmentInput | NotificationCreateOrConnectWithoutAppointmentInput[]
    createMany?: NotificationCreateManyAppointmentInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput> | ReviewCreateWithoutAppointmentInput[] | ReviewUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAppointmentInput | ReviewCreateOrConnectWithoutAppointmentInput[]
    createMany?: ReviewCreateManyAppointmentInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type EnumAppointmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentType
  }

  export type UserUpdateOneRequiredWithoutCustomerAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutCustomerAppointmentsInput, UserUncheckedCreateWithoutCustomerAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerAppointmentsInput
    upsert?: UserUpsertWithoutCustomerAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomerAppointmentsInput, UserUpdateWithoutCustomerAppointmentsInput>, UserUncheckedUpdateWithoutCustomerAppointmentsInput>
  }

  export type UserUpdateOneWithoutStaffAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutStaffAppointmentsInput, UserUncheckedCreateWithoutStaffAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffAppointmentsInput
    upsert?: UserUpsertWithoutStaffAppointmentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStaffAppointmentsInput, UserUpdateWithoutStaffAppointmentsInput>, UserUncheckedUpdateWithoutStaffAppointmentsInput>
  }

  export type ServiceItemUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<ServiceItemCreateWithoutAppointmentsInput, ServiceItemUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ServiceItemCreateOrConnectWithoutAppointmentsInput
    upsert?: ServiceItemUpsertWithoutAppointmentsInput
    connect?: ServiceItemWhereUniqueInput
    update?: XOR<XOR<ServiceItemUpdateToOneWithWhereWithoutAppointmentsInput, ServiceItemUpdateWithoutAppointmentsInput>, ServiceItemUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PaymentUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput> | PaymentCreateWithoutAppointmentInput[] | PaymentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput | PaymentCreateOrConnectWithoutAppointmentInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutAppointmentInput | PaymentUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: PaymentCreateManyAppointmentInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutAppointmentInput | PaymentUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutAppointmentInput | PaymentUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput> | NotificationCreateWithoutAppointmentInput[] | NotificationUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAppointmentInput | NotificationCreateOrConnectWithoutAppointmentInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutAppointmentInput | NotificationUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: NotificationCreateManyAppointmentInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutAppointmentInput | NotificationUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutAppointmentInput | NotificationUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput> | ReviewCreateWithoutAppointmentInput[] | ReviewUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAppointmentInput | ReviewCreateOrConnectWithoutAppointmentInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutAppointmentInput | ReviewUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: ReviewCreateManyAppointmentInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutAppointmentInput | ReviewUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutAppointmentInput | ReviewUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput> | PaymentCreateWithoutAppointmentInput[] | PaymentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput | PaymentCreateOrConnectWithoutAppointmentInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutAppointmentInput | PaymentUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: PaymentCreateManyAppointmentInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutAppointmentInput | PaymentUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutAppointmentInput | PaymentUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput> | NotificationCreateWithoutAppointmentInput[] | NotificationUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAppointmentInput | NotificationCreateOrConnectWithoutAppointmentInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutAppointmentInput | NotificationUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: NotificationCreateManyAppointmentInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutAppointmentInput | NotificationUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutAppointmentInput | NotificationUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput> | ReviewCreateWithoutAppointmentInput[] | ReviewUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAppointmentInput | ReviewCreateOrConnectWithoutAppointmentInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutAppointmentInput | ReviewUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: ReviewCreateManyAppointmentInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutAppointmentInput | ReviewUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutAppointmentInput | ReviewUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ServiceItemCreatetagsInput = {
    set: string[]
  }

  export type AppointmentCreateNestedManyWithoutServiceInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type StaffServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<StaffServiceCreateWithoutServiceInput, StaffServiceUncheckedCreateWithoutServiceInput> | StaffServiceCreateWithoutServiceInput[] | StaffServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: StaffServiceCreateOrConnectWithoutServiceInput | StaffServiceCreateOrConnectWithoutServiceInput[]
    createMany?: StaffServiceCreateManyServiceInputEnvelope
    connect?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutServiceInput = {
    create?: XOR<ReviewCreateWithoutServiceInput, ReviewUncheckedCreateWithoutServiceInput> | ReviewCreateWithoutServiceInput[] | ReviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutServiceInput | ReviewCreateOrConnectWithoutServiceInput[]
    createMany?: ReviewCreateManyServiceInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type StaffServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<StaffServiceCreateWithoutServiceInput, StaffServiceUncheckedCreateWithoutServiceInput> | StaffServiceCreateWithoutServiceInput[] | StaffServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: StaffServiceCreateOrConnectWithoutServiceInput | StaffServiceCreateOrConnectWithoutServiceInput[]
    createMany?: StaffServiceCreateManyServiceInputEnvelope
    connect?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ReviewCreateWithoutServiceInput, ReviewUncheckedCreateWithoutServiceInput> | ReviewCreateWithoutServiceInput[] | ReviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutServiceInput | ReviewCreateOrConnectWithoutServiceInput[]
    createMany?: ReviewCreateManyServiceInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServiceItemUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AppointmentUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutServiceInput | AppointmentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutServiceInput | AppointmentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutServiceInput | AppointmentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type StaffServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<StaffServiceCreateWithoutServiceInput, StaffServiceUncheckedCreateWithoutServiceInput> | StaffServiceCreateWithoutServiceInput[] | StaffServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: StaffServiceCreateOrConnectWithoutServiceInput | StaffServiceCreateOrConnectWithoutServiceInput[]
    upsert?: StaffServiceUpsertWithWhereUniqueWithoutServiceInput | StaffServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: StaffServiceCreateManyServiceInputEnvelope
    set?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
    disconnect?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
    delete?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
    connect?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
    update?: StaffServiceUpdateWithWhereUniqueWithoutServiceInput | StaffServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: StaffServiceUpdateManyWithWhereWithoutServiceInput | StaffServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: StaffServiceScalarWhereInput | StaffServiceScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ReviewCreateWithoutServiceInput, ReviewUncheckedCreateWithoutServiceInput> | ReviewCreateWithoutServiceInput[] | ReviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutServiceInput | ReviewCreateOrConnectWithoutServiceInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutServiceInput | ReviewUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ReviewCreateManyServiceInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutServiceInput | ReviewUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutServiceInput | ReviewUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutServiceInput | AppointmentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutServiceInput | AppointmentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutServiceInput | AppointmentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type StaffServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<StaffServiceCreateWithoutServiceInput, StaffServiceUncheckedCreateWithoutServiceInput> | StaffServiceCreateWithoutServiceInput[] | StaffServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: StaffServiceCreateOrConnectWithoutServiceInput | StaffServiceCreateOrConnectWithoutServiceInput[]
    upsert?: StaffServiceUpsertWithWhereUniqueWithoutServiceInput | StaffServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: StaffServiceCreateManyServiceInputEnvelope
    set?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
    disconnect?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
    delete?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
    connect?: StaffServiceWhereUniqueInput | StaffServiceWhereUniqueInput[]
    update?: StaffServiceUpdateWithWhereUniqueWithoutServiceInput | StaffServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: StaffServiceUpdateManyWithWhereWithoutServiceInput | StaffServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: StaffServiceScalarWhereInput | StaffServiceScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ReviewCreateWithoutServiceInput, ReviewUncheckedCreateWithoutServiceInput> | ReviewCreateWithoutServiceInput[] | ReviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutServiceInput | ReviewCreateOrConnectWithoutServiceInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutServiceInput | ReviewUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ReviewCreateManyServiceInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutServiceInput | ReviewUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutServiceInput | ReviewUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilityInput
    connect?: UserWhereUniqueInput
  }

  export type EnumDayOfWeekFieldUpdateOperationsInput = {
    set?: $Enums.DayOfWeek
  }

  export type UserUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilityInput
    upsert?: UserUpsertWithoutAvailabilityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAvailabilityInput, UserUpdateWithoutAvailabilityInput>, UserUncheckedUpdateWithoutAvailabilityInput>
  }

  export type UserCreateNestedOneWithoutStaffServicesInput = {
    create?: XOR<UserCreateWithoutStaffServicesInput, UserUncheckedCreateWithoutStaffServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffServicesInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceItemCreateNestedOneWithoutStaffServicesInput = {
    create?: XOR<ServiceItemCreateWithoutStaffServicesInput, ServiceItemUncheckedCreateWithoutStaffServicesInput>
    connectOrCreate?: ServiceItemCreateOrConnectWithoutStaffServicesInput
    connect?: ServiceItemWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutStaffServicesNestedInput = {
    create?: XOR<UserCreateWithoutStaffServicesInput, UserUncheckedCreateWithoutStaffServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffServicesInput
    upsert?: UserUpsertWithoutStaffServicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStaffServicesInput, UserUpdateWithoutStaffServicesInput>, UserUncheckedUpdateWithoutStaffServicesInput>
  }

  export type ServiceItemUpdateOneRequiredWithoutStaffServicesNestedInput = {
    create?: XOR<ServiceItemCreateWithoutStaffServicesInput, ServiceItemUncheckedCreateWithoutStaffServicesInput>
    connectOrCreate?: ServiceItemCreateOrConnectWithoutStaffServicesInput
    upsert?: ServiceItemUpsertWithoutStaffServicesInput
    connect?: ServiceItemWhereUniqueInput
    update?: XOR<XOR<ServiceItemUpdateToOneWithWhereWithoutStaffServicesInput, ServiceItemUpdateWithoutStaffServicesInput>, ServiceItemUncheckedUpdateWithoutStaffServicesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedUuidFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
    search?: string
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

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationChannelFilter<$PrismaModel> | $Enums.NotificationChannel
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel> | $Enums.NotificationChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationChannelFilter<$PrismaModel>
    _max?: NestedEnumNotificationChannelFilter<$PrismaModel>
  }

  export type NestedEnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction
  }

  export type NestedEnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditActionFilter<$PrismaModel>
    _max?: NestedEnumAuditActionFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumAppointmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeFilter<$PrismaModel> | $Enums.AppointmentType
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentTypeFilter<$PrismaModel>
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

  export type NestedEnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type AppointmentCreateWithoutCustomerInput = {
    id?: string
    scheduledDate: Date | string
    scheduledTime: string
    startTime: Date | string
    endTime: Date | string
    timezone?: string
    status?: $Enums.Status
    type?: $Enums.AppointmentType
    notes?: string | null
    internalNotes?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    discount?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    staff?: UserCreateNestedOneWithoutStaffAppointmentsInput
    service: ServiceItemCreateNestedOneWithoutAppointmentsInput
    payments?: PaymentCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationCreateNestedManyWithoutAppointmentInput
    reviews?: ReviewCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutCustomerInput = {
    id?: string
    scheduledDate: Date | string
    scheduledTime: string
    startTime: Date | string
    endTime: Date | string
    timezone?: string
    status?: $Enums.Status
    type?: $Enums.AppointmentType
    notes?: string | null
    internalNotes?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    discount?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    staffId?: string | null
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutCustomerInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput>
  }

  export type AppointmentCreateManyCustomerInputEnvelope = {
    data: AppointmentCreateManyCustomerInput | AppointmentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutStaffInput = {
    id?: string
    scheduledDate: Date | string
    scheduledTime: string
    startTime: Date | string
    endTime: Date | string
    timezone?: string
    status?: $Enums.Status
    type?: $Enums.AppointmentType
    notes?: string | null
    internalNotes?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    discount?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customer: UserCreateNestedOneWithoutCustomerAppointmentsInput
    service: ServiceItemCreateNestedOneWithoutAppointmentsInput
    payments?: PaymentCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationCreateNestedManyWithoutAppointmentInput
    reviews?: ReviewCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutStaffInput = {
    id?: string
    scheduledDate: Date | string
    scheduledTime: string
    startTime: Date | string
    endTime: Date | string
    timezone?: string
    status?: $Enums.Status
    type?: $Enums.AppointmentType
    notes?: string | null
    internalNotes?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    discount?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    customerId: string
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutStaffInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutStaffInput, AppointmentUncheckedCreateWithoutStaffInput>
  }

  export type AppointmentCreateManyStaffInputEnvelope = {
    data: AppointmentCreateManyStaffInput | AppointmentCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type StaffAvailabilityCreateWithoutStaffInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    specificDate?: Date | string | null
    isAvailable?: boolean
    breakStartTime?: string | null
    breakEndTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type StaffAvailabilityUncheckedCreateWithoutStaffInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    specificDate?: Date | string | null
    isAvailable?: boolean
    breakStartTime?: string | null
    breakEndTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type StaffAvailabilityCreateOrConnectWithoutStaffInput = {
    where: StaffAvailabilityWhereUniqueInput
    create: XOR<StaffAvailabilityCreateWithoutStaffInput, StaffAvailabilityUncheckedCreateWithoutStaffInput>
  }

  export type StaffAvailabilityCreateManyStaffInputEnvelope = {
    data: StaffAvailabilityCreateManyStaffInput | StaffAvailabilityCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type StaffServiceCreateWithoutStaffInput = {
    id?: string
    customPrice?: Decimal | DecimalJsLike | number | string | null
    customDuration?: number | null
    isActive?: boolean
    isPreferred?: boolean
    skillLevel?: number
    experience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    service: ServiceItemCreateNestedOneWithoutStaffServicesInput
  }

  export type StaffServiceUncheckedCreateWithoutStaffInput = {
    id?: string
    serviceId: string
    customPrice?: Decimal | DecimalJsLike | number | string | null
    customDuration?: number | null
    isActive?: boolean
    isPreferred?: boolean
    skillLevel?: number
    experience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type StaffServiceCreateOrConnectWithoutStaffInput = {
    where: StaffServiceWhereUniqueInput
    create: XOR<StaffServiceCreateWithoutStaffInput, StaffServiceUncheckedCreateWithoutStaffInput>
  }

  export type StaffServiceCreateManyStaffInputEnvelope = {
    data: StaffServiceCreateManyStaffInput | StaffServiceCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type UserSessionCreateWithoutUserInput = {
    id?: string
    refreshToken: string
    userAgent?: string | null
    ipAddress?: string | null
    isActive?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
    updatedAt?: Date | string
    lastUsedAt?: Date | string | null
  }

  export type UserSessionUncheckedCreateWithoutUserInput = {
    id?: string
    refreshToken: string
    userAgent?: string | null
    ipAddress?: string | null
    isActive?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
    updatedAt?: Date | string
    lastUsedAt?: Date | string | null
  }

  export type UserSessionCreateOrConnectWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    create: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
  }

  export type UserSessionCreateManyUserInputEnvelope = {
    data: UserSessionCreateManyUserInput | UserSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type: $Enums.NotificationType
    channel: $Enums.NotificationChannel
    isRead?: boolean
    readAt?: Date | string | null
    scheduledFor?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    appointment?: AppointmentCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    appointmentId?: string | null
    title: string
    message: string
    type: $Enums.NotificationType
    channel: $Enums.NotificationChannel
    isRead?: boolean
    readAt?: Date | string | null
    scheduledFor?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutCustomerInput = {
    id?: string
    rating: number
    title?: string | null
    comment?: string | null
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    appointment: AppointmentCreateNestedOneWithoutReviewsInput
    staff?: UserCreateNestedOneWithoutReceivedReviewsInput
    service: ServiceItemCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutCustomerInput = {
    id?: string
    appointmentId: string
    staffId?: string | null
    serviceId: string
    rating: number
    title?: string | null
    comment?: string | null
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReviewCreateOrConnectWithoutCustomerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput>
  }

  export type ReviewCreateManyCustomerInputEnvelope = {
    data: ReviewCreateManyCustomerInput | ReviewCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutStaffInput = {
    id?: string
    rating: number
    title?: string | null
    comment?: string | null
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    appointment: AppointmentCreateNestedOneWithoutReviewsInput
    customer: UserCreateNestedOneWithoutReviewsInput
    service: ServiceItemCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutStaffInput = {
    id?: string
    appointmentId: string
    customerId: string
    serviceId: string
    rating: number
    title?: string | null
    comment?: string | null
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReviewCreateOrConnectWithoutStaffInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutStaffInput, ReviewUncheckedCreateWithoutStaffInput>
  }

  export type ReviewCreateManyStaffInputEnvelope = {
    data: ReviewCreateManyStaffInput | ReviewCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    paymentMethod: $Enums.PaymentMethod
    stripePaymentId?: string | null
    transactionId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    appointment?: AppointmentCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    appointmentId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    paymentMethod: $Enums.PaymentMethod
    stripePaymentId?: string | null
    transactionId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutCustomerInput, AppointmentUncheckedUpdateWithoutCustomerInput>
    create: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutCustomerInput, AppointmentUncheckedUpdateWithoutCustomerInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutCustomerInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: UuidFilter<"Appointment"> | string
    scheduledDate?: DateTimeFilter<"Appointment"> | Date | string
    scheduledTime?: StringFilter<"Appointment"> | string
    startTime?: DateTimeFilter<"Appointment"> | Date | string
    endTime?: DateTimeFilter<"Appointment"> | Date | string
    timezone?: StringFilter<"Appointment"> | string
    status?: EnumStatusFilter<"Appointment"> | $Enums.Status
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    notes?: StringNullableFilter<"Appointment"> | string | null
    internalNotes?: StringNullableFilter<"Appointment"> | string | null
    price?: DecimalFilter<"Appointment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Appointment"> | string
    discount?: DecimalFilter<"Appointment"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFilter<"Appointment"> | Decimal | DecimalJsLike | number | string
    customerId?: UuidFilter<"Appointment"> | string
    staffId?: UuidNullableFilter<"Appointment"> | string | null
    serviceId?: UuidFilter<"Appointment"> | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
  }

  export type AppointmentUpsertWithWhereUniqueWithoutStaffInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutStaffInput, AppointmentUncheckedUpdateWithoutStaffInput>
    create: XOR<AppointmentCreateWithoutStaffInput, AppointmentUncheckedCreateWithoutStaffInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutStaffInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutStaffInput, AppointmentUncheckedUpdateWithoutStaffInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutStaffInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutStaffInput>
  }

  export type StaffAvailabilityUpsertWithWhereUniqueWithoutStaffInput = {
    where: StaffAvailabilityWhereUniqueInput
    update: XOR<StaffAvailabilityUpdateWithoutStaffInput, StaffAvailabilityUncheckedUpdateWithoutStaffInput>
    create: XOR<StaffAvailabilityCreateWithoutStaffInput, StaffAvailabilityUncheckedCreateWithoutStaffInput>
  }

  export type StaffAvailabilityUpdateWithWhereUniqueWithoutStaffInput = {
    where: StaffAvailabilityWhereUniqueInput
    data: XOR<StaffAvailabilityUpdateWithoutStaffInput, StaffAvailabilityUncheckedUpdateWithoutStaffInput>
  }

  export type StaffAvailabilityUpdateManyWithWhereWithoutStaffInput = {
    where: StaffAvailabilityScalarWhereInput
    data: XOR<StaffAvailabilityUpdateManyMutationInput, StaffAvailabilityUncheckedUpdateManyWithoutStaffInput>
  }

  export type StaffAvailabilityScalarWhereInput = {
    AND?: StaffAvailabilityScalarWhereInput | StaffAvailabilityScalarWhereInput[]
    OR?: StaffAvailabilityScalarWhereInput[]
    NOT?: StaffAvailabilityScalarWhereInput | StaffAvailabilityScalarWhereInput[]
    id?: UuidFilter<"StaffAvailability"> | string
    staffId?: UuidFilter<"StaffAvailability"> | string
    dayOfWeek?: EnumDayOfWeekFilter<"StaffAvailability"> | $Enums.DayOfWeek
    startTime?: StringFilter<"StaffAvailability"> | string
    endTime?: StringFilter<"StaffAvailability"> | string
    specificDate?: DateTimeNullableFilter<"StaffAvailability"> | Date | string | null
    isAvailable?: BoolFilter<"StaffAvailability"> | boolean
    breakStartTime?: StringNullableFilter<"StaffAvailability"> | string | null
    breakEndTime?: StringNullableFilter<"StaffAvailability"> | string | null
    createdAt?: DateTimeFilter<"StaffAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"StaffAvailability"> | Date | string
    deletedAt?: DateTimeNullableFilter<"StaffAvailability"> | Date | string | null
  }

  export type StaffServiceUpsertWithWhereUniqueWithoutStaffInput = {
    where: StaffServiceWhereUniqueInput
    update: XOR<StaffServiceUpdateWithoutStaffInput, StaffServiceUncheckedUpdateWithoutStaffInput>
    create: XOR<StaffServiceCreateWithoutStaffInput, StaffServiceUncheckedCreateWithoutStaffInput>
  }

  export type StaffServiceUpdateWithWhereUniqueWithoutStaffInput = {
    where: StaffServiceWhereUniqueInput
    data: XOR<StaffServiceUpdateWithoutStaffInput, StaffServiceUncheckedUpdateWithoutStaffInput>
  }

  export type StaffServiceUpdateManyWithWhereWithoutStaffInput = {
    where: StaffServiceScalarWhereInput
    data: XOR<StaffServiceUpdateManyMutationInput, StaffServiceUncheckedUpdateManyWithoutStaffInput>
  }

  export type StaffServiceScalarWhereInput = {
    AND?: StaffServiceScalarWhereInput | StaffServiceScalarWhereInput[]
    OR?: StaffServiceScalarWhereInput[]
    NOT?: StaffServiceScalarWhereInput | StaffServiceScalarWhereInput[]
    id?: UuidFilter<"StaffService"> | string
    staffId?: UuidFilter<"StaffService"> | string
    serviceId?: UuidFilter<"StaffService"> | string
    customPrice?: DecimalNullableFilter<"StaffService"> | Decimal | DecimalJsLike | number | string | null
    customDuration?: IntNullableFilter<"StaffService"> | number | null
    isActive?: BoolFilter<"StaffService"> | boolean
    isPreferred?: BoolFilter<"StaffService"> | boolean
    skillLevel?: IntFilter<"StaffService"> | number
    experience?: IntNullableFilter<"StaffService"> | number | null
    createdAt?: DateTimeFilter<"StaffService"> | Date | string
    updatedAt?: DateTimeFilter<"StaffService"> | Date | string
    deletedAt?: DateTimeNullableFilter<"StaffService"> | Date | string | null
  }

  export type UserSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    update: XOR<UserSessionUpdateWithoutUserInput, UserSessionUncheckedUpdateWithoutUserInput>
    create: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
  }

  export type UserSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    data: XOR<UserSessionUpdateWithoutUserInput, UserSessionUncheckedUpdateWithoutUserInput>
  }

  export type UserSessionUpdateManyWithWhereWithoutUserInput = {
    where: UserSessionScalarWhereInput
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSessionScalarWhereInput = {
    AND?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
    OR?: UserSessionScalarWhereInput[]
    NOT?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
    id?: UuidFilter<"UserSession"> | string
    userId?: UuidFilter<"UserSession"> | string
    refreshToken?: StringFilter<"UserSession"> | string
    userAgent?: StringNullableFilter<"UserSession"> | string | null
    ipAddress?: StringNullableFilter<"UserSession"> | string | null
    isActive?: BoolFilter<"UserSession"> | boolean
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    expiresAt?: DateTimeFilter<"UserSession"> | Date | string
    updatedAt?: DateTimeFilter<"UserSession"> | Date | string
    lastUsedAt?: DateTimeNullableFilter<"UserSession"> | Date | string | null
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: UuidFilter<"Notification"> | string
    userId?: UuidFilter<"Notification"> | string
    appointmentId?: UuidNullableFilter<"Notification"> | string | null
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    channel?: EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel
    isRead?: BoolFilter<"Notification"> | boolean
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    scheduledFor?: DateTimeNullableFilter<"Notification"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
  }

  export type ReviewUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutCustomerInput, ReviewUncheckedUpdateWithoutCustomerInput>
    create: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutCustomerInput, ReviewUncheckedUpdateWithoutCustomerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutCustomerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: UuidFilter<"Review"> | string
    appointmentId?: UuidFilter<"Review"> | string
    customerId?: UuidFilter<"Review"> | string
    staffId?: UuidNullableFilter<"Review"> | string | null
    serviceId?: UuidFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    title?: StringNullableFilter<"Review"> | string | null
    comment?: StringNullableFilter<"Review"> | string | null
    isApproved?: BoolFilter<"Review"> | boolean
    isPublic?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Review"> | Date | string | null
  }

  export type ReviewUpsertWithWhereUniqueWithoutStaffInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutStaffInput, ReviewUncheckedUpdateWithoutStaffInput>
    create: XOR<ReviewCreateWithoutStaffInput, ReviewUncheckedCreateWithoutStaffInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutStaffInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutStaffInput, ReviewUncheckedUpdateWithoutStaffInput>
  }

  export type ReviewUpdateManyWithWhereWithoutStaffInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutStaffInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: UuidFilter<"Payment"> | string
    appointmentId?: UuidNullableFilter<"Payment"> | string | null
    userId?: UuidFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    stripePaymentId?: StringNullableFilter<"Payment"> | string | null
    transactionId?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerAppointments?: AppointmentCreateNestedManyWithoutCustomerInput
    staffAppointments?: AppointmentCreateNestedManyWithoutStaffInput
    availability?: StaffAvailabilityCreateNestedManyWithoutStaffInput
    staffServices?: StaffServiceCreateNestedManyWithoutStaffInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutCustomerInput
    receivedReviews?: ReviewCreateNestedManyWithoutStaffInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerAppointments?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    staffAppointments?: AppointmentUncheckedCreateNestedManyWithoutStaffInput
    availability?: StaffAvailabilityUncheckedCreateNestedManyWithoutStaffInput
    staffServices?: StaffServiceUncheckedCreateNestedManyWithoutStaffInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutStaffInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAppointments?: AppointmentUpdateManyWithoutCustomerNestedInput
    staffAppointments?: AppointmentUpdateManyWithoutStaffNestedInput
    availability?: StaffAvailabilityUpdateManyWithoutStaffNestedInput
    staffServices?: StaffServiceUpdateManyWithoutStaffNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutCustomerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutStaffNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAppointments?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    staffAppointments?: AppointmentUncheckedUpdateManyWithoutStaffNestedInput
    availability?: StaffAvailabilityUncheckedUpdateManyWithoutStaffNestedInput
    staffServices?: StaffServiceUncheckedUpdateManyWithoutStaffNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutStaffNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerAppointments?: AppointmentCreateNestedManyWithoutCustomerInput
    staffAppointments?: AppointmentCreateNestedManyWithoutStaffInput
    availability?: StaffAvailabilityCreateNestedManyWithoutStaffInput
    staffServices?: StaffServiceCreateNestedManyWithoutStaffInput
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutCustomerInput
    receivedReviews?: ReviewCreateNestedManyWithoutStaffInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerAppointments?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    staffAppointments?: AppointmentUncheckedCreateNestedManyWithoutStaffInput
    availability?: StaffAvailabilityUncheckedCreateNestedManyWithoutStaffInput
    staffServices?: StaffServiceUncheckedCreateNestedManyWithoutStaffInput
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutStaffInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type AppointmentCreateWithoutNotificationsInput = {
    id?: string
    scheduledDate: Date | string
    scheduledTime: string
    startTime: Date | string
    endTime: Date | string
    timezone?: string
    status?: $Enums.Status
    type?: $Enums.AppointmentType
    notes?: string | null
    internalNotes?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    discount?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customer: UserCreateNestedOneWithoutCustomerAppointmentsInput
    staff?: UserCreateNestedOneWithoutStaffAppointmentsInput
    service: ServiceItemCreateNestedOneWithoutAppointmentsInput
    payments?: PaymentCreateNestedManyWithoutAppointmentInput
    reviews?: ReviewCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutNotificationsInput = {
    id?: string
    scheduledDate: Date | string
    scheduledTime: string
    startTime: Date | string
    endTime: Date | string
    timezone?: string
    status?: $Enums.Status
    type?: $Enums.AppointmentType
    notes?: string | null
    internalNotes?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    discount?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    customerId: string
    staffId?: string | null
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutNotificationsInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutNotificationsInput, AppointmentUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAppointments?: AppointmentUpdateManyWithoutCustomerNestedInput
    staffAppointments?: AppointmentUpdateManyWithoutStaffNestedInput
    availability?: StaffAvailabilityUpdateManyWithoutStaffNestedInput
    staffServices?: StaffServiceUpdateManyWithoutStaffNestedInput
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutCustomerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutStaffNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAppointments?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    staffAppointments?: AppointmentUncheckedUpdateManyWithoutStaffNestedInput
    availability?: StaffAvailabilityUncheckedUpdateManyWithoutStaffNestedInput
    staffServices?: StaffServiceUncheckedUpdateManyWithoutStaffNestedInput
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutStaffNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppointmentUpsertWithoutNotificationsInput = {
    update: XOR<AppointmentUpdateWithoutNotificationsInput, AppointmentUncheckedUpdateWithoutNotificationsInput>
    create: XOR<AppointmentCreateWithoutNotificationsInput, AppointmentUncheckedCreateWithoutNotificationsInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutNotificationsInput, AppointmentUncheckedUpdateWithoutNotificationsInput>
  }

  export type AppointmentUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutCustomerAppointmentsNestedInput
    staff?: UserUpdateOneWithoutStaffAppointmentsNestedInput
    service?: ServiceItemUpdateOneRequiredWithoutAppointmentsNestedInput
    payments?: PaymentUpdateManyWithoutAppointmentNestedInput
    reviews?: ReviewUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customerId?: StringFieldUpdateOperationsInput | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentCreateWithoutPaymentsInput = {
    id?: string
    scheduledDate: Date | string
    scheduledTime: string
    startTime: Date | string
    endTime: Date | string
    timezone?: string
    status?: $Enums.Status
    type?: $Enums.AppointmentType
    notes?: string | null
    internalNotes?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    discount?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customer: UserCreateNestedOneWithoutCustomerAppointmentsInput
    staff?: UserCreateNestedOneWithoutStaffAppointmentsInput
    service: ServiceItemCreateNestedOneWithoutAppointmentsInput
    notifications?: NotificationCreateNestedManyWithoutAppointmentInput
    reviews?: ReviewCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutPaymentsInput = {
    id?: string
    scheduledDate: Date | string
    scheduledTime: string
    startTime: Date | string
    endTime: Date | string
    timezone?: string
    status?: $Enums.Status
    type?: $Enums.AppointmentType
    notes?: string | null
    internalNotes?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    discount?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    customerId: string
    staffId?: string | null
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutPaymentsInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPaymentsInput, AppointmentUncheckedCreateWithoutPaymentsInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerAppointments?: AppointmentCreateNestedManyWithoutCustomerInput
    staffAppointments?: AppointmentCreateNestedManyWithoutStaffInput
    availability?: StaffAvailabilityCreateNestedManyWithoutStaffInput
    staffServices?: StaffServiceCreateNestedManyWithoutStaffInput
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutCustomerInput
    receivedReviews?: ReviewCreateNestedManyWithoutStaffInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerAppointments?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    staffAppointments?: AppointmentUncheckedCreateNestedManyWithoutStaffInput
    availability?: StaffAvailabilityUncheckedCreateNestedManyWithoutStaffInput
    staffServices?: StaffServiceUncheckedCreateNestedManyWithoutStaffInput
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutStaffInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type AppointmentUpsertWithoutPaymentsInput = {
    update: XOR<AppointmentUpdateWithoutPaymentsInput, AppointmentUncheckedUpdateWithoutPaymentsInput>
    create: XOR<AppointmentCreateWithoutPaymentsInput, AppointmentUncheckedCreateWithoutPaymentsInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutPaymentsInput, AppointmentUncheckedUpdateWithoutPaymentsInput>
  }

  export type AppointmentUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutCustomerAppointmentsNestedInput
    staff?: UserUpdateOneWithoutStaffAppointmentsNestedInput
    service?: ServiceItemUpdateOneRequiredWithoutAppointmentsNestedInput
    notifications?: NotificationUpdateManyWithoutAppointmentNestedInput
    reviews?: ReviewUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customerId?: StringFieldUpdateOperationsInput | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAppointments?: AppointmentUpdateManyWithoutCustomerNestedInput
    staffAppointments?: AppointmentUpdateManyWithoutStaffNestedInput
    availability?: StaffAvailabilityUpdateManyWithoutStaffNestedInput
    staffServices?: StaffServiceUpdateManyWithoutStaffNestedInput
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutCustomerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutStaffNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAppointments?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    staffAppointments?: AppointmentUncheckedUpdateManyWithoutStaffNestedInput
    availability?: StaffAvailabilityUncheckedUpdateManyWithoutStaffNestedInput
    staffServices?: StaffServiceUncheckedUpdateManyWithoutStaffNestedInput
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type AppointmentCreateWithoutReviewsInput = {
    id?: string
    scheduledDate: Date | string
    scheduledTime: string
    startTime: Date | string
    endTime: Date | string
    timezone?: string
    status?: $Enums.Status
    type?: $Enums.AppointmentType
    notes?: string | null
    internalNotes?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    discount?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customer: UserCreateNestedOneWithoutCustomerAppointmentsInput
    staff?: UserCreateNestedOneWithoutStaffAppointmentsInput
    service: ServiceItemCreateNestedOneWithoutAppointmentsInput
    payments?: PaymentCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutReviewsInput = {
    id?: string
    scheduledDate: Date | string
    scheduledTime: string
    startTime: Date | string
    endTime: Date | string
    timezone?: string
    status?: $Enums.Status
    type?: $Enums.AppointmentType
    notes?: string | null
    internalNotes?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    discount?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    customerId: string
    staffId?: string | null
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutReviewsInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutReviewsInput, AppointmentUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerAppointments?: AppointmentCreateNestedManyWithoutCustomerInput
    staffAppointments?: AppointmentCreateNestedManyWithoutStaffInput
    availability?: StaffAvailabilityCreateNestedManyWithoutStaffInput
    staffServices?: StaffServiceCreateNestedManyWithoutStaffInput
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    receivedReviews?: ReviewCreateNestedManyWithoutStaffInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerAppointments?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    staffAppointments?: AppointmentUncheckedCreateNestedManyWithoutStaffInput
    availability?: StaffAvailabilityUncheckedCreateNestedManyWithoutStaffInput
    staffServices?: StaffServiceUncheckedCreateNestedManyWithoutStaffInput
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutStaffInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReceivedReviewsInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerAppointments?: AppointmentCreateNestedManyWithoutCustomerInput
    staffAppointments?: AppointmentCreateNestedManyWithoutStaffInput
    availability?: StaffAvailabilityCreateNestedManyWithoutStaffInput
    staffServices?: StaffServiceCreateNestedManyWithoutStaffInput
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutCustomerInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedReviewsInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerAppointments?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    staffAppointments?: AppointmentUncheckedCreateNestedManyWithoutStaffInput
    availability?: StaffAvailabilityUncheckedCreateNestedManyWithoutStaffInput
    staffServices?: StaffServiceUncheckedCreateNestedManyWithoutStaffInput
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedReviewsInput, UserUncheckedCreateWithoutReceivedReviewsInput>
  }

  export type ServiceItemCreateWithoutReviewsInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    durationMinutes: number
    bufferMinutes?: number
    isActive?: boolean
    isOnline?: boolean
    maxAdvanceBooking?: number | null
    minAdvanceBooking?: number | null
    color?: string | null
    icon?: string | null
    tags?: ServiceItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    appointments?: AppointmentCreateNestedManyWithoutServiceInput
    staffServices?: StaffServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceItemUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    durationMinutes: number
    bufferMinutes?: number
    isActive?: boolean
    isOnline?: boolean
    maxAdvanceBooking?: number | null
    minAdvanceBooking?: number | null
    color?: string | null
    icon?: string | null
    tags?: ServiceItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutServiceInput
    staffServices?: StaffServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceItemCreateOrConnectWithoutReviewsInput = {
    where: ServiceItemWhereUniqueInput
    create: XOR<ServiceItemCreateWithoutReviewsInput, ServiceItemUncheckedCreateWithoutReviewsInput>
  }

  export type AppointmentUpsertWithoutReviewsInput = {
    update: XOR<AppointmentUpdateWithoutReviewsInput, AppointmentUncheckedUpdateWithoutReviewsInput>
    create: XOR<AppointmentCreateWithoutReviewsInput, AppointmentUncheckedCreateWithoutReviewsInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutReviewsInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutReviewsInput, AppointmentUncheckedUpdateWithoutReviewsInput>
  }

  export type AppointmentUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutCustomerAppointmentsNestedInput
    staff?: UserUpdateOneWithoutStaffAppointmentsNestedInput
    service?: ServiceItemUpdateOneRequiredWithoutAppointmentsNestedInput
    payments?: PaymentUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customerId?: StringFieldUpdateOperationsInput | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAppointments?: AppointmentUpdateManyWithoutCustomerNestedInput
    staffAppointments?: AppointmentUpdateManyWithoutStaffNestedInput
    availability?: StaffAvailabilityUpdateManyWithoutStaffNestedInput
    staffServices?: StaffServiceUpdateManyWithoutStaffNestedInput
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    receivedReviews?: ReviewUpdateManyWithoutStaffNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAppointments?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    staffAppointments?: AppointmentUncheckedUpdateManyWithoutStaffNestedInput
    availability?: StaffAvailabilityUncheckedUpdateManyWithoutStaffNestedInput
    staffServices?: StaffServiceUncheckedUpdateManyWithoutStaffNestedInput
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutStaffNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedReviewsInput = {
    update: XOR<UserUpdateWithoutReceivedReviewsInput, UserUncheckedUpdateWithoutReceivedReviewsInput>
    create: XOR<UserCreateWithoutReceivedReviewsInput, UserUncheckedCreateWithoutReceivedReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedReviewsInput, UserUncheckedUpdateWithoutReceivedReviewsInput>
  }

  export type UserUpdateWithoutReceivedReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAppointments?: AppointmentUpdateManyWithoutCustomerNestedInput
    staffAppointments?: AppointmentUpdateManyWithoutStaffNestedInput
    availability?: StaffAvailabilityUpdateManyWithoutStaffNestedInput
    staffServices?: StaffServiceUpdateManyWithoutStaffNestedInput
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAppointments?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    staffAppointments?: AppointmentUncheckedUpdateManyWithoutStaffNestedInput
    availability?: StaffAvailabilityUncheckedUpdateManyWithoutStaffNestedInput
    staffServices?: StaffServiceUncheckedUpdateManyWithoutStaffNestedInput
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ServiceItemUpsertWithoutReviewsInput = {
    update: XOR<ServiceItemUpdateWithoutReviewsInput, ServiceItemUncheckedUpdateWithoutReviewsInput>
    create: XOR<ServiceItemCreateWithoutReviewsInput, ServiceItemUncheckedCreateWithoutReviewsInput>
    where?: ServiceItemWhereInput
  }

  export type ServiceItemUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ServiceItemWhereInput
    data: XOR<ServiceItemUpdateWithoutReviewsInput, ServiceItemUncheckedUpdateWithoutReviewsInput>
  }

  export type ServiceItemUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    maxAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    minAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ServiceItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: AppointmentUpdateManyWithoutServiceNestedInput
    staffServices?: StaffServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceItemUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    maxAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    minAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ServiceItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutServiceNestedInput
    staffServices?: StaffServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type UserCreateWithoutCustomerAppointmentsInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    staffAppointments?: AppointmentCreateNestedManyWithoutStaffInput
    availability?: StaffAvailabilityCreateNestedManyWithoutStaffInput
    staffServices?: StaffServiceCreateNestedManyWithoutStaffInput
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutCustomerInput
    receivedReviews?: ReviewCreateNestedManyWithoutStaffInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCustomerAppointmentsInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    staffAppointments?: AppointmentUncheckedCreateNestedManyWithoutStaffInput
    availability?: StaffAvailabilityUncheckedCreateNestedManyWithoutStaffInput
    staffServices?: StaffServiceUncheckedCreateNestedManyWithoutStaffInput
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutStaffInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomerAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomerAppointmentsInput, UserUncheckedCreateWithoutCustomerAppointmentsInput>
  }

  export type UserCreateWithoutStaffAppointmentsInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerAppointments?: AppointmentCreateNestedManyWithoutCustomerInput
    availability?: StaffAvailabilityCreateNestedManyWithoutStaffInput
    staffServices?: StaffServiceCreateNestedManyWithoutStaffInput
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutCustomerInput
    receivedReviews?: ReviewCreateNestedManyWithoutStaffInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStaffAppointmentsInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerAppointments?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    availability?: StaffAvailabilityUncheckedCreateNestedManyWithoutStaffInput
    staffServices?: StaffServiceUncheckedCreateNestedManyWithoutStaffInput
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutStaffInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStaffAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStaffAppointmentsInput, UserUncheckedCreateWithoutStaffAppointmentsInput>
  }

  export type ServiceItemCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    durationMinutes: number
    bufferMinutes?: number
    isActive?: boolean
    isOnline?: boolean
    maxAdvanceBooking?: number | null
    minAdvanceBooking?: number | null
    color?: string | null
    icon?: string | null
    tags?: ServiceItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    staffServices?: StaffServiceCreateNestedManyWithoutServiceInput
    reviews?: ReviewCreateNestedManyWithoutServiceInput
  }

  export type ServiceItemUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    durationMinutes: number
    bufferMinutes?: number
    isActive?: boolean
    isOnline?: boolean
    maxAdvanceBooking?: number | null
    minAdvanceBooking?: number | null
    color?: string | null
    icon?: string | null
    tags?: ServiceItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    staffServices?: StaffServiceUncheckedCreateNestedManyWithoutServiceInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceItemCreateOrConnectWithoutAppointmentsInput = {
    where: ServiceItemWhereUniqueInput
    create: XOR<ServiceItemCreateWithoutAppointmentsInput, ServiceItemUncheckedCreateWithoutAppointmentsInput>
  }

  export type PaymentCreateWithoutAppointmentInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    paymentMethod: $Enums.PaymentMethod
    stripePaymentId?: string | null
    transactionId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutAppointmentInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    paymentMethod: $Enums.PaymentMethod
    stripePaymentId?: string | null
    transactionId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentCreateOrConnectWithoutAppointmentInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput>
  }

  export type PaymentCreateManyAppointmentInputEnvelope = {
    data: PaymentCreateManyAppointmentInput | PaymentCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutAppointmentInput = {
    id?: string
    title: string
    message: string
    type: $Enums.NotificationType
    channel: $Enums.NotificationChannel
    isRead?: boolean
    readAt?: Date | string | null
    scheduledFor?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutAppointmentInput = {
    id?: string
    userId: string
    title: string
    message: string
    type: $Enums.NotificationType
    channel: $Enums.NotificationChannel
    isRead?: boolean
    readAt?: Date | string | null
    scheduledFor?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type NotificationCreateOrConnectWithoutAppointmentInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput>
  }

  export type NotificationCreateManyAppointmentInputEnvelope = {
    data: NotificationCreateManyAppointmentInput | NotificationCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutAppointmentInput = {
    id?: string
    rating: number
    title?: string | null
    comment?: string | null
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customer: UserCreateNestedOneWithoutReviewsInput
    staff?: UserCreateNestedOneWithoutReceivedReviewsInput
    service: ServiceItemCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutAppointmentInput = {
    id?: string
    customerId: string
    staffId?: string | null
    serviceId: string
    rating: number
    title?: string | null
    comment?: string | null
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReviewCreateOrConnectWithoutAppointmentInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
  }

  export type ReviewCreateManyAppointmentInputEnvelope = {
    data: ReviewCreateManyAppointmentInput | ReviewCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCustomerAppointmentsInput = {
    update: XOR<UserUpdateWithoutCustomerAppointmentsInput, UserUncheckedUpdateWithoutCustomerAppointmentsInput>
    create: XOR<UserCreateWithoutCustomerAppointmentsInput, UserUncheckedCreateWithoutCustomerAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomerAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomerAppointmentsInput, UserUncheckedUpdateWithoutCustomerAppointmentsInput>
  }

  export type UserUpdateWithoutCustomerAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staffAppointments?: AppointmentUpdateManyWithoutStaffNestedInput
    availability?: StaffAvailabilityUpdateManyWithoutStaffNestedInput
    staffServices?: StaffServiceUpdateManyWithoutStaffNestedInput
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutCustomerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutStaffNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomerAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staffAppointments?: AppointmentUncheckedUpdateManyWithoutStaffNestedInput
    availability?: StaffAvailabilityUncheckedUpdateManyWithoutStaffNestedInput
    staffServices?: StaffServiceUncheckedUpdateManyWithoutStaffNestedInput
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutStaffNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutStaffAppointmentsInput = {
    update: XOR<UserUpdateWithoutStaffAppointmentsInput, UserUncheckedUpdateWithoutStaffAppointmentsInput>
    create: XOR<UserCreateWithoutStaffAppointmentsInput, UserUncheckedCreateWithoutStaffAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStaffAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStaffAppointmentsInput, UserUncheckedUpdateWithoutStaffAppointmentsInput>
  }

  export type UserUpdateWithoutStaffAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAppointments?: AppointmentUpdateManyWithoutCustomerNestedInput
    availability?: StaffAvailabilityUpdateManyWithoutStaffNestedInput
    staffServices?: StaffServiceUpdateManyWithoutStaffNestedInput
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutCustomerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutStaffNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStaffAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAppointments?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    availability?: StaffAvailabilityUncheckedUpdateManyWithoutStaffNestedInput
    staffServices?: StaffServiceUncheckedUpdateManyWithoutStaffNestedInput
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutStaffNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ServiceItemUpsertWithoutAppointmentsInput = {
    update: XOR<ServiceItemUpdateWithoutAppointmentsInput, ServiceItemUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<ServiceItemCreateWithoutAppointmentsInput, ServiceItemUncheckedCreateWithoutAppointmentsInput>
    where?: ServiceItemWhereInput
  }

  export type ServiceItemUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: ServiceItemWhereInput
    data: XOR<ServiceItemUpdateWithoutAppointmentsInput, ServiceItemUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ServiceItemUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    maxAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    minAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ServiceItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staffServices?: StaffServiceUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUpdateManyWithoutServiceNestedInput
  }

  export type ServiceItemUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    maxAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    minAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ServiceItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staffServices?: StaffServiceUncheckedUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutAppointmentInput, PaymentUncheckedUpdateWithoutAppointmentInput>
    create: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutAppointmentInput, PaymentUncheckedUpdateWithoutAppointmentInput>
  }

  export type PaymentUpdateManyWithWhereWithoutAppointmentInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutAppointmentInput, NotificationUncheckedUpdateWithoutAppointmentInput>
    create: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutAppointmentInput, NotificationUncheckedUpdateWithoutAppointmentInput>
  }

  export type NotificationUpdateManyWithWhereWithoutAppointmentInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutAppointmentInput, ReviewUncheckedUpdateWithoutAppointmentInput>
    create: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutAppointmentInput, ReviewUncheckedUpdateWithoutAppointmentInput>
  }

  export type ReviewUpdateManyWithWhereWithoutAppointmentInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type AppointmentCreateWithoutServiceInput = {
    id?: string
    scheduledDate: Date | string
    scheduledTime: string
    startTime: Date | string
    endTime: Date | string
    timezone?: string
    status?: $Enums.Status
    type?: $Enums.AppointmentType
    notes?: string | null
    internalNotes?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    discount?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customer: UserCreateNestedOneWithoutCustomerAppointmentsInput
    staff?: UserCreateNestedOneWithoutStaffAppointmentsInput
    payments?: PaymentCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationCreateNestedManyWithoutAppointmentInput
    reviews?: ReviewCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutServiceInput = {
    id?: string
    scheduledDate: Date | string
    scheduledTime: string
    startTime: Date | string
    endTime: Date | string
    timezone?: string
    status?: $Enums.Status
    type?: $Enums.AppointmentType
    notes?: string | null
    internalNotes?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    discount?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    customerId: string
    staffId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutServiceInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput>
  }

  export type AppointmentCreateManyServiceInputEnvelope = {
    data: AppointmentCreateManyServiceInput | AppointmentCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type StaffServiceCreateWithoutServiceInput = {
    id?: string
    customPrice?: Decimal | DecimalJsLike | number | string | null
    customDuration?: number | null
    isActive?: boolean
    isPreferred?: boolean
    skillLevel?: number
    experience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    staff: UserCreateNestedOneWithoutStaffServicesInput
  }

  export type StaffServiceUncheckedCreateWithoutServiceInput = {
    id?: string
    staffId: string
    customPrice?: Decimal | DecimalJsLike | number | string | null
    customDuration?: number | null
    isActive?: boolean
    isPreferred?: boolean
    skillLevel?: number
    experience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type StaffServiceCreateOrConnectWithoutServiceInput = {
    where: StaffServiceWhereUniqueInput
    create: XOR<StaffServiceCreateWithoutServiceInput, StaffServiceUncheckedCreateWithoutServiceInput>
  }

  export type StaffServiceCreateManyServiceInputEnvelope = {
    data: StaffServiceCreateManyServiceInput | StaffServiceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutServiceInput = {
    id?: string
    rating: number
    title?: string | null
    comment?: string | null
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    appointment: AppointmentCreateNestedOneWithoutReviewsInput
    customer: UserCreateNestedOneWithoutReviewsInput
    staff?: UserCreateNestedOneWithoutReceivedReviewsInput
  }

  export type ReviewUncheckedCreateWithoutServiceInput = {
    id?: string
    appointmentId: string
    customerId: string
    staffId?: string | null
    rating: number
    title?: string | null
    comment?: string | null
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReviewCreateOrConnectWithoutServiceInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutServiceInput, ReviewUncheckedCreateWithoutServiceInput>
  }

  export type ReviewCreateManyServiceInputEnvelope = {
    data: ReviewCreateManyServiceInput | ReviewCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutServiceInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutServiceInput, AppointmentUncheckedUpdateWithoutServiceInput>
    create: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutServiceInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutServiceInput, AppointmentUncheckedUpdateWithoutServiceInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutServiceInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutServiceInput>
  }

  export type StaffServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: StaffServiceWhereUniqueInput
    update: XOR<StaffServiceUpdateWithoutServiceInput, StaffServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<StaffServiceCreateWithoutServiceInput, StaffServiceUncheckedCreateWithoutServiceInput>
  }

  export type StaffServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: StaffServiceWhereUniqueInput
    data: XOR<StaffServiceUpdateWithoutServiceInput, StaffServiceUncheckedUpdateWithoutServiceInput>
  }

  export type StaffServiceUpdateManyWithWhereWithoutServiceInput = {
    where: StaffServiceScalarWhereInput
    data: XOR<StaffServiceUpdateManyMutationInput, StaffServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutServiceInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutServiceInput, ReviewUncheckedUpdateWithoutServiceInput>
    create: XOR<ReviewCreateWithoutServiceInput, ReviewUncheckedCreateWithoutServiceInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutServiceInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutServiceInput, ReviewUncheckedUpdateWithoutServiceInput>
  }

  export type ReviewUpdateManyWithWhereWithoutServiceInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutServiceInput>
  }

  export type UserCreateWithoutAvailabilityInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerAppointments?: AppointmentCreateNestedManyWithoutCustomerInput
    staffAppointments?: AppointmentCreateNestedManyWithoutStaffInput
    staffServices?: StaffServiceCreateNestedManyWithoutStaffInput
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutCustomerInput
    receivedReviews?: ReviewCreateNestedManyWithoutStaffInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAvailabilityInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerAppointments?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    staffAppointments?: AppointmentUncheckedCreateNestedManyWithoutStaffInput
    staffServices?: StaffServiceUncheckedCreateNestedManyWithoutStaffInput
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutStaffInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAvailabilityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
  }

  export type UserUpsertWithoutAvailabilityInput = {
    update: XOR<UserUpdateWithoutAvailabilityInput, UserUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAvailabilityInput, UserUncheckedUpdateWithoutAvailabilityInput>
  }

  export type UserUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAppointments?: AppointmentUpdateManyWithoutCustomerNestedInput
    staffAppointments?: AppointmentUpdateManyWithoutStaffNestedInput
    staffServices?: StaffServiceUpdateManyWithoutStaffNestedInput
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutCustomerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutStaffNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAppointments?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    staffAppointments?: AppointmentUncheckedUpdateManyWithoutStaffNestedInput
    staffServices?: StaffServiceUncheckedUpdateManyWithoutStaffNestedInput
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutStaffNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStaffServicesInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerAppointments?: AppointmentCreateNestedManyWithoutCustomerInput
    staffAppointments?: AppointmentCreateNestedManyWithoutStaffInput
    availability?: StaffAvailabilityCreateNestedManyWithoutStaffInput
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutCustomerInput
    receivedReviews?: ReviewCreateNestedManyWithoutStaffInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStaffServicesInput = {
    id?: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    avatar?: string | null
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    isActive?: boolean
    isVerified?: boolean
    verifiedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    timezone?: string
    language?: string
    currency?: string
    emailNotifications?: boolean
    smsNotifications?: boolean
    pushNotifications?: boolean
    passwordResetToken?: string | null
    passwordResetTokenExpiresAt?: Date | string | null
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerAppointments?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    staffAppointments?: AppointmentUncheckedCreateNestedManyWithoutStaffInput
    availability?: StaffAvailabilityUncheckedCreateNestedManyWithoutStaffInput
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutStaffInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStaffServicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStaffServicesInput, UserUncheckedCreateWithoutStaffServicesInput>
  }

  export type ServiceItemCreateWithoutStaffServicesInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    durationMinutes: number
    bufferMinutes?: number
    isActive?: boolean
    isOnline?: boolean
    maxAdvanceBooking?: number | null
    minAdvanceBooking?: number | null
    color?: string | null
    icon?: string | null
    tags?: ServiceItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    appointments?: AppointmentCreateNestedManyWithoutServiceInput
    reviews?: ReviewCreateNestedManyWithoutServiceInput
  }

  export type ServiceItemUncheckedCreateWithoutStaffServicesInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    currency?: string
    durationMinutes: number
    bufferMinutes?: number
    isActive?: boolean
    isOnline?: boolean
    maxAdvanceBooking?: number | null
    minAdvanceBooking?: number | null
    color?: string | null
    icon?: string | null
    tags?: ServiceItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutServiceInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceItemCreateOrConnectWithoutStaffServicesInput = {
    where: ServiceItemWhereUniqueInput
    create: XOR<ServiceItemCreateWithoutStaffServicesInput, ServiceItemUncheckedCreateWithoutStaffServicesInput>
  }

  export type UserUpsertWithoutStaffServicesInput = {
    update: XOR<UserUpdateWithoutStaffServicesInput, UserUncheckedUpdateWithoutStaffServicesInput>
    create: XOR<UserCreateWithoutStaffServicesInput, UserUncheckedCreateWithoutStaffServicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStaffServicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStaffServicesInput, UserUncheckedUpdateWithoutStaffServicesInput>
  }

  export type UserUpdateWithoutStaffServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAppointments?: AppointmentUpdateManyWithoutCustomerNestedInput
    staffAppointments?: AppointmentUpdateManyWithoutStaffNestedInput
    availability?: StaffAvailabilityUpdateManyWithoutStaffNestedInput
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutCustomerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutStaffNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStaffServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    smsNotifications?: BoolFieldUpdateOperationsInput | boolean
    pushNotifications?: BoolFieldUpdateOperationsInput | boolean
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerAppointments?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    staffAppointments?: AppointmentUncheckedUpdateManyWithoutStaffNestedInput
    availability?: StaffAvailabilityUncheckedUpdateManyWithoutStaffNestedInput
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutStaffNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ServiceItemUpsertWithoutStaffServicesInput = {
    update: XOR<ServiceItemUpdateWithoutStaffServicesInput, ServiceItemUncheckedUpdateWithoutStaffServicesInput>
    create: XOR<ServiceItemCreateWithoutStaffServicesInput, ServiceItemUncheckedCreateWithoutStaffServicesInput>
    where?: ServiceItemWhereInput
  }

  export type ServiceItemUpdateToOneWithWhereWithoutStaffServicesInput = {
    where?: ServiceItemWhereInput
    data: XOR<ServiceItemUpdateWithoutStaffServicesInput, ServiceItemUncheckedUpdateWithoutStaffServicesInput>
  }

  export type ServiceItemUpdateWithoutStaffServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    maxAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    minAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ServiceItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: AppointmentUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUpdateManyWithoutServiceNestedInput
  }

  export type ServiceItemUncheckedUpdateWithoutStaffServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    maxAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    minAdvanceBooking?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ServiceItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type AppointmentCreateManyCustomerInput = {
    id?: string
    scheduledDate: Date | string
    scheduledTime: string
    startTime: Date | string
    endTime: Date | string
    timezone?: string
    status?: $Enums.Status
    type?: $Enums.AppointmentType
    notes?: string | null
    internalNotes?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    discount?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    staffId?: string | null
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AppointmentCreateManyStaffInput = {
    id?: string
    scheduledDate: Date | string
    scheduledTime: string
    startTime: Date | string
    endTime: Date | string
    timezone?: string
    status?: $Enums.Status
    type?: $Enums.AppointmentType
    notes?: string | null
    internalNotes?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    discount?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    customerId: string
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type StaffAvailabilityCreateManyStaffInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    specificDate?: Date | string | null
    isAvailable?: boolean
    breakStartTime?: string | null
    breakEndTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type StaffServiceCreateManyStaffInput = {
    id?: string
    serviceId: string
    customPrice?: Decimal | DecimalJsLike | number | string | null
    customDuration?: number | null
    isActive?: boolean
    isPreferred?: boolean
    skillLevel?: number
    experience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserSessionCreateManyUserInput = {
    id?: string
    refreshToken: string
    userAgent?: string | null
    ipAddress?: string | null
    isActive?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
    updatedAt?: Date | string
    lastUsedAt?: Date | string | null
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    appointmentId?: string | null
    title: string
    message: string
    type: $Enums.NotificationType
    channel: $Enums.NotificationChannel
    isRead?: boolean
    readAt?: Date | string | null
    scheduledFor?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReviewCreateManyCustomerInput = {
    id?: string
    appointmentId: string
    staffId?: string | null
    serviceId: string
    rating: number
    title?: string | null
    comment?: string | null
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReviewCreateManyStaffInput = {
    id?: string
    appointmentId: string
    customerId: string
    serviceId: string
    rating: number
    title?: string | null
    comment?: string | null
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    appointmentId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    paymentMethod: $Enums.PaymentMethod
    stripePaymentId?: string | null
    transactionId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AppointmentUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff?: UserUpdateOneWithoutStaffAppointmentsNestedInput
    service?: ServiceItemUpdateOneRequiredWithoutAppointmentsNestedInput
    payments?: PaymentUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUpdateManyWithoutAppointmentNestedInput
    reviews?: ReviewUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutCustomerAppointmentsNestedInput
    service?: ServiceItemUpdateOneRequiredWithoutAppointmentsNestedInput
    payments?: PaymentUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUpdateManyWithoutAppointmentNestedInput
    reviews?: ReviewUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffAvailabilityUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    breakStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    breakEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffAvailabilityUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    breakStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    breakEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffAvailabilityUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    specificDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    breakStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    breakEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffServiceUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    customDuration?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPreferred?: BoolFieldUpdateOperationsInput | boolean
    skillLevel?: IntFieldUpdateOperationsInput | number
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service?: ServiceItemUpdateOneRequiredWithoutStaffServicesNestedInput
  }

  export type StaffServiceUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    customDuration?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPreferred?: BoolFieldUpdateOperationsInput | boolean
    skillLevel?: IntFieldUpdateOperationsInput | number
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffServiceUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    customDuration?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPreferred?: BoolFieldUpdateOperationsInput | boolean
    skillLevel?: IntFieldUpdateOperationsInput | number
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUpdateOneRequiredWithoutReviewsNestedInput
    staff?: UserUpdateOneWithoutReceivedReviewsNestedInput
    service?: ServiceItemUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUpdateOneRequiredWithoutReviewsNestedInput
    customer?: UserUpdateOneRequiredWithoutReviewsNestedInput
    service?: ServiceItemUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateManyAppointmentInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    paymentMethod: $Enums.PaymentMethod
    stripePaymentId?: string | null
    transactionId?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type NotificationCreateManyAppointmentInput = {
    id?: string
    userId: string
    title: string
    message: string
    type: $Enums.NotificationType
    channel: $Enums.NotificationChannel
    isRead?: boolean
    readAt?: Date | string | null
    scheduledFor?: Date | string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReviewCreateManyAppointmentInput = {
    id?: string
    customerId: string
    staffId?: string | null
    serviceId: string
    rating: number
    title?: string | null
    comment?: string | null
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutReviewsNestedInput
    staff?: UserUpdateOneWithoutReceivedReviewsNestedInput
    service?: ServiceItemUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentCreateManyServiceInput = {
    id?: string
    scheduledDate: Date | string
    scheduledTime: string
    startTime: Date | string
    endTime: Date | string
    timezone?: string
    status?: $Enums.Status
    type?: $Enums.AppointmentType
    notes?: string | null
    internalNotes?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    discount?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    customerId: string
    staffId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type StaffServiceCreateManyServiceInput = {
    id?: string
    staffId: string
    customPrice?: Decimal | DecimalJsLike | number | string | null
    customDuration?: number | null
    isActive?: boolean
    isPreferred?: boolean
    skillLevel?: number
    experience?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReviewCreateManyServiceInput = {
    id?: string
    appointmentId: string
    customerId: string
    staffId?: string | null
    rating: number
    title?: string | null
    comment?: string | null
    isApproved?: boolean
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AppointmentUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutCustomerAppointmentsNestedInput
    staff?: UserUpdateOneWithoutStaffAppointmentsNestedInput
    payments?: PaymentUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUpdateManyWithoutAppointmentNestedInput
    reviews?: ReviewUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customerId?: StringFieldUpdateOperationsInput | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    internalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customerId?: StringFieldUpdateOperationsInput | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffServiceUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    customDuration?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPreferred?: BoolFieldUpdateOperationsInput | boolean
    skillLevel?: IntFieldUpdateOperationsInput | number
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff?: UserUpdateOneRequiredWithoutStaffServicesNestedInput
  }

  export type StaffServiceUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    customDuration?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPreferred?: BoolFieldUpdateOperationsInput | boolean
    skillLevel?: IntFieldUpdateOperationsInput | number
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffServiceUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    customDuration?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPreferred?: BoolFieldUpdateOperationsInput | boolean
    skillLevel?: IntFieldUpdateOperationsInput | number
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointment?: AppointmentUpdateOneRequiredWithoutReviewsNestedInput
    customer?: UserUpdateOneRequiredWithoutReviewsNestedInput
    staff?: UserUpdateOneWithoutReceivedReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



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