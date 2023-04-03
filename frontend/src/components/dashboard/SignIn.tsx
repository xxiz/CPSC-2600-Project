type SignInProps = {
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  username: string;
};
function SignIn({ handleLogin, setUsername, username }: SignInProps) {
  return (
    <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">
            Sign In
          </h2>
        </div>
        <form className="mt-5 space-y-6" onSubmit={handleLogin}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="Username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              // block w-full rounded bg-red-600 px-12 py-3 text-md font-medium text-white shadow  sm:w-auto
              className="relative flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md group hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500"
            >
              Sign In
            </button>
          </div>
        </form>

        <p className="text-center text-gray-400">
          This application does not take into account proper implementations of
          authentication and security.
        </p>
      </div>
    </div>
  );
}

export default SignIn;