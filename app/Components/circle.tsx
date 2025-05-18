export default function Circle({ size = "h-9 w-9", color = "bg-black" }) {
  return (
    <div className={`${size} ${color} mr-7 rounded-full`}></div>
  );
}
