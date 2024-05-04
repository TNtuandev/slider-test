import SliderComponent from "@/component/SliderComponent";

const dataSlider = [
  {
    name: "Slider 1",
  },
  {
    name: "Slider 2",
  },
  {
    name: "Slider 3",
  },
  {
    name: "Slider 4",
  },
  {
    name: "Slider 5",
  },
  {
    name: "Slider 6",
  },
];

export default function Home() {
  return <SliderComponent data={dataSlider} />
}
