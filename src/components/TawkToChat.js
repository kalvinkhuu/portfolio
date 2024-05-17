import { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = process.env.TAWK_TO_KEY;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.head.appendChild(s1);
  }, []);

  return null;
};

export default TawkToChat;