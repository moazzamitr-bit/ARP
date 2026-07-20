import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo-mark" aria-label="Al Raed Pioneers home">
      <span className="logo-arp">ARP</span>
      <span className="logo-divider" />
      <span className="logo-name">
        AL RAED
        <br />
        PIONEERS
      </span>
      <span className="sr-only">Al Raed Pioneers, since 1969</span>
    </Link>
  );
}
