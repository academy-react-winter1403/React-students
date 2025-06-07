import { NavLink, useNavigate } from "react-router-dom";

const ProfileSidebar = () => {

  const navigate = useNavigate();

  const profileItems = [
  { label: "اطلاعات حساب کاربری", path: "/profile/account" },
  { label: "عکس ها", path: "/profile/avatar" },
  { label: "محل سکونت", path: "/profile/location" },
  { label: "لینک ها", path: "/profile/link" },
   ];


  return (
    <div className="flex-grow-[1] p-4 border-l">
      <h2 className="font-[bold] mb-4">پروفایل من</h2>
      <div className="flex flex-col gap-7 pr-4 pt-6 font-[medium] text-[14px] text-[#707070]">
        {profileItems.map((item, index) => (
        <div
          key={index}
          onClick={() => navigate(item.path)}
          className="cursor-pointer hover:text-blue-600 transition">
          {item.label}
        </div>
      ))}
      </div>
    </div>
  )
}

export default ProfileSidebar
