import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="text-center my-8">
      Built by{" "}
      <Link className="text-link" href="https://nhanluong.dev">
        Nhan Luong
      </Link>{" "}
      with 🍠
    </footer>
  );
}
