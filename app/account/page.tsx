
import React from "react";
import styles from "Cv.module.css";
import Image from "next/image";
import HomeButton from "../components/HomeButton";
import { MongoClient, ObjectId } from "mongodb";

export type User = {
    id: ObjectId;
    name: string;
    dateJoined: Date;
}

// export const getUser = async(context) => {
//     const mongoClient = new MongoClient(process.env.DB_CONNECTION_STRING as string);

//     const data = await mongoClient
//         .db()
//         .collection("Users")
//         .find()
//         .toArray();

//         console.log(data);

//         const result = await fetch("https://185.205.225.227/32/api/customers/");
// }
const Account: React.FC = () => {
  return (
    <div className={styles.Cv}>
      
    </div>
  );
};

export default Account;
