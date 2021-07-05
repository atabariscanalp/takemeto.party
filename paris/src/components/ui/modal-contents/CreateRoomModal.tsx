import React, { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import Image from "next/image";
import { Tag } from "../../../graphql/types";
import { RoomTag } from "../rooms/RoomTag";
import { useMutation } from "@apollo/client";
import { CREATE_ROOM } from "../../../graphql/mutations/room";
import { useRouter } from "next/router";

interface Error {
  key?: string;
  message: string;
  errCode?: number;
}

export const CreateRoomModal: React.FC = () => {
  const [roomName, setRoomName] = useState("");
  const [roomTag, setRoomTag] = useState<keyof typeof Tag | "">("");
  const [isSecStage, setSecStage] = useState(false);
  const [roomNameErr, setRoomNameErr] = useState<Error>(null);
  const [roomTagErr, setRoomTagErr] = useState<Error>(null);
  const [isPrivate, setPrivate] = useState(false);
  const [roomDescription, setDescription] = useState("");

  const [createRoomMutation, { loading, error }] = useMutation(CREATE_ROOM);

  const router = useRouter();

  const onRoomNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
    if (!e.target.value)
      setRoomNameErr({
        message: `${e.target.name} can't be null`,
      });
    else setRoomNameErr(null);
  };

  const onRoomTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Tag[e.target.value]) setRoomTag(Tag[e.target.value]);
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

  const createRoom = async () => {
    const res = await createRoomMutation({
      variables: {
        addRoomArgs: {
          _name: roomName,
          _tag: roomTag,
          _isPrivate: isPrivate,
          _description: roomDescription,
        },
      },
    });
    router.push(`room/${encodeURIComponent(res.data.createRoom.id)}`);
  };

  if (isSecStage)
    return (
      <div className={"w-full h-full flex justify-center items-start"}>
        <div
          className={
            "flex flex-col items-start justify-start w-full h-full pl-9"
          }
        >
          <h1 className={"text-2xl font-medium my-5"}>Room Features</h1>
          <label>description</label>
          <textarea
            value={roomDescription}
            onChange={(e) => setDescription(e.target.value)}
            className={"border-2 border-black mb-6 p-3"}
            maxLength={255}
            cols={40}
            rows={3}
          />
          <div className={"flex items-center mb-5"}>
            <input //TODO: add password section if private
              id={"checkbox"}
              type={"checkbox"}
              name={"isPrivate"}
              checked={isPrivate}
              onChange={() => setPrivate(!isPrivate)}
              className={"mr-3"}
              value={""}
            />
            <label className={"text-xl"} htmlFor={"checkbox"}>
              private
            </label>
          </div>
          <Button size={"medium"} className={"w-20"} onClick={createRoom}>
            Create
          </Button>
        </div>
      </div>
    );

  return (
    <div className={"w-full h-full flex justify-center items-start"}>
      <div
        className={
          "flex flex-col justify-center items-start w-full h-full pl-4"
        }
      >
        <h1 className={"text-2xl font-medium relative bottom-11"}>
          Create A Room
        </h1>
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
        <Button
          size={"medium"}
          className={"w-20"}
          onClick={gotoSecStage}
          loading={loading}
        >
          Continue
        </Button>
      </div>
      <div className={"flex justify-self-end h-full"}>
        <Image src={"/ipod.png"} alt={"img"} width={300} height={500} />
      </div>
    </div>
  );
};
