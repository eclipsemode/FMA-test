import React from 'react';
import ContentLoader from "react-content-loader";

const AuthButtonLoader = () => {
    return (
        <ContentLoader
            speed={2}
            width={32}
            height={32}
            viewBox="0 0 32 32"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="100" ry="100" width="32" height="32" />
        </ContentLoader>
    );
};

export default AuthButtonLoader;
