import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";

const NavBar = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <nav className="navbar px-8">
      <div className="flex-1">
        <Link href="/" className="text-xl">
          SocialSync
        </Link>
      </div>
      {user ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="profile pic"
                src={user.image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32"
          >
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit">Sign Out</button>
              </form>
            </li>
          </ul>
        </div>
      ) : (
        <SignInButton />
      )}
    </nav>
  );
};

const SignInButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <button type="submit" className="btn btn-sm">
        Sign In
      </button>
    </form>
  );
};

export default NavBar;
