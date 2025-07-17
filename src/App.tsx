import "./App.css";
import footer from "./assets/mobile/image-footer.jpg";
import hero from "./assets/tablet/image-hero.png";
import logo from "./assets/logo.svg";

function App() {
  return (
    <>
      <div className="p-8 flex flex-col items-center ">
        <img src={logo} className="h-[28px] m-12" alt="Meet logo" />

        <img src={hero} className="w-full" alt="Meet hero" />

        <h1 className="font-[Red Hat Display] text-[2.5rem] font-bold text-center w-[15rem]">
          Group Chat for Everyone
        </h1>

        <p className="font-[Red Hat Display]  text-[1.125]  text-[#87879D] text-center py-6">
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>

        <button className="bg-[#4D96A9]  p-4 px-10 text-white font-bold text-[1rem] rounded-[1.825rem] text-center ">
          Download <span className=" text-[#8FE3F9] font-bold">v1.3</span>
        </button>
        <button className="bg-[#855FB1]  p-4 px-10 text-white font-bold text-[1rem] rounded-[1.825rem] text-center mt-4">
          What is it?
        </button>

        <div className="flex flex-col items-center mt-8">
          <div className="inline-block h-[80px] w-0.5 bg-[#D1D1DF]"></div>
          <div className="w-[56px] h-[56px] bg-white border-[#D1D1DF] border-2 rounded-full text-[#87879D] text-[1rem]  font-bold font-[Red Hat Display] flex items-center justify-center ">
            02
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-6 my-16 ">
          <img src={footer} className="w-full rounded-lg" alt="Vite " />
          <img src={footer} className="w-full rounded-lg" alt="Vite " />
          <img src={footer} className="w-full rounded-lg" alt="Vite " />
          <img src={footer} className="w-full rounded-lg" alt="Vite " />
        </div>

        <h3 className="font-[Red Hat Display] text-[#4D96A9] text-[0.75rem] font-bold text-center uppercase tracking-[4px]">
          Built for modern use
        </h3>
        <h2 className="font-[Red Hat Display] text-[2.5rem] font-bold text-center">
          Smarter meetings, all in one place
        </h2>
        <p className="font-[Red Hat Display]  text-[1.125]  text-[#87879D] text-center mb-8">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>

      <div className="pt-16">
        <div className=" bg-[url(./assets/mobile/image-footer.jpg)] bg-cover from-[#4D96A9] mt-8   bg-[#4D96A9] bg-blend-soft-light">
          <div className="relative top-[-7rem] mt-8">
            <div className="flex flex-col items-center ">
              <div className="inline-block h-[80px] w-0.5 bg-[#D1D1DF]"></div>
              <div className="w-[56px] h-[56px] bg-white border-[#D1D1DF] border-2 rounded-full text-[#87879D] text-[1rem]  font-bold font-[Red Hat Display] flex items-center justify-center ">
                02
              </div>
            </div>
          </div>
          <div className="p-8 flex flex-col items-center">
            <h1 className="font-[Red Hat Display] text-[2.5rem] text-white font-bold text-center w-[15rem]">
              Experience more together
            </h1>

            <p className="font-[Red Hat Display]  text-[1.125]  text-white text-center py-6">
              Stay connected with reliable HD meetings and unlimited one-on-one
              and group video sessions.
            </p>

            <button className="bg-[#855FB1]  p-4 px-10 text-white font-bold text-[1rem] rounded-[1.825rem] text-center ">
              Download <span className=" text-[#D9B8FF] font-bold">v1.3</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
