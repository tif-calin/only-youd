import { useContext, createContext, useEffect, useState } from 'react';

const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://only-youd.vercel.app'
  : 'http://localhost:3000'
;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [bank, setBank] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/api/questions`)
      .then(res => res.json())
      .then(data => {
        setBank(data?.map(q => q.question) || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
    ;
  }, []);

  return (
    <AppContext.Provider value={{ bank, loading }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  const { bank, loading } = useContext(AppContext);

  return { bank, loading };
};

export default useApp;
export { AppProvider };
