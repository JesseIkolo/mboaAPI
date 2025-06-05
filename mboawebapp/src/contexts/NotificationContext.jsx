import React, { createContext, useContext, useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Notification, NotificationTypes } from '../Components/Notification/index';

const NotificationContext = createContext(null);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification doit être utilisé dans un NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const showNotification = useCallback((message, type = NotificationTypes.INFO) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
  }, []);

  const closeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  const showError = useCallback((message) => {
    showNotification(message, NotificationTypes.ERROR);
  }, [showNotification]);

  const showSuccess = useCallback((message) => {
    showNotification(message, NotificationTypes.SUCCESS);
  }, [showNotification]);

  const showInfo = useCallback((message) => {
    showNotification(message, NotificationTypes.INFO);
  }, [showNotification]);

  return (
    <NotificationContext.Provider value={{ showNotification, showError, showSuccess, showInfo }}>
      {children}
      <AnimatePresence>
        {notifications.map(({ id, message, type }) => (
          <Notification
            key={id}
            message={message}
            type={type}
            onClose={() => closeNotification(id)}
          />
        ))}
      </AnimatePresence>
    </NotificationContext.Provider>
  );
}; 