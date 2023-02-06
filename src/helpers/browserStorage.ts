/**
 * This module is deprecated.
 * 
 * These functions are simplified and adapted version of the functionality of: 
 * > https://usehooks-ts.com/react-hook/use-local-storage
 * 
 * The original code is licensed under the MIT license.
 */
function getLocalStorage<T>(storageKey: string, initValue: T): T {
    if (typeof window === "undefined") return initValue;

    try {
        const item = window.localStorage.getItem(storageKey);
        return item ? (JSON.parse(item) as T) : initValue;
    } catch (error) {
        console.warn(`Error reading localStorage key "${storageKey}":`, error);
        return initValue;
    }
}

function setLocalStorage<T>(storageKey: string, newValue: T): void {
    if (typeof window === "undefined") {
        console.warn(
            `Tried setting localStorage key "${storageKey}"` +
            `even though environment is not a client.`
        );
    }

    try {
        // Save to local storage
        window.localStorage.setItem(storageKey, JSON.stringify(newValue));
        // We dispatch a custom event so every useLocalStorage hook are notified
        window.dispatchEvent(new Event("local-storage"));
    } catch (error) {
        console.warn(`Error setting localStorage key “${storageKey}”:`, error);
    }
}

function getSessionStorage<T>(storageKey: string, initValue: T): T {
    if (typeof window === "undefined") return initValue;

    try {
        const item = window.sessionStorage.getItem(storageKey);
        return item ? (JSON.parse(item) as T) : initValue;
    } catch (error) {
        console.warn(`Error reading sessionStorage key "${storageKey}":`, error);
        return initValue;
    }
}

function setSessionStorage<T>(storageKey: string, newValue: T): void {
    if (typeof window === "undefined") {
        console.warn(
            `Tried setting sessionStorage key "${storageKey}"` +
            `even though environment is not a client.`
        );
    }

    try {
        // Save to session storage
        window.sessionStorage.setItem(storageKey, JSON.stringify(newValue));
        // We dispatch a custom event so every use...
        window.dispatchEvent(new Event("session-storage"));
    } catch (error) {
        console.warn(`Error setting sessionStorage key “${storageKey}”:`, error);
    }
}

export {
    getLocalStorage,
    setLocalStorage,
    getSessionStorage,
    setSessionStorage
};