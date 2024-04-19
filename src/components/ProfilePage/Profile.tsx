import { ProfileInfo } from "../ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <section className="container">
      <div className="py-12 sm:py-16 lg:py-20">
        <h1 className="text-center text-6xl font-bold">PROFILE</h1>
        <div className="mt-8 mx-auto">
          <ProfileInfo />
        </div>
      </div>
    </section>
  );
};
export default Profile;
