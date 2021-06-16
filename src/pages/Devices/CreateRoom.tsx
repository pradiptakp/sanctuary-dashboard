import React from "react";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import Input from "../../components/Input";

export const CreateRoom = () => {
  const [roomName, setRoomName] = React.useState("");
  const [roomDescription, setRoomDescription] = React.useState("");

  return (
    <div>
      <Card>
        <div className="lg:w-1/3">
          <div className="block text-gray-700 dark:text-gray-400">
            <span>Room Name</span>
            <Input
              placeholder="Room Name"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
          </div>
          <div className="mt-4 block text-gray-700 dark:text-gray-400">
            <span>Room Description</span>
            <Input
              placeholder="Room Name"
              value={roomDescription}
              onChange={(e) => setRoomDescription(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <Button className="flex-1 mt-6 bg-blueGray-200 hover:bg-blueGray-300 text-blueGray-900">
              Cancel
            </Button>
            <Button className="mt-6 flex-1">Create</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CreateRoom;
