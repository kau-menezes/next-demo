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
                }
            ]
        
    }

};

export default nextConfig;
