import { Loader2 } from "lucide-react";

function LoadingPage() {
  return (
    <Loader2
      size={140}
      className="col-span-12 mx-auto my-auto h-[calc(100vh-80px)] animate-spin text-project-dark-blue"
    />
  );
}

export default LoadingPage;
