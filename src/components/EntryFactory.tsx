import React from "react";
import { SwapiTypes } from "../models";
import EntryField from "./EntryField";

export interface EntryStyles {
  EntryContainer: string;
  Cat: string;
  TitleName: string;
  DataContainer: string;
  Field: string;
  Label: string;
  Data: string;
}

export const defaultStyles = {
  EntryContainer:
    "bg-mlt-dark-3/70 px-6 py-4 rounded-3xl bg-blend-hard overflow-hidden text-mlt-gray-4",
  Cat: "text-4xl text-mlt-yellow-primary mb-2",
  TitleName: "text-2xl my-4 text-mlt-gray-6",
  DataContainer: "",
  Field: "text-lg mt-2",
  Label: "text-mlt-gray-2 inline-block",
  Data: "font-semibold inline-block ml-2"
};

export const capitalize = (input: any): string => {
  // console.log(input);
  const str = String(input).trim().replace(/_/g, " ") ?? "Unknown";
  if (!str) return "Unknown";
  return str
    .split(" ")
    .map((s) => `${s[0].toUpperCase()}${s.slice(1)}`)
    .join(" ");
};

interface Props {
  data: SwapiTypes;
  styles?: EntryStyles;
  fields: string[];
}

const EntryFactory: React.FC<Props> = ({ data, styles = defaultStyles, fields }) => {
  const returnField = (field: string, i: number): JSX.Element => {
    const name: string = field;
    const value: string = data[field];
    return <EntryField key={i} name={name} value={value} styles={styles} />;
  };

  return (
    <div className={`entry-container ${styles.EntryContainer}`}>
      <h2 className={styles.Cat}>{capitalize(data.category)}</h2>
      <div className="entry-data">
        <div className={styles.TitleName}>{capitalize(data.title ?? data.name)}</div>
        <div className={styles.DataContainer}>
          {fields.map((field, i) => returnField(field, i))}
        </div>
      </div>
    </div>
  );
};

export default EntryFactory;
