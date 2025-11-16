import { UserData, UserModalProps } from "@/alx-project-0x01/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: { name: "", catchPhrase: "", bs: "" },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value } as UserData));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input className="w-full px-4 py-2 border rounded-lg" placeholder="Name" name="name" value={user.name} onChange={handleChange} />
          <input className="w-full px-4 py-2 border rounded-lg" placeholder="Username" name="username" value={user.username} onChange={handleChange} />
          <input className="w-full px-4 py-2 border rounded-lg" placeholder="Email" name="email" value={user.email} onChange={handleChange} />
          <input className="w-full px-4 py-2 border rounded-lg" placeholder="Phone" name="phone" value={user.phone} onChange={handleChange} />
          <input className="w-full px-4 py-2 border rounded-lg" placeholder="Website" name="website" value={user.website} onChange={handleChange} />
          <div className="flex justify-between items-center pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;


