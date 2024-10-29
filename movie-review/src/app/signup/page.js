import Signup from "./components/SignUp";

function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen">
      <div className="text-center text-2xl">Welcome to Worth-a-Share</div>
      <Signup />
    </div>
  );
}

export default page;
