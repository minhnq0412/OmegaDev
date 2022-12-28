import React from "react";
import Content from "../components/Content";
import Button from "../elements/Button";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Content content={`Dashboard`}>
      <div className="flex my-5">
        <Button onClick={() => navigate(`/dashboard/subscription`)}>
          Subcription
        </Button>
        <Button onClick={() => navigate(`/dashboard/revenue`)}>Revenue</Button>
      </div>
      <Outlet></Outlet>
    </Content>
  );
};

export default Dashboard;
