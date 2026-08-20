export default function Footer() {
  return (
    <footer className="font-term flex flex-col items-center justify-between gap-2 border-t border-[#242E28] bg-[#0F1512] px-6 py-6 text-[12px] text-[#6E786F] md:flex-row md:px-10 lg:px-[6vw]">
      <span>
        laiba@dev:~$ echo © {new Date().getFullYear()} Laiba Arshad
      </span>

      <span>Full-Stack Engineer</span>
    </footer>
  );
}