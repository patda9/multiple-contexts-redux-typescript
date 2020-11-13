import React from "react";

interface IProps {
  title: string;
}

export const Book: React.FC<IProps> = ({ title }) => {
  return <div>
    {title}
  </div>;
};
