import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="text-center">
      Built by{" "}
      <Link className="text-link" href="https://nhanluong.dev">
        Nhan Luong
      </Link>{" "}
      with 🍠
    </div>
  );
}
