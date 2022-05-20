import createCache from '@emotion/cache';

const createEmotionCache = () => {
    return createCache({
        key: 'css-cache'
    });
}

export default createEmotionCache;