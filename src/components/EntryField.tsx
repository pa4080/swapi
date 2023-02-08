import React, { useEffect, useState } from "react";
import { EntryStyles } from "./EntryFactory";
import { capitalize } from "./EntryFactory";

interface Props {
  name: string;
  value: string | JSX.Element | JSX.Element[];
  styles: EntryStyles;
}

const EntryField: React.FC<Props> = ({ name, value, styles }) => {
  const suffix: string = ((): string => {
    switch (name.toLowerCase()) {
      case "height":
        return " cm";
      case "mass":
        return " kg";
      case "cargo_capacity":
        return " kg";
      case "length":
        return " m";
      case "cost_in_credits":
        return " credits";
      case "diameter":
        return " km";
      case "orbital_period":
        return " unified galaxy days";
      case "rotation_period":
        return " unified galaxy days";
      case "average_height":
        return " cm";
      case "average_lifespan":
        return " years";
      default:
        return "";
    }
  })();

  if (name === "release_date") {
    value = String(new Date(String(value)).toUTCString().replace(/00:.*$/, ""));
  }

  return (
    <div className={styles.Field}>
      <span
        className={`${styles.Label} ${name === "films" ? "block" : "inline-block"}`}
      >
        {capitalize(name)}:
      </span>{" "}
      <span className={styles.Data}>
        {typeof value === "string"
          ? capitalize(value)
          : Array.isArray(value)
          ? value.map((item, i, arr) => {
              return (
                <span key={i} className="inline-block mr-2">
                  {item}
                  {i !== arr.length - 1 ? ", " : ""}
                </span>
              );
            })
          : value}
      </span>
      {suffix}
    </div>
  );
};

export default EntryField;
