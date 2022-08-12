import { useRouter } from "next/router";
import DeviceList from "../components/DeviceList";

export default function Frame() {
  const selected = (useRouter().query.selected as string) || "";
  return (
    <>
      hi in frame 2 {selected}
      <DeviceList selected={selected} />
    </>
  );
}
