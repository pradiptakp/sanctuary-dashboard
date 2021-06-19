/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import Input from "../../components/Input";
import { useDispatch } from "react-redux";
import { getRoom, postRoom, updateRoom } from "../../redux/actions/roomActions";
import { useHistory, useParams, Link } from "react-router-dom";
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
          toast.success("Room created!");
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
          <div className="flex gap-4 mt-6">
            <Link to="/rooms" className="flex-1 ">
              <Button
                type="button"
                className="flex-1  bg-blueGray-200 hover:bg-blueGray-300 text-blueGray-900"
              >
                Cancel
              </Button>
            </Link>
            <Button type="submit" className="flex-1" disabled={!roomName}>
              {params.id ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateRoom;
