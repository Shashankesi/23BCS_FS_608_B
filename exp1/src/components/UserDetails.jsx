import { Link, Outlet, useParams } from "react-router-dom";

const fakeDb = {
  1: { id: 1, name: "Amit Sharma", email: "amit@example.com", phone: "+91 9876543210", role: "Admin" },
  2: { id: 2, name: "Neha Singh", email: "neha@example.com", phone: "+91 9123456780", role: "Member" },
  3: { id: 3, name: "Rahul Verma", email: "rahul@example.com", phone: "+91 9988776655", role: "Member" },
  4: { id: 4, name: "Aisha Khan", email: "aisha@example.com", phone: "+44 7700 900123", role: "Guest" },
};

const UserDetails = () => {
  const { id } = useParams();
  const user = fakeDb[id];

  if (!user) {
    return <div className="page"><div className="panel">User not found</div></div>;
  }

  return (
    <div className="page">
      <div className="panel">
        <div className="detail-header">
          <div className="avatar large">{user.name.split(" ").map(n=>n[0]).slice(0,2).join("")}</div>
          <div className="detail-meta">
            <h3>{user.name}</h3>
            <div className="muted">{user.role} • {user.email}</div>
          </div>
        </div>

        <nav className="detail-nav">
          <Link to="profile">Profile</Link>
          <Link to="settings">Settings</Link>
        </nav>

        <div className="detail-body">
          <Outlet context={{ user }} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
