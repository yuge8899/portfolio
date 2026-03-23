const projects = [
  {
    id: 1,
    title: '移动端应用设计',
    description: '为金融科技公司设计的移动端应用',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
  },
  {
    id: 2,
    title: '企业官网设计',
    description: '为科技公司设计的企业官网',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-20">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">精选作品</h2>
          <p className="text-text-secondary">这里展示了我最近的一些设计项目</p>
        </div>

        {/* 项目卡片 */}
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card-glass rounded-2xl p-4 w-[380px] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* 项目图片 */}
              <div className="rounded-xl overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[200px] object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* 项目信息 */}
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-text-secondary text-sm">{project.description}</p>
            </div>
          ))}
        </div>

        {/* 查看更多 */}
        <div className="text-center mt-12">
          <button className="glass px-8 py-3 rounded-lg text-text-secondary hover:text-white transition-colors">
            查看更多作品
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects