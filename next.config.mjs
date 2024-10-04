/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => {
        return [
                {
                    source: "/",
                    destination: "/home" 
                },
                {
                    source: "/mathmatics", 
                    destination: "/maths"
                },
                {
                    source: "/reused-function", 
                    destination: "/generalFunction"
                },
                {
                    source: "/fetch-data",
                    destination: "/fetchPage"

                },
                {
                    source: "/fetch-data-axios",
                    destination: "/axiosPage"
                },
                {
                    source: "/fetch-server-side",
                    destination: "/server-side-page"
                }
            ]
        
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'rickandmortyapi.com',
          },
        ],
      },

};

export default nextConfig;
