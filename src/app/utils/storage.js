export const setToLS = (key, value) => {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
};

export const getFromLS = (key) => {
    if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }
    return null;
};
