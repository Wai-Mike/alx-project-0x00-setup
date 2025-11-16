import { UserProps } from "@/alx-project-0x01/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow border">
      <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
      <p className="text-gray-600">@{user.username}</p>
      <p className="text-gray-600 mt-1">{user.email}</p>
      <p className="text-gray-600 mt-1">{user.phone}</p>
      <p className="text-gray-600 mt-1">{user.website}</p>
      <div className="mt-2 text-sm text-gray-500">
        <p>
          {user.address.street}, {user.address.suite}, {user.address.city}{" "}
          {user.address.zipcode}
        </p>
        <p>Company: {user.company.name}</p>
      </div>
    </div>
  );
};

export default UserCard;


