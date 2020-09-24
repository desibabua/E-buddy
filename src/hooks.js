import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getFetch } from './api/reqAPIs';

const useUser = () => {
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getFetch('/api/getUser').then((user) => user.name && setUser(user));
  }, [history]);

  return user;
};

export default useUser;
