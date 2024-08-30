"use client";
import React, { useRef, useState } from "react";
import timeZones from "@/constants/timeZones";
import EventsTable from "@/components/EventsTable";
import IEvent from "@/types/IEvent";

const initialState = {
  eventName: "",
  date: "",
  timeZone: "",
  startTime: "",
  endTime: "",
  description: "",
  videoLink: "",
  bannerImage: null,
};

const initialErrorState = {
  eventName: "",
  date: "",
  timeZone: "",
  startTime: "",
  endTime: "",
};

const requiredFields = [
  {
    name: "eventName",
    error: "Event name is required",
  },
  {
    name: "date",
    error: "Date is required",
  },
  {
    name: "timeZone",
    error: "Time zone is required",
  },
  {
    name: "startTime",
    error: "Start time is required",
  },
  {
    name: "endTime",
    error: "End time is required",
  }
];

const InitialEvents = [
  {
    "eventName": "Madeson Cherry",
    "date": "1970-05-04",
    "timeZone": "UTC-07:00",
    "startTime": "22:13",
    "endTime": "22:28",
    "description": "Reprehenderit quia ",
    "videoLink": "https://www.zanukoben.mobi",
    "bannerImage": null
  },
]

const Home = () => {
  const [events, setEvents] = useState<IEvent[]>(InitialEvents);
  const [formState, setFormState] = useState<IEvent>(initialState);
  const [errorState, setErrorState] = useState(initialErrorState);
  const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(null);
  const fileRef = useRef<any>(null);

  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormState((prev) => prev = { ...prev, bannerImage: file });
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => prev = { ...prev, [name]: value });
  };

  const checkRequiredFieldsMissing = () => {
    let errorOccured = false;

    for (let key in formState) {
      let isRequired = null;

      for (let field of requiredFields) {
        if (field.name === key) {
          isRequired = field;
          break;
        }
      }

      if (isRequired && !formState[key]) {
        setErrorState(prev => ({ ...prev, [key]: isRequired.error }));
        errorOccured = true;
      }
    }

    return errorOccured;
  };

  const resetFormState = () => {
    setErrorState(initialErrorState);
    setFormState(initialState);
    setSelectedEventIndex(null);
    fileRef.current.value = "";
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (checkRequiredFieldsMissing()) return;

    if (selectedEventIndex === null) {
      setEvents(prev => [...prev, formState]);
    }
    else {
      setEvents((prev) => {
        const currentEvents = [...prev];
        currentEvents[selectedEventIndex] = formState;
        return currentEvents;
      })
    }

    resetFormState();
  };

  const handleDeleteEvent = (index: number) => {
    setEvents((prevEvents) => prevEvents.filter((_, i) => i !== index));
  };

  const handleEditEvent = (index: number) => {
    setSelectedEventIndex(index);
    setFormState(events[index]);
  };

  return (
    <div className="w-full h-[calc(100vh-80px)] px-8">
      <form onSubmit={handleSubmit} className="w-full">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Create an event</h2>

        <div className="mb-4">
          <label
            htmlFor="eventName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300">Event name</label>
          <input
            type="text"
            name="eventName"
            id="eventName"
            value={formState.eventName}
            onChange={onChangeHandler}
            placeholder="Your event name"
            className="mt-1 block w-full px-3 py-2 border dark:border-[#212220] rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm dark:bg-[#212220] dark:text-gray-200"
          />
          {errorState.eventName && <p className="text-red-500">{errorState.eventName}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              value={formState.date}
              onChange={onChangeHandler}
              className="mt-1 block w-full px-3 py-2 text-gray-400 border dark:border-[#212220] rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm dark:bg-[#212220]"
            />
            {errorState.date && <p className="text-red-500">{errorState.date}</p>}
          </div>
          <div>
            <label
              htmlFor="timeZone"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300">Time zone</label>
            <select
              name="timeZone"
              id="timeZone"
              value={formState.timeZone}
              onChange={onChangeHandler}
              className="mt-1 block w-full px-3 py-2 text-gray-400 border dark:border-[#212220] rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm dark:bg-[#212220]"
            >
              <option value="">Select time zone</option>
              {timeZones.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.label}
                </option>
              ))}
            </select>
            {errorState.timeZone && <p className="text-red-500">{errorState.timeZone}</p>}
          </div>
          <div>
            <label
              htmlFor="startTime"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300">Start time</label>
            <input
              type="time"
              name="startTime"
              id="startTime"
              value={formState.startTime}
              onChange={onChangeHandler}
              className="mt-1 block w-full px-3 py-2 text-gray-400 border dark:border-[#212220] rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm dark:bg-[#212220]"
            />
            {errorState.startTime && <p className="text-red-500">{errorState.startTime}</p>}
          </div>
          <div>
            <label
              htmlFor="endTime"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300">End time</label>
            <input
              type="time"
              name="endTime"
              id="endTime"
              value={formState.endTime}
              onChange={onChangeHandler}
              className="mt-1 block w-full px-3 py-2 text-gray-400 border dark:border-[#212220] rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm dark:bg-[#212220]"
            />
            {errorState.endTime && <p className="text-red-500">{errorState.endTime}</p>}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
          <textarea
            name="description"
            id="description"
            rows={3}
            value={formState.description}
            onChange={onChangeHandler}
            placeholder="Add event description..."
            className="resize-none mt-1 block w-full px-3 py-2 border dark:border-[#212220] rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm dark:bg-[#212220] dark:text-gray-200"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="videoLink"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300">Video</label>
          <input
            type="url"
            name="videoLink"
            id="videoLink"
            value={formState.videoLink}
            onChange={onChangeHandler}
            placeholder="Add video link..."
            className="mt-1 block w-full px-3 py-2 border dark:border-[#212220] rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm dark:bg-[#212220] dark:text-gray-200"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="banner"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300">Banner</label>
          <input
            ref={fileRef}
            type="file"
            name="banner"
            id="banner"
            onChange={handleBannerUpload}
            className="mt-1 block w-full text-gray-500 dark:text-gray-400"
            accept="image/*"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className=" px-4 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800"
          >
            {selectedEventIndex === null ? "Create Event" : "Update Event"}
          </button>

          <button
            type="button"
            className="px-4 py-2 text-gray-500  dark:text-white hover:bg-gray-500 hover:text-white bg-inherit dark:hover:bg-gray-600 rounded-md"
            onClick={resetFormState}
          >
            Cancel
          </button>
        </div>
      </form>

      <h2 className="my-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Events</h2>

      <EventsTable events={events} onDelete={handleDeleteEvent} onEdit={handleEditEvent} />
    </div>
  );
};

export default Home;
