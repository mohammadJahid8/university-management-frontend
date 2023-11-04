import React from "react";

type ActionBarProps = {
  title?: string;
  children?: React.ReactElement | React.ReactNode;
};

const ActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <div
      style={{
        marginBottom: "10px",
      }}
    >
      <h1>{title}</h1>
      <div
        style={{
          display: "flex",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ActionBar;
