import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

const sampleUsers = [
  { id: 1, name: "Amit Sharma", email: "amit@example.com", phone: "+91 9876543210" },
  { id: 2, name: "Neha Singh", email: "neha@example.com", phone: "+91 9123456780" },
  { id: 3, name: "Rahul Verma", email: "rahul@example.com", phone: "+91 9988776655" },
  { id: 4, name: "Aisha Khan", email: "aisha@example.com", phone: "+44 7700 900123" },
];

const Users = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sampleUsers;
    return sampleUsers.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="page">
      <div className="panel">
        <div className="panel-header">
          <h2>Users</h2>
          <input
            className="search"
            placeholder="Search by name or email"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="users-grid">
          {filtered.map(user => (
            <Link to={`${user.id}`} key={user.id} className="user-card">
              <div className="avatar">{user.name.split(" ").map(n=>n[0]).slice(0,2).join("")}</div>
              <div>
                <div className="u-name">{user.name}</div>
                <div className="u-email">{user.email}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
