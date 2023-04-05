import { Icon } from "@iconify/react";
import toast, { Toaster } from "react-hot-toast";
import { IUser } from "../../types";
import React from "react";

type ProfileProps = {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  updateUser: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

function Profile({ user, setUser, updateUser }: ProfileProps) {

  const testWebhook = async () => {
    const endpoint = "http://localhost:3000/api/v1/notify/test";

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        webhook_url: user.webhook_url,
      }),
    });

    const promise = await res.json();

    if (promise.success) {
      toast.success("Webhook is working!", {
        position: "top-right",
      });
    } else {
      toast.error("Webhook is not working!", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
      <Toaster />
      <div className="w-full space-y-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900">
            Profile
          </h2>
          <div className="flex flex-col mb-5 space-y-1">
            <label
              htmlFor="username"
              className="text-sm font-semibold text-gray-500"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="w-full px-4 py-2 text-gray-500 border border-gray-200 rounded-md cursor-not-allowed focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              defaultValue={user.username}
              disabled
              title="You can't change your username"
            />
          </div>
          <form onSubmit={updateUser}>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="webhook"
                  className="text-sm font-semibold text-gray-600"
                >
                  Webhook URL
                </label>
                <input
                  type="text"
                  name="webhook_url"
                  id="webhook_url"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  defaultValue={user.webhook_url}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      webhook_url: e.target.value,
                    });
                  }}
                />

                <button
                  type="button"
                  className="mx-auto text-sm font-semibold text-red-600 hover:text-red-500 focus:outline-none focus:text-red-500"
                  onClick={testWebhook}
                >
                  Click here to test your webhook
                </button>
              </div>
              {/* checkbox */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="notifications"
                    id="notifications"
                    className="w-4 h-4 text-red-600 border-gray-300 rounded cursor-pointer focus:ring-red-500"
                    checked={user.notification}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        notification: e.target.checked,
                      });
                    }}
                  />
                  <label
                    htmlFor="notifications"
                    className="text-sm font-semibold text-gray-600 cursor-pointer"
                  >
                    Enable notifications
                  </label>
                </div>
              </div>
              {/* update buttom */}
              <div className="flex flex-col space-y-1">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>

        <div>
          <div className="mt-10 space-y-4">
            <div className="max-w-lg mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900">
                History
              </h2>
              {user.history && user.history.length > 0 ? (
                <div className="flex flex-col space-y-4">
                  {user.history.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col p-4 mt-2 space-y-2 bg-white rounded-md shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <a
                            className="text-sm font-medium text-gray-600"
                            href={item.url}
                          >
                            {item.title.length > 50 ? item.title.substring(0, 50) + `...` : item.title}
                          </a>
                        </div>
                        <span className="flex items-center text-sm font-semibold text-center text-gray-600">
                          <Icon icon="bxs:upvote" className="mr-1" /> {item.votes}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col p-4 mt-4 space-y-2 bg-white rounded-md shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold text-gray-600">
                          No history
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
