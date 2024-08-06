export function convertToRadians(deg: number) {
  return (deg * Math.PI) / 180;
}

export function classNames(...classnames: string[]): string {
  return classnames.filter(Boolean).join(" ");
}
