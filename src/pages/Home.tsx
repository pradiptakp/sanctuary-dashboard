import React from "react";
import { Card } from "../components/Card";

const Home = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-800 to-blue-600">
          <div>
            <div>Hello Sherly</div>
          </div>
        </Card>
        <Card className="col-span-2 row-span-2">
          <div>test?</div>
        </Card>
        <Card>
          <div>test?</div>
        </Card>
        <Card>
          <div>test?</div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
