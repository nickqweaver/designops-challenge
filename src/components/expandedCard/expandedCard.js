import React from "react";
import { Card } from "../card/card";
import { Avatar } from "../avatar/avatar";
import { Text } from "../text/text";
import { Stat } from "../stat/stat";
import "./expandedUserCard.css";

export const ExpandedUserCard = ({ user }) => {
  return (
    <Card width="360px" height="546px">
      <div className="innerContent">
        <div className="profileHeading">
          <Avatar size="large" image={user.profileImage} />
          <div className="nameContainer">
            <Text tag="h2">{`${user.firstName} ${user.lastName}`}</Text>
          </div>
        </div>
        <div className="statisticsContainer">
          <Stat title={"Followers"} statistic={user.followers.length} />
          <Stat title={"Posts"} statistic={user.posts} />
          <Stat title={"Following"} statistic={user.following.length} />
        </div>
        <div className="topFriendsContainer">
          <div className="titleContainer">
            <Text tag="h2">Top Friends</Text>
          </div>
          <div className="topFriendsList">
            {/* Map over the top 5 rated friends in the users following array and return the following for each: */}
            {/* <div className="topFriend" key={follow.id}>
              <Text Text tag="span">{follow.name}</Text>
              <Avatar size="small" image={follow.profileImage} />
            </div> */}
          </div>
        </div>
      </div>
    </Card>
  );
};
