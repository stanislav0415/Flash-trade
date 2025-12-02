export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#222831]">
      <div className="text-center">
        <div
          className="animate-spin inline-block w-10 h-10 border-4 rounded-full mb-4"
          style={{
            borderTopColor: "#76ABAE",
            borderRightColor: "#222831",
            borderBottomColor: "#76ABAE",
            borderLeftColor: "#222831",
          }}
        ></div>
        <p className="text-[#EEEEEEEE] text-lg">Loading...</p>
      </div>
    </div>
  );
}
