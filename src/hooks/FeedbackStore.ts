import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const datas = [
  {
    id: 1,
    rating: 8,
    review: "Good shit, good shit. I approb",
  },
  {
    id: 2,
    rating: 9,
    review: "Random shit looks good to me",
  },
];

type Feedback = {
  id: number;
  rating: number;
  review: string;
};

type FeedbackFunction = {
  data: Feedback[];
  addFeedback: (rating: number, review: string) => void;
  removeFeedback: (id: number) => void;
};

export const useFeedbackStorage = create<FeedbackFunction>()((set) => ({
  data: datas,
  addFeedback: (rating: number, review: string) => {
    const newFeedback: Feedback = {
      id: parseInt(uuidv4()),
      rating,
      review,
    };
    set((state) => ({ data: [...state.data, newFeedback] }));
  },
  removeFeedback: (id: number) => {
    set((state) => ({
      data: state.data.filter((feedback) => feedback.id !== id),
    }));
  },
}));
