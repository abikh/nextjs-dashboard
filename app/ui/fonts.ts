import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  subsets: ["latin"], // ✅ specify at least one subset
  weight: ["400", "700"], // or whatever weights you're using
  preload: true, // this is true by default, but you can leave it in
});
