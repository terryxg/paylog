import React from "react";

type headerPropType = {
  title: string;
  user: string;
  alert: string;
};

const HeaderBox = ({ title, user, alert }: headerPropType) => {
  return (
    <div>
      {" "}
      <h2 className="text-2xl">
        {`${title.slice(0, 1).toUpperCase() + title.slice(1)}`},{" "}
        {`${user.slice(0, 1).toUpperCase() + user.slice(1)}`}
      </h2>
      <p>{alert}</p>
    </div>
  );
};

export default HeaderBox;
