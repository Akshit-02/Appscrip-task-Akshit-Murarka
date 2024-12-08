import Image from "next/image";
import "./AnnouncementBar.css";

const announcements = [
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
];

const AnnouncmentBar = () => {
  return (
    <div className="announcement-bar">
      {announcements.map((text, index) => (
        <div key={index} className="announcement">
          <Image
            src={"/icons/announcement.svg"}
            alt="announcement-icon"
            height={16}
            width={16}
          />
          {text}
        </div>
      ))}
    </div>
  );
};

export default AnnouncmentBar;
