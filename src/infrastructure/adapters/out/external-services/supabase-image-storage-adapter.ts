import { ImageStoragePort } from "@/application/ports/out/image-storage-port";
import { createClient } from "@supabase/supabase-js";

export class SupabaseImageStorageAdapter implements ImageStoragePort {
  private supabase;

  constructor() {
    this.supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }

  async uploadImage(file: File | Blob, path: string): Promise<string> {
    const { data, error } = await this.supabase.storage
      .from("todo-images")
      .upload(path, file);

    if (error) {
      throw new Error(`Failed to upload image: ${error.message}`);
    }

    const {
      data: { publicUrl },
    } = this.supabase.storage.from("todo-images").getPublicUrl(data.path);

    return publicUrl;
  }

  async deleteImage(path: string): Promise<void> {
    const { error } = await this.supabase.storage
      .from("todo-images")
      .remove([path]);

    if (error) {
      throw new Error(`Failed to delete image: ${error.message}`);
    }
  }
}
