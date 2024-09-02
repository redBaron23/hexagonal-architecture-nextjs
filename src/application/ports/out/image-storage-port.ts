export interface ImageStoragePort {
  uploadImage(file: File | Blob, path: string): Promise<string>;
  deleteImage(path: string): Promise<void>;
}
