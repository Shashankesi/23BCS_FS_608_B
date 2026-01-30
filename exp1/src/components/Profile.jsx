import { useOutletContext } from "react-router-dom";

const Profile = () => {
  const { user } = useOutletContext();

  return (
    <div>
      <h4>Profile</h4>
      <dl className="profile-list">
        <dt>Name</dt>
        <dd>{user.name}</dd>
        <dt>Email</dt>
        <dd>{user.email}</dd>
        <dt>Phone</dt>
        <dd>{user.phone}</dd>
        <dt>Role</dt>
        <dd>{user.role}</dd>
      </dl>
    </div>
  );
};

export default Profile;
