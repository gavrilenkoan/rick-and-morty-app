import { redirect } from "next/navigation";

function Page() {
  // remove
  void redirect("/characters");
  return null;
}

export default Page