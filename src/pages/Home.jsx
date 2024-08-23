import React from "react";
import GroupsList from "../component/GroupsList";
import FriendList from "../component/FriendList";
import Blocklist from "../component/blocklist";

const Home = () => {
  return (
    <section className="py-9 flex  w-full justify-around">
      <div>
      <GroupsList/>
      <FriendList/>
      </div>
      <div>
      <GroupsList/>
      <FriendList/>
      </div>
      <div>
      <GroupsList/>
      <Blocklist/>
      </div>
    </section>
  );
};

export default Home;
