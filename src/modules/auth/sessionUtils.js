const SESSION_KEY = "userSession";

// Save user session data to local storage
export const saveSession = (userData) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(userData));
};

// Retrieve user session data from local storage
export const getSession = () => {
  const sessionData = localStorage.getItem(SESSION_KEY);
  return sessionData ? JSON.parse(sessionData) : null;
};

// Clear user session data from local storage
export const clearSession = () => {
  localStorage.removeItem(SESSION_KEY);
};
