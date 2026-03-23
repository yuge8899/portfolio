const skills = {
  design: ['Figma', 'Sketch', 'Adobe XD', 'Photoshop', 'Illustrator'],
  development: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Next.js'],
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-20">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">专业技能</h2>
        </div>

        {/* 技能分类 */}
        <div className="flex flex-wrap justify-center gap-20">
          {/* 设计技能 */}
          <div className="w-[300px]">
            <h3 className="text-lg font-semibold text-white mb-6">设计</h3>
            <div className="space-y-4">
              {skills.design.map((skill, index) => (
                <div
                  key={skill}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text-secondary">{skill}</span>
                    <span className="text-text-secondary text-sm">
                      {Math.floor(70 + Math.random() * 30)}%
                    </span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent-glow rounded-full transition-all duration-1000"
                      style={{ width: `${70 + Math.random() * 30}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 开发技能 */}
          <div className="w-[300px]">
            <h3 className="text-lg font-semibold text-white mb-6">开发</h3>
            <div className="space-y-4">
              {skills.development.map((skill, index) => (
                <div
                  key={skill}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text-secondary">{skill}</span>
                    <span className="text-text-secondary text-sm">
                      {Math.floor(60 + Math.random() * 40)}%
                    </span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent-glow to-pink-500 rounded-full transition-all duration-1000"
                      style={{ width: `${60 + Math.random() * 40}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills