import React from "react";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import Input from "../../components/Input";

export const CreateUser = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [verifPassword, setVerifPassword] = React.useState("");
  const [description, setDescription] = React.useState("");
  // const [admin, setAdmin] = React.useState(false);
  const [valid, setValid] = React.useState(false);

  React.useEffect(() => {
    if (
      username &&
      username !== "" &&
      email &&
      email !== "" &&
      password &&
      password !== "" &&
      verifPassword &&
      verifPassword !== "" &&
      password === verifPassword
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
    return () => {};
  }, [username, password, verifPassword, email]);

  return (
    <div>
      <Card>
        <form className="lg:w-1/3" autoComplete="new-password">
          <div className="block text-gray-700 dark:text-gray-400">
            <span>Username</span>
            <Input
              placeholder="Username"
              autoComplete="new-password"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-4 block text-gray-700 dark:text-gray-400">
            <span>Email Address</span>
            <Input
              placeholder="Email Address"
              autoComplete="new-password"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
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
          <div className="block text-gray-700 dark:text-gray-400">
            <span>Description (Optional)</span>
            <Input
              autoComplete="new-password"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <Button className="flex-1 mt-6 bg-blueGray-200 hover:bg-blueGray-300 text-blueGray-900">
              Cancel
            </Button>
            <Button className="mt-6 flex-1" disabled={!valid}>
              Create
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateUser;
