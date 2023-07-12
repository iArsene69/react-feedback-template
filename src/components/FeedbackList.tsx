import { useFeedbackStorage } from "../hooks/FeedbackStore";
import { HiXMark } from "react-icons/hi2";

export default function FeedbackList() {
  const feedback = useFeedbackStorage();
  return (
    <>
      {feedback.data.map((list, idx) => {
        return (
          <div
            key={idx}
            className="font-merriweather px-3 py-3 bg-white border my-2 rounded-lg relative"
          >
            <div className="bg-[#00d8ff] rounded-full w-6 h-6 text-center text-white absolute -top-2 -left-2 text-base">
              {list.rating}
            </div>
            <button
              className="absolute top-1 right-2 cursor-pointer bg-none border-none"
              onClick={() => feedback.removeFeedback(list.id)}
            >
              <HiXMark className="w-3 h-3 text-gray-800" />
            </button>
            <p className="text-center text-sm px-4 py-4">{list.review}</p>
          </div>
        );
      })}
    </>
  );
}
