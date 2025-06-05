const UserInfo = ({ name, email }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-gray-500">{email}</div>
      </div>
    </div>
  );
};

export default UserInfo;