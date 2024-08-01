import Clock from "react-clok";

export default function Home() {
  return (
    <div>
      <Clock
        mark={{
          number: {
            show: true,
            fontSize: "30px",
          },
        }}
      />
    </div>
  );
}
