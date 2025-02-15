/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "m.media-amazon.com",
      "www.abc.es",
      "acdn.mitiendanube.com",
      "images.theconversation.com",
      "plus.unsplash.com",
      "images.unsplash.com",
      "dms.deckers.com",
      "assets.wfcdn.com",
    ],
  },
  theme: {
    extend: {
      screens: {
        "custom-sm": "520px",
      },
    },
  },
};

export default nextConfig;
