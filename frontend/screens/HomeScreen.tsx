import Image from "next/image";

export default function HomeScreen() {
  return (
    <main className="flex min-h-full flex-1 flex-col items-center justify-center bg-black px-6 py-16">
      <Image
        src="/logo.png"
        alt="JVG Trámites Migratorios"
        width={420}
        height={220}
        priority
        className="h-auto w-full max-w-md"
      />
      <p className="mt-8 text-center text-sm tracking-[0.2em] text-zinc-400 uppercase">
        Sitio en construcción
      </p>
    </main>
  );
}
