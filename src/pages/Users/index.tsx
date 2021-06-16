import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { Card } from "../../components/Card";
import { Table } from "../../components/Table";

export const Users = () => {
  return (
    <div className="">
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
            { Header: "Username", accessor: "username" },
            { Header: "Email", accessor: "email" },
            { Header: "Description", accessor: "description" },
          ]}
          data={[
            {
              username: "angga",
              email: "anggaa.pradipta@gmail.com",
              description: "",
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default Users;
