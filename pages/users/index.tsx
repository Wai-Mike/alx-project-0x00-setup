import Header from "@/alx-project-0x01/components/layout/Header";
import { UserProps } from "@/alx-project-0x01/interfaces";
import UserCard from "@/alx-project-0x01/components/common/UserCard";

const Users: React.FC<UserProps[]> = ({ posts }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Users</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {posts?.map((user: UserProps, key: number) => (
            <UserCard key={key} user={user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;


