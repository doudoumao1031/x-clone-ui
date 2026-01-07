"use server"

import { imagekit } from "@/utils";

export const shareAction = async (
  formData: FormData,
  settings: { type: "original" | "wide" | "square"; sensitive: boolean }
) => {
  const desc = formData.get("desc") as string;
  const media = formData.get("media") as File | null;

  if (media) {
    const bytes = await media?.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const transformation = `
      w-600,
      ${settings.type === "square" 
        ? "ar-1-1" 
        : settings.type === "wide" 
        ? "ar-16-9" 
        : ""}
    `;
    imagekit.upload({
      file: buffer,
      fileName: media.name,
      folder: "/posts",
      ...(media.type.includes("image") && {
        transformation: {
          pre: transformation,
        }
      }),
      customMetadata: {
        sensitive: settings.sensitive,
      },
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }
};