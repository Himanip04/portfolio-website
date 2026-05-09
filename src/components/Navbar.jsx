export default function Navbar() {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-md bg-[#0f0a25]/70 border border-[#3c1cff] px-6 py-3 rounded-full flex gap-6 text-sm">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Journey</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}