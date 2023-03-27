import React from "react";
import styled from "styled-components";
const HeaderDashboard = () => {
  return (
    <div>
      <DashboardHeader>
        <div>Dashboard</div>
        <div>
          <span>Home / Dashboard</span>
        </div>
      </DashboardHeader>
    </div>
  );
};

const DashboardHeader = styled.div`
  display: flex;
`;

export default HeaderDashboard;
