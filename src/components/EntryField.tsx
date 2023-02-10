import React from "react";
import {
  capitalize,
  composeSuffix,
  EntryStyles,
  numberWithCommas
} from "./EntryFactoryHelpers";

interface Props {
  name: string;
  value: string | JSX.Element | JSX.Element[];
  styles: EntryStyles;
}

const EntryField: React.FC<Props> = ({ name, value, styles }) => {
  const suffix: string = composeSuffix(name);

  if (name === "release_date") {
    value = String(new Date(String(value)).toUTCString().replace(/00:.*$/, ""));
  }

  if (String(value).match(/\d{4}$/)) value = numberWithCommas(String(value));

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
