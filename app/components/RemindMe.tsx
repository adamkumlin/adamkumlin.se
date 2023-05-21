"use client";
import React, { useState } from "react";
import styles from "../../styles/RemindMe.module.css";
import Image from "next/image";

// RemindMe component

const RemindMe: React.FC = () => {

  interface Reminder {
    message: string;
    date: string;
    time: string | string[];
    id: number;
    showOptions: boolean;
  }

  const [reminders, setReminders] = useState<Reminder[]>([]);
  const date = new Date();
  const todaysDate = date.toLocaleDateString("se-SE");
  let currentTime: string | string[] = date.getHours() + ":" + date.getMinutes();
  const Id = Date.now();

  function handleShowOptions(id: number) {

    const updatedReminders = reminders.map(reminder => {
      if (reminder.id === id) {
        return { ...reminder, showOptions: !reminder.showOptions };
      }
      return reminder;
    })

    setReminders(updatedReminders);

  }

  function addReminder() {
    setReminders((current) => [...current, { message: "", date: todaysDate, time: currentTime, id: Id, showOptions: false }]);
  }

  function deleteReminder(id: number) {
    const updatedReminders = reminders.filter((reminder) => reminder.id !== id);

    setReminders(updatedReminders);
  }

  return (
    <div className={styles.RemindMe}>
      <button onClick={() => addReminder()}>New reminder</button>
      <div className={styles.reminders}>
        {reminders.map((reminder) => {
          return (
            <div className={styles.reminder} key={reminder.id}>
              <input
                type="text"
                className={styles.reminderInput}
                onChange={(e) => (reminder.message = e.target.value)}
              />
              <label htmlFor={reminder.id.toString()}><Image className={styles.checkboxImage} height="30" width="30" src={"/three-dots-icon.svg"} alt="dwd"/></label>
              <input type="checkbox" className={styles.optionsButton} checked={reminder.showOptions} onChange={() => handleShowOptions(reminder.id)} id={reminder.id.toString()}/>
  
              <div className={reminder.showOptions ? styles.shown : styles.hidden}>
                <ul>
                  <li><button onClick={() => deleteReminder(reminder.id)}>Delete</button></li>
                </ul>
              </div>
              <p>
                {reminder.date}, kl. {reminder.time}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RemindMe;
