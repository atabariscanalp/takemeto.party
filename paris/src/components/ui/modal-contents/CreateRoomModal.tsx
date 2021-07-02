import React, { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import Image from "next/image";
import { Tag } from "../../../graphql/types";
import { RoomTag } from "../rooms/RoomTag";

interface Error {
  key?: string;
  message: string;
  errCode?: number;
}

export const CreateRoomModal: React.FC = () => {
  const [roomName, setRoomName] = useState("");
  const [roomTag, setRoomTag] = useState<keyof typeof Tag>(null);
  const [isSecStage, setSecStage] = useState(false);
  const [roomNameErr, setRoomNameErr] = useState<Error>(null);
  const [roomTagErr, setRoomTagErr] = useState<Error>(null);

  const onRoomNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
    if (!e.target.value)
      setRoomNameErr({
        message: `${e.target.name} can't be null`,
      });
    else setRoomNameErr(null);
  };

  const onRoomTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomTag(Tag[e.target.value]);
    if (!e.target.value)
      setRoomTagErr({
        key: "null",
        message: `${e.target.name} can't be null`,
      });
    else setRoomTagErr(null);
  };

  const gotoSecStage = () => {
    if (!roomName)
      setRoomNameErr({
        message: "Room Name Field can't be null",
      });
    else if (!roomTag)
      setRoomTagErr({
        message: "Room Tag Field can't be null",
      });
    else if (!roomNameErr && !roomTagErr) setSecStage(true);
  };

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setRoomTag(e.currentTarget.firstChild.textContent as keyof typeof Tag);
    if (roomTagErr?.key === "null") setRoomTagErr(null);
  };

  if (isSecStage)
    return (
      <div className={"w-full h-full flex justify-center items-start"}>
        <span>sec stage</span>
        <span>{roomName}</span>
        <span>{roomTag}</span>
      </div>
    );

  return (
    <div className={"w-full h-full flex justify-center items-start"}>
      <div
        className={
          "flex flex-col justify-center items-start w-full h-full pl-4"
        }
      >
        <Input
          label={"Room Name"}
          name={"Room Name Field"}
          placeholder={"e.g. Jazz Lovers"}
          value={roomName}
          onChange={onRoomNameChange}
          error={roomNameErr}
        />
        <Input
          label={"Room Tag"}
          name={"Room Tag Field"}
          placeholder={"e.g. JAZZ"}
          value={roomTag}
          onChange={onRoomTagChange}
          error={roomTagErr}
        />
        <div className={"flex mb-5"}>
          <RoomTag tag={"JAZZ"} onClick={onClick} />
          <RoomTag tag={"PUNK"} onClick={onClick} />
          <RoomTag tag={"ROCK"} onClick={onClick} />
        </div>
        <Button size={"medium"} className={"w-20"} onClick={gotoSecStage}>
          Continue
        </Button>
      </div>
      <div className={"flex justify-self-end h-full"}>
        <Image src={"/ipod.png"} alt={"img"} width={300} height={500} />
      </div>
    </div>
  );
};
