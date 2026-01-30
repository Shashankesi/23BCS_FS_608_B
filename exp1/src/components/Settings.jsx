import { useOutletContext, useState } from "react";

const Settings = () => {
  const { user } = useOutletContext();
  const [notifications, setNotifications] = useState(true);

  return (
    <div>
      <h4>Settings</h4>
      <div className="settings-row">
        <label>
          <input type="checkbox" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} /> Enable notifications
        </label>
      </div>

      <div className="settings-row">
        <button className="btn-muted">Save settings for {user.name}</button>
      </div>
    </div>
  );
};

export default Settings;
