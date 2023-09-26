import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center text-8xl">
        PWA with nextjs
      </div>
      <Image
        src={"/images/my-photo.jpg"}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </main>
  );
}
