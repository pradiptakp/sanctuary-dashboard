/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import Input from "../../components/Input";
import { useDispatch } from "react-redux";
import { getUser, postUser, updateUser } from "../../redux/actions/userActions";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const CreateUser = () => {
  const { id } = useParams<{ id: string }>();

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [verifPassword, setVerifPassword] = React.useState("");
  // const [admin, setAdmin] = React.useState(false);
  const [valid, setValid] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    if (
      username &&
      username !== "" &&
      (id || (email && email !== "")) &&
      password &&
      password !== "" &&
      verifPassword &&
      verifPassword !== ""
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
    return () => {};
  }, [username, password, verifPassword, email]);

  React.useEffect(() => {
    if (id) {
      dispatch(
        getUser.request({
          id,
          onSuccess: (res) => {
            setUsername(res.username);
          },
          onFailure: () => {
            toast.error("Error");
          },
        })
      );
    }
  }, []);

  const onCreate = () => {
    if (verifPassword !== password) {
      toast.error("Password mismatch!");
      return;
    }
    dispatch(
      postUser.request({
        data: {
          email,
          password,
          username,
        },
        onFailure: () => {},
        onSuccess: () => {
          history.replace("/users");
          toast.success("User created!");
        },
      })
    );
  };

  const onUpdate = () => {
    if (verifPassword !== password) {
      toast.error("Password mismatch!");
      return;
    }
    dispatch(
      updateUser.request({
        id: id,
        data: {
          password,
          username,
        },
        onFailure: () => {},
        onSuccess: () => {
          history.replace("/users");
          toast.success("User updated!");
        },
      })
    );
  };

  return (
    <div>
      <Card>
        <form
          className="lg:w-1/3"
          autoComplete="new-password"
          onSubmit={(e) => {
            e.preventDefault();
            if (id) {
              onUpdate();
            } else {
              onCreate();
            }
          }}
        >
          <div className="block text-gray-700 dark:text-gray-400">
            <span>Username</span>
            <Input
              placeholder="Username"
              autoComplete="new-password"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {!id ? (
            <div className="mt-4 block text-gray-700 dark:text-gray-400">
              <span>Email Address</span>
              <Input
                placeholder="Email Address"
                autoComplete="new-password"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          ) : null}

          <div className="mt-4 block text-gray-700 dark:text-gray-400">
            <span>Password</span>
            <Input
              type="password"
              autoComplete="new-password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-4 block text-gray-700 dark:text-gray-400">
            <span>Confirm Password</span>
            <Input
              autoComplete="new-password"
              type="password"
              placeholder="******"
              value={verifPassword}
              onChange={(e) => setVerifPassword(e.target.value)}
            />
          </div>

          <div className="flex gap-4 mt-6">
            <Link to="/users" className="flex-1 ">
              <Button className="w-full bg-blueGray-200 hover:bg-blueGray-300 text-blueGray-900">
                Cancel
              </Button>
            </Link>
            <Button className="flex-1" disabled={!valid}>
              Create
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateUser;
