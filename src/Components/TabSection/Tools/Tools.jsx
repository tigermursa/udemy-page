import React from 'react';

const Tools = () => {
  return (
    <div className="bg-white p-6 text-black text-start md:ms-36 ms-0 pb-64">
      <h2 className="text-xl font-bold">Learning Tools</h2>
      <p className="mb-4">
        Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals.
        Set time aside to learn and get reminders using your learning scheduler.
      </p>

      <h3 className="text-lg font-bold">Learning Reminders</h3>
      <p className="mb-4">
        Calendar events: Learning reminders can be set up using your Google Calendar, Apple Calendar, or Outlook.
      </p>

      <h3 className="text-lg font-bold">Push Notifications</h3>
      <p className="mb-4">
        Don't want to schedule time blocks? Set a learning reminder to get push notifications from the Udemy mobile app.
      </p>

      <div className="flex items-center mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">
          Text me a link to download the app
        </button>
        <div>
          <p className="text-sm text-gray-500">Phone country code</p>
          <p>+1 (United States)</p>
        </div>
      </div>

      <div className="flex items-center">
        <div>
          <p className="text-sm text-gray-500">Phone number</p>
          <p>123 456 7890</p>
        </div>
        <p className="text-sm text-gray-500 ml-2">
          By providing your phone number, you agree to receive a one-time automated text message with a link to get the app.
          Standard messaging rates may apply.
        </p>
      </div>
    </div>
  );
};

export default Tools;
