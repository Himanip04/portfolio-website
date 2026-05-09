export default function Contact({ dark }) {
  return (
    <section className="mt-12">
      <h3 className="text-xl font-bold text-white">Contact</h3>

      <div className="mt-6">
        <div className="bg-[#0f0a25] border border-[#3c1cff] rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_20px_#3c1cff]">

          <p className="text-gray-300 mb-4">
            Feel free to reach out for opportunities, collaboration, or just a quick chat 👋
          </p>

          <div className="space-y-3 text-sm">

            <p>
              📧{" "}
              <a
                href="mailto:himanipant333@gmail.com"
                className="text-[#a78bfa] hover:underline"
              >
              himaniPant333@gmail.com
              </a>
            </p>

            <p>
              💻{" "}
              <a
                href="https://github.com/Himanip04"
                target="_blank"
                rel="noreferrer"
                className="text-[#a78bfa] hover:underline"
              >
                GitHub Profile
              </a>
            </p>

            <p>
              🔗{" "}
              <a
                href="https://www.linkedin.com/in/himani-pant-982a67223/"
                target="_blank"
                rel="noreferrer"
                className="text-[#a78bfa] hover:underline"
              >
                LinkedIn Profile
              </a>
            </p>

          </div>

          {/* CTA BUTTON */}
          <button className="mt-5 w-full bg-[#7c5cff] py-2 rounded-lg text-white hover:opacity-90">
            Let's Connect →
          </button>

        </div>
      </div>
    </section>
  );
}