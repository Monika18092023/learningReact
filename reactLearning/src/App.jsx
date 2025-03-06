import { useEffect, useState } from "react";
import Post from "./Post";
import Counter from "./counter";
import Useeffect_one from "./Useeffect_one";
import Useeffect_cleanUp from "./Useeffect_cleanUp";
import UploadCounter from "./UploadCounter";
import CleanUp from "./cleanUp";
import PostById from "./PostById";
import PhotoApi from "./PhotoApi";
import ToggleMode from "./ToggleMode";
import UserStatus from "./UserStatus";

const App = () => {
 

  return (
    <div>
      <UserStatus/>
      {/* <ToggleMode/> */}
      {/* <PhotoApi/> */}
      {/* <PostById/> */}
      {/* <CleanUp/> */}
      {/* <Useeffect_cleanUp/> */}
      {/* <Useeffect_one/> */}
      {/* <Post/> */}
      {/* <Counter/> */}
      {/* <UploadCounter/> */}
    </div>
  );
};
export default App;
