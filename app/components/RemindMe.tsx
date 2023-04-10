"use client";
import React, { useState } from "react";
import styles from "../../styles/RemindMe.module.css";

// RemindMe component

const RemindMe: React.FC = () => {

  interface Reminder {
    message: string;
    date: string;
    time: string
    id: number;
  }

  const [reminders, setReminders] = useState<Reminder[]>([]);
  const date = new Date();
  const todaysDate = date.toLocaleDateString("se-SE");
  const currentTime = date.getHours() + ":" + date.getMinutes();
  const Id = Date.now();

  function addReminder() {
    setReminders(current => [...current, {message: "", date: todaysDate, time: currentTime, id: Id}])
  }

  function deleteReminder(id: number) {

    const updatedReminders = reminders.filter(reminder => reminder.id !== id);

    setReminders(updatedReminders)
  }

  return (
    <div className={styles.RemindMe}>

        <button onClick={() => addReminder()}>New reminder</button>
        <div className="reminders">
          {reminders.map(reminder => {
            return (
              <div className="reminder" key={reminder.id}>
                <button onClick={() => deleteReminder(reminder.id)}>-</button>
                <input type="text" onChange={(e) => reminder.message = e.target.value}/>
                <p>{reminder.date}, kl. {reminder.time}</p>
              </div>
            )
          })}
          
        </div>
    </div>
  );
};

export default RemindMe;
