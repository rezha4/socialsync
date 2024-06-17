import { auth } from "@/auth";

const Profile = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <div>
      <p>user email: {user?.email}</p>
      <p>user id: {user?.id}</p>
      <p>user name: {user?.name}</p>
    </div>
  )
}

export default Profile
