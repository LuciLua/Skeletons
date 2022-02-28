import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SkeletonProfile from "../../Skeletons/SkeletonProfile";
import styles from "./user.module.scss";

function User() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      setProfile(data);
    }, 2000);
  });

  return (
    <div className={styles.userDetails}>
      <h1>User Details</h1>
      <hr />
      {profile && (
        <div className={styles.details}>
          <div className={styles.detailsText}>
            <h2>{profile.username}</h2>
            <p> {profile.email} </p>
            <p>
              <Link href={profile.website} passHref>
                {profile.website}
              </Link>
            </p>
          </div>
          <div className={styles.detailsPhoto}>
            <div className={styles.photo}>
              <Image alt="userProfilePhoto" layout="fill" src={"/lucii.png"} />
            </div>
          </div>
        </div>
      )}

      {!profile && <SkeletonProfile />}
    </div>
  );
}

export default User;
