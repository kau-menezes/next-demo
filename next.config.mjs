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
                }
            ]
        
    }

};

export default nextConfig;
