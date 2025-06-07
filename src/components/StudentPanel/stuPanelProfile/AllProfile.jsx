import ProfileLayout from "./ProfileLayout";
import { Routes, Route, Link } from "react-router-dom";
import AccountInfo from "./Profile/AccountInfo";
import AvatarSettings from "./Profile/AvatarSettings";
import Location from "./Profile/locations";
import LinkPage from "./Profile/LinkPage";


const AllProfile = () => {
  return (
    <Routes>
      <Route element={<ProfileLayout />}>
        <Route path="account" element={<AccountInfo />} />
        <Route path="avatar" element={<AvatarSettings />} />
        <Route path="location" element={<Location />} />
        <Route path="link" element={<LinkPage />} />
      </Route>
    </Routes>
  )
}

export default AllProfile
