import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
interface Props {
  onSend: (msg: string) => void;
}
export default function MessageSend({ onSend }: Props) {
  const [value, setValue] = useState("");

  return (
    <Container>
      <textarea value={value} onChange={(el) => setValue(el.target.value)} />
      <button onClick={() => onSend(value)}>Send</button>
    </Container>
  );
}
