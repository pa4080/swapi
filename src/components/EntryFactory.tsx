import React from "react";
import { SwapiTypes } from "../models";
import { capitalize, defaultStyles, EntryStyles } from "./EntryFactoryHelpers";
import EntryField from "./EntryField";

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
      {data.category ? (
        <>
          <h2 className={styles.Cat}>{capitalize(data.category)}</h2>
          <div className="entry-data">
            <div className={styles.TitleName}>
              {capitalize(data.title ?? data.name)}
            </div>
            <div className={styles.DataContainer}>
              {fields.map((field, i) => returnField(field, i))}
            </div>
          </div>
        </>
      ) : (
        <h2 className={styles.Cat}>Jumping through hyperspace...</h2>
      )}
    </div>
  );
};

export default EntryFactory;
