import React from "react";
import Button from "../elements/button/Button";
import { Outlet, useNavigate } from "react-router-dom";
import { Content } from "../components/index";

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
