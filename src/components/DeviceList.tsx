import { useEffect, useState } from "react";
import styled from "styled-components";
const Row = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 3px solid;
  border-color: ${(props) => (props.isSelected ? "red" : "black")};
`;
const Column = styled.div``;

interface Props {
  selected: string;
  setSelected?: (id: string) => void;
}
export default function DeviceList({ selected, setSelected }: Props) {
  const [mics, setMics] = useState<MediaDeviceInfo[]>([]);

  useEffect(() => {
    function getStream() {
      return navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    }
    async function onLoad() {
      try {
        const stream = await getStream();
        console.log("Got stream", stream, stream.getAudioTracks()[0].label);
      } catch (err) {
        console.error("Issue getting mic", err);
      }
      const deviceInfos = await navigator.mediaDevices.enumerateDevices();
      const mics = [];
      for (let i = 0; i !== deviceInfos.length; ++i) {
        let deviceInfo = deviceInfos[i];
        if (deviceInfo.kind === "audioinput") {
          mics.push(deviceInfo);
          let label = deviceInfo.label || "Microphone " + mics.length;
          //   console.log("Mic ", label + " " + deviceInfo.deviceId);
          const option = document.createElement("option");
          option.value = deviceInfo.deviceId;
          option.text = label;
        }
      }
      setMics(mics);
    }
    onLoad();
  }, []);
  return (
    <>
      {mics.map((m) => (
        <Row key={m.deviceId} isSelected={m.label === selected}>
          <Column>{m.groupId}</Column>
          <Column>{m.label}</Column>
          <Column>{m.kind}</Column>
          <Column>{m.deviceId}</Column>
          {setSelected && (
            <button
              onClick={() => {
                setSelected(m.label);
              }}
            >
              Set
            </button>
          )}
        </Row>
      ))}
    </>
  );
}
