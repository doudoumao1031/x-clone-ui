"use client"
import { IKVideo } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type VideoTypes = {
  path: string;
  className?: string;
}

export default function Video({path, className}: VideoTypes) {
  return (
    // https://ik.imagekit.io/7dsksmgp9/tr:w-1920,h-1080,q-90:l-text,is-lamadev,fs-100,co-white,l-end/posts/video_small_GrfPYRQr7.mp4
    <IKVideo 
      urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT} 
      path={path} 
      className={className} 
      // width={1920}
      // height={1080}
      transformation={[
        {width: "1920", height: "1080", quality: 90},
        // {raw: "l-image,lx-100,ly-200,i-logo.png,l-end"}
      ]} 
      controls
    />
  )
}
