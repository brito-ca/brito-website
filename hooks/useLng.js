import { useRouter } from "next/router";

const useLng = () => {
  const router = useRouter();
  const lng = router.pathname.split("/")[1];
  let isEn = true;
  const isPr = lng === "pt";
  const isFr = lng === "fr";
  if (isPr || isFr) {
    isEn = false;
  }

  return { isEn, isPr, isFr };
};

export default useLng;
