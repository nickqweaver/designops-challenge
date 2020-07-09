import React from "react";
import { Text } from "../text/text";
import "./stat.css";

export const Stat = ({ title, statistic }) => {
  return (
    <div className="statContainer">
      <Text tag="h3">{title}</Text>
      <Text tag="p">{statistic}</Text>
    </div>
  );
};
