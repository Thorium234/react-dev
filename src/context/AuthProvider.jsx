import { useState } from 'react';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedEmail = localStorage.getItem('quiz_current_user');
    if (storedEmail) {
      const users = JSON.parse(localStorage.getItem('quiz_users') || '[]');
      return users.find(u => u.email === storedEmail) || null;
    }
    return null;
  });

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('quiz_users') || '[]');
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'An account with this email already exists' };
    }
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('quiz_users', JSON.stringify(users));
    localStorage.setItem('quiz_current_user', email);
    setUser(newUser);
    return { success: true };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('quiz_users') || '[]');
    const found = users.find(u => u.email === email && u.password === password);
    if (!found) {
      return { success: false, error: 'Invalid email or password' };
    }
    localStorage.setItem('quiz_current_user', email);
    setUser(found);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem('quiz_current_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
