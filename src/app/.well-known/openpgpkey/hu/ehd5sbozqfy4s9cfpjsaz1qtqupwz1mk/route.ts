import misc from "../../../../../data/misc.json";

export async function GET() {
  const res = await fetch(misc.pgpKeyUrl, 
    {
      cache: "force-cache",
      next: { revalidate: 3600 }
    }
  );
  const data = await res.json();
  return Response.json(data);
};