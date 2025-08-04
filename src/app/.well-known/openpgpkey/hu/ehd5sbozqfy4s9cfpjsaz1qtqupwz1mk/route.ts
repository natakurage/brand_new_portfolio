import misc from "../../../../../data/misc.json";

export function GET() {
  return fetch(misc.pgpKeyUrl);
};