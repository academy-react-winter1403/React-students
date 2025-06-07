// components/ProfileLayout.jsx
import ProfileSidebar from "../../StudentPanel/stuPanelProfile/ProfileSidebar";
import { Outlet } from "react-router-dom";


const ProfileLayout = () => {
  return (
    <div className="flex">
        <ProfileSidebar />
      <div className="h-[577px] flex-grow-[13]">
        <Outlet />
      </div>
    </div>
  )
}

export default ProfileLayout