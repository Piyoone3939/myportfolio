import { portfolioData } from "@/data/portfolio";
import SectionContainer from "./layout/SectionContainer";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <SectionContainer id="skills">
      <div className="py-20 md:px-10 lg:px-20 grid md:grid-cols-[300px_1fr] gap-12">
        
        {/* Header Column */}
        <div>
           <span className="text-blue-600 font-mono text-sm tracking-widest mb-4 block">EXPERTISE</span>
           <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-6">Skills</h2>
           <p className="text-gray-600 dark:text-gray-400 font-light text-lg">
             My technical toolkit and proficiency levels across different domains.
           </p>
        </div>

        {/* Content Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-gray-50 dark:bg-gray-900/50 p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-colors group">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-black dark:border-white pb-2 inline-block">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 text-sm font-mono text-gray-700 dark:text-gray-300 rounded-sm group-hover:border-blue-500/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
