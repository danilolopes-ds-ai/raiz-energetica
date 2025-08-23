export const initClarity = () => {
  if (process.env.NODE_ENV === 'production' && typeof window.clarity === 'function') {
    console.log("Clarity tracking is active.");
  }
};