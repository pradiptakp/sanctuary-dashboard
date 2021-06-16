/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import Input from "../../components/Input";
import { useDispatch } from "react-redux";
import { getRoom, postRoom, updateRoom } from "../../redux/actions/roomActions";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const CreateRoom = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<{ id?: string }>();

  const [roomName, setRoomName] = React.useState("");
  const [roomDescription, setRoomDescription] = React.useState("");

  React.useEffect(() => {
    if (params.id) {
      dispatch(
        getRoom.request({
          id: params.id,
          onSuccess: (res) => {
            setRoomName(res.name);
            setRoomDescription(res.description);
          },
          onFailure: (err) => {
            toast.error(err);
            history.replace("/devices");
          },
        })
      );
    }
  }, []);

  const onCreate = () => {
    dispatch(
      postRoom.request({
        data: {
          name: roomName,
          description: roomDescription,
        },
        onSuccess: () => {
          toast.success("Room added!");
          history.replace("/devices");
        },
        onFailure: () => {},
      })
    );
  };

  const onUpdate = () => {
    if (params.id) {
      dispatch(
        updateRoom.request({
          id: params.id,
          data: {
            name: roomName,
            description: roomDescription,
          },
          onSuccess: () => {
            toast.success("Room updated!");
            history.replace("/devices");
          },
          onFailure: () => {},
        })
      );
    }
  };

  return (
    <div>
      <Card>
        <form
          className="lg:w-1/3"
          onSubmit={(e) => {
            e.preventDefault();
            if (params.id) {
              onUpdate();
            } else {
              onCreate();
            }
          }}
        >
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
            <Button
              type="button"
              onClick={() => history.goBack()}
              className="flex-1 mt-6 bg-blueGray-200 hover:bg-blueGray-300 text-blueGray-900"
            >
              Cancel
            </Button>
            <Button type="submit" className="mt-6 flex-1" disabled={!roomName}>
              {params.id ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateRoom;
