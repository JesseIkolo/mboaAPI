import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoCheckmarkCircle, IoWarning, IoClose, IoInformationCircle } from 'react-icons/io5';

export const NotificationTypes = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
};

const NotificationIcons = {
  [NotificationTypes.SUCCESS]: IoCheckmarkCircle,
  [NotificationTypes.ERROR]: IoWarning,
  [NotificationTypes.WARNING]: IoWarning,
  [NotificationTypes.INFO]: IoInformationCircle
};

const NotificationColors = {
  [NotificationTypes.SUCCESS]: 'bg-green-50 text-green-800 border-green-200',
  [NotificationTypes.ERROR]: 'bg-red-50 text-red-800 border-red-200',
  [NotificationTypes.WARNING]: 'bg-orange-50 text-orange-800 border-orange-200',
  [NotificationTypes.INFO]: 'bg-blue-50 text-blue-800 border-blue-200'
};

export const Notification = ({ message, type = NotificationTypes.INFO, onClose, duration = 5000 }) => {
  const Icon = NotificationIcons[type];

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, x: 50 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -50, x: 50 }}
      className={`fixed top-4 right-4 z-50 flex items-center p-4 rounded-lg border ${NotificationColors[type]} shadow-lg max-w-md`}
    >
      <Icon className="w-6 h-6 mr-3" />
      <p className="flex-1">{message}</p>
      <button
        onClick={onClose}
        className="ml-4 p-1 hover:bg-black hover:bg-opacity-10 rounded-full transition-colors"
      >
        <IoClose className="w-5 h-5" />
      </button>
    </motion.div>
  );
}; 