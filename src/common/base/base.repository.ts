export abstract class BaseRepository<T> {
  abstract findMany(args: any): Promise<T[]>;
  abstract findUnique(args: any): Promise<T | null>;
  abstract findFirst(args: any): Promise<T | null>;
  abstract create(data: any): Promise<T>;
  abstract update(id: string, data: any): Promise<void>;
  abstract deactivate(id: string): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract exists(id: string): Promise<boolean>;
  abstract count(where: any): Promise<number>;
  abstract restore(id: string): Promise<T>;
}
