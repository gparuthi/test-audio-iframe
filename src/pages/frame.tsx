import { useRouter } from "next/router";
import DeviceList from "../components/DeviceList";

export default function Frame() {
  const groupId = (useRouter().query.groupId as string) || "";
  return (
    <>
      hi in frame 2 {groupId}
      <DeviceList deviceId={groupId} />
    </>
  );
}
