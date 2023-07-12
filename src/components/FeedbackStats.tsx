import { useFeedbackStorage } from "../hooks/FeedbackStore";

export default function FeedbackStats() {
  const feedback = useFeedbackStorage();

  const feedbackCount = feedback.data.length;
  const feedbackAverage =
    feedback.data.reduce((a, { rating }) => a + rating, 0) / feedbackCount;
  return (
    <>
      <div className="flex justify-between items-center font-merriweather font-semibold text-white">
        <h1>{`${feedbackCount} Reviews`}</h1>
        <h1>{`Average score: ${feedbackAverage}`}</h1>
      </div>
    </>
  );
}
