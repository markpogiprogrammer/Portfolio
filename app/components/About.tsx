import Image from "next/image";

export default function About(): React.JSX.Element {

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-2xl max-w-6xl mx-auto">
            
          </p>
        </div>
        
        {/* Notable Achievements Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Notable Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Achievement 1 */}
            <div className="bg-gradient-to-br from-violet-900/40 to-violet-900/20 border border-violet-600/30 rounded-lg p-6 hover:border-violet-500/60 transition duration-300">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-white mb-2">Capstone 1 & 2</h3>
              <p className="text-white/80">Nominated for Best Thesis</p>
            </div>

            {/* Achievement 2 */}
            <div className="bg-gradient-to-br from-violet-900/40 to-violet-900/20 border border-violet-600/30 rounded-lg p-6 hover:border-violet-500/60 transition duration-300">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-white mb-2">Dean's Lister</h3>
              <p className="text-white/80">3x Dean's List Recognition</p>
            </div>

            {/* Achievement 3 */}
            <div className="bg-gradient-to-br from-violet-900/40 to-violet-900/20 border border-violet-600/30 rounded-lg p-6 hover:border-violet-500/60 transition duration-300">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-white mb-2">Academic Excellence</h3>
              <p className="text-white/80">Consistent Academic Achievement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

