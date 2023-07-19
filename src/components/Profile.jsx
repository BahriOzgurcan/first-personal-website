const Profile = () => {
  return (
    <div className="flex flex-col w-4/5 pt-10 pb-[2.62rem] border-t-[1px] border-[#BAB2E7]">
      <h2 className="mb-7">Profile</h2>
      <div className="flex flex-row w-4/5">
        <div className="w-1/2">
          <h3 className="mb-7">Profile</h3>
          <ul>
            <li>
              Dogum Tarihi         <span>Gun/Ay/Yil</span>
            </li>
            <li>
              Dogum Tarihi         <span>Gun/Ay/Yil</span>
            </li>
            <li>
              Dogum Tarihi         <span>Gun/Ay/Yil</span>
            </li>
            <li>
              Dogum Tarihi         <span>Gun/Ay/Yil</span>
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <h3 className="mb-7">About Me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, deserunt ut consequatur dolorem omnis excepturi libero
            repellendus natus aspernatur cumque. Autem ipsa provident soluta
            magni libero recusandae quia quos consequatur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
