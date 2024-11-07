import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FoldingLogos } from "@/components/landing/FoldingLogos";
import { FiArrowUpRight } from "react-icons/fi";
import DoubleScrollingLogos from "@/components/landing/DoubleScrollingLogos";

const TiltChipLink = () => {
  return (
    <div className="mb-1.5 w-fit rounded-full bg-zinc-600">
      <a
        href="#"
        rel="nofollow"
        className="flex origin-top-left items-center rounded-full border border-zinc-900 bg-white p-0.5 text-xs transition-transform hover:-rotate-2"
      >
        <span className="rounded-full bg-[#FF6154] px-2 py-0.5 font-medium text-white">
          HEY!
        </span>
        <span className="ml-1.5 mr-1 inline-block">
          We're live on Product Hunt!
        </span>
        <FiArrowUpRight className="mr-2 inline-block" />
      </a>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between bg-white/80 px-4 backdrop-blur-[40px]">
        <div className="flex items-center gap-2">
          <img
            src="/maven-logo.svg"
            alt="Maven Logo"
            className="h-6 w-6 rounded-lg"
          />
          <span className="text-lg font-bold">Maven</span>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/login" className="text-sm font-bold hover:underline">
            Login
          </Link>
          <Button
            className="bg-black/3 hover:bg-black/5 text-sm"
            variant="ghost"
            asChild
          >
            <Link to="/signup">
              Get Started
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex min-h-screen flex-col items-center gap-8 pb-8 px-4">
        <div className="pt-24 flex flex-col items-center">
          <div className="w-full max-w-full overflow-hidden">
            <div className="px-4 sm:px-0">
              <DoubleScrollingLogos />
            </div>
          </div>
          
          <div className="flex max-w-[863px] flex-col gap-4 mt-8 px-4">
            <h1 className="text-2xl sm:text-4xl font-bold leading-tight tracking-tight text-center break-words">
              Use Maven To Build & Market{" "}
              <span className="gradient-text">Your Next Big Thing</span>
            </h1>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button
                className="h-10 px-4 sm:h-12 sm:px-6 bg-[#1f1f1f] text-sm sm:text-base hover:bg-black w-auto"
                asChild
              >
                <Link to="/signup">
                  Start Building Today
                </Link>
              </Button>
              <TiltChipLink />
            </div>
          </div>

          <div className="relative w-full max-w-[600px] overflow-hidden rounded-lg mt-8 sm:mt-12 px-4">
            <img
              src="/images/screen.png"
              alt="Team Collaboration"
              className="h-auto w-full"
            />

            <div className="absolute right-4 top-3 h-6 w-[100px] overflow-hidden rounded-full backdrop-blur-[10px]">
              <div className="bg-black/20 h-full w-full" />
            </div>

            <div className="absolute left-4 top-3 h-6 w-6 overflow-hidden rounded-full backdrop-blur-[10px]">
              <div className="bg-black/20 h-full w-full" />
            </div>

            <Card className="absolute left-4 top-[60px] h-[100px] w-[80px] sm:h-[150px] sm:w-[100px] overflow-hidden bg-[rgba(51,51,51,0.8)] backdrop-blur-[40px]">
              <img
                src="/images/chat.svg"
                alt="Developer Profile"
                className="h-full w-full object-cover"
              />
            </Card>

            <Card className="absolute right-4 top-[40px] h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] bg-white/80 backdrop-blur-[50px]">
              <img
                src="/images/board column.svg"
                alt="Project Stats"
                className="h-full w-full object-cover"
              />
            </Card>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 sm:mt-12 w-full max-w-[1000px] px-4">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-2 sm:p-3">
                <div className="h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center text-lg sm:text-xl">
                  {feature.icon}
                </div>
                <h3 className="text-center text-xs sm:text-sm font-bold">
                  {feature.title}
                </h3>
                <p className="text-center text-[10px] sm:text-xs text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <FoldingLogos />
        </div>

        <Button
          className="h-10 px-4 sm:h-12 sm:px-6 bg-[#1f1f1f] text-sm sm:text-base hover:bg-black w-auto"
          asChild
        >
          <Link to="/signup">
            Get Started Now
          </Link>
        </Button>
      </main>
    </div>
  );
};

const features = [
  {
    title: "Student Talent",
    description: "Connect with ambitious student developers and marketers",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
      <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
      <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clipRule="evenodd" />
    </svg>,
  },
  {
    title: "Affordable Rates",
    description: "Get quality work at student-friendly prices",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
      <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
      <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
      <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
    </svg>,
  },
  {
    title: "Fast Development",
    description: "Launch your projects faster than ever before",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
      <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
      <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
    </svg>,
  },
  {
    title: "Quality Work",
    description: "Vetted students with proven skills and passion",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
      <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
    </svg>,
  },
];

export default Index;