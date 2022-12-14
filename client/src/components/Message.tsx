import TreeLine from "./TreeLine";
import { Note } from "../types";

type Props = {
  note: Note;
  index: number;
};

export default function Message({ note, index }: Props) {
  return (
    <div
      className={`group mb-2 shrink-0 rounded-lg flex justify-center items-center drop-shadow-md bg-zinc-700 w-48 h-20 relative`}
    >
      <TreeLine trunk={index === 0} />

      <div className="text-sm text-gray-200 font-bold">
        {note.message}
        <br />
        <p className="text-gray-800 text-right text-xs font-semibold mt-1">
          {new Date(note.createdAt).getMonth()}/
          {new Date(note.createdAt).getDate()}/
          {new Date(note.createdAt).getFullYear()}
        </p>
      </div>
    </div>
  );
}
