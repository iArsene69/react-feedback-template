import { useFeedbackStorage } from "../hooks/FeedbackStore";
import { FormEvent, useState } from "react";

const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function FeedbackForm() {
  const feedback = useFeedbackStorage();
  const [rating, setRating] = useState<number>(10);
  const [review, setReview] = useState<string>("");
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(review.trim().length <= 10) return
    feedback.addFeedback(rating, review);
    setReview("");
    setRating(10);
  };

  const handleInput = () => {
    if (review.trim().length <= 10) {
      setMessage("Text must be at least 10 characters long");
      setBtnDisabled(true);
    } else {
      setMessage("");
      setBtnDisabled(false);
    }
  };
  return (
    <>
      <div className="font-merriweather px-3 py-3 bg-white border my-2 rounded-lg relative">
        <header>
          <h1 className="text-center font-bold text-xl">
            How would you rate react?
          </h1>
        </header>
        <form
          onSubmit={(e) => handleSubmit(e)}
        >
          <ul className="flex justify-around items-center my-7">
            {rates.map((rate, idx) => (
              <li
                className={`relative ${
                  rating === rate
                    ? "bg-[#00d8ff] text-white"
                    : "bg-[#f4f4f4] text-black"
                } w-9 h-9 text-center rounded-full text-base border transition cursor-pointer font-semibold`}
                key={idx}
              >
                <input
                  className="opacity-0 absolute inset-0"
                  type="radio"
                  value={rate}
                  name="rating"
                  id={`num${rate}`}
                  onChange={(e) => setRating(parseInt(e.target.value))}
                />
                <label
                  className="absolute top-1/2 left-1/2 w-10 h-10 px-2 py-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  htmlFor={`num${rate}`}
                >
                  {rate}
                </label>
              </li>
            ))}
          </ul>
          <div className="flex justify-between border border-[#ccc] py-2 px-3 rounded-lg mt-4 ">
            <input
              className="focus:outline-none flex-grow text-base"
              type="text"
              onChange={(e) => {
                handleInput(), setReview(e.target.value);
              }}
              value={review}
              placeholder="Tell us something about react"
            />
            <button
              type="submit"
              disabled={btnDisabled}
              className="text-white border-0 rounded-lg w-24 h-10 cursor-pointer bg-[#00d8ff] disabled:bg-[#05697b] disabled:hover:scale-100 disabled:hover:opacity-100"
            >
              Submit
            </button>
          </div>
          {message !== null && (
            <div className="pt-3 text-center text-red-600">{message}</div>
          )}
        </form>
      </div>
    </>
  );
}
