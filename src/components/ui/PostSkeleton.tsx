import { Card } from "./Card";

export function PostSkeleton() {
  return (
    <Card>
      <div className="flex items-center py-3 px-5 justify-between bg-[#7695EC]/70 animate-pulse">
        {/* Bloco do Título */}
        <div className="h-7 w-2/3 bg-white/50 rounded-md"></div>

        <div className="flex gap-4">
          <div className="h-6 w-6 bg-white/50 rounded-md"></div>
          <div className="h-6 w-6 bg-white/50 rounded-md"></div>
        </div>
      </div>

      <div className="px-5 py-4 flex flex-col gap-4 animate-pulse">
        <div className="flex justify-between items-center">
          <div className="h-5 w-32 bg-gray-300 rounded-md"></div>
          <div className="h-4 w-24 bg-gray-300 rounded-md"></div>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <div className="h-4 w-full bg-gray-300 rounded-md"></div>
          <div className="h-4 w-full bg-gray-300 rounded-md"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded-md"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </Card>
  );
}
