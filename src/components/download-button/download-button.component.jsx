import classes from "./download-button.module.scss";
import { BiCloudDownload } from "react-icons/bi";

const DownloadButton = ({ styles }) => {
  const handleDownload = () => {
    const url = process.env.PUBLIC_URL + "/pdf/Resume-Ilia-Pachulia.pdf";
    const a = document.createElement("a");
    a.href = url;
    a.download = "Resume-Ilia-Pachulia.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <button onClick={handleDownload} className={classes[styles]}>
      <span>RESUME</span>
      <BiCloudDownload className={classes.icon} />
    </button>
  );
};

export default DownloadButton;
