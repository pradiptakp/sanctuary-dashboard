/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row } from "react-table";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import { Card } from "../../components/Card";
import { Table } from "../../components/Table";
import { deleteUser, getUsers } from "../../redux/actions/userActions";
import { User } from "../../types";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2";
import { RootState } from "../../redux/store";

export const Users = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const [users, setUsers] = React.useState<User[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    dispatch(
      getUsers.request({
        onFailure: (err) => {
          toast.error(err.message);
          setLoading(false);
        },
        onSuccess: (res) => {
          setUsers(res);
          setLoading(false);
        },
      })
    );
  };

  const onDelete = (id: string) => {
    Swal.fire({
      title: "Delete User?",
      text: "User will be deleted, are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: `Delete`,
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        dispatch(
          deleteUser.request({
            id: id,
            onSuccess: () => {
              toast.success("User deleted!");
              fetchUsers();
            },
            onFailure: (err) => {
              toast.error(err);
            },
          })
        );
      }
    });
  };

  const renderRowSubComponent = React.useCallback(
    ({ row }: { row: Row<object> }) => (
      <pre
        style={{
          fontSize: "10px",
        }}
      >
        <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
      </pre>
    ),
    []
  );

  return (
    <div className="pb-8">
      {loading ? (
        <div className="h-40 flex justify-center items-center">
          <ClipLoader size={40} color={"#123abc"} />
        </div>
      ) : (
        <Card>
          <div className="flex justify-end mb-4">
            <Link to="/users/create-user">
              <Button>
                <i className="fas fa-plus text-white mr-4" /> New User
              </Button>
            </Link>
          </div>
          <Table
            columns={[
              { Header: "Email", accessor: "email" },
              { Header: "Username", accessor: "username" },

              {
                Header: "Actions",
                id: "expander", // It needs an ID
                Cell: ({ row }) => {
                  return (
                    // Use Cell to render an expander for each row.
                    // We can use the getToggleRowExpandedProps prop-getter
                    // to build the expander.
                    <div className="row space-x-2 w-16">
                      {/* <Button {...row.getToggleRowExpandedProps()}>
                    <i className="fas fa-eye" />
                  </Button> */}
                      <Link
                        to={`/users/edit-user/${(row.original as User).id}`}
                      >
                        <Button>
                          <i className="fas fa-pencil-alt" />
                        </Button>
                      </Link>
                      {user &&
                      user.userData.id === (row.original as User).id ? null : (
                        <Button
                          onClick={() => {
                            onDelete((row.original as User).id);
                          }}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          <i className="fas fa-trash" />
                        </Button>
                      )}
                    </div>
                  );
                },
              },
            ]}
            data={users}
            renderRowSubComponent={renderRowSubComponent}
          />
        </Card>
      )}
    </div>
  );
};

export default Users;
