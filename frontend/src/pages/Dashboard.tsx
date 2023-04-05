import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { IUser } from "../types";
import toast, { Toaster } from "react-hot-toast";
import SignIn from "../components/dashboard/SignIn";
import Profile from "../components/dashboard/Profile";

function Dashboard() {
  const [user, setUser] = useState<IUser | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  const [username, setUsername] = useState("");

  useEffect(() => {
    if (user) {
      const fetchUser = async () => {
        const endpoint = "http://localhost:3541/api/v1/users/" + user?.username;

        const response = await fetch(endpoint, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          const { data: user } = await response.json();
          setUser(user);
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          const error = await response.json();
          toast.error("Error while updating user: " + error.message, {
            position: "top-center",
            style: {
              width: "100%",
            },
            duration: 2000,
          });
        }
      };
      fetchUser();
    }
  }, [user]);
      

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const endpoint = "http://localhost:3541/api/v1/users/" + user?.username;

    const response = await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status === 200) {
      const { data: user } = await response.json();
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Profile Updated!", {
        position: "top-right",
      });
    } else {
      const error = await response.json();
      toast.error("Error while updating user: " + error.message, {
        position: "top-center",
        style: {
          width: "100%",
        },
        duration: 2000,
      });
    }

    const response2 = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response2.status === 200) {
      const { data: user } = await response2.json();
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      const error = await response2.json();
      toast.error("Error while updating user: " + error.message, {
        position: "top-center",
        style: {
          width: "100%",
        },
        duration: 2000,
      });
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const endpoint = "http://localhost:3541/api/v1/users/" + username;
    console.log(endpoint);

    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const { data: user } = await response.json();
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("It's good to see you again " + user.username + "!", {
        position: "top-right",
      });
    } else if (response.status === 404) {
      const endpoint = "http://localhost:3541/api/v1/users";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          notification: true,
        }),
      });

      if (response.status === 201) {
        const { data: user } = await response.json();
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Welcome to SalesScout " + user.username + "!", {
          position: "top-right",
        });
      } else {
        const error = await response.json();
        toast.error("Error while creating user: " + error.message, {
          position: "top-center",
          style: {
            width: "100%",
          },
          duration: 2000,
        });
      }
    } else {
      const error = await response.json();

      toast.error("Try Again Later! " + error.message, {
        position: "top-center",
        style: {
          width: "100%",
        },
        duration: 2000,
      });
    }
  };

  return (
    <Layout title="Dashboard">
      <Toaster />
      <div className="max-w-screen-xl px-4 py-10 mx-auto">
        {!user ? (
          <SignIn
            username={username}
            setUsername={setUsername}
            handleLogin={handleLogin}
          />
        ) : (
          <Profile user={user} setUser={setUser} updateUser={handleUpdate} />
        )}
      </div>
    </Layout>
  );
}

export default Dashboard;
