"use server"

import ImageKit from "imagekit"

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

export type LoginResult = {
  success: boolean;
  error?: string;
  user?: {
    id: string;
    username: string;
    email: string;
  };
};

export const login = async (formData: FormData): Promise<LoginResult> => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    // Validate input
    if (!email || !email.trim()) {
      return {
        success: false,
        error: "Email is required",
      };
    }

    if (!password || !password.trim()) {
      return {
        success: false,
        error: "Password is required",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Invalid email format",
      };
    }

    // TODO: Replace with actual authentication logic
    // This is a placeholder for demonstration
    const response = await fetch(`${process.env.API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      if (response.status === 401) {
        return {
          success: false,
          error: "Invalid email or password",
        };
      }
      if (response.status === 429) {
        return {
          success: false,
          error: "Too many login attempts. Please try again later",
        };
      }
      return {
        success: false,
        error: "Authentication failed. Please try again",
      };
    }

    const data = await response.json();

    return {
      success: true,
      user: {
        id: data.id,
        username: data.username,
        email: data.email,
      },
    };
  } catch (error) {
    console.error("Login error:", error);

    if (error instanceof TypeError && error.message.includes("fetch")) {
      return {
        success: false,
        error: "Network error. Please check your connection",
      };
    }

    return {
      success: false,
      error: "An unexpected error occurred. Please try again",
    };
  }
};

export const shareAction = async (formData: FormData) => {
  const desc = formData.get("desc") as string;
  const media = formData.get("media") as File | null;

  if (media) {
    const bytes = await media?.arrayBuffer();
    const buffer = Buffer.from(bytes);
    imagekit.upload({
      file: buffer,
      fileName: media.name,
      folder: "/posts",
      transformation: {
        pre: "w-600",
      }
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }
};