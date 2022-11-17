import React from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {hourSelector, minuteState} from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);

  const onMinutesChange = (evt: React.FormEvent<HTMLInputElement>) => {
    console.log(evt.currentTarget.value);
    setMinutes(+evt.currentTarget.value);
  };
  const onHoursChange = (evt: React.FormEvent<HTMLInputElement>) => {
    setHours(+evt.currentTarget.value);
  };
  return (
    <>
      <h1>🚀 BOOM!</h1>
      <input
        value={minutes}
        type="number"
        placeholder="Minutes"
        onChange={onMinutesChange}
      />
      <input
        value={hours}
        type="number"
        placeholder="Hours"
        onChange={onHoursChange}
      />
    </>
  );
}

export default App;
